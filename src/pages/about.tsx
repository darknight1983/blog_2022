import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
      <>
        <h1>About Me</h1>
        <Link to='/'>Home</Link>
      </>
    </Layout>
  );
};

export default AboutPage;
