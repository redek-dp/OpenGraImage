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
      width: 150,
      height: 150,
    })
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: `${fots}`,
          color: '#fff5',
          background: '#2c2c3945',
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
            fontSize: 30,
            textAlign: 'center',
            width: '60px',
            height: '60px',
            padding: 13,
            borderRadius: 50,
            color: '#0005',
            background: '#fff5',
            marginBottom: 5,
          }}
        >
          TV
        </span>
        {open}
      </div>
      
    ),
    {
      width: 150,
      height: 150,
    }
  )
}
