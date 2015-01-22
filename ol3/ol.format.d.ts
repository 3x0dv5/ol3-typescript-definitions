///<reference path="externs/olx.d.ts"/>

declare module ol.format {

    class BinaryFeature extends BinaryFeature.__Class { }
    module BinaryFeature {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Feature.__Class {
    
            /**
             * @constructor
             * @extends {ol.format.Feature}
             */
            constructor();
    
    
            /**
             * @param {ol.binary.Buffer} buffer Buffer.
             * @protected
             * @return {ol.Feature} Feature.
             */
            readFeatureFromBuffer(buffer: ol.binary.Buffer): ol.Feature;
    
            /**
             * @param {ol.binary.Buffer} buffer Buffer.
             * @protected
             * @return {Array.<ol.Feature>} Feature.
             */
            readFeaturesFromBuffer(buffer: ol.binary.Buffer): ol.Feature[];
    
            /**
             * @param {ol.binary.Buffer} buffer Buffer.
             * @protected
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometryFromBuffer(buffer: ol.binary.Buffer): ol.geom.Geometry;
    
            /**
             * @param {ol.binary.Buffer} buffer Buffer.
             * @return {ol.proj.Projection} Projection.
             */
            readProjectionFromBuffer(buffer: ol.binary.Buffer): ol.proj.Projection;
        }
    }


    class Feature extends Feature.__Class { }
    module Feature {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for feature formats.
             * {ol.format.Feature} subclasses provide the ability to decode and encode
             * {@link ol.Feature} objects from a variety of commonly used geospatial
             * file formats.  See the documentation for each format for more details.
             *
             * @constructor
             * @api stable
             */
            constructor();
    
            /**
             * @protected
             * @type {ol.proj.Projection}
             */
            defaultDataProjection: ol.proj.Projection;
    
            /**
             * @return {Array.<string>} Extensions.
             */
            getExtensions(): string[];
    
            /**
             * Adds the data projection to the read options.
             * @param {Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {olx.format.ReadOptions|undefined} Options.
             * @protected
             */
            getReadOptions(source: Document, opt_options?: olx.format.ReadOptions): any /*olx.format.ReadOptions|any (undefined)*/;
            /**
             * Adds the data projection to the read options.
             * @param {Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {olx.format.ReadOptions|undefined} Options.
             * @protected
             */
            getReadOptions(source: Node, opt_options?: olx.format.ReadOptions): any /*olx.format.ReadOptions|any (undefined)*/;
            /**
             * Adds the data projection to the read options.
             * @param {Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {olx.format.ReadOptions|undefined} Options.
             * @protected
             */
            getReadOptions(source: Object, opt_options?: olx.format.ReadOptions): any /*olx.format.ReadOptions|any (undefined)*/;
            /**
             * Adds the data projection to the read options.
             * @param {Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {olx.format.ReadOptions|undefined} Options.
             * @protected
             */
            getReadOptions(source: string, opt_options?: olx.format.ReadOptions): any /*olx.format.ReadOptions|any (undefined)*/;
    
            /**
             * Sets the `defaultDataProjection` on the options, if no `dataProjection`
             * is set.
             * @param {olx.format.WriteOptions|olx.format.ReadOptions|undefined} options
             *     Options.
             * @protected
             * @return {olx.format.WriteOptions|olx.format.ReadOptions|undefined}
             *     Updated options.
             */
            adaptOptions(options: any /*undefined*/): any /*olx.format.WriteOptions|olx.format.ReadOptions|any (undefined)*/;
    
            /**
             * @return {ol.format.FormatType} Format.
             */
            getType(): format.FormatType;
    
