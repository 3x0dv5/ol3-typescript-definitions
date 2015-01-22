/// <reference path="../lib/definitely-typed/closure-library/closure/goog/iter/iter.d.ts" />
/// <reference path="../lib/definitely-typed/closure-library/closure/goog/events/browserevent.d.ts" />
/// <reference path="externs/olx.d.ts" />

declare module ol.control {

    class Control extends Control.__Class { }
    module Control {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.Object.__Class implements oli.control.Control {
    
            /**
             * @classdesc
             * A control is a visible widget with a DOM element in a fixed position on the
             * screen. They can involve user input (buttons), or be informational only;
             * the position is determined using CSS. By default these are placed in the
             * container with CSS class name `ol-overlaycontainer-stopevent`, but can use
             * any outside DOM element.
             *
             * This is the base class for controls. You can use it for simple custom
             * controls by creating the element with listeners, creating an instance:
             * ```js
             * var myControl = new ol.control.Control({element: myElement});
             * ```
             * and then adding this to the map.
             *
             * The main advantage of having this as a control rather than a simple separate
             * DOM element is that preventing propagation is handled for you. Controls
             * will also be `ol.Object`s in a `ol.Collection`, so you can use their
             * methods.
             *
             * You can also extend this base for your own control class. See
             * examples/custom-controls for an example of how to do this.
             *
             * @constructor
             * @extends {ol.Object}
             * @implements {oli.control.Control}
             * @param {olx.control.ControlOptions} options Control options.
             * @api stable
             */
            constructor(options: olx.control.ControlOptions);
    
            /**
             * @protected
             * @type {Element}
             */
            element: Element;
    
            /**
             * @protected
             * @type {!Array.<?number>}
             */
            listenerKeys: number[];
    
            /**
             * @type {function(ol.MapEvent)}
             */
            render: (_0: ol.MapEvent) => any /*missing*/;
    
            /**
             * @inheritDoc
             */
            disposeInternal(): void;
    
            /**
             * Get the map associated with this control.
             * @return {ol.Map} Map.
             * @api stable
             */
            getMap(): ol.Map;
    
            /**
             * Remove the control from its current map and attach it to the new map.
             * Subclasses may set up event handlers to get notified about changes to
             * the map here.
             * @param {ol.Map} map Map.
             * @api stable
             */
            setMap(map: ol.Map): void;
        }
    }

    class Attribution extends Attribution.__Class { }
    module Attribution {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * @classdesc
             * Control to show all the attributions associated with the layer sources
             * in the map. This control is one of the default controls included in maps.
             * By default it will show in the bottom right portion of the map, but this can
             * be changed by using a css selector for `.ol-attribution`.
             *
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.AttributionOptions=} opt_options Attribution options.
             * @api stable
             */
            constructor(opt_options?: olx.control.AttributionOptions);
    
            /**
             * @param {?olx.FrameState} frameState Frame state.
             * @return {Array.<Object.<string, ol.Attribution>>} Attributions.
             */
            getSourceAttributions(frameState: olx.FrameState): { [key: string]: ol.Attribution }[];
    
            /**
             * @return {boolean} True if the widget is collapsible.
             * @api stable
             */
            getCollapsible(): boolean;
    
            /**
             * @param {boolean} collapsible True if the widget is collapsible.
             * @api stable
             */
            setCollapsible(collapsible: boolean): void;
    
            /**
             * @param {boolean} collapsed True if the widget is collapsed.
             * @api stable
             */
            setCollapsed(collapsed: boolean): void;
    
