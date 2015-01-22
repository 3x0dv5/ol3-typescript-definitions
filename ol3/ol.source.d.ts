///<reference path="../lib/definitely-typed/closure-library/closure/goog/structs/map.d.ts"/>
///<reference path="externs/bingmaps.d.ts"/>

declare module ol.source {

    class Source extends Source.__Class { }
    module Source {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.Observable.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for {@link ol.layer.Layer} sources.
             *
             * @constructor
             * @extends {ol.Observable}
             * @fires change Triggered when the state of the source changes.
             * @param {ol.source.SourceOptions} options Source options.
             * @api stable
             */
            constructor(options: SourceOptions);
    
            /**
             * @param {number} resolution Resolution.
             * @param {number} rotation Rotation.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {Object.<string, boolean>} skippedFeatureUids Skipped feature uids.
             * @param {function(ol.Feature): T} callback Feature callback.
             * @return {T|undefined} Callback result.
             * @template T
             */
            forEachFeatureAtPixel<T>(resolution: number, rotation: number, coordinate: ol.Coordinate, skippedFeatureUids: { [key: string]: boolean }, callback: (_0: ol.Feature) => T): any /*T|any (undefined)*/;
    
            /**
             * @return {Array.<ol.Attribution>} Attributions.
             * @api stable
             */
            getAttributions(): ol.Attribution[];
    
            /**
             * @return {string|olx.LogoOptions|undefined} Logo.
             * @api stable
             */
            getLogo(): any /*string|olx.LogoOptions|any (undefined)*/;
    
            /**
             * @return {ol.proj.Projection} Projection.
             * @api
             */
            getProjection(): ol.proj.Projection;
    
            /**
             * @return {Array.<number>|undefined} Resolutions.
             */
            getResolutions(): any /*number[]|any (undefined)*/;
    
            /**
             * @return {ol.source.State} State.
             * @api
             */
            getState(): source.State;
    
            /**
             * @param {Array.<ol.Attribution>} attributions Attributions.
             */
            setAttributions(attributions: ol.Attribution[]): void;
    
            /**
             * @param {string|olx.LogoOptions|undefined} logo Logo.
             */
            setLogo(logo: string): void;
            /**
             * @param {string|olx.LogoOptions|undefined} logo Logo.
             */
            setLogo(logo: olx.LogoOptions): void;
            /**
             * @param {string|olx.LogoOptions|undefined} logo Logo.
             */
            setLogo(logo: any /*undefined*/): void;
    
            /**
             * @param {ol.source.State} state State.
             * @protected
             */
            setState(state: source.State): void;
    
