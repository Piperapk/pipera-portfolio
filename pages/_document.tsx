import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html className="scroll-smooth" lang='en'>
        <Head>
        </Head>
        <body className='transition-colors duration-300 dark:bg-slate-800'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument