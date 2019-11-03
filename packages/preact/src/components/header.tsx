import { Layout, Menu } from 'antd';
import { html } from 'htm/preact';
import { Link } from 'preact-router/match';

export const Header = () => html`
  <${Layout.Header}>
    <${Menu} mode="horizontal">
      <${Menu.Item}>
        <${Link} href="/">Home<//>
      <//>
      <${Menu.Item}>
        <${Link} href="/movies">Movies<//>
      <//>
    <//>
  <//>
`;
