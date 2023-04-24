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
      <a href="/api/dynamic-image?username=davidsonbpe" target="_blank">?username=davidsonbpe</a>
      <hr></hr>
      <a href="/api/dynamic-git?username=davidsonbpe" target="_blank">?username=davidsonbpe</a>
      <hr></hr>
      <a href="/api/static" target="_blank">static</a>
      <hr></hr>
      <a href="/api/dyimage?username=davidsonbpe" target="_blank">dyimage?username=davidsonbpe</a>
      <hr></hr>
      <a href="/api/dopmage?username=https://dav7.pages.dev/d-framework/icon/512.png" target="_blank">dopmage?username=https://dav7.pages.dev/d-framework/icon/512.png</a>
      <hr></hr>
      <a href="/api/iframe?username=dav7.pages.dev/d-framework/icon/512.png" target="_blank">iframe?username=dav7.pages.dev/d-framework/icon/512.png</a>
      <hr></hr>
    </div>
  )
}