            /**
             * @return {boolean} True if the widget is collapsed.
             * @api stable
             */
            getCollapsed(): boolean;
        }
    }

    class Rotate extends Rotate.__Class { }
    module Rotate {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * @classdesc
             * A button control to reset rotation to 0.
             * To style this control use css selector `.ol-rotate`. A `.ol-hidden` css
             * selector is added to the button when the rotation is 0.
             *
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.RotateOptions=} opt_options Rotate options.
             * @api stable
             */
            constructor(opt_options?: olx.control.RotateOptions);
        }
    }

    class Zoom extends Zoom.__Class { }
    module Zoom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * @classdesc
             * A control with 2 buttons, one for zoom in and one for zoom out.
             * This control is one of the default controls of a map. To style this control
             * use css selectors `.ol-zoom-in` and `.ol-zoom-out`.
             *
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.ZoomOptions=} opt_options Zoom options.
             * @api stable
             */
            constructor(opt_options?: olx.control.ZoomOptions);
        }
    }

    class FullScreen extends FullScreen.__Class { }
    module FullScreen {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * @classdesc
             * Provides a button that when clicked fills up the full screen with the map.
             * When in full screen mode, a close button is shown to exit full screen mode.
             * The [Fullscreen API](http://www.w3.org/TR/fullscreen/) is used to
             * toggle the map in full screen mode.
             *
             *
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.FullScreenOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.control.FullScreenOptions);
        }
    }

    class MousePosition extends MousePosition.__Class { }
    module MousePosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * @classdesc
             * A control to show the 2D coordinates of the mouse cursor. By default, these
             * are in the view projection, but can be in any supported projection.
             * By default the control is shown in the top right corner of the map, but this
             * can be changed by using the css selector `.ol-mouse-position`.
             *
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.MousePositionOptions=} opt_options Mouse position
             *     options.
             * @api stable
             */
            constructor(opt_options?: olx.control.MousePositionOptions);
    
            /**
             * @return {ol.CoordinateFormatType|undefined} The format to render the current
             *     position in.
             * @observable
             * @api stable
             */
            getCoordinateFormat(): any /*ol.CoordinateFormatType|any (undefined)*/;
    
            /**
             * @return {ol.proj.Projection|undefined} The projection to report mouse
             *     position in.
             * @observable
             * @api stable
             */
            getProjection(): any /*ol.proj.Projection|any (undefined)*/;
    
            /**
             * @param {goog.events.BrowserEvent} browserEvent Browser event.
             * @protected
             */
            handleMouseMove(browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * @param {goog.events.BrowserEvent} browserEvent Browser event.
             * @protected
             */
            handleMouseOut(browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * @inheritDoc
             * @api stable
             */
            setMap(map: any /* jsdoc error */): void;
    
            /**
             * @param {ol.CoordinateFormatType} format The format to render the current
             *     position in.
             * @observable
             * @api stable
             */
            setCoordinateFormat(format: ol.CoordinateFormatType): void;
    
            /**
             * @param {ol.proj.Projection} projection The projection to report mouse
             *     position in.
             * @observable
             * @api stable
             */
            setProjection(projection: ol.proj.Projection): void;
    
            ///**
            // * The iterable to group, coerced to an iterator.
            // * @type {!goog.iter.Iterator}
            // */
            //iterator: goog.iter.Iterator;
    
            ///**
            // * A function for determining the key value for each element in the iterable.
            // * If no function is provided, the identity function is used and returns the
            // * element unchanged.
            // * @type {function(...[VALUE]): KEY}
            // */
            //keyFunc: (_0: VALUE[][]) => KEY;
    
            ///**
            // * The target key for determining the start of a group.
            // * @type {KEY}
            // */
            //targetKey: KEY;
    
            ///**
            // * The current key visited during iteration.
            // * @type {KEY}
            // */
            //currentKey: KEY;
    
            ///**
            // * The current value being added to the group.
            // * @type {VALUE}
            // */
            //currentValue: VALUE;
    
            /**
             * The name of the level
             * @type {string}
             */
            name: string;
    
            /**
             * The numeric value of the level
             * @type {number}
             */
            value: number;
    
            /**
             * Keycode of key press.
             * @type {number}
             */
            keyCode: number;
    
            /**
             * Unicode character code.
             * @type {number}
             */
            charCode: number;
    
            /**
             * True if this event was generated by keyboard auto-repeat (i.e., the user is
             * holding the key down.)
             * @type {boolean}
             */
            repeat: boolean;
    
            /**
             * The number of lines the user scrolled
             * @type {number}
             * NOTE: Informally deprecated. Use deltaX and deltaY instead, they provide
             * more information.
             */
            detail: number;
    
            /**
             * The number of "lines" scrolled in the X direction.
             *
             * Note that not all browsers provide enough information to distinguish
             * horizontal and vertical scroll events, so for these unsupported browsers,
             * we will always have a deltaX of 0, even if the user scrolled their mouse
             * wheel or trackpad sideways.
             *
             * Currently supported browsers are Webkit and Firefox 3.1 or later.
             *
             * @type {number}
             */
            deltaX: number;
    
            /**
             * The number of lines scrolled in the Y direction.
             * @type {number}
             */
            deltaY: number;
        }
    }

    class OverviewMap extends OverviewMap.__Class { }
    module OverviewMap {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * Create a new control with a map acting as an overview map for an other
             * defined map.
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.OverviewMapOptions=} opt_options OverviewMap options.
             * @api
             */
            constructor(opt_options?: olx.control.OverviewMapOptions);
    
            /**
             * @inheritDoc
             * @api
             */
            setMap(map: any /* jsdoc error */): void;
    
            /**
             * @return {boolean} True if the widget is collapsible.
             * @api stable
             */
            getCollapsible(): boolean;
    
            /**
             * @param {boolean} collapsible True if the widget is collapsible.
             * @api stable
             */
            setCollapsible(collapsible: boolean): void;
    
            /**
             * @param {boolean} collapsed True if the widget is collapsed.
             * @api stable
             */
            setCollapsed(collapsed: boolean): void;
    
            /**
             * @return {boolean} True if the widget is collapsed.
             * @api stable
             */
            getCollapsed(): boolean;
        }
    }

    class ScaleLine extends ScaleLine.__Class { }
    module ScaleLine {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * @classdesc
             * A control displaying rough x-axis distances, calculated for the center of the
             * viewport.
             * No scale line will be shown when the x-axis distance cannot be calculated in
             * the view projection (e.g. at or beyond the poles in EPSG:4326).
             * By default the scale line will show in the bottom left portion of the map,
             * but this can be changed by using the css selector `.ol-scale-line`.
             *
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.ScaleLineOptions=} opt_options Scale line options.
             * @api stable
             */
            constructor(opt_options?: olx.control.ScaleLineOptions);
    
            /**
             * @return {ol.control.ScaleLineUnits|undefined} The units to use in the scale
             *     line.
             * @observable
             * @api stable
             */
            getUnits(): any /*ol.control.ScaleLineUnits|any (undefined)*/;
    
            /**
             * @param {ol.control.ScaleLineUnits} units The units to use in the scale line.
             * @observable
             * @api stable
             */
            setUnits(units: control.ScaleLineUnits): void;
    
            /**
             * X-Position relative to the screen.
             * @type {number|undefined}
             */
            clientX: any /*number|any (undefined)*/;
    
            /**
             * Y-Position relative to the screen.
             * @type {number|undefined}
             */
            clientY: any /*number|any (undefined)*/;
    
            /**
             * The closure object representing the browser event that caused this drag
             * event.
             * @type {goog.events.BrowserEvent}
             */
            browserEvent: goog.events.BrowserEvent;
    
            /**
             * The real x-position of the drag if it has been limited
             * @type {number}
             */
            left: number;
    
            /**
             * The real y-position of the drag if it has been limited
             * @type {number}
             */
            top: number;
    
            /**
             * Reference to the drag object for this event
             * @type {goog.fx.Dragger}
             */
            dragger: goog.fx.Dragger;
    
            /**
             * Whether drag was canceled with this event. Used to differentiate between
             * a legitimate drag END that can result in an action and a drag END which is
             * a result of a drag cancelation. For now it can happen 1) with drag END
             * event on FireFox when user drags the mouse out of the window, 2) with
             * drag END event on IE7 which is generated on MOUSEMOVE event when user
             * moves the mouse into the document after the mouse button has been
             * released, 3) when TOUCHCANCEL is raised instead of TOUCHEND (on touch
             * events).
             * @type {boolean}
             */
            dragCanceled: boolean;
    
            /**
             * List of items that makes up the drag source or drop target.
             * @type {Array<goog.fx.DragDropItem>}
             * @protected
             * @suppress {underscore|visibility}
             */
            items_: goog.fx.DragDropItem[];
    
            /**
             * Reference to the source goog.fx.AbstractDragDrop object.
             * @type {goog.fx.AbstractDragDrop}
             */
            dragSource: goog.fx.AbstractDragDrop;
    
            /**
             * Reference to the source goog.fx.DragDropItem object.
             * @type {goog.fx.DragDropItem}
             */
            dragSourceItem: goog.fx.DragDropItem;
    
            /**
             * Reference to the target goog.fx.AbstractDragDrop object.
             * @type {goog.fx.AbstractDragDrop|undefined}
             */
            dropTarget: any /*goog.fx.AbstractDragDrop|any (undefined)*/;
    
            /**
             * Reference to the target goog.fx.DragDropItem object.
             * @type {goog.fx.DragDropItem|undefined}
             */
            dropTargetItem: any /*goog.fx.DragDropItem|any (undefined)*/;
    
            /**
             * The actual element of the drop target that is the target for this event.
             * @type {Element|undefined}
             */
            dropTargetElement: any /*Element|any (undefined)*/;
    
            /**
             * X-Position relative to the viewport.
             * @type {number|undefined}
             */
            viewportX: any /*number|any (undefined)*/;
    
            /**
             * Y-Position relative to the viewport.
             * @type {number|undefined}
             */
            viewportY: any /*number|any (undefined)*/;
    
            /**
             * The subtarget that is currently active if a subtargeting function
             * is supplied.
             * @type {Object|undefined}
             */
            subtarget: any /*Object|any (undefined)*/;
    
            /**
             * Reference to drag source/target element
             * @type {Element}
             */
            element: Element;
    
            /**
             * Data associated with element.
             * @type {Object|undefined}
             */
            data: any /*Object|any (undefined)*/;
        }
    }

    class ZoomSlider extends ZoomSlider.__Class { }
    module ZoomSlider {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * @classdesc
             * A slider type of control for zooming.
             *
             * Example:
             *
             *     map.addControl(new ol.control.ZoomSlider());
             *
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.ZoomSliderOptions=} opt_options Zoom slider options.
             * @api stable
             */
            constructor(opt_options?: olx.control.ZoomSliderOptions);
    
            /**
             * @inheritDoc
             */
            setMap(map: any /* jsdoc error */): void;
        }
    }

    class ZoomToExtent extends ZoomToExtent.__Class { }
    module ZoomToExtent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Control.__Class {
    
            /**
             * @classdesc
             * A button control which, when pressed, changes the map view to a specific
             * extent. To style this control use the css selector `.ol-zoom-extent`.
             *
             * @constructor
             * @extends {ol.control.Control}
             * @param {olx.control.ZoomToExtentOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.control.ZoomToExtentOptions);
        }
    }

    /**
     * Set of controls included in maps by default. Unless configured otherwise,
     * this returns a collection containing an instance of each of the following
     * controls:
     * * {@link ol.control.Zoom}
     * * {@link ol.control.Rotate}
     * * {@link ol.control.Attribution}
     *
     * @param {olx.control.DefaultsOptions=} opt_options Defaults options.
     * @return {ol.Collection.<ol.control.Control>} Controls.
     * @api stable
     */
    function defaults(opt_options?: olx.control.DefaultsOptions): Collection<Control>;

    /**
     * @enum {string}
     */
    enum MousePositionProperty { PROJECTION, COORDINATE_FORMAT } 

    /**
     * @enum {string}
     */
    enum ScaleLineProperty { UNITS } 

    /**
     * Units for the scale line. Supported values are `'degrees'`, `'imperial'`,
     * `'nautical'`, `'metric'`, `'us'`.
     * @enum {string}
     * @api stable
     */
    enum ScaleLineUnits { DEGREES, IMPERIAL, NAUTICAL, METRIC, US }
}


