declare module ol.geom {

    class Geometry extends Geometry.__Class { }
    module Geometry {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends ol.Observable.__Class {
    
            /**
             * @classdesc
             * Abstract base class; normally only used for creating subclasses and not
             * instantiated in apps.
             * Base class for vector geometries.
             *
             * @constructor
             * @extends {ol.Observable}
             * @fires change Triggered when the geometry changes.
             * @api stable
             */
            constructor();
    
            /**
             * @protected
             * @type {ol.Extent|undefined}
             */
            extent: any /*ol.Extent|any (undefined)*/;
    
            /**
             * @protected
             * @type {number}
             */
            extentRevision: number;
    
            /**
             * @protected
             * @type {Object.<string, ol.geom.Geometry>}
             */
            simplifiedGeometryCache: { [key: string]: Geometry };
    
            /**
             * @protected
             * @type {number}
             */
            simplifiedGeometryMaxMinSquaredTolerance: number;
    
            /**
             * @protected
             * @type {number}
             */
            simplifiedGeometryRevision: number;
    
            /**
             * Make a complete copy of the geometry.
             * @function
             * @return {!ol.geom.Geometry} Clone.
             * @api stable
             */
            clone(): Geometry;
    
            /**
             * @param {number} x X.
             * @param {number} y Y.
             * @param {ol.Coordinate} closestPoint Closest point.
             * @param {number} minSquaredDistance Minimum squared distance.
             * @return {number} Minimum squared distance.
             */
            closestPointXY(x: number, y: number, closestPoint: ol.Coordinate, minSquaredDistance: number): number;
    
            /**
             * @param {ol.Coordinate} point Point.
             * @param {ol.Coordinate=} opt_closestPoint Closest point.
             * @return {ol.Coordinate} Closest point.
             * @api stable
             */
            getClosestPoint(point: ol.Coordinate, opt_closestPoint?: ol.Coordinate): ol.Coordinate;
    
            /**
             * @param {ol.Coordinate} coordinate Coordinate.
             * @return {boolean} Contains coordinate.
             */
            containsCoordinate(coordinate: ol.Coordinate): boolean;
    
            /**
             * @param {number} x X.
             * @param {number} y Y.
             * @return {boolean} Contains (x, y).
             */
            containsXY(x: number, y: number): boolean;
    
            /**
             * Get the extent of the geometry.
             * @function
             * @param {ol.Extent=} opt_extent Extent.
             * @return {ol.Extent} extent Extent.
             * @api stable
             */
            getExtent(opt_extent?: ol.Extent): ol.Extent;
    
            /**
             * Create a simplified version of this geometry using the Douglas Peucker
             * algorithm.
             * @see http://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm
             * @function
             * @param {number} squaredTolerance Squared tolerance.
             * @return {ol.geom.Geometry} Simplified geometry.
             */
            getSimplifiedGeometry(squaredTolerance: number): Geometry;
    
            /**
             * Get the type of this geometry.
             * @function
             * @return {ol.geom.GeometryType} Geometry type.
             * @api stable
             */
            getType(): geom.GeometryType;
    
            /**
             * Apply a transform function to each coordinate of the geometry.
             * The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             * @function
             * @param {ol.TransformFunction} transformFn Transform.
             * @api stable
             */
            applyTransform(transformFn: ol.TransformFunction): void;
    
            /**
             * Test if the geometry and the passed extent intersect.
             * @param {ol.Extent} extent Extent.
             * @return {boolean} `true` if the geometry and the extent intersect.
             * @function
             * @api
             */
            intersectsExtent(extent: ol.Extent): boolean;
    
