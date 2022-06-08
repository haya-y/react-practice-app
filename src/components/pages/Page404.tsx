import { memo, VFC } from 'react';

export const Page404: VFC = memo(() => {
  window.console.log();

  return <p>404ページです</p>;
});
