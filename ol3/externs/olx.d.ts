/// <reference path="../../closure-library/closure/goog/vec/mat4.d.ts" />

declare module olx {

    /**
     * @typedef {{html?: string,
     *     tileRanges?: (Object.<string, Array.<ol.TileRange>>|undefined)}}
     * @api
     */
    interface AttributionOptions {
        html?: string;
        tileRanges?: any; /*{ [key: string]: ol.TileRange[] }|any (undefined)*/
    }

    /**
     * @typedef {{tracking?: (boolean|undefined)}}
     * @api
     */
    interface DeviceOrientationOptions {
        tracking?: any /*boolean|any (undefined)*/
    }

    /**
     * @typedef {{tracking?: (boolean|undefined),
     *     trackingOptions?: (GeolocationPositionOptions|undefined),
     *     projection?: ol.proj.ProjectionLike}}
     * @api
     */
    interface GeolocationOptions {
        tracking?: any /*boolean|any (undefined)*/;
        trackingOptions?: any /*GeolocationPositionOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
    }

    /**
     * Object literal with config options for the map logo.
     * @typedef {{href?: (string), src?: (string)}}
     * @api
     */
    interface LogoOptions {
        href?: string /*string*/;
        src?: string; /*string*/
    }

    /**
     * @typedef {{map?: (ol.Map|undefined),
     *     maxLines?: (number|undefined),
     *     strokeStyle?: (ol.style.Stroke|undefined),
     *     targetSize?: (number|undefined)}}
     * @api
     */
    interface GraticuleOptions {
        map?: ol.Map /*ol.Map|any (undefined)*/;
        maxLines?: number /*number|any (undefined)*/;
        strokeStyle?: ol.style.Stroke /*ol.style.Stroke|any (undefined)*/;
        targetSize?: number; /*number|any (undefined)*/
    }

    /**
     * Object literal with config options for the map.
     * @typedef {{controls?: (ol.Collection.<ol.control.Control>|Array.<ol.control.Control>|undefined),
     *     pixelRatio?: (number|undefined),
     *     interactions?: (ol.Collection.<ol.interaction.Interaction>|Array.<ol.interaction.Interaction>|undefined),
     *     keyboardEventTarget?: (Element|Document|string|undefined),
     *     layers?: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined),
     *     loadTilesWhileAnimating?: (boolean|undefined),
     *     loadTilesWhileInteracting?: (boolean|undefined),
     *     logo?: (boolean|string|olx.LogoOptions|undefined),
     *     overlays?: (ol.Collection.<ol.Overlay>|Array.<ol.Overlay>|undefined),
     *     renderer?: (ol.RendererType|Array.<ol.RendererType|string>|string|undefined),
     *     target?: (Element|string|undefined),
     *     view?: (ol.View|undefined)}}
     * @api
     */
    interface MapOptions {
        controls?: any /*ol.Collection<ol.control.Control>|ol.control.Control[]|any (undefined)*/;
        pixelRatio?: any /*number|any (undefined)*/;
        interactions?: any /*ol.Collection<ol.interaction.Interaction>|ol.interaction.Interaction[]|any (undefined)*/;
        keyboardEventTarget?: any /*Element|Document|string|any (undefined)*/;
        layers?: any /*ol.layer.Base[]|ol.Collection<ol.layer.Base>|any (undefined)*/;
        loadTilesWhileAnimating?: any /*boolean|any (undefined)*/;
        loadTilesWhileInteracting?: any /*boolean|any (undefined)*/;
        logo?: any /*boolean|string|olx.LogoOptions|any (undefined)*/;
        overlays?: any /*ol.Collection<ol.Overlay>|ol.Overlay[]|any (undefined)*/;
        renderer?: any /*ol.RendererType|any (ol.RendererType|string)[]|string|any (undefined)*/;
        target?: any /*Element|string|any (undefined)*/;
        view?: any; /*ol.View|any (undefined)*/
    }

    /**
     * Object literal with config options for the overlay.
     * @typedef {{element?: (Element|undefined),
     *     offset?: (Array.<number>|undefined),
     *     position?: (ol.Coordinate|undefined),
     *     positioning?: (ol.OverlayPositioning|string|undefined),
     *     stopEvent?: (boolean|undefined),
     *     insertFirst?: (boolean|undefined)}}
     * @api stable
     */
    interface OverlayOptions {
        element?: any /*Element|any (undefined)*/;
        offset?: any /*number[]|any (undefined)*/;
        position?: any /*ol.Coordinate|any (undefined)*/;
        positioning?: any /*ol.OverlayPositioning|string|any (undefined)*/;
        stopEvent?: any /*boolean|any (undefined)*/;
        insertFirst?: any; /*boolean|any (undefined)*/
    }

    /**
     * Object literal with config options for the projection.
     * @typedef {{code?: string,
     *     units?: (ol.proj.Units|string),
     *     extent?: (ol.Extent|undefined),
     *     axisOrientation?: (string|undefined),
     *     global?: (boolean|undefined),
     *     worldExtent?: (ol.Extent|undefined)}}
     * @api
     */
    interface ProjectionOptions {
        code?: string;
        units?: any /*ol.proj.Units|string*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        axisOrientation?: any /*string|any (undefined)*/;
        global?: any /*boolean|any (undefined)*/;
        worldExtent?: any; /*ol.Extent|any (undefined)*/
    }

    /**
     * Object literal with config options for the view.
     * @typedef {{center?: (ol.Coordinate|undefined),
     *     constrainRotation?: (boolean|number|undefined),
     *     enableRotation?: (boolean|undefined),
     *     extent?: (ol.Extent|undefined),
     *     minResolution?: (number|undefined),
     *     maxResolution?: (number|undefined),
     *     minZoom?: (number|undefined),
     *     maxZoom?: (number|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     resolution?: (number|undefined),
     *     resolutions?: (Array.<number>|undefined),
     *     rotation?: (number|undefined),
     *     zoom?: (number|undefined),
     *     zoomFactor?: (number|undefined)}}
     * @api
     */
    interface ViewOptions {
        center?: any /*ol.Coordinate|any (undefined)*/;
        constrainRotation?: any /*boolean|number|any (undefined)*/;
        enableRotation?: any /*boolean|any (undefined)*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        maxResolution?: any /*number|any (undefined)*/;
        minZoom?: any /*number|any (undefined)*/;
        maxZoom?: any /*number|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        resolution?: any /*number|any (undefined)*/;
        resolutions?: any /*number[]|any (undefined)*/;
        rotation?: any /*number|any (undefined)*/;
        zoom?: any /*number|any (undefined)*/;
        zoomFactor?: any; /*number|any (undefined)*/
    }

    /**
     * Namespace.
     * @type {Object}
     */
    var animation: Object;

    /**
     * Namespace.
     * @type {Object}
     */
    var control: Object;

    /**
     * Namespace.
     * @type {Object}
     */
    var format: Object;

    /**
     * Namespace.
     * @type {Object}
     */
    var interaction: Object;

    /**
     * Namespace.
     * @type {Object}
     */
    var layer: Object;

    /**
     * @typedef {{features?: (Array.<ol.Feature>|ol.Collection.<ol.Feature>|undefined),
     *     map?: (ol.Map|undefined),
     *     style?: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined)}}
     * @api
     */
    interface FeatureOverlayOptions {
        features?: any /*ol.Feature[]|ol.Collection<ol.Feature>|any (undefined)*/;
        map?: any /*ol.Map|any (undefined)*/;
        style?: any; /*ol.style.Style|ol.style.Style[]|ol.style.StyleFunction|any (undefined)*/
    }

    /**
     * Namespace.
     * @type {Object}
     */
    var source: Object;

    /**
     * Namespace.
     * @type {Object}
     */
    var style: Object;

    /**
     * Namespace.
     * @type {Object}
     */
    var tilegrid: Object;

    /**
     * Namespace.
     * @type {Object}
     */
    var view: Object;

