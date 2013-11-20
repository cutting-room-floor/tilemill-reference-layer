# Reference Layer for TileMill

This TileMill plugin adds a custom map as a reference layer to your TileMill projects.

## Installation

The plugin should be available from the Plugins panel in TileMill.

You can also install it manually by cloning this repository into your TileMill plugins directory.The plugins directory for TileMill is located at `~/.tilemill/node_modules`. It will not exist if you have not already installed a plugin. So you may need to create it yourself. You can create the plugins directory and install this plugin manually like:

```sh
mkdir -p ~/.tilemill/node_modules
cd ~/.tilemill/node_modules
git clone https://github.com/mapbox/tilemill-reference-layer.git
```

__Note:__ This plugin is not tested to work with other plugins.

## Use

- Enable the plugin

![](https://f.cloud.github.com/assets/20300/1507626/eaeb09a2-4995-11e3-9bfb-038aa0547da3.png)

- Go to a projects settings, and enter a map ID from your Mapbox.com map in the Mapbox Layer field.

![](https://f.cloud.github.com/assets/20300/1507627/ecdc5ed2-4995-11e3-824f-2a4fda01e9b8.png)

- You can get the map ID from the Project settings on [Mapbox.com](https://www.mapbox.com/editor).
  
![](https://i.cloudup.com/FkgThf6MV4-3000x3000.png)

- Design a map with a transparent `Map` background

- Upload your map to [Mapbox](http://mapbox.com)

- Add your map to a [composite](http://mapbox.com/hosting/compositing/) with your map

- [Share](http://mapbox.com/hosting/embeds-vs-api/) your map!