            /**
             * Translate the geometry.
             * @param {number} deltaX Delta X.
             * @param {number} deltaY Delta Y.
             * @function
             * @api
             */
            translate(deltaX: number, deltaY: number): void;
    
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: ol.proj.Projection, destination: ol.proj.Projection): Geometry;
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: ol.proj.Projection, destination: string): Geometry;
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: ol.proj.Projection, destination: any /*undefined*/): Geometry;
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: string, destination: ol.proj.Projection): Geometry;
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: string, destination: string): Geometry;
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: string, destination: any /*undefined*/): Geometry;
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: any /*undefined*/, destination: ol.proj.Projection): Geometry;
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: any /*undefined*/, destination: string): Geometry;
            /**
             * Transform each coordinate of the geometry from one coordinate reference
             * system to another. The geometry is modified in place.
             * For example, a line will be transformed to a line and a circle to a circle.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Geometry} This geometry.  Note that original geometry is
             *     modified in place.
             * @api stable
             */
            transform(source: any /*undefined*/, destination: any /*undefined*/): Geometry;
        }
    }

    class SimpleGeometry extends SimpleGeometry.__Class { }
    module SimpleGeometry {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Geometry.__Class {
    
            /**
             * @classdesc
             * Abstract base class; only used for creating subclasses; do not instantiate
             * in apps, as cannot be rendered.
             *
             * @constructor
             * @extends {ol.geom.Geometry}
             * @api stable
             */
            constructor();
    
            /**
             * @protected
             * @type {ol.geom.GeometryLayout}
             */
            layout: geom.GeometryLayout;
    
            /**
             * @protected
             * @type {number}
             */
            stride: number;
    
            /**
             * @protected
             * @type {Array.<number>}
             */
            flatCoordinates: number[];
    
            /**
             * @return {ol.Coordinate} First coordinate.
             * @api stable
             */
            getFirstCoordinate(): ol.Coordinate;
    
            /**
             * @return {Array.<number>} Flat coordinates.
             */
            getFlatCoordinates(): number[];
    
            /**
             * @return {ol.Coordinate} Last point.
             * @api stable
             */
            getLastCoordinate(): ol.Coordinate;
    
            /**
             * @return {ol.geom.GeometryLayout} Layout.
             * @api stable
             */
            getLayout(): geom.GeometryLayout;
    
            /**
             * @param {number} squaredTolerance Squared tolerance.
             * @return {ol.geom.SimpleGeometry} Simplified geometry.
             * @protected
             */
            getSimplifiedGeometryInternal(squaredTolerance: number): SimpleGeometry;
    
            /**
             * @return {number} Stride.
             */
            getStride(): number;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @protected
             */
            setFlatCoordinatesInternal(layout: geom.GeometryLayout, flatCoordinates: number[]): void;
    
            /**
             * @param {ol.geom.GeometryLayout|undefined} layout Layout.
             * @param {Array} coordinates Coordinates.
             * @param {number} nesting Nesting.
             * @protected
             */
            setLayout(layout: geom.GeometryLayout, coordinates: any[], nesting: number): void;
            /**
             * @param {ol.geom.GeometryLayout|undefined} layout Layout.
             * @param {Array} coordinates Coordinates.
             * @param {number} nesting Nesting.
             * @protected
             */
            setLayout(layout: any /*undefined*/, coordinates: any[], nesting: number): void;
    
            /**
             * Translate the geometry.
             * @param {number} deltaX Delta X.
             * @param {number} deltaY Delta Y.
             * @api
             */
            translate(deltaX: number, deltaY: number): void;
        }
    }

    class LinearRing extends LinearRing.__Class { }
    module LinearRing {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends SimpleGeometry.__Class {
    
            /**
             * @classdesc
             * Linear ring geometry. Only used as part of polygon; cannot be rendered
             * on its own.
             *
             * @constructor
             * @extends {ol.geom.SimpleGeometry}
             * @param {Array.<ol.Coordinate>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[], opt_layout?: geom.GeometryLayout);
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.LinearRing} Clone.
             * @api stable
             */
            clone(): LinearRing;
    
            /**
             * @return {number} Area (on projected plane).
             * @api stable
             */
            getArea(): number;
    
            /**
             * @return {Array.<ol.Coordinate>} Coordinates.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[];
    
    
            /**
             * @param {Array.<ol.Coordinate>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[], opt_layout?: geom.GeometryLayout): void;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             */
            setFlatCoordinates(layout: geom.GeometryLayout, flatCoordinates: number[]): void;
        }
    }

    class Point extends Point.__Class { }
    module Point {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends SimpleGeometry.__Class {
    
            /**
             * @classdesc
             * Point geometry.
             *
             * @constructor
             * @extends {ol.geom.SimpleGeometry}
             * @param {ol.Coordinate} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            constructor(coordinates: ol.Coordinate, opt_layout?: geom.GeometryLayout);
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.Point} Clone.
             * @api stable
             */
            clone(): Point;
    
            /**
             * @return {ol.Coordinate} Coordinates.
             * @api stable
             */
            getCoordinates(): ol.Coordinate;
    
            /**
             * @param {ol.Coordinate} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate, opt_layout?: geom.GeometryLayout): void;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             */
            setFlatCoordinates(layout: geom.GeometryLayout, flatCoordinates: number[]): void;
        }
    }

    class Polygon extends Polygon.__Class { }
    module Polygon {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends SimpleGeometry.__Class {
    
            /**
             * @classdesc
             * Polygon geometry.
             *
             * @constructor
             * @extends {ol.geom.SimpleGeometry}
             * @param {Array.<Array.<ol.Coordinate>>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[][], opt_layout?: geom.GeometryLayout);
    
            /**
             * @param {ol.geom.LinearRing} linearRing Linear ring.
             * @api stable
             */
            appendLinearRing(linearRing: LinearRing): void;
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.Polygon} Clone.
             * @api stable
             */
            clone(): Polygon;
    
            /**
             * @return {number} Area (on projected plane).
             * @api stable
             */
            getArea(): number;
    
            /**
             * @return {Array.<Array.<ol.Coordinate>>} Coordinates.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[][];
    
            /**
             * @return {Array.<number>} Ends.
             */
            getEnds(): number[];
    
            /**
             * @return {Array.<number>} Interior point.
             */
            getFlatInteriorPoint(): number[];
    
            /**
             * @return {ol.geom.Point} Interior point.
             * @api stable
             */
            getInteriorPoint(): Point;
    
            /**
             * Return the number of rings of the polygon,  this includes the exterior
             * ring and any interior rings.
             *
             * @return {number} Number of rings.
             * @api
             */
            getLinearRingCount(): number;
    
            /**
             * Return the Nth linear ring of the polygon geometry. Return `null` if the
             * given index is out of range.
             * The exterior linear ring is available at index `0` and the interior rings
             * at index `1` and beyond.
             *
             * @param {number} index Index.
             * @return {ol.geom.LinearRing} Linear ring.
             * @api stable
             */
            getLinearRing(index: number): LinearRing;
    
            /**
             * @return {Array.<ol.geom.LinearRing>} Linear rings.
             * @api stable
             */
            getLinearRings(): LinearRing[];
    
            /**
             * @return {Array.<number>} Oriented flat coordinates.
             */
            getOrientedFlatCoordinates(): number[];
    
            /**
             * @param {Array.<Array.<ol.Coordinate>>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[][], opt_layout?: geom.GeometryLayout): void;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @param {Array.<number>} ends Ends.
             */
            setFlatCoordinates(layout: geom.GeometryLayout, flatCoordinates: number[], ends: number[]): void;
        }
    }

    class Circle extends Circle.__Class { }
    module Circle {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends SimpleGeometry.__Class {
    
            /**
             * @classdesc
             * Circle geometry.
             *
             * @constructor
             * @extends {ol.geom.SimpleGeometry}
             * @param {ol.Coordinate} center Center.
             * @param {number=} opt_radius Radius.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api
             */
            constructor(center: ol.Coordinate, opt_radius?: number, opt_layout?: geom.GeometryLayout);
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.Circle} Clone.
             * @api
             */
            clone(): Circle;
    
            /**
             * @return {ol.Coordinate} Center.
             * @api
             */
            getCenter(): ol.Coordinate;
    
			/**
             * @return {number} Radius.
             * @api
             */
            getRadius(): number;
    
            /**
             * @param {ol.Coordinate} center Center.
             * @api
             */
            setCenter(center: ol.Coordinate): void;
    
            /**
             * @param {ol.Coordinate} center Center.
             * @param {number} radius Radius.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api
             */
            setCenterAndRadius(center: ol.Coordinate, radius: number, opt_layout?: geom.GeometryLayout): void;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             */
            setFlatCoordinates(layout: geom.GeometryLayout, flatCoordinates: number[]): void;
    
            /**
             * The radius is in the units of the projection.
             * @param {number} radius Radius.
             * @api
             */
            setRadius(radius: number): void;
    
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: ol.proj.Projection, destination: ol.proj.Projection): Circle;
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: ol.proj.Projection, destination: string): Circle;
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: ol.proj.Projection, destination: any /*undefined*/): Circle;
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: string, destination: ol.proj.Projection): Circle;
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: string, destination: string): Circle;
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: string, destination: any /*undefined*/): Circle;
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: any /*undefined*/, destination: ol.proj.Projection): Circle;
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: any /*undefined*/, destination: string): Circle;
            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             *
             * @param {ol.proj.ProjectionLike} source The current projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @param {ol.proj.ProjectionLike} destination The desired projection.  Can be a
             *     string identifier or a {@link ol.proj.Projection} object.
             * @return {ol.geom.Circle} This geometry.  Note that original geometry is
             *     modified in place.
             * @function
             * @api stable
             */
            transform(source: any /*undefined*/, destination: any /*undefined*/): Circle;
        }
    }

    class GeometryCollection extends GeometryCollection.__Class { }
    module GeometryCollection {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends Geometry.__Class {
    
            /**
             * @classdesc
             * An array of {@link ol.geom.Geometry} objects.
             *
             * @constructor
             * @extends {ol.geom.Geometry}
             * @param {Array.<ol.geom.Geometry>=} opt_geometries Geometries.
             * @api stable
             */
            constructor(opt_geometries?: Geometry[]);
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.GeometryCollection} Clone.
             * @api stable
             */
            clone(): GeometryCollection;
    
            /**
             * @return {Array.<ol.geom.Geometry>} Geometries.
             * @api stable
             */
            getGeometries(): Geometry[];
    
            /**
             * @return {Array.<ol.geom.Geometry>} Geometries.
             */
            getGeometriesArray(): Geometry[];
    
            /**
             * @return {boolean} Is empty.
             */
            isEmpty(): boolean;
    
            /**
             * @param {Array.<ol.geom.Geometry>} geometries Geometries.
             * @api stable
             */
            setGeometries(geometries: Geometry[]): void;
    
            /**
             * @param {Array.<ol.geom.Geometry>} geometries Geometries.
             */
            setGeometriesArray(geometries: Geometry[]): void;
    
    
            /**
             * Translate the geometry.
             * @param {number} deltaX Delta X.
             * @param {number} deltaY Delta Y.
             * @api
             */
            translate(deltaX: number, deltaY: number): void;
    
        }
    }

    class LineString extends LineString.__Class { }
    module LineString {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends SimpleGeometry.__Class {
    
            /**
             * @classdesc
             * Linestring geometry.
             *
             * @constructor
             * @extends {ol.geom.SimpleGeometry}
             * @param {Array.<ol.Coordinate>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[], opt_layout?: geom.GeometryLayout);
    
            /**
             * @param {ol.Coordinate} coordinate Coordinate.
             * @api stable
             */
            appendCoordinate(coordinate: ol.Coordinate): void;
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.LineString} Clone.
             * @api stable
             */
            clone(): LineString;
    
            /**
             * Returns the coordinate at `m` using linear interpolation, or `null` if no
             * such coordinate exists.
             *
             * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
             * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
             * M will return the first coordinate and Ms greater than the last M will
             * return the last coordinate.
             *
             * @param {number} m M.
             * @param {boolean=} opt_extrapolate Extrapolate.
             * @return {ol.Coordinate} Coordinate.
             * @api stable
             */
            getCoordinateAtM(m: number, opt_extrapolate?: boolean): ol.Coordinate;
    
            /**
             * @return {Array.<ol.Coordinate>} Coordinates.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[];
    
            /**
             * @return {number} Length (on projected plane).
             * @api stable
             */
            getLength(): number;
    
            /**
             * @return {Array.<number>} Flat midpoint.
             */
            getFlatMidpoint(): number[];
    
            /**
             * @param {Array.<ol.Coordinate>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[], opt_layout?: geom.GeometryLayout): void;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             */
            setFlatCoordinates(layout: geom.GeometryLayout, flatCoordinates: number[]): void;
        }
    }

    class MultiLineString extends MultiLineString.__Class { }
    module MultiLineString {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends SimpleGeometry.__Class {
    
            /**
             * @classdesc
             * Multi-linestring geometry.
             *
             * @constructor
             * @extends {ol.geom.SimpleGeometry}
             * @param {Array.<Array.<ol.Coordinate>>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[][], opt_layout?: geom.GeometryLayout);
    
            /**
             * @param {ol.geom.LineString} lineString LineString.
             * @api stable
             */
            appendLineString(lineString: LineString): void;
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.MultiLineString} Clone.
             * @api stable
             */
            clone(): MultiLineString;
    
            /**
             * Returns the coordinate at `m` using linear interpolation, or `null` if no
             * such coordinate exists.
             *
             * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
             * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
             * M will return the first coordinate and Ms greater than the last M will
             * return the last coordinate.
             *
             * `opt_interpolate` controls interpolation between consecutive LineStrings
             * within the MultiLineString. If `opt_interpolate` is `true` the coordinates
             * will be linearly interpolated between the last coordinate of one LineString
             * and the first coordinate of the next LineString.  If `opt_interpolate` is
             * `false` then the function will return `null` for Ms falling between
             * LineStrings.
             *
             * @param {number} m M.
             * @param {boolean=} opt_extrapolate Extrapolate.
             * @param {boolean=} opt_interpolate Interpolate.
             * @return {ol.Coordinate} Coordinate.
             * @api stable
             */
            getCoordinateAtM(m: number, opt_extrapolate?: boolean, opt_interpolate?: boolean): ol.Coordinate;
    
            /**
             * @return {Array.<Array.<ol.Coordinate>>} Coordinates.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[][];
    
            /**
             * @return {Array.<number>} Ends.
             */
            getEnds(): number[];
    
            /**
             * @param {number} index Index.
             * @return {ol.geom.LineString} LineString.
             * @api stable
             */
            getLineString(index: number): LineString;
    
            /**
             * @return {Array.<ol.geom.LineString>} LineStrings.
             * @api stable
             */
            getLineStrings(): LineString[];
    
            /**
             * @return {Array.<number>} Flat midpoints.
             */
            getFlatMidpoints(): number[];
    
            /**
             * @param {Array.<Array.<ol.Coordinate>>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[][], opt_layout?: geom.GeometryLayout): void;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @param {Array.<number>} ends Ends.
             */
            setFlatCoordinates(layout: geom.GeometryLayout, flatCoordinates: number[], ends: number[]): void;
    
            /**
             * @param {Array.<ol.geom.LineString>} lineStrings LineStrings.
             */
            setLineStrings(lineStrings: LineString[]): void;
        }
    }

    class MultiPoint extends MultiPoint.__Class { }
    module MultiPoint {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends SimpleGeometry.__Class {
    
            /**
             * @classdesc
             * Multi-point geometry.
             *
             * @constructor
             * @extends {ol.geom.SimpleGeometry}
             * @param {Array.<ol.Coordinate>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[], opt_layout?: geom.GeometryLayout);
    
            /**
             * @param {ol.geom.Point} point Point.
             * @api stable
             */
            appendPoint(point: Point): void;
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.MultiPoint} Clone.
             * @api stable
             */
            clone(): MultiPoint;
    
            /**
             * @return {Array.<ol.Coordinate>} Coordinates.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[];
    
            /**
             * @param {number} index Index.
             * @return {ol.geom.Point} Point.
             * @api stable
             */
            getPoint(index: number): Point;
    
            /**
             * @return {Array.<ol.geom.Point>} Points.
             * @api stable
             */
            getPoints(): Point[];
    
            /**
             * @param {Array.<ol.Coordinate>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[], opt_layout?: geom.GeometryLayout): void;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             */
            setFlatCoordinates(layout: geom.GeometryLayout, flatCoordinates: number[]): void;
        }
    }

    class MultiPolygon extends MultiPolygon.__Class { }
    module MultiPolygon {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends SimpleGeometry.__Class {
    
            /**
             * @classdesc
             * Multi-polygon geometry.
             *
             * @constructor
             * @extends {ol.geom.SimpleGeometry}
             * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            constructor(coordinates: ol.Coordinate[][][], opt_layout?: geom.GeometryLayout);
    
            /**
             * @param {ol.geom.Polygon} polygon Polygon.
             * @api stable
             */
            appendPolygon(polygon: Polygon): void;
    
            /**
             * Make a complete copy of the geometry.
             * @return {!ol.geom.MultiPolygon} Clone.
             * @api stable
             */
            clone(): MultiPolygon;
    
            /**
             * @return {number} Area (on projected plane).
             * @api stable
             */
            getArea(): number;
    
            /**
             * @return {Array.<Array.<Array.<ol.Coordinate>>>} Coordinates.
             * @api stable
             */
            getCoordinates(): ol.Coordinate[][][];
    
            /**
             * @return {Array.<Array.<number>>} Endss.
             */
            getEndss(): number[][];
    
            /**
             * @return {Array.<number>} Flat interior points.
             */
            getFlatInteriorPoints(): number[];
    
            /**
             * @return {ol.geom.MultiPoint} Interior points.
             * @api stable
             */
            getInteriorPoints(): MultiPoint;
    
            /**
             * @return {Array.<number>} Oriented flat coordinates.
             */
            getOrientedFlatCoordinates(): number[];
    
            /**
             * @param {number} index Index.
             * @return {ol.geom.Polygon} Polygon.
             * @api stable
             */
            getPolygon(index: number): Polygon;
    
            /**
             * @return {Array.<ol.geom.Polygon>} Polygons.
             * @api stable
             */
            getPolygons(): Polygon[];
    
            /**
             * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates Coordinates.
             * @param {ol.geom.GeometryLayout=} opt_layout Layout.
             * @api stable
             */
            setCoordinates(coordinates: ol.Coordinate[][][], opt_layout?: geom.GeometryLayout): void;
    
            /**
             * @param {ol.geom.GeometryLayout} layout Layout.
             * @param {Array.<number>} flatCoordinates Flat coordinates.
             * @param {Array.<Array.<number>>} endss Endss.
             */
            setFlatCoordinates(layout: geom.GeometryLayout, flatCoordinates: number[], endss: number[][]): void;
    
            /**
             * @param {Array.<ol.geom.Polygon>} polygons Polygons.
             */
            setPolygons(polygons: Polygon[]): void;
        }
    }

    /**
     * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
     * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
     * `'GeometryCollection'`, `'Circle'`.
     * @enum {string}
     * @api stable
     */
    enum GeometryType { POINT, LINE_STRING, LINEAR_RING, POLYGON, MULTI_POINT, MULTI_LINE_STRING, MULTI_POLYGON, GEOMETRY_COLLECTION, CIRCLE } 

    /**
     * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
     * or measure ('M') coordinate is available. Supported values are `'XY'`,
     * `'XYZ'`, `'XYM'`, `'XYZM'`.
     * @enum {string}
     * @api stable
     */
    enum GeometryLayout { XY, XYZ, XYM, XYZM } 

    /**
     * @param {ol.geom.SimpleGeometry} simpleGeometry Simple geometry.
     * @param {goog.vec.Mat4.Number} transform Transform.
     * @param {Array.<number>=} opt_dest Destination.
     * @return {Array.<number>} Transformed flat coordinates.
     */
    function transformSimpleGeometry2D(simpleGeometry: SimpleGeometry, transform: goog.vec.Mat4.Number, opt_dest?: number[]): number[];
}

