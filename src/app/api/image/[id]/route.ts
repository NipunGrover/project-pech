import type { NextRequest } from "next/server";

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
	const { id } = await ctx.params;

	if (!id) {
		return new Response("Missing image id", { status: 400 });
	}

	const token = process.env.DIRECTUS_TOKEN; // eslint-disable-line node/prefer-global/process

	try {
		const imageResponse = await fetch(
			`${process.env.DIRECTUS_URL}/assets/${id}?access_token=${token}`, // eslint-disable-line node/prefer-global/process
		);

		if (!imageResponse.ok) {
			return new Response("Image not found", { status: 404 });
		}

		const imageBuffer = await imageResponse.arrayBuffer();

		return new Response(imageBuffer, {
			headers: {
				"Content-Type": imageResponse.headers.get("Content-Type") || "image/jpeg",
				"Cache-Control": "public, max-age=31536000",
			},
		});
	} catch (error) {
		console.error("Failed to fetch image:", error);
		return new Response("Internal Server Error", { status: 500 });
	}
}
