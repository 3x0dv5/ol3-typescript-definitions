
declare module ol.pointer {

    class PointerEvent extends PointerEvent.__Class { }
    module PointerEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class {
    
            /**
             * A class for pointer events.
             *
             * This class is used as an abstraction for mouse events,
             * touch events and even native pointer events.
             *
             * @constructor
             * @extends {goog.events.Event}
             * @param {string} type The type of the event to create.
             * @param {goog.events.BrowserEvent} browserEvent
             * @param {Object.<string, ?>=} opt_eventDict An optional dictionary of
             *    initial event properties.
             */
            constructor(type: string, browserEvent: goog.events.BrowserEvent, opt_eventDict: any /*missing*/);
    
            /**
             * @const
             * @type {goog.events.BrowserEvent}
             */
            browserEvent: goog.events.BrowserEvent;
    
            /**
             * @type {number}
             */
            buttons: number;
    
            /**
             * @type {number}
             */
            pressure: number;
    
            /**
             * @type {boolean}
             */
            bubbles: boolean;
    
            /**
             * @type {boolean}
             */
            cancelable: boolean;
    
            /**
             * @type {Object}
             */
            view: Object;
    
            /**
             * @type {number}
             */
            detail: number;
    
            /**
             * @type {number}
             */
            screenX: number;
    
            /**
             * @type {number}
             */
            screenY: number;
    
            /**
             * @type {number}
             */
            clientX: number;
    
            /**
             * @type {number}
             */
            clientY: number;
    
            /**
             * @type {boolean}
             */
            ctrlKey: boolean;
    
            /**
             * @type {boolean}
             */
            altKey: boolean;
    
            /**
             * @type {boolean}
             */
            shiftKey: boolean;
    
            /**
             * @type {boolean}
             */
            metaKey: boolean;
    
            /**
             * @type {number}
             */
            button: number;
    
            /**
             * @type {Node}
             */
            relatedTarget: Node;
    
            /**
             * @const
             * @type {number}
             */
            pointerId: number;
    
            /**
             * @type {number}
             */
            width: number;
    
            /**
             * @type {number}
             */
            height: number;
    
            /**
             * @type {number}
             */
            tiltX: number;
    
            /**
             * @type {number}
             */
            tiltY: number;
    
            /**
             * @type {string}
             */
            pointerType: string;
    
            /**
             * @type {number}
             */
            hwTimestamp: number;
    
