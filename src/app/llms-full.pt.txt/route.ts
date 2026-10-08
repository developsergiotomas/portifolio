import { llmsFull, textResponse } from '../../seo/llms'

export const dynamic = 'force-static'

export function GET() {
  return textResponse(llmsFull('pt'))
}
