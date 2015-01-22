
declare module ol.renderer {

    class Layer extends Layer.__Class { }
    module Layer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
            /**
             * @constructor
             * @extends {goog.Disposable}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Layer} layer Layer.
             * @suppress {checkStructDictInheritance}
             * @struct
             */
            constructor(mapRenderer: Map, layer: ol.layer.Layer);
    
            /**
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {olx.FrameState} frameState Frame state.
             * @param {function(this: S, ol.Feature, ol.layer.Layer): T} callback Feature
             *     callback.
             * @param {S} thisArg Value to use as `this` when executing `callback`.
             * @return {T|undefined} Callback result.
             * @template S,T
             */
            forEachFeatureAtPixel<S, T>(coordinate: ol.Coordinate, frameState: olx.FrameState, callback: (_0: ol.Feature, _1: ol.layer.Layer) => T, thisArg: S): any /*T|any (undefined)*/;
    
            /**
             * @protected
             * @return {ol.layer.Layer} Layer.
             */
            getLayer(): ol.layer.Layer;
    
            /**
             * @protected
             * @return {ol.Map} Map.
             */
            getMap(): ol.Map;
    
            /**
             * @protected
             * @return {ol.renderer.Map} Map renderer.
             */
            getMapRenderer(): Map;
    
            /**
             * Handle changes in image state.
             * @param {goog.events.Event} event Image change event.
             * @protected
             */
            handleImageChange(event: goog.events.Event): void;
    
