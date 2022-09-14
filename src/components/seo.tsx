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

type SeoProps = {
  pageTitle: string | undefined;
};

const SEO = ({ pageTitle }: SeoProps) => {
  const data = useStaticQuery(pageData);
  const { title } = data.site.sitemetadata;
  return (
    <title>
      {title} | {pageTitle}
    </title>
  );
};

export default SEO;
