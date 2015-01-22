declare module ol.proj {

    class Projection extends Projection.__Class { }
    module Projection {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * @classdesc
             * Projection definition class. One of these is created for each projection
             * supported in the application and stored in the {@link ol.proj} namespace.
             * You can use these in applications, but this is not required, as API params
             * and options use {@link ol.proj.ProjectionLike} which means the simple string
             * code will suffice.
             *
             * You can use {@link ol.proj.get} to retrieve the object for a particular
             * projection.
             *
             * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
             * with the following aliases:
             * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
             *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
             *     http://www.opengis.net/gml/srs/epsg.xml#4326,
             *     urn:x-ogc:def:crs:EPSG:4326
             * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
             *     urn:ogc:def:crs:EPSG:6.18:3:3857,
             *     http://www.opengis.net/gml/srs/epsg.xml#3857
             *
             * If you use proj4js, aliases can be added using `proj4.defs()`; see
             * [documentation](https://github.com/proj4js/proj4js).
             *
             * @constructor
             * @param {olx.ProjectionOptions} options Projection options.
             * @struct
             * @api stable
             */
            constructor(options: olx.ProjectionOptions);
    
            /**
             * Get the code for this projection, e.g. 'EPSG:4326'.
             * @return {string} Code.
             * @api stable
             */
            getCode(): string;
    
            /**
             * Get the validity extent for this projection.
             * @return {ol.Extent} Extent.
             * @api stable
             */
            getExtent(): ol.Extent;
    
            /**
             * Get the units of this projection.
             * @return {ol.proj.Units} Units.
             * @api stable
             */
            getUnits(): proj.Units;
    
            /**
             * Get the amount of meters per unit of this projection.  If the projection is
             * not configured with a units identifier, the return is `undefined`.
             * @return {number|undefined} Meters.
             * @api stable
             */
            getMetersPerUnit(): any /*number|any (undefined)*/;
    
            /**
             * Get the world extent for this projection.
             * @return {ol.Extent} Extent.
             * @api
             */
            getWorldExtent(): ol.Extent;
    
            /**
             * Get the axis orientation of this projection.
             * Example values are:
             * enu - the default easting, northing, elevation.
             * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
             *     or south orientated transverse mercator.
             * wnu - westing, northing, up - some planetary coordinate systems have
             *     "west positive" coordinate systems
             * @return {string} Axis orientation.
             */
            getAxisOrientation(): string;
    
            /**
             * Is this projection a global projection which spans the whole world?
             * @return {boolean} Wether the projection is global.
             * @api stable
             */
            isGlobal(): boolean;
    
            /**
             * @return {ol.tilegrid.TileGrid} The default tile grid.
             */
            getDefaultTileGrid(): ol.tilegrid.TileGrid;
    
            /**
             * @param {ol.tilegrid.TileGrid} tileGrid The default tile grid.
             */
            setDefaultTileGrid(tileGrid: ol.tilegrid.TileGrid): void;
    
            /**
             * Set the validity extent for this projection.
             * @param {ol.Extent} extent Extent.
             * @api stable
             */
            setExtent(extent: ol.Extent): void;
    
            /**
             * Set the world extent for this projection.
             * @param {ol.Extent} worldExtent World extent
             *     [minlon, minlat, maxlon, maxlat].
             * @api
             */
            setWorldExtent(worldExtent: ol.Extent): void;
    
            /**
             * Get the resolution of the point in degrees. For projections with degrees as
             * the unit this will simply return the provided resolution. For other
             * projections the point resolution is estimated by transforming the center
             * pixel to EPSG:4326, measuring its width and height on the normal sphere,
             * and taking the average of the width and height.
             * @param {number} resolution Resolution.
             * @param {ol.Coordinate} point Point.
             * @return {number} Point resolution.
             */
            getPointResolution(resolution: number, point: ol.Coordinate): number;
        }
    }

    class EPSG3857_ extends EPSG3857_.__Class { }
    module EPSG3857_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Projection.__Class {
    
            /**
             * @classdesc
             * Projection object for web/spherical Mercator (EPSG:3857).
             *
             * @constructor
             * @extends {ol.proj.Projection}
             * @param {string} code Code.
             * @private
             */
            constructor(code: string);
        }
    }

    class EPSG4326_ extends EPSG4326_.__Class { }
    module EPSG4326_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Projection.__Class {
    
            /**
             * @classdesc
             * Projection object for WGS84 geographic coordinates (EPSG:4326).
             *
             * Note that OpenLayers does not strictly comply with the EPSG definition.
             * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
             * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
             *
             * @constructor
             * @extends {ol.proj.Projection}
             * @param {string} code Code.
             * @param {string=} opt_axisOrientation Axis orientation.
             * @private
             */
            constructor(code: string, opt_axisOrientation?: string);
        }
    }

    /**
     * A projection as {@link ol.proj.Projection}, SRS identifier string or
     * undefined.
     * @typedef {ol.proj.Projection|string|undefined} ol.proj.ProjectionLike
     * @api stable
     */
    interface ProjectionLike { /*any (ol.proj.Projection|string|any (undefined))*/ }

    /**
     * Projection units: `'degrees'`, `'ft'`, `'m'` or `'pixels'`.
     * @enum {string}
     * @api stable
     */
    enum Units { DEGREES, FEET, METERS, PIXELS } 

    /**
     * Meters per unit lookup table.
     * @const
     * @type {Object.<ol.proj.Units, number>}
     * @api stable
     */
    var METERS_PER_UNIT: { [key: string]: number };

    /**
     * Registers transformation functions that don't alter coordinates. Those allow
     * to transform between projections with equal meaning.
     *
     * @param {Array.<ol.proj.Projection>} projections Projections.
     * @api
     */
    function addEquivalentProjections(projections: Projection[]): void;

    /**
     * Registers transformation functions to convert coordinates in any projection
     * in projection1 to any projection in projection2.
     *
     * @param {Array.<ol.proj.Projection>} projections1 Projections with equal
     *     meaning.
     * @param {Array.<ol.proj.Projection>} projections2 Projections with equal
     *     meaning.
     * @param {ol.TransformFunction} forwardTransform Transformation from any
     *   projection in projection1 to any projection in projection2.
     * @param {ol.TransformFunction} inverseTransform Transform from any projection
     *   in projection2 to any projection in projection1..
     */
    function addEquivalentTransforms(projections1: Projection[], projections2: Projection[], forwardTransform: TransformFunction, inverseTransform: TransformFunction): void;

    /**
     * Add a Projection object to the list of supported projections.
     *
     * @param {ol.proj.Projection} projection Projection instance.
     * @api stable
     */
    function addProjection(projection: Projection): void;

    /**
     * @param {Array.<ol.proj.Projection>} projections Projections.
     */
    function addProjections(projections: Projection[]): void;

    /**
     * FIXME empty description for jsdoc
     */
    function clearAllProjections(): void;

    /**
     * @param {ol.proj.Projection|string|undefined} projection Projection.
     * @param {string} defaultCode Default code.
     * @return {ol.proj.Projection} Projection.
     */
    function createProjection(projection: Projection, defaultCode: string): Projection;
    /**
     * @param {ol.proj.Projection|string|undefined} projection Projection.
     * @param {string} defaultCode Default code.
     * @return {ol.proj.Projection} Projection.
     */
    function createProjection(projection: string, defaultCode: string): Projection;
    /**
     * @param {ol.proj.Projection|string|undefined} projection Projection.
     * @param {string} defaultCode Default code.
     * @return {ol.proj.Projection} Projection.
     */
    function createProjection(projection: any /*undefined*/, defaultCode: string): Projection;

    /**
     * Registers a conversion function to convert coordinates from the source
     * projection to the destination projection.
     *
     * @param {ol.proj.Projection} source Source.
     * @param {ol.proj.Projection} destination Destination.
     * @param {ol.TransformFunction} transformFn Transform.
     */
    function addTransform(source: Projection, destination: Projection, transformFn: TransformFunction): void;

    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: Projection, destination: Projection, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;
    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: Projection, destination: string, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;
    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: Projection, destination: any /*undefined*/, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;
    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: string, destination: Projection, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;
    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: string, destination: string, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;
    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: string, destination: any /*undefined*/, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;
    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: any /*undefined*/, destination: Projection, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;
    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: any /*undefined*/, destination: string, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;
    /**
     * Registers coordinate transform functions to convert coordinates between the
     * source projection and the destination projection.
     * The forward and inverse functions convert coordinate pairs; this function
     * converts these into the functions used internally which also handle
     * extents and coordinate arrays.
     *
     * @param {ol.proj.ProjectionLike} source Source projection.
     * @param {ol.proj.ProjectionLike} destination Destination projection.
     * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
     *     function (that is, from the source projection to the destination
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
     *     function (that is, from the destination projection to the source
     *     projection) that takes a {@link ol.Coordinate} as argument and returns
     *     the transformed {@link ol.Coordinate}.
     * @api stable
     */
    function addCoordinateTransforms(source: any /*undefined*/, destination: any /*undefined*/, forward: (_0: Coordinate) => Coordinate, inverse: (_0: Coordinate) => Coordinate): void;

    /**
     * Creates a {@link ol.TransformFunction} from a simple 2D coordinate transform
     * function.
     * @param {function(ol.Coordinate): ol.Coordinate} transform Coordinate
     *     transform.
     * @return {ol.TransformFunction} Transform function.
     */
    function createTransformFromCoordinateTransform(transform: (_0: Coordinate) => Coordinate): TransformFunction;

    /**
     * Unregisters the conversion function to convert coordinates from the source
     * projection to the destination projection.  This method is used to clean up
     * cached transforms during testing.
     *
     * @param {ol.proj.Projection} source Source projection.
     * @param {ol.proj.Projection} destination Destination projection.
     * @return {ol.TransformFunction} transformFn The unregistered transform.
     */
    function removeTransform(source: Projection, destination: Projection): TransformFunction;

    /**
     * Fetches a Projection object for the code specified.
     *
     * @param {ol.proj.ProjectionLike} projectionLike Either a code string which is
     *     a combination of authority and identifier such as "EPSG:4326", or an
     *     existing projection object, or undefined.
     * @return {ol.proj.Projection} Projection object, or null if not in list.
     * @api stable
     */
    function get(projectionLike: Projection): Projection;
    /**
     * Fetches a Projection object for the code specified.
     *
     * @param {ol.proj.ProjectionLike} projectionLike Either a code string which is
     *     a combination of authority and identifier such as "EPSG:4326", or an
     *     existing projection object, or undefined.
     * @return {ol.proj.Projection} Projection object, or null if not in list.
     * @api stable
     */
    function get(projectionLike: string): Projection;
    /**
     * Fetches a Projection object for the code specified.
     *
     * @param {ol.proj.ProjectionLike} projectionLike Either a code string which is
     *     a combination of authority and identifier such as "EPSG:4326", or an
     *     existing projection object, or undefined.
     * @return {ol.proj.Projection} Projection object, or null if not in list.
     * @api stable
     */
    function get(projectionLike: any /*undefined*/): Projection;

    /**
     * Checks if two projections are the same, that is every coordinate in one
     * projection does represent the same geographic point as the same coordinate in
     * the other projection.
     *
     * @param {ol.proj.Projection} projection1 Projection 1.
     * @param {ol.proj.Projection} projection2 Projection 2.
     * @return {boolean} Equivalent.
     */
    function equivalent(projection1: Projection, projection2: Projection): boolean;

    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: Projection, destination: Projection): TransformFunction;
    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: Projection, destination: string): TransformFunction;
    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: Projection, destination: any /*undefined*/): TransformFunction;
    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: string, destination: Projection): TransformFunction;
    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: string, destination: string): TransformFunction;
    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: string, destination: any /*undefined*/): TransformFunction;
    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: any /*undefined*/, destination: Projection): TransformFunction;
    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: any /*undefined*/, destination: string): TransformFunction;
    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ol.proj.ProjectionLike} source Source.
     * @param {ol.proj.ProjectionLike} destination Destination.
     * @return {ol.TransformFunction} Transform function.
     * @api stable
     */
    function getTransform(source: any /*undefined*/, destination: any /*undefined*/): TransformFunction;

    /**
     * Searches in the list of transform functions for the function for converting
     * coordinates from the source projection to the destination projection.
     *
     * @param {ol.proj.Projection} sourceProjection Source Projection object.
     * @param {ol.proj.Projection} destinationProjection Destination Projection
     *     object.
     * @return {ol.TransformFunction} Transform function.
     */
    function getTransformFromProjections(sourceProjection: Projection, destinationProjection: Projection): TransformFunction;

    /**
     * @param {Array.<number>} input Input coordinate array.
     * @param {Array.<number>=} opt_output Output array of coordinate values.
     * @param {number=} opt_dimension Dimension.
     * @return {Array.<number>} Input coordinate array (same array as input).
     */
    function identityTransform(input: number[], opt_output?: number[], opt_dimension?: number): number[];

    /**
     * @param {Array.<number>} input Input coordinate array.
     * @param {Array.<number>=} opt_output Output array of coordinate values.
     * @param {number=} opt_dimension Dimension.
     * @return {Array.<number>} Output coordinate array (new array, same coordinate
     *     values).
     */
    function cloneTransform(input: number[], opt_output?: number[], opt_dimension?: number): number[];

    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: Projection, destination: Projection): Coordinate;
    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: Projection, destination: string): Coordinate;
    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: Projection, destination: any /*undefined*/): Coordinate;
    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: string, destination: Projection): Coordinate;
    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: string, destination: string): Coordinate;
    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: string, destination: any /*undefined*/): Coordinate;
    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: any /*undefined*/, destination: Projection): Coordinate;
    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: any /*undefined*/, destination: string): Coordinate;
    /**
     * Transforms a coordinate from source projection to destination projection.
     * This returns a new coordinate (and does not modify the original).
     *
     * See {@link ol.proj.transformExtent} for extent transformation.
     * See the transform method of {@link ol.geom.Geometry} and its subclasses for
     * geometry transforms.
     *
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Coordinate} Coordinate.
     * @api stable
     */
    function transform(coordinate: Coordinate, source: any /*undefined*/, destination: any /*undefined*/): Coordinate;

    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: Projection, destination: Projection): Extent;
    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: Projection, destination: string): Extent;
    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: Projection, destination: any /*undefined*/): Extent;
    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: string, destination: Projection): Extent;
    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: string, destination: string): Extent;
    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: string, destination: any /*undefined*/): Extent;
    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: any /*undefined*/, destination: Projection): Extent;
    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: any /*undefined*/, destination: string): Extent;
    /**
     * Transforms an extent from source projection to destination projection.  This
     * returns a new extent (and does not modify the original).
     *
     * @param {ol.Extent} extent The extent to transform.
     * @param {ol.proj.ProjectionLike} source Source projection-like.
     * @param {ol.proj.ProjectionLike} destination Destination projection-like.
     * @return {ol.Extent} The transformed extent.
     * @api stable
     */
    function transformExtent(extent: Extent, source: any /*undefined*/, destination: any /*undefined*/): Extent;

    /**
     * Transforms the given point to the destination projection.
     *
     * @param {ol.Coordinate} point Point.
     * @param {ol.proj.Projection} sourceProjection Source projection.
     * @param {ol.proj.Projection} destinationProjection Destination projection.
     * @return {ol.Coordinate} Point.
     */
    function transformWithProjections(point: Coordinate, sourceProjection: Projection, destinationProjection: Projection): Coordinate;
}