declare module ol.control.Attribution {

    /**
     * @param {ol.MapEvent} mapEvent Map event.
     * @this {ol.control.Attribution}
     * @api
     */
    function render(mapEvent: MapEvent): void;
}

declare module ol.control.Rotate {

    /**
     * @param {ol.MapEvent} mapEvent Map event.
     * @this {ol.control.Rotate}
     * @api
     */
    function render(mapEvent: MapEvent): void;
}


declare module ol.control.OverviewMap {

    /**
     * @param {ol.MapEvent} mapEvent Map event.
     * @this {ol.control.OverviewMap}
     * @api
     */
    function render(mapEvent: MapEvent): void;
}

declare module ol.control.ScaleLine {

    /**
     * @const
     * @type {Array.<number>}
     */
    var LEADING_DIGITS: number[];

    /**
     * @param {ol.MapEvent} mapEvent Map event.
     * @this {ol.control.ScaleLine}
     * @api
     */
    function render(mapEvent: MapEvent): void;
}


declare module ol.control.ZoomSlider {

    /**
     * The enum for available directions.
     *
     * @enum {number}
     */
    enum direction { VERTICAL, HORIZONTAL } 

    /**
     * @param {ol.MapEvent} mapEvent Map event.
     * @this {ol.control.ZoomSlider}
     * @api
     */
    function render(mapEvent: MapEvent): void;
}

declare module ol.control.MousePosition {

    /**
     * @param {ol.MapEvent} mapEvent Map event.
     * @this {ol.control.MousePosition}
     * @api
     */
    function render(mapEvent: MapEvent): void;
}