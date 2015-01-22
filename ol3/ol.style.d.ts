declare module ol.style {

    class Image extends Image.__Class { }
    module Image {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Abstract base class; used for creating subclasses and not instantiated in
             * apps. Base class for {@link ol.style.Icon} and {@link ol.style.Circle}.
             *
             * @constructor
             * @param {ol.style.ImageOptions} options Options.
             * @api
             */
            constructor(options: ImageOptions);
    
            /**
             * @return {number} Opacity.
             * @api
             */
            getOpacity(): number;
    
            /**
             * @return {boolean} Rotate with map.
             * @api
             */
            getRotateWithView(): boolean;
    
            /**
             * @return {number} Rotation.
             * @api
             */
            getRotation(): number;
    
            /**
             * @return {number} Scale.
             * @api
             */
            getScale(): number;
    
            /**
             * @return {boolean} Snap to pixel?
             * @api
             */
            getSnapToPixel(): boolean;
    
            /**
             * @function
             * @return {Array.<number>} Anchor.
             */
            getAnchor(): number[];
    
            /**
             * @function
             * @param {number} pixelRatio Pixel ratio.
             * @return {HTMLCanvasElement|HTMLVideoElement|Image} Image element.
             * @api
             */
            getImage(pixelRatio: number): any /*HTMLCanvasElement|HTMLVideoElement|Image*/;
    
            /**
             * @param {number} pixelRatio Pixel ratio.
             * @return {HTMLCanvasElement|HTMLVideoElement|Image} Image element.
             */
            getHitDetectionImage(pixelRatio: number): any /*HTMLCanvasElement|HTMLVideoElement|Image*/;
    
            /**
             * @return {ol.style.ImageState} Image state.
             */
            getImageState(): style.ImageState;
    
            /**
             * @return {ol.Size} Image size.
             */
            getImageSize(): ol.Size;
    
            /**
             * @return {ol.Size} Size of the hit-detection image.
             */
            getHitDetectionImageSize(): ol.Size;
    
            /**
             * @function
             * @return {Array.<number>} Origin.
             */
            getOrigin(): number[];
    
            /**
             * @function
             * @return {Array.<number>} Origin for the hit-detection image.
             */
            getHitDetectionOrigin(): number[];
    
            /**
             * @function
             * @return {ol.Size} Size.
             */
            getSize(): ol.Size;
    
            /**
             * Set the opacity.
             *
             * @param {number} opacity Opacity.
             */
            setOpacity(opacity: number): void;
    
            /**
             * Set whether to rotate the style with the view.
             *
             * @param {boolean} rotateWithView Rotate with map.
             */
            setRotateWithView(rotateWithView: boolean): void;
    
            /**
             * Set the rotation.
             *
             * @param {number} rotation Rotation.
             * @api
             */
            setRotation(rotation: number): void;
    
            /**
             * Set the scale.
             *
             * @param {number} scale Scale.
             * @api
             */
            setScale(scale: number): void;
    
            /**
             * Set whether to snap the image to the closest pixel.
             *
             * @param {boolean} snapToPixel Snap to pixel?
             */
            setSnapToPixel(snapToPixel: boolean): void;
    
            /**
             * @param {function(this: T, goog.events.Event)} listener Listener function.
             * @param {T} thisArg Value to use as `this` when executing `listener`.
             * @return {goog.events.Key|undefined} Listener key.
             * @template T
             */
            listenImageChange<T>(listener: (_0: goog.events.Event) => any /*missing*/, thisArg: T): any /*goog.events.Key|any (undefined)*/;
    
            /**
             * Load not yet loaded URI.
             */
            load(): void;
    
            /**
             * @param {function(this: T, goog.events.Event)} listener Listener function.
             * @param {T} thisArg Value to use as `this` when executing `listener`.
             * @template T
             */
            unlistenImageChange<T>(listener: (_0: goog.events.Event) => any /*missing*/, thisArg: T): void;
        }
    }

    class Icon extends Icon.__Class { }
    module Icon {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Image.__Class {
    
            /**
             * @classdesc
             * Set icon style for vector features.
             *
             * @constructor
             * @param {olx.style.IconOptions=} opt_options Options.
             * @extends {ol.style.Image}
             * @api
             */
            constructor(opt_options?: olx.style.IconOptions);
    
            /**
             * @param {number} pixelRatio Pixel ratio.
             * @return {Image} Image element.
             * @api
             */
            getImage(pixelRatio: number): Image;
    
            /**
             * Real Image size used.
             * @return {ol.Size} Size.
             */
            getImageSize(): ol.Size;
    
            /**
             * @return {string|undefined} Image src.
             * @api
             */
            getSrc(): any /*string|any (undefined)*/;
    
           
    
        }
    }

    class IconImage_ extends IconImage_.__Class { }
    module IconImage_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * @constructor
             * @param {Image} image Image.
             * @param {string|undefined} src Src.
             * @param {?string} crossOrigin Cross origin.
             * @param {ol.style.ImageState} imageState Image state.
             * @extends {goog.events.EventTarget}
             * @private
             */
            constructor(image: Image, src: string, crossOrigin: string, imageState: style.ImageState);
            /**
             * @constructor
             * @param {Image} image Image.
             * @param {string|undefined} src Src.
             * @param {?string} crossOrigin Cross origin.
             * @param {ol.style.ImageState} imageState Image state.
             * @extends {goog.events.EventTarget}
             * @private
             */
            constructor(image: Image, src: any /*undefined*/, crossOrigin: string, imageState: style.ImageState);
    
            /**
             * @param {number} pixelRatio Pixel ratio.
             * @return {Image} Image element.
             */
            getImage(pixelRatio: number): Image;
    
            /**
             * @return {ol.style.ImageState} Image state.
             */
            getImageState(): style.ImageState;
    
            /**
             * @param {number} pixelRatio Pixel ratio.
             * @return {Image|HTMLCanvasElement} Image element.
             */
            getHitDetectionImage(pixelRatio: number): any /*Image|HTMLCanvasElement*/;
    
            /**
             * @return {ol.Size} Image size.
             */
            getSize(): ol.Size;
    
            /**
             * @return {string|undefined} Image src.
             */
            getSrc(): any /*string|any (undefined)*/;
    
            /**
             * Load not yet loaded URI.
             */
            load(): void;
        }
    }

    class IconImageCache extends IconImageCache.__Class { }
    module IconImageCache {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @constructor
             */
            constructor();
    
            /**
             * FIXME empty description for jsdoc
             */
            clear(): void;
    
            /**
             * FIXME empty description for jsdoc
             */
            expire(): void;
    
            /**
             * @param {string} src Src.
             * @param {?string} crossOrigin Cross origin.
             * @return {ol.style.IconImage_} Icon image.
             */
            get(src: string, crossOrigin: string): IconImage_;
    
            /**
             * @param {string} src Src.
             * @param {?string} crossOrigin Cross origin.
             * @param {ol.style.IconImage_} iconImage Icon image.
             */
            set(src: string, crossOrigin: string, iconImage: IconImage_): void;
        }
    }

    class Stroke extends Stroke.__Class { }
    module Stroke {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements ol.structs.IHasChecksum {
    
            /**
             * @classdesc
             * Set stroke style for vector features.
             * Note that the defaults given are the Canvas defaults, which will be used if
             * option is not defined. The `get` functions return whatever was entered in
             * the options; they will not return the default.
             *
             * @constructor
             * @param {olx.style.StrokeOptions=} opt_options Options.
             * @implements {ol.structs.IHasChecksum}
             * @api
             */
            constructor(opt_options?: olx.style.StrokeOptions);
    
            /**
             * @return {ol.Color|string} Color.
             * @api
             */
            getColor(): any /*ol.Color|string*/;
    
            /**
             * @return {string|undefined} Line cap.
             * @api
             */
            getLineCap(): any /*string|any (undefined)*/;
    
            /**
             * @return {Array.<number>} Line dash.
             * @api
             */
            getLineDash(): number[];
    
            /**
             * @return {string|undefined} Line join.
             * @api
             */
            getLineJoin(): any /*string|any (undefined)*/;
    
            /**
             * @return {number|undefined} Miter limit.
             * @api
             */
            getMiterLimit(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} Width.
             * @api
             */
            getWidth(): any /*number|any (undefined)*/;
    
            /**
             * Set the color.
             *
             * @param {ol.Color|string} color Color.
             * @api
             */
            setColor(color: ol.Color): void;
            /**
             * Set the color.
             *
             * @param {ol.Color|string} color Color.
             * @api
             */
            setColor(color: string): void;
    
            /**
             * Set the line cap.
             *
             * @param {string|undefined} lineCap Line cap.
             * @api
             */
            setLineCap(lineCap: string): void;
            /**
             * Set the line cap.
             *
             * @param {string|undefined} lineCap Line cap.
             * @api
             */
            setLineCap(lineCap: any /*undefined*/): void;
    
            /**
             * Set the line dash.
             *
             * @param {Array.<number>} lineDash Line dash.
             * @api
             */
            setLineDash(lineDash: number[]): void;
    
            /**
             * Set the line join.
             *
             * @param {string|undefined} lineJoin Line join.
             * @api
             */
            setLineJoin(lineJoin: string): void;
            /**
             * Set the line join.
             *
             * @param {string|undefined} lineJoin Line join.
             * @api
             */
            setLineJoin(lineJoin: any /*undefined*/): void;
    
            /**
             * Set the miter limit.
             *
             * @param {number|undefined} miterLimit Miter limit.
             * @api
             */
            setMiterLimit(miterLimit: number): void;
            /**
             * Set the miter limit.
             *
             * @param {number|undefined} miterLimit Miter limit.
             * @api
             */
            setMiterLimit(miterLimit: any /*undefined*/): void;
    
            /**
             * Set the width.
             *
             * @param {number|undefined} width Width.
             * @api
             */
            setWidth(width: number): void;
            /**
             * Set the width.
             *
             * @param {number|undefined} width Width.
             * @api
             */
            setWidth(width: any /*undefined*/): void;
    
            /**
             * @return {string} The checksum.
             */
            getChecksum(): string;
        }
    }

    class Fill extends Fill.__Class { }
    module Fill {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements ol.structs.IHasChecksum {
    
            /**
             * @classdesc
             * Set fill style for vector features.
             *
             * @constructor
             * @param {olx.style.FillOptions=} opt_options Options.
             * @implements {ol.structs.IHasChecksum}
             * @api
             */
            constructor(opt_options?: olx.style.FillOptions);
    
            /**
             * @return {ol.Color|string} Color.
             * @api
             */
            getColor(): any /*ol.Color|string*/;
    
            /**
             * Set the color.
             *
             * @param {ol.Color|string} color Color.
             * @api
             */
            setColor(color: ol.Color): void;
            /**
             * Set the color.
             *
             * @param {ol.Color|string} color Color.
             * @api
             */
            setColor(color: string): void;
    
            /**
             * @return {string} The checksum.
             */
            getChecksum(): string;
        }
    }

    class Circle extends Circle.__Class { }
    module Circle {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Image.__Class implements ol.structs.IHasChecksum {
    
            /**
             * @classdesc
             * Set circle style for vector features.
             *
             * @constructor
             * @param {olx.style.CircleOptions=} opt_options Options.
             * @extends {ol.style.Image}
             * @implements {ol.structs.IHasChecksum}
             * @api
             */
            constructor(opt_options?: olx.style.CircleOptions);
    
            /**
             * @return {ol.style.Fill} Fill style.
             * @api
             */
            getFill(): Fill;
    
            /**
             * @param {number} pixelRatio Pixel ratio.
             * @return {HTMLCanvasElement} Canvas element.
             * @api
             */
            getImage(pixelRatio: number): HTMLCanvasElement;
    
            /**
             * @return {number} Radius.
             * @api
             */
            getRadius(): number;
    
            /**
             * @return {ol.style.Stroke} Stroke style.
             * @api
             */
            getStroke(): Stroke;
    
            /**
             * @return {string} The checksum.
             */
            getChecksum(): string;
        }
    }

    class Style extends Style.__Class { }
    module Style {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Container for vector feature rendering styles. Any changes made to the style
             * or its children through `set*()` methods will not take effect until the
             * feature, layer or FeatureOverlay that uses the style is re-rendered.
             *
             * @constructor
             * @param {olx.style.StyleOptions=} opt_options Style options.
             * @api
             */
            constructor(opt_options?: olx.style.StyleOptions);
    
            /**
             * @return {string|ol.geom.Geometry|ol.style.GeometryFunction}
             * Feature property or geometry or function that returns the geometry that will
             * be rendered with this style.
             * @api
             */
            getGeometry(): any /*string|ol.geom.Geometry|ol.style.GeometryFunction*/;
    
            /**
             * @return {!ol.style.GeometryFunction} Function that is called with a feature
             * and returns the geometry to render instead of the feature's geometry.
             * @api
             */
            getGeometryFunction(): GeometryFunction;
    
            /**
             * @return {ol.style.Fill} Fill style.
             * @api
             */
            getFill(): Fill;
    
            /**
             * @return {ol.style.Image} Image style.
             * @api
             */
            getImage(): Image;
    
            /**
             * @return {ol.style.Stroke} Stroke style.
             * @api
             */
            getStroke(): Stroke;
    
            /**
             * @return {ol.style.Text} Text style.
             * @api
             */
            getText(): Text;
    
            /**
             * @return {number|undefined} ZIndex.
             * @api
             */
            getZIndex(): any /*number|any (undefined)*/;
    
            /**
             * Set a geometry that is rendered instead of the feature's geometry.
             *
             * @param {string|ol.geom.Geometry|ol.style.GeometryFunction} geometry
             *     Feature property or geometry or function returning a geometry to render
             *     for this style.
             * @api
             */
            setGeometry(geometry: string): void;
            /**
             * Set a geometry that is rendered instead of the feature's geometry.
             *
             * @param {string|ol.geom.Geometry|ol.style.GeometryFunction} geometry
             *     Feature property or geometry or function returning a geometry to render
             *     for this style.
             * @api
             */
            setGeometry(geometry: ol.geom.Geometry): void;
            /**
             * Set a geometry that is rendered instead of the feature's geometry.
             *
             * @param {string|ol.geom.Geometry|ol.style.GeometryFunction} geometry
             *     Feature property or geometry or function returning a geometry to render
             *     for this style.
             * @api
             */
            setGeometry(geometry: GeometryFunction): void;
    
            /**
             * Set the zIndex.
             *
             * @param {number|undefined} zIndex ZIndex.
             * @api
             */
            setZIndex(zIndex: number): void;
            /**
             * Set the zIndex.
             *
             * @param {number|undefined} zIndex ZIndex.
             * @api
             */
            setZIndex(zIndex: any /*undefined*/): void;
        }
    }

    class Text extends Text.__Class { }
    module Text {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Set text style for vector features.
             *
             * @constructor
             * @param {olx.style.TextOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.style.TextOptions);
    
            /**
             * @return {string|undefined} Font.
             * @api
             */
            getFont(): any /*string|any (undefined)*/;
    
            /**
             * @return {number} Horizontal text offset.
             * @api
             */
            getOffsetX(): number;
    
            /**
             * @return {number} Vertical text offset.
             * @api
             */
            getOffsetY(): number;
    
            /**
             * @return {ol.style.Fill} Fill style.
             * @api
             */
            getFill(): Fill;
    
            /**
             * @return {number|undefined} Rotation.
             * @api
             */
            getRotation(): any /*number|any (undefined)*/;
    
            /**
             * @return {number|undefined} Scale.
             * @api
             */
            getScale(): any /*number|any (undefined)*/;
    
            /**
             * @return {ol.style.Stroke} Stroke style.
             * @api
             */
            getStroke(): Stroke;
    
            /**
             * @return {string|undefined} Text.
             * @api
             */
            getText(): any /*string|any (undefined)*/;
    
            /**
             * @return {string|undefined} Text align.
             * @api
             */
            getTextAlign(): any /*string|any (undefined)*/;
    
            /**
             * @return {string|undefined} Text baseline.
             * @api
             */
            getTextBaseline(): any /*string|any (undefined)*/;
    
            /**
             * Set the font.
             *
             * @param {string|undefined} font Font.
             * @api
             */
            setFont(font: string): void;
            /**
             * Set the font.
             *
             * @param {string|undefined} font Font.
             * @api
             */
            setFont(font: any /*undefined*/): void;
    
            /**
             * Set the x offset.
             *
             * @param {number} offsetX Horizontal text offset.
             */
            setOffsetX(offsetX: number): void;
    
            /**
             * Set the y offset.
             *
             * @param {number} offsetY Vertical text offset.
             */
            setOffsetY(offsetY: number): void;
    
            /**
             * Set the fill.
             *
             * @param {ol.style.Fill} fill Fill style.
             * @api
             */
            setFill(fill: Fill): void;
    
            /**
             * Set the rotation.
             *
             * @param {number|undefined} rotation Rotation.
             * @api
             */
            setRotation(rotation: number): void;
            /**
             * Set the rotation.
             *
             * @param {number|undefined} rotation Rotation.
             * @api
             */
            setRotation(rotation: any /*undefined*/): void;
    
            /**
             * Set the scale.
             *
             * @param {number|undefined} scale Scale.
             * @api
             */
            setScale(scale: number): void;
            /**
             * Set the scale.
             *
             * @param {number|undefined} scale Scale.
             * @api
             */
            setScale(scale: any /*undefined*/): void;
    
            /**
             * Set the stroke.
             *
             * @param {ol.style.Stroke} stroke Stroke style.
             * @api
             */
            setStroke(stroke: Stroke): void;
    
            /**
             * Set the text.
             *
             * @param {string|undefined} text Text.
             * @api
             */
            setText(text: string): void;
            /**
             * Set the text.
             *
             * @param {string|undefined} text Text.
             * @api
             */
            setText(text: any /*undefined*/): void;
    
            /**
             * Set the text alignment.
             *
             * @param {string|undefined} textAlign Text align.
             * @api
             */
            setTextAlign(textAlign: string): void;
            /**
             * Set the text alignment.
             *
             * @param {string|undefined} textAlign Text align.
             * @api
             */
            setTextAlign(textAlign: any /*undefined*/): void;
    
            /**
             * Set the text baseline.
             *
             * @param {string|undefined} textBaseline Text baseline.
             * @api
             */
            setTextBaseline(textBaseline: string): void;
            /**
             * Set the text baseline.
             *
             * @param {string|undefined} textBaseline Text baseline.
             * @api
             */
            setTextBaseline(textBaseline: any /*undefined*/): void;
        }
    }

    class AtlasManager extends AtlasManager.__Class { }
    module AtlasManager {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Manages the creation of image atlases.
             *
             * Images added to this manager will be inserted into an atlas, which
             * will be used for rendering.
             * The `size` given in the constructor is the size for the first
             * atlas. After that, when new atlases are created, they will have
             * twice the size as the latest atlas (until `maxSize` is reached).
             *
             * If an application uses many images or very large images, it is recommended
             * to set a higher `size` value to avoid the creation of too many atlases.
             *
             * @constructor
             * @struct
             * @api
             * @param {olx.style.AtlasManagerOptions=} opt_options Options.
             */
            constructor(opt_options?: olx.style.AtlasManagerOptions);
    
            /**
             * @param {string} id The identifier of the entry to check.
             * @return {?ol.style.AtlasManagerInfo} The position and atlas image for the
             *    entry, or `null` if the entry is not part of the atlas manager.
             */
            getInfo(id: string): AtlasManagerInfo;
    
            /**
             * Add an image to the atlas manager.
             *
             * If an entry for the given id already exists, the entry will
             * be overridden (but the space on the atlas graphic will not be freed).
             *
             * If `renderHitCallback` is provided, the image (or the hit-detection version
             * of the image) will be rendered into a separate hit-detection atlas image.
             *
             * @param {string} id The identifier of the entry to add.
             * @param {number} width The width.
             * @param {number} height The height.
             * @param {function(CanvasRenderingContext2D, number, number)} renderCallback
             *    Called to render the new image onto an atlas image.
             * @param {function(CanvasRenderingContext2D, number, number)=}
             *    opt_renderHitCallback Called to render a hit-detection image onto a hit
             *    detection atlas image.
             * @param {Object=} opt_this Value to use as `this` when executing
             *    `renderCallback` and `renderHitCallback`.
             * @return {?ol.style.AtlasManagerInfo}  The position and atlas image for the
             *    entry, or `null` if the image is too big.
             */
            add(id: string, width: number, height: number, renderCallback: (_0: CanvasRenderingContext2D, _1: number, _2: number) => any /*missing*/, opt_renderHitCallback?: (_0: CanvasRenderingContext2D, _1: number, _2: number) => any /*missing*/, opt_this?: Object): AtlasManagerInfo;
        }
    }

    class Atlas extends Atlas.__Class { }
    module Atlas {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * This class facilitates the creation of image atlases.
             *
             * Images added to an atlas will be rendered onto a single
             * atlas canvas. The distribution of images on the canvas is
             * managed with the bin packing algorithm described in:
             * http://www.blackpawn.com/texts/lightmaps/
             *
             * @constructor
             * @struct
             * @param {number} size The size in pixels of the sprite image.
             * @param {number} space The space in pixels between images.
             *    Because texture coordinates are float values, the edges of
             *    images might not be completely correct (in a way that the
             *    edges overlap when being rendered). To avoid this we add a
             *    padding around each image.
             */
            constructor(size: number, space: number);
    
            /**
             * @param {string} id The identifier of the entry to check.
             * @return {?ol.style.AtlasInfo}
             */
            get(id: string): AtlasInfo;
    
            /**
             * @param {string} id The identifier of the entry to add.
             * @param {number} width The width.
             * @param {number} height The height.
             * @param {function(CanvasRenderingContext2D, number, number)} renderCallback
             *    Called to render the new image onto an atlas image.
             * @param {Object=} opt_this Value to use as `this` when executing
             *    `renderCallback`.
             * @return {?ol.style.AtlasInfo} The position and atlas image for the entry.
             */
            add(id: string, width: number, height: number, renderCallback: (_0: CanvasRenderingContext2D, _1: number, _2: number) => any /*missing*/, opt_this?: Object): AtlasInfo;
        }
    }

    class RegularShape extends RegularShape.__Class { }
    module RegularShape {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Image.__Class implements ol.structs.IHasChecksum {
    
            /**
             * @classdesc
             * Set regular shape style for vector features. The resulting shape will be
             * a regular polygon when `radius` is provided, or a star when `radius1` and
             * `radius2` are provided.
             *
             * @constructor
             * @param {olx.style.RegularShapeOptions} options Options.
             * @extends {ol.style.Image}
             * @implements {ol.structs.IHasChecksum}
             * @api
             */
            constructor(options: olx.style.RegularShapeOptions);
    
            /**
             * @return {number} Shape's rotation in radians.
             * @api
             */
            getAngle(): number;
    
            /**
             * @return {ol.style.Fill} Fill style.
             * @api
             */
            getFill(): Fill;
    
            /**
             * @return {number} Number of points for stars and regular polygons.
             * @api
             */
            getPoints(): number;
    
            /**
             * @return {number} Radius.
             * @api
             */
            getRadius(): number;
    
            /**
             * @return {number} Radius2.
             * @api
             */
            getRadius2(): number;
    
            /**
             * @return {ol.style.Stroke} Stroke style.
             * @api
             */
            getStroke(): Stroke;
    
            /**
             * @return {string} The checksum.
             */
            getChecksum(): string;
        }
    }

    /**
     * @enum {number}
     */
    enum ImageState { IDLE, LOADING, LOADED, ERROR } 

    /**
     * @typedef {{opacity: number,
     *            rotateWithView: boolean,
     *            rotation: number,
     *            scale: number,
     *            snapToPixel: boolean}}
     */
    interface ImageOptions {
        opacity: number;
        rotateWithView: boolean;
        rotation: number;
        scale: number;
        snapToPixel: boolean
    }

    /**
     * Icon anchor units. One of 'fraction', 'pixels'.
     * @enum {string}
     * @api
     */
    enum IconAnchorUnits { FRACTION, PIXELS } 

    /**
     * Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.
     * @enum {string}
     * @api
     */
    enum IconOrigin { BOTTOM_LEFT, BOTTOM_RIGHT, TOP_LEFT, TOP_RIGHT } 

    /**
     * A function that takes an {@link ol.Feature} and a `{number}` representing
     * the view's resolution. The function should return an array of
     * {@link ol.style.Style}. This way e.g. a vector layer can be styled.
     *
     * @typedef {function(ol.Feature, number): Array.<ol.style.Style>}
     * @api
     */
    interface StyleFunction {
        (_0: Feature, _1: number): Style[]
    }

    /**
     * Convert the provided object into a style function.  Functions passed through
     * unchanged.  Arrays of ol.style.Style or single style objects wrapped in a
     * new style function.
     * @param {ol.style.StyleFunction|Array.<ol.style.Style>|ol.style.Style} obj
     *     A style function, a single style, or an array of styles.
     * @return {ol.style.StyleFunction} A style function.
     */
    function createStyleFunction(obj: StyleFunction): StyleFunction;
    /**
     * Convert the provided object into a style function.  Functions passed through
     * unchanged.  Arrays of ol.style.Style or single style objects wrapped in a
     * new style function.
     * @param {ol.style.StyleFunction|Array.<ol.style.Style>|ol.style.Style} obj
     *     A style function, a single style, or an array of styles.
     * @return {ol.style.StyleFunction} A style function.
     */
    function createStyleFunction(obj: Style[]): StyleFunction;
    /**
     * Convert the provided object into a style function.  Functions passed through
     * unchanged.  Arrays of ol.style.Style or single style objects wrapped in a
     * new style function.
     * @param {ol.style.StyleFunction|Array.<ol.style.Style>|ol.style.Style} obj
     *     A style function, a single style, or an array of styles.
     * @return {ol.style.StyleFunction} A style function.
     */
    function createStyleFunction(obj: Style): StyleFunction;

    /**
       * @param {ol.Feature} feature Feature.
       * @param {number} resolution Resolution.
       * @return {Array.<ol.style.Style>} Style.
       */
    function defaultStyleFunction(feature: Feature, resolution: number): Style[];

    /**
     * Default styles for editing features.
     * @return {Object.<ol.geom.GeometryType, Array.<ol.style.Style>>} Styles
     */
    function createDefaultEditingStyles(): { [key: string]: Style[] };

    /**
     * A function that takes an {@link ol.Feature} as argument and returns an
     * {@link ol.geom.Geometry} that will be rendered and styled for the feature.
     *
     * @typedef {function(ol.Feature): (ol.geom.Geometry|undefined)}
     * @api
     */
    interface GeometryFunction {
        (_0: Feature): any /*ol.geom.Geometry|any (undefined)*/
    }

    /**
     * Function that is called with a feature and returns its default geometry.
     * @param {ol.Feature} feature Feature to get the geometry for.
     * @return {ol.geom.Geometry|undefined} Geometry to render.
     */
    function defaultGeometryFunction(feature: Feature): any /*ol.geom.Geometry|any (undefined)*/;

    /**
     * Provides information for an image inside an atlas manager.
     * `offsetX` and `offsetY` is the position of the image inside
     * the atlas image `image`.
     * `hitOffsetX` and `hitOffsetY` ist the position of the hit-detection image
     * inside the hit-detection atlas image `hitImage` (only when a hit-detection
     * image was created for this image).
     * @typedef {{offsetX: number, offsetY: number, image: HTMLCanvasElement,
     *    hitOffsetX: number, hitOffsetY: number, hitImage: HTMLCanvasElement}}
     */
    interface AtlasManagerInfo {
        offsetX: number;
        offsetY: number;
        image: HTMLCanvasElement;
        hitOffsetX: number;
        hitOffsetY: number;
        hitImage: HTMLCanvasElement
    }

    /**
     * Provides information for an image inside an atlas.
     * `offsetX` and `offsetY` are the position of the image inside
     * the atlas image `image`.
     * @typedef {{offsetX: number, offsetY: number, image: HTMLCanvasElement}}
     */
    interface AtlasInfo {
        offsetX: number;
        offsetY: number;
        image: HTMLCanvasElement
    }
}

