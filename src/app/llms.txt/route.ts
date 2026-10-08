import { llmsIndex, textResponse } from '../../seo/llms'

export const dynamic = 'force-static'

export function GET() {
  return textResponse(llmsIndex())
}