            /**
             * @protected
             */
            renderIfReadyAndVisible(): void;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.source.Tile} tileSource Tile source.
             * @protected
             */
            scheduleExpireCache(frameState: olx.FrameState, tileSource: ol.source.Tile): void;
    
            /**
             * @param {Object.<string, ol.Attribution>} attributionsSet Attributions
             *     set (target).
             * @param {Array.<ol.Attribution>} attributions Attributions (source).
             * @protected
             */
            updateAttributions(attributionsSet: { [key: string]: ol.Attribution }, attributions: ol.Attribution[]): void;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.source.Source} source Source.
             * @protected
             */
            updateLogos(frameState: olx.FrameState, source: ol.source.Source): void;
    
            /**
             * @param {Object.<string, Object.<string, ol.TileRange>>} usedTiles Used tiles.
             * @param {ol.source.Tile} tileSource Tile source.
             * @param {number} z Z.
             * @param {ol.TileRange} tileRange Tile range.
             * @protected
             */
            updateUsedTiles(usedTiles: { [key: string]: { [key: string]: ol.TileRange } }, tileSource: ol.source.Tile, z: number, tileRange: ol.TileRange): void;
    
            /**
             * @param {function(ol.Tile): boolean} isLoadedFunction Function to
             *     determine if the tile is loaded.
             * @param {ol.source.Tile} tileSource Tile source.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.proj.Projection} projection Projection.
             * @protected
             * @return {function(number, number, number): ol.Tile} Returns a tile if it is
             *     loaded.
             */
            createGetTileIfLoadedFunction(isLoadedFunction: (_0: ol.Tile) => boolean, tileSource: ol.source.Tile, pixelRatio: number, projection: ol.proj.Projection): (_0: number, _1: number, _2: number) => ol.Tile;
    
            /**
             * @param {ol.Coordinate} center Center.
             * @param {number} resolution Resolution.
             * @param {ol.Size} size Size.
             * @protected
             * @return {ol.Coordinate} Snapped center.
             */
            snapCenterToPixel(center: ol.Coordinate, resolution: number, size: ol.Size): ol.Coordinate;
    
            /**
             * Manage tile pyramid.
             * This function performs a number of functions related to the tiles at the
             * current zoom and lower zoom levels:
             * - registers idle tiles in frameState.wantedTiles so that they are not
             *   discarded by the tile queue
             * - enqueues missing tiles
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.source.Tile} tileSource Tile source.
             * @param {ol.tilegrid.TileGrid} tileGrid Tile grid.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.proj.Projection} projection Projection.
             * @param {ol.Extent} extent Extent.
             * @param {number} currentZ Current Z.
             * @param {number|undefined} preload Load low resolution tiles up to 'preload'
             *     levels.
             * @param {function(this: T, ol.Tile)=} opt_tileCallback Tile callback.
             * @param {T=} opt_this Object to use as `this` in `opt_tileCallback`.
             * @protected
             * @template T
             */
            manageTilePyramid<T>(frameState: olx.FrameState, tileSource: ol.source.Tile, tileGrid: ol.tilegrid.TileGrid, pixelRatio: number, projection: ol.proj.Projection, extent: ol.Extent, currentZ: number, preload: number, opt_tileCallback?: (_0: ol.Tile) => any /*missing*/, opt_this?: T): void;
            /**
             * Manage tile pyramid.
             * This function performs a number of functions related to the tiles at the
             * current zoom and lower zoom levels:
             * - registers idle tiles in frameState.wantedTiles so that they are not
             *   discarded by the tile queue
             * - enqueues missing tiles
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.source.Tile} tileSource Tile source.
             * @param {ol.tilegrid.TileGrid} tileGrid Tile grid.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.proj.Projection} projection Projection.
             * @param {ol.Extent} extent Extent.
             * @param {number} currentZ Current Z.
             * @param {number|undefined} preload Load low resolution tiles up to 'preload'
             *     levels.
             * @param {function(this: T, ol.Tile)=} opt_tileCallback Tile callback.
             * @param {T=} opt_this Object to use as `this` in `opt_tileCallback`.
             * @protected
             * @template T
             */
            manageTilePyramid<T>(frameState: olx.FrameState, tileSource: ol.source.Tile, tileGrid: ol.tilegrid.TileGrid, pixelRatio: number, projection: ol.proj.Projection, extent: ol.Extent, currentZ: number, preload: any /*undefined*/, opt_tileCallback?: (_0: ol.Tile) => any /*missing*/, opt_this?: T): void;
        }
    }

    class Map extends Map.__Class { }
    module Map {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
            /**
             * @constructor
             * @extends {goog.Disposable}
             * @param {Element} container Container.
             * @param {ol.Map} map Map.
             * @suppress {checkStructDictInheritance}
             * @struct
             */
            constructor(container: Element, map: ol.Map);
    
            /**
             * @protected
             * @type {ol.render.IReplayGroup}
             */
            replayGroup: ol.render.IReplayGroup;
    
            /**
             * @param {olx.FrameState} frameState FrameState.
             * @protected
             */
            calculateMatrices2D(frameState: olx.FrameState): void;
    
            /**
             * @param {ol.layer.Layer} layer Layer.
             * @protected
             * @return {ol.renderer.Layer} layerRenderer Layer renderer.
             */
            createLayerRenderer(layer: ol.layer.Layer): Layer;
    
            /**
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {olx.FrameState} frameState FrameState.
             * @param {function(this: S, ol.Feature, ol.layer.Layer): T} callback Feature
             *     callback.
             * @param {S} thisArg Value to use as `this` when executing `callback`.
             * @param {function(this: U, ol.layer.Layer): boolean} layerFilter Layer filter
             *     function, only layers which are visible and for which this function
             *     returns `true` will be tested for features.  By default, all visible
             *     layers will be tested.
             * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
             * @return {T|undefined} Callback result.
             * @template S,T,U
             */
            forEachFeatureAtPixel<S, T, U>(coordinate: ol.Coordinate, frameState: olx.FrameState, callback: (_0: ol.Feature, _1: ol.layer.Layer) => T, thisArg: S, layerFilter: (_0: ol.layer.Layer) => boolean, thisArg2: U): any /*T|any (undefined)*/;
    
            /**
             * @param {ol.layer.Layer} layer Layer.
             * @protected
             * @return {ol.renderer.Layer} Layer renderer.
             */
            getLayerRenderer(layer: ol.layer.Layer): Layer;
    
            /**
             * @param {string} layerKey Layer key.
             * @protected
             * @return {ol.renderer.Layer} Layer renderer.
             */
            getLayerRendererByKey(layerKey: string): Layer;
    
            /**
             * @protected
             * @return {Object.<number, ol.renderer.Layer>} Layer renderers.
             */
            getLayerRenderers(): { [key: number]: Layer };
    
            /**
             * @return {ol.Map} Map.
             */
            getMap(): ol.Map;
    
			
            /**
             * @return {string} Type
             */
            getType(): string;
    
            /**
             * Render.
             * @param {?olx.FrameState} frameState Frame state.
             */
            renderFrame(frameState: olx.FrameState): void;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @protected
             */
            scheduleExpireIconCache(frameState: olx.FrameState): void;
    
            /**
             * @param {!olx.FrameState} frameState Frame state.
             * @protected
             */
            scheduleRemoveUnusedLayerRenderers(frameState: olx.FrameState): void;
        }
    }
}

