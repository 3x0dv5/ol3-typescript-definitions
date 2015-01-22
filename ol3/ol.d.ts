/// <reference path="../lib/definitely-typed/closure-library/third_party/closure/goog/mochikit/async/deferred.d.ts"/>
/// <reference path="externs/olx.d.ts"/>

declare module ol {

    class Constraints extends Constraints.__Class { }
    module Constraints {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {ol.CenterConstraintType} centerConstraint Center constraint.
             * @param {ol.ResolutionConstraintType} resolutionConstraint
             *     Resolution constraint.
             * @param {ol.RotationConstraintType} rotationConstraint
             *     Rotation constraint.
             */
            constructor(centerConstraint: CenterConstraintType, resolutionConstraint: ResolutionConstraintType, rotationConstraint: RotationConstraintType);
    
            /**
             * @type {ol.CenterConstraintType}
             */
            center: CenterConstraintType;
    
            /**
             * @type {ol.ResolutionConstraintType}
             */
            resolution: ResolutionConstraintType;
    
            /**
             * @type {ol.RotationConstraintType}
             */
            rotation: RotationConstraintType;
    
            /** @const */
            id: any /*missing*/;
    
            /**
             * The event type.
             * @const {string}
             */
            type: any /*missing*/;
    
            /**
             * Whether to cancel the event in internal capture/bubble processing for IE.
             * @type {boolean}
             * @public
             * @suppress {underscore|visibility} Technically public, but referencing this
             *     outside this package is strongly discouraged.
             */
            propagationStopped_: boolean;
    
            /**
             * Whether the default action has been prevented.
             * This is a property to match the W3C specification at
             * {@link http://www.w3.org/TR/DOM-Level-3-Events/
             * #events-event-type-defaultPrevented}.
             * Must be treated as read-only outside the class.
             * @type {boolean}
             */
            defaultPrevented: boolean;
    
            /**
             * Return value for in internal capture/bubble processing for IE.
             * @type {boolean}
             * @public
             * @suppress {underscore|visibility} Technically public, but referencing this
             *     outside this package is strongly discouraged.
             */
            returnValue_: boolean;
    
            /**
             * For mouseover and mouseout events, the related object for the event.
             * @type {Node}
             */
            relatedTarget: Node;
    
            /**
             * X-coordinate relative to target.
             * @type {number}
             */
            offsetX: number;
    
            /**
             * Y-coordinate relative to target.
             * @type {number}
             */
            offsetY: number;
    
            /**
             * X-coordinate relative to the window.
             * @type {number}
             */
            clientX: number;
    
            /**
             * Y-coordinate relative to the window.
             * @type {number}
             */
            clientY: number;
    
            /**
             * X-coordinate relative to the monitor.
             * @type {number}
             */
            screenX: number;
    
            /**
             * Y-coordinate relative to the monitor.
             * @type {number}
             */
            screenY: number;
    
            /**
             * Which mouse button was pressed.
             * @type {number}
             */
            button: number;
    
            /**
             * Keycode of key press.
             * @type {number}
             */
            keyCode: number;
    
            /**
             * Keycode of key press.
             * @type {number}
             */
            charCode: number;
    
            /**
             * Whether control was pressed at time of event.
             * @type {boolean}
             */
            ctrlKey: boolean;
    
            /**
             * Whether alt was pressed at time of event.
             * @type {boolean}
             */
            altKey: boolean;
    
            /**
             * Whether shift was pressed at time of event.
             * @type {boolean}
             */
            shiftKey: boolean;
    
            /**
             * Whether the meta key was pressed at time of event.
             * @type {boolean}
             */
            metaKey: boolean;
    
            /**
             * History state object, only set for PopState events where it's a copy of the
             * state object provided to pushState or replaceState.
             * @type {Object}
             */
            state: Object;
    
            /**
             * Whether the default platform modifier key was pressed at time of event.
             * (This is control for all platforms except Mac, where it's Meta.)
             * @type {boolean}
             */
            platformModifierKey: boolean;
    
            /**
             * Callback function.
             * @type {Function}
             */
            listener: Function;
    
            /**
             * A wrapper over the original listener. This is used solely to
             * handle native browser events (it is used to simulate the capture
             * phase and to patch the event object).
             * @type {Function}
             */
            proxy: Function;
    
            /** @type {EventTarget|goog.events.Listenable} */
            src: any /*EventTarget|goog.events.Listenable*/;
    
            /**
             * Whether the listener is being called in the capture or bubble phase
             * @const {boolean}
             */
            capture: any /*missing*/;
    
            /**
             * Optional object whose context to execute the listener in
             * @type {Object|undefined}
             */
            handler: any /*Object|any (undefined)*/;
    
            /**
             * Whether to remove the listener after it has been called.
             * @type {boolean}
             */
            callOnce: boolean;
    
            /**
             * Whether the listener has been removed.
             * @type {boolean}
             */
            removed: boolean;
    
