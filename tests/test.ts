import PNPI from '../src/index';

async function test() {
  const pm = new PNPI(undefined, __dirname);
  await pm.init();
}

test();