    /**
     * @typedef {{animate?: boolean,
     *     attributions?: Object.<string, ol.Attribution>,
     *     coordinateToPixelMatrix?: goog.vec.Mat4.Number,
     *     extent?: (null|ol.Extent),
     *     focus?: ol.Coordinate,
     *     index?: number,
     *     layerStates?: Object.<number, ol.layer.LayerState>,
     *     layerStatesArray?: Array.<ol.layer.LayerState>,
     *     logos?: Object.<string, string>,
     *     pixelRatio?: number,
     *     pixelToCoordinateMatrix?: goog.vec.Mat4.Number,
     *     postRenderFunctions?: Array.<ol.PostRenderFunction>,
     *     size?: ol.Size,
     *     skippedFeatureUids?: Object.<string, boolean>,
     *     tileQueue?: ol.TileQueue,
     *     time?: number,
     *     usedTiles?: Object.<string, Object.<string, ol.TileRange>>,
     *     viewState?: olx.ViewState,
     *     viewHints?: Array.<number>,
     *     wantedTiles?: Object.<string, Object.<string, boolean>>}}
     * @api
     */
    interface FrameState {
        animate?: boolean;
        attributions?: { [key: string]: ol.Attribution };
        coordinateToPixelMatrix?: goog.vec.Mat4.Number;
        extent?: any /*any (null)|ol.Extent*/;
        focus?: ol.Coordinate;
        index?: number;
        layerStates?: { [key: number]: ol.layer.LayerState };
        layerStatesArray?: ol.layer.LayerState[];
        logos?: { [key: string]: string };
        pixelRatio?: number;
        pixelToCoordinateMatrix?: goog.vec.Mat4.Number;
        postRenderFunctions?: ol.PostRenderFunction[];
        size?: ol.Size;
        skippedFeatureUids?: { [key: string]: boolean };
        tileQueue?: ol.TileQueue;
        time?: number;
        usedTiles?: { [key: string]: { [key: string]: ol.TileRange } };
        viewState?: ViewState;
        viewHints?: number[];
        wantedTiles?: { [key: string]: { [key: string]: boolean } };
    }

    /**
     * @typedef {{center?: ol.Coordinate,
     *     projection?: ol.proj.Projection,
     *     resolution?: number,
     *     rotation?: number}}
     * @api
     */
    interface ViewState {
        center?: ol.Coordinate;
        projection?: ol.proj.Projection;
        resolution?: number;
        rotation?: number;
    }
}

declare module olx.interaction {

    /**
     * Object literal with config options for interactions.
     * @typedef {{handleEvent?: function(ol.MapBrowserEvent)?:boolean}}
     * @api
     */
    interface InteractionOptions {
        handleEvent?: (_0: ol.MapBrowserEvent) => boolean
    }

    /**
     * Interactions for the map. Default is `true` for all options.
     * @typedef {{altShiftDragRotate?: (boolean|undefined),
     *     doubleClickZoom?: (boolean|undefined),
     *     keyboard?: (boolean|undefined),
     *     mouseWheelZoom?: (boolean|undefined),
     *     shiftDragZoom?: (boolean|undefined),
     *     dragPan?: (boolean|undefined),
     *     pinchRotate?: (boolean|undefined),
     *     pinchZoom?: (boolean|undefined),
     *     zoomDelta?: (number|undefined),
     *     zoomDuration?: (number|undefined)}}
     * @api
     */
    interface DefaultsOptions {
        altShiftDragRotate?: any /*boolean|any (undefined)*/;
        doubleClickZoom?: any /*boolean|any (undefined)*/;
        keyboard?: any /*boolean|any (undefined)*/;
        mouseWheelZoom?: any /*boolean|any (undefined)*/;
        shiftDragZoom?: any /*boolean|any (undefined)*/;
        dragPan?: any /*boolean|any (undefined)*/;
        pinchRotate?: any /*boolean|any (undefined)*/;
        pinchZoom?: any /*boolean|any (undefined)*/;
        zoomDelta?: any /*number|any (undefined)*/;
        zoomDuration?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{duration?: (number|undefined),
     *     delta?: (number|undefined)}}
     * @api
     */
    interface DoubleClickZoomOptions {
        duration?: any /*number|any (undefined)*/;
        delta?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{formatConstructors?: (Array.<function(new?: ol.format.Feature)>|undefined),
     *     projection?: ol.proj.ProjectionLike}}
     * @api
     */
    interface DragAndDropOptions {
        formatConstructors?: any /*() => any (missing)[]|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
    }

    /**
     * @typedef {{condition?: (ol.events.ConditionType|undefined),
     *     style?: ol.style.Style}}
     * @api
     */
    interface DragBoxOptions {
        condition?: any /*ol.events.ConditionType|any (undefined)*/;
        style?: ol.style.Style;
    }

    /**
     * @typedef {{kinetic?: (ol.Kinetic|undefined)}}
     * @api
     */
    interface DragPanOptions {
        kinetic?: any /*ol.Kinetic|any (undefined)*/
    }

    /**
     * @typedef {{condition?: (ol.events.ConditionType|undefined)}}
     * @api
     */
    interface DragRotateAndZoomOptions {
        condition?: any /*ol.events.ConditionType|any (undefined)*/
    }

    /**
     * @typedef {{condition?: (ol.events.ConditionType|undefined)}}
     * @api
     */
    interface DragRotateOptions {
        condition?: any /*ol.events.ConditionType|any (undefined)*/
    }

    /**
     * @typedef {{condition?: (ol.events.ConditionType|undefined),
     *     style?: ol.style.Style}}
     * @api
     */
    interface DragZoomOptions {
        condition?: any /*ol.events.ConditionType|any (undefined)*/;
        style?: ol.style.Style;
    }

    /**
     * @typedef {{features?: (ol.Collection.<ol.Feature>|undefined),
     *     source?: (ol.source.Vector|undefined),
     *     snapTolerance?: (number|undefined),
     *     type?: ol.geom.GeometryType,
     *     minPointsPerRing?: (number|undefined),
     *     style?: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined),
     *     geometryName?: (string|undefined),
     *     condition?: (ol.events.ConditionType|undefined)}}
     * @api
     */
    interface DrawOptions {
        features?: any /*ol.Collection<ol.Feature>|any (undefined)*/;
        source?: any /*ol.source.Vector|any (undefined)*/;
        snapTolerance?: any /*number|any (undefined)*/;
        type?: ol.geom.GeometryType;
        minPointsPerRing?: any /*number|any (undefined)*/;
        style?: any /*ol.style.Style|ol.style.Style[]|ol.style.StyleFunction|any (undefined)*/;
        geometryName?: any /*string|any (undefined)*/;
        condition?: any; /*ol.events.ConditionType|any (undefined)*/
    }

    /**
     * @typedef {{condition?: (ol.events.ConditionType|undefined),
     *     pixelDelta?: (number|undefined)}}
     * @api
     */
    interface KeyboardPanOptions {
        condition?: any /*ol.events.ConditionType|any (undefined)*/;
        pixelDelta?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{duration?: (number|undefined),
     *     condition?: (ol.events.ConditionType|undefined),
     *     delta?: (number|undefined)}}
     * @api
     */
    interface KeyboardZoomOptions {
        duration?: any /*number|any (undefined)*/;
        condition?: any /*ol.events.ConditionType|any (undefined)*/;
        delta?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{deleteCondition?: (ol.events.ConditionType|undefined),
     *     pixelTolerance?: (number|undefined),
     *     style?: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined),
     *     features?: ol.Collection.<ol.Feature>}}
     * @api
     */
    interface ModifyOptions {
        deleteCondition?: any /*ol.events.ConditionType|any (undefined)*/;
        pixelTolerance?: any /*number|any (undefined)*/;
        style?: any /*ol.style.Style|ol.style.Style[]|ol.style.StyleFunction|any (undefined)*/;
        features?: ol.Collection<ol.Feature>;
    }

    /**
     * @typedef {{duration?: (number|undefined)}}
     * @api
     */
    interface MouseWheelZoomOptions {
        duration?: any /*number|any (undefined)*/
    }

    /**
     * @typedef {{threshold?: (number|undefined)}}
     * @api
     */
    interface PinchRotateOptions {
        threshold?: any /*number|any (undefined)*/
    }

    /**
     * @typedef {{duration?: (number|undefined)}}
     * @api
     */
    interface PinchZoomOptions {
        duration?: any /*number|any (undefined)*/
    }

    /**
     * @typedef {{handleDownEvent?: (function(ol.MapBrowserPointerEvent)?:boolean|undefined),
     *     handleDragEvent?: (function(ol.MapBrowserPointerEvent)|undefined),
     *     handleEvent?: (function(ol.MapBrowserEvent)?:boolean|undefined),
     *     handleMoveEvent?: (function(ol.MapBrowserPointerEvent)|undefined),
     *     handleUpEvent?: (function(ol.MapBrowserPointerEvent)?:boolean|undefined)}}
     * @api
     */
    interface PointerOptions {
        handleDownEvent?: any /*(_0?: ol.MapBrowserPointerEvent) => boolean|any (undefined)*/;
        handleDragEvent?: any /*(_0?: ol.MapBrowserPointerEvent) => any (missing)|any (undefined)*/;
        handleEvent?: any /*(_0?: ol.MapBrowserEvent) => boolean|any (undefined)*/;
        handleMoveEvent?: any /*(_0?: ol.MapBrowserPointerEvent) => any (missing)|any (undefined)*/;
        handleUpEvent?: any; /*(_0?: ol.MapBrowserPointerEvent) => boolean|any (undefined)*/
    }