            /**
             * Maps of event type to an array of listeners.
             * @type {Object<string, !Array<!goog.events.Listener>>}
             */
            listeners: { [key: string]: goog.events.Listener[] };
        }
    }

    class Observable extends Observable.__Class { }
    module Observable {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * An event target providing convenient methods for listener registration
             * and unregistration. A generic `change` event is always available through
             * {@link ol.Observable#changed}.
             *
             * @constructor
             * @extends {goog.events.EventTarget}
             * @suppress {checkStructDictInheritance}
             * @struct
             * @api stable
             */
            constructor();
    
            /**
             * Increases the revision counter and disptches a 'change' event.
             * @fires change
             * @api
             */
            changed(): void;
    
            /**
             * @return {number} Revision.
             * @api
             */
            getRevision(): number;
    
            /**
             * Listen for a certain type of event.
             * @param {string|Array.<string>} type The event type or array of event types.
             * @param {function(?): ?} listener The listener function.
             * @param {Object=} opt_this The object to use as `this` in `listener`.
             * @return {goog.events.Key} Unique key for the listener.
             * @api stable
             */
            on(type: string, listener: (_0: any) => any, opt_this?: Object): goog.events.Key;
            /**
             * Listen for a certain type of event.
             * @param {string|Array.<string>} type The event type or array of event types.
             * @param {function(?): ?} listener The listener function.
             * @param {Object=} opt_this The object to use as `this` in `listener`.
             * @return {goog.events.Key} Unique key for the listener.
             * @api stable
             */
            on(type: string[], listener: (_0: any) => any, opt_this?: Object): goog.events.Key;
    
            /**
             * Listen once for a certain type of event.
             * @param {string|Array.<string>} type The event type or array of event types.
             * @param {function(?): ?} listener The listener function.
             * @param {Object=} opt_this The object to use as `this` in `listener`.
             * @return {goog.events.Key} Unique key for the listener.
             * @api stable
             */
            once(type: string, listener: (_0: any) => any, opt_this?: Object): goog.events.Key;
            /**
             * Listen once for a certain type of event.
             * @param {string|Array.<string>} type The event type or array of event types.
             * @param {function(?): ?} listener The listener function.
             * @param {Object=} opt_this The object to use as `this` in `listener`.
             * @return {goog.events.Key} Unique key for the listener.
             * @api stable
             */
            once(type: string[], listener: (_0: any) => any, opt_this?: Object): goog.events.Key;
    
            /**
             * Unlisten for a certain type of event.
             * @param {string|Array.<string>} type The event type or array of event types.
             * @param {function(?): ?} listener The listener function.
             * @param {Object=} opt_this The object which was used as `this` by the
             * `listener`.
             * @api stable
             */
            un(type: string, listener: (_0: any) => any, opt_this?: Object): void;
            /**
             * Unlisten for a certain type of event.
             * @param {string|Array.<string>} type The event type or array of event types.
             * @param {function(?): ?} listener The listener function.
             * @param {Object=} opt_this The object which was used as `this` by the
             * `listener`.
             * @api stable
             */
            un(type: string[], listener: (_0: any) => any, opt_this?: Object): void;
    
            /**
             * Removes an event listener using the key returned by `on()` or `once()`.
             * Note that using the {@link ol.Observable.unByKey} static function is to
             * be preferred.
             * @param {goog.events.Key} key The key returned by `on()` or `once()`.
             * @function
             * @api stable
             */
            unByKey(key: goog.events.Key): void;
        }
    }

    class ObjectEvent extends ObjectEvent.__Class { }
    module ObjectEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class implements oli.ObjectEvent {
    
            /**
             * @classdesc
             * Events emitted by {@link ol.Object} instances are instances of this type.
             *
             * @param {string} type The event type.
             * @param {string} key The property name.
             * @param {*} oldValue The old value for `key`.
             * @extends {goog.events.Event}
             * @implements {oli.ObjectEvent}
             * @constructor
             */
            constructor(type: string, key: string, oldValue: any);
    
            /**
             * The name of the property whose value is changing.
             * @type {string}
             * @api
             */
            key: string;
    
            /**
             * The old value. To get the new value use `e.target.get(e.key)` where
             * `e` is the event object.
             * @type {*}
             * @api
             */
            oldValue: any;
        }
    }

    class ObjectAccessor extends ObjectAccessor.__Class { }
    module ObjectAccessor {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {ol.Object} source Source object.
             * @param {ol.Object} target Target object.
             * @param {string} sourceKey Source key.
             * @param {string} targetKey Target key.
             */
            constructor(source: Object, target: Object, sourceKey: string, targetKey: string);
    
            /**
             * @type {ol.Object}
             */
            source: Object;
    
            /**
             * @type {ol.Object}
             */
            target: Object;
    
            /**
             * @type {string}
             */
            sourceKey: string;
    
            /**
             * @type {string}
             */
            targetKey: string;
    
            /**
             * @type {function(?): ?}
             */
            from: (_0: any) => any;
    
            /**
             * @type {function(?): ?}
             */
            to: (_0: any) => any;
    
            /**
             * @param {function(?): ?} from A function that transforms the source value
             *     before it is set to the target.
             * @param {function(?): ?} to A function that transforms the target value
             *     before it is set to the source.
             * @api
             */
            transform(from: (_0: any) => any, to: (_0: any) => any): void;
        }
    }

    class Object extends Object.__Class { }
    module Object {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Observable.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Most non-trivial classes inherit from this.
             *
             * This extends {@link ol.Observable} with observable properties, where each
             * property is observable as well as the object as a whole.
             *
             * Classes that inherit from this have pre-defined properties, to which you can
             * add your own. The pre-defined properties are listed in this documentation as
             * 'Observable Properties', and have their own accessors; for example,
             * {@link ol.Map} has a `target` property, accessed with `getTarget()`  and
             * changed with `setTarget()`. Not all properties are however settable. There
             * are also general-purpose accessors `get()` and `set()`. For example,
             * `get('target')` is equivalent to `getTarget()`.
             *
             * The `set` accessors trigger a change event, and you can monitor this by
             * registering a listener. For example, {@link ol.View} has a `center`
             * property, so `view.on('change:center', function(evt) {...});` would call the
             * function whenever the value of the center property changes. Within the
             * function, `evt.target` would be the view, so `evt.target.getCenter()` would
             * return the new center.
             *
             * You can add your own observable properties with
             * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
             * You can listen for changes on that property value with
             * `object.on('change:prop', listener)`. You can get a list of all
             * properties with {@link ol.Object#getProperties object.getProperties()}.
             *
             * Note that the observable properties are separate from standard JS properties.
             * You can, for example, give your map object a title with
             * `map.title='New title'` and with `map.set('title', 'Another title')`. The
             * first will be a `hasOwnProperty`; the second will appear in
             * `getProperties()`. Only the second is observable.
             *
             * The observable properties also implement a form of Key Value Observing.
             * Two objects can be bound together such that a change in one will
             * automatically be reflected in the other. See `bindTo` method for more
             * details, and see {@link ol.dom.Input} for the specific case of binding an
             * object with an HTML element.
             *
             * @constructor
             * @extends {ol.Observable}
             * @param {Object.<string, *>=} opt_values An object with key-value pairs.
             * @fires ol.ObjectEvent
             * @api
             */
            constructor(opt_values?: { [key: string]: any });
    
            /**
             * The bindTo method allows you to set up a two-way binding between a
             * `source` and `target` object. The method returns an object with a
             * `transform` method that you can use to provide `from` and `to`
             * functions to transform values on the way from the source to the
             * target and on the way back.
            *
             * For example, if you had two map views (sourceView and targetView)
             * and you wanted the target view to have double the resolution of the
             * source view, you could transform the resolution on the way to and
             * from the target with the following:
             *
             *     sourceView.bindTo('resolution', targetView)
             *       .transform(
             *         function(sourceResolution) {
             *           // from sourceView.resolution to targetView.resolution
             *           return 2 * sourceResolution;
             *         },
             *         function(targetResolution) {
             *           // from targetView.resolution to sourceView.resolution
             *           return targetResolution / 2;
             *         }
             *       );
             *
             * @param {string} key Key name.
             * @param {ol.Object} target Target.
             * @param {string=} opt_targetKey Target key.
             * @return {ol.ObjectAccessor}
             * @api
             */
            bindTo(key: string, target: Object, opt_targetKey?: string): ObjectAccessor;
    
            /**
             * Gets a value.
             * @param {string} key Key name.
             * @return {*} Value.
             * @api
             */
            get(key: string): any;
    
            /**
             * Get a list of object property names.
             * @return {Array.<string>} List of property names.
             * @api
             */
            getKeys(): string[];
    
            /**
             * Get an object of all property names and values.
             * @return {Object.<string, *>} Object.
             * @api
             */
            getProperties(): { [key: string]: any };
    
            /**
             * @param {string} key Key name.
             * @param {*} oldValue Old value.
             */
            notify(key: string, oldValue: any): void;
    
            /**
             * Sets a value.
             * @param {string} key Key name.
             * @param {*} value Value.
             * @api
             */
            set(key: string, value: any): void;
    
            /**
             * Sets a collection of key-value pairs.
             * @param {Object.<string, *>} values Values.
             * @api
             */
            setProperties(values: { [key: string]: any }): void;
    
            /**
             * Removes a binding. Unbinding will set the unbound property to the current
             *     value. The object will not be notified, as the value has not changed.
             * @param {string} key Key name.
             * @api
             */
            unbind(key: string): void;
    
            /**
             * Removes all bindings.
             * @api
             */
            unbindAll(): void;
        }
    }

    class Sphere extends Sphere.__Class { }
    module Sphere {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Class to create objects that can be used with {@link
             * ol.geom.Polygon.circular}.
             *
             * For example to create a sphere whose radius is equal to the semi-major
             * axis of the WGS84 ellipsoid:
             *
             * ```js
             * var wgs84Sphere= new ol.Sphere(6378137);
             * ```
             *
             * @constructor
             * @param {number} radius Radius.
             * @api
             */
            constructor(radius: number);
    
            /**
             * @type {number}
             */
            radius: number;
    
            /**
             * Returns the distance from c1 to c2 using the spherical law of cosines.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 2.
             * @return {number} Spherical law of cosines distance.
             */
            cosineDistance(c1: Coordinate, c2: Coordinate): number;
    
            /**
             * Returns the distance of c3 from the great circle path defined by c1 and c2.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 2.
             * @param {ol.Coordinate} c3 Coordinate 3.
             * @return {number} Cross-track distance.
             */
            crossTrackDistance(c1: Coordinate, c2: Coordinate, c3: Coordinate): number;
    
            /**
             * Returns the distance from c1 to c2 using Pythagoras's theorem on an
             * equirectangular projection.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 2.
             * @return {number} Equirectangular distance.
             */
            equirectangularDistance(c1: Coordinate, c2: Coordinate): number;
    
            /**
             * Returns the final bearing from c1 to c2.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 2.
             * @return {number} Initial bearing.
             */
            finalBearing(c1: Coordinate, c2: Coordinate): number;
    
            /**
             * Returns the distance from c1 to c2 using the haversine formula.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 2.
             * @return {number} Haversine distance.
             */
            haversineDistance(c1: Coordinate, c2: Coordinate): number;
    
            /**
             * Returns the point at `fraction` along the segment of the great circle passing
             * through c1 and c2.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 2.
             * @param {number} fraction Fraction.
             * @return {ol.Coordinate} Coordinate between c1 and c2.
             */
            interpolate(c1: Coordinate, c2: Coordinate, fraction: number): Coordinate;
    
            /**
             * Returns the initial bearing from c1 to c2.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 2.
             * @return {number} Initial bearing.
             */
            initialBearing(c1: Coordinate, c2: Coordinate): number;
    
            /**
             * Returns the maximum latitude of the great circle defined by bearing and
             * latitude.
             *
             * @param {number} bearing Bearing.
             * @param {number} latitude Latitude.
             * @return {number} Maximum latitude.
             */
            maximumLatitude(bearing: number, latitude: number): number;
    
            /**
             * Returns the midpoint between c1 and c2.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 2.
             * @return {ol.Coordinate} Midpoint.
             */
            midpoint(c1: Coordinate, c2: Coordinate): Coordinate;
    
            /**
             * Returns the coordinate at the given distance and bearing from `c1`.
             *
             * @param {ol.Coordinate} c1 The origin point (`[lon, lat]` in degrees).
             * @param {number} distance The great-circle distance between the origin
             *     point and the target point.
             * @param {number} bearing The bearing (in radians).
             * @return {ol.Coordinate} The target point.
             */
            offset(c1: Coordinate, distance: number, bearing: number): Coordinate;
        }
    }

    class View extends View.__Class { }
    module View {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Object.__Class {
    
            /**
             * @classdesc
             * An ol.View object represents a simple 2D view of the map.
             *
             * This is the object to act upon to change the center, resolution,
             * and rotation of the map.
             *
             * ### The view states
             *
             * An `ol.View` is determined by three states: `center`, `resolution`,
             * and `rotation`. Each state has a corresponding getter and setter, e.g.
             * `getCenter` and `setCenter` for the `center` state.
             *
             * An `ol.View` has a `projection`. The projection determines the
             * coordinate system of the center, and its units determine the units of the
             * resolution (projection units per pixel). The default projection is
             * Spherical Mercator (EPSG:3857).
             *
             * ### The constraints
             *
             * `setCenter`, `setResolution` and `setRotation` can be used to change the
             * states of the view. Any value can be passed to the setters. And the value
             * that is passed to a setter will effectively be the value set in the view,
             * and returned by the corresponding getter.
             *
             * But an `ol.View` object also has a *resolution constraint*, a
             * *rotation constraint* and a *center constraint*.
             *
             * As said above, no constraints are applied when the setters are used to set
             * new states for the view. Applying constraints is done explicitly through
             * the use of the `constrain*` functions (`constrainResolution` and
             * `constrainRotation` and `constrainCenter`).
             *
             * The main users of the constraints are the interactions and the
             * controls. For example, double-clicking on the map changes the view to
             * the "next" resolution. And releasing the fingers after pinch-zooming
             * snaps to the closest resolution (with an animation).
             *
             * The *resolution constraint* snaps to specific resolutions. It is
             * determined by the following options: `resolutions`, `maxResolution`,
             * `maxZoom`, and `zoomFactor`. If `resolutions` is set, the other three
             * options are ignored. See documentation for each option for more
             * information.
             *
             * The *rotation constraint* snaps to specific angles. It is determined
             * by the following options: `enableRotation` and `constrainRotation`.
             * By default the rotation value is snapped to zero when approaching the
             * horizontal.
             *
             * The *center constraint* is determined by the `extent` option. By
             * default the center is not constrained at all.
             *
             * @constructor
             * @extends {ol.Object}
             * @param {olx.ViewOptions=} opt_options View options.
             * @api stable
             */
            constructor(opt_options?: olx.ViewOptions);
    
            /**
             * @param {number} rotation Target rotation.
             * @param {ol.Coordinate} anchor Rotation anchor.
             * @return {ol.Coordinate|undefined} Center for rotation and anchor.
             */
            calculateCenterRotate(rotation: number, anchor: Coordinate): any /*ol.Coordinate|any (undefined)*/;
    
            /**
             * @param {number} resolution Target resolution.
             * @param {ol.Coordinate} anchor Zoom anchor.
             * @return {ol.Coordinate|undefined} Center for resolution and anchor.
             */
            calculateCenterZoom(resolution: number, anchor: Coordinate): any /*ol.Coordinate|any (undefined)*/;
    
            /**
             * Get the constrained center of this view.
             * @param {ol.Coordinate|undefined} center Center.
             * @return {ol.Coordinate|undefined} Constrained center.
             * @api
             */
            constrainCenter(center: Coordinate): any /*ol.Coordinate|any (undefined)*/;
            /**
             * Get the constrained center of this view.
             * @param {ol.Coordinate|undefined} center Center.
             * @return {ol.Coordinate|undefined} Constrained center.
             * @api
             */
            constrainCenter(center: any /*undefined*/): any /*ol.Coordinate|any (undefined)*/;
    
            /**
             * Get the constrained resolution of this view.
             * @param {number|undefined} resolution Resolution.
             * @param {number=} opt_delta Delta. Default is `0`.
             * @param {number=} opt_direction Direction. Default is `0`.
             * @return {number|undefined} Constrained resolution.
             * @api
             */
            constrainResolution(resolution: number, opt_delta?: number, opt_direction?: number): any /*number|any (undefined)*/;
            /**
             * Get the constrained resolution of this view.
             * @param {number|undefined} resolution Resolution.
             * @param {number=} opt_delta Delta. Default is `0`.
             * @param {number=} opt_direction Direction. Default is `0`.
             * @return {number|undefined} Constrained resolution.
             * @api
             */
            constrainResolution(resolution: any /*undefined*/, opt_delta?: number, opt_direction?: number): any /*number|any (undefined)*/;
    
            /**
             * Get the constrained rotation of this view.
             * @param {number|undefined} rotation Rotation.
             * @param {number=} opt_delta Delta. Default is `0`.
             * @return {number|undefined} Constrained rotation.
             * @api
             */
            constrainRotation(rotation: number, opt_delta?: number): any /*number|any (undefined)*/;
            /**
             * Get the constrained rotation of this view.
             * @param {number|undefined} rotation Rotation.
             * @param {number=} opt_delta Delta. Default is `0`.
             * @return {number|undefined} Constrained rotation.
             * @api
             */
            constrainRotation(rotation: any /*undefined*/, opt_delta?: number): any /*number|any (undefined)*/;
    
            /**
             * @return {ol.Coordinate|undefined} The center of the view.
             * @observable
             * @api stable
             */
            getCenter(): any /*ol.Coordinate|any (undefined)*/;
    
            /**
             * @return {Array.<number>} Hint.
             */
            getHints(): number[];
    
            /**
             * Calculate the extent for the current view state and the passed `size`.
             * `size` is the size in pixels of the box into which the calculated extent
             * should fit. In most cases you want to get the extent of the entire map,
             * that is `map.getSize()`.
             * @param {ol.Size} size Box pixel size.
             * @return {ol.Extent} Extent.
             * @api
             */
            calculateExtent(size: Size): Extent;
    
            /**
             * @return {ol.proj.Projection} The projection of the view.
             * @api stable
             */
            getProjection(): ol.proj.Projection;
    
            /**
             * @return {number|undefined} The resolution of the view.
             * @observable
             * @api stable
             */
            getResolution(): any /*number|any (undefined)*/;
    
            /**
             * Get the resolution for a provided extent (in map units) and size (in pixels).
             * @param {ol.Extent} extent Extent.
             * @param {ol.Size} size Box pixel size.
             * @return {number} The resolution at which the provided extent will render at
             *     the given size.
             * @api
             */
            getResolutionForExtent(extent: Extent, size: Size): number;
    
            /**
             * Return a function that returns a value between 0 and 1 for a
             * resolution. Exponential scaling is assumed.
             * @param {number=} opt_power Power.
             * @return {function(number): number} Resolution for value function.
             */
            getResolutionForValueFunction(opt_power?: number): (_0: number) => number;
    
            /**
             * @return {number|undefined} The rotation of the view.
             * @observable
             * @api stable
             */
            getRotation(): any /*number|any (undefined)*/;
    
            /**
             * Return a function that returns a resolution for a value between
             * 0 and 1. Exponential scaling is assumed.
             * @param {number=} opt_power Power.
             * @return {function(number): number} Value for resolution function.
             */
            getValueForResolutionFunction(opt_power?: number): (_0: number) => number;
    
            /**
             * @return {olx.ViewState} View state.
             */
            getState(): olx.ViewState;
    
            /**
             * Get the current zoom level. Return undefined if the current
             * resolution is undefined or not a "constrained resolution".
             * @return {number|undefined} Zoom.
             * @api stable
             */
            getZoom(): any /*number|any (undefined)*/;
    
            /**
             * Fit the map view to the passed `extent` and `size`. `size` is the size in
             * pixels of the box to fit the extent into. In most cases you will want to
             * use the map size, that is `map.getSize()`.
             * @param {ol.Extent} extent Extent.
             * @param {ol.Size} size Box pixel size.
             * @api
             */
            fitExtent(extent: Extent, size: Size): void;
    
            /**
             * Fit the given geometry based on the given map size and border.
             * Take care on the map angle.
             * @param {ol.geom.SimpleGeometry} geometry Geometry.
             * @param {ol.Size} size Box pixel size.
             * @param {olx.view.FitGeometryOptions=} opt_options Options.
             * @api
             */
            fitGeometry(geometry: ol.geom.SimpleGeometry, size: Size, opt_options?: olx.view.FitGeometryOptions): void;
    
            /**
             * Center on coordinate and view position.
             * Take care on the map angle.
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {ol.Size} size Box pixel size.
             * @param {ol.Pixel} position Position on the view to center on.
             * @api
             */
            centerOn(coordinate: Coordinate, size: Size, position: Pixel): void;
    
            /**
             * @return {boolean} Is defined.
             */
            isDef(): boolean;
    
            /**
             * Rotate the view around a given coordinate.
             * @param {number} rotation New rotation value for the view.
             * @param {ol.Coordinate=} opt_anchor The rotation center.
             * @api stable
             */
            rotate(rotation: number, opt_anchor?: Coordinate): void;
    
            /**
             * Set the center of the current view.
             * @param {ol.Coordinate|undefined} center The center of the view.
             * @observable
             * @api stable
             */
            setCenter(center: Coordinate): void;
            /**
             * Set the center of the current view.
             * @param {ol.Coordinate|undefined} center The center of the view.
             * @observable
             * @api stable
             */
            setCenter(center: any /*undefined*/): void;
    
            /**
             * @param {ol.ViewHint} hint Hint.
             * @param {number} delta Delta.
             * @return {number} New value.
             */
            setHint(hint: ol.ViewHint, delta: number): number;
    
            /**
             * Set the resolution for this view.
             * @param {number|undefined} resolution The resolution of the view.
             * @observable
             * @api stable
             */
            setResolution(resolution: number): void;
            /**
             * Set the resolution for this view.
             * @param {number|undefined} resolution The resolution of the view.
             * @observable
             * @api stable
             */
            setResolution(resolution: any /*undefined*/): void;
    
            /**
             * Set the rotation for this view.
             * @param {number|undefined} rotation The rotation of the view.
             * @observable
             * @api stable
             */
            setRotation(rotation: number): void;
            /**
             * Set the rotation for this view.
             * @param {number|undefined} rotation The rotation of the view.
             * @observable
             * @api stable
             */
            setRotation(rotation: any /*undefined*/): void;
    
            /**
             * Zoom to a specific zoom level.
             * @param {number} zoom Zoom level.
             * @api stable
             */
            setZoom(zoom: number): void;
        }
    }

    class TileRange extends TileRange.__Class { }
    module TileRange {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A representation of a contiguous block of tiles.  A tile range is specified
             * by its min/max tile coordinates and is inclusive of coordinates.
             *
             * @constructor
             * @param {number} minX Minimum X.
             * @param {number} maxX Maximum X.
             * @param {number} minY Minimum Y.
             * @param {number} maxY Maximum Y.
             * @struct
             */
            constructor(minX: number, maxX: number, minY: number, maxY: number);
    
            /**
             * @type {number}
             */
            minX: number;
    
            /**
             * @type {number}
             */
            maxX: number;
    
            /**
             * @type {number}
             */
            minY: number;
    
            /**
             * @type {number}
             */
            maxY: number;
    
            /**
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @return {boolean} Contains tile coordinate.
             */
            contains(tileCoord: TileCoord): boolean;
    
            /**
             * @param {ol.TileRange} tileRange Tile range.
             * @return {boolean} Contains.
             */
            containsTileRange(tileRange: TileRange): boolean;
    
            /**
             * @param {number} x Tile coordinate x.
             * @param {number} y Tile coordinate y.
             * @return {boolean} Contains coordinate.
             */
            containsXY(x: number, y: number): boolean;
    
            /**
             * @param {ol.TileRange} tileRange Tile range.
             * @return {boolean} Equals.
             */
            equals(tileRange: TileRange): boolean;
    
            /**
             * @param {ol.TileRange} tileRange Tile range.
             */
            extend(tileRange: TileRange): void;
    
            /**
             * @return {number} Height.
             */
            getHeight(): number;
    
            /**
             * @return {ol.Size} Size.
             */
            getSize(): Size;
    
            /**
             * @return {number} Width.
             */
            getWidth(): number;
    
            /**
             * @param {ol.TileRange} tileRange Tile range.
             * @return {boolean} Intersects.
             */
            intersects(tileRange: TileRange): boolean;
        }
    }

    class Attribution extends Attribution.__Class { }
    module Attribution {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * An attribution for a layer source.
             *
             * Example:
             *
             *     source: new ol.source.OSM({
             *       attributions: [
             *         new ol.Attribution({
             *           html: 'All maps &copy; ' +
             *               '<a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
             *         }),
             *         ol.source.OSM.ATTRIBUTION
             *       ],
             *     ..
             *
             * @constructor
             * @param {olx.AttributionOptions} options Attribution options.
             * @struct
             * @api stable
             */
            constructor(options: olx.AttributionOptions);
    
            /**
             * @return {string} HTML.
             * @api stable
             */
            getHTML(): string;
    
            /**
             * @param {Object.<string, ol.TileRange>} tileRanges Tile ranges.
             * @return {boolean} Intersects any tile range.
             */
            intersectsAnyTileRange(tileRanges: { [key: string]: TileRange }): boolean;
    
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
    
            /**
             * Width
             * @type {number}
             */
            width: number;
    
            /**
             * Height
             * @type {number}
             */
            height: number;
        }
    }

    class CollectionEvent extends CollectionEvent.__Class { }
    module CollectionEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class implements oli.CollectionEvent {
    
            /**
             * @classdesc
             * Events emitted by {@link ol.Collection} instances are instances of this
             * type.
             *
             * @constructor
             * @extends {goog.events.Event}
             * @implements {oli.CollectionEvent}
             * @param {ol.CollectionEventType} type Type.
             * @param {*=} opt_element Element.
             * @param {Object=} opt_target Target.
             */
            constructor(type: ol.CollectionEventType, opt_element?: any, opt_target?: Object);
    
            /**
             * The element that is added to or removed from the collection.
             * @type {*}
             * @api stable
             */
            element: any;
        }
    }

    class Collection<T> extends Collection.__Class<T> { }
    module Collection {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class<T> extends Object.__Class {
    
            /**
             * @classdesc
             * An expanded version of standard JS Array, adding convenience methods for
             * manipulation. Add and remove changes to the Collection trigger a Collection
             * event. Note that this does not cover changes to the objects _within_ the
             * Collection; they trigger events on the appropriate object, not on the
             * Collection as a whole.
             *
             * Because a Collection is itself an {@link ol.Object}, it can be bound to any
             * other Object or Collection such that a change in one will automatically be
             * reflected in the other.
             *
             * @constructor
             * @extends {ol.Object}
             * @fires ol.CollectionEvent
             * @param {Array.<T>=} opt_array Array.
             * @template T
             * @api stable
             */
            constructor(opt_array?: T[]);
    
            /**
             * Remove all elements from the collection.
             * @api stable
             */
            clear(): void;
    
            /**
             * @param {Array.<T>} arr Array.
             * @return {ol.Collection.<T>} This collection.
             * @api stable
             */
            extend(arr: T[]): Collection<T>;
    
            /**
             * Iterate over each element, calling the provided callback.
             * @param {function(this: S, T, number, Array.<T>): *} f The function to call
             *     for every element. This function takes 3 arguments (the element, the
             *     index and the array). The return value is ignored.
             * @param {S=} opt_this The object to use as `this` in `f`.
             * @template S
             * @api stable
             */
            forEach<S>(f: (_0: T, _1: number, _2: T[]) => any, opt_this?: S): void;
    
            /**
             * Get a reference to the underlying Array object. Warning: if the array
             * is mutated, no events will be dispatched by the collection, and the
             * collection's "length" property won't be in sync with the actual length
             * of the array.
             * @return {Array.<T>} Array.
             * @api stable
             */
            getArray(): T[];
    
            /**
             * Get the element at the provided index.
             * @param {number} index Index.
             * @return {T} Element.
             * @api stable
             */
            item(index: number): T;
    
            /**
             * Get the length of this collection.
             * @return {number} The length of the array.
             * @observable
             * @api stable
             */
            getLength(): number;
    
            /**
             * Insert an element at the provided index.
             * @param {number} index Index.
             * @param {T} elem Element.
             * @api stable
             */
            insertAt(index: number, elem: T): void;
    
            /**
             * Remove the last element of the collection and return it.
             * Return `undefined` if the collection is empty.
             * @return {T|undefined} Element.
             * @api stable
             */
            pop(): any /*T|any (undefined)*/;
    
            /**
             * Insert the provided element at the end of the collection.
             * @param {T} elem Element.
             * @return {number} Length.
             * @api stable
             */
            push(elem: T): number;
    
            /**
             * Removes the first occurence of elem from the collection.
             * @param {T} elem Element.
             * @return {T|undefined} The removed element or undefined if elem was not found.
             * @api stable
             */
            remove(elem: T): any /*T|any (undefined)*/;
    
            /**
             * Remove the element at the provided index and return it.
             * Return `undefined` if the collection does not contain this index.
             * @param {number} index Index.
             * @return {T|undefined} Value.
             * @api stable
             */
            removeAt(index: number): any /*T|any (undefined)*/;
    
            /**
             * Set the element at the provided index.
             * @param {number} index Index.
             * @param {T} elem Element.
             * @api stable
             */
            setAt(index: number, elem: T): void;
        }
    }

    class MapEvent extends MapEvent.__Class { }
    module MapEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class implements oli.MapEvent {
    
            /**
             * @classdesc
             * Events emitted as map events are instances of this type.
             * See {@link ol.Map} for which events trigger a map event.
             *
             * @constructor
             * @extends {goog.events.Event}
             * @implements {oli.MapEvent}
             * @param {string} type Event type.
             * @param {ol.Map} map Map.
             * @param {?olx.FrameState=} opt_frameState Frame state.
             */
            constructor(type: string, map: Map, opt_frameState?: olx.FrameState);
    
            /**
             * The map where the event occurred.
             * @type {ol.Map}
             * @api stable
             */
            map: Map;
    
            /**
             * The frame state at the time of the event.
             * @type {?olx.FrameState}
             * @api
             */
            frameState: olx.FrameState;
        }
    }

    class MapBrowserEvent extends MapBrowserEvent.__Class { }
    module MapBrowserEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends MapEvent.__Class implements oli.MapBrowserEvent {
    
            /**
             * @classdesc
             * Events emitted as map browser events are instances of this type.
             * See {@link ol.Map} for which events trigger a map browser event.
             *
             * @constructor
             * @extends {ol.MapEvent}
             * @implements {oli.MapBrowserEvent}
             * @param {string} type Event type.
             * @param {ol.Map} map Map.
             * @param {goog.events.BrowserEvent} browserEvent Browser event.
             * @param {?olx.FrameState=} opt_frameState Frame state.
             */
            constructor(type: string, map: Map, browserEvent: goog.events.BrowserEvent, opt_frameState?: olx.FrameState);
    
            /**
             * @const
             * @type {goog.events.BrowserEvent}
             */
            browserEvent: goog.events.BrowserEvent;
    
            /**
             * @const
             * @type {Event}
             * @api stable
             */
            originalEvent: Event;
    
            /**
             * @type {ol.Pixel}
             * @api stable
             */
            pixel: Pixel;
    
            /**
             * @type {ol.Coordinate}
             * @api stable
             */
            coordinate: Coordinate;
        }
    }

    class MapBrowserPointerEvent extends MapBrowserPointerEvent.__Class { }
    module MapBrowserPointerEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends MapBrowserEvent.__Class {
    
            /**
             * @constructor
             * @extends {ol.MapBrowserEvent}
             * @param {string} type Event type.
             * @param {ol.Map} map Map.
             * @param {ol.pointer.PointerEvent} pointerEvent Pointer event.
             * @param {?olx.FrameState=} opt_frameState Frame state.
             */
            constructor(type: string, map: Map, pointerEvent: ol.pointer.PointerEvent, opt_frameState?: olx.FrameState);
    
            /**
             * @const
             * @type {ol.pointer.PointerEvent}
             */
            pointerEvent: ol.pointer.PointerEvent;
        }
    }

    class MapBrowserEventHandler extends MapBrowserEventHandler.__Class { }
    module MapBrowserEventHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * @param {ol.Map} map The map with the viewport to listen to events on.
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor(map: Map);
    
            /**
             * Get the last "down" type event. This will be set on pointerdown.
             * @return {ol.pointer.PointerEvent} The most recent "down" type event (or null
             * if none have occurred).
             */
            getDown(): ol.pointer.PointerEvent;
    
            /**
             * @inheritDoc
             */
            disposeInternal(): void;
        }
    }

    class ImageBase extends ImageBase.__Class { }
    module ImageBase {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * @constructor
             * @extends {goog.events.EventTarget}
             * @param {ol.Extent} extent Extent.
             * @param {number|undefined} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.ImageState} state State.
             * @param {Array.<ol.Attribution>} attributions Attributions.
             */
            constructor(extent: Extent, resolution: number, pixelRatio: number, state: ol.ImageState, attributions: Attribution[]);
            /**
             * @constructor
             * @extends {goog.events.EventTarget}
             * @param {ol.Extent} extent Extent.
             * @param {number|undefined} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {ol.ImageState} state State.
             * @param {Array.<ol.Attribution>} attributions Attributions.
             */
            constructor(extent: Extent, resolution: any /*undefined*/, pixelRatio: number, state: ol.ImageState, attributions: Attribution[]);
    
            /**
             * @protected
             * @type {ol.Extent}
             */
            extent: Extent;
    
            /**
             * @protected
             * @type {number|undefined}
             */
            resolution: any /*number|any (undefined)*/;
    
            /**
             * @protected
             * @type {ol.ImageState}
             */
            state: ol.ImageState;
    
            /**
             * @protected
             */
            changed(): void;
    
            /**
             * @return {Array.<ol.Attribution>} Attributions.
             */
            getAttributions(): Attribution[];
    
            /**
             * @return {ol.Extent} Extent.
             */
            getExtent(): Extent;
    
            /**
             * @param {Object=} opt_context Object.
             * @return {HTMLCanvasElement|Image|HTMLVideoElement} Image.
             */
            getImage(opt_context?: Object): any /*HTMLCanvasElement|Image|HTMLVideoElement*/;
    
            /**
             * @return {number} PixelRatio.
             */
            getPixelRatio(): number;
    
            /**
             * @return {number} Resolution.
             */
            getResolution(): number;
    
            /**
             * @return {ol.ImageState} State.
             */
            getState(): ol.ImageState;
        }
    }

    class Tile extends Tile.__Class { }
    module Tile {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * @classdesc
             * Base class for tiles.
             *
             * @constructor
             * @extends {goog.events.EventTarget}
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @param {ol.TileState} state State.
             */
            constructor(tileCoord: TileCoord, state: ol.TileState);
    
            /**
             * @type {ol.TileCoord}
             */
            tileCoord: TileCoord;
    
            /**
             * @protected
             * @type {ol.TileState}
             */
            state: ol.TileState;
    
            /**
             * @protected
             */
            changed(): void;
    
            /**
             * @function
             * @param {Object=} opt_context Object.
             * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
             */
            getImage(opt_context?: Object): any /*HTMLCanvasElement|HTMLImageElement|HTMLVideoElement*/;
    
            /**
             * @return {string} Key.
             */
            getKey(): string;
    
            /**
             * @return {ol.TileCoord}
             * @api
             */
            getTileCoord(): TileCoord;
    
            /**
             * @return {ol.TileState} State.
             */
            getState(): ol.TileState;
     
        }
    }

    class TileQueue extends TileQueue.__Class { }
    module TileQueue {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends structs.PriorityQueue.__Class<any[]> {
    
            /**
             * @constructor
             * @extends {ol.structs.PriorityQueue.<Array>}
             * @param {ol.TilePriorityFunction} tilePriorityFunction
             *     Tile priority function.
             * @param {function(): ?} tileChangeCallback
             *     Function called on each tile change event.
             * @struct
             */
            constructor(tilePriorityFunction: TilePriorityFunction, tileChangeCallback: () => any);
    
            /**
             * @return {number} Number of tiles loading.
             */
            getTilesLoading(): number;
    
            /**
             * @protected
             */
            handleTileChange(): void;
    
            /**
             * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
             * @param {number} maxNewLoads Maximum number of new tiles to load.
             */
            loadMoreTiles(maxTotalLoading: number, maxNewLoads: number): void;
        }
    }

    class Kinetic extends Kinetic.__Class { }
    module Kinetic {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Implementation of inertial deceleration for map movement.
             *
             * @constructor
             * @param {number} decay Rate of decay (must be negative).
             * @param {number} minVelocity Minimum velocity (pixels/millisecond).
             * @param {number} delay Delay to consider to calculate the kinetic
             *     initial values (milliseconds).
             * @struct
             * @api
             */
            constructor(decay: number, minVelocity: number, delay: number);
    
            /**
             * FIXME empty description for jsdoc
             */
            begin(): void;
    
            /**
             * @param {number} x X.
             * @param {number} y Y.
             */
            update(x: number, y: number): void;
    
            /**
             * @return {boolean} Whether we should do kinetic animation.
             */
            end(): boolean;
    
            /**
             * @param {ol.Coordinate} source Source coordinate for the animation.
             * @return {ol.PreRenderFunction} Pre-render function for kinetic animation.
             */
            pan(source: Coordinate): PreRenderFunction;
    
            /**
             * @return {number} Total distance travelled (pixels).
             */
            getDistance(): number;
    
            /**
             * @return {number} Angle of the kinetic panning animation (radians).
             */
            getAngle(): number;
        }
    }

    class DragBoxEvent extends DragBoxEvent.__Class { }
    module DragBoxEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class implements oli.DragBoxEvent {
    
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.DragBox} instances are instances of
             * this type.
             *
             * @param {string} type The event type.
             * @param {ol.Coordinate} coordinate The event coordinate.
             * @extends {goog.events.Event}
             * @constructor
             * @implements {oli.DragBoxEvent}
             */
            constructor(type: string, coordinate: Coordinate);
    
            /**
             * The coordinate of the drag event.
             * @const
             * @type {ol.Coordinate}
             * @api stable
             */
            coordinate: Coordinate;
        }
    }

    class Map extends Map.__Class { }
    module Map {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Object.__Class {
    
            /**
             * @classdesc
             * The map is the core component of OpenLayers. For a map to render, a view,
             * one or more layers, and a target container are needed:
             *
             *     var map = new ol.Map({
             *       view: new ol.View({
             *         center: [0, 0],
             *         zoom: 1
             *       }),
             *       layers: [
             *         new ol.layer.Tile({
             *           source: new ol.source.MapQuest({layer: 'osm'})
             *         })
             *       ],
             *       target: 'map'
             *     });
             *
             * The above snippet creates a map using a {@link ol.layer.Tile} to display
             * {@link ol.source.MapQuest} OSM data and render it to a DOM element with the
             * id `map`.
             *
             * The constructor places a viewport container (with CSS class name
             * `ol-viewport`) in the target element (see `getViewport()`), and then two
             * further elements within the viewport: one with CSS class name
             * `ol-overlaycontainer-stopevent` for controls and some overlays, and one with
             * CSS class name `ol-overlaycontainer` for other overlays (see the `stopEvent`
             * option of {@link ol.Overlay} for the difference). The map itself is placed in
             * a further element within the viewport, either DOM or Canvas, depending on the
             * renderer.
             *
             * @constructor
             * @extends {ol.Object}
             * @param {olx.MapOptions} options Map options.
             * @fires ol.MapBrowserEvent
             * @fires ol.MapEvent
             * @fires ol.render.Event#postcompose
             * @fires ol.render.Event#precompose
             * @api stable
             */
            constructor(options: olx.MapOptions);
    
            /**
             * Add the given control to the map.
             * @param {ol.control.Control} control Control.
             * @api stable
             */
            addControl(control: ol.control.Control): void;
    
            /**
             * Add the given interaction to the map.
             * @param {ol.interaction.Interaction} interaction Interaction to add.
             * @api stable
             */
            addInteraction(interaction: ol.interaction.Interaction): void;
    
            /**
             * Adds the given layer to the top of this map.
             * @param {ol.layer.Base} layer Layer.
             * @api stable
             */
            addLayer(layer: ol.layer.Base): void;
    
            /**
             * Add the given overlay to the map.
             * @param {ol.Overlay} overlay Overlay.
             * @api stable
             */
            addOverlay(overlay: Overlay): void;
    
            /**
             * Add functions to be called before rendering. This can be used for attaching
             * animations before updating the map's view.  The {@link ol.animation}
             * namespace provides several static methods for creating prerender functions.
             * @param {...ol.PreRenderFunction} var_args Any number of pre-render functions.
             * @api
             */
            beforeRender(...var_args: PreRenderFunction[]): void;
    
            /**
             * @param {ol.PreRenderFunction} preRenderFunction Pre-render function.
             * @return {boolean} Whether the preRenderFunction has been found and removed.
             */
            removePreRenderFunction(preRenderFunction: PreRenderFunction): boolean;
    
            /**
             *
             * @inheritDoc
             */
            disposeInternal(): void;
    
            /**
             * Detect features that intersect a pixel on the viewport, and execute a
             * callback with each intersecting feature. Layers included in the detection can
             * be configured through `opt_layerFilter`. Feature overlays will always be
             * included in the detection.
             * @param {ol.Pixel} pixel Pixel.
             * @param {function(this: S, ol.Feature, ol.layer.Layer): T} callback Feature
             *     callback. If the detected feature is not on a layer, but on a
             *     {@link ol.FeatureOverlay}, then the 2nd argument to this function will
             *     be `null`. To stop detection, callback functions can return a truthy
             *     value.
             * @param {S=} opt_this Value to use as `this` when executing `callback`.
             * @param {(function(this: U, ol.layer.Layer): boolean)=} opt_layerFilter Layer
             *     filter function, only layers which are visible and for which this
             *     function returns `true` will be tested for features. By default, all
             *     visible layers will be tested. Feature overlays will always be tested.
             * @param {U=} opt_this2 Value to use as `this` when executing `layerFilter`.
             * @return {T|undefined} Callback result, i.e. the return value of last
             * callback execution, or the first truthy callback return value.
             * @template S,T,U
             * @api stable
             */
            forEachFeatureAtPixel<S,T,U>(pixel: Pixel, callback: (_0: Feature, _1: ol.layer.Layer) => T, opt_this?: S, opt_layerFilter?: (_0: ol.layer.Layer) => boolean, opt_this2?: U): any /*T|any (undefined)*/;
    
            /**
             * Returns the geographical coordinate for a browser event.
             * @param {Event} event Event.
             * @return {ol.Coordinate} Coordinate.
             * @api stable
             */
            getEventCoordinate(event: Event): Coordinate;
    
            /**
             * Returns the map pixel position for a browser event relative to the viewport.
             * @param {Event} event Event.
             * @return {ol.Pixel} Pixel.
             * @api stable
             */
            getEventPixel(event: Event): Pixel;
    
            /**
             * Get the target in which this map is rendered.
             * Note that this returns what is entered as an option or in setTarget:
             * if that was an element, it returns an element; if a string, it returns that.
             * @return {Element|string|undefined} The Element or id of the Element that the
             *     map is rendered in.
             * @observable
             * @api stable
             */
            getTarget(): any /*Element|string|any (undefined)*/;
    
            /**
             * Get the DOM element into which this map is rendered. In contrast to
             * `getTarget` this method always return an `Element`, or `null` if the
             * map has no target.
             * @return {Element} The element that the map is rendered in.
             * @api
             */
            getTargetElement(): Element;
    
            /**
             * @param {ol.Pixel} pixel Pixel.
             * @return {ol.Coordinate} Coordinate.
             * @api stable
             */
            getCoordinateFromPixel(pixel: Pixel): Coordinate;
    
            /**
             * @return {ol.Collection.<ol.control.Control>} Controls.
             * @api stable
             */
            getControls(): Collection<ol.control.Control>;
    
            /**
             * @return {ol.Collection.<ol.Overlay>} Overlays.
             * @api stable
             */
            getOverlays(): Collection<Overlay>;
    
            /**
             * Gets the collection of {@link ol.interaction.Interaction} instances
             * associated with this map. Modifying this collection changes the interactions
             * associated with the map.
             *
             * Interactions are used for e.g. pan, zoom and rotate.
             * @return {ol.Collection.<ol.interaction.Interaction>} Interactions.
             * @api stable
             */
            getInteractions(): Collection<ol.interaction.Interaction>;
    
            /**
             * Get the layergroup associated with this map.
             * @return {ol.layer.Group} A layer group containing the layers in this map.
             * @observable
             * @api stable
             */
            getLayerGroup(): ol.layer.Group;
    
            /**
             * Get the collection of layers associated with this map.
             * @return {!ol.Collection.<ol.layer.Base>} Layers.
             * @api stable
             */
            getLayers(): Collection<ol.layer.Base>;
    
            /**
             * @param {ol.Coordinate} coordinate Coordinate.
             * @return {ol.Pixel} Pixel.
             * @api stable
             */
            getPixelFromCoordinate(coordinate: Coordinate): Pixel;
    
            /**
             * Get the map renderer.
             * @return {ol.renderer.Map} Renderer
             */
            getRenderer(): ol.renderer.Map;
    
            /**
             * Get the size of this map.
             * @return {ol.Size|undefined} The size in pixels of the map in the DOM.
             * @observable
             * @api stable
             */
            getSize(): any /*ol.Size|any (undefined)*/;
    
            /**
             * Get the view associated with this map. A view manages properties such as
             * center and resolution.
             * @return {ol.View} The view that controls this map.
             * @observable
             * @api stable
             */
            getView(): View;
    
            /**
             * @return {Element} Viewport.
             * @api stable
             */
            getViewport(): Element;
    
            /**
             * @return {Element} The map's overlay container. Elements added to this
             * container will let mousedown and touchstart events through to the map, so
             * clicks and gestures on an overlay will trigger {@link ol.MapBrowserEvent}
             * events.
             */
            getOverlayContainer(): Element;
    
            /**
             * @return {Element} The map's overlay container. Elements added to this
             * container won't let mousedown and touchstart events through to the map, so
             * clicks and gestures on an overlay don't trigger any
             * {@link ol.MapBrowserEvent}.
             */
            getOverlayContainerStopEvent(): Element;
    
            /**
             * @param {ol.Tile} tile Tile.
             * @param {string} tileSourceKey Tile source key.
             * @param {ol.Coordinate} tileCenter Tile center.
             * @param {number} tileResolution Tile resolution.
             * @return {number} Tile priority.
             */
            getTilePriority(tile: Tile, tileSourceKey: string, tileCenter: Coordinate, tileResolution: number): number;
    
            /**
             * @param {goog.events.BrowserEvent} browserEvent Browser event.
             * @param {string=} opt_type Type.
             */
            handleBrowserEvent(browserEvent: goog.events.BrowserEvent, opt_type?: string): void;
    
            /**
             * @param {ol.MapBrowserEvent} mapBrowserEvent The event to handle.
             */
            handleMapBrowserEvent(mapBrowserEvent: MapBrowserEvent): void;
    
            /**
             * @protected
             */
            handlePostRender(): void;
    
            /**
             * Returns `true` if the map is defined, `false` otherwise. The map is defined
             * if it is contained in `document`, visible, has non-zero height and width, and
             * has a defined view.
             * @return {boolean} Is defined.
             */
            isDef(): boolean;
    
            /**
             * @return {boolean} Is rendered.
             */
            isRendered(): boolean;
    
            /**
             * Requests an immediate render in a synchronous manner.
             * @api stable
             */
            renderSync(): void;
    
            /**
             * Requests a render frame; rendering will effectively occur at the next browser
             * animation frame.
             * @api stable
             */
            render(): void;
    
            /**
             * Remove the given control from the map.
             * @param {ol.control.Control} control Control.
             * @return {ol.control.Control|undefined} The removed control (or undefined
             *     if the control was not found).
             * @api stable
             */
            removeControl(control: ol.control.Control): any /*ol.control.Control|any (undefined)*/;
    
            /**
             * Remove the given interaction from the map.
             * @param {ol.interaction.Interaction} interaction Interaction to remove.
             * @return {ol.interaction.Interaction|undefined} The removed interaction (or
             *     undefined if the interaction was not found).
             * @api stable
             */
            removeInteraction(interaction: ol.interaction.Interaction): any /*ol.interaction.Interaction|any (undefined)*/;
    
            /**
             * Removes the given layer from the map.
             * @param {ol.layer.Base} layer Layer.
             * @return {ol.layer.Base|undefined} The removed layer (or undefined if the
             *     layer was not found).
             * @api stable
             */
            removeLayer(layer: ol.layer.Base): any /*ol.layer.Base|any (undefined)*/;
    
            /**
             * Remove the given overlay from the map.
             * @param {ol.Overlay} overlay Overlay.
             * @return {ol.Overlay|undefined} The removed overlay (or undefined
             *     if the overlay was not found).
             * @api stable
             */
            removeOverlay(overlay: Overlay): any /*ol.Overlay|any (undefined)*/;
    
            /**
             * Sets the layergroup of this map.
             * @param {ol.layer.Group} layerGroup A layer group containing the layers in
             *     this map.
             * @observable
             * @api stable
             */
            setLayerGroup(layerGroup: ol.layer.Group): void;
    
            /**
             * Set the size of this map.
             * @param {ol.Size|undefined} size The size in pixels of the map in the DOM.
             * @observable
             * @api
             */
            setSize(size: Size): void;
            /**
             * Set the size of this map.
             * @param {ol.Size|undefined} size The size in pixels of the map in the DOM.
             * @observable
             * @api
             */
            setSize(size: any /*undefined*/): void;
    
            /**
             * Set the target element to render this map into.
             * @param {Element|string|undefined} target The Element or id of the Element
             *     that the map is rendered in.
             * @observable
             * @api stable
             */
            setTarget(target: Element): void;
            /**
             * Set the target element to render this map into.
             * @param {Element|string|undefined} target The Element or id of the Element
             *     that the map is rendered in.
             * @observable
             * @api stable
             */
            setTarget(target: string): void;
            /**
             * Set the target element to render this map into.
             * @param {Element|string|undefined} target The Element or id of the Element
             *     that the map is rendered in.
             * @observable
             * @api stable
             */
            setTarget(target: any /*undefined*/): void;
    
            /**
             * Set the view for this map.
             * @param {ol.View} view The view that controls this map.
             * @observable
             * @api stable
             */
            setView(view: View): void;
    
            /**
             * @param {ol.Feature} feature Feature.
             */
            skipFeature(feature: Feature): void;
    
            /**
             * Force a recalculation of the map viewport size.  This should be called when
             * third-party code changes the size of the map viewport.
             * @api stable
             */
            updateSize(): void;
    
            /**
             * @param {ol.Feature} feature Feature.
             */
            unskipFeature(feature: Feature): void;
        }
    }

    class Overlay extends Overlay.__Class { }
    module Overlay {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Object.__Class {
    
            /**
             * @classdesc
             * Like {@link ol.control.Control}, Overlays are visible widgets.
             * Unlike Controls, they are not in a fixed position on the screen, but are tied
             * to a geographical coordinate, so panning the map will move an Overlay but not
             * a Control.
             *
             * Example:
             *
             *     var popup = new ol.Overlay({
             *       element: document.getElementById('popup')
             *     });
             *     popup.setPosition(coordinate);
             *     map.addOverlay(popup);
             *
             * @constructor
             * @extends {ol.Object}
             * @param {olx.OverlayOptions} options Overlay options.
             * @api stable
             */
            constructor(options: olx.OverlayOptions);
    
            /**
             * Get the DOM element of this overlay.
             * @return {Element|undefined} The Element containing the overlay.
             * @observable
             * @api stable
             */
            getElement(): any /*Element|any (undefined)*/;
    
            /**
             * Get the map associated with this overlay.
             * @return {ol.Map|undefined} The map that the overlay is part of.
             * @observable
             * @api stable
             */
            getMap(): any /*ol.Map|any (undefined)*/;
    
            /**
             * Get the offset of this overlay.
             * @return {Array.<number>} The offset.
             * @observable
             * @api stable
             */
            getOffset(): number[];
    
            /**
             * Get the current position of this overlay.
             * @return {ol.Coordinate|undefined} The spatial point that the overlay is
             *     anchored at.
             * @observable
             * @api stable
             */
            getPosition(): any /*ol.Coordinate|any (undefined)*/;
    
            /**
             * Get the current positioning of this overlay.
             * @return {ol.OverlayPositioning} How the overlay is positioned
             *     relative to its point on the map.
             * @observable
             * @api stable
             */
            getPositioning(): ol.OverlayPositioning;
    
            /**
             * @protected
             */
            handleElementChanged(): void;
    
            /**
             * @protected
             */
            handleMapChanged(): void;
    
            /**
             * @protected
             */
            render(): void;
    
            /**
             * @protected
             */
            handleOffsetChanged(): void;
    
            /**
             * @protected
             */
            handlePositionChanged(): void;
    
            /**
             * @protected
             */
            handlePositioningChanged(): void;
    
            /**
             * Set the DOM element to be associated with this overlay.
             * @param {Element|undefined} element The Element containing the overlay.
             * @observable
             * @api stable
             */
            setElement(element: Element): void;
            /**
             * Set the DOM element to be associated with this overlay.
             * @param {Element|undefined} element The Element containing the overlay.
             * @observable
             * @api stable
             */
            setElement(element: any /*undefined*/): void;
    
            /**
             * Set the map to be associated with this overlay.
             * @param {ol.Map|undefined} map The map that the overlay is part of.
             * @observable
             * @api stable
             */
            setMap(map: Map): void;
            /**
             * Set the map to be associated with this overlay.
             * @param {ol.Map|undefined} map The map that the overlay is part of.
             * @observable
             * @api stable
             */
            setMap(map: any /*undefined*/): void;
    
            /**
             * Set the offset for this overlay.
             * @param {Array.<number>} offset Offset.
             * @observable
             * @api stable
             */
            setOffset(offset: number[]): void;
    
            /**
             * Set the position for this overlay.
             * @param {ol.Coordinate|undefined} position The spatial point that the overlay
             *     is anchored at.
             * @observable
             * @api stable
             */
            setPosition(position: Coordinate): void;
            /**
             * Set the position for this overlay.
             * @param {ol.Coordinate|undefined} position The spatial point that the overlay
             *     is anchored at.
             * @observable
             * @api stable
             */
            setPosition(position: any /*undefined*/): void;
    
            /**
             * Set the positioning for this overlay.
             * @param {ol.OverlayPositioning} positioning how the overlay is
             *     positioned relative to its point on the map.
             * @observable
             * @api stable
             */
            setPositioning(positioning: ol.OverlayPositioning): void;
        }
    }

    class DeviceOrientation extends DeviceOrientation.__Class { }
    module DeviceOrientation {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Object.__Class {
    
            /**
             * @classdesc
             * The ol.DeviceOrientation class provides access to DeviceOrientation
             * information and events, see the [HTML 5 DeviceOrientation Specification](
             * http://www.w3.org/TR/orientation-event/) for more details.
             *
             * Many new computers, and especially mobile phones
             * and tablets, provide hardware support for device orientation. Web
             * developers targetting mobile devices will be especially interested in this
             * class.
             *
             * Device orientation data are relative to a common starting point. For mobile
             * devices, the starting point is to lay your phone face up on a table with the
             * top of the phone pointing north. This represents the zero state. All
             * angles are then relative to this state. For computers, it is the same except
             * the screen is open at 90 degrees.
             *
             * Device orientation is reported as three angles - `alpha`, `beta`, and
             * `gamma` - relative to the starting position along the three planar axes X, Y
             * and Z. The X axis runs from the left edge to the right edge through the
             * middle of the device. Similarly, the Y axis runs from the bottom to the top
             * of the device through the middle. The Z axis runs from the back to the front
             * through the middle. In the starting position, the X axis points to the
             * right, the Y axis points away from you and the Z axis points straight up
             * from the device lying flat.
             *
             * The three angles representing the device orientation are relative to the
             * three axes. `alpha` indicates how much the device has been rotated around the
             * Z axis, which is commonly interpreted as the compass heading (see note
             * below). `beta` indicates how much the device has been rotated around the X
             * axis, or how much it is tilted from front to back.  `gamma` indicates how
             * much the device has been rotated around the Y axis, or how much it is tilted
             * from left to right.
             *
             * For most browsers, the `alpha` value returns the compass heading so if the
             * device points north, it will be 0.  With Safari on iOS, the 0 value of
             * `alpha` is calculated from when device orientation was first requested.
             * ol.DeviceOrientation provides the `heading` property which normalizes this
             * behavior across all browsers for you.
             *
             * It is important to note that the HTML 5 DeviceOrientation specification
             * indicates that `alpha`, `beta` and `gamma` are in degrees while the
             * equivalent properties in ol.DeviceOrientation are in radians for consistency
             * with all other uses of angles throughout OpenLayers.
             *
             * @see http://www.w3.org/TR/orientation-event/
             *
             * @constructor
             * @extends {ol.Object}
             * @fires change Triggered when the device orientation changes.
             * @param {olx.DeviceOrientationOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.DeviceOrientationOptions);
    
            /**
             * @inheritDoc
             */
            disposeInternal(): void;
    
            /**
             * @return {number|undefined} The euler angle in radians of the device from the
             *     standard Z axis.
             * @observable
             * @api
             */
            getAlpha(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} The euler angle in radians of the device from the
             *     planar X axis.
             * @observable
             * @api
             */
            getBeta(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} The euler angle in radians of the device from the
             *     planar Y axis.
             * @observable
             * @api
             */
            getGamma(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} The heading of the device relative to north, in
             *     radians, normalizing for different browser behavior.
             * @observable
             * @api
             */
            getHeading(): any /*number|any (undefined)*/;
    
            /**
             * Are we tracking the device's orientation?
             * @return {boolean} The status of tracking changes to alpha, beta and gamma.
             *     If true, changes are tracked and reported immediately.
             * @observable
             * @api
             */
            getTracking(): boolean;
    
            /**
             * Enable or disable tracking of DeviceOrientation events.
             * @param {boolean} tracking The status of tracking changes to alpha, beta and
             *     gamma. If true, changes are tracked and reported immediately.
             * @observable
             * @api
             */
            setTracking(tracking: boolean): void;
        }
    }

    class Ellipsoid extends Ellipsoid.__Class { }
    module Ellipsoid {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {number} a Major radius.
             * @param {number} flattening Flattening.
             */
            constructor(a: number, flattening: number);
    
            /**
             * @const
             * @type {number}
             */
            a: number;
    
            /**
             * @const
             * @type {number}
             */
            flattening: number;
    
            /**
             * @const
             * @type {number}
             */
            b: number;
    
            /**
             * @const
             * @type {number}
             */
            eSquared: number;
    
            /**
             * @const
             * @type {number}
             */
            e: number;
    
            /**
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 1.
             * @param {number=} opt_minDeltaLambda Minimum delta lambda for convergence.
             * @param {number=} opt_maxIterations Maximum iterations.
             * @return {{distance: number, initialBearing: number, finalBearing: number}}
             *     Vincenty.
             */
            vincenty(c1: Coordinate, c2: Coordinate, opt_minDeltaLambda?: number, opt_maxIterations?: number): { distance: number; initialBearing: number; finalBearing: number };
    
            /**
             * Returns the distance from c1 to c2 using Vincenty.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 1.
             * @param {number=} opt_minDeltaLambda Minimum delta lambda for convergence.
             * @param {number=} opt_maxIterations Maximum iterations.
             * @return {number} Vincenty distance.
             */
            vincentyDistance(c1: Coordinate, c2: Coordinate, opt_minDeltaLambda?: number, opt_maxIterations?: number): number;
    
            /**
             * Returns the final bearing from c1 to c2 using Vincenty.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 1.
             * @param {number=} opt_minDeltaLambda Minimum delta lambda for convergence.
             * @param {number=} opt_maxIterations Maximum iterations.
             * @return {number} Initial bearing.
             */
            vincentyFinalBearing(c1: Coordinate, c2: Coordinate, opt_minDeltaLambda?: number, opt_maxIterations?: number): number;
    
            /**
             * Returns the initial bearing from c1 to c2 using Vincenty.
             *
             * @param {ol.Coordinate} c1 Coordinate 1.
             * @param {ol.Coordinate} c2 Coordinate 1.
             * @param {number=} opt_minDeltaLambda Minimum delta lambda for convergence.
             * @param {number=} opt_maxIterations Maximum iterations.
             * @return {number} Initial bearing.
             */
            vincentyInitialBearing(c1: Coordinate, c2: Coordinate, opt_minDeltaLambda?: number, opt_maxIterations?: number): number;
        }
    }

    class Feature extends Feature.__Class { }
    module Feature {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Object.__Class {
    
            /**
             * @classdesc
             * A vector object for geographic features with a geometry and other
             * attribute properties, similar to the features in vector file formats like
             * GeoJSON.
             *
             * Features can be styled individually with `setStyle`; otherwise they use the
             * style of their vector layer or feature overlay.
             *
             * Note that attribute properties are set as {@link ol.Object} properties on
             * the feature object, so they are observable, and have get/set accessors.
             *
             * Typically, a feature has a single geometry property. You can set the
             * geometry using the `setGeometry` method and get it with `getGeometry`.
             * It is possible to store more than one geometry on a feature using attribute
             * properties. By default, the geometry used for rendering is identified by
             * the property name `geometry`. If you want to use another geometry property
             * for rendering, use the `setGeometryName` method to change the attribute
             * property associated with the geometry for the feature.  For example:
             *
             * ```js
             * var feature = new ol.Feature({
             *   geometry: new ol.geom.Polygon(polyCoords),
             *   labelPoint: new ol.geom.Point(labelCoords),
             *   name: 'My Polygon'
             * });
             *
             * // get the polygon geometry
             * var poly = feature.getGeometry();
             *
             * // Render the feature as a point using the coordinates from labelPoint
             * feature.setGeometryName('labelPoint');
             *
             * // get the point geometry
             * var point = feature.getGeometry();
             * ```
             *
             * @constructor
             * @extends {ol.Object}
             * @fires change Triggered when the id, the geometry or the style of the
             *     feature changes.
             * @param {ol.geom.Geometry|Object.<string, *>=} opt_geometryOrProperties
             *     You may pass a Geometry object directly, or an object literal
             *     containing properties.  If you pass an object literal, you may
             *     include a Geometry associated with a `geometry` key.
             * @api stable
             */
            constructor(opt_geometryOrProperties?: ol.geom.Geometry);
            /**
             * @classdesc
             * A vector object for geographic features with a geometry and other
             * attribute properties, similar to the features in vector file formats like
             * GeoJSON.
             *
             * Features can be styled individually with `setStyle`; otherwise they use the
             * style of their vector layer or feature overlay.
             *
             * Note that attribute properties are set as {@link ol.Object} properties on
             * the feature object, so they are observable, and have get/set accessors.
             *
             * Typically, a feature has a single geometry property. You can set the
             * geometry using the `setGeometry` method and get it with `getGeometry`.
             * It is possible to store more than one geometry on a feature using attribute
             * properties. By default, the geometry used for rendering is identified by
             * the property name `geometry`. If you want to use another geometry property
             * for rendering, use the `setGeometryName` method to change the attribute
             * property associated with the geometry for the feature.  For example:
             *
             * ```js
             * var feature = new ol.Feature({
             *   geometry: new ol.geom.Polygon(polyCoords),
             *   labelPoint: new ol.geom.Point(labelCoords),
             *   name: 'My Polygon'
             * });
             *
             * // get the polygon geometry
             * var poly = feature.getGeometry();
             *
             * // Render the feature as a point using the coordinates from labelPoint
             * feature.setGeometryName('labelPoint');
             *
             * // get the point geometry
             * var point = feature.getGeometry();
             * ```
             *
             * @constructor
             * @extends {ol.Object}
             * @fires change Triggered when the id, the geometry or the style of the
             *     feature changes.
             * @param {ol.geom.Geometry|Object.<string, *>=} opt_geometryOrProperties
             *     You may pass a Geometry object directly, or an object literal
             *     containing properties.  If you pass an object literal, you may
             *     include a Geometry associated with a `geometry` key.
             * @api stable
             */
            constructor(opt_geometryOrProperties?: { [key: string]: any });
    
            /**
             * Clone this feature. If the original feature has a geometry it
             * is also cloned. The feature id is not set in the clone.
             * @return {ol.Feature} The clone.
             * @api stable
             */
            clone(): Feature;
    
            /**
             * @return {ol.geom.Geometry|undefined} Returns the Geometry associated
             *     with this feature using the current geometry name property.  By
             *     default, this is `geometry` but it may be changed by calling
             *     `setGeometryName`.
             * @api stable
             * @observable
             */
            getGeometry(): any /*ol.geom.Geometry|any (undefined)*/;
    
            /**
             * @return {number|string|undefined} Id.
             * @api stable
             */
            getId(): any /*number|string|any (undefined)*/;
    
            /**
             * @return {string} Get the property name associated with the geometry for
             *     this feature.  By default, this is `geometry` but it may be changed by
             *     calling `setGeometryName`.
             * @api stable
             */
            getGeometryName(): string;
    
            /**
             * @return {ol.style.Style|Array.<ol.style.Style>|
             *     ol.feature.FeatureStyleFunction} Return the style as set by `setStyle`
             * in the same format that it was provided in. If `setStyle` has not been
             * called, or if it was called with `null`, then `getStyle()` will return
             * `null`.
             * @api stable
             */
            getStyle(): any /*ol.style.Style|ol.style.Style[]|ol.feature.FeatureStyleFunction*/;
    
            /**
             * @return {ol.feature.FeatureStyleFunction|undefined} Return a function
             * representing the current style of this feature.
             * @api stable
             */
            getStyleFunction(): any /*ol.feature.FeatureStyleFunction|any (undefined)*/;
    
            /**
             * @param {ol.geom.Geometry|undefined} geometry Set the geometry for this
             * feature. This will update the property associated with the current
             * geometry property name.  By default, this is `geometry` but it can be
             * changed by calling `setGeometryName`.
             * @api stable
             * @observable
             */
            setGeometry(geometry: ol.geom.Geometry): void;
            /**
             * @param {ol.geom.Geometry|undefined} geometry Set the geometry for this
             * feature. This will update the property associated with the current
             * geometry property name.  By default, this is `geometry` but it can be
             * changed by calling `setGeometryName`.
             * @api stable
             * @observable
             */
            setGeometry(geometry: any /*undefined*/): void;
    
            /**
             * Set the style for the feature.  This can be a single style object, an array
             * of styles, or a function that takes a resolution and returns an array of
             * styles. If it is `null` the feature has no style (a `null` style).
             * @param {ol.style.Style|Array.<ol.style.Style>|
             *     ol.feature.FeatureStyleFunction} style Style for this feature.
             * @api stable
             */
            setStyle(style: ol.style.Style): void;
            /**
             * Set the style for the feature.  This can be a single style object, an array
             * of styles, or a function that takes a resolution and returns an array of
             * styles. If it is `null` the feature has no style (a `null` style).
             * @param {ol.style.Style|Array.<ol.style.Style>|
             *     ol.feature.FeatureStyleFunction} style Style for this feature.
             * @api stable
             */
            setStyle(style: ol.style.Style[]): void;
            /**
             * Set the style for the feature.  This can be a single style object, an array
             * of styles, or a function that takes a resolution and returns an array of
             * styles. If it is `null` the feature has no style (a `null` style).
             * @param {ol.style.Style|Array.<ol.style.Style>|
             *     ol.feature.FeatureStyleFunction} style Style for this feature.
             * @api stable
             */
            setStyle(style: feature.FeatureStyleFunction): void;
    
            /**
             * @param {number|string|undefined} id Set a unique id for this feature.
             * The id may be used to retrieve a feature from a vector source with the
             * {@link ol.source.Vector#getFeatureById} method.
             * @api stable
             */
            setId(id: number): void;
            /**
             * @param {number|string|undefined} id Set a unique id for this feature.
             * The id may be used to retrieve a feature from a vector source with the
             * {@link ol.source.Vector#getFeatureById} method.
             * @api stable
             */
            setId(id: string): void;
            /**
             * @param {number|string|undefined} id Set a unique id for this feature.
             * The id may be used to retrieve a feature from a vector source with the
             * {@link ol.source.Vector#getFeatureById} method.
             * @api stable
             */
            setId(id: any /*undefined*/): void;
    
            /**
             * @param {string} name Set the property name from which this feature's
             *     geometry will be fetched when calling `getGeometry`.
             * @api stable
             */
            setGeometryName(name: string): void;
        }
    }

    class FeatureOverlay extends FeatureOverlay.__Class { }
    module FeatureOverlay {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * A mechanism for changing the style of a small number of features on a
             * temporary basis, for example highlighting. This is necessary with the Canvas
             * renderer, where, unlike in SVG, features cannot be individually referenced.
             * See examples/vector-layers for an example: create a FeatureOverlay with a
             * different style, copy the feature(s) you want rendered in this different
             * style into it, and then remove them again when you're finished.
             *
             * @constructor
             * @param {olx.FeatureOverlayOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.FeatureOverlayOptions);
    
            /**
             * @param {ol.Feature} feature Feature.
             * @api
             */
            addFeature(feature: Feature): void;
    
            /**
             * @return {ol.Collection.<ol.Feature>} Features collection.
             * @api
             */
            getFeatures(): Collection<Feature>;
    
            /**
             * @param {ol.Feature} feature Feature.
             * @api
             */
            removeFeature(feature: Feature): void;
    
            /**
             * @param {ol.Collection.<ol.Feature>} features Features collection.
             * @api
             */
            setFeatures(features: Collection<Feature>): void;
    
            /**
             * @param {ol.Map} map Map.
             * @api
             */
            setMap(map: Map): void;
    
            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles.
             * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction} style
             *     Overlay style.
             * @api
             */
            setStyle(style: ol.style.Style): void;
            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles.
             * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction} style
             *     Overlay style.
             * @api
             */
            setStyle(style: ol.style.Style[]): void;
            /**
             * Set the style for features.  This can be a single style object, an array
             * of styles, or a function that takes a feature and resolution and returns
             * an array of styles.
             * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction} style
             *     Overlay style.
             * @api
             */
            setStyle(style: ol.style.StyleFunction): void;
    
            /**
             * Get the style for features.  This returns whatever was passed to the `style`
             * option at construction or to the `setStyle` method.
             * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
             *     Overlay style.
             * @api
             */
            getStyle(): any /*ol.style.Style|ol.style.Style[]|ol.style.StyleFunction*/;
    
            /**
             * Get the style function.
             * @return {ol.style.StyleFunction|undefined} Style function.
             * @api
             */
            getStyleFunction(): any /*ol.style.StyleFunction|any (undefined)*/;
        }
    }

    class Geolocation extends Geolocation.__Class { }
    module Geolocation {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Object.__Class {
    
            /**
             * @classdesc
             * Helper class for providing HTML5 Geolocation capabilities.
             * The [Geolocation API](http://www.w3.org/TR/geolocation-API/)
             * is used to locate a user's position.
             *
             * Example:
             *
             *     var geolocation = new ol.Geolocation({
             *       // take the projection to use from the map's view
             *       projection: view.getProjection()
             *     });
             *     // listen to changes in position
             *     geolocation.on('change', function(evt) {
             *       window.console.log(geolocation.getPosition());
             *     });
             *
             * @constructor
             * @extends {ol.Object}
             * @fires change Triggered when the position changes.
             * @param {olx.GeolocationOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.GeolocationOptions);
    
            /**
             * @inheritDoc
             */
            disposeInternal(): void;
    
            /**
             * Get the accuracy of the position in meters.
             * @return {number|undefined} The accuracy of the position measurement in
             *     meters.
             * @observable
             * @api stable
             */
            getAccuracy(): any /*number|any (undefined)*/;
    
            /**
             * Get a geometry of the position accuracy.
             * @return {?ol.geom.Geometry} A geometry of the position accuracy.
             * @observable
             * @api stable
             */
            getAccuracyGeometry(): ol.geom.Geometry;
    
            /**
             * Get the altitude associated with the position.
             * @return {number|undefined} The altitude of the position in meters above mean
             *     sea level.
             * @observable
             * @api stable
             */
            getAltitude(): any /*number|any (undefined)*/;
    
            /**
             * Get the altitude accuracy of the position.
             * @return {number|undefined} The accuracy of the altitude measurement in
             *     meters.
             * @observable
             * @api stable
             */
            getAltitudeAccuracy(): any /*number|any (undefined)*/;
    
            /**
             * Get the heading as radians clockwise from North.
             * @return {number|undefined} The heading of the device in radians from north.
             * @observable
             * @api stable
             */
            getHeading(): any /*number|any (undefined)*/;
    
            /**
             * Get the position of the device.
             * @return {ol.Coordinate|undefined} The current position of the device reported
             *     in the current projection.
             * @observable
             * @api stable
             */
            getPosition(): any /*ol.Coordinate|any (undefined)*/;
    
            /**
             * Get the projection associated with the position.
             * @return {ol.proj.Projection|undefined} The projection the position is
             *     reported in.
             * @observable
             * @api stable
             */
            getProjection(): any /*ol.proj.Projection|any (undefined)*/;
    
            /**
             * Get the speed in meters per second.
             * @return {number|undefined} The instantaneous speed of the device in meters
             *     per second.
             * @observable
             * @api stable
             */
            getSpeed(): any /*number|any (undefined)*/;
    
            /**
             * Are we tracking the user's position?
             * @return {boolean} Whether to track the device's position.
             * @observable
             * @api stable
             */
            getTracking(): boolean;
    
            /**
             * Get the tracking options.
             * @see http://www.w3.org/TR/geolocation-API/#position-options
             * @return {GeolocationPositionOptions|undefined} PositionOptions as defined by
             *     the HTML5 Geolocation spec at
             *     {@link http://www.w3.org/TR/geolocation-API/#position_options_interface}
             * @observable
             * @api stable
             */
            getTrackingOptions(): any /*GeolocationPositionOptions|any (undefined)*/;
    
            /**
             * Set the projection to use for transforming the coordinates.
             * @param {ol.proj.Projection} projection The projection the position is
             *     reported in.
             * @observable
             * @api stable
             */
            setProjection(projection: ol.proj.Projection): void;
    
            /**
             * Enable/disable tracking.
             * @param {boolean} tracking Whether to track the device's position.
             * @observable
             * @api stable
             */
            setTracking(tracking: boolean): void;
    
            /**
             * Set the tracking options.
             * @see http://www.w3.org/TR/geolocation-API/#position-options
             * @param {GeolocationPositionOptions} options PositionOptions as defined by the
             *     HTML5 Geolocation spec at
             *     {@link http://www.w3.org/TR/geolocation-API/#position_options_interface}
             * @observable
             * @api stable
             */
			setTrackingOptions(options: any): void;
			//TODO:FIXME missing class GeolocationPositionOptions
            //setTrackingOptions(options: GeolocationPositionOptions): void;
        }
    }

    class Graticule extends Graticule.__Class { }
    module Graticule {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {olx.GraticuleOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.GraticuleOptions);
    
            /**
             * @return {ol.Map} The map.
             * @api
             */
            getMap(): Map;
    
            /**
             * @return {Array.<ol.geom.LineString>} The meridians.
             * @api
             */
            getMeridians(): ol.geom.LineString[];
    
            /**
             * @return {Array.<ol.geom.LineString>} The parallels.
             * @api
             */
            getParallels(): ol.geom.LineString[];
    
            /**
             * @param {ol.Map} map Map.
             * @api
             */
            setMap(map: Map): void;
        }
    }

    class Image extends Image.__Class { }
    module Image {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ImageBase.__Class {
    
            /**
             * @constructor
             * @extends {ol.ImageBase}
             * @param {ol.Extent} extent Extent.
             * @param {number|undefined} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {Array.<ol.Attribution>} attributions Attributions.
             * @param {string} src Image source URI.
             * @param {?string} crossOrigin Cross origin.
             * @param {ol.ImageLoadFunctionType} imageLoadFunction Image load function.
             */
            constructor(extent: Extent, resolution: number, pixelRatio: number, attributions: Attribution[], src: string, crossOrigin: string, imageLoadFunction: ImageLoadFunctionType);
            /**
             * @constructor
             * @extends {ol.ImageBase}
             * @param {ol.Extent} extent Extent.
             * @param {number|undefined} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {Array.<ol.Attribution>} attributions Attributions.
             * @param {string} src Image source URI.
             * @param {?string} crossOrigin Cross origin.
             * @param {ol.ImageLoadFunctionType} imageLoadFunction Image load function.
             */
            constructor(extent: Extent, resolution: any /*undefined*/, pixelRatio: number, attributions: Attribution[], src: string, crossOrigin: string, imageLoadFunction: ImageLoadFunctionType);
    
            /**
             * @protected
             * @type {ol.ImageState}
             */
            state: ol.ImageState;
    
            /**
             * @param {Object=} opt_context Object.
             * @return {HTMLCanvasElement|Image|HTMLVideoElement} Image.
             * @api
             */
            getImage(opt_context?: Object): any /*HTMLCanvasElement|Image|HTMLVideoElement*/;
    
            /**
             * Load not yet loaded URI.
             */
            load(): void;
        }
    }

    class ImageCanvas extends ImageCanvas.__Class { }
    module ImageCanvas {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ImageBase.__Class {
    
            /**
             * @constructor
             * @extends {ol.ImageBase}
             * @param {ol.Extent} extent Extent.
             * @param {number} resolution Resolution.
             * @param {number} pixelRatio Pixel ratio.
             * @param {Array.<ol.Attribution>} attributions Attributions.
             * @param {HTMLCanvasElement} canvas Canvas.
             */
            constructor(extent: Extent, resolution: number, pixelRatio: number, attributions: Attribution[], canvas: HTMLCanvasElement);
    
            /**
             * @inheritDoc
             */
            getImage(opt_context?: any /* jsdoc error */): void;
        }
    }

    class ImageTile extends ImageTile.__Class { }
    module ImageTile {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Tile.__Class {
    
            /**
             * @constructor
             * @extends {ol.Tile}
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @param {ol.TileState} state State.
             * @param {string} src Image source URI.
             * @param {?string} crossOrigin Cross origin.
             * @param {ol.TileLoadFunctionType} tileLoadFunction Tile load function.
             */
            constructor(tileCoord: TileCoord, state: ol.TileState, src: string, crossOrigin: string, tileLoadFunction: TileLoadFunctionType);
    
            /**
             * @inheritDoc
             * @api
             */
            getImage(opt_context?: any /* jsdoc error */): void;
    
    
            /**
             * Load not yet loaded URI.
             */
            load(): void;
    
            /** @const */
            fn: any /*missing*/;
    
            /** @const */
            scope: any /*missing*/;
    
            /** @const */
            promise: any /*missing*/;
    
            /** @const */
            resolve: any /*missing*/;
    
            /** @const */
            reject: any /*missing*/;
    
            /** @type {string} */
            name: string;
    
            /** @suppress {deprecated} */
            code: any /*missing*/;
        }
    }

    class DrawEvent extends DrawEvent.__Class { }
    module DrawEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class implements oli.DrawEvent {
    
            /**
             * @classdesc
             * Events emitted by {@link ol.interaction.Draw} instances are instances of
             * this type.
             *
             * @constructor
             * @extends {goog.events.Event}
             * @implements {oli.DrawEvent}
             * @param {ol.DrawEventType} type Type.
             * @param {ol.Feature} feature The feature drawn.
             */
            constructor(type: ol.DrawEventType, feature: Feature);
    
            /**
             * The feature being drawn.
             * @type {ol.Feature}
             * @api stable
             */
            feature: Feature;
        }
    }

    class TileCache extends TileCache.__Class { }
    module TileCache {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends structs.LRUCache.__Class<Tile> {
    
            /**
             * @constructor
             * @extends {ol.structs.LRUCache.<ol.Tile>}
             * @param {number=} opt_highWaterMark High water mark.
             * @struct
             */
            constructor(opt_highWaterMark?: number);
    
            /**
             * @return {boolean} Can expire cache.
             */
            canExpireCache(): boolean;
    
            /**
             * @param {Object.<string, ol.TileRange>} usedTiles Used tiles.
             */
            expireCache(usedTiles: { [key: string]: TileRange }): void;
    
            /**
             * Remove a tile range from the cache, e.g. to invalidate tiles.
             * @param {ol.TileRange} tileRange The tile range to prune.
             */
            pruneTileRange(tileRange: TileRange): void;
        }
    }

    class DebugTile_ extends DebugTile_.__Class { }
    module DebugTile_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Tile.__Class {
    
            /**
             * @constructor
             * @extends {ol.Tile}
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @param {ol.tilegrid.TileGrid} tileGrid Tile grid.
             * @private
             */
            constructor(tileCoord: TileCoord, tileGrid: tilegrid.TileGrid);
    
            /**
             * @inheritDoc
             */
            getImage(opt_context?: any /* jsdoc error */): void;
        }
    }

    /**
     * @typedef {function(ol.Map, ?olx.FrameState): boolean}
     */
    interface PostRenderFunction {
        (_0: Map, _1: olx.FrameState): boolean
    }

    /**
     * Function to perform manipulations before rendering. This function is called
     * with the {@link ol.Map} as first and an optional {@link olx.FrameState} as
     * second argument. Return `true` to keep this function for the next frame,
     * `false` to remove it.
     * @typedef {function(ol.Map, ?olx.FrameState): boolean}
     * @api
     */
    interface PreRenderFunction {
        (_0: Map, _1: olx.FrameState): boolean
    }

    /**
     * @define {boolean} Assume touch.  Default is `false`.
     */
    var ASSUME_TOUCH: any /*missing*/;

    /**
     * @define {boolean} Replace unused entries with NaNs.
     */
    var BUFFER_REPLACE_UNUSED_ENTRIES_WITH_NANS: any /*missing*/;

    /**
     * TODO: rename this to something having to do with tile grids
     * see https://github.com/openlayers/ol3/issues/2076
     * @define {number} Default maximum zoom for default tile grids.
     */
    var DEFAULT_MAX_ZOOM: any /*missing*/;

    /**
     * @define {number} Default min zoom level for the map view.  Default is `0`.
     */
    var DEFAULT_MIN_ZOOM: any /*missing*/;

    /**
     * @define {number} Default high water mark.
     */
    var DEFAULT_TILE_CACHE_HIGH_WATER_MARK: any /*missing*/;

    /**
     * @define {number} Default tile size.
     */
    var DEFAULT_TILE_SIZE: any /*missing*/;

    /**
     * @define {string} Default WMS version.
     */
    var DEFAULT_WMS_VERSION: any /*missing*/;

    /**
     * @define {number} Drag-rotate-zoom animation duration.
     */
    var DRAGROTATEANDZOOM_ANIMATION_DURATION: any /*missing*/;

    /**
     * @define {number} Drag-rotate animation duration.
     */
    var DRAGROTATE_ANIMATION_DURATION: any /*missing*/;

    /**
     * @define {number} Drag-zoom animation duration.
     */
    var DRAGZOOM_ANIMATION_DURATION: any /*missing*/;

    /**
     * @define {number} Hysteresis pixels.
     */
    var DRAG_BOX_HYSTERESIS_PIXELS: any /*missing*/;

    /**
     * @define {boolean} Enable the Canvas renderer.  Default is `true`. Setting
     *     this to false at compile time in advanced mode removes all code
     *     supporting the Canvas renderer from the build.
     */
    var ENABLE_CANVAS: any /*missing*/;

    /**
     * @define {boolean} Enable the DOM renderer (used as a fallback where Canvas is
     *     not available).  Default is `true`. Setting this to false at compile time
     *     in advanced mode removes all code supporting the DOM renderer from the
     *     build.
     */
    var ENABLE_DOM: any /*missing*/;

    /**
     * @define {boolean} Enable rendering of ol.layer.Image based layers.  Default
     *     is `true`. Setting this to false at compile time in advanced mode removes
     *     all code supporting Image layers from the build.
     */
    var ENABLE_IMAGE: any /*missing*/;

    /**
     * @define {boolean} Enable Closure named colors (`goog.color.names`).
     *     Enabling these colors adds about 3KB uncompressed / 1.5KB compressed to
     *     the final build size.  Default is `false`. This setting has no effect
     *     with Canvas renderer, which uses its own names, whether this is true or
     *     false.
     */
    var ENABLE_NAMED_COLORS: any /*missing*/;

    /**
     * @define {boolean} Enable integration with the Proj4js library.  Default is
     *     `true`.
     */
    var ENABLE_PROJ4JS: any /*missing*/;

    /**
     * @define {boolean} Enable rendering of ol.layer.Tile based layers.  Default is
     *     `true`. Setting this to false at compile time in advanced mode removes
     *     all code supporting Tile layers from the build.
     */
    var ENABLE_TILE: any /*missing*/;

    /**
     * @define {boolean} Enable rendering of ol.layer.Vector based layers.  Default
     *     is `true`. Setting this to false at compile time in advanced mode removes
     *     all code supporting Vector layers from the build.
     */
    var ENABLE_VECTOR: any /*missing*/;

    /**
     * @define {boolean} Enable the WebGL renderer.  Default is `true`. Setting
     *     this to false at compile time in advanced mode removes all code
     *     supporting the WebGL renderer from the build.
     */
    var ENABLE_WEBGL: any /*missing*/;

    /**
     * @define {boolean} Support legacy IE (7-8).  Default is `false`.
     *     If set to `true`, `goog.array.ASSUME_NATIVE_FUNCTIONS` must be set
     *     to `false` because legacy IE do not support ECMAScript 5 array functions.
     */
    var LEGACY_IE_SUPPORT: any /*missing*/;

    /**
     * @define {number} The size in pixels of the first atlas image. Default is
     * `256`.
     */
    var INITIAL_ATLAS_SIZE: any /*missing*/;

    /**
     * The page is loaded using HTTPS.
     * @const
     * @type {boolean}
     */
    var IS_HTTPS: boolean;

    /**
     * Whether the current browser is legacy IE
     * @const
     * @type {boolean}
     */
    var IS_LEGACY_IE: boolean;

    /**
     * @define {number} Keyboard pan duration.
     */
    var KEYBOARD_PAN_DURATION: any /*missing*/;

    /**
     * @define {number} The maximum size in pixels of atlas images. Default is
     * `-1`, meaning it is not used (and `ol.ol.WEBGL_MAX_TEXTURE_SIZE` is
     * used instead).
     */
    var MAX_ATLAS_SIZE: any /*missing*/;

    /**
     * @define {number} Maximum mouse wheel delta.
     */
    var MOUSEWHEELZOOM_MAXDELTA: any /*missing*/;

    /**
     * @define {number} Mouse wheel timeout duration.
     */
    var MOUSEWHEELZOOM_TIMEOUT_DURATION: any /*missing*/;

    /**
     * @define {number} Maximum width and/or height extent ratio that determines
     * when the overview map should be zoomed out.
     */
    var OVERVIEWMAP_MAX_RATIO: any /*missing*/;

    /**
     * @define {number} Minimum width and/or height extent ratio that determines
     * when the overview map should be zoomed in.
     */
    var OVERVIEWMAP_MIN_RATIO: any /*missing*/;

    /**
     * @define {number} Rotate animation duration.
     */
    var ROTATE_ANIMATION_DURATION: any /*missing*/;

    /**
     * @define {number} Tolerance for geometry simplification in device pixels.
     */
    var SIMPLIFY_TOLERANCE: any /*missing*/;

    /**
     * @define {number} Texture cache high water mark.
     */
    var WEBGL_TEXTURE_CACHE_HIGH_WATER_MARK: any /*missing*/;

    /**
     * The maximum supported WebGL texture size in pixels. If WebGL is not
     * supported, the value is set to `undefined`.
     * @const
     * @type {number|undefined}
     * @api
     */
    var WEBGL_MAX_TEXTURE_SIZE: any /*number|any (undefined)*/;

    /**
     * List of supported WebGL extensions.
     * @const
     * @type {Array.<string>}
     */
    var WEBGL_EXTENSIONS: string[];

    /**
     * @define {number} Zoom slider animation duration.
     */
    var ZOOMSLIDER_ANIMATION_DURATION: any /*missing*/;

    /**
     * Inherit the prototype methods from one constructor into another.
     *
     * Usage:
     *
     *     function ParentClass(a, b) { }
     *     ParentClass.prototype.foo = function(a) { }
     *
     *     function ChildClass(a, b, c) {
     *       // Call parent constructor
     *       ParentClass.call(this, a, b);
     *     }
     *     ol.inherits(ChildClass, ParentClass);
     *
     *     var child = new ChildClass('a', 'b', 'see');
     *     child.foo(); // This works.
     *
     * In addition, a superclass' implementation of a method can be invoked as
     * follows:
     *
     *     ChildClass.prototype.foo = function(a) {
     *       ChildClass.base(this, 'foo', a);
     *       // Other code here.
     *     };
     *
     * @param {Function} childCtor Child constructor.
     * @param {Function} parentCtor Parent constructor.
     * @function
     * @api
     */
    function inherits(childCtor: Function, parentCtor: Function): void;

    /**
     * @typedef {function((ol.Coordinate|undefined)): (ol.Coordinate|undefined)}
     */
    interface CenterConstraintType {
        (_0: any /*ol.Coordinate|any (undefined)*/): any /*ol.Coordinate|any (undefined)*/
    }

    /**
     * @typedef {function((number|undefined), number, number): (number|undefined)}
     */
    interface ResolutionConstraintType {
        (_0: any /*number|any (undefined)*/, _1: number, _2: number): any /*number|any (undefined)*/
    }

    /**
     * @typedef {function((number|undefined), number): (number|undefined)}
     */
    interface RotationConstraintType {
        (_0: any /*number|any (undefined)*/, _1: number): any /*number|any (undefined)*/
    }

    /**
     * @enum {string}
     */
    enum ObjectEventType { PROPERTYCHANGE } 

    /**
     * An array of numbers representing a size: `[width, height]`.
     * @typedef {Array.<number>}
     * @api stable
     */
    interface Size extends Array<number> { }

    /**
     * A function that takes a {@link ol.Coordinate} and transforms it into a
     * `{string}`.
     *
     * @typedef {function((ol.Coordinate|undefined)): string}
     * @api stable
     */
    interface CoordinateFormatType {
        (_0: any /*ol.Coordinate|any (undefined)*/): string
    }

    /**
     * An array of numbers representing an xy coordinate. Example: `[16, 48]`.
     * @typedef {Array.<number>} ol.Coordinate
     * @api stable
     */
    interface Coordinate extends Array<number> { }

    /**
     * A transform function accepts an array of input coordinate values, an optional
     * output array, and an optional dimension (default should be 2).  The function
     * transforms the input coordinate values, populates the output array, and
     * returns the output array.
     *
     * @typedef {function(Array.<number>, Array.<number>=, number=): Array.<number>}
     * @api stable
     */
    interface TransformFunction {
        (_0: number[], _1: number[], _2: number): number[]
    }

    /**
     * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
     * @typedef {Array.<number>}
     * @api stable
     */
    interface Extent extends Array<number> { }

    /**
     * @enum {string}
     */
    enum ViewProperty { CENTER, RESOLUTION, ROTATION } 

    /**
     * @enum {number}
     */
    enum ViewHint { ANIMATING, INTERACTING } 

    /**
     * An array of three numbers representing the location of a tile in a tile
     * grid. The order is `z`, `x`, and `y`. `z` is the zoom level.
     * @typedef {Array.<number>} ol.TileCoord
     * @api
     */
    interface TileCoord extends Array<number> { }

    /**
     * @enum {number}
     */
    enum QuadKeyCharCode { ZERO, ONE, TWO, THREE } 

    /**
     * A function returning the canvas element (`{HTMLCanvasElement}`)
     * used by the source as an image. The arguments passed to the function are:
     * {@link ol.Extent} the image extent, `{number}` the image resolution,
     * `{number}` the device pixel ratio, {@link ol.Size} the image size, and
     * {@link ol.proj.Projection} the image projection. The canvas returned by
     * this function is cached by the source. The this keyword inside the function
     * references the {@link ol.source.ImageCanvas}.
     *
     * @typedef {function(this:ol.source.ImageCanvas, ol.Extent, number,
     *     number, ol.Size, ol.proj.Projection): HTMLCanvasElement}
     * @api
     */
    interface CanvasFunctionType {
        (_0: Extent, _1: number, _2: number, _3: Size, _4: proj.Projection): HTMLCanvasElement
    }

    /**
     * @enum {string}
     */
    enum CollectionEventType { ADD, REMOVE } 

    /**
     * @enum {string}
     */
    enum CollectionProperty { LENGTH } 

    /**
     * A color represented as a short array [red, green, blue, alpha].
     * red, green, and blue should be integers in the range 0..255 inclusive.
     * alpha should be a float in the range 0..1 inclusive.
     * @typedef {Array.<number>}
     * @api
     */
    interface Color extends Array<number> { }

    /**
     * @enum {string}
     */
    enum MapEventType { POSTRENDER, MOVEEND } 

    /**
     * An array with two elements, representing a pixel. The first element is the
     * x-coordinate, the second the y-coordinate of the pixel.
     * @typedef {Array.<number>}
     * @api stable
     */
    interface Pixel extends Array<number> { }

    /**
     * @enum {number}
     */
    enum ImageState { IDLE, LOADING, LOADED, ERROR } 

    /**
     * @enum {number}
     */
    enum TileState { IDLE, LOADING, LOADED, ERROR, EMPTY } 

    /**
     * Available renderers: `'canvas'`, `'dom'` or `'webgl'`.
     * @enum {string}
     * @api stable
     */
    enum RendererType { CANVAS, DOM, WEBGL } 

    /**
     * @typedef {function(ol.Tile, string, ol.Coordinate, number): number}
     */
    interface TilePriorityFunction {
        (_0: Tile, _1: string, _2: Coordinate, _3: number): number
    }

    /**
     * @const
     * @type {number}
     */
    var DRAG_BOX_HYSTERESIS_PIXELS_SQUARED: number;

    /**
     * @enum {string}
     */
    enum DragBoxEventType { BOXSTART, BOXEND } 

    /**
     * @const
     * @type {string}
     */
    var OL3_URL: string;

    /**
     * @const
     * @type {string}
     */
    var OL3_LOGO_URL: string;

    /**
     * @type {Array.<ol.RendererType>}
     */
    var DEFAULT_RENDERER_TYPES: ol.RendererType[];

    /**
     * @enum {string}
     */
    enum MapProperty { LAYERGROUP, SIZE, TARGET, VIEW } 

    /**
     * @typedef {{controls: ol.Collection.<ol.control.Control>,
     *            deviceOptions: olx.DeviceOptions,
     *            interactions: ol.Collection.<ol.interaction.Interaction>,
     *            keyboardEventTarget: (Element|Document),
     *            logos: Object,
     *            overlays: ol.Collection.<ol.Overlay>,
     *            rendererConstructor:
     *                function(new: ol.renderer.Map, Element, ol.Map),
     *            values: Object.<string, *>}}
     */
    interface MapOptionsInternal {
        controls: Collection<control.Control>;
        deviceOptions: any; //TODO:FIXME missing class olx.DeviceOptions;
        interactions: Collection<interaction.Interaction>;
        keyboardEventTarget: any /*Element|Document*/;
        logos: Object;
        overlays: Collection<Overlay>;
        rendererConstructor: (_0: Element, _1: Map) => any /*missing*/;
        values: { [key: string]: any }
    }

    /**
     * @enum {string}
     */
    enum OverlayProperty { ELEMENT, MAP, OFFSET, POSITION, POSITIONING } 

    /**
     * Overlay position: `'bottom-left'`, `'bottom-center'`,  `'bottom-right'`,
     * `'center-left'`, `'center-center'`, `'center-right'`, `'top-left'`,
     * `'top-center'`, `'top-right'`
     * @enum {string}
     * @api stable
     */
    enum OverlayPositioning { BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, CENTER_LEFT, CENTER_CENTER, CENTER_RIGHT, TOP_LEFT, TOP_CENTER, TOP_RIGHT } 

    /**
     * @enum {string}
     */
    enum DeviceOrientationProperty { ALPHA, BETA, GAMMA, HEADING, TRACKING } 

    /**
     * @enum {string}
     */
    enum GeolocationProperty { ACCURACY, ACCURACY_GEOMETRY, ALTITUDE, ALTITUDE_ACCURACY, HEADING, POSITION, PROJECTION, SPEED, TRACKING, TRACKING_OPTIONS } 

    /**
     * A function that takes an {@link ol.Image} for the image and a `{string}` for
     * the src as arguments. It is supposed to make it so the underlying image
     * {@link ol.Image#getImage} is assigned the content specified by the src. If
     * not specified, the default is
     *
     *     function(image, src) {
     *       image.getImage().src = src;
     *     }
     *
     * Providing a custom `imageLoadFunction` can be useful to load images with
     * post requests or - in general - through XHR requests, where the src of the
     * image element would be set to a data URI when the content is loaded.
     *
     * @typedef {function(ol.Image, string)}
     * @api
     */
    interface ImageLoadFunctionType {
        (_0: Image, _1: string): any /*missing*/
    }

    /**
     * A function that takes an {@link ol.ImageTile} for the image tile and a
     * `{string}` for the src as arguments.
     *
     * @typedef {function(ol.ImageTile, string)}
     * @api
     */
    interface TileLoadFunctionType {
        (_0: ImageTile, _1: string): any /*missing*/
    }

    /**
     * @typedef {function(this:ol.source.Image, ol.Extent, ol.Size,
     *     ol.proj.Projection): (string|undefined)}
     */
    interface ImageUrlFunctionType {
        (_0: Extent, _1: Size, _2: proj.Projection): any /*string|any (undefined)*/
    }

    /**
     * @enum {string}
     */
    enum DrawEventType { DRAWSTART, DRAWEND } 

    /**
     * A function that takes an {@link ol.TileCoord} for the tile coordinate,
     * a `{number}` representing the pixel ratio and an {@link ol.proj.Projection}
     * for the projection  as arguments and returns a `{string}` or
     * undefined representing the tile URL.
     *
     * @typedef {function(ol.TileCoord, number,
     *           ol.proj.Projection): (string|undefined)}
     * @api
     */
    interface TileUrlFunctionType {
        (_0: TileCoord, _1: number, _2: proj.Projection): any /*string|any (undefined)*/
    }

    /**
     * @typedef {function(ol.TileCoord, ol.proj.Projection, ol.TileCoord=):
     *     ol.TileCoord}
     */
    interface TileCoordTransformType {
        (_0: TileCoord, _1: proj.Projection, _2: TileCoord): TileCoord
    }
}