declare module ol.geom.flat.transform {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {goog.vec.Mat4.Number} transform Transform.
     * @param {Array.<number>=} opt_dest Destination.
     * @return {Array.<number>} Transformed coordinates.
     */
    function transform2D(flatCoordinates: number[], offset: number, end: number, stride: number, transform: goog.vec.Mat4.Number, opt_dest?: number[]): number[];

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @param {Array.<number>=} opt_dest Destination.
     * @return {Array.<number>} Transformed coordinates.
     */
    function translate(flatCoordinates: number[], offset: number, end: number, stride: number, deltaX: number, deltaY: number, opt_dest?: number[]): number[];
}

declare module ol.geom.flat.area {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @return {number} Area.
     */
    function linearRing(flatCoordinates: number[], offset: number, end: number, stride: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @return {number} Area.
     */
    function linearRings(flatCoordinates: number[], offset: number, ends: number[], stride: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @return {number} Area.
     */
    function linearRingss(flatCoordinates: number[], offset: number, endss: number[][], stride: number): number;
}

declare module ol.geom.flat.closest {

    /**
     * Returns the point on the 2D line segment flatCoordinates[offset1] to
     * flatCoordinates[offset2] that is closest to the point (x, y).  Extra
     * dimensions are linearly interpolated.
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset1 Offset 1.
     * @param {number} offset2 Offset 2.
     * @param {number} stride Stride.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {Array.<number>} closestPoint Closest point.
     */
    function point(flatCoordinates: number[], offset1: number, offset2: number, stride: number, x: number, y: number, closestPoint: number[]): void;

    /**
     * Return the squared of the largest distance between any pair of consecutive
     * coordinates.
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} maxSquaredDelta Max squared delta.
     * @return {number} Max squared delta.
     */
    function getMaxSquaredDelta(flatCoordinates: number[], offset: number, end: number, stride: number, maxSquaredDelta: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} maxSquaredDelta Max squared delta.
     * @return {number} Max squared delta.
     */
    function getsMaxSquaredDelta(flatCoordinates: number[], offset: number, ends: number[], stride: number, maxSquaredDelta: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @param {number} maxSquaredDelta Max squared delta.
     * @return {number} Max squared delta.
     */
    function getssMaxSquaredDelta(flatCoordinates: number[], offset: number, endss: number[][], stride: number, maxSquaredDelta: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} maxDelta Max delta.
     * @param {boolean} isRing Is ring.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {Array.<number>} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @param {Array.<number>=} opt_tmpPoint Temporary point object.
     * @return {number} Minimum squared distance.
     */
    function getClosestPoint(flatCoordinates: number[], offset: number, end: number, stride: number, maxDelta: number, isRing: boolean, x: number, y: number, closestPoint: number[], minSquaredDistance: number, opt_tmpPoint?: number[]): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} maxDelta Max delta.
     * @param {boolean} isRing Is ring.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {Array.<number>} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @param {Array.<number>=} opt_tmpPoint Temporary point object.
     * @return {number} Minimum squared distance.
     */
    function getsClosestPoint(flatCoordinates: number[], offset: number, ends: number[], stride: number, maxDelta: number, isRing: boolean, x: number, y: number, closestPoint: number[], minSquaredDistance: number, opt_tmpPoint?: number[]): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @param {number} maxDelta Max delta.
     * @param {boolean} isRing Is ring.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {Array.<number>} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @param {Array.<number>=} opt_tmpPoint Temporary point object.
     * @return {number} Minimum squared distance.
     */
    function getssClosestPoint(flatCoordinates: number[], offset: number, endss: number[][], stride: number, maxDelta: number, isRing: boolean, x: number, y: number, closestPoint: number[], minSquaredDistance: number, opt_tmpPoint?: number[]): number;
}


declare module ol.geom.flat.deflate {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {ol.Coordinate} coordinate Coordinate.
     * @param {number} stride Stride.
     * @return {number} offset Offset.
     */
    function coordinate(flatCoordinates: number[], offset: number, coordinate: Coordinate, stride: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<ol.Coordinate>} coordinates Coordinates.
     * @param {number} stride Stride.
     * @return {number} offset Offset.
     */
    function coordinates(flatCoordinates: number[], offset: number, coordinates: Coordinate[], stride: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<ol.Coordinate>>} coordinatess Coordinatess.
     * @param {number} stride Stride.
     * @param {Array.<number>=} opt_ends Ends.
     * @return {Array.<number>} Ends.
     */
    function coordinatess(flatCoordinates: number[], offset: number, coordinatess: Coordinate[][], stride: number, opt_ends?: number[]): number[];

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinatesss Coordinatesss.
     * @param {number} stride Stride.
     * @param {Array.<Array.<number>>=} opt_endss Endss.
     * @return {Array.<Array.<number>>} Endss.
     */
    function coordinatesss(flatCoordinates: number[], offset: number, coordinatesss: Coordinate[][][], stride: number, opt_endss?: number[][]): number[][];
}



declare module ol.geom.flat.inflate {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {Array.<ol.Coordinate>=} opt_coordinates Coordinates.
     * @return {Array.<ol.Coordinate>} Coordinates.
     */
    function coordinates(flatCoordinates: number[], offset: number, end: number, stride: number, opt_coordinates?: Coordinate[]): Coordinate[];

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {Array.<Array.<ol.Coordinate>>=} opt_coordinatess Coordinatess.
     * @return {Array.<Array.<ol.Coordinate>>} Coordinatess.
     */
    function coordinatess(flatCoordinates: number[], offset: number, ends: number[], stride: number, opt_coordinatess?: Coordinate[][]): Coordinate[][];

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @param {Array.<Array.<Array.<ol.Coordinate>>>=} opt_coordinatesss
     *     Coordinatesss.
     * @return {Array.<Array.<Array.<ol.Coordinate>>>} Coordinatesss.
     */
    function coordinatesss(flatCoordinates: number[], offset: number, endss: number[][], stride: number, opt_coordinatesss?: Coordinate[][][]): Coordinate[][][];
}
declare module ol.geom.flat.simplify {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {boolean} highQuality Highest quality.
     * @param {Array.<number>=} opt_simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @return {Array.<number>} Simplified line string.
     */
    function lineString(flatCoordinates: number[], offset: number, end: number, stride: number, squaredTolerance: number, highQuality: boolean, opt_simplifiedFlatCoordinates?: number[]): number[];

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {Array.<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @return {number} Simplified offset.
     */
    function douglasPeucker(flatCoordinates: number[], offset: number, end: number, stride: number, squaredTolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {Array.<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @param {Array.<number>} simplifiedEnds Simplified ends.
     * @return {number} Simplified offset.
     */
    function douglasPeuckers(flatCoordinates: number[], offset: number, ends: number[], stride: number, squaredTolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number, simplifiedEnds: number[]): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {Array.<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @param {Array.<Array.<number>>} simplifiedEndss Simplified endss.
     * @return {number} Simplified offset.
     */
    function douglasPeuckerss(flatCoordinates: number[], offset: number, endss: number[][], stride: number, squaredTolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number, simplifiedEndss: number[][]): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {Array.<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @return {number} Simplified offset.
     */
    function radialDistance(flatCoordinates: number[], offset: number, end: number, stride: number, squaredTolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number): number;

    /**
     * @param {number} value Value.
     * @param {number} tolerance Tolerance.
     * @return {number} Rounded value.
     */
    function snap(value: number, tolerance: number): number;

    /**
     * Simplifies a line string using an algorithm designed by Tim Schaub.
     * Coordinates are snapped to the nearest value in a virtual grid and
     * consecutive duplicate coordinates are discarded.  This effectively preserves
     * topology as the simplification of any subsection of a line string is
     * independent of the rest of the line string.  This means that, for examples,
     * the common edge between two polygons will be simplified to the same line
     * string independently in both polygons.  This implementation uses a single
     * pass over the coordinates and eliminates intermediate collinear points.
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} tolerance Tolerance.
     * @param {Array.<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @return {number} Simplified offset.
     */
    function quantize(flatCoordinates: number[], offset: number, end: number, stride: number, tolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} tolerance Tolerance.
     * @param {Array.<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @param {Array.<number>} simplifiedEnds Simplified ends.
     * @return {number} Simplified offset.
     */
    function quantizes(flatCoordinates: number[], offset: number, ends: number[], stride: number, tolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number, simplifiedEnds: number[]): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @param {number} tolerance Tolerance.
     * @param {Array.<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @param {Array.<Array.<number>>} simplifiedEndss Simplified endss.
     * @return {number} Simplified offset.
     */
    function quantizess(flatCoordinates: number[], offset: number, endss: number[][], stride: number, tolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number, simplifiedEndss: number[][]): number;
}

declare module ol.geom.flat.contains {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {ol.Extent} extent Extent.
     * @return {boolean} Contains extent.
     */
    function linearRingContainsExtent(flatCoordinates: number[], offset: number, end: number, stride: number, extent: Extent): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    function linearRingContainsXY(flatCoordinates: number[], offset: number, end: number, stride: number, x: number, y: number): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    function linearRingsContainsXY(flatCoordinates: number[], offset: number, ends: number[], stride: number, x: number, y: number): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    function linearRingssContainsXY(flatCoordinates: number[], offset: number, endss: number[][], stride: number, x: number, y: number): boolean;
}

declare module ol.geom.flat.interiorpoint {

    /**
     * Calculates a point that is likely to lie in the interior of the linear rings.
     * Inspired by JTS's com.vividsolutions.jts.geom.Geometry#getInteriorPoint.
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {Array.<number>} flatCenters Flat centers.
     * @param {number} flatCentersOffset Flat center offset.
     * @param {Array.<number>=} opt_dest Destination.
     * @return {Array.<number>} Destination.
     */
    function linearRings(flatCoordinates: number[], offset: number, ends: number[], stride: number, flatCenters: number[], flatCentersOffset: number, opt_dest?: number[]): number[];

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @param {Array.<number>} flatCenters Flat centers.
     * @return {Array.<number>} Interior points.
     */
    function linearRingss(flatCoordinates: number[], offset: number, endss: number[][], stride: number, flatCenters: number[]): number[];
}

declare module ol.geom.flat.segments {

    /**
     * This function calls `callback` for each segment of the flat coordinates
     * array. If the callback returns a truthy value the function returns that
     * value immediately. Otherwise the function returns `false`.
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {function(ol.Coordinate, ol.Coordinate): T} callback Function
     *     called for each segment.
     * @return {T|boolean} Value.
     * @template T
     */
    function forEach<T>(flatCoordinates: number[], offset: number, end: number, stride: number, callback: (_0: Coordinate, _1: Coordinate) => T): any /*T|boolean*/;
}



declare module ol.geom.flat.intersectsextent {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {ol.Extent} extent Extent.
     * @return {boolean} True if the geometry and the extent intersect.
     */
    function lineString(flatCoordinates: number[], offset: number, end: number, stride: number, extent: Extent): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {ol.Extent} extent Extent.
     * @return {boolean} True if the geometry and the extent intersect.
     */
    function lineStrings(flatCoordinates: number[], offset: number, ends: number[], stride: number, extent: Extent): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {ol.Extent} extent Extent.
     * @return {boolean} True if the geometry and the extent intersect.
     */
    function linearRing(flatCoordinates: number[], offset: number, end: number, stride: number, extent: Extent): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {ol.Extent} extent Extent.
     * @return {boolean} True if the geometry and the extent intersect.
     */
    function linearRings(flatCoordinates: number[], offset: number, ends: number[], stride: number, extent: Extent): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @param {ol.Extent} extent Extent.
     * @return {boolean} True if the geometry and the extent intersect.
     */
    function linearRingss(flatCoordinates: number[], offset: number, endss: number[][], stride: number, extent: Extent): boolean;
}

declare module ol.geom.flat.reverse {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     */
    function coordinates(flatCoordinates: number[], offset: number, end: number, stride: number): void;
}

declare module ol.geom.flat.orient {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @return {boolean} Is clockwise.
     */
    function linearRingIsClockwise(flatCoordinates: number[], offset: number, end: number, stride: number): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @return {boolean} `true` if all rings are correctly oriented, `false`
     *     otherwise.
     */
    function linearRingsAreOriented(flatCoordinates: number[], offset: number, ends: number[], stride: number): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @return {number} End.
     */
    function orientLinearRings(flatCoordinates: number[], offset: number, ends: number[], stride: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @return {number} End.
     */
    function orientLinearRingss(flatCoordinates: number[], offset: number, endss: number[][], stride: number): number;
}

declare module ol.geom.flat {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @return {boolean} `true` if all rings are correctly oriented, `false`
     *     otherwise.
     */
    function linearRingssAreOriented(flatCoordinates: number[], offset: number, endss: number[][], stride: number): boolean;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} m M.
     * @param {boolean} extrapolate Extrapolate.
     * @return {ol.Coordinate} Coordinate.
     */
    function lineStringCoordinateAtM(flatCoordinates: number[], offset: number, end: number, stride: number, m: number, extrapolate: boolean): Coordinate;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} m M.
     * @param {boolean} extrapolate Extrapolate.
     * @param {boolean} interpolate Interpolate.
     * @return {ol.Coordinate} Coordinate.
     */
    function lineStringsCoordinateAtM(flatCoordinates: number[], offset: number, ends: number[], stride: number, m: number, extrapolate: boolean, interpolate: boolean): Coordinate;
}

declare module ol.geom.Polygon {

    /**
     * Create an approximation of a circle on the surface of a sphere.
     * @param {ol.Sphere} sphere The sphere.
     * @param {ol.Coordinate} center Center (`[lon, lat]` in degrees).
     * @param {number} radius The great-circle distance from the center to
     *     the polygon vertices.
     * @param {number=} opt_n Optional number of vertices for the resulting
     *     polygon. Default is `32`.
     * @return {ol.geom.Polygon} The "circular" polygon.
     * @api stable
     */
    function circular(sphere: Sphere, center: Coordinate, radius: number, opt_n?: number): Polygon;

    /**
     * Create a polygon from an extent. The layout used is `XY`.
     * @param {ol.Extent} extent The extent.
     * @return {ol.geom.Polygon} The polygon.
     * @api
     */
    function fromExtent(extent: Extent): Polygon;
}


declare module ol.geom.flat.interpolate {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} fraction Fraction.
     * @param {Array.<number>=} opt_dest Destination.
     * @return {Array.<number>} Destination.
     */
    function lineString(flatCoordinates: number[], offset: number, end: number, stride: number, fraction: number, opt_dest?: number[]): number[];
}

declare module ol.geom.flat.length {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @return {number} Length.
     */
    function lineString(flatCoordinates: number[], offset: number, end: number, stride: number): number;

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @return {number} Perimeter.
     */
    function linearRing(flatCoordinates: number[], offset: number, end: number, stride: number): number;
}

declare module ol.geom.flat.center {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array.<Array.<number>>} endss Endss.
     * @param {number} stride Stride.
     * @return {Array.<number>} Flat centers.
     */
    function linearRingss(flatCoordinates: number[], offset: number, endss: number[][], stride: number): number[];
}

declare module ol.geom.flat.flip {

    /**
     * @param {Array.<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {Array.<number>=} opt_dest Destination.
     * @param {number=} opt_destOffset Destination offset.
     * @return {Array.<number>} Flat coordinates.
     */
    function flipXY(flatCoordinates: number[], offset: number, end: number, stride: number, opt_dest?: number[], opt_destOffset?: number): number[];
}

declare module ol.geom.flat.geodesic {

    /**
    * Generate a great-circle arcs between two lat/lon points.
    * @param {number} lon1 Longitude 1 in degrees.
    * @param {number} lat1 Latitude 1 in degrees.
    * @param {number} lon2 Longitude 2 in degrees.
    * @param {number} lat2 Latitude 2 in degrees.
     * @param {ol.proj.Projection} projection Projection.
    * @param {number} squaredTolerance Squared tolerance.
    * @return {Array.<number>} Flat coordinates.
    */
    function greatCircleArc(lon1: number, lat1: number, lon2: number, lat2: number, projection: proj.Projection, squaredTolerance: number): number[];

    /**
     * Generate a meridian (line at constant longitude).
     * @param {number} lon Longitude.
     * @param {number} lat1 Latitude 1.
     * @param {number} lat2 Latitude 2.
     * @param {ol.proj.Projection} projection Projection.
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Array.<number>} Flat coordinates.
     */
    function meridian(lon: number, lat1: number, lat2: number, projection: proj.Projection, squaredTolerance: number): number[];

    /**
     * Generate a parallel (line at constant latitude).
     * @param {number} lat Latitude.
     * @param {number} lon1 Longitude 1.
     * @param {number} lon2 Longitude 2.
     * @param {ol.proj.Projection} projection Projection.
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Array.<number>} Flat coordinates.
     */
    function parallel(lat: number, lon1: number, lon2: number, projection: proj.Projection, squaredTolerance: number): number[];
}