    /**
     * @typedef {{addCondition?: (ol.events.ConditionType|undefined),
     *     condition?: (ol.events.ConditionType|undefined),
     *     layers?: (Array.<ol.layer.Layer>|function(ol.layer.Layer)?: boolean|undefined),
     *     style?: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined),
     *     removeCondition?: (ol.events.ConditionType|undefined),
     *     toggleCondition?: (ol.events.ConditionType|undefined)}}
     * @api
     */
    interface SelectOptions {
        addCondition?: any /*ol.events.ConditionType|any (undefined)*/;
        condition?: any /*ol.events.ConditionType|any (undefined)*/;
        layers?: any /*ol.layer.Layer[]|(_0?: ol.layer.Layer) => boolean|any (undefined)*/;
        style?: any /*ol.style.Style|ol.style.Style[]|ol.style.StyleFunction|any (undefined)*/;
        removeCondition?: any /*ol.events.ConditionType|any (undefined)*/;
        toggleCondition?: any; /*ol.events.ConditionType|any (undefined)*/
    }
}

declare module olx.animation {

    /**
     * @typedef {{resolution?: number,
     *     start?: (number|undefined),
     *     duration?: (number|undefined),
     *     easing?: (function(number)?:number|undefined)}}
     * @api
     */
    interface BounceOptions {
        resolution?: number;
        start?: any /*number|any (undefined)*/;
        duration?: any /*number|any (undefined)*/;
        easing?: any; /*(_0?: number) => number|any (undefined)*/
    }

    /**
     * @typedef {{source?: ol.Coordinate,
     *     start?: (number|undefined),
     *     duration?: (number|undefined),
     *     easing?: (function(number)?:number|undefined)}}
     * @api
     */
    interface PanOptions {
        source?: ol.Coordinate;
        start?: any /*number|any (undefined)*/;
        duration?: any /*number|any (undefined)*/;
        easing?: any; /*(_0?: number) => number|any (undefined)*/
    }

    /**
     * @typedef {{rotation?: (number|undefined),
     *     anchor?: (ol.Coordinate|undefined),
     *     start?: (number|undefined),
     *     duration?: (number|undefined),
     *     easing?: (function(number)?:number|undefined)}}
     * @api
     */
    interface RotateOptions {
        rotation?: any /*number|any (undefined)*/;
        anchor?: any /*ol.Coordinate|any (undefined)*/;
        start?: any /*number|any (undefined)*/;
        duration?: any /*number|any (undefined)*/;
        easing?: any; /*(_0?: number) => number|any (undefined)*/
    }

    /**
     * @typedef {{resolution?: number,
     *     start?: (number|undefined),
     *     duration?: (number|undefined),
     *     easing?: (function(number)?:number|undefined)}}
     * @api
     */
    interface ZoomOptions {
        resolution?: number;
        start?: any /*number|any (undefined)*/;
        duration?: any /*number|any (undefined)*/;
        easing?: any; /*(_0?: number) => number|any (undefined)*/
    }
}

declare module olx.control {

    /**
     * @typedef {{className?: (string|undefined),
     *     collapsible?: (boolean|undefined),
     *     collapsed?: (boolean|undefined),
     *     tipLabel?: (string|undefined),
     *     label?: (string|undefined),
     *     collapseLabel?: (string|undefined),
     *     render?: (function(ol.MapEvent)|undefined),
     *     target?: (Element|undefined)}}
     * @api
     */
    interface AttributionOptions {
        className?: any /*string|any (undefined)*/;
        collapsible?: any /*boolean|any (undefined)*/;
        collapsed?: any /*boolean|any (undefined)*/;
        tipLabel?: any /*string|any (undefined)*/;
        label?: any /*string|any (undefined)*/;
        collapseLabel?: any /*string|any (undefined)*/;
        render?: any /*(_0?: ol.MapEvent) => any (missing)|any (undefined)*/;
        target?: any; /*Element|any (undefined)*/
    }

    /**
     * @typedef {{element?: (Element|undefined),
     *     render?: (function(ol.MapEvent)|undefined),
     *     target?: (Element|string|undefined)}}
     * @api stable
     */
    interface ControlOptions {
        element?: any /*Element|any (undefined)*/;
        render?: any /*(_0?: ol.MapEvent) => any (missing)|any (undefined)*/;
        target?: any; /*Element|string|any (undefined)*/
    }

    /**
     * @typedef {{attribution?: (boolean|undefined),
     *     attributionOptions?: (olx.control.AttributionOptions|undefined),
     *     rotate?: (boolean|undefined),
     *     rotateOptions?: (olx.control.RotateOptions|undefined),
     *     zoom?: (boolean|undefined),
     *     zoomOptions?: (olx.control.ZoomOptions|undefined)}}
     * @api
     */
    interface DefaultsOptions {
        attribution?: any /*boolean|any (undefined)*/;
        attributionOptions?: any /*olx.control.AttributionOptions|any (undefined)*/;
        rotate?: any /*boolean|any (undefined)*/;
        rotateOptions?: any /*olx.control.RotateOptions|any (undefined)*/;
        zoom?: any /*boolean|any (undefined)*/;
        zoomOptions?: any; /*olx.control.ZoomOptions|any (undefined)*/
    }

    /**
     * @typedef {{className?: (string|undefined),
     *     tipLabel?: (string|undefined),
     *     keys?: (boolean|undefined),
     *     target?: (Element|undefined)}}
     * @api
     */
    interface FullScreenOptions {
        className?: any /*string|any (undefined)*/;
        tipLabel?: any /*string|any (undefined)*/;
        keys?: any /*boolean|any (undefined)*/;
        target?: any; /*Element|any (undefined)*/
    }

    /**
     * @typedef {{className?: (string|undefined),
     *     coordinateFormat?: (ol.CoordinateFormatType|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     render?: (function(ol.MapEvent)|undefined),
     *     target?: (Element|undefined),
     *     undefinedHTML?: (string|undefined)}}
     * @api stable
     */
    interface MousePositionOptions {
        className?: any /*string|any (undefined)*/;
        coordinateFormat?: any /*ol.CoordinateFormatType|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        render?: any /*(_0?: ol.MapEvent) => any (missing)|any (undefined)*/;
        target?: any /*Element|any (undefined)*/;
        undefinedHTML?: any; /*string|any (undefined)*/
    }

    /**
     * @typedef {{collapsed?: (boolean|undefined),
     *     collapseLabel?: (string|undefined),
     *     collapsible?: (boolean|undefined),
     *     label?: (string|undefined),
     *     layers?: (Array.<ol.layer.Layer>|ol.Collection|undefined),
     *     render?: (function(ol.MapEvent)|undefined),
     *     target?: (Element|undefined),
     *     tipLabel?: (string|undefined)}}
     * @api
     */
    interface OverviewMapOptions {
        collapsed?: any /*boolean|any (undefined)*/;
        collapseLabel?: any /*string|any (undefined)*/;
        collapsible?: any /*boolean|any (undefined)*/;
        label?: any /*string|any (undefined)*/;
        layers?: any /*ol.layer.Layer[]|ol.Collection|any (undefined)*/;
        render?: any /*(_0?: ol.MapEvent) => any (missing)|any (undefined)*/;
        target?: any /*Element|any (undefined)*/;
        tipLabel?: any; /*string|any (undefined)*/
    }

    /**
     * @typedef {{className?: (string|undefined),
     *     minWidth?: (number|undefined),
     *     render?: (function(ol.MapEvent)|undefined),
     *     target?: (Element|undefined),
     *     units?: (ol.control.ScaleLineUnits|string|undefined)}}
     * @api stable
     */
    interface ScaleLineOptions {
        className?: any /*string|any (undefined)*/;
        minWidth?: any /*number|any (undefined)*/;
        render?: any /*(_0?: ol.MapEvent) => any (missing)|any (undefined)*/;
        target?: any /*Element|any (undefined)*/;
        units?: any; /*ol.control.ScaleLineUnits|string|any (undefined)*/
    }