            /**
             * @param {ol.proj.Projection} projection Projetion.
             */
            setProjection(projection: ol.proj.Projection): void;
        }
    }

    class Tile extends Tile.__Class { }
    module Tile {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Source.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for sources providing images divided into a tile grid.
             *
             * @constructor
             * @extends {ol.source.Source}
             * @param {ol.source.TileOptions} options Tile source options.
             * @api
             */
            constructor(options: TileOptions);
    
            /**
             * @protected
             * @type {ol.tilegrid.TileGrid}
             */
            tileGrid: ol.tilegrid.TileGrid;
    
            /**
             * @return {boolean} Can expire cache.
             */
            canExpireCache(): boolean;
    
            /**
             * @param {Object.<string, ol.TileRange>} usedTiles Used tiles.
             */
            expireCache(usedTiles: { [key: string]: ol.TileRange }): void;
    
            /**
             * Look for loaded tiles over a given tile range and zoom level.  Adds
             * properties to the provided lookup representing key/tile pairs for already
             * loaded tiles.
             *
             * @param {Object.<number, Object.<string, ol.Tile>>} loadedTilesByZ A lookup of
             *     loaded tiles by zoom level.
             * @param {function(number, number, number): ol.Tile} getTileIfLoaded A function
             *     that returns the tile only if it is fully loaded.
             * @param {number} z Zoom level.
             * @param {ol.TileRange} tileRange Tile range.
             * @return {boolean} The tile range is fully covered with loaded tiles.
             */
            findLoadedTiles(loadedTilesByZ: { [key: number]: { [key: string]: ol.Tile } }, getTileIfLoaded: (_0: number, _1: number, _2: number) => ol.Tile, z: number, tileRange: ol.TileRange): boolean;
    
            /**
             * @return {number} Gutter.
             */
            getGutter(): number;
    
            /**
             * @param {number} z Z.
             * @param {number} x X.
             * @param {number} y Y.
             * @return {string} Key.
             * @protected
             */
            getKeyZXY(z: number, x: number, y: number): string;
    
            /**
             * @return {boolean} Opaque.
             */
            getOpaque(): boolean;
    
            /**
             * @param {number} z Tile coordinate z.
             * @param {number} x Tile coordinate x.
             * @param {number} y Tile coordinate y.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.proj.Projection=} opt_projection Projection.
             * @return {!ol.Tile} Tile.
             */
            getTile(z: number, x: number, y: number, pixelRatio: number, opt_projection?: ol.proj.Projection): ol.Tile;
    
            /**
             * @return {ol.tilegrid.TileGrid} Tile grid.
             * @api stable
             */
            getTileGrid(): ol.tilegrid.TileGrid;
    
            /**
             * @param {ol.proj.Projection} projection Projection.
             * @return {ol.tilegrid.TileGrid} Tile grid.
             */
            getTileGridForProjection(projection: ol.proj.Projection): ol.tilegrid.TileGrid;
    
            /**
             * @param {number} z Z.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.proj.Projection} projection Projection.
             * @return {number} Tile size.
             */
            getTilePixelSize(z: number, pixelRatio: number, projection: ol.proj.Projection): number;
    
            /**
             * Marks a tile coord as being used, without triggering a load.
             * @param {number} z Tile coordinate z.
             * @param {number} x Tile coordinate x.
             * @param {number} y Tile coordinate y.
             */
            useTile(z: number, x: number, y: number): void;
        }
    }

    class Vector extends Vector.__Class { }
    module Vector {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Source.__Class {
    
            /**
             * @classdesc
             * Provides a source of features for vector layers.
             *
             * @constructor
             * @extends {ol.source.Source}
             * @fires ol.source.VectorEvent
             * @param {olx.source.VectorOptions=} opt_options Vector source options.
             * @api stable
             */
            constructor(opt_options?: olx.source.VectorOptions);
    
            /**
             * Add a single feature to the source.  If you want to add a batch of features
             * at once, call {@link ol.source.Vector#addFeatures source.addFeatures()}
             * instead.
             * @param {ol.Feature} feature Feature to add.
             * @api stable
             */
            addFeature(feature: ol.Feature): void;
    
            /**
             * Add a feature without firing a `change` event.
             * @param {ol.Feature} feature Feature.
             * @protected
             */
            addFeatureInternal(feature: ol.Feature): void;
    
            /**
             * Add a batch of features to the source.
             * @param {Array.<ol.Feature>} features Features to add.
             * @api stable
             */
            addFeatures(features: ol.Feature[]): void;
    
            /**
             * Add features without firing a `change` event.
             * @param {Array.<ol.Feature>} features Features.
             * @protected
             */
            addFeaturesInternal(features: ol.Feature[]): void;
    
            /**
             * Remove all features from the source.
             * @param {boolean=} opt_fast Skip dispatching of {@link removefeature} events.
             * @api stable
             */
            clear(opt_fast?: boolean): void;
    
            /**
             * Iterate through all features on the source, calling the provided callback
             * with each one.  If the callback returns any "truthy" value, iteration will
             * stop and the function will return the same value.
             *
             * @param {function(this: T, ol.Feature): S} callback Called with each feature
             *     on the source.  Return a truthy value to stop iteration.
             * @param {T=} opt_this The object to use as `this` in the callback.
             * @return {S|undefined} The return value from the last call to the callback.
             * @template T,S
             * @api stable
             */
            forEachFeature<T, S>(callback: (_0: ol.Feature) => S, opt_this?: T): any /*S|any (undefined)*/;
    
            /**
             * Iterate through all features whose geometries contain the provided
             * coordinate, calling the callback with each feature.  If the callback returns
             * a "truthy" value, iteration will stop and the function will return the same
             * value.
             *
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {function(this: T, ol.Feature): S} callback Called with each feature
             *     whose goemetry contains the provided coordinate.
             * @param {T=} opt_this The object to use as `this` in the callback.
             * @return {S|undefined} The return value from the last call to the callback.
             * @template T,S
             */
            forEachFeatureAtCoordinate<T, S>(coordinate: ol.Coordinate, callback: (_0: ol.Feature) => S, opt_this?: T): any /*S|any (undefined)*/;
    
            /**
             * Iterate through all features whose bounding box intersects the provided
             * extent (note that the feature's geometry may not intersect the extent),
             * calling the callback with each feature.  If the callback returns a "truthy"
             * value, iteration will stop and the function will return the same value.
             *
             * If you are interested in features whose geometry intersects an extent, call
             * the {@link ol.source.Vector#forEachFeatureIntersectingExtent
             * source.forEachFeatureIntersectingExtent()} method instead.
             *
             * @param {ol.Extent} extent Extent.
             * @param {function(this: T, ol.Feature): S} callback Called with each feature
             *     whose bounding box intersects the provided extent.
             * @param {T=} opt_this The object to use as `this` in the callback.
             * @return {S|undefined} The return value from the last call to the callback.
             * @template T,S
             * @api
             */
            forEachFeatureInExtent<T, S>(extent: ol.Extent, callback: (_0: ol.Feature) => S, opt_this?: T): any /*S|any (undefined)*/;
    
            /**
             * @param {ol.Extent} extent Extent.
             * @param {number} resolution Resolution.
             * @param {function(this: T, ol.Feature): S} f Callback.
             * @param {T=} opt_this The object to use as `this` in `f`.
             * @return {S|undefined}
             * @template T,S
             */
            forEachFeatureInExtentAtResolution<T, S>(extent: ol.Extent, resolution: number, f: (_0: ol.Feature) => S, opt_this?: T): any /*S|any (undefined)*/;
    
            /**
             * Iterate through all features whose geometry intersects the provided extent,
             * calling the callback with each feature.  If the callback returns a "truthy"
             * value, iteration will stop and the function will return the same value.
             *
             * If you only want to test for bounding box intersection, call the
             * {@link ol.source.Vector#forEachFeatureInExtent
             * source.forEachFeatureInExtent()} method instead.
             *
             * @param {ol.Extent} extent Extent.
             * @param {function(this: T, ol.Feature): S} callback Called with each feature
             *     whose geometry intersects the provided extent.
             * @param {T=} opt_this The object to use as `this` in the callback.
             * @return {S|undefined} The return value from the last call to the callback.
             * @template T,S
             * @api
             */
            forEachFeatureIntersectingExtent<T, S>(extent: ol.Extent, callback: (_0: ol.Feature) => S, opt_this?: T): any /*S|any (undefined)*/;
    
            /**
             * Get all features on the source.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            getFeatures(): ol.Feature[];
    
            /**
             * Get all features whose geometry intersects the provided coordinate.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            getFeaturesAtCoordinate(coordinate: ol.Coordinate): ol.Feature[];
    
            /**
             * @param {ol.Extent} extent Extent.
             * @return {Array.<ol.Feature>} Features.
             */
            getFeaturesInExtent(extent: ol.Extent): ol.Feature[];
    
            /**
             * Get the closest feature to the provided coordinate.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @return {ol.Feature} Closest feature.
             * @api stable
             */
            getClosestFeatureToCoordinate(coordinate: ol.Coordinate): ol.Feature;
    
            /**
             * Get the extent of the features currently in the source.
             * @return {ol.Extent} Extent.
             * @api stable
             */
            getExtent(): ol.Extent;
    
            /**
             * Get a feature by its identifier (the value returned by feature.getId()).
             * Note that the index treats string and numeric identifiers as the same.  So
             * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
             *
             * @param {string|number} id Feature identifier.
             * @return {ol.Feature} The feature (or `null` if not found).
             * @api stable
             */
            getFeatureById(id: string): ol.Feature;
            /**
             * Get a feature by its identifier (the value returned by feature.getId()).
             * Note that the index treats string and numeric identifiers as the same.  So
             * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
             *
             * @param {string|number} id Feature identifier.
             * @return {ol.Feature} The feature (or `null` if not found).
             * @api stable
             */
            getFeatureById(id: number): ol.Feature;
    
            /**
             * @return {boolean} Is empty.
             */
            isEmpty(): boolean;
    
            /**
             * @param {ol.Extent} extent Extent.
             * @param {number} resolution Resolution.
             * @param {ol.proj.Projection} projection Projection.
             */
            loadFeatures(extent: ol.Extent, resolution: number, projection: ol.proj.Projection): void;
    
            /**
             * Remove a single feature from the source.  If you want to remove all features
             * at once, use the {@link ol.source.Vector#clear source.clear()} method
             * instead.
             * @param {ol.Feature} feature Feature to remove.
             * @api stable
             */
            removeFeature(feature: ol.Feature): void;
    
            /**
             * Remove feature without firing a `change` event.
             * @param {ol.Feature} feature Feature.
             * @protected
             */
            removeFeatureInternal(feature: ol.Feature): void;
        }
    }

    class VectorEvent extends VectorEvent.__Class { }
    module VectorEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class implements oli.source.VectorEvent {
    
            /**
             * @classdesc
             * Events emitted by {@link ol.source.Vector} instances are instances of this
             * type.
             *
             * @constructor
             * @extends {goog.events.Event}
             * @implements {oli.source.VectorEvent}
             * @param {string} type Type.
             * @param {ol.Feature=} opt_feature Feature.
             */
            constructor(type: string, opt_feature?: ol.Feature);
    
            /**
             * The feature being added or removed.
             * @type {ol.Feature|undefined}
             * @api stable
             */
            feature: any /*ol.Feature|any (undefined)*/;
        }
    }

    class TileImage extends TileImage.__Class { }
    module TileImage {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Tile.__Class {
    
            /**
             * @classdesc
             * Base class for sources providing images divided into a tile grid.
             *
             * @constructor
             * @extends {ol.source.Tile}
             * @param {olx.source.TileImageOptions} options Image tile options.
             * @api
             */
            constructor(options: olx.source.TileImageOptions);
    
            /**
             * @protected
             * @type {ol.TileUrlFunctionType}
             */
            tileUrlFunction: ol.TileUrlFunctionType;
    
            /**
             * @protected
             * @type {?string}
             */
            crossOrigin: string;
    
            /**
             * @protected
             * @type {ol.TileCache}
             */
            tileCache: ol.TileCache;
    
            /**
             * @protected
             * @type {ol.TileLoadFunctionType}
             */
            tileLoadFunction: ol.TileLoadFunctionType;
    
            /**
             * @protected
             * @type {function(new: ol.ImageTile, ol.TileCoord, ol.TileState, string,
             *        ?string, ol.TileLoadFunctionType)}
             */
            tileClass: (_0: ol.TileCoord, _1: ol.TileState, _2: string, _3: string, _4: ol.TileLoadFunctionType) => any /*missing*/;
    
            /**
             * @return {ol.TileLoadFunctionType} TileLoadFunction
             * @api
             */
            getTileLoadFunction(): ol.TileLoadFunctionType;
    
            /**
             * @return {ol.TileUrlFunctionType} TileUrlFunction
             * @api
             */
            getTileUrlFunction(): ol.TileUrlFunctionType;
    
            /**
             * @param {ol.TileLoadFunctionType} tileLoadFunction Tile load function.
             * @api
             */
            setTileLoadFunction(tileLoadFunction: ol.TileLoadFunctionType): void;
    
            /**
             * @param {ol.TileUrlFunctionType} tileUrlFunction Tile URL function.
             * @api
             */
            setTileUrlFunction(tileUrlFunction: ol.TileUrlFunctionType): void;
        }
    }
	
    class BingMaps extends BingMaps.__Class { }
    module BingMaps {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileImage.__Class {
    
            /**
             * @classdesc
             * Layer source for Bing Maps tile data.
             *
             * @constructor
             * @extends {ol.source.TileImage}
             * @param {olx.source.BingMapsOptions} options Bing Maps options.
             * @api stable
             */
            constructor(options: olx.source.BingMapsOptions);
    
            /**
             * @param {BingMapsImageryMetadataResponse} response Response.
             */
            handleImageryMetadataResponse(response: BingMapsImageryMetadataResponse): void;
        }
    }

    class Cluster extends Cluster.__Class { }
    module Cluster {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Vector.__Class {
    
            /**
             * @constructor
             * @param {olx.source.ClusterOptions} options
             * @extends {ol.source.Vector}
             * @api
             */
            constructor(options: olx.source.ClusterOptions);
    
            /**
             * Map of default headers to add to every request, use:
             * XhrIo.headers.set(name, value)
             * @type {!goog.structs.Map}
             */
            headers: any;
        }
    }

    class FormatVector extends FormatVector.__Class { }
    module FormatVector {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Vector.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for vector sources in one of the supported formats.
             *
             * @constructor
             * @extends {ol.source.Vector}
             * @param {olx.source.FormatVectorOptions} options Options.
             */
            constructor(options: olx.source.FormatVectorOptions);
    
            /**
             * @protected
             * @type {ol.format.Feature}
             */
            format: ol.format.Feature;
    
            /**
             * @param {goog.Uri|string} url URL.
             * @param {function(this: T, Array.<ol.Feature>)} success Success Callback.
             * @param {function(this: T)} error Error callback.
             * @param {T} thisArg Value to use as `this` when executing `success` or
             *     `error`.
             * @template T
             */
            loadFeaturesFromURL<T>(url: goog.Uri, success: (_0: ol.Feature[]) => any /*missing*/, error: () => any /*missing*/, thisArg: T): void;
            /**
             * @param {goog.Uri|string} url URL.
             * @param {function(this: T, Array.<ol.Feature>)} success Success Callback.
             * @param {function(this: T)} error Error callback.
             * @param {T} thisArg Value to use as `this` when executing `success` or
             *     `error`.
             * @template T
             */
            loadFeaturesFromURL<T>(url: string, success: (_0: ol.Feature[]) => any /*missing*/, error: () => any /*missing*/, thisArg: T): void;
    
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: ArrayBuffer): ol.Feature[];
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Document): ol.Feature[];
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Node): ol.Feature[];
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Object): ol.Feature[];
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: string): ol.Feature[];
        }
    }

    class StaticVector extends StaticVector.__Class { }
    module StaticVector {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends FormatVector.__Class {
    
            /**
             * @classdesc
             * A vector source that uses one of the supported formats to read the data from
             * a file or other static source.
             *
             * @constructor
             * @extends {ol.source.FormatVector}
             * @fires ol.source.VectorEvent
             * @param {olx.source.StaticVectorOptions} options Options.
             * @api
             */
            constructor(options: olx.source.StaticVectorOptions);
        }
    }

    class GeoJSON extends GeoJSON.__Class { }
    module GeoJSON {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends StaticVector.__Class {
    
            /**
             * @classdesc
             * Static vector source in GeoJSON format
             *
             * @constructor
             * @extends {ol.source.StaticVector}
             * @fires ol.source.VectorEvent
             * @param {olx.source.GeoJSONOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.source.GeoJSONOptions);
        }
    }

    class GPX extends GPX.__Class { }
    module GPX {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends StaticVector.__Class {
    
            /**
             * @classdesc
             * Static vector source in GPX format
             *
             * @constructor
             * @extends {ol.source.StaticVector}
             * @fires ol.source.VectorEvent
             * @param {olx.source.GPXOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.source.GPXOptions);
        }
    }

    class IGC extends IGC.__Class { }
    module IGC {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends StaticVector.__Class {
    
            /**
             * @classdesc
             * Static vector source in IGC format
             *
             * @constructor
             * @extends {ol.source.StaticVector}
             * @fires ol.source.VectorEvent
             * @param {olx.source.IGCOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.source.IGCOptions);
        }
    }

    class Image extends Image.__Class { }
    module Image {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Source.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for sources providing a single image.
             *
             * @constructor
             * @extends {ol.source.Source}
             * @param {ol.source.ImageOptions} options Single image source options.
             * @api
             */
            constructor(options: ImageOptions);
    
            /**
             * @return {Array.<number>} Resolutions.
             */
            getResolutions(): number[];
    
            /**
             * @protected
             * @param {number} resolution Resolution.
             * @return {number} Resolution.
             */
            findNearestResolution(resolution: number): number;
    
            /**
             * @param {ol.Extent} extent Extent.
             * @param {number} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.proj.Projection} projection Projection.
             * @return {ol.ImageBase} Single image.
             */
            getImage(extent: ol.Extent, resolution: number, pixelRatio: number, projection: ol.proj.Projection): ol.ImageBase;
        }
    }

    class ImageCanvas extends ImageCanvas.__Class { }
    module ImageCanvas {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Image.__Class {
    
            /**
             * @classdesc
             * Base class for image sources where a canvas element is the image.
             *
             * @constructor
             * @extends {ol.source.Image}
             * @param {olx.source.ImageCanvasOptions} options
             * @api
             */
            constructor(options: olx.source.ImageCanvasOptions);
        }
    }

    class ImageMapGuide extends ImageMapGuide.__Class { }
    module ImageMapGuide {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Image.__Class {
    
            /**
             * @classdesc
             * Source for images from Mapguide servers
             *
             * @constructor
             * @extends {ol.source.Image}
             * @param {olx.source.ImageMapGuideOptions} options Options.
             * @api stable
             */
            constructor(options: olx.source.ImageMapGuideOptions);
    
            /**
             * Get the user-provided params, i.e. those passed to the constructor through
             * the "params" option, and possibly updated using the updateParams method.
             * @return {Object} Params.
             * @api stable
             */
            getParams(): Object;
    
            /**
             * Update the user-provided params.
             * @param {Object} params Params.
             * @api stable
             */
            updateParams(params: Object): void;
    
            /**
             * @param {string} baseUrl The mapagent url.
             * @param {Object.<string, string|number>} params Request parameters.
             * @param {ol.Extent} extent Extent.
             * @param {ol.Size} size Size.
             * @param {ol.proj.Projection} projection Projection.
             * @return {string} The mapagent map image request URL.
             */
            getUrl(baseUrl: string, params: { [key: string]: any /*string|number*/ }, extent: ol.Extent, size: ol.Size, projection: ol.proj.Projection): string;
        }
    }

    class ImageStatic extends ImageStatic.__Class { }
    module ImageStatic {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Image.__Class {
    
            /**
             * @classdesc
             * A layer source for displaying a single, static image.
             *
             * @constructor
             * @extends {ol.source.Image}
             * @param {olx.source.ImageStaticOptions} options Options.
             * @api stable
             */
            constructor(options: olx.source.ImageStaticOptions);
    
        }
    }

    class ImageVector extends ImageVector.__Class { }
    module ImageVector {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ImageCanvas.__Class {
    
            /**
             * @classdesc
             * An image source whose images are canvas elements into which vector features
             * read from a vector source (`ol.source.Vector`) are drawn. An
             * `ol.source.ImageVector` object is to be used as the `source` of an image
             * layer (`ol.layer.Image`). Image layers are rotated, scaled, and translated,
             * as opposed to being re-rendered, during animations and interactions. So, like
             * any other image layer, an image layer configured with an
             * `ol.source.ImageVector` will exhibit this behaviour. This is in contrast to a
             * vector layer, where vector features are re-drawn during animations and
             * interactions.
             *
             * @constructor
             * @extends {ol.source.ImageCanvas}
             * @param {olx.source.ImageVectorOptions} options Options.
             * @api
             */
            constructor(options: olx.source.ImageVectorOptions);
    
            /**
             * @return {ol.source.Vector} Source.
             * @api
             */
            getSource(): Vector;
    
            /**
             * Get the style for features.  This returns whatever was passed to the `style`
             * option at construction or to the `setStyle` method.
             * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
             *     Layer style.
             * @api stable
             */
            getStyle(): any /*ol.style.Style|ol.style.Style[]|ol.style.StyleFunction*/;
    
            /**
             * Get the style function.
             * @return {ol.style.StyleFunction|undefined} Layer style function.
             * @api stable
             */
            getStyleFunction(): any /*ol.style.StyleFunction|any (undefined)*/;
    
            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles. If it is `undefined` the default style is used. If
             * it is `null` the layer has no style (a `null` style), so only features
             * that have their own styles will be rendered in the layer. See
             * {@link ol.style} for information on the default style.
             * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined}
             *     style Layer style.
             * @api stable
             */
            setStyle(style: ol.style.Style): void;
            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles. If it is `undefined` the default style is used. If
             * it is `null` the layer has no style (a `null` style), so only features
             * that have their own styles will be rendered in the layer. See
             * {@link ol.style} for information on the default style.
             * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined}
             *     style Layer style.
             * @api stable
             */
            setStyle(style: ol.style.Style[]): void;
            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles. If it is `undefined` the default style is used. If
             * it is `null` the layer has no style (a `null` style), so only features
             * that have their own styles will be rendered in the layer. See
             * {@link ol.style} for information on the default style.
             * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined}
             *     style Layer style.
             * @api stable
             */
            setStyle(style: ol.style.StyleFunction): void;
            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles. If it is `undefined` the default style is used. If
             * it is `null` the layer has no style (a `null` style), so only features
             * that have their own styles will be rendered in the layer. See
             * {@link ol.style} for information on the default style.
             * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined}
             *     style Layer style.
             * @api stable
             */
            setStyle(style: any /*undefined*/): void;
        }
    }

    class ImageWMS extends ImageWMS.__Class { }
    module ImageWMS {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Image.__Class {
    
            /**
             * @classdesc
             * Source for WMS servers providing single, untiled images.
             *
             * @constructor
             * @extends {ol.source.Image}
             * @param {olx.source.ImageWMSOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.source.ImageWMSOptions);
    
            /**
             * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
             * projection. Return `undefined` if the GetFeatureInfo URL cannot be
             * constructed.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {ol.proj.ProjectionLike} projection Projection.
             * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
             *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
             *     in the `LAYERS` parameter will be used. `VERSION` should not be
             *     specified here.
             * @return {string|undefined} GetFeatureInfo URL.
             * @api stable
             */
            getGetFeatureInfoUrl(coordinate: ol.Coordinate, resolution: number, projection: ol.proj.Projection, params: Object): any /*string|any (undefined)*/;
            /**
             * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
             * projection. Return `undefined` if the GetFeatureInfo URL cannot be
             * constructed.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {ol.proj.ProjectionLike} projection Projection.
             * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
             *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
             *     in the `LAYERS` parameter will be used. `VERSION` should not be
             *     specified here.
             * @return {string|undefined} GetFeatureInfo URL.
             * @api stable
             */
            getGetFeatureInfoUrl(coordinate: ol.Coordinate, resolution: number, projection: string, params: Object): any /*string|any (undefined)*/;
            /**
             * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
             * projection. Return `undefined` if the GetFeatureInfo URL cannot be
             * constructed.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {ol.proj.ProjectionLike} projection Projection.
             * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
             *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
             *     in the `LAYERS` parameter will be used. `VERSION` should not be
             *     specified here.
             * @return {string|undefined} GetFeatureInfo URL.
             * @api stable
             */
            getGetFeatureInfoUrl(coordinate: ol.Coordinate, resolution: number, projection: any /*undefined*/, params: Object): any /*string|any (undefined)*/;
    
            /**
             * Get the user-provided params, i.e. those passed to the constructor through
             * the "params" option, and possibly updated using the updateParams method.
             * @return {Object} Params.
             * @api stable
             */
            getParams(): Object;
    
            /**
             * Return the URL used for this WMS source.
             * @return {string|undefined} URL.
             * @api stable
             */
            getUrl(): any /*string|any (undefined)*/;
    
            /**
             * @param {string|undefined} url URL.
             * @api stable
             */
            setUrl(url: string): void;
            /**
             * @param {string|undefined} url URL.
             * @api stable
             */
            setUrl(url: any /*undefined*/): void;
    
            /**
             * Update the user-provided params.
             * @param {Object} params Params.
             * @api stable
             */
            updateParams(params: Object): void;
        }
    }

    class KML extends KML.__Class { }
    module KML {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends StaticVector.__Class {
    
            /**
             * @classdesc
             * Static vector source in KML format
             *
             * @constructor
             * @extends {ol.source.StaticVector}
             * @fires ol.source.VectorEvent
             * @param {olx.source.KMLOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.source.KMLOptions);
        }
    }

    class XYZ extends XYZ.__Class { }
    module XYZ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileImage.__Class {
    
            /**
             * @classdesc
             * Layer source for tile data with URLs in a set XYZ format.
             *
             * @constructor
             * @extends {ol.source.TileImage}
             * @param {olx.source.XYZOptions} options XYZ options.
             * @api stable
             */
            constructor(options: olx.source.XYZOptions);
    
            /**
             * @param {string} url URL.
             * @api stable
             */
            setUrl(url: string): void;
    
            /**
             * @param {Array.<string>} urls URLs.
             */
            setUrls(urls: string[]): void;
        }
    }

    class OSM extends OSM.__Class { }
    module OSM {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XYZ.__Class {
    
            /**
             * @classdesc
             * Layer source for the OpenStreetMap tile server.
             *
             * @constructor
             * @extends {ol.source.XYZ}
             * @param {olx.source.OSMOptions=} opt_options Open Street Map options.
             * @api stable
             */
            constructor(opt_options?: olx.source.OSMOptions);
        }
    }

    class MapQuest extends MapQuest.__Class { }
    module MapQuest {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XYZ.__Class {
    
            /**
             * @classdesc
             * Layer source for the MapQuest tile server.
             *
             * @constructor
             * @extends {ol.source.XYZ}
             * @param {olx.source.MapQuestOptions=} opt_options MapQuest options.
             * @api stable
             */
            constructor(opt_options?: olx.source.MapQuestOptions);
        }
    }

    class OSMXML extends OSMXML.__Class { }
    module OSMXML {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends StaticVector.__Class {
    
            /**
             * @classdesc
             * Static vector source in OSMXML format
             *
             * @constructor
             * @extends {ol.source.StaticVector}
             * @fires ol.source.VectorEvent
             * @param {olx.source.OSMXMLOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.source.OSMXMLOptions);
        }
    }

    class ServerVector extends ServerVector.__Class { }
    module ServerVector {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends FormatVector.__Class {
    
            /**
             * @classdesc
             * A vector source in one of the supported formats, using a custom function to
             * read in the data from a remote server.
             *
             * @constructor
             * @extends {ol.source.FormatVector}
             * @param {olx.source.ServerVectorOptions} options Options.
             * @api
             */
            constructor(options: olx.source.ServerVectorOptions);
    
            /**
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: ArrayBuffer): ol.Feature[];
            /**
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Document): ol.Feature[];
            /**
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Node): ol.Feature[];
            /**
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Object): ol.Feature[];
            /**
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: string): ol.Feature[];
        }
    }

    class Stamen extends Stamen.__Class { }
    module Stamen {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XYZ.__Class {
    
            /**
             * @classdesc
             * Layer source for the Stamen tile server.
             *
             * @constructor
             * @extends {ol.source.XYZ}
             * @param {olx.source.StamenOptions} options Stamen options.
             * @api stable
             */
            constructor(options: olx.source.StamenOptions);
        }
    }

    class TileDebug extends TileDebug.__Class { }
    module TileDebug {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Tile.__Class {
    
            /**
             * @classdesc
             * A pseudo tile source, which does not fetch tiles from a server, but renders
             * a grid outline for the tile grid/projection along with the coordinates for
             * each tile. See examples/canvas-tiles for an example.
             *
             * Uses Canvas context2d, so requires Canvas support.
             *
             * @constructor
             * @extends {ol.source.Tile}
             * @param {olx.source.TileDebugOptions} options Debug tile options.
             * @api
             */
            constructor(options: olx.source.TileDebugOptions);
    
        }
    }

    class TileJSON extends TileJSON.__Class { }
    module TileJSON {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileImage.__Class {
    
            /**
             * @classdesc
             * Layer source for tile data in TileJSON format.
             *
             * @constructor
             * @extends {ol.source.TileImage}
             * @param {olx.source.TileJSONOptions} options TileJSON options.
             * @api stable
             */
            constructor(options: olx.source.TileJSONOptions);
    
            /**
             * @protected
             * @param {TileJSON} tileJSON Tile JSON.
             */
            handleTileJSONResponse(tileJSON: TileJSON): void;
        }
    }

    class TileUTFGrid extends TileUTFGrid.__Class { }
    module TileUTFGrid {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Tile.__Class {
    
            /**
             * @classdesc
             * Layer source for UTFGrid interaction data loaded from TileJSON format.
             *
             * @constructor
             * @extends {ol.source.Tile}
             * @param {olx.source.TileUTFGridOptions} options Source options.
             * @api
             */
            constructor(options: olx.source.TileUTFGridOptions);
    
    
            /**
             * @return {string|undefined} The template from TileJSON.
             * @api
             */
            getTemplate(): any /*string|any (undefined)*/;
    
            /**
             * Calls the callback (synchronously by default) with the available data
             * for given coordinate and resolution (or `null` if not yet loaded or
             * in case of an error).
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {function(this: T, Object)} callback Callback.
             * @param {T=} opt_this The object to use as `this` in the callback.
             * @param {boolean=} opt_request If `true` the callback is always async.
             *                               The tile data is requested if not yet loaded.
             * @template T
             * @api
             */
            forDataAtCoordinateAndResolution<T>(coordinate: ol.Coordinate, resolution: number, callback: (_0: Object) => any /*missing*/, opt_this?: T, opt_request?: boolean): void;
    
            /**
             * TODO: very similar to ol.source.TileJSON#handleTileJSONResponse
             * @protected
             * @param {TileJSON} tileJSON Tile JSON.
             */
            handleTileJSONResponse(tileJSON: TileJSON): void;
    
        }
    }

    class TileUTFGridTile_ extends TileUTFGridTile_.__Class { }
    module TileUTFGridTile_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.Tile.__Class {
    
            /**
             * @constructor
             * @extends {ol.Tile}
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @param {ol.TileState} state State.
             * @param {string} src Image source URI.
             * @param {ol.Extent} extent Extent of the tile.
             * @param {boolean} preemptive Load the tile when visible (before it's needed).
             * @private
             */
            constructor(tileCoord: ol.TileCoord, state: ol.TileState, src: string, extent: ol.Extent, preemptive: boolean);
    
            /**
             * Synchronously returns data at given coordinate (if available).
             * @param {ol.Coordinate} coordinate Coordinate.
             * @return {Object}
             */
            getData(coordinate: ol.Coordinate): Object;
    
            /**
             * Calls the callback (synchronously by default) with the available data
             * for given coordinate (or `null` if not yet loaded).
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {function(this: T, Object)} callback Callback.
             * @param {T=} opt_this The object to use as `this` in the callback.
             * @param {boolean=} opt_request If `true` the callback is always async.
             *                               The tile data is requested if not yet loaded.
             * @template T
             */
            forDataAtCoordinate<T>(coordinate: ol.Coordinate, callback: (_0: Object) => any /*missing*/, opt_this?: T, opt_request?: boolean): void;
    
            /**
             * Load not yet loaded URI.
             */
            load(): void;
        }
    }

    class TileVector extends TileVector.__Class { }
    module TileVector {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends FormatVector.__Class {
    
            /**
             * @classdesc
             * A vector source in one of the supported formats, where the data is divided
             * into tiles in a fixed grid pattern.
             *
             * @constructor
             * @extends {ol.source.FormatVector}
             * @param {olx.source.TileVectorOptions} options Options.
             * @api
             */
            constructor(options: olx.source.TileVectorOptions);
    
            /**
             * Iterate through all features whose geometries contain the provided
             * coordinate at the provided resolution, calling the callback with each
             * feature. If the callback returns a "truthy" value, iteration will stop and
             * the function will return the same value.
             *
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {function(this: T, ol.Feature): S} callback Called with each feature
             *     whose goemetry contains the provided coordinate.
             * @param {T=} opt_this The object to use as `this` in the callback.
             * @return {S|undefined} The return value from the last call to the callback.
             * @template T,S
             */
            forEachFeatureAtCoordinateAndResolution<T, S>(coordinate: ol.Coordinate, resolution: number, callback: (_0: ol.Feature) => S, opt_this?: T): any /*S|any (undefined)*/;
    
            /**
             * Get all features whose geometry intersects the provided coordinate for the
             * provided resolution.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            getFeaturesAtCoordinateAndResolution(coordinate: ol.Coordinate, resolution: number): ol.Feature[];
    
            /**
             * @param {ol.TileUrlFunctionType} tileUrlFunction Tile URL function.
             */
            setTileUrlFunction(tileUrlFunction: ol.TileUrlFunctionType): void;
    
            /**
             * @param {string} url URL.
             */
            setUrl(url: string): void;
    
            /**
             * @param {Array.<string>} urls URLs.
             */
            setUrls(urls: string[]): void;
        }
    }

    class TileWMS extends TileWMS.__Class { }
    module TileWMS {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileImage.__Class {
    
            /**
             * @classdesc
             * Layer source for tile data from WMS servers.
             *
             * @constructor
             * @extends {ol.source.TileImage}
             * @param {olx.source.TileWMSOptions=} opt_options Tile WMS options.
             * @api stable
             */
            constructor(opt_options?: olx.source.TileWMSOptions);
    
            /**
             * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
             * projection. Return `undefined` if the GetFeatureInfo URL cannot be
             * constructed.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {ol.proj.ProjectionLike} projection Projection.
             * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
             *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
             *     in the `LAYERS` parameter will be used. `VERSION` should not be
             *     specified here.
             * @return {string|undefined} GetFeatureInfo URL.
             * @api stable
             */
            getGetFeatureInfoUrl(coordinate: ol.Coordinate, resolution: number, projection: ol.proj.Projection, params: Object): any /*string|any (undefined)*/;
            /**
             * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
             * projection. Return `undefined` if the GetFeatureInfo URL cannot be
             * constructed.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {ol.proj.ProjectionLike} projection Projection.
             * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
             *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
             *     in the `LAYERS` parameter will be used. `VERSION` should not be
             *     specified here.
             * @return {string|undefined} GetFeatureInfo URL.
             * @api stable
             */
            getGetFeatureInfoUrl(coordinate: ol.Coordinate, resolution: number, projection: string, params: Object): any /*string|any (undefined)*/;
            /**
             * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
             * projection. Return `undefined` if the GetFeatureInfo URL cannot be
             * constructed.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {ol.proj.ProjectionLike} projection Projection.
             * @param {!Object} params GetFeatureInfo params. `INFO_FORMAT` at least should
             *     be provided. If `QUERY_LAYERS` is not provided then the layers specified
             *     in the `LAYERS` parameter will be used. `VERSION` should not be
             *     specified here.
             * @return {string|undefined} GetFeatureInfo URL.
             * @api stable
             */
            getGetFeatureInfoUrl(coordinate: ol.Coordinate, resolution: number, projection: any /*undefined*/, params: Object): any /*string|any (undefined)*/;
    
            /**
             * Get the user-provided params, i.e. those passed to the constructor through
             * the "params" option, and possibly updated using the updateParams method.
             * @return {Object} Params.
             * @api stable
             */
            getParams(): Object;
    
            /**
             * @param {number} z Z.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.proj.Projection} projection Projection.
             * @return {number} Size.
             */
            getTilePixelSize(z: number, pixelRatio: number, projection: ol.proj.Projection): number;
    
            /**
             * Return the URLs used for this WMS source.
             * @return {!Array.<string>} URLs.
             * @api stable
             */
            getUrls(): string[];
    
            /**
             * @param {string|undefined} url URL.
             * @api stable
             */
            setUrl(url: string): void;
            /**
             * @param {string|undefined} url URL.
             * @api stable
             */
            setUrl(url: any /*undefined*/): void;
    
            /**
             * @param {Array.<string>|undefined} urls URLs.
             * @api stable
             */
            setUrls(urls: string[]): void;
            /**
             * @param {Array.<string>|undefined} urls URLs.
             * @api stable
             */
            setUrls(urls: any /*undefined*/): void;
    
            /**
             * Update the user-provided params.
             * @param {Object} params Params.
             * @api stable
             */
            updateParams(params: Object): void;
        }
    }

    class TopoJSON extends TopoJSON.__Class { }
    module TopoJSON {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends StaticVector.__Class {
    
            /**
             * @classdesc
             * Static vector source in TopoJSON format
             *
             * @constructor
             * @extends {ol.source.StaticVector}
             * @fires ol.source.VectorEvent
             * @param {olx.source.TopoJSONOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.source.TopoJSONOptions);
        }
    }

    class WMTS extends WMTS.__Class { }
    module WMTS {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileImage.__Class {
    
            /**
             * @classdesc
             * Layer source for tile data from WMTS servers.
             *
             * @constructor
             * @extends {ol.source.TileImage}
             * @param {olx.source.WMTSOptions} options WMTS options.
             * @api
             */
            constructor(options: olx.source.WMTSOptions);
    
            /**
             * Get the dimensions, i.e. those passed to the constructor through the
             * "dimensions" option, and possibly updated using the updateDimensions
             * method.
             * @return {Object} Dimensions.
             * @api
             */
            getDimensions(): Object;
    
            /**
             * Update the dimensions.
             * @param {Object} dimensions Dimensions.
             * @api
             */
            updateDimensions(dimensions: Object): void;
        }
    }

    class Zoomify extends Zoomify.__Class { }
    module Zoomify {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileImage.__Class {
    
            /**
             * @classdesc
             * Layer source for tile data in Zoomify format.
             *
             * @constructor
             * @extends {ol.source.TileImage}
             * @param {olx.source.ZoomifyOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.source.ZoomifyOptions);
        }
    }

    class ZoomifyTile_ extends ZoomifyTile_.__Class { }
    module ZoomifyTile_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.ImageTile.__Class {
    
            /**
             * @constructor
             * @extends {ol.ImageTile}
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @param {ol.TileState} state State.
             * @param {string} src Image source URI.
             * @param {?string} crossOrigin Cross origin.
             * @param {ol.TileLoadFunctionType} tileLoadFunction Tile load function.
             * @private
             */
            constructor(tileCoord: ol.TileCoord, state: ol.TileState, src: string, crossOrigin: string, tileLoadFunction: ol.TileLoadFunctionType);
    
        }
    }

    /**
     * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
     * @enum {string}
     * @api
     */
    enum State { UNDEFINED, LOADING, READY, ERROR } 

    /**
     * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
     *            logo: (string|olx.LogoOptions|undefined),
     *            projection: ol.proj.ProjectionLike,
     *            state: (ol.source.State|undefined)}}
     */
    interface SourceOptions {
        attributions: any /*ol.Attribution[]|any (undefined)*/;
        logo: any /*string|olx.LogoOptions|any (undefined)*/;
        projection: proj.ProjectionLike;
        state: any; /*ol.source.State|any (undefined)*/
    }

    /**
     * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
     *            extent: (ol.Extent|undefined),
     *            logo: (string|olx.LogoOptions|undefined),
     *            opaque: (boolean|undefined),
     *            tilePixelRatio: (number|undefined),
     *            projection: ol.proj.ProjectionLike,
     *            state: (ol.source.State|undefined),
     *            tileGrid: (ol.tilegrid.TileGrid|undefined)}}
     */
    interface TileOptions {
        attributions: any /*ol.Attribution[]|any (undefined)*/;
        extent: any /*ol.Extent|any (undefined)*/;
        logo: any /*string|olx.LogoOptions|any (undefined)*/;
        opaque: any /*boolean|any (undefined)*/;
        tilePixelRatio: any /*number|any (undefined)*/;
        projection: proj.ProjectionLike;
        state: any /*ol.source.State|any (undefined)*/;
        tileGrid: any; /*ol.tilegrid.TileGrid|any (undefined)*/
    }

    /**
     * @enum {string}
     */
    enum VectorEventType { ADDFEATURE, CHANGEFEATURE, CLEAR, REMOVEFEATURE } 

    /**
     * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
     *            extent: (null|ol.Extent|undefined),
     *            logo: (string|olx.LogoOptions|undefined),
     *            projection: ol.proj.ProjectionLike,
     *            resolutions: (Array.<number>|undefined),
     *            state: (ol.source.State|undefined)}}
     */
    interface ImageOptions {
        attributions: any /*ol.Attribution[]|any (undefined)*/;
        extent: any /*any (null)|ol.Extent|any (undefined)*/;
        logo: any /*string|olx.LogoOptions|any (undefined)*/;
        projection: proj.ProjectionLike;
        resolutions: any /*number[]|any (undefined)*/;
        state: any; /*ol.source.State|any (undefined)*/
    }

    /**
     * @type {Object.<string, {maxZoom: number, attributions: (Array.<ol.Attribution>)}>}
     */
    var MapQuestConfig: { [key: string]: { maxZoom: number; attributions: any /*ol.Attribution[]*/ } };

    /**
     * @type {Object.<string, {extension: string, opaque: boolean}>}
     */
    var StamenLayerConfig: { [key: string]: { extension: string; opaque: boolean } };

    /**
     * @type {Object.<string, {minZoom: number, maxZoom: number}>}
     */
    var StamenProviderConfig: { [key: string]: { minZoom: number; maxZoom: number } };

    /**
     * Request encoding. One of 'KVP', 'REST'.
     * @enum {string}
     * @api
     */
    enum WMTSRequestEncoding { KVP, REST } 

    /**
     * @enum {string}
     */
    enum ZoomifyTierSizeCalculation { DEFAULT, TRUNCATED }
}


