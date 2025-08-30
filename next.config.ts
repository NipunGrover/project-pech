import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		// eslint-disable-next-line node/prefer-global/process
		remotePatterns: [new URL(`${process.env.DIRECTUS_URL}/**`)],
	},
};

export default nextConfig;
