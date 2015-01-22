///<reference path="ol.webgl.d.ts"/>
///<reference path="ol.d.ts"/>

declare module ol.render {

    interface IVectorContext {
    
        /**
          * @param {number} zIndex Z index.
          * @param {function(ol.render.IVectorContext)} callback Callback.
          */
        drawAsync(zIndex: number, callback: (_0: IVectorContext) => any /*missing*/): void;
    
        /**
          * @param {ol.geom.Circle} circleGeometry Circle geometry.
          * @param {ol.Feature} feature Feature,
          */
        drawCircleGeometry(circleGeometry: geom.Circle, feature: Feature): void;
    
        /**
          * @param {ol.Feature} feature Feature.
          * @param {ol.style.Style} style Style.
          */
        drawFeature(feature: Feature, style: style.Style): void;
    
        /**
          * @param {ol.geom.GeometryCollection} geometryCollectionGeometry Geometry
          *     collection.
          * @param {ol.Feature} feature Feature.
          */
        drawGeometryCollectionGeometry(geometryCollectionGeometry: geom.GeometryCollection, feature: Feature): void;
    
        /**
          * @param {ol.geom.Point} pointGeometry Point geometry.
          * @param {ol.Feature} feature Feature.
          */
        drawPointGeometry(pointGeometry: geom.Point, feature: Feature): void;
    
        /**
          * @param {ol.geom.LineString} lineStringGeometry Line string geometry.
          * @param {ol.Feature} feature Feature.
          */
        drawLineStringGeometry(lineStringGeometry: geom.LineString, feature: Feature): void;
    
        /**
          * @param {ol.geom.MultiLineString} multiLineStringGeometry
          *     MultiLineString geometry.
          * @param {ol.Feature} feature Feature.
          */
        drawMultiLineStringGeometry(multiLineStringGeometry: geom.MultiLineString, feature: Feature): void;
    
        /**
          * @param {ol.geom.MultiPoint} multiPointGeometry MultiPoint geometry.
          * @param {ol.Feature} feature Feature.
          */
        drawMultiPointGeometry(multiPointGeometry: geom.MultiPoint, feature: Feature): void;
    
        /**
          * @param {ol.geom.MultiPolygon} multiPolygonGeometry MultiPolygon geometry.
          * @param {ol.Feature} feature Feature.
          */
        drawMultiPolygonGeometry(multiPolygonGeometry: geom.MultiPolygon, feature: Feature): void;
    
        /**
          * @param {ol.geom.Polygon} polygonGeometry Polygon geometry.
          * @param {ol.Feature} feature Feature.
          */
        drawPolygonGeometry(polygonGeometry: geom.Polygon, feature: Feature): void;
    
        /**
          * @param {Array.<number>} flatCoordinates Flat coordinates.
          * @param {number} offset Offset.
          * @param {number} end End.
          * @param {number} stride Stride.
          * @param {ol.geom.Geometry} geometry Geometry.
          * @param {ol.Feature} feature Feature.
          */
        drawText(flatCoordinates: number[], offset: number, end: number, stride: number, geometry: geom.Geometry, feature: Feature): void;
    
        /**
          * @param {ol.style.Fill} fillStyle Fill style.
          * @param {ol.style.Stroke} strokeStyle Stroke style.
          */
        setFillStrokeStyle(fillStyle: style.Fill, strokeStyle: style.Stroke): void;
    
        /**
          * @param {ol.style.Image} imageStyle Image style.
          */
        setImageStyle(imageStyle: style.Image): void;
    
        /**
          * @param {ol.style.Text} textStyle Text style.
          */
        setTextStyle(textStyle: style.Text): void;
    }

    class Event extends Event.__Class { }
    module Event {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class implements oli.render.Event {
    
            /**
             * @constructor
             * @extends {goog.events.Event}
             * @implements {oli.render.Event}
             * @param {ol.render.EventType} type Type.
             * @param {Object=} opt_target Target.
             * @param {ol.render.IVectorContext=} opt_vectorContext Vector context.
             * @param {ol.render.IReplayGroup=} opt_replayGroup Replay group.
             * @param {olx.FrameState=} opt_frameState Frame state.
             * @param {?CanvasRenderingContext2D=} opt_context Context.
             * @param {?ol.webgl.Context=} opt_glContext WebGL Context.
             */
            constructor(type: render.EventType, opt_target?: Object, opt_vectorContext?: IVectorContext, opt_replayGroup?: IReplayGroup, opt_frameState?: olx.FrameState, opt_context?: CanvasRenderingContext2D, opt_glContext?: ol.webgl.Context);
    
            /**
             * For canvas, this is an instance of {@link ol.render.canvas.Immediate}.
             * @type {ol.render.IVectorContext|undefined}
             * @api
             */
            vectorContext: any /*ol.render.IVectorContext|any (undefined)*/;
    
            /**
             * @type {ol.render.IReplayGroup|undefined}
             */
            replayGroup: any /*ol.render.IReplayGroup|any (undefined)*/;
    