    /**
     * @typedef {{duration?: (number|undefined),
     *     className?: (string|undefined),
     *     label?: (string|undefined),
     *     tipLabel?: (string|undefined),
     *     target?: (Element|undefined),
     *     render?: (function(ol.MapEvent)|undefined),
     *     autoHide?: (boolean|undefined)}}
     * @api stable
     */
    interface RotateOptions {
        duration?: any /*number|any (undefined)*/;
        className?: any /*string|any (undefined)*/;
        label?: any /*string|any (undefined)*/;
        tipLabel?: any /*string|any (undefined)*/;
        target?: any /*Element|any (undefined)*/;
        render?: any /*(_0?: ol.MapEvent) => any (missing)|any (undefined)*/;
        autoHide?: any; /*boolean|any (undefined)*/
    }

    /**
     * @typedef {{duration?: (number|undefined),
     *     className?: (string|undefined),
     *     zoomInLabel?: (string|undefined),
     *     zoomOutLabel?: (string|undefined),
     *     zoomInTipLabel?: (string|undefined),
     *     zoomOutTipLabel?: (string|undefined),
     *     delta?: (number|undefined),
     *     target?: (Element|undefined)}}
     * @api stable
     */
    interface ZoomOptions {
        duration?: any /*number|any (undefined)*/;
        className?: any /*string|any (undefined)*/;
        zoomInLabel?: any /*string|any (undefined)*/;
        zoomOutLabel?: any /*string|any (undefined)*/;
        zoomInTipLabel?: any /*string|any (undefined)*/;
        zoomOutTipLabel?: any /*string|any (undefined)*/;
        delta?: any /*number|any (undefined)*/;
        target?: any; /*Element|any (undefined)*/
    }

    /**
     * @typedef {{className?: (string|undefined),
     *     maxResolution?: (number|undefined),
     *     minResolution?: (number|undefined),
     *     render?: (function(ol.MapEvent)|undefined)}}
     * @api
     */
    interface ZoomSliderOptions {
        className?: any /*string|any (undefined)*/;
        maxResolution?: any /*number|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        render?: any; /*(_0?: ol.MapEvent) => any (missing)|any (undefined)*/
    }

    /**
     * @typedef {{className?: (string|undefined),
     *     target?: (Element|undefined),
     *     tipLabel?: (string|undefined),
     *     extent?: (ol.Extent|undefined)}}
     * @api stable
     */
    interface ZoomToExtentOptions {
        className?: any /*string|any (undefined)*/;
        target?: any /*Element|any (undefined)*/;
        tipLabel?: any /*string|any (undefined)*/;
        extent?: any; /*ol.Extent|any (undefined)*/
    }
}

declare module olx.format {

    /**
     * @typedef {{dataProjection?: ol.proj.ProjectionLike,
     *     featureProjection?: ol.proj.ProjectionLike}}
     * @api
     */
    interface ReadOptions {
        dataProjection?: ol.proj.ProjectionLike;
        featureProjection?: ol.proj.ProjectionLike;
    }

    /**
     * @typedef {{dataProjection?: ol.proj.ProjectionLike,
     *     featureProjection?: ol.proj.ProjectionLike}}
     * @api
     */
    interface WriteOptions {
        dataProjection?: ol.proj.ProjectionLike;
        featureProjection?: ol.proj.ProjectionLike;
    }

    /**
     * @typedef {{defaultDataProjection?: ol.proj.ProjectionLike,
     *     geometryName?: (string|undefined)}}
     * @api
     */
    interface GeoJSONOptions {
        defaultDataProjection?: ol.proj.ProjectionLike;
        geometryName?: any; /*string|any (undefined)*/
    }

    /**
     * @typedef {{factor?: (number|undefined)}}
     * @api
     */
    interface PolylineOptions {
        factor?: any /*number|any (undefined)*/
    }

    /**
     * @typedef {{defaultDataProjection?: ol.proj.ProjectionLike}}
     * @api
     */
    interface TopoJSONOptions {
        defaultDataProjection?: ol.proj.ProjectionLike
    }

    /**
     * @typedef {{altitudeMode?: (ol.format.IGCZ|undefined)}}
     * @api
     */
    interface IGCOptions {
        altitudeMode?: any /*ol.format.IGCZ|any (undefined)*/
    }

    /**
     * @typedef {{extractStyles?: (boolean|undefined),
     *     defaultStyle?: (Array.<ol.style.Style>|undefined)}}
     * @api
     */
    interface KMLOptions {
        extractStyles?: any /*boolean|any (undefined)*/;
        defaultStyle?: any; /*ol.style.Style[]|any (undefined)*/
    }

    /**
     * @typedef {{featureNS?: string,
     *     featureType?: string,
     *     srsName?: string,
     *     surface?: (boolean|undefined),
     *     curve?: (boolean|undefined),
     *     multiCurve?: (boolean|undefined),
     *     multiSurface?: (boolean|undefined),
     *     schemaLocation?: (string|undefined)}}
     * @api
     */
    interface GMLOptions {
        featureNS?: string;
        featureType?: string;
        srsName?: string;
        surface?: any /*boolean|any (undefined)*/;
        curve?: any /*boolean|any (undefined)*/;
        multiCurve?: any /*boolean|any (undefined)*/;
        multiSurface?: any /*boolean|any (undefined)*/;
        schemaLocation?: any; /*string|any (undefined)*/
    }

    /**
     * @typedef {{readExtensions?: (function(ol.Feature, Node)|undefined)}}
     * @api
     */
    interface GPXOptions {
        readExtensions?: any /*(_0?: ol.Feature, _1?: Node) => any (missing)|any (undefined)*/
    }

    /**
     * @typedef {{featureNS?: string,
     *     featureType?: string,
     *     gmlFormat?: (ol.format.GMLBase|undefined),
     *     schemaLocation?: (string|undefined)}}
     * @api
     */
    interface WFSOptions {
        featureNS?: string;
        featureType?: string;
        gmlFormat?: any /*ol.format.GMLBase|any (undefined)*/;
        schemaLocation?: any; /*string|any (undefined)*/
    }

    /**
     * @typedef {{featureNS?: string,
     *     featurePrefix?: string,
     *     featureTypes?: Array.<string>,
     *     srsName?: (string|undefined),
     *     handle?: (string|undefined),
     *     outputFormat?: (string|undefined),
     *     maxFeatures?: (number|undefined),
     *     geometryName?: (string|undefined),
     *     bbox?: (ol.Extent|undefined)}}
     * @api
     */
    interface WFSWriteGetFeatureOptions {
        featureNS?: string;
        featurePrefix?: string;
        featureTypes?: string[];
        srsName?: any /*string|any (undefined)*/;
        handle?: any /*string|any (undefined)*/;
        outputFormat?: any /*string|any (undefined)*/;
        maxFeatures?: any /*number|any (undefined)*/;
        geometryName?: any /*string|any (undefined)*/;
        bbox?: any; /*ol.Extent|any (undefined)*/
    }

    /**
     * @typedef {{featureNS?: string,
     *     featurePrefix?: string,
     *     featureType?: string,
     *     srsName?: (string|undefined),
     *     handle?: (string|undefined),
     *     nativeElements?: Array.<Object>,
     *     gmlOptions?: (olx.format.GMLOptions|undefined)}}
     * @api stable
     */
    interface WFSWriteTransactionOptions {
        featureNS?: string;
        featurePrefix?: string;
        featureType?: string;
        srsName?: any /*string|any (undefined)*/;
        handle?: any /*string|any (undefined)*/;
        nativeElements?: Object[];
        gmlOptions?: any; /*olx.format.GMLOptions|any (undefined)*/
    }

    /**
     * @typedef {{splitCollection?: (boolean|undefined)}}
     * @api
     */
    interface WKTOptions {
        splitCollection?: any /*boolean|any (undefined)*/
    }
}

declare module olx.layer {

