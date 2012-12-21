// Extend the Project model schema to allow for extra metadata.
model = models.Project.augment({
    tileJSON: function() {
        return 'http://a.tiles.mapbox.com/v3/' + this.get('_basemap') + '.jsonp';
    }
});

model.prototype.schema.properties._basemap = {
    type: 'string'
};

model.prototype.defaults._basemap = '';