declare module ol.renderer.canvas {

    class Layer extends Layer.__Class { }
    module Layer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends renderer.Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Layer} layer Layer.
             */
            constructor(mapRenderer: renderer.Map, layer: ol.layer.Layer);
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.layer.LayerState} layerState Layer state.
             * @param {CanvasRenderingContext2D} context Context.
             */
            composeFrame(frameState: olx.FrameState, layerState: ol.layer.LayerState, context: CanvasRenderingContext2D): void;
    
            /**
             * @param {CanvasRenderingContext2D} context Context.
             * @param {olx.FrameState} frameState Frame state.
             * @param {goog.vec.Mat4.Number=} opt_transform Transform.
             * @protected
             */
            dispatchPostComposeEvent(context: CanvasRenderingContext2D, frameState: olx.FrameState, opt_transform?: goog.vec.Mat4.Number): void;
    
            /**
             * @param {CanvasRenderingContext2D} context Context.
             * @param {olx.FrameState} frameState Frame state.
             * @param {goog.vec.Mat4.Number=} opt_transform Transform.
             * @protected
             */
            dispatchPreComposeEvent(context: CanvasRenderingContext2D, frameState: olx.FrameState, opt_transform?: goog.vec.Mat4.Number): void;
    
            /**
             * @param {CanvasRenderingContext2D} context Context.
             * @param {olx.FrameState} frameState Frame state.
             * @param {goog.vec.Mat4.Number=} opt_transform Transform.
             * @protected
             */
            dispatchRenderEvent(context: CanvasRenderingContext2D, frameState: olx.FrameState, opt_transform?: goog.vec.Mat4.Number): void;
    
            /**
             * @return {HTMLCanvasElement|HTMLVideoElement|Image} Canvas.
             */
            getImage(): any /*HTMLCanvasElement|HTMLVideoElement|Image*/;
    
            /**
             * @return {!goog.vec.Mat4.Number} Image transform.
             */
            getImageTransform(): goog.vec.Mat4.Number;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @protected
             * @return {!goog.vec.Mat4.Number} Transform.
             */
            getTransform(frameState: olx.FrameState): goog.vec.Mat4.Number;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.layer.LayerState} layerState Layer state.
             * @return {boolean} whether composeFrame should be called.
             */
            prepareFrame(frameState: olx.FrameState, layerState: ol.layer.LayerState): boolean;
        }
    }

    class ImageLayer extends ImageLayer.__Class { }
    module ImageLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.canvas.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Image} imageLayer Single image layer.
             */
            constructor(mapRenderer: renderer.Map, imageLayer: ol.layer.Image);
    
    
        }
    }

    class TileLayer extends TileLayer.__Class { }
    module TileLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.canvas.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Tile} tileLayer Tile layer.
             */
            constructor(mapRenderer: renderer.Map, tileLayer: ol.layer.Tile);
    
        }
    }

    class VectorLayer extends VectorLayer.__Class { }
    module VectorLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.canvas.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Vector} vectorLayer Vector layer.
             */
            constructor(mapRenderer: renderer.Map, vectorLayer: ol.layer.Vector);
    
			/**
             * @param {ol.Feature} feature Feature.
             * @param {number} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {Array.<ol.style.Style>} styles Array of styles
             * @param {ol.render.canvas.ReplayGroup} replayGroup Replay group.
             * @return {boolean} `true` if an image is loading.
             */
            renderFeature(feature: ol.Feature, resolution: number, pixelRatio: number, styles: ol.style.Style[], replayGroup: ol.render.canvas.ReplayGroup): boolean;
        }
    }

    class Map extends Map.__Class { }
    module Map {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends renderer.Map.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.Map}
             * @param {Element} container Container.
             * @param {ol.Map} map Map.
             */
            constructor(container: Element, map: ol.Map);
    
           
    
            /**
             * @param {ol.layer.Layer} layer Layer.
             * @return {ol.renderer.canvas.Layer} Canvas layer renderer.
             */
            getCanvasLayerRenderer(layer: ol.layer.Layer): Layer;
    
        }
    }
}

