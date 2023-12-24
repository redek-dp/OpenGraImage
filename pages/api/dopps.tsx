import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const open = searchParams.get('open')
  const cll = searchParams.get('cll')
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
          
          color: 'black',
          background: `#${cll}`,
          width: '100%',
          height: '100%',
          paddingTop: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="avatar"
          width="110"
          src={`${open}`}
          style={{
            
          }}
        />
        
      </div>
    ),
    {
      width: 150,
      height: 150,
    }
  )
}