    /**
     * @typedef {{brightness?: (number|undefined),
     *     contrast?: (number|undefined),
     *     hue?: (number|undefined),
     *     opacity?: (number|undefined),
     *     saturation?: (number|undefined),
     *     visible?: (boolean|undefined),
     *     extent?: (ol.Extent|undefined),
     *     minResolution?: (number|undefined),
     *     maxResolution?: (number|undefined)}}
     * @api
     */
    interface BaseOptions {
        brightness?: any /*number|any (undefined)*/;
        contrast?: any /*number|any (undefined)*/;
        hue?: any /*number|any (undefined)*/;
        opacity?: any /*number|any (undefined)*/;
        saturation?: any /*number|any (undefined)*/;
        visible?: any /*boolean|any (undefined)*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        maxResolution?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{brightness?: (number|undefined),
     *     contrast?: (number|undefined),
     *     hue?: (number|undefined),
     *     opacity?: (number|undefined),
     *     saturation?: (number|undefined),
     *     source?: (ol.source.Source|undefined),
     *     visible?: (boolean|undefined),
     *     extent?: (ol.Extent|undefined),
     *     minResolution?: (number|undefined),
     *     maxResolution?: (number|undefined)}}
     * @api
     */
    interface LayerOptions {
        brightness?: any /*number|any (undefined)*/;
        contrast?: any /*number|any (undefined)*/;
        hue?: any /*number|any (undefined)*/;
        opacity?: any /*number|any (undefined)*/;
        saturation?: any /*number|any (undefined)*/;
        source?: any /*ol.source.Source|any (undefined)*/;
        visible?: any /*boolean|any (undefined)*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        maxResolution?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{brightness?: (number|undefined),
     *     contrast?: (number|undefined),
     *     hue?: (number|undefined),
     *     opacity?: (number|undefined),
     *     saturation?: (number|undefined),
     *     visible?: (boolean|undefined),
     *     extent?: (ol.Extent|undefined),
     *     minResolution?: (number|undefined),
     *     maxResolution?: (number|undefined),
     *     layers?: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined)}}
     * @api
     */
    interface GroupOptions {
        brightness?: any /*number|any (undefined)*/;
        contrast?: any /*number|any (undefined)*/;
        hue?: any /*number|any (undefined)*/;
        opacity?: any /*number|any (undefined)*/;
        saturation?: any /*number|any (undefined)*/;
        visible?: any /*boolean|any (undefined)*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        maxResolution?: any /*number|any (undefined)*/;
        layers?: any; /*ol.layer.Base[]|ol.Collection<ol.layer.Base>|any (undefined)*/
    }

    /**
     * @typedef {{brightness?: (number|undefined),
     *     contrast?: (number|undefined),
     *     hue?: (number|undefined),
     *     gradient?: (Array.<string>|undefined),
     *     radius?: (number|undefined),
     *     blur?: (number|undefined),
     *     shadow?: (number|undefined),
     *     weight?: (string|function(ol.Feature)?:number|undefined),
     *     extent?: (ol.Extent|undefined),
     *     minResolution?: (number|undefined),
     *     maxResolution?: (number|undefined),
     *     opacity?: (number|undefined),
     *     saturation?: (number|undefined),
     *     source?: (ol.source.Vector|undefined),
     *     visible?: (boolean|undefined)}}
     * @api
     */
    interface HeatmapOptions {
        brightness?: any /*number|any (undefined)*/;
        contrast?: any /*number|any (undefined)*/;
        hue?: any /*number|any (undefined)*/;
        gradient?: any /*string[]|any (undefined)*/;
        radius?: any /*number|any (undefined)*/;
        blur?: any /*number|any (undefined)*/;
        shadow?: any /*number|any (undefined)*/;
        weight?: any /*string|(_0?: ol.Feature) => number|any (undefined)*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        maxResolution?: any /*number|any (undefined)*/;
        opacity?: any /*number|any (undefined)*/;
        saturation?: any /*number|any (undefined)*/;
        source?: any /*ol.source.Vector|any (undefined)*/;
        visible?: any; /*boolean|any (undefined)*/
    }

    /**
     * @typedef {{brightness?: (number|undefined),
     *     contrast?: (number|undefined),
     *     hue?: (number|undefined),
     *     opacity?: (number|undefined),
     *     saturation?: (number|undefined),
     *     source?: (ol.source.Image|undefined),
     *     visible?: (boolean|undefined),
     *     extent?: (ol.Extent|undefined),
     *     minResolution?: (number|undefined),
     *     maxResolution?: (number|undefined)}}
     * @api
     */
    interface ImageOptions {
        brightness?: any /*number|any (undefined)*/;
        contrast?: any /*number|any (undefined)*/;
        hue?: any /*number|any (undefined)*/;
        opacity?: any /*number|any (undefined)*/;
        saturation?: any /*number|any (undefined)*/;
        source?: any /*ol.source.Image|any (undefined)*/;
        visible?: any /*boolean|any (undefined)*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        maxResolution?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{brightness?: (number|undefined),
     *     contrast?: (number|undefined),
     *     hue?: (number|undefined),
     *     opacity?: (number|undefined),
     *     preload?: (number|undefined),
     *     saturation?: (number|undefined),
     *     source?: (ol.source.Tile|undefined),
     *     visible?: (boolean|undefined),
     *     extent?: (ol.Extent|undefined),
     *     minResolution?: (number|undefined),
     *     maxResolution?: (number|undefined),
     *     useInterimTilesOnError?: (boolean|undefined)}}
     * @api
     */
    interface TileOptions {
        brightness?: any /*number|any (undefined)*/;
        contrast?: any /*number|any (undefined)*/;
        hue?: any /*number|any (undefined)*/;
        opacity?: any /*number|any (undefined)*/;
        preload?: any /*number|any (undefined)*/;
        saturation?: any /*number|any (undefined)*/;
        source?: any /*ol.source.Tile|any (undefined)*/;
        visible?: any /*boolean|any (undefined)*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        maxResolution?: any /*number|any (undefined)*/;
        useInterimTilesOnError?: any; /*boolean|any (undefined)*/
    }

    /**
     * @typedef {{brightness?: (number|undefined),
     *     contrast?: (number|undefined),
     *     renderOrder?: (function(ol.Feature, ol.Feature)?:number|null|undefined),
     *     hue?: (number|undefined),
     *     minResolution?: (number|undefined),
     *     maxResolution?: (number|undefined),
     *     opacity?: (number|undefined),
     *     renderBuffer?: (number|undefined),
     *     saturation?: (number|undefined),
     *     source?: (ol.source.Vector|undefined),
     *     style?: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined),
     *     updateWhileAnimating?: (boolean|undefined),
     *     visible?: (boolean|undefined)}}
     * @api
     */
    interface VectorOptions {
        brightness?: any /*number|any (undefined)*/;
        contrast?: any /*number|any (undefined)*/;
        renderOrder?: any /*(_0?: ol.Feature, _1?: ol.Feature) => number|any (null)|any (undefined)*/;
        hue?: any /*number|any (undefined)*/;
        minResolution?: any /*number|any (undefined)*/;
        maxResolution?: any /*number|any (undefined)*/;
        opacity?: any /*number|any (undefined)*/;
        renderBuffer?: any /*number|any (undefined)*/;
        saturation?: any /*number|any (undefined)*/;
        source?: any /*ol.source.Vector|any (undefined)*/;
        style?: any /*ol.style.Style|ol.style.Style[]|ol.style.StyleFunction|any (undefined)*/;
        updateWhileAnimating?: any /*boolean|any (undefined)*/;
        visible?: any; /*boolean|any (undefined)*/
    }
}

declare module olx.source {

    /**
     * @typedef {{culture?: (string|undefined),
     *     key?: string,
     *     imagerySet?: string,
     *     maxZoom?: (number|undefined),
     *     tileLoadFunction?: (ol.TileLoadFunctionType|undefined),
     *     wrapX?: (boolean|undefined)}}
     * @api
     */
    interface BingMapsOptions {
        culture?: any /*string|any (undefined)*/;
        key?: string;
        imagerySet?: string;
        maxZoom?: any /*number|any (undefined)*/;
        tileLoadFunction?: any /*ol.TileLoadFunctionType|any (undefined)*/;
        wrapX?: any; /*boolean|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     distance?: (number|undefined),
     *     extent?: (ol.Extent|undefined),
     *     format?: (ol.format.Feature|undefined),
     *     logo?: (string|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     source?: ol.source.Vector}}
     * @api
     */
    interface ClusterOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        distance?: any /*number|any (undefined)*/;
        extent?: any /*ol.Extent|any (undefined)*/;
        format?: any /*ol.format.Feature|any (undefined)*/;
        logo?: any /*string|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        source?: ol.source.Vector;
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     format?: ol.format.Feature,
     *     logo?: (string|olx.LogoOptions|undefined),
     *     projection?: ol.proj.ProjectionLike}}
     * @api
     */
    interface FormatVectorOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        format?: ol.format.Feature;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     defaultProjection?: ol.proj.ProjectionLike,
     *     logo?: (string|olx.LogoOptions|undefined),
     *     object?: (GeoJSONObject|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     text?: (string|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined)}}
     * @api
     */
    interface GeoJSONOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        defaultProjection?: ol.proj.ProjectionLike;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        object?: any /*GeoJSONObject|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        text?: any /*string|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any; /*string[]|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     doc?: (Document|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     node?: (Node|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     text?: (string|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined)}}
     * @api
     */
    interface GPXOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        doc?: any /*Document|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        node?: any /*Node|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        text?: any /*string|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any; /*string[]|any (undefined)*/
    }