            /**
             * @type {boolean}
             */
            isPrimary: boolean;
        }
    }

    class EventSource extends EventSource.__Class { }
    module EventSource {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @param {ol.pointer.PointerEventHandler} dispatcher
             * @param {Object.<string, function(goog.events.BrowserEvent)>} mapping
             * @constructor
             */
            constructor(dispatcher: PointerEventHandler, mapping: { [key: string]: (_0: goog.events.BrowserEvent) => any /*missing*/ });
    
            /**
             * @type {ol.pointer.PointerEventHandler}
             */
            dispatcher: PointerEventHandler;
    
            /**
             * List of events supported by this source.
             * @return {Array.<string>} Event names
             */
            getEvents(): string[];
    
            /**
             * Returns a mapping between the supported event types and
             * the handlers that should handle an event.
             * @return {Object.<string, function(goog.events.BrowserEvent)>}
             *         Event/Handler mapping
             */
            getMapping(): { [key: string]: (_0: goog.events.BrowserEvent) => any /*missing*/ };
    
            /**
             * Returns the handler that should handle a given event type.
             * @param {string} eventType
             * @return {function(goog.events.BrowserEvent)} Handler
             */
            getHandlerForEvent(eventType: string): (_0: goog.events.BrowserEvent) => any /*missing*/;
        }
    }

    class MouseSource extends MouseSource.__Class { }
    module MouseSource {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends EventSource.__Class {
    
            /**
             * @param {ol.pointer.PointerEventHandler} dispatcher
             * @constructor
             * @extends {ol.pointer.EventSource}
             */
            constructor(dispatcher: PointerEventHandler);
    
            /**
             * @const
             * @type {Object.<string, goog.events.BrowserEvent|Object>}
             */
            pointerMap: { [key: string]: any /*goog.events.BrowserEvent|Object*/ };
    
            /**
             * @const
             * @type {Array.<ol.Pixel>}
             */
            lastTouches: ol.Pixel[];
    
            /**
             * Handler for `mousedown`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            mousedown(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `mousemove`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            mousemove(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `mouseup`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            mouseup(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `mouseover`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            mouseover(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `mouseout`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            mouseout(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Dispatches a `pointercancel` event.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            cancel(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Remove the mouse from the list of active pointers.
             */
            cleanupMouse(): void;
        }
    }

    class MsSource extends MsSource.__Class { }
    module MsSource {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends EventSource.__Class {
    
            /**
             * @param {ol.pointer.PointerEventHandler} dispatcher
             * @constructor
             * @extends {ol.pointer.EventSource}
             */
            constructor(dispatcher: PointerEventHandler);
    
            /**
             * @const
             * @type {Object.<string, goog.events.BrowserEvent|Object>}
             */
            pointerMap: { [key: string]: any /*goog.events.BrowserEvent|Object*/ };
    
            /**
             * @const
             * @type {Array.<string>}
             */
            POINTER_TYPES: string[];
    
            /**
             * Remove this pointer from the list of active pointers.
             * @param {number} pointerId
             */
            cleanup(pointerId: number): void;
    
            /**
             * Handler for `msPointerDown`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            msPointerDown(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `msPointerMove`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            msPointerMove(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `msPointerUp`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            msPointerUp(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `msPointerOut`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            msPointerOut(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `msPointerOver`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            msPointerOver(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `msPointerCancel`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            msPointerCancel(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `msLostPointerCapture`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            msLostPointerCapture(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `msGotPointerCapture`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            msGotPointerCapture(inEvent: goog.events.BrowserEvent): void;
        }
    }

    class NativeSource extends NativeSource.__Class { }
    module NativeSource {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends EventSource.__Class {
    
            /**
             * @param {ol.pointer.PointerEventHandler} dispatcher
             * @constructor
             * @extends {ol.pointer.EventSource}
             */
            constructor(dispatcher: PointerEventHandler);
    
            /**
             * Handler for `pointerdown`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            pointerDown(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `pointermove`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            pointerMove(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `pointerup`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            pointerUp(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `pointerout`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            pointerOut(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `pointerover`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            pointerOver(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `pointercancel`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            pointerCancel(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `lostpointercapture`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            lostPointerCapture(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `gotpointercapture`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            gotPointerCapture(inEvent: goog.events.BrowserEvent): void;
        }
    }

    class TouchSource extends TouchSource.__Class { }
    module TouchSource {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends EventSource.__Class {
    
            /**
             * @constructor
             * @param {ol.pointer.PointerEventHandler} dispatcher
             * @param {ol.pointer.MouseSource} mouseSource
             * @extends {ol.pointer.EventSource}
             */
            constructor(dispatcher: PointerEventHandler, mouseSource: MouseSource);
    
            /**
             * @const
             * @type {Object.<string, goog.events.BrowserEvent|Object>}
             */
            pointerMap: { [key: string]: any /*goog.events.BrowserEvent|Object*/ };
    
            /**
             * @const
             * @type {ol.pointer.MouseSource}
             */
            mouseSource: MouseSource;
    
            /**
             * Handler for `touchstart`, triggers `pointerover`,
             * `pointerenter` and `pointerdown` events.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            touchstart(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `touchmove`.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            touchmove(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `touchend`, triggers `pointerup`,
             * `pointerout` and `pointerleave` events.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            touchend(inEvent: goog.events.BrowserEvent): void;
    
            /**
             * Handler for `touchcancel`, triggers `pointercancel`,
             * `pointerout` and `pointerleave` events.
             *
             * @param {goog.events.BrowserEvent} inEvent
             */
            touchcancel(inEvent: goog.events.BrowserEvent): void;
        }
    }

    class PointerEventHandler extends PointerEventHandler.__Class { }
    module PointerEventHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * @constructor
             * @extends {goog.events.EventTarget}
             * @param {Element|HTMLDocument} element Viewport element.
             */
            constructor(element: Element);
            /**
             * @constructor
             * @extends {goog.events.EventTarget}
             * @param {Element|HTMLDocument} element Viewport element.
             */
            constructor(element: HTMLDocument);
    
            /**
             * @const
             * @type {Object.<string, goog.events.BrowserEvent|Object>}
             */
            pointerMap: { [key: string]: any /*goog.events.BrowserEvent|Object*/ };
    
            /**
             * Set up the event sources (mouse, touch and native pointers)
             * that generate pointer events.
             */
            registerSources(): void;
    
            /**
             * Add a new event source that will generate pointer events.
             *
             * @param {string} name A name for the event source
             * @param {ol.pointer.EventSource} source
             */
            registerSource(name: string, source: EventSource): void;
    
            /**
             * Returns a snapshot of inEvent, with writable properties.
             *
             * @param {goog.events.BrowserEvent} browserEvent Browser event.
             * @param {Event|Touch} inEvent An event that contains
             *    properties to copy.
             * @return {Object} An object containing shallow copies of
             *    `inEvent`'s properties.
             */
            cloneEvent(browserEvent: goog.events.BrowserEvent, inEvent: Event): Object;
            /**
             * Returns a snapshot of inEvent, with writable properties.
             *
             * @param {goog.events.BrowserEvent} browserEvent Browser event.
             * @param {Event|Touch} inEvent An event that contains
             *    properties to copy.
             * @return {Object} An object containing shallow copies of
             *    `inEvent`'s properties.
             */
			cloneEvent(browserEvent: goog.events.BrowserEvent, inEvent: any): Object;
    
            /**
             * Triggers a 'pointerdown' event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            down(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a 'pointermove' event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            move(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a 'pointerup' event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            up(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a 'pointerenter' event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            enter(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a 'pointerleave' event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            leave(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a 'pointerover' event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            over(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a 'pointerout' event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            out(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a 'pointercancel' event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            cancel(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a combination of 'pointerout' and 'pointerleave' events.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            leaveOut(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Triggers a combination of 'pointerover' and 'pointerevents' events.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            enterOver(pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Creates a new Event of type `inType`, based on the information in
             * `pointerEventData`.
             *
             * @param {string} inType A string representing the type of event to create.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             * @return {ol.pointer.PointerEvent} A PointerEvent of type `inType`.
             */
            makeEvent(inType: string, pointerEventData: Object, browserEvent: goog.events.BrowserEvent): PointerEvent;
    
            /**
             * Make and dispatch an event in one call.
             * @param {string} inType A string representing the type of event.
             * @param {Object} pointerEventData
             * @param {goog.events.BrowserEvent } browserEvent
             */
            fireEvent(inType: string, pointerEventData: Object, browserEvent: goog.events.BrowserEvent): void;
    
            /**
             * Creates a pointer event from a native pointer event
             * and dispatches this event.
             * @param {goog.events.BrowserEvent} nativeEvent A platform event with a target.
             */
            fireNativeEvent(nativeEvent: goog.events.BrowserEvent): void;
    
            /**
             * Wrap a native mouse event into a pointer event.
             * This proxy method is required for the legacy IE support.
             * @param {string} eventType The pointer event type.
             * @param {goog.events.BrowserEvent} browserEvent
             * @return {ol.pointer.PointerEvent}
             */
            wrapMouseEvent(eventType: string, browserEvent: goog.events.BrowserEvent): PointerEvent;
    
            /**
             * @inheritDoc
             */
            disposeInternal(): void;
        }
    }

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { POINTERMOVE, POINTERDOWN, POINTERUP, POINTEROVER, POINTEROUT, POINTERENTER, POINTERLEAVE, POINTERCANCEL } 

    /**
     * Properties to copy when cloning an event, with default values.
     * @type {Array.<Array>}
     */
    var CLONE_PROPS: any[][];
}