declare module ol.renderer.dom {

    class Layer extends Layer.__Class { }
    module Layer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends renderer.Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Layer} layer Layer.
             * @param {!Element} target Target.
             */
            constructor(mapRenderer: renderer.Map, layer: ol.layer.Layer, target: Element);
    
            /**
             * @type {!Element}
             * @protected
             */
            target: Element;
    
            /**
             * Clear rendered elements.
             */
            clearFrame(): void /*missing*/;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.layer.LayerState} layerState Layer state.
             */
            composeFrame(frameState: olx.FrameState, layerState: ol.layer.LayerState): void;
    
            /**
             * @return {!Element} Target.
             */
            getTarget(): Element;
    
			prepareFrame(frameState: any /* jsdoc error */, layerState: any /* jsdoc error */): void;

            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.layer.LayerState} layerState Layer state.
             * @return {boolean} whether composeFrame should be called.
             */
            prepareFrame(frameState: olx.FrameState, layerState: ol.layer.LayerState): boolean;
        }
    }

    class ImageLayer extends ImageLayer.__Class { }
    module ImageLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.dom.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Image} imageLayer Image layer.
             */
            constructor(mapRenderer: renderer.Map, imageLayer: ol.layer.Image);
    
        }
    }

    class TileLayer extends TileLayer.__Class { }
    module TileLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.dom.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Tile} tileLayer Tile layer.
             */
            constructor(mapRenderer: renderer.Map, tileLayer: ol.layer.Tile);
    
        }
    }

    class TileLayerZ_ extends TileLayerZ_.__Class { }
    module TileLayerZ_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @private
             * @param {ol.tilegrid.TileGrid} tileGrid Tile grid.
             * @param {ol.TileCoord} tileCoordOrigin Tile coord origin.
             */
            constructor(tileGrid: ol.tilegrid.TileGrid, tileCoordOrigin: ol.TileCoord);
    
            /**
             * @type {!Element}
             */
            target: Element;
    
            /**
             * @param {ol.Tile} tile Tile.
             * @param {number} tileGutter Tile gutter.
             */
            addTile(tile: ol.Tile, tileGutter: number): void;
    
            /**
             * FIXME empty description for jsdoc
             */
            finalizeAddTiles(): void;
    
            /**
             * @return {ol.Coordinate} Origin.
             */
            getOrigin(): ol.Coordinate;
    
            /**
             * @return {number} Resolution.
             */
            getResolution(): number;
    
            /**
             * @param {ol.Extent} extent Extent.
             * @param {ol.TileRange=} opt_tileRange Temporary ol.TileRange object.
             */
            removeTilesOutsideExtent(extent: ol.Extent, opt_tileRange?: ol.TileRange): void;
    
            /**
             * @param {goog.vec.Mat4.Number} transform Transform.
             */
            setTransform(transform: goog.vec.Mat4.Number): void;
        }
    }

    class VectorLayer extends VectorLayer.__Class { }
    module VectorLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.dom.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Vector} vectorLayer Vector layer.
             */
            constructor(mapRenderer: renderer.Map, vectorLayer: ol.layer.Vector);
    
            /**
             * @param {ol.Feature} feature Feature.
             * @param {number} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {Array.<ol.style.Style>} styles Array of styles
             * @param {ol.render.canvas.ReplayGroup} replayGroup Replay group.
             * @return {boolean} `true` if an image is loading.
             */
            renderFeature(feature: ol.Feature, resolution: number, pixelRatio: number, styles: ol.style.Style[], replayGroup: ol.render.canvas.ReplayGroup): boolean;
        }
    }

    class Map extends Map.__Class { }
    module Map {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends renderer.Map.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.Map}
             * @param {Element} container Container.
             * @param {ol.Map} map Map.
             */
            constructor(container: Element, map: ol.Map);
    
        }
    }
}

