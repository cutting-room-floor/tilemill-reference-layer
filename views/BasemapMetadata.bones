view = views.Metadata;

view.prototype.save = function() {
    var attr = Bones.utils.form(this.$('form'), this.model);
    var save = attr._saveProject;
    var error = function(m, e) { new views.Modal(e); };

    // Massage values.
    if (attr.filename) attr.filename = attr.filename + '.' + this.model.get('format');
    if (attr.bounds) attr.bounds = _(attr.bounds.split(',')).map(parseFloat);
    if (attr.center) attr.center = _(attr.center.split(',')).map(parseFloat);
    if (attr.zooms) attr.minzoom = attr.zooms[0];
    if (attr.zooms) attr.maxzoom = attr.zooms[1];
    if (attr.format || attr.format_custom) attr.format = attr.format || attr.format_custom;
    if (attr.height) attr.height = parseInt(attr.height,10);
    if (attr.width) attr.width = parseInt(attr.width,10);
    delete attr.zooms;
    delete attr.format_custom;
    delete attr._saveProject;
    attr = _(attr).reduce(function(memo, val, key) {
        var allowEmpty = ['description', 'attribution', '_basemap'];
        if (val !== '' || _(allowEmpty).include(key)) memo[key] = val;
        return memo;
    }, {});

    // Project settings.
    if (this.model === this.project) {
        if (!this.project.set(attr, {error:error})) return false;
        this.project.save({}, { success:this.success, error:error});
        return false;
    }

    // Exports.
    switch (this.model.get('format')) {
    case 'sync':
        if (!this.model.set({
            id: this.project.id,
            name: this.project.get('name') || this.project.id
        }, {error:error})) return false;
        break;
    case 'mbtiles':
        if (!this.model.set({
            filename: attr.filename,
            bbox: attr.bounds,
            minzoom: attr.minzoom,
            maxzoom: attr.maxzoom
        }, {error:error})) return false;
        break;
    case 'png':
    case 'pdf':
    case 'svg':
        if (!this.model.set({
            filename: attr.filename,
            bbox: attr.bounds,
            width: attr.width,
            height: attr.height
        }, {error:error})) return false;
        break;
    }

    // Just save the export.
    if (!save) return this.model.save({}, this) && false;

    // Save export and then project.
    delete attr.filename;
    delete attr.width;
    delete attr.height;
    if (!this.project.set(attr, {error:error})) return false;
    Bones.utils.serial([
    _(function(next) {
        this.model.save({}, { success:next, error:this.error });
    }).bind(this),
    _(function(next) {
        this.project.save({}, this);
    }).bind(this)]);
    return false;
};

