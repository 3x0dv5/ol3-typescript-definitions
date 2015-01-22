/// <reference path="../lib/definitely-typed/closure-library/closure/goog/events/event.d.ts" />

declare module ol.interaction {

    class Interaction extends Interaction.__Class { }
    module Interaction {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.Object.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * User actions that change the state of the map. Some are similar to controls,
             * but are not associated with a DOM element.
             * For example, {@link ol.interaction.KeyboardZoom} is functionally the same as
             * {@link ol.control.Zoom}, but triggered by a keyboard event not a button
             * element event.
             * Although interactions do not have a DOM element, some of them do render
             * vectors and so are visible on the screen.
             *
             * @constructor
             * @param {olx.interaction.InteractionOptions} options Options.
             * @extends {ol.Object}
             * @api
             */
            constructor(options: olx.interaction.InteractionOptions);
    
            /**
             * @type {function(ol.MapBrowserEvent):boolean}
             */
            handleEvent: (_0: ol.MapBrowserEvent) => boolean;
    
            /**
             * @return {boolean} `true` if the interaction is active, `false` otherwise.
             * @observable
             * @api
             */
            getActive(): boolean;
    
            /**
             * Get the map associated with this interaction.
             * @return {ol.Map} Map.
             */
            getMap(): ol.Map;
    
            /**
             * Activate or deactivate the interaction.
             * @param {boolean} active Active.
             * @observable
             * @api
             */
            setActive(active: boolean): void;
    