declare module ol.renderer.webgl.map.shader {

    class ColorFragment extends ColorFragment.__Class { }
    module ColorFragment {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.webgl.shader.Fragment.__Class {
    
            /**
             * @constructor
             * @extends {ol.webgl.shader.Fragment}
             * @struct
             */
            constructor();
        }
    }

    class ColorVertex extends ColorVertex.__Class { }
    module ColorVertex {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.webgl.shader.Vertex.__Class {
    
            /**
             * @constructor
             * @extends {ol.webgl.shader.Vertex}
             * @struct
             */
            constructor();
        }
    }

    class DefaultFragment extends DefaultFragment.__Class { }
    module DefaultFragment {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.webgl.shader.Fragment.__Class {
    
            /**
             * @constructor
             * @extends {ol.webgl.shader.Fragment}
             * @struct
             */
            constructor();
        }
    }

    class DefaultVertex extends DefaultVertex.__Class { }
    module DefaultVertex {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.webgl.shader.Vertex.__Class {
    
            /**
             * @constructor
             * @extends {ol.webgl.shader.Vertex}
             * @struct
             */
            constructor();
        }
    }
}

declare module ol.renderer.webgl.map.shader.Color {

    class Locations extends Locations.__Class { }
    module Locations {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {WebGLRenderingContext} gl GL.
             * @param {WebGLProgram} program Program.
             * @struct
             */
            constructor(gl: WebGLRenderingContext, program: WebGLProgram);
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_colorMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_opacity: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_projectionMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_texCoordMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_texture: WebGLUniformLocation;
    
            /**
             * @type {number}
             */
            a_position: number;
    
            /**
             * @type {number}
             */
            a_texCoord: number;
        }
    }
}

declare module ol.renderer.webgl.map.shader.Default {

    class Locations extends Locations.__Class { }
    module Locations {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {WebGLRenderingContext} gl GL.
             * @param {WebGLProgram} program Program.
             * @struct
             */
            constructor(gl: WebGLRenderingContext, program: WebGLProgram);
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_opacity: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_projectionMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_texCoordMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_texture: WebGLUniformLocation;
    
            /**
             * @type {number}
             */
            a_position: number;
    
            /**
             * @type {number}
             */
            a_texCoord: number;
        }
    }
}

declare module ol.renderer.webgl {

