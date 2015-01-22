declare module ol.webgl {

    class Shader extends Shader.__Class { }
    module Shader {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {string} source Source.
             * @struct
             */
            constructor(source: string);
    
            /**
             * @return {number} Type.
             */
            getType(): number;
    
            /**
             * @return {string} Source.
             */
            getSource(): string;
    
            /**
             * @return {boolean} Is animated?
             */
            isAnimated(): boolean;
        }
    }

    class Buffer extends Buffer.__Class { }
    module Buffer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             * @param {Array.<number>=} opt_arr Array.
             * @param {number=} opt_usage Usage.
             * @struct
             */
            constructor(opt_arr?: number[], opt_usage?: number);
    
            /**
             * @return {Array.<number>} Array.
             */
            getArray(): number[];
    
            /**
             * @return {number} Usage.
             */
            getUsage(): number;
        }
    }

    class Context extends Context.__Class { }
    module Context {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * @classdesc
             * A WebGL context for accessing low-level WebGL capabilities.
             *
             * @constructor
             * @extends {goog.events.EventTarget}
             * @param {HTMLCanvasElement} canvas Canvas.
             * @param {WebGLRenderingContext} gl GL.
             * @api
             */
            constructor(canvas: HTMLCanvasElement, gl: WebGLRenderingContext);
    
            /**
             * @type {boolean}
             */
            hasOESElementIndexUint: boolean;
    
            /**
             * Just bind the buffer if it's in the cache. Otherwise create
             * the WebGL buffer, bind it, populate it, and add an entry to
             * the cache.
             * @param {number} target Target.
             * @param {ol.webgl.Buffer} buf Buffer.
             */
            bindBuffer(target: number, buf: Buffer): void;
    
            /**
             * @param {ol.webgl.Buffer} buf Buffer.
             */
            deleteBuffer(buf: Buffer): void;
    
            /**
             * @return {HTMLCanvasElement} Canvas.
             */
            getCanvas(): HTMLCanvasElement;
    
            /**
             * @return {WebGLRenderingContext} GL.
             * @api
             */
            getGL(): WebGLRenderingContext;
    
            /**
             * Get shader from the cache if it's in the cache. Otherwise, create
             * the WebGL shader, compile it, and add entry to cache.
             * @param {ol.webgl.Shader} shaderObject Shader object.
             * @return {WebGLShader} Shader.
             */
            getShader(shaderObject: Shader): WebGLShader;
    
            /**
             * Get the program from the cache if it's in the cache. Otherwise create
             * the WebGL program, attach the shaders to it, and add an entry to the
             * cache.
             * @param {ol.webgl.shader.Fragment} fragmentShaderObject Fragment shader.
             * @param {ol.webgl.shader.Vertex} vertexShaderObject Vertex shader.
             * @return {WebGLProgram} Program.
             */
            getProgram(fragmentShaderObject: shader.Fragment, vertexShaderObject: shader.Vertex): WebGLProgram;
    
            /**
             * FIXME empy description for jsdoc
             */
            handleWebGLContextLost(): void;
    
            /**
             * FIXME empy description for jsdoc
             */
            handleWebGLContextRestored(): void;
    
            /**
             * Just return false if that program is used already. Other use
             * that program (call `gl.useProgram`) and make it the "current
             * program".
             * @param {WebGLProgram} program Program.
             * @return {boolean} Changed.
             * @api
             */
            useProgram(program: WebGLProgram): boolean;
        }
    }

    /**
     * @enum {string}
     */
    enum WebGLContextEventType { LOST, RESTORED } 

    /**
     * @param {HTMLCanvasElement} canvas Canvas.
     * @param {Object=} opt_attributes Attributes.
     * @return {WebGLRenderingContext} WebGL rendering context.
     */
    function getContext(canvas: HTMLCanvasElement, opt_attributes?: Object): WebGLRenderingContext;

    /**
     * @enum {number}
     */
    enum BufferUsage { STATIC_DRAW, STREAM_DRAW, DYNAMIC_DRAW } 

    /**
     * @typedef {{buf: ol.webgl.Buffer,
     *            buffer: WebGLBuffer}}
     */
    interface BufferCacheEntry {
        buf: Buffer;
        buffer: WebGLBuffer;
    }
}

declare module ol.webgl.shader {

    class Fragment extends Fragment.__Class { }
    module Fragment {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Shader.__Class {
    
            /**
             * @constructor
             * @extends {ol.webgl.Shader}
             * @param {string} source Source.
             * @struct
             */
            constructor(source: string);
        }
    }

    class Vertex extends Vertex.__Class { }
    module Vertex {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Shader.__Class {
    
            /**
             * @constructor
             * @extends {ol.webgl.Shader}
             * @param {string} source Source.
             * @struct
             */
            constructor(source: string);
        }
    }
}
