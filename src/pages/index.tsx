import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout pageTitle='Testing Testing'>
      <>
        <Link to='/about'>About</Link>
      </>
    </Layout>
  );
};

export default IndexPage;

// SEO

export const Head = () => <title>Home Page</title>;
