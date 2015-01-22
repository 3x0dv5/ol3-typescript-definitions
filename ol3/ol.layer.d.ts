declare module ol.layer {

    class Base extends Base.__Class { }
    module Base {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.Object.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Note that with `ol.layer.Base` and all its subclasses, any property set in
             * the options is set as a {@link ol.Object} property on the layer object, so
             * is observable, and has get/set accessors.
             *
             * @constructor
             * @extends {ol.Object}
             * @param {olx.layer.BaseOptions} options Layer options.
             * @api stable
             */
            constructor(options: olx.layer.BaseOptions);
    
            /**
             * @return {number|undefined} The brightness of the layer.
             * @observable
             * @api
             */
            getBrightness(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} The contrast of the layer.
             * @observable
             * @api
             */
            getContrast(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} The hue of the layer.
             * @observable
             * @api
             */
            getHue(): any /*number|any (undefined)*/;
    
            /**
             * @return {ol.layer.LayerState} Layer state.
             */
            getLayerState(): LayerState;
    
            /**
             * @param {Array.<ol.layer.Layer>=} opt_array Array of layers (to be
             *     modified in place).
             * @return {Array.<ol.layer.Layer>} Array of layers.
             */
            getLayersArray(opt_array?: Layer[]): Layer[];
    
            /**
             * @param {Array.<ol.layer.LayerState>=} opt_states Optional list of layer
             *     states (to be modified in place).
             * @return {Array.<ol.layer.LayerState>} List of layer states.
             */
            getLayerStatesArray(opt_states?: LayerState[]): LayerState[];
    
            /**
             * @return {ol.Extent|undefined} The layer extent.
             * @observable
             * @api stable
             */
            getExtent(): any /*ol.Extent|any (undefined)*/;
    
            /**
             * @return {number|undefined} The maximum resolution of the layer.
             * @observable
             * @api stable
             */
            getMaxResolution(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} The minimum resolution of the layer.
             * @observable
             * @api stable
             */
            getMinResolution(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} The opacity of the layer.
             * @observable
             * @api stable
             */
            getOpacity(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} The saturation of the layer.
             * @observable
             * @api
             */
            getSaturation(): any /*number|any (undefined)*/;
    
            /**
             * @return {ol.source.State} Source state.
             */
            getSourceState(): ol.source.State;
    
            /**
             * @return {boolean|undefined} The visiblity of the layer.
             * @observable
             * @api stable
             */
            getVisible(): any /*boolean|any (undefined)*/;
    
            /**
             * Adjust the layer brightness.  A value of -1 will render the layer completely
             * black.  A value of 0 will leave the brightness unchanged.  A value of 1 will
             * render the layer completely white.  Other values are linear multipliers on
             * the effect (values are clamped between -1 and 1).
             *
             * The filter effects draft [1] says the brightness function is supposed to
             * render 0 black, 1 unchanged, and all other values as a linear multiplier.
             *
             * The current WebKit implementation clamps values between -1 (black) and 1
             * (white) [2].  There is a bug open to change the filter effect spec [3].
             *
             * TODO: revisit this if the spec is still unmodified before we release
             *
             * [1] https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
             * [2] https://github.com/WebKit/webkit/commit/8f4765e569
             * [3] https://www.w3.org/Bugs/Public/show_bug.cgi?id=15647
             *
             * @param {number|undefined} brightness The brightness of the layer.
             * @observable
             * @api
             */
            setBrightness(brightness: number): void;
            /**
             * Adjust the layer brightness.  A value of -1 will render the layer completely
             * black.  A value of 0 will leave the brightness unchanged.  A value of 1 will
             * render the layer completely white.  Other values are linear multipliers on
             * the effect (values are clamped between -1 and 1).
             *
             * The filter effects draft [1] says the brightness function is supposed to
             * render 0 black, 1 unchanged, and all other values as a linear multiplier.
             *
             * The current WebKit implementation clamps values between -1 (black) and 1
             * (white) [2].  There is a bug open to change the filter effect spec [3].
             *
             * TODO: revisit this if the spec is still unmodified before we release
             *
             * [1] https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
             * [2] https://github.com/WebKit/webkit/commit/8f4765e569
             * [3] https://www.w3.org/Bugs/Public/show_bug.cgi?id=15647
             *
             * @param {number|undefined} brightness The brightness of the layer.
             * @observable
             * @api
             */
            setBrightness(brightness: any /*undefined*/): void;
    
            /**
             * Adjust the layer contrast.  A value of 0 will render the layer completely
             * grey.  A value of 1 will leave the contrast unchanged.  Other values are
             * linear multipliers on the effect (and values over 1 are permitted).
             *
             * @param {number|undefined} contrast The contrast of the layer.
             * @observable
             * @api
             */
            setContrast(contrast: number): void;
            /**
             * Adjust the layer contrast.  A value of 0 will render the layer completely
             * grey.  A value of 1 will leave the contrast unchanged.  Other values are
             * linear multipliers on the effect (and values over 1 are permitted).
             *
             * @param {number|undefined} contrast The contrast of the layer.
             * @observable
             * @api
             */
            setContrast(contrast: any /*undefined*/): void;
    
            /**
             * Apply a hue-rotation to the layer.  A value of 0 will leave the hue
             * unchanged.  Other values are radians around the color circle.
             * @param {number|undefined} hue The hue of the layer.
             * @observable
             * @api
             */
            setHue(hue: number): void;
            /**
             * Apply a hue-rotation to the layer.  A value of 0 will leave the hue
             * unchanged.  Other values are radians around the color circle.
             * @param {number|undefined} hue The hue of the layer.
             * @observable
             * @api
             */
            setHue(hue: any /*undefined*/): void;
    
            /**
             * Set the extent at which the layer is visible.  If `undefined`, the layer
             * will be visible at all extents.
             * @param {ol.Extent|undefined} extent The extent of the layer.
             * @observable
             * @api stable
             */
            setExtent(extent: ol.Extent): void;
            /**
             * Set the extent at which the layer is visible.  If `undefined`, the layer
             * will be visible at all extents.
             * @param {ol.Extent|undefined} extent The extent of the layer.
             * @observable
             * @api stable
             */
            setExtent(extent: any /*undefined*/): void;
    
            /**
             * @param {number|undefined} maxResolution The maximum resolution of the layer.
             * @observable
             * @api stable
             */
            setMaxResolution(maxResolution: number): void;
            /**
             * @param {number|undefined} maxResolution The maximum resolution of the layer.
             * @observable
             * @api stable
             */
            setMaxResolution(maxResolution: any /*undefined*/): void;
    
            /**
             * @param {number|undefined} minResolution The minimum resolution of the layer.
             * @observable
             * @api stable
             */
            setMinResolution(minResolution: number): void;
            /**
             * @param {number|undefined} minResolution The minimum resolution of the layer.
             * @observable
             * @api stable
             */
            setMinResolution(minResolution: any /*undefined*/): void;
    
            /**
             * @param {number|undefined} opacity The opacity of the layer.
             * @observable
             * @api stable
             */
            setOpacity(opacity: number): void;
            /**
             * @param {number|undefined} opacity The opacity of the layer.
             * @observable
             * @api stable
             */
            setOpacity(opacity: any /*undefined*/): void;
    
            /**
             * Adjust layer saturation.  A value of 0 will render the layer completely
             * unsaturated.  A value of 1 will leave the saturation unchanged.  Other
             * values are linear multipliers of the effect (and values over 1 are
             * permitted).
             *
             * @param {number|undefined} saturation The saturation of the layer.
             * @observable
             * @api
             */
            setSaturation(saturation: number): void;
            /**
             * Adjust layer saturation.  A value of 0 will render the layer completely
             * unsaturated.  A value of 1 will leave the saturation unchanged.  Other
             * values are linear multipliers of the effect (and values over 1 are
             * permitted).
             *
             * @param {number|undefined} saturation The saturation of the layer.
             * @observable
             * @api
             */
            setSaturation(saturation: any /*undefined*/): void;
    
            /**
             * @param {boolean|undefined} visible The visiblity of the layer.
             * @observable
             * @api stable
             */
            setVisible(visible: boolean): void;
            /**
             * @param {boolean|undefined} visible The visiblity of the layer.
             * @observable
             * @api stable
             */
            setVisible(visible: any /*undefined*/): void;
        }
    }

    class Layer extends Layer.__Class { }
    module Layer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Base.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * A visual representation of raster or vector map data.
             * Layers group together those properties that pertain to how the data is to be
             * displayed, irrespective of the source of that data.
             *
             * @constructor
             * @extends {ol.layer.Base}
             * @fires ol.render.Event
             * @fires change Triggered when the state of the source changes.
             * @param {olx.layer.LayerOptions} options Layer options.
             * @api stable
             */
            constructor(options: olx.layer.LayerOptions);
    
            /**
             * Get the layer source.
             * @return {ol.source.Source} The layer source (or `null` if not yet set).
             * @observable
             * @api stable
             */
            getSource(): ol.source.Source;
    
            /**
             * Set the layer source.
             * @param {ol.source.Source} source The layer source.
             * @observable
             * @api stable
             */
            setSource(source: ol.source.Source): void;
        }
    }

    class Group extends Group.__Class { }
    module Group {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Base.__Class {
    
            /**
             * @classdesc
             * A {@link ol.Collection} of layers that are handled together.
             *
             * @constructor
             * @extends {ol.layer.Base}
             * @fires change Triggered when the group/Collection changes.
             * @param {olx.layer.GroupOptions=} opt_options Layer options.
             * @api stable
             */
            constructor(opt_options?: olx.layer.GroupOptions);
    
            /**
             * @return {!ol.Collection.<ol.layer.Base>} Collection of
             * {@link ol.layer.Layer layers} that are part of this group.
             * @observable
             * @api stable
             */
            getLayers(): ol.Collection<Base>;
    
            /**
             * @param {!ol.Collection.<ol.layer.Base>} layers Collection of
             * {@link ol.layer.Layer layers} that are part of this group.
             * @observable
             * @api stable
             */
            setLayers(layers: ol.Collection<Base>): void;
    
        }
    }

    class Image extends Image.__Class { }
    module Image {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @classdesc
             * Server-rendered images that are available for arbitrary extents and
             * resolutions.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @constructor
             * @extends {ol.layer.Layer}
             * @fires ol.render.Event
             * @param {olx.layer.ImageOptions=} opt_options Layer options.
             * @api stable
             */
            constructor(opt_options?: olx.layer.ImageOptions);
    
            /**
             * @function
             * @return {ol.source.Image} Source.
             * @api stable
             */
            getSource(): ol.source.Image;
        }
    }

    class Tile extends Tile.__Class { }
    module Tile {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @classdesc
             * For layer sources that provide pre-rendered, tiled images in grids that are
             * organized by zoom levels for specific resolutions.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @constructor
             * @extends {ol.layer.Layer}
             * @fires ol.render.Event
             * @param {olx.layer.TileOptions=} opt_options Tile layer options.
             * @api stable
             */
            constructor(opt_options?: olx.layer.TileOptions);
    
            /**
             * @return {number|undefined} The level to preload tiles up to.
             * @observable
             * @api
             */
            getPreload(): any /*number|any (undefined)*/;
    
            /**
             * @function
             * @return {ol.source.Tile} Source.
             * @api stable
             */
            getSource(): ol.source.Tile;
    
            /**
             * @param {number} preload The level to preload tiles up to.
             * @observable
             * @api
             */
            setPreload(preload: number): void;
    
            /**
             * @return {boolean|undefined} Use interim tiles on error.
             * @observable
             * @api
             */
            getUseInterimTilesOnError(): any /*boolean|any (undefined)*/;
    
            /**
             * @param {boolean|undefined} useInterimTilesOnError Use interim tiles on error.
             * @observable
             * @api
             */
            setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
            /**
             * @param {boolean|undefined} useInterimTilesOnError Use interim tiles on error.
             * @observable
             * @api
             */
            setUseInterimTilesOnError(useInterimTilesOnError: any /*undefined*/): void;
        }
    }

    class Vector extends Vector.__Class { }
    module Vector {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Layer.__Class {
    
            /**
             * @classdesc
             * Vector data that is rendered client-side.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @constructor
             * @extends {ol.layer.Layer}
             * @fires ol.render.Event
             * @param {olx.layer.VectorOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.layer.VectorOptions);
    
            /**
             * @return {number|undefined} Render buffer.
             */
            getRenderBuffer(): any /*number|any (undefined)*/;
    
            /**
             * @return {function(ol.Feature, ol.Feature): number|null|undefined} Render
             *     order.
             */
            getRenderOrder(): any /*(_0: ol.Feature, _1: ol.Feature) => number|any (null)|any (undefined)*/;
    
            /**
             * @function
             * @return {ol.source.Vector} Source.
             * @api stable
             */
            getSource(): ol.source.Vector;
    
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
             * @param {function(ol.Feature, ol.Feature):number|null|undefined} renderOrder
             *     Render order.
             */
            setRenderOrder(renderOrder: (_0: ol.Feature, _1: ol.Feature) => number): void;
            /**
             * @param {function(ol.Feature, ol.Feature):number|null|undefined} renderOrder
             *     Render order.
             */
            setRenderOrder(renderOrder: any /*null*/): void;
    
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

    class Heatmap extends Heatmap.__Class { }
    module Heatmap {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Vector.__Class {
    
            /**
             * @classdesc
             * Layer for rendering vector data as a heatmap.
             * Note that any property set in the options is set as a {@link ol.Object}
             * property on the layer object; for example, setting `title: 'My Title'` in the
             * options means that `title` is observable, and has get/set accessors.
             *
             * @constructor
             * @extends {ol.layer.Vector}
             * @fires ol.render.Event
             * @param {olx.layer.HeatmapOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.layer.HeatmapOptions);
    
            /**
             * @return {Array.<string>} Colors.
             * @api
             * @observable
             */
            getGradient(): string[];
    
            /**
             * @param {Array.<string>} colors Gradient.
             * @api
             * @observable
             */
            setGradient(colors: string[]): void;
    
            /**
             * The code for this error.
             *
             * @type {goog.net.jsloader.ErrorCode}
             */
            code: goog.net.jsloader.ErrorCode;
        }
    }

    /**
     * @enum {string}
     */
    enum LayerProperty { BRIGHTNESS, CONTRAST, HUE, OPACITY, SATURATION, VISIBLE, EXTENT, MAX_RESOLUTION, MIN_RESOLUTION, SOURCE } 

    /**
     * @typedef {{layer: ol.layer.Layer,
     *            brightness: number,
     *            contrast: number,
     *            hue: number,
     *            opacity: number,
     *            saturation: number,
     *            sourceState: ol.source.State,
     *            visible: boolean,
     *            extent: (ol.Extent|undefined),
     *            maxResolution: number,
     *            minResolution: number}}
     */
    interface LayerState {
        layer: Layer;
        brightness: number;
        contrast: number;
        hue: number;
        opacity: number;
        saturation: number;
        sourceState: source.State;
        visible: boolean;
        extent: any /*ol.Extent|any (undefined)*/;
        maxResolution: number;
        minResolution: number;
    }

    /**
     * @enum {string}
     */
    enum GroupProperty { LAYERS } 

    /**
     * @enum {string}
     */
    enum TileProperty { PRELOAD, USE_INTERIM_TILES_ON_ERROR } 

    /**
     * @enum {string}
     */
    enum VectorProperty { RENDER_ORDER } 

    /**
     * @enum {string}
     */
    enum HeatmapLayerProperty { GRADIENT }
}

declare module ol.layer.Layer {

    /**
     * Return `true` if the layer is visible, and if the passed resolution is
     * between the layer's minResolution and maxResolution. The comparison is
     * inclusive for `minResolution` and exclusive for `maxResolution`.
     * @param {ol.layer.LayerState} layerState Layer state.
     * @param {number} resolution Resolution.
     * @return {boolean} The layer is visible at the given resolution.
     */
    function visibleAtResolution(layerState: LayerState, resolution: number): boolean;
}


declare module ol.layer.Heatmap {

    /**
     * @const
     * @type {Array.<string>}
     */
    var DEFAULT_GRADIENT: string[];
}
