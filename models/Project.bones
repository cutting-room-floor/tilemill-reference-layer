// Extend the Project model schema to allow for extra metadata.
model = models.Project.augment({
    tileJSON: function(p) {
        var tilejson = p.call(this);
        _.defaults(tilejson, this.get('_basemap') || 
            'http://a.tiles.mapbox.com/v3/mapbox.mapbox-streets.jsonp');
        return tilejson;
    }
});

model.prototype.schema.properties._basemap = {
    type: 'string'
};