            /**
             * @type {olx.FrameState|undefined}
             * @api
             */
            frameState: any /*olx.FrameState|any (undefined)*/;
    
            /**
             * Canvas context. Only available when a Canvas renderer is used, null
             * otherwise.
             * @type {CanvasRenderingContext2D|null|undefined}
             * @api
             */
            context: any /*CanvasRenderingContext2D|any (null)|any (undefined)*/;
    
            /**
             * WebGL context. Only available when a WebGL renderer is used, null
             * otherwise.
             * @type {ol.webgl.Context|null|undefined}
             * @api
             */
            glContext: any /*ol.webgl.Context|any (null)|any (undefined)*/;
        }
    }

    class Box extends Box.__Class { }
    module Box {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
            /**
             * @constructor
             * @extends {goog.Disposable}
             * @param {ol.style.Style} style Style.
             */
            constructor(style: ol.style.Style);
    
            /**
             * @inheritDoc
             */
            disposeInternal(): void;
    
            /**
             * @return {ol.geom.Polygon} Geometry.
             */
            getGeometry(): ol.geom.Polygon;
    
            /**
             * @param {ol.Map} map Map.
             */
            setMap(map: ol.Map): void;
    
            /**
             * @param {ol.Pixel} startPixel Start pixel.
             * @param {ol.Pixel} endPixel End pixel.
             */
            setPixels(startPixel: ol.Pixel, endPixel: ol.Pixel): void;
        }
    }

    interface IReplayGroup {
    
        /**
          * @param {number|undefined} zIndex Z index.
          * @param {ol.render.ReplayType} replayType Replay type.
          * @return {ol.render.IVectorContext} Replay.
          */
        getReplay(zIndex: number, replayType: render.ReplayType): IVectorContext;
        /**
          * @param {number|undefined} zIndex Z index.
          * @param {ol.render.ReplayType} replayType Replay type.
          * @return {ol.render.IVectorContext} Replay.
          */
        getReplay(zIndex: any /*undefined*/, replayType: render.ReplayType): IVectorContext;
    
        /**
          * @return {boolean} Is empty.
          */
        isEmpty(): boolean;
    }

    /**
     * @enum {string}
     */
    enum EventType { POSTCOMPOSE, PRECOMPOSE, RENDER } 

    /**
     * @enum {string}
     */
    enum ReplayType { IMAGE, LINE_STRING, POLYGON, TEXT } 

    /**
     * @const
     * @type {Array.<ol.render.ReplayType>}
     */
    var REPLAY_ORDER: render.ReplayType[];
}

declare module ol.render.canvas {

    class Immediate extends Immediate.__Class { }
    module Immediate {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements IVectorContext {
    
            /**
             * @classdesc
             * A concrete subclass of {@link ol.render.IVectorContext} that implements
             * direct rendering of features and geometries to an HTML5 Canvas context.
             * Instances of this class are created internally by the library and
             * provided to application code as vectorContext member of the
             * {@link ol.render.Event} object associated with postcompose, precompose and
             * render events emitted by layers and maps.
             *
             * @constructor
             * @implements {ol.render.IVectorContext}
             * @param {CanvasRenderingContext2D} context Context.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.Extent} extent Extent.
             * @param {goog.vec.Mat4.Number} transform Transform.
             * @param {number} viewRotation View rotation.
             * @struct
             */
            constructor(context: CanvasRenderingContext2D, pixelRatio: number, extent: ol.Extent, transform: goog.vec.Mat4.Number, viewRotation: number);
    
            /**
             * Register a function to be called for rendering at a given zIndex.  The
             * function will be called asynchronously.  The callback will receive a
             * reference to {@link ol.render.canvas.Immediate} context for drawing.
             *
             * @param {number} zIndex Z index.
             * @param {function(ol.render.canvas.Immediate)} callback Callback.
             * @api
             */
            drawAsync(zIndex: number, callback: (_0: Immediate) => any /*missing*/): void;
    
            /**
             * Render a circle geometry into the canvas.  Rendering is immediate and uses
             * the current fill and stroke styles.
             *
             * @param {ol.geom.Circle} circleGeometry Circle geometry.
             * @param {ol.Feature} feature Feature,
             * @api
             */
            drawCircleGeometry(circleGeometry: ol.geom.Circle, feature: ol.Feature): void;
    
            /**
             * Render a feature into the canvas.  In order to respect the zIndex of the
             * style this method draws asynchronously and thus *after* calls to
             * drawXxxxGeometry have been finished, effectively drawing the feature
             * *on top* of everything else.  You probably should be using
             * {@link ol.FeatureOverlay} instead of calling this method directly.
             *
             * @param {ol.Feature} feature Feature.
             * @param {ol.style.Style} style Style.
             * @api
             */
            drawFeature(feature: ol.Feature, style: ol.style.Style): void;
    
