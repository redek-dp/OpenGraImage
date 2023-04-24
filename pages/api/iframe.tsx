import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
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
      <div
        style={{
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="avatar"
          src={`https://${username}`}
          style={{
            width: '100%',
            height: '100%',
          }}
        />

      </div>
    ),
    {
      width: 700,
      height: 700,
    }
  )
}
