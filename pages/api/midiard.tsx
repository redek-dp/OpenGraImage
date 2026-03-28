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
      width: 100,
      height: 100,
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
            fontSize: 20,
            textAlign: 'center',
            width: '50px',
            height: '50px',
            padding: 10,
            borderRadius: 50,
            color: '#0005',
            background: '#fff5',
            marginBottom: 4,
          }}
        >
          RD
        </span>
        {open}
      </div>
      
    ),
    {
      width: 100,
      height: 100,
    }
  )
}
