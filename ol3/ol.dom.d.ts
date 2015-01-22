/// <reference path="../lib/definitely-typed/closure-library/closure/goog/vec/mat4.d.ts" />

declare module ol.dom {

    class Input extends Input.__Class { }
    module Input {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.Object.__Class {
    
            /**
             * @classdesc
             * Helper class for binding HTML input to an {@link ol.Object}.
             *
             * Example:
             *
             *     // bind a checkbox with id 'visible' to a layer's visibility
             *     var visible = new ol.dom.Input(document.getElementById('visible'));
             *     visible.bindTo('checked', layer, 'visible');
             *
             * @constructor
             * @extends {ol.Object}
             * @param {Element} target Target element.
             * @api
             */
            constructor(target: Element);
    
            /**
             * If the input is a checkbox, return whether or not the checkbox is checked.
             * @return {boolean|undefined} The checked state of the Input.
             * @observable
             * @api
             */
            getChecked(): any /*boolean|any (undefined)*/;
    
            /**
             * Get the value of the input.
             * @return {string|undefined} The value of the Input.
             * @observable
             * @api
             */
            getValue(): any /*string|any (undefined)*/;
    
            /**
             * Sets the value of the input.
             * @param {string} value The value of the Input.
             * @observable
             * @api
             */
            setValue(value: string): void;
    
            /**
             * Set whether or not a checkbox is checked.
             * @param {boolean} checked The checked state of the Input.
             * @observable
             * @api
             */
            setChecked(checked: boolean): void;
        }
    }

    /**
     * Create an html canvas element and returns its 2d context.
     * @param {number=} opt_width Canvas width.
     * @param {number=} opt_height Canvas height.
     * @return {CanvasRenderingContext2D}
     */
    function createCanvasContext2D(opt_width?: number, opt_height?: number): CanvasRenderingContext2D;

    /**
     * @enum {boolean}
     */
    enum BrowserFeature { USE_MS_MATRIX_TRANSFORM, USE_MS_ALPHA_FILTER } 

    /**
     * Detect 2d transform.
     * Adapted from http://stackoverflow.com/q/5661671/130442
     * http://caniuse.com/#feat=transforms2d
     * @return {boolean}
     */
    function canUseCssTransform(): boolean;

    /**
     * Detect 3d transform.
     * Adapted from http://stackoverflow.com/q/5661671/130442
     * http://caniuse.com/#feat=transforms3d
     * @return {boolean}
     */
    function canUseCssTransform3D(): boolean;

    /**
     * @param {Element} element Element.
     * @param {string} value Value.
     */
    function setTransform(element: Element, value: string): void;

    /**
     * Sets the opacity of an element, in an IE-compatible way
     * @param {!Element} element Element
     * @param {number} value Opacity, [0..1]
     */
    function setOpacity(element: Element, value: number): void;

    /**
     * @param {!Element} element Element.
     * @param {goog.vec.Mat4.Number} transform Matrix.
     * @param {number=} opt_precision Precision.
     * @param {Element=} opt_translationElement Required for IE7-8
     */
    function transformElement2D(element: Element, transform: goog.vec.Mat4.Number, opt_precision?: number, opt_translationElement?: Element): void;

    /**
     * @enum {string}
     */
    enum InputProperty { VALUE, CHECKED } 
}