            /**
             * Remove the interaction from its current map and attach it to the new map.
             * Subclasses may set up event handlers to get notified about changes to
             * the map here.
             * @param {ol.Map} map Map.
             */
            setMap(map: ol.Map): void;
        }
    }

    class DoubleClickZoom extends DoubleClickZoom.__Class { }
    module DoubleClickZoom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Interaction.__Class {
    
            /**
             * @classdesc
             * Allows the user to zoom by double-clicking on the map.
             *
             * @constructor
             * @extends {ol.interaction.Interaction}
             * @param {olx.interaction.DoubleClickZoomOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DoubleClickZoomOptions);
        }
    }

    class Pointer extends Pointer.__Class { }
    module Pointer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Interaction.__Class {
    
            /**
             * @classdesc
             * Base class that calls user-defined functions on `down`, `move` and `up`
             * events. This class also manages "drag sequences".
             *
             * When the `handleDownEvent` user function returns `true` a drag sequence is
             * started. During a drag sequence the `handleDragEvent` user function is
             * called on `move` events. The drag sequence ends when the `handleUpEvent`
             * user function is called and returns `false`.
             *
             * @constructor
             * @param {olx.interaction.PointerOptions=} opt_options Options.
             * @extends {ol.interaction.Interaction}
             * @api
             */
            constructor(opt_options?: olx.interaction.PointerOptions);
    
            /**
             * @type {boolean}
             * @protected
             */
            handlingDownUpSequence: boolean;
    
            /**
             * @type {Array.<ol.pointer.PointerEvent>}
             * @protected
             */
            targetPointers: ol.pointer.PointerEvent[];
    
            /**
             * This method is used to determine if "down" events should be propagated to
             * other interactions or should be stopped.
             *
             * The method receives the return code of the "handleDownEvent" function.
             *
             * By default this function is the "identity" function. It's overidden in
             * child classes.
             *
             * @param {boolean} handled Was the event handled by the interaction?
             * @return {boolean} Should the event be stopped?
             * @protected
             */
            shouldStopEvent(handled: boolean): boolean;
        }
    }

    class DragPan extends DragPan.__Class { }
    module DragPan {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Pointer.__Class {
    
            /**
             * @classdesc
             * Allows the user to pan the map by dragging the map.
             *
             * @constructor
             * @extends {ol.interaction.Pointer}
             * @param {olx.interaction.DragPanOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragPanOptions);
    
            /**
             * @type {ol.Pixel}
             */
            lastCentroid: ol.Pixel;
     
        }
    }

    class DragRotate extends DragRotate.__Class { }
    module DragRotate {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Pointer.__Class {
    
            /**
             * @classdesc
             * Allows the user to rotate the map by clicking and dragging on the map,
             * normally combined with an {@link ol.events.condition} that limits
             * it to when the alt and shift keys are held down.
             *
             * This interaction is only supported for mouse devices.
             *
             * @constructor
             * @extends {ol.interaction.Pointer}
             * @param {olx.interaction.DragRotateOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragRotateOptions);
           
        }
    }

    class DragBox extends DragBox.__Class { }
    module DragBox {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Pointer.__Class {
    
            /**
             * @classdesc
             * Allows the user to draw a vector box by clicking and dragging on the map,
             * normally combined with an {@link ol.events.condition} that limits
             * it to when the shift or other key is held down. This is used, for example,
             * for zooming to a specific area of the map
             * (see {@link ol.interaction.DragZoom} and
             * {@link ol.interaction.DragRotateAndZoom}).
             *
             * This interaction is only supported for mouse devices.
             *
             * @constructor
             * @extends {ol.interaction.Pointer}
             * @fires ol.DragBoxEvent
             * @param {olx.interaction.DragBoxOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragBoxOptions);
    
            /**
             * Returns geometry of last drawn box.
             * @return {ol.geom.Polygon} Geometry.
             * @api stable
             */
            getGeometry(): ol.geom.Polygon;
    
            /**
             * To be overriden by child classes.
             * FIXME: use constructor option instead of relying on overridding.
             * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
             * @protected
             */
            onBoxEnd(mapBrowserEvent: ol.MapBrowserEvent): void;
    
            /**
             * The block size for the hasher.
             * @type {number}
             */
            blockSize: number;
        }
    }

    class DragZoom extends DragZoom.__Class { }
    module DragZoom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends DragBox.__Class {
    
            /**
             * @classdesc
             * Allows the user to zoom the map by clicking and dragging on the map,
             * normally combined with an {@link ol.events.condition} that limits
             * it to when a key, shift by default, is held down.
             *
             * @constructor
             * @extends {ol.interaction.DragBox}
             * @param {olx.interaction.DragZoomOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragZoomOptions);
    
        }
    }

    class KeyboardPan extends KeyboardPan.__Class { }
    module KeyboardPan {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Interaction.__Class {
    
            /**
             * @classdesc
             * Allows the user to pan the map using keyboard arrows.
             * Note that, although this interaction is by default included in maps,
             * the keys can only be used when browser focus is on the element to which
             * the keyboard events are attached. By default, this is the map div,
             * though you can change this with the `keyboardEventTarget` in
             * {@link ol.Map}. `document` never loses focus but, for any other element,
             * focus will have to be on, and returned to, this element if the keys are to
             * function.
             * See also {@link ol.interaction.KeyboardZoom}.
             *
             * @constructor
             * @extends {ol.interaction.Interaction}
             * @param {olx.interaction.KeyboardPanOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.KeyboardPanOptions);
        }
    }

    class KeyboardZoom extends KeyboardZoom.__Class { }
    module KeyboardZoom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Interaction.__Class {
    
            /**
             * @classdesc
             * Allows the user to zoom the map using keyboard + and -.
             * Note that, although this interaction is by default included in maps,
             * the keys can only be used when browser focus is on the element to which
             * the keyboard events are attached. By default, this is the map div,
             * though you can change this with the `keyboardEventTarget` in
             * {@link ol.Map}. `document` never loses focus but, for any other element,
             * focus will have to be on, and returned to, this element if the keys are to
             * function.
             * See also {@link ol.interaction.KeyboardPan}.
             *
             * @constructor
             * @param {olx.interaction.KeyboardZoomOptions=} opt_options Options.
             * @extends {ol.interaction.Interaction}
             * @api stable
             */
            constructor(opt_options?: olx.interaction.KeyboardZoomOptions);
        }
    }

    class MouseWheelZoom extends MouseWheelZoom.__Class { }
    module MouseWheelZoom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Interaction.__Class {
    
            /**
             * @classdesc
             * Allows the user to zoom the map by scrolling the mouse wheel.
             *
             * @constructor
             * @extends {ol.interaction.Interaction}
             * @param {olx.interaction.MouseWheelZoomOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.MouseWheelZoomOptions);
        }
    }

    class PinchRotate extends PinchRotate.__Class { }
    module PinchRotate {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Pointer.__Class {
    
            /**
             * @classdesc
             * Allows the user to rotate the map by twisting with two fingers
             * on a touch screen.
             *
             * @constructor
             * @extends {ol.interaction.Pointer}
             * @param {olx.interaction.PinchRotateOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.PinchRotateOptions);
    
        }
    }

    class PinchZoom extends PinchZoom.__Class { }
    module PinchZoom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Pointer.__Class {
    
            /**
             * @classdesc
             * Allows the user to zoom the map by pinching with two fingers
             * on a touch screen.
             *
             * @constructor
             * @extends {ol.interaction.Pointer}
             * @param {olx.interaction.PinchZoomOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.PinchZoomOptions);
    
        }
    }

    class DragAndDrop extends DragAndDrop.__Class { }
    module DragAndDrop {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Interaction.__Class {
    
            /**
             * @classdesc
             * Handles input of vector data by drag and drop.
             *
             * @constructor
             * @extends {ol.interaction.Interaction}
             * @fires ol.interaction.DragAndDropEvent
             * @param {olx.interaction.DragAndDropOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragAndDropOptions);
    
        }
    }

    class DragAndDropEvent extends DragAndDropEvent.__Class { }
    module DragAndDropEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class implements oli.interaction.DragAndDropEvent {
    
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.DragAndDrop} instances are instances
             * of this type.
             *
             * @constructor
             * @extends {goog.events.Event}
             * @implements {oli.interaction.DragAndDropEvent}
             * @param {ol.interaction.DragAndDropEventType} type Type.
             * @param {Object} target Target.
             * @param {File} file File.
             * @param {Array.<ol.Feature>=} opt_features Features.
             * @param {ol.proj.Projection=} opt_projection Projection.
             */
            constructor(type: interaction.DragAndDropEventType, target: Object, file: File, opt_features?: ol.Feature[], opt_projection?: ol.proj.Projection);
    
            /**
             * @type {Array.<ol.Feature>|undefined}
             * @api stable
             */
            features: any /*ol.Feature[]|any (undefined)*/;
    
            /**
             * @type {File}
             * @api stable
             */
            file: File;
    
            /**
             * @type {ol.proj.Projection|undefined}
             * @api
             */
            projection: any /*ol.proj.Projection|any (undefined)*/;
    
            /**
             * X-value
             * @type {number}
             */
            x: number;
    
            /**
             * Y-value
             * @type {number}
             */
            y: number;
        }
    }

    class DragRotateAndZoom extends DragRotateAndZoom.__Class { }
    module DragRotateAndZoom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Pointer.__Class {
    
            /**
             * @classdesc
             * Allows the user to zoom and rotate the map by clicking and dragging
             * on the map.  By default, this interaction is limited to when the shift
             * key is held down.
             *
             * This interaction is only supported for mouse devices.
             *
             * And this interaction is not included in the default interactions.
             *
             * @constructor
             * @extends {ol.interaction.Pointer}
             * @param {olx.interaction.DragRotateAndZoomOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.DragRotateAndZoomOptions);
        }
    }

    class Draw extends Draw.__Class { }
    module Draw {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Pointer.__Class {
    
            /**
             * @classdesc
             * Interaction that allows drawing geometries.
             *
             * @constructor
             * @extends {ol.interaction.Pointer}
             * @fires ol.DrawEvent
             * @param {olx.interaction.DrawOptions} options Options.
             * @api stable
             */
            constructor(options: olx.interaction.DrawOptions);
    
            /**
             * Stop drawing and add the sketch feature to the target layer.
             * @api
             */
            finishDrawing(): void;
    
        }
    }

    class Modify extends Modify.__Class { }
    module Modify {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Pointer.__Class {
    
            /**
             * @classdesc
             * Interaction for modifying vector data.
             *
             * @constructor
             * @extends {ol.interaction.Pointer}
             * @param {olx.interaction.ModifyOptions} options Options.
             * @api stable
             */
            constructor(options: olx.interaction.ModifyOptions);
    
        }
    }

    class Select extends Select.__Class { }
    module Select {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Interaction.__Class {
    
            /**
             * @classdesc
             * Handles selection of vector data. A {@link ol.FeatureOverlay} is maintained
             * internally to store the selected feature(s). Which features are selected is
             * determined by the `condition` option, and optionally the `toggle` or
             * `add`/`remove` options.
             *
             * @constructor
             * @extends {ol.interaction.Interaction}
             * @param {olx.interaction.SelectOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.interaction.SelectOptions);
    
            /**
             * Get the selected features.
             * @return {ol.Collection.<ol.Feature>} Features collection.
             * @api stable
             */
            getFeatures(): ol.Collection<ol.Feature>;
    
            /**
             * Remove the interaction from its current map, if any,  and attach it to a new
             * map, if any. Pass `null` to just remove the interaction from the current map.
             * @param {ol.Map} map Map.
             * @api stable
             */
            setMap(map: ol.Map): void;
        }
    }

    /**
     * @enum {string}
     */
    enum InteractionProperty { ACTIVE } 

    /**
     * Set of interactions included in maps by default. Specific interactions can be
     * excluded by setting the appropriate option to false in the constructor
     * options, but the order of the interactions is fixed.  If you want to specify
     * a different order for interactions, you will need to create your own
     * {@link ol.interaction.Interaction} instances and insert them into a
     * {@link ol.Collection} in the order you want before creating your
     * {@link ol.Map} instance. The default set of interactions, in sequence, is:
     * * {@link ol.interaction.DragRotate}
     * * {@link ol.interaction.DoubleClickZoom}
     * * {@link ol.interaction.DragPan}
     * * {@link ol.interaction.PinchRotate}
     * * {@link ol.interaction.PinchZoom}
     * * {@link ol.interaction.KeyboardPan}
     * * {@link ol.interaction.KeyboardZoom}
     * * {@link ol.interaction.MouseWheelZoom}
     * * {@link ol.interaction.DragZoom}
     *
     * Note that DragZoom renders a box as a vector polygon, so this interaction
     * should be excluded if you want a build with no vector support.
     *
     * @param {olx.interaction.DefaultsOptions=} opt_options Defaults options.
     * @return {ol.Collection.<ol.interaction.Interaction>} A collection of
     * interactions to be used with the ol.Map constructor's interactions option.
     * @api stable
     */
    function defaults(opt_options?: olx.interaction.DefaultsOptions): Collection<Interaction>;

    /**
     * @enum {string}
     */
    enum DragAndDropEventType { ADD_FEATURES } 

    /**
     * Draw mode.  This collapses multi-part geometry types with their single-part
     * cousins.
     * @enum {string}
     */
    enum DrawMode { POINT, LINE_STRING, POLYGON } 

    /**
     * @typedef {{depth: (Array.<number>|undefined),
     *            feature: ol.Feature,
     *            geometry: ol.geom.SimpleGeometry,
     *            index: (number|undefined),
     *            segment: Array.<ol.Extent>}}
     */
    interface SegmentDataType {
        depth: any /*number[]|any (undefined)*/;
        feature: Feature;
        geometry: geom.SimpleGeometry;
        index: any /*number|any (undefined)*/;
        segment: Extent[];
    }
}

