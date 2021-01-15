import React from 'react';
import NextHead from 'next/head';

export interface MetaProps {
  /**
   * Title for the page
   */
  title: string;

  /**
   * about 255 characters/spaces WORDS relevant to the content of the actual page
   */
  description: string;

  /**
   * Comma separated keywords
   */
  keywords: string;

  /**
   * about 96 characters/spaces PARAGRAPH describing the actual page content within your site
   */
  abstract: string;
  otherElements: any;
}

const Meta = (props: MetaProps & { canonical: string }) => {
  const { title, canonical, keywords, description, abstract, otherElements } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={description} />
      <meta property="og:site_name" content="Sam Vasta" />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="Sam Vasta" />
      <meta name="twitter:creator" content="Sam Vasta" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />
      <meta name="keywords" lang="en-us" content={keywords} />
      <meta name="Abstract" content={abstract} />

      {otherElements}

      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <meta content="utf-8" httpEquiv="encoding" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Fira+Sans:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
};

export default Meta;