    /**
     * @typedef {{preemptive?: (boolean|undefined),
     *            url?: string}}
     * @api
     */
    interface TileUTFGridOptions {
        preemptive?: any /*boolean|any (undefined)*/;
        url?: string;
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *            crossOrigin?: (null|string|undefined),
     *            logo?: (string|olx.LogoOptions|undefined),
     *            opaque?: (boolean|undefined),
     *            projection?: ol.proj.ProjectionLike,
     *            state?: (ol.source.State|string|undefined),
     *            tileClass?: (function(new?: ol.ImageTile, ol.TileCoord,
     *                                 ol.TileState, string, ?string,
     *                                 ol.TileLoadFunctionType)|undefined),
     *            tileGrid?: (ol.tilegrid.TileGrid|undefined),
     *            tileLoadFunction?: (ol.TileLoadFunctionType|undefined),
     *            tilePixelRatio?: (number|undefined),
     *            tileUrlFunction?: (ol.TileUrlFunctionType|undefined)}}
     * @api
     */
    interface TileImageOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        opaque?: any /*boolean|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        state?: any /*ol.source.State|string|any (undefined)*/;
        tileClass?: any /*(_0?: ol.TileCoord, _1?: ol.TileState, _2?: string, _3?: string, _4?: ol.TileLoadFunctionType) => any (missing)|any (undefined)*/;
        tileGrid?: any /*ol.tilegrid.TileGrid|any (undefined)*/;
        tileLoadFunction?: any /*ol.TileLoadFunctionType|any (undefined)*/;
        tilePixelRatio?: any /*number|any (undefined)*/;
        tileUrlFunction?: any; /*ol.TileUrlFunctionType|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     format?: ol.format.Feature,
     *     logo?: (string|olx.LogoOptions|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     tileGrid?: ol.tilegrid.TileGrid,
     *     tileUrlFunction?: (ol.TileUrlFunctionType|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined)}}
     * @api
     */
    interface TileVectorOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        format?: ol.format.Feature;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        tileGrid?: ol.tilegrid.TileGrid;
        tileUrlFunction?: any /*ol.TileUrlFunctionType|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any; /*string[]|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     defaultProjection?: ol.proj.ProjectionLike,
     *     logo?: (string|olx.LogoOptions|undefined),
     *     object?: (GeoJSONObject|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     text?: (string|undefined),
     *     url?: (string|undefined)}}
     * @api
     */
    interface TopoJSONOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        defaultProjection?: ol.proj.ProjectionLike;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        object?: any /*GeoJSONObject|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        text?: any /*string|any (undefined)*/;
        url?: any; /*string|any (undefined)*/
    }

    /**
     * @typedef {{altitudeMode?: (ol.format.IGCZ|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     text?: (string|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined)}}
     * @api
     */
    interface IGCOptions {
        altitudeMode?: any /*ol.format.IGCZ|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        text?: any /*string|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any; /*string[]|any (undefined)*/
    }

    /**
     * @typedef {{url?: (string|undefined),
     *     displayDpi?: (number|undefined),
     *     metersPerUnit?: (number|undefined),
     *     hidpi?: (boolean|undefined),
     *     useOverlay?: (boolean|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     ratio?: (number|undefined),
     *     resolutions?: (Array.<number>|undefined),
     *     imageLoadFunction?: (ol.ImageLoadFunctionType|undefined),
     *     params?: (Object|undefined)}}
     * @api
     */
    interface ImageMapGuideOptions {
        url?: any /*string|any (undefined)*/;
        displayDpi?: any /*number|any (undefined)*/;
        metersPerUnit?: any /*number|any (undefined)*/;
        hidpi?: any /*boolean|any (undefined)*/;
        useOverlay?: any /*boolean|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        ratio?: any /*number|any (undefined)*/;
        resolutions?: any /*number[]|any (undefined)*/;
        imageLoadFunction?: any /*ol.ImageLoadFunctionType|any (undefined)*/;
        params?: any; /*Object|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     defaultStyle?: (Array.<ol.style.Style>|undefined),
     *     doc?: (Document|undefined),
     *     extractStyles?: (boolean|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     node?: (Node|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     text?: (string|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined)}}
     * @api
     */
    interface KMLOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        defaultStyle?: any /*ol.style.Style[]|any (undefined)*/;
        doc?: any /*Document|any (undefined)*/;
        extractStyles?: any /*boolean|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        node?: any /*Node|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        text?: any /*string|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any; /*string[]|any (undefined)*/
    }

    /**
     * @typedef {{layer?: string,
     *     tileLoadFunction?: (ol.TileLoadFunctionType|undefined)}}
     * @api
     */
    interface MapQuestOptions {
        layer?: string;
        tileLoadFunction?: any; /*ol.TileLoadFunctionType|any (undefined)*/
    }

    /**
     * @typedef {{projection?: ol.proj.ProjectionLike,
     *     tileGrid?: (ol.tilegrid.TileGrid|undefined)}}
     * @api
     */
    interface TileDebugOptions {
        projection?: ol.proj.ProjectionLike;
        tileGrid?: any; /*ol.tilegrid.TileGrid|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     crossOrigin?: (null|string|undefined),
     *     maxZoom?: (number|undefined),
     *     tileLoadFunction?: (ol.TileLoadFunctionType|undefined),
     *     url?: (string|undefined),
     *     wrapX?: (boolean|undefined)}}
     * @api
     */
    interface OSMOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        maxZoom?: any /*number|any (undefined)*/;
        tileLoadFunction?: any /*ol.TileLoadFunctionType|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        wrapX?: any; /*boolean|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     doc?: (Document|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     node?: (Node|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     text?: (string|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined)}}
     * @api
     */
    interface OSMXMLOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        doc?: any /*Document|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        node?: any /*Node|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        text?: any /*string|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any; /*string[]|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     canvasFunction?: ol.CanvasFunctionType,
     *     logo?: (string|olx.LogoOptions|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     ratio?: (number|undefined),
     *     resolutions?: (Array.<number>|undefined),
     *     state?: (ol.source.State|string|undefined)}}
     * @api
     */
    interface ImageCanvasOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        canvasFunction?: ol.CanvasFunctionType;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        ratio?: any /*number|any (undefined)*/;
        resolutions?: any /*number[]|any (undefined)*/;
        state?: any; /*ol.source.State|string|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     ratio?: (number|undefined),
     *     resolutions?: (Array.<number>|undefined),
     *     source?: ol.source.Vector,
     *     style?: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined)}}
     * @api
     */
    interface ImageVectorOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        ratio?: any /*number|any (undefined)*/;
        resolutions?: any /*number[]|any (undefined)*/;
        source?: ol.source.Vector;
        style?: any; /*ol.style.Style|ol.style.Style[]|ol.style.StyleFunction|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     crossOrigin?: (null|string|undefined),
     *     hidpi?: (boolean|undefined),
     *     serverType?: (ol.source.wms.ServerType|string|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     imageLoadFunction?: (ol.ImageLoadFunctionType|undefined),
     *     params?: Object.<string,*>,
     *     projection?: ol.proj.ProjectionLike,
     *     ratio?: (number|undefined),
     *     resolutions?: (Array.<number>|undefined),
     *     url?: (string|undefined)}}
     * @api
     */
    interface ImageWMSOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        hidpi?: any /*boolean|any (undefined)*/;
        serverType?: any /*ol.source.wms.ServerType|string|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        imageLoadFunction?: any /*ol.ImageLoadFunctionType|any (undefined)*/;
        params?: { [key: string]: any };
        projection?: ol.proj.ProjectionLike;
        ratio?: any /*number|any (undefined)*/;
        resolutions?: any /*number[]|any (undefined)*/;
        url?: any; /*string|any (undefined)*/
    }