            /**
             * Render a GeometryCollection to the canvas.  Rendering is immediate and
             * uses the current styles appropriate for each geometry in the collection.
             *
             * @param {ol.geom.GeometryCollection} geometryCollectionGeometry Geometry
             *     collection.
             * @param {ol.Feature} feature Feature.
             */
            drawGeometryCollectionGeometry(geometryCollectionGeometry: ol.geom.GeometryCollection, feature: ol.Feature): void;
    
            /**
             * Render a Point geometry into the canvas.  Rendering is immediate and uses
             * the current style.
             *
             * @param {ol.geom.Point} pointGeometry Point geometry.
             * @param {ol.Feature} feature Feature.
             * @api
             */
            drawPointGeometry(pointGeometry: ol.geom.Point, feature: ol.Feature): void;
    
            /**
             * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
             * uses the current style.
             *
             * @param {ol.geom.MultiPoint} multiPointGeometry MultiPoint geometry.
             * @param {ol.Feature} feature Feature.
             * @api
             */
            drawMultiPointGeometry(multiPointGeometry: ol.geom.MultiPoint, feature: ol.Feature): void;
    
            /**
             * Render a LineString into the canvas.  Rendering is immediate and uses
             * the current style.
             *
             * @param {ol.geom.LineString} lineStringGeometry Line string geometry.
             * @param {ol.Feature} feature Feature.
             * @api
             */
            drawLineStringGeometry(lineStringGeometry: ol.geom.LineString, feature: ol.Feature): void;
    
            /**
             * Render a MultiLineString geometry into the canvas.  Rendering is immediate
             * and uses the current style.
             *
             * @param {ol.geom.MultiLineString} multiLineStringGeometry
             *     MultiLineString geometry.
             * @param {ol.Feature} feature Feature.
             * @api
             */
            drawMultiLineStringGeometry(multiLineStringGeometry: ol.geom.MultiLineString, feature: ol.Feature): void;
    
            /**
             * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
             * the current style.
             *
             * @param {ol.geom.Polygon} polygonGeometry Polygon geometry.
             * @param {ol.Feature} feature Feature.
             * @api
             */
            drawPolygonGeometry(polygonGeometry: ol.geom.Polygon, feature: ol.Feature): void;
    
            /**
             * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
             * uses the current style.
             * @param {ol.geom.MultiPolygon} multiPolygonGeometry MultiPolygon geometry.
             * @param {ol.Feature} feature Feature.
             * @api
             */
            drawMultiPolygonGeometry(multiPolygonGeometry: ol.geom.MultiPolygon, feature: ol.Feature): void;
    
    
            /**
             * FIXME: empty description for jsdoc
             */
            flush(): void;
    
            /**
             * Set the fill and stroke style for subsequent draw operations.  To clear
             * either fill or stroke styles, pass null for the appropriate parameter.
             *
             * @param {ol.style.Fill} fillStyle Fill style.
             * @param {ol.style.Stroke} strokeStyle Stroke style.
             * @api
             */
            setFillStrokeStyle(fillStyle: ol.style.Fill, strokeStyle: ol.style.Stroke): void;
    
            /**
             * Set the image style for subsequent draw operations.  Pass null to remove
             * the image style.
             *
             * @param {ol.style.Image} imageStyle Image style.
             * @api
             */
            setImageStyle(imageStyle: ol.style.Image): void;
    
            /**
             * Set the text style for subsequent draw operations.  Pass null to
             * remove the text style.
             *
             * @param {ol.style.Text} textStyle Text style.
             * @api
             */
            setTextStyle(textStyle: ol.style.Text): void;
    
            /**
             * @param {number} zIndex Z index.
             * @param {function(ol.render.IVectorContext)} callback Callback.
             */
            drawAsync(zIndex: number, callback: (_0: IVectorContext) => any /*missing*/): void;
    
            /**
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @param {number} offset Offset.
             * @param {number} end End.
             * @param {number} stride Stride.
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawText(flatCoordinates: number[], offset: number, end: number, stride: number, geometry: ol.geom.Geometry, feature: ol.Feature): void;
          
        }
    }

    class Replay extends Replay.__Class { }
    module Replay {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements IVectorContext {
    
            /**
             * @constructor
             * @implements {ol.render.IVectorContext}
             * @param {number} tolerance Tolerance.
             * @param {ol.Extent} maxExtent Maximum extent.
             * @param {number} resolution Resolution.
             * @protected
             * @struct
             */
            constructor(tolerance: number, maxExtent: ol.Extent, resolution: number);
    
            /**
             * @protected
             * @type {number}
             */
            tolerance: number;
    
            /**
             * @protected
             * @type {ol.Extent}
             */
            maxExtent: ol.Extent;
    
            /**
             * @protected
             * @type {number}
             */
            maxLineWidth: number;
    
            /**
             * @protected
             * @type {number}
             */
            resolution: number;
    
            /**
             * @protected
             * @type {Array.<*>}
             */
            instructions: any[];
    
            /**
             * @protected
             * @type {Array.<number>}
             */
            coordinates: number[];
    
            /**
             * @protected
             * @type {Array.<*>}
             */
            hitDetectionInstructions: any[];
    
