export default async function query({ query, variables = {} }) {
	const result = await fetch(process.env.URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query, variables }),
	}).then((response) => response.json())

	return result.data;
}