declare module ol.pointer.PointerEvent {

    /**
     * Is the `buttons` property supported?
     * @type {boolean}
     */
    var HAS_BUTTONS: boolean;
}

declare module ol.pointer.MouseSource {

    /**
     * @const
     * @type {number}
     */
    var POINTER_ID: number;

    /**
     * @const
     * @type {string}
     */
    var POINTER_TYPE: string;

    /**
     * Radius around touchend that swallows mouse events.
     *
     * @const
     * @type {number}
     */
    var DEDUP_DIST: number;

    /**
     * Creates a copy of the original event that will be used
     * for the fake pointer event.
     *
     * @param {goog.events.BrowserEvent} inEvent
     * @param {ol.pointer.PointerEventHandler} dispatcher
     * @return {Object}
     */
    function prepareEvent(inEvent: goog.events.BrowserEvent, dispatcher: PointerEventHandler): Object;
}

declare module ol.pointer.TouchSource {

    /**
     * Mouse event timeout: This should be long enough to
     * ignore compat mouse events made by touch.
     * @const
     * @type {number}
     */
    var DEDUP_TIMEOUT: number;

    /**
     * @const
     * @type {number}
     */
    var CLICK_COUNT_TIMEOUT: number;

    /**
     * @const
     * @type {string}
     */
    var POINTER_TYPE: string;
}