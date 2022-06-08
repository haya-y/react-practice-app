import { memo, VFC } from 'react';

export const Home: VFC = memo(() => {
  window.console.log();

  return <p>HOMEページです</p>;
});
