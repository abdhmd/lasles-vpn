import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel='icon' href='/favicon.ico' />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
     <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"/>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "LaslesVPN",
}

export default Meta;
