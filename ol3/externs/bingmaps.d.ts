declare class BingMapsCoverageArea {
	bbox: Array<number>;
	zoomMax: number;
	zoomMin: number;
}

declare class BingMapsImageryProvider {
	attribution: string;
	coverageAreas:Array<BingMapsCoverageArea>;
}

declare class BingMapsImageryMetadataResponse {
	authenticationResultCode: string;
	brandLogoUri: string;
	copyright: string;
	resourceSets: Array<BingMapsResourceSet>;
	statusCode: number;
	statusDescription: string;
	traceId:string;
}

declare class BingMapsResource {
	imageHeight: number;
	imageUrl: string;
	imageUrlSubdomains: Array<string>;
	imageWidth: number;
	imageryProviders: Array<BingMapsImageryProvider>;
	vintageEnd: Object;
	vintageStart: Object;
	zoomMax: number;
	zoomMin: number;
}

declare class BingMapsResourceSet {
	estimatedTotal: number;
	resources:Array<BingMapsResource>;
}