import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';


export default function Plugins(): JSX.Element {

  return (
    <Layout
      title="Latest Version"
      description="Statistical version information.">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Container className='py-5'>
        <h1 id="latest_version">1.4.2</h1>
      </Container>
    </Layout>
  )
}
