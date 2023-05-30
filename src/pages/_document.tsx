//@ts-nocheck

import { Html, Head, Main, NextScript } from "next/document";

const addJsonLd = () => {
  return {
    __html: `
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "name": "Дом Здравља Велико Градиште",
      "image": "http://dzvg.rs/images/hero.webp",
      "telephone": "012/662-591 012/7160-700",
      "email": "info@dzvg.rs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Војводе Путника 28",
        "addressLocality": "Велико Градиште",
        "addressCountry": "Srbija",
        "postalCode": "12220"
      }
    }
    `,
  };
};

export default function Document() {
  return (
    <Html lang="rs">
      <Head>
        <meta name="robots" content="index,follow" />
        <meta name="language" content="Serbian" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <body style={{ backgroundColor: "#fff6ee" }}>
        <Main />
        <NextScript />
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd()}
        key="item-jsonld"
      />
    </Html>
  );
}