            /**
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @param {number} offset Offset.
             * @param {number} end End.
             * @param {number} stride Stride.
             * @param {boolean} close Close.
             * @protected
             * @return {number} My end.
             */
            appendFlatCoordinates(flatCoordinates: number[], offset: number, end: number, stride: number, close: boolean): number;
    
            /**
             * @protected
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {ol.Feature} feature Feature.
             */
            beginGeometry(geometry: ol.geom.Geometry, feature: ol.Feature): void;
    
            /**
             * @param {CanvasRenderingContext2D} context Context.
             * @param {number} pixelRatio Pixel ratio.
             * @param {goog.vec.Mat4.Number} transform Transform.
             * @param {number} viewRotation View rotation.
             * @param {Object} skippedFeaturesHash Ids of features to skip
             */
            replay(context: CanvasRenderingContext2D, pixelRatio: number, transform: goog.vec.Mat4.Number, viewRotation: number, skippedFeaturesHash: Object): void;
    
            /**
             * @param {CanvasRenderingContext2D} context Context.
             * @param {goog.vec.Mat4.Number} transform Transform.
             * @param {number} viewRotation View rotation.
             * @param {Object} skippedFeaturesHash Ids of features to skip
             * @param {function(ol.Feature): T=} opt_featureCallback Feature callback.
             * @return {T|undefined} Callback result.
             * @template T
             */
            replayHitDetection<T>(context: CanvasRenderingContext2D, transform: goog.vec.Mat4.Number, viewRotation: number, skippedFeaturesHash: Object, opt_featureCallback?: (_0: ol.Feature) => T): any /*T|any (undefined)*/;
    
    
            /**
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {ol.Feature} feature Feature.
             */
            endGeometry(geometry: ol.geom.Geometry, feature: ol.Feature): void;
    
            /**
             * FIXME empty description for jsdoc
             */
            finish: any /*missing*/;
    
            /**
             * Get the buffered rendering extent.  Rendering will be clipped to the extent
             * provided to the constructor.  To account for symbolizers that may intersect
             * this extent, we calculate a buffered extent (e.g. based on stroke width).
             * @return {ol.Extent} The buffered rendering extent.
             * @protected
             */
            getBufferedMaxExtent(): ol.Extent;
    
    
            /**
             * @param {number} zIndex Z index.
             * @param {function(ol.render.IVectorContext)} callback Callback.
             */
            drawAsync(zIndex: number, callback: (_0: IVectorContext) => any /*missing*/): void;
    
            /**
             * @param {ol.geom.Circle} circleGeometry Circle geometry.
             * @param {ol.Feature} feature Feature,
             */
            drawCircleGeometry(circleGeometry: ol.geom.Circle, feature: ol.Feature): void;
    
            /**
             * @param {ol.Feature} feature Feature.
             * @param {ol.style.Style} style Style.
             */
            drawFeature(feature: ol.Feature, style: ol.style.Style): void;
    
            /**
             * @param {ol.geom.GeometryCollection} geometryCollectionGeometry Geometry
             *     collection.
             * @param {ol.Feature} feature Feature.
             */
            drawGeometryCollectionGeometry(geometryCollectionGeometry: ol.geom.GeometryCollection, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.Point} pointGeometry Point geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawPointGeometry(pointGeometry: ol.geom.Point, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.LineString} lineStringGeometry Line string geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawLineStringGeometry(lineStringGeometry: ol.geom.LineString, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiLineString} multiLineStringGeometry
             *     MultiLineString geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiLineStringGeometry(multiLineStringGeometry: ol.geom.MultiLineString, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiPoint} multiPointGeometry MultiPoint geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiPointGeometry(multiPointGeometry: ol.geom.MultiPoint, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiPolygon} multiPolygonGeometry MultiPolygon geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiPolygonGeometry(multiPolygonGeometry: ol.geom.MultiPolygon, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.Polygon} polygonGeometry Polygon geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawPolygonGeometry(polygonGeometry: ol.geom.Polygon, feature: ol.Feature): void;
    
            /**
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @param {number} offset Offset.
             * @param {number} end End.
             * @param {number} stride Stride.
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawText(flatCoordinates: number[], offset: number, end: number, stride: number, geometry: ol.geom.Geometry, feature: ol.Feature): void;
    
            /**
             * @param {ol.style.Fill} fillStyle Fill style.
             * @param {ol.style.Stroke} strokeStyle Stroke style.
             */
            setFillStrokeStyle(fillStyle: ol.style.Fill, strokeStyle: ol.style.Stroke): void;
    
            /**
             * @param {ol.style.Image} imageStyle Image style.
             */
            setImageStyle(imageStyle: ol.style.Image): void;
    
            /**
             * @param {ol.style.Text} textStyle Text style.
             */
            setTextStyle(textStyle: ol.style.Text): void;
        }
    }

    class ImageReplay extends ImageReplay.__Class { }
    module ImageReplay {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Replay.__Class {
    
