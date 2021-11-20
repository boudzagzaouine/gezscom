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
      <Html >
        <Head />
        <body className="#f0f2f5">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
