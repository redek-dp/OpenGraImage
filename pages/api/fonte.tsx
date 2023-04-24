import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

const font = fetch(new URL('../../assets/TYPEWR__.TTF', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export default async function handler(req: NextRequest) {
  const fontData = await font
  const { searchParams } = req.nextUrl
  const username = searchParams.get('username')
  if (!username) {
    return new ImageResponse(<>{'Visit with "?username=vercel"'}</>, {
      width: 700,
      height: 700,
    })
  }

  return new ImageResponse(
    (
      <p
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          fontSize: 25,
          fontFamily: 'Typewriter',
          paddingTop: '100px',
          paddingLeft: '50px',
        }}
      >
        {username}
      </p>
    ),
    {
      width: 700,
      height: 700,
      fonts: [
        {
          name: 'Typewriter',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
