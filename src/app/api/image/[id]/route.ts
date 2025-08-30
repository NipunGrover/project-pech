export async function GET(_request: Request, { params }: { params: { id: string } }) {
	const { id } = params;
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
