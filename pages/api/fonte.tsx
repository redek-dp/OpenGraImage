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
      width: 530,
      height: 600,
    })
  }

  return new ImageResponse(
    (
      <p
        style={{
          backgroundColor: 'white',
          backgroundImage: `url(https://cdn.pixabay.com/photo/2012/12/06/06/29/paper-68833_960_720.jpg)`,
          height: '100%',
          width: '100%',
          fontSize: 25,
          fontFamily: 'Typewriter',
          paddingTop: '100px',
          paddingLeft: '50px',
          lineHeight: '3.20em',
        }}
      >
        {username}
      </p>
    ),
    {
      width: 530,
      height: 600,
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