            /**
             * Read a single feature from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             */
            readFeature(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a single feature from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             */
            readFeature(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a single feature from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             */
            readFeature(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a single feature from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             */
            readFeature(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a single feature from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             */
            readFeature(source: string, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * Read all features from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * Read a single geometry from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometry(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a single geometry from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometry(source: Document, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a single geometry from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometry(source: Node, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a single geometry from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometry(source: Object, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a single geometry from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometry(source: string, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
    
            /**
             * Read the projection from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             */
            readProjection(source: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             */
            readProjection(source: Document): ol.proj.Projection;
            /**
             * Read the projection from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             */
            readProjection(source: Node): ol.proj.Projection;
            /**
             * Read the projection from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             */
            readProjection(source: Object): ol.proj.Projection;
            /**
             * Read the projection from a source.
             *
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             */
            readProjection(source: string): ol.proj.Projection;
    
            /**
             * Encode a feature in this format.
             *
             * @param {ol.Feature} feature Feature.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {string} Result.
             */
            writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;
    
            /**
             * Encode an array of features in this format.
             *
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {string} Result.
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
    
            /**
             * Write a single geometry in this format.
             *
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {string} Result.
             */
            writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;
        }
    }

    class JSONFeature extends JSONFeature.__Class { }
    module JSONFeature {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Feature.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for JSON feature formats.
             *
             * @constructor
             * @extends {ol.format.Feature}
             */
            constructor();
    
            /**
             * @param {Object} object Object.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @protected
             * @return {ol.Feature} Feature.
             */
            readFeatureFromObject(object: Object, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * @param {Object} object Object.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @protected
             * @return {Array.<ol.Feature>} Features.
             */
            readFeaturesFromObject(object: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * @param {Object} object Object.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @protected
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometryFromObject(object: Object, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
    
       
            /**
             * @param {Object} object Object.
             * @protected
             * @return {ol.proj.Projection} Projection.
             */
            readProjectionFromObject(object: Object): ol.proj.Projection;
    
          
            /**
             * @param {ol.Feature} feature Feature.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {Object} Object.
             */
            writeFeatureObject(feature: ol.Feature, opt_options?: olx.format.WriteOptions): Object;
    
           
            /**
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {Object} Object.
             */
            writeFeaturesObject(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Object;
    
            /**
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {Object} Object.
             */
            writeGeometryObject(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): Object;
        }
    }

    class GeoJSON extends GeoJSON.__Class { }
    module GeoJSON {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends JSONFeature.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the GeoJSON format.
             *
             * @constructor
             * @extends {ol.format.JSONFeature}
             * @param {olx.format.GeoJSONOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.format.GeoJSONOptions);
    
    
            /**
             * Read a feature from a GeoJSON Feature source.  Only works for Feature,
             * use `readFeatures` to read FeatureCollection source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a feature from a GeoJSON Feature source.  Only works for Feature,
             * use `readFeatures` to read FeatureCollection source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a feature from a GeoJSON Feature source.  Only works for Feature,
             * use `readFeatures` to read FeatureCollection source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a feature from a GeoJSON Feature source.  Only works for Feature,
             * use `readFeatures` to read FeatureCollection source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a feature from a GeoJSON Feature source.  Only works for Feature,
             * use `readFeatures` to read FeatureCollection source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: string, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * Read all features from a GeoJSON source.  Works with both Feature and
             * FeatureCollection sources.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GeoJSON source.  Works with both Feature and
             * FeatureCollection sources.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GeoJSON source.  Works with both Feature and
             * FeatureCollection sources.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GeoJSON source.  Works with both Feature and
             * FeatureCollection sources.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GeoJSON source.  Works with both Feature and
             * FeatureCollection sources.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * Read a geometry from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a geometry from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Document, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a geometry from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Node, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a geometry from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Object, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a geometry from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: string, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
    
            
    
            /**
             * Read the projection from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Document): ol.proj.Projection;
            /**
             * Read the projection from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Node): ol.proj.Projection;
            /**
             * Read the projection from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Object): ol.proj.Projection;
            /**
             * Read the projection from a GeoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: string): ol.proj.Projection;
    
            /**
             * Encode a feature as a GeoJSON Feature string.
             *
             * @function
             * @param {ol.Feature} feature Feature.
             * @param {olx.format.WriteOptions} options Write options.
             * @return {string} GeoJSON.
             * @api stable
             */
            writeFeature(feature: ol.Feature, options: olx.format.WriteOptions): string;
    
            /**
             * Encode a feature as a GeoJSON Feature object.
             *
             * @param {ol.Feature} feature Feature.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @api
             * @return {Object} Object.
             */
            writeFeatureObject(feature: ol.Feature, opt_options?: olx.format.WriteOptions): Object;
    
            /**
             * Encode an array of features as GeoJSON.
             *
             * @function
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions} options Write options.
             * @return {string} GeoJSON.
             * @api stable
             */
            writeFeatures(features: ol.Feature[], options: olx.format.WriteOptions): string;
    
            /**
             * Encode an array of features as a GeoJSON object.
             *
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {Object} GeoJSON Object.
             * @api
             */
            writeFeaturesObject(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Object;
    
            /**
             * Encode a geometry as a GeoJSON string.
             *
             * @function
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {olx.format.WriteOptions} options Write options.
             * @return {string} GeoJSON.
             * @api stable
             */
            writeGeometry(geometry: ol.geom.Geometry, options: olx.format.WriteOptions): string;
    
            /**
             * Encode a geometry as a GeoJSON object.
             *
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {GeoJSONGeometry|GeoJSONGeometryCollection} Object.
             * @api
             */
            writeGeometryObject(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): any /*GeoJSONGeometry|GeoJSONGeometryCollection*/;
        }
    }

    class XMLFeature extends XMLFeature.__Class { }
    module XMLFeature {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Feature.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for XML feature formats.
             *
             * @constructor
             * @extends {ol.format.Feature}
             */
            constructor();
    
            /**
             * @param {Document} doc Document.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {ol.Feature} Feature.
             */
            readFeatureFromDocument(doc: Document, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * @param {Node} node Node.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {ol.Feature} Feature.
             */
            readFeatureFromNode(node: Node, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * @param {Document} doc Document.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @protected
             * @return {Array.<ol.Feature>} Features.
             */
            readFeaturesFromDocument(doc: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * @param {Node} node Node.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @protected
             * @return {Array.<ol.Feature>} Features.
             */
            readFeaturesFromNode(node: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * @param {Document} doc Document.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @protected
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometryFromDocument(doc: Document, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
    
            /**
             * @param {Node} node Node.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @protected
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometryFromNode(node: Node, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
    
            /**
             * @param {Document} doc Document.
             * @protected
             * @return {ol.proj.Projection} Projection.
             */
            readProjectionFromDocument(doc: Document): ol.proj.Projection;
    
            /**
             * @param {Node} node Node.
             * @protected
             * @return {ol.proj.Projection} Projection.
             */
            readProjectionFromNode(node: Node): ol.proj.Projection;
    
            /**
             * @param {ol.Feature} feature Feature.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @protected
             * @return {Node} Node.
             */
            writeFeatureNode(feature: ol.Feature, opt_options?: olx.format.WriteOptions): Node;

            /**
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {Node} Node.
             */
            writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
    
            /**
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {Node} Node.
             */
            writeGeometryNode(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): Node;
        }
    }

    class GMLBase extends GMLBase.__Class { }
    module GMLBase {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XMLFeature.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Feature base format for reading and writing data in the GML format.
             * This class cannot be instantiate, it contains only base content that
             * is shared with versioned format classes ol.format.GML2 and
             * ol.format.GML3.
             *
             * @constructor
             * @param {olx.format.GMLOptions=} opt_options
             *     Optional configuration object.
             * @extends {ol.format.XMLFeature}
             * @api
             */
            constructor(opt_options?: olx.format.GMLOptions);
    
            /**
             * @protected
             * @type {string}
             */
            featureType: string;
    
            /**
             * @protected
             * @type {string}
             */
            featureNS: string;
    
            /**
             * @protected
             * @type {string}
             */
            srsName: string;
    
            /**
             * @protected
             * @type {string}
             */
            schemaLocation: string;
    
            /**
             * @type {Object.<string, Object.<string, Object>>}
             */
            FEATURE_COLLECTION_PARSERS: { [key: string]: { [key: string]: Object } };
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.geom.Geometry|undefined} Geometry.
             */
            readGeometryElement(node: Node, objectStack: any[]): any /*ol.geom.Geometry|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.Feature} Feature.
             */
            readFeatureElement(node: Node, objectStack: any[]): ol.Feature;
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.geom.Point|undefined} Point.
             */
            readPoint(node: Node, objectStack: any[]): any /*ol.geom.Point|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.geom.MultiPoint|undefined} MultiPoint.
             */
            readMultiPoint(node: Node, objectStack: any[]): any /*ol.geom.MultiPoint|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.geom.MultiLineString|undefined} MultiLineString.
             */
            readMultiLineString(node: Node, objectStack: any[]): any /*ol.geom.MultiLineString|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.geom.MultiPolygon|undefined} MultiPolygon.
             */
            readMultiPolygon(node: Node, objectStack: any[]): any /*ol.geom.MultiPolygon|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.geom.LineString|undefined} LineString.
             */
            readLineString(node: Node, objectStack: any[]): any /*ol.geom.LineString|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.geom.LinearRing|undefined} LinearRing.
             */
            readLinearRing(node: Node, objectStack: any[]): any /*ol.geom.LinearRing|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @param {Array.<*>} objectStack Object stack.
             * @return {ol.geom.Polygon|undefined} Polygon.
             */
            readPolygon(node: Node, objectStack: any[]): any /*ol.geom.Polygon|any (undefined)*/;
    
            /**
             * @const
             * @type {Object.<string, Object.<string, ol.xml.Parser>>}
             * @protected
             */
            RING_PARSERS: { [key: string]: { [key: string]: ol.xml.Parser } };
    
         
            /**
             * Read all features from a GML FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GML FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GML FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GML FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GML FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
        }
    }

    class GML3 extends GML3.__Class { }
    module GML3 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends GMLBase.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the GML format
             * version 3.1.1.
             * Currently only supports GML 3.1.1 Simple Features profile.
             *
             * @constructor
             * @param {olx.format.GMLOptions=} opt_options
             *     Optional configuration object.
             * @extends {ol.format.GMLBase}
             * @api
             */
            constructor(opt_options?: olx.format.GMLOptions);
    
            /**
             * @param {Node} node Node.
             * @param {ol.Extent} extent Extent.
             * @param {Array.<*>} objectStack Node stack.
             */
            writeEnvelope(node: Node, extent: ol.Extent, objectStack: any[]): void;
    
            /**
             * @param {Node} node Node.
             * @param {ol.geom.Geometry|ol.Extent} geometry Geometry.
             * @param {Array.<*>} objectStack Node stack.
             */
            writeGeometryElement(node: Node, geometry: ol.geom.Geometry, objectStack: any[]): void;
            /**
             * @param {Node} node Node.
             * @param {ol.geom.Geometry|ol.Extent} geometry Geometry.
             * @param {Array.<*>} objectStack Node stack.
             */
            writeGeometryElement(node: Node, geometry: ol.Extent, objectStack: any[]): void;
    
            /**
             * @param {Node} node Node.
             * @param {ol.Feature} feature Feature.
             * @param {Array.<*>} objectStack Node stack.
             */
            writeFeatureElement(node: Node, feature: ol.Feature, objectStack: any[]): void;
    
            /**
             * Encode a geometry in GML 3.1.1 Simple Features.
             *
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {Node} Node.
             * @api
             */
            writeGeometryNode(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): Node;
    
            /**
             * Encode an array of features in GML 3.1.1 Simple Features.
             *
             * @function
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {string} Result.
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
    
            /**
             * Encode an array of features in the GML 3.1.1 format as an XML node.
             *
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {Node} Node.
             * @api
             */
            writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
        }
    }

    class GML extends GML.__Class { }
    module GML {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends GMLBase.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the GML format
             * version 3.1.1.
             * Currently only supports GML 3.1.1 Simple Features profile.
             *
             * @constructor
             * @param {olx.format.GMLOptions=} opt_options
             *     Optional configuration object.
             * @extends {ol.format.GMLBase}
             * @api stable
             */
            constructor(opt_options?: olx.format.GMLOptions);
    
            /**
             * Encode an array of features in GML 3.1.1 Simple Features.
             *
             * @function
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {string} Result.
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
    
            /**
             * Encode an array of features in the GML 3.1.1 format as an XML node.
             *
             * @function
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {Node} Node.
             * @api
             */
            writeFeaturesNode(feature: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
        }
    }

    class GML2 extends GML2.__Class { }
    module GML2 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends GMLBase.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the GML format,
             * version 2.1.2.
             *
             * @constructor
             * @param {olx.format.GMLOptions=} opt_options Optional configuration object.
             * @extends {ol.format.GMLBase}
             * @api
             */
            constructor(opt_options?: olx.format.GMLOptions);
    
        }
    }

    class GPX extends GPX.__Class { }
    module GPX {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XMLFeature.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the GPX format.
             *
             * @constructor
             * @extends {ol.format.XMLFeature}
             * @param {olx.format.GPXOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.format.GPXOptions);
    
            /**
             * Read the first feature from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the first feature from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the first feature from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the first feature from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the first feature from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: string, opt_options?: olx.format.ReadOptions): ol.Feature;
     
            /**
             * Read all features from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * Read the projection from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Document): ol.proj.Projection;
            /**
             * Read the projection from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Node): ol.proj.Projection;
            /**
             * Read the projection from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Object): ol.proj.Projection;
            /**
             * Read the projection from a GPX source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: string): ol.proj.Projection;
    
          
            /**
             * Encode an array of features in the GPX format.
             *
             * @function
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {string} Result.
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
    
            /**
             * Encode an array of features in the GPX format as an XML node.
             *
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {Node} Node.
             * @api
             */
            writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
    
            /**
             * The original string.
             * @type {string}
             */
            string: string;
    
            /**
             * Index of the start of the line.
             * @type {number}
             */
            startLineIndex: number;
    
            /**
             * Index of the end of the line, excluding any newline characters.
             * Index is the first character after the line, suitable for
             * String.substring().
             * @type {number}
             */
            endContentIndex: number;
    
            /**
             * Index of the end of the line, excluding any newline characters.
             * Index is the first character after the line, suitable for
             * String.substring().
             * @type {number}
             */
            endLineIndex: number;
        }
    }

    class TextFeature extends TextFeature.__Class { }
    module TextFeature {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Feature.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for text feature formats.
             *
             * @constructor
             * @extends {ol.format.Feature}
             */
            constructor();
    
            /**
             * @param {string} text Text.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @protected
             * @return {ol.Feature} Feature.
             */
            readFeatureFromText(text: string, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * @param {string} text Text.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @protected
             * @return {Array.<ol.Feature>} Features.
             */
            readFeaturesFromText(text: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * @param {string} text Text.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @protected
             * @return {ol.geom.Geometry} Geometry.
             */
            readGeometryFromText(text: string, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
    
            /**
             * @param {string} text Text.
             * @protected
             * @return {ol.proj.Projection} Projection.
             */
            readProjectionFromText(text: string): ol.proj.Projection;
    
            /**
             * @param {ol.Feature} feature Features.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @protected
             * @return {string} Text.
             */
            writeFeatureText(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;
    
            /**
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @protected
             * @return {string} Text.
             */
            writeFeaturesText(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
    
            /**
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @protected
             * @return {string} Text.
             */
            writeGeometryText(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;
        }
    }

    class IGC extends IGC.__Class { }
    module IGC {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TextFeature.__Class {
    
            /**
             * @classdesc
             * Feature format for `*.igc` flight recording files.
             *
             * @constructor
             * @extends {ol.format.TextFeature}
             * @param {olx.format.IGCOptions=} opt_options Options.
             * @api
             */
            constructor(opt_options?: olx.format.IGCOptions);
    
            /**
             * Read the feature from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api
             */
            readFeature(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the feature from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api
             */
            readFeature(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the feature from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api
             */
            readFeature(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the feature from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api
             */
            readFeature(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the feature from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api
             */
            readFeature(source: string, opt_options?: olx.format.ReadOptions): ol.Feature;
    
             /**
             * Read the feature from the source. As IGC sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read the feature from the source. As IGC sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read the feature from the source. As IGC sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read the feature from the source. As IGC sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read the feature from the source. As IGC sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * Read the projection from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api
             */
            readProjection(source: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api
             */
            readProjection(source: Document): ol.proj.Projection;
            /**
             * Read the projection from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api
             */
            readProjection(source: Node): ol.proj.Projection;
            /**
             * Read the projection from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api
             */
            readProjection(source: Object): ol.proj.Projection;
            /**
             * Read the projection from the IGC source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api
             */
            readProjection(source: string): ol.proj.Projection;
        }
    }

    class KML extends KML.__Class { }
    module KML {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XMLFeature.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the KML format.
             *
             * @constructor
             * @extends {ol.format.XMLFeature}
             * @param {olx.format.KMLOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.format.KMLOptions);
    
    
            /**
             * Read the first feature from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the first feature from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the first feature from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the first feature from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the first feature from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: string, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * Read all features from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * @param {Document|Node|string} source Souce.
             * @return {string|undefined} Name.
             * @api stable
             */
            readName(source: Document): any /*string|any (undefined)*/;
            /**
             * @param {Document|Node|string} source Souce.
             * @return {string|undefined} Name.
             * @api stable
             */
            readName(source: Node): any /*string|any (undefined)*/;
            /**
             * @param {Document|Node|string} source Souce.
             * @return {string|undefined} Name.
             * @api stable
             */
            readName(source: string): any /*string|any (undefined)*/;
    
            /**
             * @param {Document} doc Document.
             * @return {string|undefined} Name.
             */
            readNameFromDocument(doc: Document): any /*string|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @return {string|undefined} Name.
             */
            readNameFromNode(node: Node): any /*string|any (undefined)*/;
    
            /**
             * Read the projection from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Document): ol.proj.Projection;
            /**
             * Read the projection from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Node): ol.proj.Projection;
            /**
             * Read the projection from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Object): ol.proj.Projection;
            /**
             * Read the projection from a KML source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: string): ol.proj.Projection;
    
          
            /**
             * Encode an array of features in the KML format.
             *
             * @function
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {string} Result.
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
    
            /**
             * Encode an array of features in the KML format as an XML node.
             *
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Options.
             * @return {Node} Node.
             * @api
             */
            writeFeaturesNode(features: ol.Feature[], opt_options?: olx.format.WriteOptions): Node;
        }
    }

    class OSMXML extends OSMXML.__Class { }
    module OSMXML {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XMLFeature.__Class {
    
            /**
             * @classdesc
             * Feature format for reading data in the
             * [OSMXML format](http://wiki.openstreetmap.org/wiki/OSM_XML).
             *
             * @constructor
             * @extends {ol.format.XMLFeature}
             * @api stable
             */
            constructor();
    
            /**
             * Read all features from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * Read the projection from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Document): ol.proj.Projection;
            /**
             * Read the projection from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Node): ol.proj.Projection;
            /**
             * Read the projection from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Object): ol.proj.Projection;
            /**
             * Read the projection from an OSM source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: string): ol.proj.Projection;
    
        }
    }

    class XML extends XML.__Class { }
    module XML {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Generic format for reading non-feature XML data
             *
             * @constructor
             */
            constructor();
    
            /**
             * @param {Document|Node|string} source Source.
             * @return {Object}
             */
            read(source: Document): Object;
            /**
             * @param {Document|Node|string} source Source.
             * @return {Object}
             */
            read(source: Node): Object;
            /**
             * @param {Document|Node|string} source Source.
             * @return {Object}
             */
            read(source: string): Object;
    
            /**
             * @param {Document} doc Document.
             * @return {Object}
             */
            readFromDocument(doc: Document): Object;
    
            /**
             * @param {Node} node Node.
             * @return {Object}
             */
            readFromNode(node: Node): Object;
        }
    }

    class OWS extends OWS.__Class { }
    module OWS {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XML.__Class {
    
            /**
             * @constructor
             * @extends {ol.format.XML}
             */
            constructor();
    
            /**
             * @param {Document} doc Document.
             * @return {Object} OWS object.
             */
            readFromDocument(doc: Document): Object;
    
            /**
             * @param {Node} node Node.
             * @return {Object} OWS object.
             */
            readFromNode(node: Node): Object;
        }
    }

    class Polyline extends Polyline.__Class { }
    module Polyline {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TextFeature.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the Encoded
             * Polyline Algorithm Format.
             *
             * @constructor
             * @extends {ol.format.TextFeature}
             * @param {olx.format.PolylineOptions=} opt_options
             *     Optional configuration object.
             * @api stable
             */
            constructor(opt_options?: olx.format.PolylineOptions);
    
            /**
             * Read the feature from the Polyline source. The coordinates are assumed to be
             * in two dimensions and in latitude, longitude order.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the feature from the Polyline source. The coordinates are assumed to be
             * in two dimensions and in latitude, longitude order.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the feature from the Polyline source. The coordinates are assumed to be
             * in two dimensions and in latitude, longitude order.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the feature from the Polyline source. The coordinates are assumed to be
             * in two dimensions and in latitude, longitude order.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read the feature from the Polyline source. The coordinates are assumed to be
             * in two dimensions and in latitude, longitude order.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: string, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * Read the feature from the source. As Polyline sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read the feature from the source. As Polyline sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read the feature from the source. As Polyline sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read the feature from the source. As Polyline sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read the feature from the source. As Polyline sources contain a single
             * feature, this will return the feature in an array.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * Read the geometry from the source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read the geometry from the source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Document, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read the geometry from the source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Node, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read the geometry from the source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Object, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read the geometry from the source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: string, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
    
            /**
             * Read the projection from a Polyline source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from a Polyline source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Document): ol.proj.Projection;
            /**
             * Read the projection from a Polyline source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Node): ol.proj.Projection;
            /**
             * Read the projection from a Polyline source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Object): ol.proj.Projection;
            /**
             * Read the projection from a Polyline source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: string): ol.proj.Projection;
    
            /**
             * Write a single geometry in Polyline format.
             *
             * @function
             * @param {ol.geom.Geometry} geometry Geometry.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {string} Geometry.
             * @api stable
             */
            writeGeometry(geometry: ol.geom.Geometry, opt_options?: olx.format.WriteOptions): string;
    
        }
    }

    class TopoJSON extends TopoJSON.__Class { }
    module TopoJSON {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends JSONFeature.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the TopoJSON format.
             *
             * @constructor
             * @extends {ol.format.JSONFeature}
             * @param {olx.format.TopoJSONOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.format.TopoJSONOptions);
    
            /**
             * Read all features from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer): ol.Feature[];
            /**
             * Read all features from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document): ol.Feature[];
            /**
             * Read all features from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node): ol.Feature[];
            /**
             * Read all features from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object): ol.Feature[];
            /**
             * Read all features from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string): ol.Feature[];
    
            /**
             * Read the projection from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} object Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(object: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} object Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(object: Document): ol.proj.Projection;
            /**
             * Read the projection from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} object Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(object: Node): ol.proj.Projection;
            /**
             * Read the projection from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} object Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(object: Object): ol.proj.Projection;
            /**
             * Read the projection from a TopoJSON source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} object Source.
             * @return {ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(object: string): ol.proj.Projection;
        }
    }

    class WFS extends WFS.__Class { }
    module WFS {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XMLFeature.__Class {
    
            /**
             * @classdesc
             * Feature format for reading and writing data in the WFS format.
             * By default, supports WFS version 1.1.0. You can pass a GML format
             * as option if you want to read a WFS that contains GML2 (WFS 1.0.0).
             * Also see {@link ol.format.GMLBase} which is used by this format.
             *
             * @constructor
             * @param {olx.format.WFSOptions=} opt_options
             *     Optional configuration object.
             * @extends {ol.format.XMLFeature}
             * @api stable
             */
            constructor(opt_options?: olx.format.WFSOptions);
    
            /**
             * Read all features from a WFS FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WFS FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WFS FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WFS FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WFS FeatureCollection.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.TransactionResponse|undefined} Transaction response.
             * @api stable
             */
            readTransactionResponse(source: ArrayBuffer): any /*ol.format.WFS.TransactionResponse|any (undefined)*/;
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.TransactionResponse|undefined} Transaction response.
             * @api stable
             */
            readTransactionResponse(source: Document): any /*ol.format.WFS.TransactionResponse|any (undefined)*/;
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.TransactionResponse|undefined} Transaction response.
             * @api stable
             */
            readTransactionResponse(source: Node): any /*ol.format.WFS.TransactionResponse|any (undefined)*/;
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.TransactionResponse|undefined} Transaction response.
             * @api stable
             */
            readTransactionResponse(source: Object): any /*ol.format.WFS.TransactionResponse|any (undefined)*/;
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.TransactionResponse|undefined} Transaction response.
             * @api stable
             */
            readTransactionResponse(source: string): any /*ol.format.WFS.TransactionResponse|any (undefined)*/;
    
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.FeatureCollectionMetadata|undefined}
             *     FeatureCollection metadata.
             * @api stable
             */
            readFeatureCollectionMetadata(source: ArrayBuffer): any /*ol.format.WFS.FeatureCollectionMetadata|any (undefined)*/;
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.FeatureCollectionMetadata|undefined}
             *     FeatureCollection metadata.
             * @api stable
             */
            readFeatureCollectionMetadata(source: Document): any /*ol.format.WFS.FeatureCollectionMetadata|any (undefined)*/;
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.FeatureCollectionMetadata|undefined}
             *     FeatureCollection metadata.
             * @api stable
             */
            readFeatureCollectionMetadata(source: Node): any /*ol.format.WFS.FeatureCollectionMetadata|any (undefined)*/;
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.FeatureCollectionMetadata|undefined}
             *     FeatureCollection metadata.
             * @api stable
             */
            readFeatureCollectionMetadata(source: Object): any /*ol.format.WFS.FeatureCollectionMetadata|any (undefined)*/;
            /**
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {ol.format.WFS.FeatureCollectionMetadata|undefined}
             *     FeatureCollection metadata.
             * @api stable
             */
            readFeatureCollectionMetadata(source: string): any /*ol.format.WFS.FeatureCollectionMetadata|any (undefined)*/;
    
            /**
             * @param {Document} doc Document.
             * @return {ol.format.WFS.FeatureCollectionMetadata|undefined}
             *     FeatureCollection metadata.
             */
            readFeatureCollectionMetadataFromDocument(doc: Document): any /*ol.format.WFS.FeatureCollectionMetadata|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @return {ol.format.WFS.FeatureCollectionMetadata|undefined}
             *     FeatureCollection metadata.
             */
            readFeatureCollectionMetadataFromNode(node: Node): any /*ol.format.WFS.FeatureCollectionMetadata|any (undefined)*/;
    
            /**
             * @param {Document} doc Document.
             * @return {ol.format.WFS.TransactionResponse|undefined} Transaction response.
             */
            readTransactionResponseFromDocument(doc: Document): any /*ol.format.WFS.TransactionResponse|any (undefined)*/;
    
            /**
             * @param {Node} node Node.
             * @return {ol.format.WFS.TransactionResponse|undefined} Transaction response.
             */
            readTransactionResponseFromNode(node: Node): any /*ol.format.WFS.TransactionResponse|any (undefined)*/;
    
            /**
             * @param {olx.format.WFSWriteGetFeatureOptions} options Options.
             * @return {Node} Result.
             * @api stable
             */
            writeGetFeature(options: olx.format.WFSWriteGetFeatureOptions): Node;
    
            /**
             * @param {Array.<ol.Feature>} inserts The features to insert.
             * @param {Array.<ol.Feature>} updates The features to update.
             * @param {Array.<ol.Feature>} deletes The features to delete.
             * @param {olx.format.WFSWriteTransactionOptions} options Write options.
             * @return {Node} Result.
             * @api stable
             */
            writeTransaction(inserts: ol.Feature[], updates: ol.Feature[], deletes: ol.Feature[], options: olx.format.WFSWriteTransactionOptions): Node;
    
            /**
             * Read the projection from a WFS source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {?ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: ArrayBuffer): ol.proj.Projection;
            /**
             * Read the projection from a WFS source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {?ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Document): ol.proj.Projection;
            /**
             * Read the projection from a WFS source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {?ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Node): ol.proj.Projection;
            /**
             * Read the projection from a WFS source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {?ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: Object): ol.proj.Projection;
            /**
             * Read the projection from a WFS source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @return {?ol.proj.Projection} Projection.
             * @api stable
             */
            readProjection(source: string): ol.proj.Projection;
    
        }
    }

    class WKT extends WKT.__Class { }
    module WKT {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends TextFeature.__Class {
    
            /**
             * @constructor
             * @extends {ol.format.TextFeature}
             * @param {olx.format.WKTOptions=} opt_options Options.
             * @api stable
             */
            constructor(opt_options?: olx.format.WKTOptions);
    
            /**
             * Read a feature from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a feature from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a feature from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a feature from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature;
            /**
             * Read a feature from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.Feature} Feature.
             * @api stable
             */
            readFeature(source: string, opt_options?: olx.format.ReadOptions): ol.Feature;
    
            /**
             * Read all features from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
           /**
             * Read a single geometry from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a single geometry from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Document, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a single geometry from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Node, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a single geometry from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: Object, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
            /**
             * Read a single geometry from a WKT source.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Read options.
             * @return {ol.geom.Geometry} Geometry.
             * @api stable
             */
            readGeometry(source: string, opt_options?: olx.format.ReadOptions): ol.geom.Geometry;
    
            /**
             * Encode a feature as a WKT string.
             *
             * @function
             * @param {ol.Feature} feature Feature.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {string} WKT string.
             * @api stable
             */
            writeFeature(feature: ol.Feature, opt_options?: olx.format.WriteOptions): string;
    
            /**
             * Encode an array of features as a WKT string.
             *
             * @function
             * @param {Array.<ol.Feature>} features Features.
             * @param {olx.format.WriteOptions=} opt_options Write options.
             * @return {string} WKT string.
             * @api stable
             */
            writeFeatures(features: ol.Feature[], opt_options?: olx.format.WriteOptions): string;
    
            /**
             * Write a single geometry as a WKT string.
             *
             * @function
             * @param {ol.geom.Geometry} geometry Geometry.
             * @return {string} WKT string.
             * @api stable
             */
            writeGeometry(geometry: ol.geom.Geometry): string;
    
        }
    }

    class WMSCapabilities extends WMSCapabilities.__Class { }
    module WMSCapabilities {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XML.__Class {
    
            /**
             * @classdesc
             * Format for reading WMS capabilities data
             *
             * @constructor
             * @extends {ol.format.XML}
             * @api
             */
            constructor();
    
            /**
             * @type {string|undefined}
             */
            version: any /*string|any (undefined)*/;
    
            /**
             * Read a WMS capabilities document.
             *
             * @function
             * @param {Document|Node|string} source The XML source.
             * @return {Object} An object representing the WMS capabilities.
             * @api
             */
            read(source: Document): Object;
            /**
             * Read a WMS capabilities document.
             *
             * @function
             * @param {Document|Node|string} source The XML source.
             * @return {Object} An object representing the WMS capabilities.
             * @api
             */
            read(source: Node): Object;
            /**
             * Read a WMS capabilities document.
             *
             * @function
             * @param {Document|Node|string} source The XML source.
             * @return {Object} An object representing the WMS capabilities.
             * @api
             */
            read(source: string): Object;
    
            /**
             * @param {Document} doc Document.
             * @return {Object} WMS Capability object.
             */
            readFromDocument(doc: Document): Object;
    
            /**
             * @param {Node} node Node.
             * @return {Object} WMS Capability object.
             */
            readFromNode(node: Node): Object;
        }
    }

    class WMSGetFeatureInfo extends WMSGetFeatureInfo.__Class { }
    module WMSGetFeatureInfo {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends XMLFeature.__Class {
    
            /**
             * @classdesc
             * Format for reading WMSGetFeatureInfo format. It uses
             * {@link ol.format.GML2} to read features.
             *
             * @constructor
             * @extends {ol.format.XMLFeature}
             * @api
             */
            constructor();
    
            /**
             * Read all features from a WMSGetFeatureInfo response.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: ArrayBuffer, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WMSGetFeatureInfo response.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Document, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WMSGetFeatureInfo response.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Node, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WMSGetFeatureInfo response.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: Object, opt_options?: olx.format.ReadOptions): ol.Feature[];
            /**
             * Read all features from a WMSGetFeatureInfo response.
             *
             * @function
             * @param {ArrayBuffer|Document|Node|Object|string} source Source.
             * @param {olx.format.ReadOptions=} opt_options Options.
             * @return {Array.<ol.Feature>} Features.
             * @api stable
             */
            readFeatures(source: string, opt_options?: olx.format.ReadOptions): ol.Feature[];
    
        }
    }

    /**
     * @enum {string}
     */
    enum FormatType { BINARY, JSON, TEXT, XML } 

    /**
     * IGC altitude/z. One of 'barometric', 'gps', 'none'.
     * @enum {string}
     * @api
     */
    enum IGCZ { BAROMETRIC, GPS, NONE } 

    /**
     * @typedef {{x: number, xunits: (ol.style.IconAnchorUnits|undefined),
     *            y: number, yunits: (ol.style.IconAnchorUnits|undefined)}}
     */
    interface KMLVec2_ {
        x: number;
        xunits: any /*ol.style.IconAnchorUnits|any (undefined)*/;
        y: number;
        yunits: any; /*ol.style.IconAnchorUnits|any (undefined)*/
    }

    /**
     * @typedef {{flatCoordinates: Array.<number>,
     *            whens: Array.<number>}}
     */
    interface KMLGxTrackObject_ {
        flatCoordinates: number[];
        whens: number[];
    }
}

declare module ol.format.WKT {

    class Lexer extends Lexer.__Class { }
    module Lexer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Class to tokenize a WKT string.
             * @param {string} wkt WKT string.
             * @constructor
             * @protected
             */
            constructor(wkt: string);
    
            /**
             * @type {string}
             */
            wkt: string;
    
            /**
             * Fetch and return the next token.
             * @return {!ol.format.WKT.Token} Next string token.
             */
            nextToken(): ol.format.WKT.Token;
        }
    }

    class Parser extends Parser.__Class { }
    module Parser {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Class to parse the tokens from the WKT string.
             * @param {ol.format.WKT.Lexer} lexer
             * @constructor
             * @protected
             */
            constructor(lexer: ol.format.WKT.Lexer);
    
            /**
             * If the given type matches the current token, consume it.
             * @param {ol.format.WKT.TokenType.<number>} type Token type.
             * @return {boolean} Whether the token matches the given type.
             */
            match(type: ol.format.WKT.TokenType): boolean;
    
            /**
             * Try to parse the tokens provided by the lexer.
             * @return {ol.geom.Geometry|ol.geom.GeometryCollection} The geometry.
             */
            parse(): any /*ol.geom.Geometry|ol.geom.GeometryCollection*/;
        }
    }

    /**
     * @const
     * @type {string}
     */
    var EMPTY: string;

    /**
     * @typedef {{type: number, value: (number|string|undefined), position: number}}
     */
    interface Token {
        type: number;
        value: any /*number|string|any (undefined)*/;
        position: number;
    }

    /**
     * @const
     * @enum {number}
     */
    enum TokenType { TEXT, LEFT_PAREN, RIGHT_PAREN, NUMBER, COMMA, EOF } 
}

declare module ol.format.Feature {

    /**
     * @param {ol.geom.Geometry|ol.Extent} geometry Geometry.
     * @param {boolean} write Set to true for writing, false for reading.
     * @param {(olx.format.WriteOptions|olx.format.ReadOptions)=} opt_options
     *     Options.
     * @return {ol.geom.Geometry|ol.Extent} Transformed geometry.
     * @protected
     */
    function transformWithOptions(geometry: geom.Geometry, write: boolean, opt_options?: any): any /*ol.geom.Geometry|ol.Extent*/;
   
    /**
     * @param {ol.geom.Geometry|ol.Extent} geometry Geometry.
     * @param {boolean} write Set to true for writing, false for reading.
     * @param {(olx.format.WriteOptions|olx.format.ReadOptions)=} opt_options
     *     Options.
     * @return {ol.geom.Geometry|ol.Extent} Transformed geometry.
     * @protected
     */
    function transformWithOptions(geometry: Extent, write: boolean, opt_options?: any): any /*ol.geom.Geometry|ol.Extent*/;
}

declare module ol.format.XSD {

    /**
     * @const
     * @type {string}
     */
    var NAMESPACE_URI: string;

    /**
     * @param {Node} node Node.
     * @return {boolean|undefined} Boolean.
     */
    function readBoolean(node: Node): any /*boolean|any (undefined)*/;

    /**
     * @param {string} string String.
     * @return {boolean|undefined} Boolean.
     */
    function readBooleanString(string: string): any /*boolean|any (undefined)*/;

    /**
     * @param {Node} node Node.
     * @return {number|undefined} DateTime in seconds.
     */
    function readDateTime(node: Node): any /*number|any (undefined)*/;

    /**
     * @param {Node} node Node.
     * @return {number|undefined} Decimal.
     */
    function readDecimal(node: Node): any /*number|any (undefined)*/;

    /**
     * @param {string} string String.
     * @return {number|undefined} Decimal.
     */
    function readDecimalString(string: string): any /*number|any (undefined)*/;

    /**
     * @param {Node} node Node.
     * @return {number|undefined} Non negative integer.
     */
    function readNonNegativeInteger(node: Node): any /*number|any (undefined)*/;

    /**
     * @param {string} string String.
     * @return {number|undefined} Non negative integer.
     */
    function readNonNegativeIntegerString(string: string): any /*number|any (undefined)*/;

    /**
     * @param {Node} node Node.
     * @return {string|undefined} String.
     */
    function readString(node: Node): any /*string|any (undefined)*/;

    /**
     * @param {Node} node Node to append a TextNode with the boolean to.
     * @param {boolean} bool Boolean.
     */
    function writeBooleanTextNode(node: Node, bool: boolean): void;

    /**
     * @param {Node} node Node to append a TextNode with the dateTime to.
     * @param {number} dateTime DateTime in seconds.
     */
    function writeDateTimeTextNode(node: Node, dateTime: number): void;

    /**
     * @param {Node} node Node to append a TextNode with the decimal to.
     * @param {number} decimal Decimal.
     */
    function writeDecimalTextNode(node: Node, decimal: number): void;

    /**
     * @param {Node} node Node to append a TextNode with the decimal to.
     * @param {number} nonNegativeInteger Non negative integer.
     */
    function writeNonNegativeIntegerTextNode(node: Node, nonNegativeInteger: number): void;

    /**
     * @param {Node} node Node to append a TextNode with the string to.
     * @param {string} string String.
     */
    function writeStringTextNode(node: Node, string: string): void;
}

declare module ol.format.XLink {

    /**
     * @const
     * @type {string}
     */
    var NAMESPACE_URI: string;

    /**
     * @param {Node} node Node.
     * @return {boolean|undefined} Boolean.
     */
    function readHref(node: Node): any /*boolean|any (undefined)*/;
}

declare module ol.format.Polyline {

    /**
     * Encode a list of n-dimensional points and return an encoded string
     *
     * Attention: This function will modify the passed array!
     *
     * @param {Array.<number>} numbers A list of n-dimensional points.
     * @param {number} stride The number of dimension of the points in the list.
     * @param {number=} opt_factor The factor by which the numbers will be
     *     multiplied. The remaining decimal places will get rounded away.
     *     Default is `1e5`.
     * @return {string} The encoded string.
     * @api
     */
    function encodeDeltas(numbers: number[], stride: number, opt_factor?: number): string;

    /**
     * Decode a list of n-dimensional points from an encoded string
     *
     * @param {string} encoded An encoded string.
     * @param {number} stride The number of dimension of the points in the
     *     encoded string.
     * @param {number=} opt_factor The factor by which the resulting numbers will
     *     be divided. Default is `1e5`.
     * @return {Array.<number>} A list of n-dimensional points.
     * @api
     */
    function decodeDeltas(encoded: string, stride: number, opt_factor?: number): number[];

    /**
     * Encode a list of floating point numbers and return an encoded string
     *
     * Attention: This function will modify the passed array!
     *
     * @param {Array.<number>} numbers A list of floating point numbers.
     * @param {number=} opt_factor The factor by which the numbers will be
     *     multiplied. The remaining decimal places will get rounded away.
     *     Default is `1e5`.
     * @return {string} The encoded string.
     * @api
     */
    function encodeFloats(numbers: number[], opt_factor?: number): string;

    /**
     * Decode a list of floating point numbers from an encoded string
     *
     * @param {string} encoded An encoded string.
     * @param {number=} opt_factor The factor by which the result will be divided.
     *     Default is `1e5`.
     * @return {Array.<number>} A list of floating point numbers.
     * @api
     */
    function decodeFloats(encoded: string, opt_factor?: number): number[];

    /**
     * Encode a list of signed integers and return an encoded string
     *
     * Attention: This function will modify the passed array!
     *
     * @param {Array.<number>} numbers A list of signed integers.
     * @return {string} The encoded string.
     */
    function encodeSignedIntegers(numbers: number[]): string;

    /**
     * Decode a list of signed integers from an encoded string
     *
     * @param {string} encoded An encoded string.
     * @return {Array.<number>} A list of signed integers.
     */
    function decodeSignedIntegers(encoded: string): number[];

    /**
     * Encode a list of unsigned integers and return an encoded string
     *
     * @param {Array.<number>} numbers A list of unsigned integers.
     * @return {string} The encoded string.
     */
    function encodeUnsignedIntegers(numbers: number[]): string;

    /**
     * Decode a list of unsigned integers from an encoded string
     *
     * @param {string} encoded An encoded string.
     * @return {Array.<number>} A list of unsigned integers.
     */
    function decodeUnsignedIntegers(encoded: string): number[];

    /**
     * Encode one single unsigned integer and return an encoded string
     *
     * @param {number} num Unsigned integer that should be encoded.
     * @return {string} The encoded string.
     */
    function encodeUnsignedInteger(num: number): string;
}

declare module ol.format.WFS {

    /**
     * @const
     * @type {string}
     */
    var FEATURE_PREFIX: string;

    /**
     * @const
     * @type {string}
     */
    var XMLNS: string;

    /**
     * Number of features; bounds/extent.
     * @typedef {{numberOfFeatures: number,
     *            bounds: ol.Extent}}
     * @api stable
     */
    interface FeatureCollectionMetadata {
        numberOfFeatures: number;
        bounds: Extent;
    }

    /**
     * Total deleted; total inserted; total updated; array of insert ids.
     * @typedef {{totalDeleted: number,
     *            totalInserted: number,
     *            totalUpdated: number,
     *            insertIds: Array.<string>}}
     * @api stable
     */
    interface TransactionResponse {
        totalDeleted: number;
        totalInserted: number;
        totalUpdated: number;
        insertIds: string[];
    }

    /**
     * @const
     * @type {string}
     */
    var SCHEMA_LOCATION: string;
}

declare module ol.format.WKT.Parser {

    /**
     * @enum {function (new:ol.geom.Geometry, Array, ol.geom.GeometryLayout.<string>=)}
     * @private
     */
    enum GeometryConstructor_ { POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON } 

    /**
     * @enum {(function(): Array)}
     * @private
     */
    enum GeometryParser_ { POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON }
}