declare module ol.tilegrid {

    class TileGrid extends TileGrid.__Class { }
    module TileGrid {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Base class for setting the grid pattern for sources accessing tiled-image
             * servers.
             *
             * @constructor
             * @param {olx.tilegrid.TileGridOptions} options Tile grid options.
             * @struct
             * @api stable
             */
            constructor(options: olx.tilegrid.TileGridOptions);
    
            /**
             * @protected
             * @type {number}
             */
            minZoom: number;
    
            /**
             * @protected
             * @type {number}
             */
            maxZoom: number;
    
            /**
             * Returns the identity function. May be overridden in subclasses.
             * @param {{extent: (ol.Extent|undefined),
             *          wrapX: (boolean|undefined)}=} opt_options Options.
             * @return {function(ol.TileCoord, ol.proj.Projection, ol.TileCoord=):
             *     ol.TileCoord} Tile coordinate transform.
             */
            createTileCoordTransform(opt_options?: { extent: Extent; wrapX: boolean }): (_0: TileCoord, _1: ol.proj.Projection, _2: TileCoord) => TileCoord;
            /**
             * Returns the identity function. May be overridden in subclasses.
             * @param {{extent: (ol.Extent|undefined),
             *          wrapX: (boolean|undefined)}=} opt_options Options.
             * @return {function(ol.TileCoord, ol.proj.Projection, ol.TileCoord=):
             *     ol.TileCoord} Tile coordinate transform.
             */
            createTileCoordTransform(opt_options?: { extent: Extent; wrapX: any /*undefined*/ }): (_0: TileCoord, _1: ol.proj.Projection, _2: TileCoord) => TileCoord;
            /**
             * Returns the identity function. May be overridden in subclasses.
             * @param {{extent: (ol.Extent|undefined),
             *          wrapX: (boolean|undefined)}=} opt_options Options.
             * @return {function(ol.TileCoord, ol.proj.Projection, ol.TileCoord=):
             *     ol.TileCoord} Tile coordinate transform.
             */
            createTileCoordTransform(opt_options?: { extent: any /*undefined*/; wrapX: boolean }): (_0: TileCoord, _1: ol.proj.Projection, _2: TileCoord) => TileCoord;
            /**
             * Returns the identity function. May be overridden in subclasses.
             * @param {{extent: (ol.Extent|undefined),
             *          wrapX: (boolean|undefined)}=} opt_options Options.
             * @return {function(ol.TileCoord, ol.proj.Projection, ol.TileCoord=):
             *     ol.TileCoord} Tile coordinate transform.
             */
            createTileCoordTransform(opt_options?: { extent: any /*undefined*/; wrapX: any /*undefined*/ }): (_0: TileCoord, _1: ol.proj.Projection, _2: TileCoord) => TileCoord;
    
