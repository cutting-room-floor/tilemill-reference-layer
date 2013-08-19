// Extend the Project model schema to allow for extra metadata.
model = models.Project.augment({
    mapboxTileJSON: function(mapID) {
        return 'http://a.tiles.mapbox.com/v3/' + mapID + '.jsonp';
    }
});

model.prototype.schema.properties._basemap = {
    type: 'string'
};

model.prototype.defaults._basemap = '';
