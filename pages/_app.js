import React from 'react';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />

      <style jsx>
        {`
          body {
            padding: 0px;
            margin: 0px;
          }

          :global(ul) {
            padding: 0px;
            margin: 0px;
            list-style-type: none;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