            /**
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @param {function(this: T, number, ol.TileRange): boolean} callback Callback.
             * @param {T=} opt_this The object to use as `this` in `callback`.
             * @param {ol.TileRange=} opt_tileRange Temporary ol.TileRange object.
             * @param {ol.Extent=} opt_extent Temporary ol.Extent object.
             * @return {boolean} Callback succeeded.
             * @template T
             */
            forEachTileCoordParentTileRange<T>(tileCoord: TileCoord, callback: (_0: number, _1: TileRange) => boolean, opt_this?: T, opt_tileRange?: TileRange, opt_extent?: Extent): boolean;
    
            /**
             * @return {number} Max zoom.
             * @api
             */
            getMaxZoom(): number;
    
            /**
             * @return {number} Min zoom.
             * @api
             */
            getMinZoom(): number;
    
            /**
             * @param {number} z Z.
             * @return {ol.Coordinate} Origin.
             * @api stable
             */
            getOrigin(z: number): Coordinate;
    
            /**
             * @param {number} z Z.
             * @return {number} Resolution.
             * @api stable
             */
            getResolution(z: number): number;
    
            /**
             * @return {Array.<number>} Resolutions.
             * @api stable
             */
            getResolutions(): number[];
    
            /**
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @param {ol.TileRange=} opt_tileRange Temporary ol.TileRange object.
             * @param {ol.Extent=} opt_extent Temporary ol.Extent object.
             * @return {ol.TileRange} Tile range.
             */
            getTileCoordChildTileRange(tileCoord: TileCoord, opt_tileRange?: TileRange, opt_extent?: Extent): TileRange;
    