    class Layer extends Layer.__Class { }
    module Layer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends renderer.Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Layer} layer Layer.
             */
            constructor(mapRenderer: renderer.Map, layer: ol.layer.Layer);
    
            /**
             * @protected
             * @type {WebGLTexture}
             */
            texture: WebGLTexture;
    
            /**
             * @protected
             * @type {WebGLFramebuffer}
             */
            framebuffer: WebGLFramebuffer;
    
            /**
             * @protected
             * @type {number|undefined}
             */
            framebufferDimension: any /*number|any (undefined)*/;
    
            /**
             * @protected
             * @type {!goog.vec.Mat4.Number}
             */
            texCoordMatrix: goog.vec.Mat4.Number;
    
            /**
             * @protected
             * @type {!goog.vec.Mat4.Number}
             */
            projectionMatrix: goog.vec.Mat4.Number;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {number} framebufferDimension Framebuffer dimension.
             * @protected
             */
            bindFramebuffer(frameState: olx.FrameState, framebufferDimension: number): void;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.layer.LayerState} layerState Layer state.
             * @param {ol.webgl.Context} context Context.
             */
            composeFrame(frameState: olx.FrameState, layerState: ol.layer.LayerState, context: ol.webgl.Context): void;
    
            /**
             * @protected
             * @return {ol.renderer.webgl.Map} MapRenderer.
             */
            getWebGLMapRenderer(): Map;
    
            /**
             * @return {!goog.vec.Mat4.Number} Matrix.
             */
            getTexCoordMatrix(): goog.vec.Mat4.Number;
    
            /**
             * @return {WebGLTexture} Texture.
             */
            getTexture(): WebGLTexture;
    
            /**
             * @return {!goog.vec.Mat4.Number} Matrix.
             */
            getProjectionMatrix(): goog.vec.Mat4.Number;
    
            /**
             * Handle webglcontextlost.
             */
            handleWebGLContextLost(): void;
    
            /**
             * @param {olx.FrameState} frameState Frame state.
             * @param {ol.layer.LayerState} layerState Layer state.
             * @param {ol.webgl.Context} context Context.
             * @return {boolean} whether composeFrame should be called.
             */
            prepareFrame(frameState: olx.FrameState, layerState: ol.layer.LayerState, context: ol.webgl.Context): boolean;
        }
    }

    class ImageLayer extends ImageLayer.__Class { }
    module ImageLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.webgl.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Image} imageLayer Tile layer.
             */
            constructor(mapRenderer: renderer.Map, imageLayer: ol.layer.Image);
    
        }
    }

    class TileLayer extends TileLayer.__Class { }
    module TileLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.webgl.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Tile} tileLayer Tile layer.
             */
            constructor(mapRenderer: renderer.Map, tileLayer: ol.layer.Tile);
    
        }
    }

    class VectorLayer extends VectorLayer.__Class { }
    module VectorLayer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.webgl.Layer}
             * @param {ol.renderer.Map} mapRenderer Map renderer.
             * @param {ol.layer.Vector} vectorLayer Vector layer.
             */
            constructor(mapRenderer: renderer.Map, vectorLayer: ol.layer.Vector);
    
            /**
             * @param {ol.Feature} feature Feature.
             * @param {number} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {Array.<ol.style.Style>} styles Array of styles
             * @param {ol.render.webgl.ReplayGroup} replayGroup Replay group.
             * @return {boolean} `true` if an image is loading.
             */
            renderFeature(feature: ol.Feature, resolution: number, pixelRatio: number, styles: ol.style.Style[], replayGroup: ol.render.webgl.ReplayGroup): boolean;
        }
    }

    class Map extends Map.__Class { }
    module Map {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends renderer.Map.__Class {
    
            /**
             * @constructor
             * @extends {ol.renderer.Map}
             * @param {Element} container Container.
             * @param {ol.Map} map Map.
             */
            constructor(container: Element, map: ol.Map);
    
            /**
             * @param {ol.Tile} tile Tile.
             * @param {number} tileSize Tile size.
             * @param {number} tileGutter Tile gutter.
             * @param {number} magFilter Mag filter.
             * @param {number} minFilter Min filter.
             */
            bindTileTexture(tile: ol.Tile, tileSize: number, tileGutter: number, magFilter: number, minFilter: number): void;
    
            /**
             * @return {ol.webgl.Context}
             */
            getContext(): ol.webgl.Context;
    
            /**
             * @return {WebGLRenderingContext} GL.
             */
            getGL(): WebGLRenderingContext;
    
            /**
             * @return {ol.structs.PriorityQueue.<Array>} Tile texture queue.
             */
            getTileTextureQueue(): ol.structs.PriorityQueue<any[]>;
    
            /**
             * @param {goog.events.Event} event Event.
             * @protected
             */
            handleWebGLContextLost(event: goog.events.Event): void;
    
            /**
             * @protected
             */
            handleWebGLContextRestored(): void;
    
            /**
             * @param {ol.Tile} tile Tile.
             * @return {boolean} Is tile texture loaded.
             */
            isTileTextureLoaded(tile: ol.Tile): boolean;
        }
    }

    /**
     * @typedef {{magFilter: number, minFilter: number, texture: WebGLTexture}}
     */
    interface TextureCacheEntry {
        magFilter: number;
        minFilter: number;
        texture: WebGLTexture;
    }
}

