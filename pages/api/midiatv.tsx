import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const open = searchParams.get('open')
  const fots = searchParams.get('fots')
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
          fontSize: `${fots}`,
          color: 'black',
          background: '#0000002e',
          width: '100%',
          height: '100%',
          paddingTop: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <span
          style={{
            fontSize: 60,
            textAlign: 'center',
            width: '100px',
            height: '100px',
            padding: 13,
            borderRadius: 50,
            color: '#fff',
            background: 'black',
            marginBottom: 5,
          }}
        >
          TV
        </span>
        {open}
      </div>
      
    ),
    {
      width: 512,
      height: 512,
    }
  )
}