            /**
             * @param {number} z Z.
             * @param {ol.TileRange} tileRange Tile range.
             * @param {ol.Extent=} opt_extent Temporary ol.Extent object.
             * @return {ol.Extent} Extent.
             */
            getTileRangeExtent(z: number, tileRange: TileRange, opt_extent?: Extent): Extent;
    
            /**
             * @param {ol.Extent} extent Extent.
             * @param {number} resolution Resolution.
             * @param {ol.TileRange=} opt_tileRange Temporary tile range object.
             * @return {ol.TileRange} Tile range.
             */
            getTileRangeForExtentAndResolution(extent: Extent, resolution: number, opt_tileRange?: TileRange): TileRange;
    
            /**
             * @param {ol.Extent} extent Extent.
             * @param {number} z Z.
             * @param {ol.TileRange=} opt_tileRange Temporary tile range object.
             * @return {ol.TileRange} Tile range.
             */
            getTileRangeForExtentAndZ(extent: Extent, z: number, opt_tileRange?: TileRange): TileRange;
    
            /**
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @return {ol.Coordinate} Tile center.
             */
            getTileCoordCenter(tileCoord: TileCoord): Coordinate;
    
            /**
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @param {ol.Extent=} opt_extent Temporary extent object.
             * @return {ol.Extent} Extent.
             */
            getTileCoordExtent(tileCoord: TileCoord, opt_extent?: Extent): Extent;
    
            /**
             * Get the tile coordinate for the given map coordinate and resolution.  This
             * method considers that coordinates that intersect tile boundaries should be
             * assigned the higher tile coordinate.
             *
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} resolution Resolution.
             * @param {ol.TileCoord=} opt_tileCoord Destination ol.TileCoord object.
             * @return {ol.TileCoord} Tile coordinate.
             * @api
             */
            getTileCoordForCoordAndResolution(coordinate: Coordinate, resolution: number, opt_tileCoord?: TileCoord): TileCoord;
    
            /**
             * @param {ol.Coordinate} coordinate Coordinate.
             * @param {number} z Z.
             * @param {ol.TileCoord=} opt_tileCoord Destination ol.TileCoord object.
             * @return {ol.TileCoord} Tile coordinate.
             * @api
             */
            getTileCoordForCoordAndZ(coordinate: Coordinate, z: number, opt_tileCoord?: TileCoord): TileCoord;
    
            /**
             * @param {ol.TileCoord} tileCoord Tile coordinate.
             * @return {number} Tile resolution.
             */
            getTileCoordResolution(tileCoord: TileCoord): number;
    
            /**
             * @param {number} z Z.
             * @return {number} Tile size.
             * @api stable
             */
            getTileSize(z: number): number;
    