declare module ol.interaction.DragAndDrop {

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.DragAndDrop}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;
}

declare module ol.interaction.KeyboardPan {

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.KeyboardPan}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;
}

declare module ol.interaction.KeyboardZoom {

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.KeyboardZoom}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;
}

declare module ol.interaction.MouseWheelZoom {

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.MouseWheelZoom}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;
}

declare module ol.interaction.Interaction {

    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {ol.Coordinate} delta Delta.
     * @param {number=} opt_duration Duration.
     */
    function pan(map: Map, view: View, delta: Coordinate, opt_duration?: number): void;

    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number|undefined} rotation Rotation.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     */
    function rotate(map: Map, view: View, rotation: number, opt_anchor?: Coordinate, opt_duration?: number): void;
    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number|undefined} rotation Rotation.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     */
    function rotate(map: Map, view: View, rotation: any /*undefined*/, opt_anchor?: Coordinate, opt_duration?: number): void;

    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number|undefined} rotation Rotation.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     */
    function rotateWithoutConstraints(map: Map, view: View, rotation: number, opt_anchor?: Coordinate, opt_duration?: number): void;
    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number|undefined} rotation Rotation.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     */
    function rotateWithoutConstraints(map: Map, view: View, rotation: any /*undefined*/, opt_anchor?: Coordinate, opt_duration?: number): void;

    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number|undefined} resolution Resolution to go to.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     * @param {number=} opt_direction Zooming direction; > 0 indicates
     *     zooming out, in which case the constraints system will select
     *     the largest nearest resolution; < 0 indicates zooming in, in
     *     which case the constraints system will select the smallest
     *     nearest resolution; == 0 indicates that the zooming direction
     *     is unknown/not relevant, in which case the constraints system
     *     will select the nearest resolution. If not defined 0 is
     *     assumed.
     */
    function zoom(map: Map, view: View, resolution: number, opt_anchor?: Coordinate, opt_duration?: number, opt_direction?: number): void;
    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number|undefined} resolution Resolution to go to.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     * @param {number=} opt_direction Zooming direction; > 0 indicates
     *     zooming out, in which case the constraints system will select
     *     the largest nearest resolution; < 0 indicates zooming in, in
     *     which case the constraints system will select the smallest
     *     nearest resolution; == 0 indicates that the zooming direction
     *     is unknown/not relevant, in which case the constraints system
     *     will select the nearest resolution. If not defined 0 is
     *     assumed.
     */
    function zoom(map: Map, view: View, resolution: any /*undefined*/, opt_anchor?: Coordinate, opt_duration?: number, opt_direction?: number): void;

    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number} delta Delta from previous zoom level.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     */
    function zoomByDelta(map: Map, view: View, delta: number, opt_anchor?: Coordinate, opt_duration?: number): void;

    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number|undefined} resolution Resolution to go to.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     */
    function zoomWithoutConstraints(map: Map, view: View, resolution: number, opt_anchor?: Coordinate, opt_duration?: number): void;
    /**
     * @param {ol.Map} map Map.
     * @param {ol.View} view View.
     * @param {number|undefined} resolution Resolution to go to.
     * @param {ol.Coordinate=} opt_anchor Anchor coordinate.
     * @param {number=} opt_duration Duration.
     */
    function zoomWithoutConstraints(map: Map, view: View, resolution: any /*undefined*/, opt_anchor?: Coordinate, opt_duration?: number): void;
}