            /**
             * @constructor
             * @extends {ol.render.canvas.Replay}
             * @param {number} tolerance Tolerance.
             * @param {ol.Extent} maxExtent Maximum extent.
             * @param {number} resolution Resolution.
             * @protected
             * @struct
             */
            constructor(tolerance: number, maxExtent: ol.Extent, resolution: number);
    
            /**
             * @inheritDoc
             */
            drawPointGeometry(pointGeometry: any /* jsdoc error */, feature: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             */
            drawMultiPointGeometry(multiPointGeometry: any /* jsdoc error */, feature: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             */
            setImageStyle(imageStyle: any /* jsdoc error */): void;
        }
    }

    class LineStringReplay extends LineStringReplay.__Class { }
    module LineStringReplay {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Replay.__Class {
    
            /**
             * @constructor
             * @extends {ol.render.canvas.Replay}
             * @param {number} tolerance Tolerance.
             * @param {ol.Extent} maxExtent Maximum extent.
             * @param {number} resolution Resolution.
             * @protected
             * @struct
             */
            constructor(tolerance: number, maxExtent: ol.Extent, resolution: number);
    
        }
    }

    class PolygonReplay extends PolygonReplay.__Class { }
    module PolygonReplay {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Replay.__Class {
    
            /**
             * @constructor
             * @extends {ol.render.canvas.Replay}
             * @param {number} tolerance Tolerance.
             * @param {ol.Extent} maxExtent Maximum extent.
             * @param {number} resolution Resolution.
             * @protected
             * @struct
             */
            constructor(tolerance: number, maxExtent: ol.Extent, resolution: number);
    
          
        }
    }

    class TextReplay extends TextReplay.__Class { }
    module TextReplay {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Replay.__Class {
    
            /**
             * @constructor
             * @extends {ol.render.canvas.Replay}
             * @param {number} tolerance Tolerance.
             * @param {ol.Extent} maxExtent Maximum extent.
             * @param {number} resolution Resolution.
             * @protected
             * @struct
             */
            constructor(tolerance: number, maxExtent: ol.Extent, resolution: number);
    
            /**
             * @inheritDoc
             */
            drawText(flatCoordinates: any /* jsdoc error */, offset: any /* jsdoc error */, end: any /* jsdoc error */, stride: any /* jsdoc error */, geometry: any /* jsdoc error */, feature: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             */
            setTextStyle(textStyle: any /* jsdoc error */): void;
        }
    }

    class ReplayGroup extends ReplayGroup.__Class { }
    module ReplayGroup {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements IReplayGroup {
    
            /**
             * @constructor
             * @implements {ol.render.IReplayGroup}
             * @param {number} tolerance Tolerance.
             * @param {ol.Extent} maxExtent Max extent.
             * @param {number} resolution Resolution.
             * @struct
             */
            constructor(tolerance: number, maxExtent: ol.Extent, resolution: number);
    
            /**
             * FIXME empty description for jsdoc
             */
            finish(): void;
    
            /**
             * @param {number} resolution Resolution.
             * @param {number} rotation Rotation.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {Object} skippedFeaturesHash Ids of features to skip
             * @param {function(ol.Feature): T} callback Feature callback.
             * @return {T|undefined} Callback result.
             * @template T
             */
            forEachGeometryAtPixel<T>(resolution: number, rotation: number, coordinate: ol.Coordinate, skippedFeaturesHash: Object, callback: (_0: ol.Feature) => T): any /*T|any (undefined)*/;
    
            /**
             * @param {CanvasRenderingContext2D} context Context.
             * @param {number} pixelRatio Pixel ratio.
             * @param {goog.vec.Mat4.Number} transform Transform.
             * @param {number} viewRotation View rotation.
             * @param {Object} skippedFeaturesHash Ids of features to skip
             */
            replay(context: CanvasRenderingContext2D, pixelRatio: number, transform: goog.vec.Mat4.Number, viewRotation: number, skippedFeaturesHash: Object): void;
    
            /**
             * @param {number|undefined} zIndex Z index.
             * @param {ol.render.ReplayType} replayType Replay type.
             * @return {ol.render.IVectorContext} Replay.
             */
            getReplay(zIndex: number, replayType: render.ReplayType): IVectorContext;
            /**
             * @param {number|undefined} zIndex Z index.
             * @param {ol.render.ReplayType} replayType Replay type.
             * @return {ol.render.IVectorContext} Replay.
             */
            getReplay(zIndex: any /*undefined*/, replayType: render.ReplayType): IVectorContext;
    
            /**
             * @return {boolean} Is empty.
             */
            isEmpty(): boolean;
        }
    }

    /**
     * @typedef {{fillStyle: string}}
     */
    interface FillState {
        fillStyle: string
    }

    /**
     * @typedef {{lineCap: string,
     *            lineDash: Array.<number>,
     *            lineJoin: string,
     *            lineWidth: number,
     *            miterLimit: number,
     *            strokeStyle: string}}
     */
    interface StrokeState {
        lineCap: string;
        lineDash: number[];
        lineJoin: string;
        lineWidth: number;
        miterLimit: number;
        strokeStyle: string;
    }