            /**
             * @param {number} resolution Resolution.
             * @return {number} Z.
             */
            getZForResolution(resolution: number): number;
        }
    }

    class XYZ extends XYZ.__Class { }
    module XYZ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileGrid.__Class {
    
            /**
             * @classdesc
             * Set the grid pattern for sources accessing XYZ tiled-image servers.
             *
             * @constructor
             * @extends {ol.tilegrid.TileGrid}
             * @param {olx.tilegrid.XYZOptions} options XYZ options.
             * @struct
             * @api
             */
            constructor(options: olx.tilegrid.XYZOptions);
    
        }
    }

    class WMTS extends WMTS.__Class { }
    module WMTS {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileGrid.__Class {
    
            /**
             * @classdesc
             * Set the grid pattern for sources accessing WMTS tiled-image servers.
             *
             * @constructor
             * @extends {ol.tilegrid.TileGrid}
             * @param {olx.tilegrid.WMTSOptions} options WMTS options.
             * @struct
             * @api
             */
            constructor(options: olx.tilegrid.WMTSOptions);
    
            /**
             * @param {number} z Z.
             * @return {string} MatrixId..
             */
            getMatrixId(z: number): string;
    
            /**
             * @return {Array.<string>} MatrixIds.
             * @api
             */
            getMatrixIds(): string[];
        }
    }

    class Zoomify extends Zoomify.__Class { }
    module Zoomify {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TileGrid.__Class {
    
            /**
             * @classdesc
             * Set the grid pattern for sources accessing Zoomify tiled-image servers.
             *
             * @constructor
             * @extends {ol.tilegrid.TileGrid}
             * @param {olx.tilegrid.ZoomifyOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.tilegrid.ZoomifyOptions);
    
        }
    }

    /**
     * @param {ol.proj.Projection} projection Projection.
     * @return {ol.tilegrid.TileGrid} Default tile grid for the passed projection.
     */
    function getForProjection(projection: proj.Projection): TileGrid;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {number=} opt_maxZoom Maximum zoom level (default is
     *     ol.DEFAULT_MAX_ZOOM).
     * @param {number=} opt_tileSize Tile size (default uses ol.DEFAULT_TILE_SIZE).
     * @param {ol.extent.Corner=} opt_corner Extent corner (default is
     *     ol.extent.Corner.BOTTOM_LEFT).
     * @return {ol.tilegrid.TileGrid} TileGrid instance.
     */
    function createForExtent(extent: Extent, opt_maxZoom?: number, opt_tileSize?: number, opt_corner?: extent.Corner): TileGrid;

    /**
     * Create a resolutions array from an extent.  A zoom factor of 2 is assumed.
     * @param {ol.Extent} extent Extent.
     * @param {number=} opt_maxZoom Maximum zoom level (default is
     *     ol.DEFAULT_MAX_ZOOM).
     * @param {number=} opt_tileSize Tile size (default uses ol.DEFAULT_TILE_SIZE).
     * @return {!Array.<number>} Resolutions array.
     */
    function resolutionsFromExtent(extent: Extent, opt_maxZoom?: number, opt_tileSize?: number): number[];

    /**
     * @param {ol.proj.ProjectionLike} projection Projection.
     * @param {number=} opt_maxZoom Maximum zoom level (default is
     *     ol.DEFAULT_MAX_ZOOM).
     * @param {number=} opt_tileSize Tile size (default uses ol.DEFAULT_TILE_SIZE).
     * @param {ol.extent.Corner=} opt_corner Extent corner (default is
     *     ol.extent.Corner.BOTTOM_LEFT).
     * @return {ol.tilegrid.TileGrid} TileGrid instance.
     */
    function createForProjection(projection: proj.Projection, opt_maxZoom?: number, opt_tileSize?: number, opt_corner?: extent.Corner): TileGrid;
    /**
     * @param {ol.proj.ProjectionLike} projection Projection.
     * @param {number=} opt_maxZoom Maximum zoom level (default is
     *     ol.DEFAULT_MAX_ZOOM).
     * @param {number=} opt_tileSize Tile size (default uses ol.DEFAULT_TILE_SIZE).
     * @param {ol.extent.Corner=} opt_corner Extent corner (default is
     *     ol.extent.Corner.BOTTOM_LEFT).
     * @return {ol.tilegrid.TileGrid} TileGrid instance.
     */
    function createForProjection(projection: string, opt_maxZoom?: number, opt_tileSize?: number, opt_corner?: extent.Corner): TileGrid;
    /**
     * @param {ol.proj.ProjectionLike} projection Projection.
     * @param {number=} opt_maxZoom Maximum zoom level (default is
     *     ol.DEFAULT_MAX_ZOOM).
     * @param {number=} opt_tileSize Tile size (default uses ol.DEFAULT_TILE_SIZE).
     * @param {ol.extent.Corner=} opt_corner Extent corner (default is
     *     ol.extent.Corner.BOTTOM_LEFT).
     * @return {ol.tilegrid.TileGrid} TileGrid instance.
     */
    function createForProjection(projection: any /*undefined*/, opt_maxZoom?: number, opt_tileSize?: number, opt_corner?: extent.Corner): TileGrid;

    /**
     * Generate a tile grid extent from a projection.  If the projection has an
     * extent, it is used.  If not, a global extent is assumed.
     * @param {ol.proj.ProjectionLike} projection Projection.
     * @return {ol.Extent} Extent.
     */
    function extentFromProjection(projection: proj.Projection): Extent;
    /**
     * Generate a tile grid extent from a projection.  If the projection has an
     * extent, it is used.  If not, a global extent is assumed.
     * @param {ol.proj.ProjectionLike} projection Projection.
     * @return {ol.Extent} Extent.
     */
    function extentFromProjection(projection: string): Extent;
    /**
     * Generate a tile grid extent from a projection.  If the projection has an
     * extent, it is used.  If not, a global extent is assumed.
     * @param {ol.proj.ProjectionLike} projection Projection.
     * @return {ol.Extent} Extent.
     */
    function extentFromProjection(projection: any /*undefined*/): Extent;
}

declare module ol.structs {

    class PriorityQueue<T> extends PriorityQueue.__Class<T> { }
    module PriorityQueue {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class<T> {
    
            /**
             * Priority queue.
             *
             * The implementation is inspired from the Closure Library's Heap class and
             * Python's heapq module.
             *
             * @see http://closure-library.googlecode.com/svn/docs/closure_goog_structs_heap.js.source.html
             * @see http://hg.python.org/cpython/file/2.7/Lib/heapq.py
             *
             * @constructor
             * @param {function(T): number} priorityFunction Priority function.
             * @param {function(T): string} keyFunction Key function.
             * @struct
             * @template T
             */
            constructor(priorityFunction: (_0: T) => number, keyFunction: (_0: T) => string);
    
            /**
             * FIXME empty desciption for jsdoc
             */
            assertValid(): void;
    
            /**
             * FIXME empty description for jsdoc
             */
            clear(): void;
    
            /**
             * Remove and return the highest-priority element. O(log N).
             * @return {T} Element.
             */
            dequeue(): T;
    
            /**
             * Enqueue an element. O(log N).
             * @param {T} element Element.
             */
            enqueue(element: T): void;
    
            /**
             * @return {number} Count.
             */
            getCount(): number;
    
            /**
             * @return {boolean} Is empty.
             */
            isEmpty(): boolean;
    
            /**
             * @param {string} key Key.
             * @return {boolean} Is key queued.
             */
            isKeyQueued(key: string): boolean;
    
            /**
             * @param {T} element Element.
             * @return {boolean} Is queued.
             */
            isQueued(element: T): boolean;
    
            /**
             * FIXME empty description for jsdoc
             */
            reprioritize(): void;
        }
    }

    interface IHasChecksum {
    
        /**
          * @return {string} The checksum.
          */
        getChecksum(): string;
    }

    class LRUCache<T> extends LRUCache.__Class<T> { }
    module LRUCache {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class<T> {
    
            /**
             * Implements a Least-Recently-Used cache where the keys do not conflict with
             * Object's properties (e.g. 'hasOwnProperty' is not allowed as a key). Expiring
             * items from the cache is the responsibility of the user.
             * @constructor
             * @struct
             * @template T
             */
            constructor();
    
            /**
             * FIXME empty description for jsdoc
             */
            assertValid(): void;
    
            /**
             * FIXME empty description for jsdoc
             */
            clear(): void;
    
            /**
             * @param {string} key Key.
             * @return {boolean} Contains key.
             */
            containsKey(key: string): boolean;
    
            /**
             * @param {function(this: S, T, string, ol.structs.LRUCache): ?} f The function
             *     to call for every entry from the oldest to the newer. This function takes
             *     3 arguments (the entry value, the entry key and the LRUCache object).
             *     The return value is ignored.
             * @param {S=} opt_this The object to use as `this` in `f`.
             * @template S
             */
            forEach<S>(f: (_0: T, _1: string, _2: LRUCache<any>) => any, opt_this?: S): void;
    
            /**
             * @param {string} key Key.
             * @return {T} Value.
             */
            get(key: string): T;
    
            /**
             * @return {number} Count.
             */
            getCount(): number;
    
            /**
             * @return {Array.<string>} Keys.
             */
            getKeys(): string[];
    
            /**
             * @return {Array.<T>} Values.
             */
            getValues(): T[];
    
            /**
             * @return {T} Last value.
             */
            peekLast(): T;
    
            /**
             * @return {string} Last key.
             */
            peekLastKey(): string;
    
            /**
             * @return {T} value Value.
             */
            pop(): T;
    
            /**
             * @param {string} key Key.
             * @param {T} value Value.
             */
            set(key: string, value: T): void;
        }
    }

    class RBush<T> extends RBush.__Class<T> { }
    module RBush {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class<T> {
    
            /**
             * Wrapper around the RBush by Vladimir Agafonkin.
             *
             * @constructor
             * @param {number=} opt_maxEntries Max entries.
             * @see https://github.com/mourner/rbush
             * @struct
             * @template T
             */
            constructor(opt_maxEntries?: number);
    
            /**
             * Insert a value into the RBush.
             * @param {ol.Extent} extent Extent.
             * @param {T} value Value.
             */
            insert(extent: Extent, value: T): void;
    
            /**
             * Bulk-insert values into the RBush.
             * @param {Array.<ol.Extent>} extents Extents.
             * @param {Array.<T>} values Values.
             */
            load(extents: Extent[], values: T[]): void;
    
            /**
             * Remove a value from the RBush.
             * @param {T} value Value.
             * @return {boolean} Removed.
             */
            remove(value: T): boolean;
    
            /**
             * Update the extent of a value in the RBush.
             * @param {ol.Extent} extent Extent.
             * @param {T} value Value.
             */
            update(extent: Extent, value: T): void;
    
            /**
             * Return all values in the RBush.
             * @return {Array.<T>} All.
             */
            getAll(): T[];
    
            /**
             * Return all values in the given extent.
             * @param {ol.Extent} extent Extent.
             * @return {Array.<T>} All in extent.
             */
            getInExtent(extent: Extent): T[];
    
            /**
             * Calls a callback function with each value in the tree.
             * If the callback returns a truthy value, this value is returned without
             * checking the rest of the tree.
             * @param {function(this: S, T): *} callback Callback.
             * @param {S=} opt_this The object to use as `this` in `callback`.
             * @return {*} Callback return value.
             * @template S
             */
            forEach<S>(callback: (_0: T) => any, opt_this?: S): any;
    
            /**
             * Calls a callback function with each value in the provided extent.
             * @param {ol.Extent} extent Extent.
             * @param {function(this: S, T): *} callback Callback.
             * @param {S=} opt_this The object to use as `this` in `callback`.
             * @return {*} Callback return value.
             * @template S
             */
            forEachInExtent<S>(extent: Extent, callback: (_0: T) => any, opt_this?: S): any;
    
            /**
             * @return {boolean} Is empty.
             */
            isEmpty(): boolean;
    
            /**
             * Remove all values from the RBush.
             */
            clear(): void;
    
            /**
             * @param {ol.Extent=} opt_extent Extent.
             * @return {ol.Extent} Extent.
             */
            getExtent(opt_extent?: Extent): Extent;
        }
    }

    /**
     * @typedef {{key_: string,
     *            newer: ol.structs.LRUCacheEntry,
     *            older: ol.structs.LRUCacheEntry,
     *            value_: *}}
     */
    interface LRUCacheEntry {
        key_: string;
        newer: LRUCacheEntry;
        older: LRUCacheEntry;
        value_: any;
    }
}

declare module ol.CenterConstraint {

    /**
     * @param {ol.Extent} extent Extent.
     * @return {ol.CenterConstraintType}
     */
    function createExtent(extent: Extent): CenterConstraintType;

    /**
     * @param {ol.Coordinate|undefined} center Center.
     * @return {ol.Coordinate|undefined} Center.
     */
    function none(center: Coordinate): any /*ol.Coordinate|any (undefined)*/;
    /**
     * @param {ol.Coordinate|undefined} center Center.
     * @return {ol.Coordinate|undefined} Center.
     */
    function none(center: any /*undefined*/): any /*ol.Coordinate|any (undefined)*/;
}

declare module ol.array {

    /**
     * @param {Array.<number>} arr Array.
     * @param {number} target Target.
     * @return {number} Index.
     */
    function binaryFindNearest(arr: number[], target: number): number;

    /**
     * @param {Array.<number>} arr Array.
     * @param {number} target Target.
     * @param {number} direction 0 means return the nearest, > 0
     *    means return the largest nearest, < 0 means return the
     *    smallest nearest.
     * @return {number} Index.
     */
    function linearFindNearest(arr: number[], target: number, direction: number): number;

    /**
     * @param {Array.<*>} arr Array.
     * @param {number} begin Begin index.
     * @param {number} end End index.
     */
    function reverseSubArray(arr: any[], begin: number, end: number): void;
}

declare module ol.ResolutionConstraint {

    /**
     * @param {Array.<number>} resolutions Resolutions.
     * @return {ol.ResolutionConstraintType} Zoom function.
     */
    function createSnapToResolutions(resolutions: number[]): ResolutionConstraintType;

    /**
     * @param {number} power Power.
     * @param {number} maxResolution Maximum resolution.
     * @param {number=} opt_maxLevel Maximum level.
     * @return {ol.ResolutionConstraintType} Zoom function.
     */
    function createSnapToPower(power: number, maxResolution: number, opt_maxLevel?: number): ResolutionConstraintType;
}

declare module ol.RotationConstraint {

    /**
     * @param {number|undefined} rotation Rotation.
     * @param {number} delta Delta.
     * @return {number|undefined} Rotation.
     */
    function disable(rotation: number, delta: number): any /*number|any (undefined)*/;
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {number} delta Delta.
     * @return {number|undefined} Rotation.
     */
    function disable(rotation: any /*undefined*/, delta: number): any /*number|any (undefined)*/;

    /**
     * @param {number|undefined} rotation Rotation.
     * @param {number} delta Delta.
     * @return {number|undefined} Rotation.
     */
    function none(rotation: number, delta: number): any /*number|any (undefined)*/;
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {number} delta Delta.
     * @return {number|undefined} Rotation.
     */
    function none(rotation: any /*undefined*/, delta: number): any /*number|any (undefined)*/;

    /**
     * @param {number} n N.
     * @return {ol.RotationConstraintType} Rotation constraint.
     */
    function createSnapToN(n: number): RotationConstraintType;

    /**
     * @param {number=} opt_tolerance Tolerance.
     * @return {ol.RotationConstraintType} Rotation constraint.
     */
    function createSnapToZero(opt_tolerance?: number): RotationConstraintType;
}

declare module ol.Observable {

    /**
     * Removes an event listener using the key returned by `on()` or `once()`.
     * @param {goog.events.Key} key The key returned by `on()` or `once()`.
     * @api stable
     */
    function unByKey(key: goog.events.Key): void;
}

declare module ol.Object {

    /**
     * @param {string} key Key name.
     * @return {string} Change name.
     */
    function getChangeEventType(key: string): string;

    /**
     * @param {string} key String.
     * @return {string} Getter name.
     */
    function getGetterName(key: string): string;

    /**
     * @param {string} key String.
     * @return {string} Setter name.
     */
    function getSetterName(key: string): string;
}

declare module ol.size {

    /**
     * Compares sizes for equality.
     * @param {ol.Size} a Size.
     * @param {ol.Size} b Size.
     * @return {boolean} Equals.
     */
    function equals(a: Size, b: Size): boolean;
}

declare module ol.coordinate {

    /**
     * Add `delta` to `coordinate`. `coordinate` is modified in place and returned
     * by the function.
     *
     * Example:
     *
     *     var coord = [7.85, 47.983333];
     *     ol.coordinate.add(coord, [-2, 4]);
     *     // coord is now [5.85, 51.983333]
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.Coordinate} delta Delta.
     * @return {ol.Coordinate} The input coordinate adjusted by the given delta.
     * @api stable
     */
    function add(coordinate: Coordinate, delta: Coordinate): Coordinate;

    /**
     * Calculates the point closest to the passed coordinate on the passed segment.
     * This is the foot of the perpendicular of the coordinate to the segment when
     * the foot is on the segment, or the closest segment coordinate when the foot
     * is outside the segment.
     *
     * @param {ol.Coordinate} coordinate The coordinate.
     * @param {Array.<ol.Coordinate>} segment The two coordinates of the segment.
     * @return {ol.Coordinate} The foot of the perpendicular of the coordinate to
     *     the segment.
     */
    function closestOnSegment(coordinate: Coordinate, segment: Coordinate[]): Coordinate;

    /**
     * Returns a {@link ol.CoordinateFormatType} function that can be used to format
     * a {ol.Coordinate} to a string.
     *
     * Example without specifying the fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var stringifyFunc = ol.coordinate.createStringXY();
     *     var out = stringifyFunc(coord);
     *     // out is now '8, 48'
     *
     * Example with explicitly specifying 2 fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var stringifyFunc = ol.coordinate.createStringXY(2);
     *     var out = stringifyFunc(coord);
     *     // out is now '7.85, 47.98'
     *
     * @param {number=} opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return {ol.CoordinateFormatType} Coordinate format.
     * @api stable
     */
    function createStringXY(opt_fractionDigits?: number): CoordinateFormatType;

    /**
     * Transforms the given {@link ol.Coordinate} to a string using the given string
     * template. The strings `{x}` and `{y}` in the template will be replaced with
     * the first and second coordinate values respectively.
     *
     * Example without specifying the fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var template = 'Coordinate is ({x}|{y}).';
     *     var out = ol.coordinate.format(coord, template);
     *     // out is now 'Coordinate is (8|48).'
     *
     * Example explicitly specifying the fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var template = 'Coordinate is ({x}|{y}).';
     *     var out = ol.coordinate.format(coord, template, 2);
     *     // out is now 'Coordinate is (7.85|47.98).'
     *
     * @param {ol.Coordinate|undefined} coordinate Coordinate.
     * @param {string} template A template string with `{x}` and `{y}` placeholders
     *     that will be replaced by first and second coordinate values.
     * @param {number=} opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return {string} Formated coordinate.
     * @api stable
     */
    function format(coordinate: Coordinate, template: string, opt_fractionDigits?: number): string;
    /**
     * Transforms the given {@link ol.Coordinate} to a string using the given string
     * template. The strings `{x}` and `{y}` in the template will be replaced with
     * the first and second coordinate values respectively.
     *
     * Example without specifying the fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var template = 'Coordinate is ({x}|{y}).';
     *     var out = ol.coordinate.format(coord, template);
     *     // out is now 'Coordinate is (8|48).'
     *
     * Example explicitly specifying the fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var template = 'Coordinate is ({x}|{y}).';
     *     var out = ol.coordinate.format(coord, template, 2);
     *     // out is now 'Coordinate is (7.85|47.98).'
     *
     * @param {ol.Coordinate|undefined} coordinate Coordinate.
     * @param {string} template A template string with `{x}` and `{y}` placeholders
     *     that will be replaced by first and second coordinate values.
     * @param {number=} opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return {string} Formated coordinate.
     * @api stable
     */
    function format(coordinate: any /*undefined*/, template: string, opt_fractionDigits?: number): string;

    /**
     * @param {ol.Coordinate} coordinate1 First coordinate.
     * @param {ol.Coordinate} coordinate2 Second coordinate.
     * @return {boolean} Whether the passed coordinates are equal.
     */
    function equals(coordinate1: Coordinate, coordinate2: Coordinate): boolean;

    /**
     * Rotate `coordinate` by `angle`. `coordinate` is modified in place and
     * returned by the function.
     *
     * Example:
     *
     *     var coord = [7.85, 47.983333];
     *     var rotateRadians = Math.PI / 2; // 90 degrees
     *     ol.coordinate.rotate(coord, rotateRadians);
     *     // coord is now [-47.983333, 7.85]
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {number} angle Angle in radian.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function rotate(coordinate: Coordinate, angle: number): Coordinate;

    /**
     * Scale `coordinate` by `scale`. `coordinate` is modified in place and returned
     * by the function.
     *
     * Example:
     *
     *     var coord = [7.85, 47.983333];
     *     var scale = 1.2;
     *     ol.coordinate.scale(coord, scale);
     *     // coord is now [9.42, 57.5799996]
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {number} scale Scale factor.
     * @return {ol.Coordinate} Coordinate.
     */
    function scale(coordinate: Coordinate, scale: number): Coordinate;

    /**
     * Subtract `delta` to `coordinate`. `coordinate` is modified in place and
     * returned by the function.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.Coordinate} delta Delta.
     * @return {ol.Coordinate} Coordinate.
     */
    function sub(coordinate: Coordinate, delta: Coordinate): Coordinate;

    /**
     * @param {ol.Coordinate} coord1 First coordinate.
     * @param {ol.Coordinate} coord2 Second coordinate.
     * @return {number} Squared distance between coord1 and coord2.
     */
    function squaredDistance(coord1: Coordinate, coord2: Coordinate): number;

    /**
     * Calculate the squared distance from a coordinate to a line segment.
     *
     * @param {ol.Coordinate} coordinate Coordinate of the point.
     * @param {Array.<ol.Coordinate>} segment Line segment (2 coordinates).
     * @return {number} Squared distance from the point to the line segment.
     */
    function squaredDistanceToSegment(coordinate: Coordinate, segment: Coordinate[]): number;

    /**
     * Example:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringHDMS(coord);
     *     // out is now '47° 59′ 0″ N 7° 51′ 0″ E'
     *
     * @param {ol.Coordinate|undefined} coordinate Coordinate.
     * @return {string} Hemisphere, degrees, minutes and seconds.
     * @api stable
     */
    function toStringHDMS(coordinate: Coordinate): string;
    /**
     * Example:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringHDMS(coord);
     *     // out is now '47° 59′ 0″ N 7° 51′ 0″ E'
     *
     * @param {ol.Coordinate|undefined} coordinate Coordinate.
     * @return {string} Hemisphere, degrees, minutes and seconds.
     * @api stable
     */
    function toStringHDMS(coordinate: any /*undefined*/): string;

    /**
     * Example without specifying fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringXY(coord);
     *     // out is now '8, 48'
     *
     * Example explicitly specifying 1 fractional digit:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringXY(coord, 1);
     *     // out is now '7.8, 48.0'
     *
     * @param {ol.Coordinate|undefined} coordinate Coordinate.
     * @param {number=} opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return {string} XY.
     * @api stable
     */
    function toStringXY(coordinate: Coordinate, opt_fractionDigits?: number): string;
    /**
     * Example without specifying fractional digits:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringXY(coord);
     *     // out is now '8, 48'
     *
     * Example explicitly specifying 1 fractional digit:
     *
     *     var coord = [7.85, 47.983333];
     *     var out = ol.coordinate.toStringXY(coord, 1);
     *     // out is now '7.8, 48.0'
     *
     * @param {ol.Coordinate|undefined} coordinate Coordinate.
     * @param {number=} opt_fractionDigits The number of digits to include
     *    after the decimal point. Default is `0`.
     * @return {string} XY.
     * @api stable
     */
    function toStringXY(coordinate: any /*undefined*/, opt_fractionDigits?: number): string;

    /**
     * Create an ol.Coordinate from an Array and take into account axis order.
     *
     * Examples:
     *
     *     var northCoord = ol.coordinate.fromProjectedArray([1, 2], 'n');
     *     // northCoord is now [2, 1]
     *
     *     var eastCoord = ol.coordinate.fromProjectedArray([1, 2], 'e');
     *     // eastCoord is now [1, 2]
     *
     * @param {Array} array The array with coordinates.
     * @param {string} axis the axis info.
     * @return {ol.Coordinate} The coordinate created.
     */
    function fromProjectedArray(array: any[], axis: string): Coordinate;
}

declare module ol.extent {

    /**
     * Extent corner.
     * @enum {string}
     */
    enum Corner { BOTTOM_LEFT, BOTTOM_RIGHT, TOP_LEFT, TOP_RIGHT } 

    /**
     * Relationship to an extent.
     * @enum {number}
     */
    enum Relationship { UNKNOWN, INTERSECTING, ABOVE, RIGHT, BELOW, LEFT } 

    /**
     * Builds an extent that includes all given coordinates.
     *
     * @param {Array.<ol.Coordinate>} coordinates Coordinates.
     * @return {ol.Extent} Bounding extent.
     * @api stable
     */
    function boundingExtent(coordinates: Coordinate[]): Extent;

    /**
     * Return extent increased by the provided value.
     * @param {ol.Extent} extent Extent.
     * @param {number} value The amount by which the extent should be buffered.
     * @param {ol.Extent=} opt_extent Extent.
     * @return {ol.Extent} Extent.
     * @api stable
     */
    function buffer(extent: Extent, value: number, opt_extent?: Extent): Extent;

    /**
     * Creates a clone of an extent.
     *
     * @param {ol.Extent} extent Extent to clone.
     * @param {ol.Extent=} opt_extent Extent.
     * @return {ol.Extent} The clone.
     */
    function clone(extent: Extent, opt_extent?: Extent): Extent;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {number} x X.
     * @param {number} y Y.
     * @return {number} Closest squared distance.
     */
    function closestSquaredDistanceXY(extent: Extent, x: number, y: number): number;

    /**
     * Checks if the passed coordinate is contained or on the edge of the extent.
     *
     * @param {ol.Extent} extent Extent.
     * @param {ol.Coordinate} coordinate Coordinate.
     * @return {boolean} Contains.
     * @api stable
     */
    function containsCoordinate(extent: Extent, coordinate: Coordinate): boolean;

    /**
     * Checks if `extent2` is contained by or on the edge of `extent1`.
     *
     * @param {ol.Extent} extent1 Extent 1.
     * @param {ol.Extent} extent2 Extent 2.
     * @return {boolean} Contains.
     * @api stable
     */
    function containsExtent(extent1: Extent, extent2: Extent): boolean;

    /**
     * Checks if the passed coordinate is contained or on the edge of the extent.
     *
     * @param {ol.Extent} extent Extent.
     * @param {number} x X coordinate.
     * @param {number} y Y coordinate.
     * @return {boolean} Contains.
     * @api stable
     */
    function containsXY(extent: Extent, x: number, y: number): boolean;

    /**
     * Get the relationship between a coordinate and extent.
     * @param {ol.Extent} extent The extent.
     * @param {ol.Coordinate} coordinate The coordinate.
     * @return {number} The relationship (bitwise compare with
     *     ol.extent.Relationship).
     */
    function coordinateRelationship(extent: Extent, coordinate: Coordinate): number;

    /**
     * @return {ol.Extent} Empty extent.
     * @api stable
     */
    function createEmpty(): Extent;

    /**
     * @param {number} minX Minimum X.
     * @param {number} minY Minimum Y.
     * @param {number} maxX Maximum X.
     * @param {number} maxY Maximum Y.
     * @param {ol.Extent=} opt_extent Destination extent.
     * @return {ol.Extent} Extent.
     */
    function createOrUpdate(minX: number, minY: number, maxX: number, maxY: number, opt_extent?: Extent): Extent;

    /**
     * @param {ol.Extent=} opt_extent Extent.
     * @return {ol.Extent} Extent.
     */
    function createOrUpdateEmpty(opt_extent?: Extent): Extent;

    /**
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.Extent=} opt_extent Extent.
     * @return {ol.Extent} Extent.
     */
    function createOrUpdateFromCoordinate(coordinate: Coordinate, opt_extent?: Extent): Extent;

    /**
     * @param {Array.<ol.Coordinate>} coordinates Coordinates.
     * @param {ol.Extent=} opt_extent Extent.
     * @return {ol.Extent} Extent.
     */
    function createOrUpdateFromCoordinates(coordinates: Coordinate[], opt_extent?: Extent): Extent;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {ol.Extent=} opt_extent Extent.
     * @return {ol.Extent} Extent.
     */
    function createOrUpdateFromFlatCoordinates(flatCoordinates: number[], offset: number, end: number, stride: number, opt_extent?: Extent): Extent;

    /**
     * @param {Array.<Array.<ol.Coordinate>>} rings Rings.
     * @param {ol.Extent=} opt_extent Extent.
     * @return {ol.Extent} Extent.
     */
    function createOrUpdateFromRings(rings: Coordinate[][], opt_extent?: Extent): Extent;

    /**
     * Empties extent in place.
     * @param {ol.Extent} extent Extent.
     * @return {ol.Extent} Extent.
     */
    function empty(extent: Extent): Extent;

    /**
     * @param {ol.Extent} extent1 Extent 1.
     * @param {ol.Extent} extent2 Extent 2.
     * @return {boolean} Equals.
     * @api stable
     */
    function equals(extent1: Extent, extent2: Extent): boolean;

    /**
     * @param {ol.Extent} extent1 Extent 1.
     * @param {ol.Extent} extent2 Extent 2.
     * @return {ol.Extent} Extent.
     * @api stable
     */
    function extend(extent1: Extent, extent2: Extent): Extent;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {ol.Coordinate} coordinate Coordinate.
     */
    function extendCoordinate(extent: Extent, coordinate: Coordinate): void;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {Array.<ol.Coordinate>} coordinates Coordinates.
     * @return {ol.Extent} Extent.
     */
    function extendCoordinates(extent: Extent, coordinates: Coordinate[]): Extent;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @return {ol.Extent} Extent.
     */
    function extendFlatCoordinates(extent: Extent, flatCoordinates: number[], offset: number, end: number, stride: number): Extent;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {Array.<Array.<ol.Coordinate>>} rings Rings.
     * @return {ol.Extent} Extent.
     */
    function extendRings(extent: Extent, rings: Coordinate[][]): Extent;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {number} x X.
     * @param {number} y Y.
     */
    function extendXY(extent: Extent, x: number, y: number): void;

    /**
     * This function calls `callback` for each corner of the extent. If the
     * callback returns a truthy value the function returns that value
     * immediately. Otherwise the function returns `false`.
     * @param {ol.Extent} extent Extent.
     * @param {function(this:T, ol.Coordinate): S} callback Callback.
     * @param {T=} opt_this Value to use as `this` when executing `callback`.
     * @return {S|boolean} Value.
     * @template S, T
     */
    function forEachCorner<S, T>(extent: Extent, callback: (_0: Coordinate) => S, opt_this?: T): any /*S|boolean*/;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {number} Area.
     */
    function getArea(extent: Extent): number;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {ol.Coordinate} Bottom left coordinate.
     * @api stable
     */
    function getBottomLeft(extent: Extent): Coordinate;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {ol.Coordinate} Bottom right coordinate.
     * @api stable
     */
    function getBottomRight(extent: Extent): Coordinate;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {ol.Coordinate} Center.
     * @api stable
     */
    function getCenter(extent: Extent): Coordinate;

    /**
     * Get a corner coordinate of an extent.
     * @param {ol.Extent} extent Extent.
     * @param {ol.extent.Corner} corner Corner.
     * @return {ol.Coordinate} Corner coordinate.
     */
    function getCorner(extent: Extent, corner: extent.Corner): Coordinate;

    /**
     * @param {ol.Extent} extent1 Extent 1.
     * @param {ol.Extent} extent2 Extent 2.
     * @return {number} Enlarged area.
     */
    function getEnlargedArea(extent1: Extent, extent2: Extent): number;

    /**
     * @param {ol.Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {ol.Size} size Size.
     * @param {ol.Extent=} opt_extent Destination extent.
     * @return {ol.Extent} Extent.
     */
    function getForViewAndSize(center: Coordinate, resolution: number, rotation: number, size: Size, opt_extent?: Extent): Extent;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {number} Height.
     * @api stable
     */
    function getHeight(extent: Extent): number;

    /**
     * @param {ol.Extent} extent1 Extent 1.
     * @param {ol.Extent} extent2 Extent 2.
     * @return {number} Intersection area.
     */
    function getIntersectionArea(extent1: Extent, extent2: Extent): number;

    /**
     * Get the intersection of two extents.
     * @param {ol.Extent} extent1 Extent 1.
     * @param {ol.Extent} extent2 Extent 2.
     * @param {ol.Extent=} opt_extent Optional extent to populate with intersection.
     * @return {ol.Extent} Intersecting extent.
     * @api stable
     */
    function getIntersection(extent1: Extent, extent2: Extent, opt_extent?: Extent): Extent;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {number} Margin.
     */
    function getMargin(extent: Extent): number;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {ol.Size} Size.
     * @api stable
     */
    function getSize(extent: Extent): Size;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {ol.Coordinate} Top left coordinate.
     * @api stable
     */
    function getTopLeft(extent: Extent): Coordinate;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {ol.Coordinate} Top right coordinate.
     * @api stable
     */
    function getTopRight(extent: Extent): Coordinate;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {number} Width.
     * @api stable
     */
    function getWidth(extent: Extent): number;

    /**
     * @param {ol.Extent} extent1 Extent 1.
     * @param {ol.Extent} extent2 Extent.
     * @return {boolean} Intersects.
     * @api stable
     */
    function intersects(extent1: Extent, extent2: Extent): boolean;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {boolean} Is empty.
     * @api stable
     */
    function isEmpty(extent: Extent): boolean;

    /**
     * @param {ol.Extent} extent Extent.
     * @return {boolean} Is infinite.
     */
    function isInfinite(extent: Extent): boolean;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {ol.Coordinate} coordinate Coordinate.
     * @return {ol.Coordinate} Coordinate.
     */
    function normalize(extent: Extent, coordinate: Coordinate): Coordinate;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {ol.Extent=} opt_extent Extent.
     * @return {ol.Extent} Extent.
     */
    function returnOrUpdate(extent: Extent, opt_extent?: Extent): Extent;

    /**
     * @param {ol.Extent} extent Extent.
     * @param {number} value Value.
     */
    function scaleFromCenter(extent: Extent, value: number): void;

    /**
     * Determine if the segment between two coordinates intersects (crosses,
     * touches, or is contained by) the provided extent.
     * @param {ol.Extent} extent The extent.
     * @param {ol.Coordinate} start Segment start coordinate.
     * @param {ol.Coordinate} end Segment end coordinate.
     * @return {boolean} The segment intersects the extent.
     */
    function intersectsSegment(extent: Extent, start: Coordinate, end: Coordinate): boolean;

    /**
     * @param {ol.Extent} extent1 Extent 1.
     * @param {ol.Extent} extent2 Extent 2.
     * @return {boolean} Touches.
     */
    function touches(extent1: Extent, extent2: Extent): boolean;

    /**
     * Apply a transform function to the extent.
     * @param {ol.Extent} extent Extent.
     * @param {ol.TransformFunction} transformFn Transform function.  Called with
     * [minX, minY, maxX, maxY] extent coordinates.
     * @param {ol.Extent=} opt_extent Destination extent.
     * @return {ol.Extent} Extent.
     * @api stable
     */
    function applyTransform(extent: Extent, transformFn: TransformFunction, opt_extent?: Extent): Extent;

    /**
     * Apply a 2d transform to an extent.
     * @param {ol.Extent} extent Input extent.
     * @param {goog.vec.Mat4.Number} transform The transform matrix.
     * @param {ol.Extent=} opt_extent Optional extent for return values.
     * @return {ol.Extent} The transformed extent.
     */
    function transform2D(extent: Extent, transform: goog.vec.Mat4.Number, opt_extent?: Extent): Extent;
}

declare module ol.sphere {

    /**
     * The normal sphere.
     * @const
     * @type {ol.Sphere}
     */
    var NORMAL: Sphere;

    /**
     * A sphere with radius equal to the semi-major axis of the WGS84 ellipsoid.
     * @const
     * @type {ol.Sphere}
     */
    var WGS84: Sphere;
}

declare module ol.easing {

    /**
     * @function
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function easeIn(t: number): number;

    /**
     * @function
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function easeOut(t: number): number;

    /**
     * @function
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function inAndOut(t: number): number;

    /**
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function linear(t: number): number;

    /**
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function upAndDown(t: number): number;
}

declare module ol.animation {

    /**
     * @param {olx.animation.BounceOptions} options Bounce options.
     * @return {ol.PreRenderFunction} Pre-render function.
     * @api
     */
    function bounce(options: olx.animation.BounceOptions): PreRenderFunction;

    /**
     * @param {olx.animation.PanOptions} options Pan options.
     * @return {ol.PreRenderFunction} Pre-render function.
     * @api
     */
    function pan(options: olx.animation.PanOptions): PreRenderFunction;

    /**
     * @param {olx.animation.RotateOptions} options Rotate options.
     * @return {ol.PreRenderFunction} Pre-render function.
     * @api
     */
    function rotate(options: olx.animation.RotateOptions): PreRenderFunction;

    /**
     * @param {olx.animation.ZoomOptions} options Zoom options.
     * @return {ol.PreRenderFunction} Pre-render function.
     * @api
     */
    function zoom(options: olx.animation.ZoomOptions): PreRenderFunction;
}

declare module ol.tilecoord {

    /**
     * @param {string} quadKey Quad key.
     * @return {ol.TileCoord} Tile coordinate.
     */
    function createFromQuadKey(quadKey: string): TileCoord;

    /**
     * @param {string} str String that follows pattern “z/x/y” where x, y and z are
     *   numbers.
     * @return {ol.TileCoord} Tile coord.
     */
    function createFromString(str: string): TileCoord;

    /**
     * @param {number} z Z.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {ol.TileCoord=} opt_tileCoord Tile coordinate.
     * @return {ol.TileCoord} Tile coordinate.
     */
    function createOrUpdate(z: number, x: number, y: number, opt_tileCoord?: TileCoord): TileCoord;

    /**
     * @param {number} z Z.
     * @param {number} x X.
     * @param {number} y Y.
     * @return {string} Key.
     */
    function getKeyZXY(z: number, x: number, y: number): string;

    /**
     * @param {ol.TileCoord} tileCoord Tile coord.
     * @return {number} Hash.
     */
    function hash(tileCoord: TileCoord): number;

    /**
     * @param {ol.TileCoord} tileCoord Tile coord.
     * @return {string} Quad key.
     */
    function quadKey(tileCoord: TileCoord): string;

    /**
     * @param {ol.TileCoord} tileCoord Tile coord.
     * @return {string} String.
     */
    function toString(tileCoord: TileCoord): string;
}

declare module ol.TileRange {

    /**
     * @param {...ol.TileCoord} var_args Tile coordinates.
     * @return {!ol.TileRange} Bounding tile box.
     */
    function boundingTileRange(...var_args: TileCoord[]): TileRange;

    /**
     * @param {number} minX Minimum X.
     * @param {number} maxX Maximum X.
     * @param {number} minY Minimum Y.
     * @param {number} maxY Maximum Y.
     * @param {ol.TileRange|undefined} tileRange TileRange.
     * @return {ol.TileRange} Tile range.
     */
    function createOrUpdate(minX: number, maxX: number, minY: number, maxY: number, tileRange: TileRange): TileRange;
    /**
     * @param {number} minX Minimum X.
     * @param {number} maxX Maximum X.
     * @param {number} minY Minimum Y.
     * @param {number} maxY Maximum Y.
     * @param {ol.TileRange|undefined} tileRange TileRange.
     * @return {ol.TileRange} Tile range.
     */
    function createOrUpdate(minX: number, maxX: number, minY: number, maxY: number, tileRange: any /*undefined*/): TileRange;
}

declare module ol.has {

    /**
     * The ratio between physical pixels and device-independent pixels
     * (dips) on the device (`window.devicePixelRatio`).
     * @const
     * @type {number}
     * @api stable
     */
    var DEVICE_PIXEL_RATIO: number;

    /**
     * True if the browser supports ArrayBuffers.
     * @const
     * @type {boolean}
     */
    var ARRAY_BUFFER: boolean;

    /**
     * True if the browser's Canvas implementation implements {get,set}LineDash.
     * @type {boolean}
     */
    var CANVAS_LINE_DASH: boolean;

    /**
     * True if browser supports Canvas.
     * @const
     * @type {boolean}
     * @api stable
     */
    var CANVAS: boolean;

    /**
     * Indicates if DeviceOrientation is supported in the user's browser.
     * @const
     * @type {boolean}
     * @api stable
     */
    var DEVICE_ORIENTATION: boolean;

    /**
     * True if browser supports DOM.
     * @const
     * @type {boolean}
     */
    var DOM: boolean;

    /**
     * Is HTML5 geolocation supported in the current browser?
     * @const
     * @type {boolean}
     * @api stable
     */
    var GEOLOCATION: boolean;

    /**
     * True if browser supports touch events.
     * @const
     * @type {boolean}
     * @api stable
     */
    var TOUCH: boolean;

    /**
     * True if browser supports pointer events.
     * @const
     * @type {boolean}
     */
    var POINTER: boolean;

    /**
     * True if browser supports ms pointer events (IE 10).
     * @const
     * @type {boolean}
     */
    var MSPOINTER: boolean;

    /**
     * True if browser supports WebGL.
     * @const
     * @type {boolean}
     * @api stable
     */
    var WEBGL: boolean;
}

declare module ol.css {

    /**
     * The CSS class for hidden feature.
     *
     * @const
     * @type {string}
     */
    var CLASS_HIDDEN: string;

    /**
     * The CSS class that we'll give the DOM elements to have them unselectable.
     *
     * @const
     * @type {string}
     */
    var CLASS_UNSELECTABLE: string;

    /**
     * The CSS class for unsupported feature.
     *
     * @const
     * @type {string}
     */
    var CLASS_UNSUPPORTED: string;

    /**
     * The CSS class for controls.
     *
     * @const
     * @type {string}
     */
    var CLASS_CONTROL: string;
}

declare module ol.MapBrowserEvent {

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { SINGLECLICK, CLICK, DBLCLICK, POINTERDRAG, POINTERMOVE, POINTERDOWN, POINTERUP, POINTEROVER, POINTEROUT, POINTERENTER, POINTERLEAVE, POINTERCANCEL } 
}

declare module ol.vec.Mat4 {

    /**
     * @param {!goog.vec.Mat4.Number} mat Matrix.
     * @param {number} translateX1 Translate X1.
     * @param {number} translateY1 Translate Y1.
     * @param {number} scaleX Scale X.
     * @param {number} scaleY Scale Y.
     * @param {number} rotation Rotation.
     * @param {number} translateX2 Translate X2.
     * @param {number} translateY2 Translate Y2.
     * @return {!goog.vec.Mat4.Number} Matrix.
     */
    function makeTransform2D(mat: goog.vec.Mat4.Number, translateX1: number, translateY1: number, scaleX: number, scaleY: number, rotation: number, translateX2: number, translateY2: number): goog.vec.Mat4.Number;

    /**
     * Returns true if mat1 and mat2 represent the same 2D transformation.
     * @param {goog.vec.Mat4.Number} mat1 Matrix 1.
     * @param {goog.vec.Mat4.Number} mat2 Matrix 2.
     * @return {boolean} Equal 2D.
     */
    function equals2D(mat1: goog.vec.Mat4.Number, mat2: goog.vec.Mat4.Number): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 2x4 matrix omitting the projective component.
     *
     * @param {goog.vec.Mat4.Number} mat The matrix supplying the transformation.
     * @param {Array.<number>} vec The 3 element vector to transform.
     * @param {Array.<number>} resultVec The 3 element vector to receive the results
     *     (may be vec).
     * @return {Array.<number>} return resultVec so that operations can be
     *     chained together.
     */
    function multVec2(mat: goog.vec.Mat4.Number, vec: number[], resultVec: number[]): number[];
}

declare module ol.structs.PriorityQueue {

    /**
     * @const
     * @type {number}
     */
    var DROP: number;
}

declare module ol.events {

    /**
     * A function that takes an {@link ol.MapBrowserEvent} and returns a
     * `{boolean}`. If the condition is met, true should be returned.
     *
     * @typedef {function(ol.MapBrowserEvent): boolean}
     * @api stable
     */
    interface ConditionType {
        (_0: MapBrowserEvent): boolean
    }
}

declare module ol.events.condition {

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True if only the alt key is pressed.
     * @api stable
     */
    function altKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True if only the alt and shift keys are pressed.
     * @api stable
     */
    function altShiftKeysOnly(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * Always true.
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True.
     * @function
     * @api stable
     */
    function always(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True if the event is a map `click` event.
     * @api stable
     */
    function click(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True if the browser event is a `mousemove` event.
     * @api
     */
    function mouseMove(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * Always false.
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} False.
     * @function
     * @api stable
     */
    function never(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True if the event is a map `singleclick` event.
     * @api stable
     */
    function singleClick(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True only if there no modifier keys are pressed.
     * @api stable
     */
    function noModifierKeys(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True if only the platform modifier key is pressed.
     * @api stable
     */
    function platformModifierKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True if only the shift key is pressed.
     * @api stable
     */
    function shiftKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True only if the target element is not editable.
     * @api
     */
    function targetNotEditable(mapBrowserEvent: MapBrowserEvent): boolean;

    /**
     * @param {ol.MapBrowserEvent} mapBrowserEvent Map browser event.
     * @return {boolean} True if the event originates from a mouse device.
     * @api stable
     */
    function mouseOnly(mapBrowserEvent: MapBrowserEvent): boolean;
}

declare module ol.math {

    /**
     * @param {number} x X.
     * @return {number} Hyperbolic cosine of x.
     */
    function cosh(x: number): number;

    /**
     * @param {number} x X.
     * @return {number} Hyperbolic cotangent of x.
     */
    function coth(x: number): number;

    /**
     * @param {number} x X.
     * @return {number} Hyperbolic cosecant of x.
     */
    function csch(x: number): number;

    /**
     * @param {number} x X.
     * @return {number} The smallest power of two greater than or equal to x.
     */
    function roundUpToPowerOfTwo(x: number): number;

    /**
     * @param {number} x X.
     * @return {number} Hyperbolic secant of x.
     */
    function sech(x: number): number;

    /**
     * @param {number} x X.
     * @return {number} Hyperbolic sine of x.
     */
    function sinh(x: number): number;

    /**
     * Returns the square of the closest distance between the point (x, y) and the
     * line segment (x1, y1) to (x2, y2).
     * @param {number} x X.
     * @param {number} y Y.
     * @param {number} x1 X1.
     * @param {number} y1 Y1.
     * @param {number} x2 X2.
     * @param {number} y2 Y2.
     * @return {number} Squared distance.
     */
    function squaredSegmentDistance(x: number, y: number, x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Returns the square of the distance between the points (x1, y1) and (x2, y2).
     * @param {number} x1 X1.
     * @param {number} y1 Y1.
     * @param {number} x2 X2.
     * @param {number} y2 Y2.
     * @return {number} Squared distance.
     */
    function squaredDistance(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * @param {number} x X.
     * @return {number} Hyperbolic tangent of x.
     */
    function tanh(x: number): number;
}

declare module ol.Map {

    /**
     * @param {olx.MapOptions} options Map options.
     * @return {ol.MapOptionsInternal} Internal map options.
     */
    function createOptionsInternal(options: olx.MapOptions): MapOptionsInternal;
}

declare module ol.ellipsoid {

    /**
     * @const
     * @type {ol.Ellipsoid}
     */
    var WGS84: Ellipsoid;
}

declare module ol.feature {

    /**
     * A function that takes a `{number}` representing the view's resolution. It
     * returns an Array of {@link ol.style.Style}. This way individual features
     * can be styled. The this keyword inside the function references the
     * {@link ol.Feature} to be styled.
     *
     * @typedef {function(this: ol.Feature, number): Array.<ol.style.Style>}
     * @api stable
     */
    interface FeatureStyleFunction {
        (_0: number): style.Style[]
    }

    /**
     * Convert the provided object into a feature style function.  Functions passed
     * through unchanged.  Arrays of ol.style.Style or single style objects wrapped
     * in a new feature style function.
     * @param {ol.feature.FeatureStyleFunction|!Array.<ol.style.Style>|
     *     !ol.style.Style} obj A feature style function, a single style, or an
     *     array of styles.
     * @return {ol.feature.FeatureStyleFunction} A style function.
     */
    function createFeatureStyleFunction(obj: FeatureStyleFunction): FeatureStyleFunction;
    /**
     * Convert the provided object into a feature style function.  Functions passed
     * through unchanged.  Arrays of ol.style.Style or single style objects wrapped
     * in a new feature style function.
     * @param {ol.feature.FeatureStyleFunction|!Array.<ol.style.Style>|
     *     !ol.style.Style} obj A feature style function, a single style, or an
     *     array of styles.
     * @return {ol.feature.FeatureStyleFunction} A style function.
     */
    function createFeatureStyleFunction(obj: style.Style[]): FeatureStyleFunction;
    /**
     * Convert the provided object into a feature style function.  Functions passed
     * through unchanged.  Arrays of ol.style.Style or single style objects wrapped
     * in a new feature style function.
     * @param {ol.feature.FeatureStyleFunction|!Array.<ol.style.Style>|
     *     !ol.style.Style} obj A feature style function, a single style, or an
     *     array of styles.
     * @return {ol.feature.FeatureStyleFunction} A style function.
     */
    function createFeatureStyleFunction(obj: style.Style): FeatureStyleFunction;
}

declare module ol.xml {

    /**
     * When using {@link ol.xml.makeChildAppender} or
     * {@link ol.xml.makeSimpleNodeFactory}, the top `objectStack` item needs to
     * have this structure.
     * @typedef {{node:Node}}
     */
    interface NodeStackItem {
        node: Node
    }

    /**
     * @typedef {function(Node, Array.<*>)}
     */
    interface Parser {
        (_0: Node, _1: any[]): any /*missing*/
    }

    /**
     * @typedef {function(Node, *, Array.<*>)}
     */
    interface Serializer {
        (_0: Node, _1: any, _2: any[]): any /*missing*/
    }

    /**
     * This document should be used when creating nodes for XML serializations. This
     * document is also used by {@link ol.xml.createElementNS} and
     * {@link ol.xml.setAttributeNS}
     * @const
     * @type {Document}
     */
    var DOCUMENT: Document;

    /**
     * @param {string} namespaceURI Namespace URI.
     * @param {string} qualifiedName Qualified name.
     * @return {Node} Node.
     */
    function createElementNS(namespaceURI: string, qualifiedName: string): Node;

    /**
     * Recursively grab all text content of child nodes into a single string.
     * @param {Node} node Node.
     * @param {boolean} normalizeWhitespace Normalize whitespace: remove all line
     * breaks.
     * @return {string} All text content.
     * @api
     */
    function getAllTextContent(node: Node, normalizeWhitespace: boolean): string;

    /**
     * @param {Node} node Node.
     * @return {string} Local name.
     */
    function getLocalName(node: Node): string;

    /**
     * @param {?} value Value.
     * @return {boolean} Is document.
     */
    function isDocument(value: any): boolean;

    /**
     * @param {?} value Value.
     * @return {boolean} Is node.
     */
    function isNode(value: any): boolean;

    /**
     * @param {Node} node Node.
     * @param {?string} namespaceURI Namespace URI.
     * @param {string} name Attribute name.
     * @return {string} Value
     */
    function getAttributeNS(node: Node, namespaceURI: string, name: string): string;

    /**
     * @param {Node} node Node.
     * @param {?string} namespaceURI Namespace URI.
     * @param {string} name Attribute name.
     * @return {?Node} Attribute node or null if none found.
     */
    function getAttributeNodeNS(node: Node, namespaceURI: string, name: string): Node;

    /**
     * @param {Node} node Node.
     * @param {?string} namespaceURI Namespace URI.
     * @param {string} name Attribute name.
     * @param {string|number} value Value.
     */
    function setAttributeNS(node: Node, namespaceURI: string, name: string, value: string): void;
    /**
     * @param {Node} node Node.
     * @param {?string} namespaceURI Namespace URI.
     * @param {string} name Attribute name.
     * @param {string|number} value Value.
     */
    function setAttributeNS(node: Node, namespaceURI: string, name: string, value: number): void;

    /**
     * Parse an XML string to a XML Document
     * @param {string} xml XML.
     * @return {Document} Document.
     * @api
     */
    function parse(xml: string): Document;

    /**
     * @param {function(this: T, Node, Array.<*>): (Array.<*>|undefined)}
     *     valueReader Value reader.
     * @param {T=} opt_this The object to use as `this` in `valueReader`.
     * @return {ol.xml.Parser} Parser.
     * @template T
     */
    function makeArrayExtender<T>(valueReader: (_0: Node, _1: any[]) => any[], opt_this?: T): Parser;
    /**
     * @param {function(this: T, Node, Array.<*>): (Array.<*>|undefined)}
     *     valueReader Value reader.
     * @param {T=} opt_this The object to use as `this` in `valueReader`.
     * @return {ol.xml.Parser} Parser.
     * @template T
     */
    function makeArrayExtender<T>(valueReader: (_0: Node, _1: any[]) => any /*undefined*/, opt_this?: T): Parser;

    /**
     * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
     * @param {T=} opt_this The object to use as `this` in `valueReader`.
     * @return {ol.xml.Parser} Parser.
     * @template T
     */
    function makeArrayPusher<T>(valueReader: (_0: Node, _1: any[]) => any, opt_this?: T): Parser;

    /**
     * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
     * @param {T=} opt_this The object to use as `this` in `valueReader`.
     * @return {ol.xml.Parser} Parser.
     * @template T
     */
    function makeReplacer<T>(valueReader: (_0: Node, _1: any[]) => any, opt_this?: T): Parser;

    /**
     * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
     * @param {string=} opt_property Property.
     * @param {T=} opt_this The object to use as `this` in `valueReader`.
     * @return {ol.xml.Parser} Parser.
     * @template T
     */
    function makeObjectPropertyPusher<T>(valueReader: (_0: Node, _1: any[]) => any, opt_property?: string, opt_this?: T): Parser;

    /**
     * @param {function(this: T, Node, Array.<*>): *} valueReader Value reader.
     * @param {string=} opt_property Property.
     * @param {T=} opt_this The object to use as `this` in `valueReader`.
     * @return {ol.xml.Parser} Parser.
     * @template T
     */
    function makeObjectPropertySetter<T>(valueReader: (_0: Node, _1: any[]) => any, opt_property?: string, opt_this?: T): Parser;

    /**
     * @param {Array.<string>} namespaceURIs Namespace URIs.
     * @param {Object.<string, ol.xml.Parser>} parsers Parsers.
     * @param {Object.<string, Object.<string, ol.xml.Parser>>=} opt_parsersNS
     *     ParsersNS.
     * @return {Object.<string, Object.<string, ol.xml.Parser>>} Parsers NS.
     */
    function makeParsersNS(namespaceURIs: string[], parsers: { [key: string]: Parser }, opt_parsersNS?: { [key: string]: { [key: string]: Parser } }): { [key: string]: { [key: string]: Parser } };

    /**
     * Creates a serializer that appends nodes written by its `nodeWriter` to its
     * designated parent. The parent is the `node` of the
     * {@link ol.xml.NodeStackItem} at the top of the `objectStack`.
     * @param {function(this: T, Node, V, Array.<*>)}
     *     nodeWriter Node writer.
     * @param {T=} opt_this The object to use as `this` in `nodeWriter`.
     * @return {ol.xml.Serializer} Serializer.
     * @template T, V
     */
    function makeChildAppender<T, V>(nodeWriter: (_0: Node, _1: V, _2: any[]) => any /*missing*/, opt_this?: T): Serializer;

    /**
     * Creates a serializer that calls the provided `nodeWriter` from
     * {@link ol.xml.serialize}. This can be used by the parent writer to have the
     * 'nodeWriter' called with an array of values when the `nodeWriter` was
     * designed to serialize a single item. An example would be a LineString
     * geometry writer, which could be reused for writing MultiLineString
     * geometries.
     * @param {function(this: T, Node, V, Array.<*>)}
     *     nodeWriter Node writer.
     * @param {T=} opt_this The object to use as `this` in `nodeWriter`.
     * @return {ol.xml.Serializer} Serializer.
     * @template T, V
     */
    function makeArraySerializer<T, V>(nodeWriter: (_0: Node, _1: V, _2: any[]) => any /*missing*/, opt_this?: T): Serializer;

    /**
     * Creates a node factory which can use the `opt_keys` passed to
     * {@link ol.xml.serialize} or {@link ol.xml.pushSerializeAndPop} as node names,
     * or a fixed node name. The namespace of the created nodes can either be fixed,
     * or the parent namespace will be used.
     * @param {string=} opt_nodeName Fixed node name which will be used for all
     *     created nodes. If not provided, the 3rd argument to the resulting node
     *     factory needs to be provided and will be the nodeName.
     * @param {string=} opt_namespaceURI Fixed namespace URI which will be used for
     *     all created nodes. If not provided, the namespace of the parent node will
     *     be used.
     * @return {function(*, Array.<*>, string=): (Node|undefined)} Node factory.
     */
    function makeSimpleNodeFactory(opt_nodeName?: string, opt_namespaceURI?: string): (_0: any, _1: any[], _2: string) => any /*Node|any (undefined)*/;

    /**
     * A node factory that creates a node using the parent's `namespaceURI` and the
     * `nodeName` passed by {@link ol.xml.serialize} or
     * {@link ol.xml.pushSerializeAndPop} to the node factory.
     * @const
     * @type {function(*, Array.<*>, string=): (Node|undefined)}
     */
    var OBJECT_PROPERTY_NODE_FACTORY: (_0: any, _1: any[], _2: string) => any /*Node|any (undefined)*/;

    /**
     * Creates an array of `values` to be used with {@link ol.xml.serialize} or
     * {@link ol.xml.pushSerializeAndPop}, where `orderedKeys` has to be provided as
     * `opt_key` argument.
     * @param {Object.<string, V>} object Key-value pairs for the sequence. Keys can
     *     be a subset of the `orderedKeys`.
     * @param {Array.<string>} orderedKeys Keys in the order of the sequence.
     * @return {Array.<V>} Values in the order of the sequence. The resulting array
     *     has the same length as the `orderedKeys` array. Values that are not
     *     present in `object` will be `undefined` in the resulting array.
     * @template V
     */
    function makeSequence<V>(object: { [key: string]: V }, orderedKeys: string[]): V[];

    /**
     * Creates a namespaced structure, using the same values for each namespace.
     * This can be used as a starting point for versioned parsers, when only a few
     * values are version specific.
     * @param {Array.<string>} namespaceURIs Namespace URIs.
     * @param {T} structure Structure.
     * @param {Object.<string, T>=} opt_structureNS Namespaced structure to add to.
     * @return {Object.<string, T>} Namespaced structure.
     * @template T
     */
    function makeStructureNS<T>(namespaceURIs: string[], structure: T, opt_structureNS?: { [key: string]: T }): { [key: string]: T };

    /**
     * @param {Object.<string, Object.<string, ol.xml.Parser>>} parsersNS
     *     Parsers by namespace.
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     * @param {*=} opt_this The object to use as `this`.
     */
    function parseNode(parsersNS: { [key: string]: { [key: string]: Parser } }, node: Node, objectStack: any[], opt_this?: any): void;

    /**
     * @param {T} object Object.
     * @param {Object.<string, Object.<string, ol.xml.Parser>>} parsersNS
     *     Parsers by namespace.
     * @param {Node} node Node.
     * @param {Array.<*>} objectStack Object stack.
     * @param {*=} opt_this The object to use as `this`.
     * @return {T|undefined} Object.
     * @template T
     */
    function pushParseAndPop<T>(object: T, parsersNS: { [key: string]: { [key: string]: Parser } }, node: Node, objectStack: any[], opt_this?: any): any /*T|any (undefined)*/;

    /**
     * Walks through an array of `values` and calls a serializer for each value.
     * @param {Object.<string, Object.<string, ol.xml.Serializer>>} serializersNS
     *     Namespaced serializers.
     * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
     *     Node factory. The `nodeFactory` creates the node whose namespace and name
     *     will be used to choose a node writer from `serializersNS`. This
     *     separation allows us to decide what kind of node to create, depending on
     *     the value we want to serialize. An example for this would be different
     *     geometry writers based on the geometry type.
     * @param {Array.<*>} values Values to serialize. An example would be an array
     *     of {@link ol.Feature} instances.
     * @param {Array.<*>} objectStack Node stack.
     * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
     *     `nodeFactory`. This is used for serializing object literals where the
     *     node name relates to the property key. The array length of `opt_keys` has
     *     to match the length of `values`. For serializing a sequence, `opt_keys`
     *     determines the order of the sequence.
     * @param {T=} opt_this The object to use as `this` for the node factory and
     *     serializers.
     * @template T
     */
    function serialize<T>(serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: (_0: any, _1: any[], _2: string) => Node, values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): void;
    /**
     * Walks through an array of `values` and calls a serializer for each value.
     * @param {Object.<string, Object.<string, ol.xml.Serializer>>} serializersNS
     *     Namespaced serializers.
     * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
     *     Node factory. The `nodeFactory` creates the node whose namespace and name
     *     will be used to choose a node writer from `serializersNS`. This
     *     separation allows us to decide what kind of node to create, depending on
     *     the value we want to serialize. An example for this would be different
     *     geometry writers based on the geometry type.
     * @param {Array.<*>} values Values to serialize. An example would be an array
     *     of {@link ol.Feature} instances.
     * @param {Array.<*>} objectStack Node stack.
     * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
     *     `nodeFactory`. This is used for serializing object literals where the
     *     node name relates to the property key. The array length of `opt_keys` has
     *     to match the length of `values`. For serializing a sequence, `opt_keys`
     *     determines the order of the sequence.
     * @param {T=} opt_this The object to use as `this` for the node factory and
     *     serializers.
     * @template T
     */
    function serialize<T>(serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: (_0: any, _1: any[], _2: string) => any /*undefined*/, values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): void;
    /**
     * Walks through an array of `values` and calls a serializer for each value.
     * @param {Object.<string, Object.<string, ol.xml.Serializer>>} serializersNS
     *     Namespaced serializers.
     * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
     *     Node factory. The `nodeFactory` creates the node whose namespace and name
     *     will be used to choose a node writer from `serializersNS`. This
     *     separation allows us to decide what kind of node to create, depending on
     *     the value we want to serialize. An example for this would be different
     *     geometry writers based on the geometry type.
     * @param {Array.<*>} values Values to serialize. An example would be an array
     *     of {@link ol.Feature} instances.
     * @param {Array.<*>} objectStack Node stack.
     * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
     *     `nodeFactory`. This is used for serializing object literals where the
     *     node name relates to the property key. The array length of `opt_keys` has
     *     to match the length of `values`. For serializing a sequence, `opt_keys`
     *     determines the order of the sequence.
     * @param {T=} opt_this The object to use as `this` for the node factory and
     *     serializers.
     * @template T
     */
    function serialize<T>(serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: (_0: any, _1: any[], _2: any /*undefined*/) => Node, values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): void;
    /**
     * Walks through an array of `values` and calls a serializer for each value.
     * @param {Object.<string, Object.<string, ol.xml.Serializer>>} serializersNS
     *     Namespaced serializers.
     * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
     *     Node factory. The `nodeFactory` creates the node whose namespace and name
     *     will be used to choose a node writer from `serializersNS`. This
     *     separation allows us to decide what kind of node to create, depending on
     *     the value we want to serialize. An example for this would be different
     *     geometry writers based on the geometry type.
     * @param {Array.<*>} values Values to serialize. An example would be an array
     *     of {@link ol.Feature} instances.
     * @param {Array.<*>} objectStack Node stack.
     * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
     *     `nodeFactory`. This is used for serializing object literals where the
     *     node name relates to the property key. The array length of `opt_keys` has
     *     to match the length of `values`. For serializing a sequence, `opt_keys`
     *     determines the order of the sequence.
     * @param {T=} opt_this The object to use as `this` for the node factory and
     *     serializers.
     * @template T
     */
    function serialize<T>(serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: (_0: any, _1: any[], _2: any /*undefined*/) => any /*undefined*/, values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): void;

    /**
     * @param {O} object Object.
     * @param {Object.<string, Object.<string, ol.xml.Serializer>>} serializersNS
     *     Namespaced serializers.
     * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
     *     Node factory. The `nodeFactory` creates the node whose namespace and name
     *     will be used to choose a node writer from `serializersNS`. This
     *     separation allows us to decide what kind of node to create, depending on
     *     the value we want to serialize. An example for this would be different
     *     geometry writers based on the geometry type.
     * @param {Array.<*>} values Values to serialize. An example would be an array
     *     of {@link ol.Feature} instances.
     * @param {Array.<*>} objectStack Node stack.
     * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
     *     `nodeFactory`. This is used for serializing object literals where the
     *     node name relates to the property key. The array length of `opt_keys` has
     *     to match the length of `values`. For serializing a sequence, `opt_keys`
     *     determines the order of the sequence.
     * @param {T=} opt_this The object to use as `this` for the node factory and
     *     serializers.
     * @return {O|undefined} Object.
     * @template O, T
     */
    function pushSerializeAndPop<O, T>(object: O, serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: (_0: any, _1: any[], _2: string) => Node, values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): any /*O|any (undefined)*/;
    /**
     * @param {O} object Object.
     * @param {Object.<string, Object.<string, ol.xml.Serializer>>} serializersNS
     *     Namespaced serializers.
     * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
     *     Node factory. The `nodeFactory` creates the node whose namespace and name
     *     will be used to choose a node writer from `serializersNS`. This
     *     separation allows us to decide what kind of node to create, depending on
     *     the value we want to serialize. An example for this would be different
     *     geometry writers based on the geometry type.
     * @param {Array.<*>} values Values to serialize. An example would be an array
     *     of {@link ol.Feature} instances.
     * @param {Array.<*>} objectStack Node stack.
     * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
     *     `nodeFactory`. This is used for serializing object literals where the
     *     node name relates to the property key. The array length of `opt_keys` has
     *     to match the length of `values`. For serializing a sequence, `opt_keys`
     *     determines the order of the sequence.
     * @param {T=} opt_this The object to use as `this` for the node factory and
     *     serializers.
     * @return {O|undefined} Object.
     * @template O, T
     */
    function pushSerializeAndPop<O, T>(object: O, serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: (_0: any, _1: any[], _2: string) => any /*undefined*/, values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): any /*O|any (undefined)*/;
    /**
     * @param {O} object Object.
     * @param {Object.<string, Object.<string, ol.xml.Serializer>>} serializersNS
     *     Namespaced serializers.
     * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
     *     Node factory. The `nodeFactory` creates the node whose namespace and name
     *     will be used to choose a node writer from `serializersNS`. This
     *     separation allows us to decide what kind of node to create, depending on
     *     the value we want to serialize. An example for this would be different
     *     geometry writers based on the geometry type.
     * @param {Array.<*>} values Values to serialize. An example would be an array
     *     of {@link ol.Feature} instances.
     * @param {Array.<*>} objectStack Node stack.
     * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
     *     `nodeFactory`. This is used for serializing object literals where the
     *     node name relates to the property key. The array length of `opt_keys` has
     *     to match the length of `values`. For serializing a sequence, `opt_keys`
     *     determines the order of the sequence.
     * @param {T=} opt_this The object to use as `this` for the node factory and
     *     serializers.
     * @return {O|undefined} Object.
     * @template O, T
     */
    function pushSerializeAndPop<O, T>(object: O, serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: (_0: any, _1: any[], _2: any /*undefined*/) => Node, values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): any /*O|any (undefined)*/;
    /**
     * @param {O} object Object.
     * @param {Object.<string, Object.<string, ol.xml.Serializer>>} serializersNS
     *     Namespaced serializers.
     * @param {function(this: T, *, Array.<*>, (string|undefined)): (Node|undefined)} nodeFactory
     *     Node factory. The `nodeFactory` creates the node whose namespace and name
     *     will be used to choose a node writer from `serializersNS`. This
     *     separation allows us to decide what kind of node to create, depending on
     *     the value we want to serialize. An example for this would be different
     *     geometry writers based on the geometry type.
     * @param {Array.<*>} values Values to serialize. An example would be an array
     *     of {@link ol.Feature} instances.
     * @param {Array.<*>} objectStack Node stack.
     * @param {Array.<string>=} opt_keys Keys of the `values`. Will be passed to the
     *     `nodeFactory`. This is used for serializing object literals where the
     *     node name relates to the property key. The array length of `opt_keys` has
     *     to match the length of `values`. For serializing a sequence, `opt_keys`
     *     determines the order of the sequence.
     * @param {T=} opt_this The object to use as `this` for the node factory and
     *     serializers.
     * @return {O|undefined} Object.
     * @template O, T
     */
    function pushSerializeAndPop<O, T>(object: O, serializersNS: { [key: string]: { [key: string]: Serializer } }, nodeFactory: (_0: any, _1: any[], _2: any /*undefined*/) => any /*undefined*/, values: any[], objectStack: any[], opt_keys?: string[], opt_this?: T): any /*O|any (undefined)*/;
}

declare module ol.ImageUrlFunction {

    /**
     * @param {string} baseUrl Base URL (may have query data).
     * @param {Object.<string,*>} params to encode in the URL.
     * @param {function(string, Object.<string,*>, ol.Extent, ol.Size,
     *     ol.proj.Projection): (string|undefined)} paramsFunction params function.
     * @return {ol.ImageUrlFunctionType} Image URL function.
     */
    function createFromParamsFunction(baseUrl: string, params: { [key: string]: any }, paramsFunction: (_0: string, _1: { [key: string]: any }, _2: Extent, _3: Size, _4: proj.Projection) => string): ImageUrlFunctionType;
    /**
     * @param {string} baseUrl Base URL (may have query data).
     * @param {Object.<string,*>} params to encode in the URL.
     * @param {function(string, Object.<string,*>, ol.Extent, ol.Size,
     *     ol.proj.Projection): (string|undefined)} paramsFunction params function.
     * @return {ol.ImageUrlFunctionType} Image URL function.
     */
    function createFromParamsFunction(baseUrl: string, params: { [key: string]: any }, paramsFunction: (_0: string, _1: { [key: string]: any }, _2: Extent, _3: Size, _4: proj.Projection) => any /*undefined*/): ImageUrlFunctionType;

    /**
     * @this {ol.source.Image}
     * @param {ol.Extent} extent Extent.
     * @param {ol.Size} size Size.
     * @return {string|undefined} Image URL.
     */
    function nullImageUrlFunction(extent: any /* jsdoc error */, size: any /* jsdoc error */): void;
}

declare module ol.ext {

    /** @typedef {function(*)} */
    interface rbush {
        (_0: any): any /*missing*/
    }
}

declare module ol.loadingstrategy {

    /**
     * Strategy function for loading all features with a single request.
     * @param {ol.Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @return {Array.<ol.Extent>} Extents.
     * @api
     */
    function all(extent: Extent, resolution: number): Extent[];

    /**
     * Strategy function for loading features based on the view's extent and
     * resolution.
     * @param {ol.Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @return {Array.<ol.Extent>} Extents.
     * @api
     */
    function bbox(extent: Extent, resolution: number): Extent[];

    /**
     * Creates a strategy function for loading features based on a tile grid.
     * @param {ol.tilegrid.TileGrid} tileGrid Tile grid.
     * @return {function(ol.Extent, number): Array.<ol.Extent>} Loading strategy.
     * @api
     */
    function createTile(tileGrid: tilegrid.TileGrid): (_0: Extent, _1: number) => Extent[];
}

declare module ol.TileUrlFunction {

    /**
     * @param {string} template Template.
     * @return {ol.TileUrlFunctionType} Tile URL function.
     */
    function createFromTemplate(template: string): TileUrlFunctionType;

    /**
     * @param {Array.<string>} templates Templates.
     * @return {ol.TileUrlFunctionType} Tile URL function.
     */
    function createFromTemplates(templates: string[]): TileUrlFunctionType;

    /**
     * @param {Array.<ol.TileUrlFunctionType>} tileUrlFunctions Tile URL Functions.
     * @return {ol.TileUrlFunctionType} Tile URL function.
     */
    function createFromTileUrlFunctions(tileUrlFunctions: TileUrlFunctionType[]): TileUrlFunctionType;

    /**
     * @param {ol.TileCoord} tileCoord Tile coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {ol.proj.Projection} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function nullTileUrlFunction(tileCoord: TileCoord, pixelRatio: number, projection: proj.Projection): any /*string|any (undefined)*/;

    /**
     * @param {ol.TileCoordTransformType} transformFn Transform function.
     * @param {ol.TileUrlFunctionType} tileUrlFunction Tile URL function.
     * @return {ol.TileUrlFunctionType} Tile URL function.
     */
    function withTileCoordTransform(transformFn: TileCoordTransformType, tileUrlFunction: TileUrlFunctionType): TileUrlFunctionType;

    /**
     * @param {string} url URL.
     * @return {Array.<string>} Array of urls.
     */
    function expandUrl(url: string): string[];
}

declare module ol.tilegrid.WMTS {

    /**
     * @param {Object} matrixSet An object representing a matrixSet in the
     *     capabilities document.
     * @return {ol.tilegrid.WMTS} WMTS tileGrid instance.
     */
    function createFromCapabilitiesMatrixSet(matrixSet: Object): WMTS;
}
