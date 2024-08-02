import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Galería de imágenes mostrando mi trabajo diario y cualquier cosa interesante que hago."
          />
          <meta property="og:site_name" content="Galería de Kevin Quinde" />
          <meta
            property="og:description"
            content="Explora mi trabajo diario y otras cosas interesantes que hago en esta galería de imágenes."
          />
          <meta property="og:title" content="Galería Profesional de Kevin Quinde" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Galería Profesional de Kevin Quinde" />
          <meta
            name="twitter:description"
            content="Galería de imágenes mostrando mi trabajo diario y cualquier cosa interesante que hago."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
