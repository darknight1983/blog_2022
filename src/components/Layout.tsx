import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const pageData = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type LayoutProps = {
  pageTitle: string;
  children?: any; // Please figure out what the proper type would be in this case.
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(pageData);
  const { title } = data.site.siteMetadata;
  return (
    <div>
      <h1>{pageTitle}</h1>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