declare module ol.proj.EPSG3857 {

    /**
     * @const
     * @type {number}
     */
    var RADIUS: number;

    /**
     * @const
     * @type {number}
     */
    var HALF_SIZE: number;

    /**
     * @const
     * @type {ol.Extent}
     */
    var EXTENT: Extent;

    /**
     * @const
     * @type {ol.Extent}
     */
    var WORLD_EXTENT: Extent;

    /**
     * Lists several projection codes with the same meaning as EPSG:3857.
     *
     * @type {Array.<string>}
     */
    var CODES: string[];

    /**
     * Projections equal to EPSG:3857.
     *
     * @const
     * @type {Array.<ol.proj.Projection>}
     */
    var PROJECTIONS: Projection[];

    /**
     * Transformation from EPSG:4326 to EPSG:3857.
     *
     * @param {Array.<number>} input Input array of coordinate values.
     * @param {Array.<number>=} opt_output Output array of coordinate values.
     * @param {number=} opt_dimension Dimension (default is `2`).
     * @return {Array.<number>} Output array of coordinate values.
     */
    function fromEPSG4326(input: number[], opt_output?: number[], opt_dimension?: number): number[];

    /**
     * Transformation from EPSG:3857 to EPSG:4326.
     *
     * @param {Array.<number>} input Input array of coordinate values.
     * @param {Array.<number>=} opt_output Output array of coordinate values.
     * @param {number=} opt_dimension Dimension (default is `2`).
     * @return {Array.<number>} Output array of coordinate values.
     */
    function toEPSG4326(input: number[], opt_output?: number[], opt_dimension?: number): number[];
}

declare module ol.proj.EPSG4326 {

    /**
     * Extent of the EPSG:4326 projection which is the whole world.
     *
     * @const
     * @type {ol.Extent}
     */
    var EXTENT: Extent;

    /**
     * Projections equal to EPSG:4326.
     *
     * @const
     * @type {Array.<ol.proj.Projection>}
     */
    var PROJECTIONS: Projection[];
}

declare module ol.proj.common {

    /**
     * FIXME empty description for jsdoc
     * @api
     */
    function add(): void;
}