    /**
     * @typedef {{layer?: string,
     *     minZoom?: (number|undefined),
     *     maxZoom?: (number|undefined),
     *     opaque?: (boolean|undefined),
     *     tileLoadFunction?: (ol.TileLoadFunctionType|undefined),
     *     url?: (string|undefined)}}
     * @api
     */
    interface StamenOptions {
        layer?: string;
        minZoom?: any /*number|any (undefined)*/;
        maxZoom?: any /*number|any (undefined)*/;
        opaque?: any /*boolean|any (undefined)*/;
        tileLoadFunction?: any /*ol.TileLoadFunctionType|any (undefined)*/;
        url?: any; /*string|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     crossOrigin?: (null|string|undefined),
     *     imageExtent?: (ol.Extent),
     *     imageSize?: (ol.Size|undefined),
     *     imageLoadFunction?: (ol.ImageLoadFunctionType|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     url?: string}}
     * @api
     */
    interface ImageStaticOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        imageExtent?: any /*ol.Extent*/;
        imageSize?: any /*ol.Size|any (undefined)*/;
        imageLoadFunction?: any /*ol.ImageLoadFunctionType|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        url?: string;
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     format?: ol.format.Feature,
     *     loader?: function(this?: ol.source.ServerVector, ol.Extent, number, ol.proj.Projection),
     *     strategy?: (function(ol.Extent, number)?: Array.<ol.Extent>|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     projection?: ol.proj.ProjectionLike}}
     * @api
     */
    interface ServerVectorOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        format?: ol.format.Feature;
        loader?: (_0: ol.Extent, _1: number, _2: ol.proj.Projection) => any /*missing*/;
        strategy?: any /*(_0?: ol.Extent, _1?: number) => ol.Extent[]|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
    }

    /**
     * @typedef {{crossOrigin?: (null|string|undefined),
     *     tileLoadFunction?: (ol.TileLoadFunctionType|undefined),
     *     url?: string,
     *     wrapX?: (boolean|undefined)}}
     * @api
     */
    interface TileJSONOptions {
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        tileLoadFunction?: any /*ol.TileLoadFunctionType|any (undefined)*/;
        url?: string;
        wrapX?: any; /*boolean|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     params?: Object.<string,*>,
     *     crossOrigin?: (null|string|undefined),
     *     gutter?: (number|undefined),
     *     hidpi?: (boolean|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     tileGrid?: (ol.tilegrid.TileGrid|undefined),
     *     maxZoom?: (number|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     serverType?: (ol.source.wms.ServerType|string|undefined),
     *     tileLoadFunction?: (ol.TileLoadFunctionType|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined)}}
     * @api
     */
    interface TileWMSOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        params?: { [key: string]: any };
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        gutter?: any /*number|any (undefined)*/;
        hidpi?: any /*boolean|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        tileGrid?: any /*ol.tilegrid.TileGrid|any (undefined)*/;
        maxZoom?: any /*number|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        serverType?: any /*ol.source.wms.ServerType|string|any (undefined)*/;
        tileLoadFunction?: any /*ol.TileLoadFunctionType|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any; /*string[]|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     features?: (Array.<ol.Feature>|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     state?: (ol.source.State|string|undefined)}}
     * @api
     */
    interface VectorOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        features?: any /*ol.Feature[]|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        state?: any; /*ol.source.State|string|any (undefined)*/
    }

    /**
     * @typedef {{arrayBuffer?: (ArrayBuffer|undefined),
     *     attributions?: (Array.<ol.Attribution>|undefined),
     *     doc?: (Document|undefined),
     *     format?: ol.format.Feature,
     *     logo?: (string|olx.LogoOptions|undefined),
     *     node?: (Node|undefined),
     *     object?: (Object|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     text?: (string|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined)}}
     * @api
     */
    interface StaticVectorOptions {
        arrayBuffer?: any /*ArrayBuffer|any (undefined)*/;
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        doc?: any /*Document|any (undefined)*/;
        format?: ol.format.Feature;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        node?: any /*Node|any (undefined)*/;
        object?: any /*Object|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        text?: any /*string|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any; /*string[]|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     crossOrigin?: (string|null|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     tileGrid?: ol.tilegrid.WMTS,
     *     projection?: ol.proj.ProjectionLike,
     *     requestEncoding?: (ol.source.WMTSRequestEncoding|string|undefined),
     *     layer?: string,
     *     style?: string,
     *     tilePixelRatio?: (number|undefined),
     *     version?: (string|undefined),
     *     format?: (string|undefined),
     *     matrixSet?: string,
     *     dimensions?: (Object|undefined),
     *     url?: (string|undefined),
     *     maxZoom?: (number|undefined),
     *     tileLoadFunction?: (ol.TileLoadFunctionType|undefined),
     *     urls?: (Array.<string>|undefined),
     *     tileClass?: (function(new?: ol.ImageTile, ol.TileCoord,
     *                          ol.TileState, string, ?string,
     *                          ol.TileLoadFunctionType)|undefined)}}
     * @api
     */
    interface WMTSOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        crossOrigin?: any /*string|any (null)|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        tileGrid?: ol.tilegrid.WMTS;
        projection?: ol.proj.ProjectionLike;
        requestEncoding?: any /*ol.source.WMTSRequestEncoding|string|any (undefined)*/;
        layer?: string;
        style?: string;
        tilePixelRatio?: any /*number|any (undefined)*/;
        version?: any /*string|any (undefined)*/;
        format?: any /*string|any (undefined)*/;
        matrixSet?: string;
        dimensions?: any /*Object|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        maxZoom?: any /*number|any (undefined)*/;
        tileLoadFunction?: any /*ol.TileLoadFunctionType|any (undefined)*/;
        urls?: any /*string[]|any (undefined)*/;
        tileClass?: any; /*(_0?: ol.TileCoord, _1?: ol.TileState, _2?: string, _3?: string, _4?: ol.TileLoadFunctionType) => any (missing)|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     crossOrigin?: (null|string|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     projection?: ol.proj.ProjectionLike,
     *     maxZoom?: (number|undefined),
     *     minZoom?: (number|undefined),
     *     tileLoadFunction?: (ol.TileLoadFunctionType|undefined),
     *     tilePixelRatio?: (number|undefined),
     *     tileSize?: (number|undefined),
     *     tileUrlFunction?: (ol.TileUrlFunctionType|undefined),
     *     url?: (string|undefined),
     *     urls?: (Array.<string>|undefined),
     *     wrapX?: (boolean|undefined)}}
     * @api
     */
    interface XYZOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        projection?: ol.proj.ProjectionLike;
        maxZoom?: any /*number|any (undefined)*/;
        minZoom?: any /*number|any (undefined)*/;
        tileLoadFunction?: any /*ol.TileLoadFunctionType|any (undefined)*/;
        tilePixelRatio?: any /*number|any (undefined)*/;
        tileSize?: any /*number|any (undefined)*/;
        tileUrlFunction?: any /*ol.TileUrlFunctionType|any (undefined)*/;
        url?: any /*string|any (undefined)*/;
        urls?: any /*string[]|any (undefined)*/;
        wrapX?: any; /*boolean|any (undefined)*/
    }

    /**
     * @typedef {{attributions?: (Array.<ol.Attribution>|undefined),
     *     crossOrigin?: (null|string|undefined),
     *     logo?: (string|olx.LogoOptions|undefined),
     *     url?: !string,
     *     tierSizeCalculation?: (string|undefined),
     *     size?: ol.Size}}
     * @api
     */
    interface ZoomifyOptions {
        attributions?: any /*ol.Attribution[]|any (undefined)*/;
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        logo?: any /*string|olx.LogoOptions|any (undefined)*/;
        url?: string;
        tierSizeCalculation?: any /*string|any (undefined)*/;
        size?: ol.Size;
    }
}

declare module olx.style {

    /**
     * @typedef {{fill?: (ol.style.Fill|undefined),
     *     radius?: number,
     *     snapToPixel?: (boolean|undefined),
     *     stroke?: (ol.style.Stroke|undefined),
     *     atlasManager?: (ol.style.AtlasManager|undefined)}}
     * @api
     */
    interface CircleOptions {
        fill?: any /*ol.style.Fill|any (undefined)*/;
        radius?: number;
        snapToPixel?: any /*boolean|any (undefined)*/;
        stroke?: any /*ol.style.Stroke|any (undefined)*/;
        atlasManager?: any; /*ol.style.AtlasManager|any (undefined)*/
    }

    /**
     * @typedef {{color?: (ol.Color|string|undefined)}}
     * @api
     */
    interface FillOptions {
        color?: any /*ol.Color|string|any (undefined)*/
    }

