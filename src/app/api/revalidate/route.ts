import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.SANITY_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get(SIGNATURE_HEADER_NAME)
    const bodyText = await req.text()

    if (!signature || !(await isValidSignature(bodyText, signature, secret))) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    const body = JSON.parse(bodyText) as {
      _type?: string
      slug?: { current?: string }
    }

    if (!body?._type) {
      return new NextResponse('Bad Request', { status: 400 })
    }

    // Revalidate the main blog listing
    revalidatePath('/blog')

    // Revalidate specific post page if a slug is present
    if (body.slug?.current) {
      revalidatePath(`/blog/${body.slug.current}`)
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
    })
  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 })
  }
}