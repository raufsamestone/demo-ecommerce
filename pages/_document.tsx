import Document, { Head, Html, Main, NextScript } from 'next/document'
import { useEffect } from 'react'
import SendToHardal from 'hardal'

const config = {
  apiKey: '',
  customDomain: 'eu.hardal.analyticahouse.com',
  projectId: 593808,
  eventType: 'h_page_view',
  eventValue: '',
  eventData: {
    path: typeof window !== 'undefined' ? window.location.pathname : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    // Add any properties as needed
  },
}

const MyDocument = () => {
  useEffect(() => {
    const trackHistoryChanges = () => {
      SendToHardal(config)
    }

    const checkReadyStateAndTrack = () => {
      if (document.readyState === 'complete') {
        trackHistoryChanges()
      } else {
        document.addEventListener('readystatechange', checkReadyStateAndTrack)
      }
    }

    checkReadyStateAndTrack()
  }, [])

  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://stape.analyticahouse.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N954D8W');
`,
          }}
        />
        <meta
          name="google-site-verification"
          content="i9ZPKp9sc1ZC_RaStvhlqGkSIJ9gFjn8SJPPqJOQxRE"
        />
        <script
          src="https://example.com/stats/collect.js"
          data-project-id="056294"
        ></script>
      </Head>
      <body className="loading">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
<iframe src="https://stape.analyticahouse.com/ns.html?id=GTM-N954D8W"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
