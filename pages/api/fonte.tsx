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
      width: 540,
      height: 600,
    })
  }

  return new ImageResponse(
    (
      <p
        style={{
          margin: '0px',
          backgroundColor: 'white',
          backgroundImage: `url(https://cdn.pixabay.com/photo/2022/11/22/06/52/parchment-7608849_960_720.jpg)`,
          height: '100%',
          width: '100%',
          fontSize: 25,
          fontFamily: 'Typewriter',
          paddingTop: '100px',
          paddingLeft: '50px',
          paddingRight: '50px',
          lineHeight: '3.20em',
        }}
      >
        {username}
      </p>
    ),
    {
      width: 540,
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