declare module ol.source.TileImage {

    /**
     * @param {ol.ImageTile} imageTile Image tile.
     * @param {string} src Source.
     */
    function defaultTileLoadFunction(imageTile: ImageTile, src: string): void;
}

declare module ol.source.BingMaps {

    /**
     * @const
     * @type {ol.Attribution}
     * @api
     */
    var TOS_ATTRIBUTION: Attribution;
}

declare module ol.source.Image {

    /**
     * Default image load function for image sources that use ol.Image image
     * instances.
     * @param {ol.Image} image Image.
     * @param {string} src Source.
     */
    function defaultImageLoadFunction(image: Image, src: string): void;
}

declare module ol.source.ImageMapGuide {

    /**
     * @param {ol.Extent} extent The map extents.
     * @param {ol.Size} size the viewport size.
     * @param {number} metersPerUnit The meters-per-unit value.
     * @param {number} dpi The display resolution.
     * @return {number} The computed map scale.
     */
    function getScale(extent: Extent, size: Size, metersPerUnit: number, dpi: number): number;
}

declare module ol.source.wms {

    /**
     * Available server types: `'carmentaserver'`, `'geoserver'`, `'mapserver'`,
     *     `'qgis'`. These are servers that have vendor parameters beyond the WMS
     *     specification that OpenLayers can make use of.
     * @enum {string}
     * @api
     */
    enum ServerType { CARMENTA_SERVER, GEOSERVER, MAPSERVER, QGIS }
}

declare module ol.source.OSM {

    /**
     * @const
     * @type {ol.Attribution}
     * @api
     */
    var ATTRIBUTION: Attribution;
}

declare module ol.source.MapQuest {

    /**
     * @const
     * @type {ol.Attribution}
     */
    var TILE_ATTRIBUTION: Attribution;
}

declare module ol.source.Stamen {

    /**
     * @const
     * @type {Array.<ol.Attribution>}
     */
    var ATTRIBUTIONS: Attribution[];
}

declare module ol.source.WMTS {

    /**
     * @param {Object} wmtsCap An object representing the capabilities document.
     * @param {string} layer The layer identifier.
     * @return {olx.source.WMTSOptions} WMTS source options object.
     */
    function optionsFromCapabilities(wmtsCap: Object, layer: string): olx.source.WMTSOptions;
}