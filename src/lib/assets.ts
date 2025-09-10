/**
 * Generate a URL for a Directus asset using the proxy API route
 * This ensures proper authentication and avoids exposing credentials to the client
 *
 * @param assetId - The Directus asset ID
 * @returns The proxied asset URL
 */
export function getDirectusAssetUrl(assetId: string): string {
	return `/api/image/${assetId}`;
}

/**
 * Generate a URL for a Directus asset with optional fallback
 *
 * @param assetId - The Directus asset ID (optional)
 * @param fallback - Optional fallback URL if assetId is not provided
 * @returns The proxied asset URL or fallback
 */
export function getDirectusAssetUrlWithFallback(assetId?: string, fallback?: string): string | undefined {
	if (!assetId) {
		return fallback;
	}
	return getDirectusAssetUrl(assetId);
}
