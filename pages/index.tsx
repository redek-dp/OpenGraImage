import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <meta
          name="og:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/vercel`
          }
        />
      </Head>
      <h1>A page with Open Graph Image.</h1>
      <a href="/api/dopp?cll=381958&open=dav7.pages.dev/d-framework/icon/512.png" target="_blank">dopp?cll=381958&open=dav7.pages.dev/d-framework/icon/512.png</a>
      <hr></hr>
      <a href="/api/qrcode?open=00020126450014BR.GOV.BCB.PIX" target="_blank">qrcode?open=00020126450014BR.GOV.BCB.PIX</a>
      <hr></hr>
      <a href="/api/dopx?open=dav7.pages.dev/d-framework/icon/512.png" target="_blank">dopx?open=dav7.pages.dev/d-framework/icon/512.png</a>
      <hr></hr>
      <a href="/api/fonte?open=Certamente%20que%20a%20bondade%20e%20a%20misericórdia%20me%20seguirão%20todos%20os%20dias%20da%20minha%20vida;%20e%20habitarei%20na%20casa%20do%20Senhor%20por%20longos%20dias.%20%20Salmos%2023:6." target="_blank">/fonte?open=Certamente....</a>
      <hr></hr>
      <a href="/api/iframe?open=dav7.pages.dev/d-framework/icon/512.png" target="_blank">iframe?open=dav7.pages.dev/d-framework/icon/512.png</a>
      <hr></hr>
      <a href="/api/dopmage?open=dav7.pages.dev/d-framework/icon/512.png" target="_blank">dopmage?open=dav7.pages.dev/d-framework/icon/512.png</a>
      <hr></hr>
      <a href="/api/midia?open=Dev7" target="_blank">/midia?open=Dev7</a>
      <hr></hr>
      <a href="/api/dyimage?username=davidsonbpe" target="_blank">dyimage?username=davidsonbpe</a>
      <hr></hr>
      <a href="/api/dynamic-image?username=davidsonbpe" target="_blank">dynamic-image?username=davidsonbpe</a>
      <hr></hr>
      
    </div>
  )
}
