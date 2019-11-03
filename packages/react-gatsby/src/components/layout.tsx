import styled from '@emotion/styled/macro';
import { Layout as AntdLayout } from 'antd';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

const FullHeightLayout = styled(AntdLayout)`
  min-height: 100vh;
`;

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

  return <FullHeightLayout>{children}</FullHeightLayout>;
};
