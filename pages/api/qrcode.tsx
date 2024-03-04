import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const open = searchParams.get('open')
  if (!open) {
    return new ImageResponse(<>{'Visit with "?open=Conteudo"'}</>, {
      width: 512,
      height: 512,
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
          src={`https://qrdapi.vercel.app/qr?color=black&background=white&size=10&content=${open}`}
          style={{
            width: '100%',
            height: '100%',
          }}
        />

      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  )
}