    /**
     * @typedef {{font: string,
     *            textAlign: string,
     *            textBaseline: string}}
     */
    interface TextState {
        font: string;
        textAlign: string;
        textBaseline: string;
}

    /**
     * @const
     * @type {string}
     */
    var defaultFont: string;

    /**
     * @const
     * @type {ol.Color}
     */
    var defaultFillStyle: Color;

    /**
     * @const
     * @type {string}
     */
    var defaultLineCap: string;

    /**
     * @const
     * @type {Array.<number>}
     */
    var defaultLineDash: number[];

    /**
     * @const
     * @type {string}
     */
    var defaultLineJoin: string;

    /**
     * @const
     * @type {number}
     */
    var defaultMiterLimit: number;

    /**
     * @const
     * @type {ol.Color}
     */
    var defaultStrokeStyle: Color;

    /**
     * @const
     * @type {string}
     */
    var defaultTextAlign: string;

    /**
     * @const
     * @type {string}
     */
    var defaultTextBaseline: string;

    /**
     * @const
     * @type {number}
     */
    var defaultLineWidth: number;

    /**
     * @enum {number}
     */
    enum Instruction { BEGIN_GEOMETRY, BEGIN_PATH, CIRCLE, CLOSE_PATH, DRAW_IMAGE, DRAW_TEXT, END_GEOMETRY, FILL, MOVE_TO_LINE_TO, SET_FILL_STYLE, SET_STROKE_STYLE, SET_TEXT_STYLE, STROKE }
}

declare module ol.render.webgl.imagereplay.shader {

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

declare module ol.render.webgl.imagereplay.shader.ColorFragment {

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

declare module ol.render.webgl.imagereplay.shader.ColorVertex {

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

declare module ol.render.webgl.imagereplay.shader.DefaultFragment {

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

declare module ol.render.webgl.imagereplay.shader.DefaultVertex {

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

declare module ol.render.webgl.imagereplay.shader.Color {

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
            u_image: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_offsetRotateMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_offsetScaleMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_opacity: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_projectionMatrix: WebGLUniformLocation;
    
            /**
             * @type {number}
             */
            a_offsets: number;
    
            /**
             * @type {number}
             */
            a_opacity: number;
    
            /**
             * @type {number}
             */
            a_position: number;
    
            /**
             * @type {number}
             */
            a_rotateWithView: number;
    
            /**
             * @type {number}
             */
            a_texCoord: number;
        }
    }
}

declare module ol.render.webgl.imagereplay.shader.Default {

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
            u_image: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_offsetRotateMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_offsetScaleMatrix: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_opacity: WebGLUniformLocation;
    
            /**
             * @type {WebGLUniformLocation}
             */
            u_projectionMatrix: WebGLUniformLocation;
    
            /**
             * @type {number}
             */
            a_offsets: number;
    
            /**
             * @type {number}
             */
            a_opacity: number;
    
            /**
             * @type {number}
             */
            a_position: number;
    
            /**
             * @type {number}
             */
            a_rotateWithView: number;
    
            /**
             * @type {number}
             */
            a_texCoord: number;
        }
    }
}

declare module ol.render.webgl {

    class ImageReplay extends ImageReplay.__Class { }
    module ImageReplay {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements IVectorContext {
    
            /**
             * @constructor
             * @implements {ol.render.IVectorContext}
             * @param {number} tolerance Tolerance.
             * @param {ol.Extent} maxExtent Max extent.
             * @protected
             * @struct
             */
            constructor(tolerance: number, maxExtent: ol.Extent);
    
            /**
             * @param {ol.webgl.Context} context WebGL context.
             * @return {function()} Delete resources function.
             */
            getDeleteResourcesFunction(context: ol.webgl.Context): () => any /*missing*/;
    
