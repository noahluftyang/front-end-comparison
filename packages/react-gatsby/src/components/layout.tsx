import { Layout as AntdLayout } from 'antd';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Layout = ({ children }) => {
  // const data = useStaticQuery(query);

  return <AntdLayout>{children}</AntdLayout>;
};
