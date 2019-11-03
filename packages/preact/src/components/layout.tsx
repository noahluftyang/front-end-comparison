import styled from '@emotion/styled/macro';
import { Layout as AntdLayout } from 'antd';
import { html } from 'htm/preact';

import { Header } from './header';

const FullHeightLayout = styled(AntdLayout)`
  min-height: 100vh;
`;

export const Layout = ({ children }) => html`
  <${FullHeightLayout}>
    <${Header} />
    <${AntdLayout.Content}>
      ${children}
    <//>
  <//>
`;