    /**
     * @typedef {{anchor?: (Array.<number>|undefined),
     *     anchorOrigin?: (ol.style.IconOrigin|undefined),
     *     anchorXUnits?: (ol.style.IconAnchorUnits|undefined),
     *     anchorYUnits?: (ol.style.IconAnchorUnits|undefined),
     *     crossOrigin?: (null|string|undefined),
     *     img?: (Image|undefined),
     *     offset?: (Array.<number>|undefined),
     *     offsetOrigin?: (ol.style.IconOrigin|undefined),
     *     scale?: (number|undefined),
     *     snapToPixel?: (boolean|undefined),
     *     rotateWithView?: (boolean|undefined),
     *     rotation?: (number|undefined),
     *     size?: (ol.Size|undefined),
     *     src?: (string|undefined)}}
     * @api
     */
    interface IconOptions {
        anchor?: any /*number[]|any (undefined)*/;
        anchorOrigin?: any /*ol.style.IconOrigin|any (undefined)*/;
        anchorXUnits?: any /*ol.style.IconAnchorUnits|any (undefined)*/;
        anchorYUnits?: any /*ol.style.IconAnchorUnits|any (undefined)*/;
        crossOrigin?: any /*any (null)|string|any (undefined)*/;
        img?: any /*Image|any (undefined)*/;
        offset?: any /*number[]|any (undefined)*/;
        offsetOrigin?: any /*ol.style.IconOrigin|any (undefined)*/;
        scale?: any /*number|any (undefined)*/;
        snapToPixel?: any /*boolean|any (undefined)*/;
        rotateWithView?: any /*boolean|any (undefined)*/;
        rotation?: any /*number|any (undefined)*/;
        size?: any /*ol.Size|any (undefined)*/;
        src?: any; /*string|any (undefined)*/
    }

    /**
     * Specify radius for regular polygons, or radius1 and radius2 for stars.
     * @typedef {{fill?: (ol.style.Fill|undefined),
     *     points?: number,
     *     radius?: (number|undefined),
     *     radius1?: (number|undefined),
     *     radius2?: (number|undefined),
     *     angle?: (number|undefined),
     *     snapToPixel?: (boolean|undefined),
     *     stroke?: (ol.style.Stroke|undefined),
     *     rotation?: (number|undefined),
     *     atlasManager?: (ol.style.AtlasManager|undefined)}}
     * @api
     */
    interface RegularShapeOptions {
        fill?: any /*ol.style.Fill|any (undefined)*/;
        points?: number;
        radius?: any /*number|any (undefined)*/;
        radius1?: any /*number|any (undefined)*/;
        radius2?: any /*number|any (undefined)*/;
        angle?: any /*number|any (undefined)*/;
        snapToPixel?: any /*boolean|any (undefined)*/;
        stroke?: any /*ol.style.Stroke|any (undefined)*/;
        rotation?: any /*number|any (undefined)*/;
        atlasManager?: any; /*ol.style.AtlasManager|any (undefined)*/
    }

    /**
     * @typedef {{color?: (ol.Color|string|undefined),
     *     lineCap?: (string|undefined),
     *     lineJoin?: (string|undefined),
     *     lineDash?: (Array.<number>|undefined),
     *     miterLimit?: (number|undefined),
     *     width?: (number|undefined)}}
     * @api
     */
    interface StrokeOptions {
        color?: any /*ol.Color|string|any (undefined)*/;
        lineCap?: any /*string|any (undefined)*/;
        lineJoin?: any /*string|any (undefined)*/;
        lineDash?: any /*number[]|any (undefined)*/;
        miterLimit?: any /*number|any (undefined)*/;
        width?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{font?: (string|undefined),
     *     offsetX?: (number|undefined),
     *     offsetY?: (number|undefined),
     *     scale?: (number|undefined),
     *     rotation?: (number|undefined),
     *     text?: (string|undefined),
     *     textAlign?: (string|undefined),
     *     textBaseline?: (string|undefined),
     *     fill?: (ol.style.Fill|undefined),
     *     stroke?: (ol.style.Stroke|undefined)}}
     * @api
     */
    interface TextOptions {
        font?: any /*string|any (undefined)*/;
        offsetX?: any /*number|any (undefined)*/;
        offsetY?: any /*number|any (undefined)*/;
        scale?: any /*number|any (undefined)*/;
        rotation?: any /*number|any (undefined)*/;
        text?: any /*string|any (undefined)*/;
        textAlign?: any /*string|any (undefined)*/;
        textBaseline?: any /*string|any (undefined)*/;
        fill?: any /*ol.style.Fill|any (undefined)*/;
        stroke?: any; /*ol.style.Stroke|any (undefined)*/
    }

    /**
     * @typedef {{geometry?: (undefined|string|ol.geom.Geometry|ol.style.GeometryFunction),
     *     fill?: (ol.style.Fill|undefined),
     *     image?: (ol.style.Image|undefined),
     *     stroke?: (ol.style.Stroke|undefined),
     *     text?: (ol.style.Text|undefined),
     *     zIndex?: (number|undefined)}}
     * @api
     */
    interface StyleOptions {
        geometry?: any /*any (undefined)|string|ol.geom.Geometry|ol.style.GeometryFunction*/;
        fill?: any /*ol.style.Fill|any (undefined)*/;
        image?: any /*ol.style.Image|any (undefined)*/;
        stroke?: any /*ol.style.Stroke|any (undefined)*/;
        text?: any /*ol.style.Text|any (undefined)*/;
        zIndex?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{initialSize?: (number|undefined),
     *     maxSize?: (number|undefined),
     *     space?: (number|undefined)}}
     * @api
     */
    interface AtlasManagerOptions {
        initialSize?: any /*number|any (undefined)*/;
        maxSize?: any /*number|any (undefined)*/;
        space?: any; /*number|any (undefined)*/
    }
}

declare module olx.tilegrid {

    /**
     * @typedef {{minZoom?: (number|undefined),
     *     origin?: (ol.Coordinate|undefined),
     *     origins?: (Array.<ol.Coordinate>|undefined),
     *     resolutions?: !Array.<number>,
     *     tileSize?: (number|undefined),
     *     tileSizes?: (Array.<number>|undefined)}}
     * @api
     */
    interface TileGridOptions {
        minZoom?: any /*number|any (undefined)*/;
        origin?: any /*ol.Coordinate|any (undefined)*/;
        origins?: any /*ol.Coordinate[]|any (undefined)*/;
        resolutions?: number[];
        tileSize?: any /*number|any (undefined)*/;
        tileSizes?: any; /*number[]|any (undefined)*/
    }

    /**
     * @typedef {{origin?: (ol.Coordinate|undefined),
     *     origins?: (Array.<ol.Coordinate>|undefined),
     *     resolutions?: !Array.<number>,
     *     matrixIds?: !Array.<string>,
     *     tileSize?: (number|undefined),
     *     tileSizes?: (Array.<number>|undefined)}}
     * @api
     */
    interface WMTSOptions {
        origin?: any /*ol.Coordinate|any (undefined)*/;
        origins?: any /*ol.Coordinate[]|any (undefined)*/;
        resolutions?: number[];
        matrixIds?: string[];
        tileSize?: any /*number|any (undefined)*/;
        tileSizes?: any; /*number[]|any (undefined)*/
    }

    /**
     * @typedef {{extent?: (ol.Extent|undefined),
     *     maxZoom?: (number|undefined),
     *     minZoom?: (number|undefined),
     *     tileSize?: (number|undefined)}}
     * @api
     */
    interface XYZOptions {
        extent?: any /*ol.Extent|any (undefined)*/;
        maxZoom?: any /*number|any (undefined)*/;
        minZoom?: any /*number|any (undefined)*/;
        tileSize?: any; /*number|any (undefined)*/
    }

    /**
     * @typedef {{resolutions?: !Array.<number>}}
     * @api
     */
    interface ZoomifyOptions {
        resolutions?: number[]
    }
}

declare module olx.view {

    /**
     * @typedef {{padding?: !Array.<number>,
     *     constrainResolution?: (boolean|undefined),
     *     nearest?: (boolean|undefined),
     *     maxZoom?: (number|undefined),
     *     minResolution?: (number|undefined)}}
     * @api
     */
    interface FitGeometryOptions {
        padding?: number[];
        constrainResolution?: any /*boolean|any (undefined)*/;
        nearest?: any /*boolean|any (undefined)*/;
        maxZoom?: any /*number|any (undefined)*/;
        minResolution?: any; /*number|any (undefined)*/
    }
}
