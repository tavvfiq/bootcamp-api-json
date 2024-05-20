const dataJson = require('./data.json')

export const dynamic = 'force-dynamic'

export function GET(request) {
	return new Response(JSON.stringify(dataJson))
}
