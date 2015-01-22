
declare module oli {

    interface CollectionEvent {
    
        /**
          * @type {*}
          */
        element: any;
    }

    interface DragBoxEvent {
    
        /**
          * @type {ol.Coordinate}
          */
        coordinate: ol.Coordinate;
    }

    interface DrawEvent {
    
        /**
          * @type {ol.Feature}
          */
        feature: ol.Feature;
    }

    interface ObjectEvent {
    
        /**
          * @type {string}
          */
        key: string;
    
        /**
          * @type {*}
          */
        oldValue: any;
    }

    interface MapBrowserEvent {
    
        /**
          * @type {ol.Coordinate}
          */
        coordinate: ol.Coordinate;
    
        /**
          * @type {Event}
          */
        originalEvent: Event;
    
        /**
          * @type {ol.Pixel}
          */
        pixel: ol.Pixel;
    }

    interface MapEvent {
    
        /**
          * @type {ol.Map}
          */
        map: ol.Map;
    
        /**
          * @type {olx.FrameState}
          */
        frameState: olx.FrameState;
    }

    /**
     * @type {Object}
     */
    var control: Object;

    /**
     * @type {Object}
     */
    var interaction: Object;

    /**
     * @type {Object}
     */
    var render: Object;

    /**
     * @type {Object}
     */
    var source: Object;
}

declare module oli.control {

    interface Control {
    
        /**
          * @param {ol.Map} map Map.
          * @return {undefined} Undefined.
          */
        setMap(map: ol.Map): any /*undefined*/;
    }
}

declare module oli.interaction {

    interface DragAndDropEvent {
    
        /**
          * @type {Array.<ol.Feature>|undefined}
          */
        features: any /*ol.Feature[]|any (undefined)*/;
    
        /**
          * @type {ol.proj.Projection|undefined}
          */
        projection: any /*ol.proj.Projection|any (undefined)*/;
    
        /**
          * @type {File}
          */
        file: File;
    }
}

declare module oli.render {

    interface Event {
    
        /**
          * @type {CanvasRenderingContext2D|null|undefined}
          */
        context: any /*CanvasRenderingContext2D|any (null)|any (undefined)*/;
    
        /**
          * @type {olx.FrameState|undefined}
          */
        frameState: any /*olx.FrameState|any (undefined)*/;
    
        /**
          * @type {ol.webgl.Context|null|undefined}
          */
        glContext: any /*ol.webgl.Context|any (null)|any (undefined)*/;
    
        /**
          * @type {ol.render.IVectorContext|undefined}
          */
        vectorContext: any /*ol.render.IVectorContext|any (undefined)*/;
    }
}

declare module oli.source {

    interface VectorEvent {
    
        /**
          * @type {ol.Feature}
          */
        feature: ol.Feature;
    }
}