            /**
             * @inheritDoc
             */
            drawMultiPointGeometry(multiPointGeometry: any /* jsdoc error */, feature: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             */
            drawPointGeometry(pointGeometry: any /* jsdoc error */, feature: any /* jsdoc error */): void;
    
            /**
             * @param {ol.webgl.Context} context Context.
             */
            finish(context: ol.webgl.Context): void;
    
            /**
             * @param {ol.webgl.Context} context Context.
             * @param {ol.Coordinate} center Center.
             * @param {number} resolution Resolution.
             * @param {number} rotation Rotation.
             * @param {ol.Size} size Size.
             * @param {number} pixelRatio Pixel ratio.
             * @param {number} opacity Global opacity.
             * @param {number} brightness Global brightness.
             * @param {number} contrast Global contrast.
             * @param {number} hue Global hue.
             * @param {number} saturation Global saturation.
             * @param {Object} skippedFeaturesHash Ids of features to skip.
             * @return {T|undefined} Callback result.
             * @template T
             */
            replay<T>(context: ol.webgl.Context, center: ol.Coordinate, resolution: number, rotation: number, size: ol.Size, pixelRatio: number, opacity: number, brightness: number, contrast: number, hue: number, saturation: number, skippedFeaturesHash: Object): any /*T|any (undefined)*/;
    
    
            /**
             * @inheritDoc
             */
            setImageStyle(imageStyle: any /* jsdoc error */): void;
    
            /**
             * @param {number} zIndex Z index.
             * @param {function(ol.render.IVectorContext)} callback Callback.
             */
            drawAsync(zIndex: number, callback: (_0: IVectorContext) => any /*missing*/): void;
    
            /**
             * @param {ol.geom.Circle} circleGeometry Circle geometry.
             * @param {ol.Feature} feature Feature,
             */
            drawCircleGeometry(circleGeometry: ol.geom.Circle, feature: ol.Feature): void;
    
            /**
             * @param {ol.Feature} feature Feature.
             * @param {ol.style.Style} style Style.
             */
            drawFeature(feature: ol.Feature, style: ol.style.Style): void;
    
            /**
             * @param {ol.geom.GeometryCollection} geometryCollectionGeometry Geometry
             *     collection.
             * @param {ol.Feature} feature Feature.
             */
            drawGeometryCollectionGeometry(geometryCollectionGeometry: ol.geom.GeometryCollection, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.Point} pointGeometry Point geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawPointGeometry(pointGeometry: ol.geom.Point, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.LineString} lineStringGeometry Line string geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawLineStringGeometry(lineStringGeometry: ol.geom.LineString, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiLineString} multiLineStringGeometry
             *     MultiLineString geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiLineStringGeometry(multiLineStringGeometry: ol.geom.MultiLineString, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiPoint} multiPointGeometry MultiPoint geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiPointGeometry(multiPointGeometry: ol.geom.MultiPoint, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiPolygon} multiPolygonGeometry MultiPolygon geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiPolygonGeometry(multiPolygonGeometry: ol.geom.MultiPolygon, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.Polygon} polygonGeometry Polygon geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawPolygonGeometry(polygonGeometry: ol.geom.Polygon, feature: ol.Feature): void;
    
            /**
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @param {number} offset Offset.
             * @param {number} end End.
             * @param {number} stride Stride.
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawText(flatCoordinates: number[], offset: number, end: number, stride: number, geometry: ol.geom.Geometry, feature: ol.Feature): void;
    
            /**
             * @param {ol.style.Fill} fillStyle Fill style.
             * @param {ol.style.Stroke} strokeStyle Stroke style.
             */
            setFillStrokeStyle(fillStyle: ol.style.Fill, strokeStyle: ol.style.Stroke): void;
    
            /**
             * @param {ol.style.Image} imageStyle Image style.
             */
            setImageStyle(imageStyle: ol.style.Image): void;
    
            /**
             * @param {ol.style.Text} textStyle Text style.
             */
            setTextStyle(textStyle: ol.style.Text): void;
        }
    }

    class ReplayGroup extends ReplayGroup.__Class { }
    module ReplayGroup {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements IReplayGroup {
    
            /**
             * @constructor
             * @implements {ol.render.IReplayGroup}
             * @param {number} tolerance Tolerance.
             * @param {ol.Extent} maxExtent Max extent.
             * @struct
             */
            constructor(tolerance: number, maxExtent: ol.Extent);
    
            /**
             * @param {ol.webgl.Context} context WebGL context.
             * @return {function()} Delete resources function.
             */
            getDeleteResourcesFunction(context: ol.webgl.Context): () => any /*missing*/;
    
            /**
             * @param {ol.webgl.Context} context Context.
             */
            finish(context: ol.webgl.Context): void;
    
            /**
             * @param {ol.webgl.Context} context Context.
             * @param {ol.Coordinate} center Center.
             * @param {number} resolution Resolution.
             * @param {number} rotation Rotation.
             * @param {ol.Size} size Size.
             * @param {number} pixelRatio Pixel ratio.
             * @param {number} opacity Global opacity.
             * @param {number} brightness Global brightness.
             * @param {number} contrast Global contrast.
             * @param {number} hue Global hue.
             * @param {number} saturation Global saturation.
             * @param {Object} skippedFeaturesHash Ids of features to skip.
             * @return {T|undefined} Callback result.
             * @template T
             */
            replay<T>(context: ol.webgl.Context, center: ol.Coordinate, resolution: number, rotation: number, size: ol.Size, pixelRatio: number, opacity: number, brightness: number, contrast: number, hue: number, saturation: number, skippedFeaturesHash: Object): any /*T|any (undefined)*/;
    
            /**
             * @param {number|undefined} zIndex Z index.
             * @param {ol.render.ReplayType} replayType Replay type.
             * @return {ol.render.IVectorContext} Replay.
             */
            getReplay(zIndex: number, replayType: render.ReplayType): IVectorContext;
            /**
             * @param {number|undefined} zIndex Z index.
             * @param {ol.render.ReplayType} replayType Replay type.
             * @return {ol.render.IVectorContext} Replay.
             */
            getReplay(zIndex: any /*undefined*/, replayType: render.ReplayType): IVectorContext;
    
