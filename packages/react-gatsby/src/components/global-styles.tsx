import { css, Global } from '@emotion/core';
import * as React from 'react';

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  blockquote,
  body,
  dd,
  dl,
  figcaption,
  figure,
  h1,
  h2,
  h3,
  h4,
  li,
  ol[class],
  p,
  ul[class] {
    margin: 0;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  article > * + * {
    margin-top: 1rem;
  }

  ol[class],
  ul[class] {
    list-style: none;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  @media (prefers-reduces-motion: reduce) {
    * {
      animation-play-state: paused;
      scroll-behavior: auto;
      transition: none;
    }
  }

  /* * {
    background-color: rgba(255, 0, 0, 0.2);
  }
  * * {
    background-color: rgba(0, 255, 0, 0.2);
  }
  * * * {
    background-color: rgba(0, 0, 255, 0.2);
  }
  * * * * {
    background-color: rgba(255, 0, 255, 0.2);
  }
  * * * * * {
    background-color: rgba(0, 255, 255, 0.2);
  }
  * * * * * * {
    background-color: rgba(255, 255, 0, 0.2);
  }
  * * * * * * * {
    background-color: rgba(255, 0, 0, 0.2);
  }
  * * * * * * * * {
    background-color: rgba(0, 255, 0, 0.2);
  }
  * * * * * * * * * {
    background-color: rgba(0, 0, 255, 0.2);
  } */
`;

export const GlobalStyles = () => <Global styles={styles} />;