declare module ol.interaction.DoubleClickZoom {

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.DoubleClickZoom}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;
}

declare module ol.interaction.Pointer {

    /**
     * @param {Array.<ol.pointer.PointerEvent>} pointerEvents
     * @return {ol.Pixel} Centroid pixel.
     */
    function centroid(pointerEvents: pointer.PointerEvent[]): Pixel;

    /**
     * @param {ol.MapBrowserPointerEvent} mapBrowserEvent Event.
     * @this {ol.interaction.Pointer}
     */
    function handleDragEvent(mapBrowserEvent: MapBrowserPointerEvent): void;

    /**
     * @param {ol.MapBrowserPointerEvent} mapBrowserEvent Event.
     * @return {boolean} Capture dragging.
     * @this {ol.interaction.Pointer}
     */
    function handleUpEvent(mapBrowserEvent: MapBrowserPointerEvent): boolean;

    /**
     * @param {ol.MapBrowserPointerEvent} mapBrowserEvent Event.
     * @return {boolean} Capture dragging.
     * @this {ol.interaction.Pointer}
     */
    function handleDownEvent(mapBrowserEvent: MapBrowserPointerEvent): boolean;

    /**
     * @param {ol.MapBrowserPointerEvent} mapBrowserEvent Event.
     * @this {ol.interaction.Pointer}
     */
    function handleMoveEvent(mapBrowserEvent: MapBrowserPointerEvent): void;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.Pointer}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;
}

declare module ol.interaction.Draw {

    /**
     * @return {ol.style.StyleFunction} Styles.
     */
    function getDefaultStyleFunction(): style.StyleFunction;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.Draw}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;
}

declare module ol.interaction.Modify {

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.Modify}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @return {ol.style.StyleFunction} Styles.
     */
    function getDefaultStyleFunction(): style.StyleFunction;
}

declare module ol.interaction.Select {

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {ol.interaction.Select}
     * @api
     */
    function handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @return {ol.style.StyleFunction} Styles.
     */
    function getDefaultStyleFunction(): style.StyleFunction;
}