            /**
             * @return {boolean} Is empty.
             */
            isEmpty(): boolean;
        }
    }

    class Immediate extends Immediate.__Class { }
    module Immediate {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements IVectorContext {
    
            /**
             * @constructor
             * @implements {ol.render.IVectorContext}
             * @param {ol.webgl.Context} context Context.
             * @param {ol.Coordinate} center Center.
             * @param {number} resolution Resolution.
             * @param {number} rotation Rotation.
             * @param {ol.Size} size Size.
             * @param {ol.Extent} extent Extent.
             * @param {number} pixelRatio Pixel ratio.
             * @struct
             */
            constructor(context: ol.webgl.Context, center: ol.Coordinate, resolution: number, rotation: number, size: ol.Size, extent: ol.Extent, pixelRatio: number);
    
            /**
             * FIXME: empty description for jsdoc
             */
            flush(): void;
    
            /**
             * @param {number} zIndex Z index.
             * @param {function(ol.render.webgl.Immediate)} callback Callback.
             * @api
             */
            drawAsync(zIndex: number, callback: (_0: Immediate) => any /*missing*/): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawCircleGeometry(circleGeometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawFeature(feature: any /* jsdoc error */, style: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawGeometryCollectionGeometry(geometryCollectionGeometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawPointGeometry(pointGeometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawLineStringGeometry(lineStringGeometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawMultiLineStringGeometry(multiLineStringGeometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawMultiPointGeometry(multiPointGeometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawMultiPolygonGeometry(multiPolygonGeometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawPolygonGeometry(polygonGeometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            drawText(flatCoordinates: any /* jsdoc error */, offset: any /* jsdoc error */, end: any /* jsdoc error */, stride: any /* jsdoc error */, geometry: any /* jsdoc error */, data: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            setFillStrokeStyle(fillStyle: any /* jsdoc error */, strokeStyle: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            setImageStyle(imageStyle: any /* jsdoc error */): void;
    
            /**
             * @inheritDoc
             * @api
             */
            setTextStyle(textStyle: any /* jsdoc error */): void;
    
            /**
             * @param {number} zIndex Z index.
             * @param {function(ol.render.IVectorContext)} callback Callback.
             */
            drawAsync(zIndex: number, callback: (_0: IVectorContext) => any /*missing*/): void;
    
            /**
             * @param {ol.geom.Circle} circleGeometry Circle geometry.
             * @param {ol.Feature} feature Feature,
             */
            drawCircleGeometry(circleGeometry: ol.geom.Circle, feature: ol.Feature): void;
    
            /**
             * @param {ol.Feature} feature Feature.
             * @param {ol.style.Style} style Style.
             */
            drawFeature(feature: ol.Feature, style: ol.style.Style): void;
    
            /**
             * @param {ol.geom.GeometryCollection} geometryCollectionGeometry Geometry
             *     collection.
             * @param {ol.Feature} feature Feature.
             */
            drawGeometryCollectionGeometry(geometryCollectionGeometry: ol.geom.GeometryCollection, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.Point} pointGeometry Point geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawPointGeometry(pointGeometry: ol.geom.Point, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.LineString} lineStringGeometry Line string geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawLineStringGeometry(lineStringGeometry: ol.geom.LineString, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiLineString} multiLineStringGeometry
             *     MultiLineString geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiLineStringGeometry(multiLineStringGeometry: ol.geom.MultiLineString, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiPoint} multiPointGeometry MultiPoint geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiPointGeometry(multiPointGeometry: ol.geom.MultiPoint, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.MultiPolygon} multiPolygonGeometry MultiPolygon geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawMultiPolygonGeometry(multiPolygonGeometry: ol.geom.MultiPolygon, feature: ol.Feature): void;
    
            /**
             * @param {ol.geom.Polygon} polygonGeometry Polygon geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawPolygonGeometry(polygonGeometry: ol.geom.Polygon, feature: ol.Feature): void;
    
            /**
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @param {number} offset Offset.
             * @param {number} end End.
             * @param {number} stride Stride.
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {ol.Feature} feature Feature.
             */
            drawText(flatCoordinates: number[], offset: number, end: number, stride: number, geometry: ol.geom.Geometry, feature: ol.Feature): void;
    
            /**
             * @param {ol.style.Fill} fillStyle Fill style.
             * @param {ol.style.Stroke} strokeStyle Stroke style.
             */
            setFillStrokeStyle(fillStyle: ol.style.Fill, strokeStyle: ol.style.Stroke): void;
    
            /**
             * @param {ol.style.Image} imageStyle Image style.
             */
            setImageStyle(imageStyle: ol.style.Image): void;
    
            /**
             * @param {ol.style.Text} textStyle Text style.
             */
            setTextStyle(textStyle: ol.style.Text): void;
        }
    }
}