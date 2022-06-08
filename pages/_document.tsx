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
})(window,document,'script','dataLayer','GTM-NMHXJ2D');
<!-- End Google Tag Manager -->
       </script>
          `
             }}
          />
        
        <Head />
        <body className="loading">
         <script
            dangerouslySetInnerHTML={{
              __html: `  
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMHXJ2D"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       </script>
          `
             }}
          />
          

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