declare module ol.style.Atlas {

    /**
     * @typedef {{x: number, y: number, width: number, height: number}}
     */
    interface Block {
        x: number;
        y: number;
        width: number;
        height: number
    }
}

declare module ol.style.RegularShape {

    /**
     * @typedef {{strokeStyle: (string|undefined), strokeWidth: number,
     *   size: number, lineDash: Array.<number>}}
     */
    interface RenderOptions {
        strokeStyle: any /*string|any (undefined)*/;
        strokeWidth: number;
        size: number;
        lineDash: number[]
    }
}

declare module ol.style.Circle {

    /**
     * @typedef {{strokeStyle: (string|undefined), strokeWidth: number,
     *   size: number, lineDash: Array.<number>}}
     */
    interface RenderOptions {
        strokeStyle: any /*string|any (undefined)*/;
        strokeWidth: number;
        size: number;
        lineDash: number[]
    }
}

declare module ol.style.IconImage_ {

    /**
     * @param {Image} image Image.
     * @param {string} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @param {ol.style.ImageState} imageState Image state.
     * @return {ol.style.IconImage_} Icon image.
     */
    function get(image: Image, src: string, crossOrigin: string, imageState: style.ImageState): IconImage_;
}

declare module ol.style.IconImageCache {

    /**
     * @param {string} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @return {string} Cache key.
     */
    function getKey(src: string, crossOrigin: string): string;
}