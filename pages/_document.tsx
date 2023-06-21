import Document, { Head, Html, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  render() {
    return (
      <Html>
        
         <script
            dangerouslySetInnerHTML={{
              __html: `  
<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N954D8W');
<!-- End Google Tag Manager -->
       </script>
          `
             }}
          />
        <meta name="google-site-verification" content="i9ZPKp9sc1ZC_RaStvhlqGkSIJ9gFjn8SJPPqJOQxRE" />
        <Head />
        <body className="loading">
         <noscript
            dangerouslySetInnerHTML={{
              __html: `  
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N954D8W"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `
            }}
          />
          <scrip src="http://cdn.usehardal.com/collect.js" data-project-id="056294"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
