import Document, {
    DocumentContext, Head, Html, Main,
    NextScript
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // console.log('initial props : ', initialProps);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full" >
        <Head />
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