declare module ol.renderer.webgl.tilelayer.shader {

    class Fragment extends Fragment.__Class { }
    module Fragment {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.webgl.shader.Fragment.__Class {
    
            /**
             * @constructor
             * @extends {ol.webgl.shader.Fragment}
             * @struct
             */
            constructor();
        }
    }

    class Vertex extends Vertex.__Class { }
    module Vertex {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.webgl.shader.Vertex.__Class {
    
            /**
             * @constructor
             * @extends {ol.webgl.shader.Vertex}
             * @struct
             */
            constructor();
        }
    }

    class Locations extends Locations.__Class { }
    module Locations {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {WebGLRenderingContext} gl GL.
             * @param {WebGLProgram} program Program.
             * @struct
             */
            constructor(gl: WebGLRenderingContext, program: WebGLProgram);
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_texture: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_tileOffset: WebGLUniformLocation;
    
            /**
             * @type {number}
             */
            a_position: number;
    
            /**
             * @type {number}
             */
            a_texCoord: number;
        }
    }
}

declare module ol.renderer.canvas.Layer {

    /**
     * @param {ol.Size} size Size.
     * @return {boolean} True when the canvas with the current size does not exceed
     *     the maximum dimensions.
     */
    function testCanvasSize(size: Size): boolean;
}

declare module ol.renderer.vector {

    /**
     * @param {ol.Feature} feature1 Feature 1.
     * @param {ol.Feature} feature2 Feature 2.
     * @return {number} Order.
     */
    function defaultOrder(feature1: Feature, feature2: Feature): number;

    /**
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Squared pixel tolerance.
     */
    function getSquaredTolerance(resolution: number, pixelRatio: number): number;

    /**
     * @param {number} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Pixel tolerance.
     */
    function getTolerance(resolution: number, pixelRatio: number): number;

    /**
     * @param {ol.render.IReplayGroup} replayGroup Replay group.
     * @param {ol.Feature} feature Feature.
     * @param {ol.style.Style} style Style.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {function(this: T, goog.events.Event)} listener Listener function.
     * @param {T} thisArg Value to use as `this` when executing `listener`.
     * @return {boolean} `true` if style is loading.
     * @template T
     */
    function renderFeature<T>(replayGroup: render.IReplayGroup, feature: Feature, style: style.Style, squaredTolerance: number, listener: (_0: goog.events.Event) => any /*missing*/, thisArg: T): boolean;
}

declare module ol.renderer.webgl.map.shader.ColorFragment {

    /**
     * @const
     * @type {string}
     */
    var DEBUG_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var OPTIMIZED_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var SOURCE: string;
}

declare module ol.renderer.webgl.map.shader.ColorVertex {

    /**
     * @const
     * @type {string}
     */
    var DEBUG_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var OPTIMIZED_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var SOURCE: string;
}

declare module ol.renderer.webgl.map.shader.DefaultFragment {

    /**
     * @const
     * @type {string}
     */
    var DEBUG_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var OPTIMIZED_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var SOURCE: string;
}

declare module ol.renderer.webgl.map.shader.DefaultVertex {

    /**
     * @const
     * @type {string}
     */
    var DEBUG_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var OPTIMIZED_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var SOURCE: string;
}

declare module ol.renderer.webgl.tilelayer.shader.Fragment {

    /**
     * @const
     * @type {string}
     */
    var DEBUG_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var OPTIMIZED_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var SOURCE: string;
}

declare module ol.renderer.webgl.tilelayer.shader.Vertex {

    /**
     * @const
     * @type {string}
     */
    var DEBUG_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var OPTIMIZED_SOURCE: string;

    /**
     * @const
     * @type {string}
     */
    var SOURCE: string;
}
