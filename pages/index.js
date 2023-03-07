import Head from 'next/head';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanity Ecommerce App</title>
        <meta
          name="description"
          content="The ecommerce website by next and sanity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography component="h1" variant="h1">
        Sanity Ecommerce App
      </Typography>
    </>
  );
}
