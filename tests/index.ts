import * as fs from 'fs/promises';
import * as path from 'path';
import { existsSync } from 'fs';
import { promisify } from 'util';
import PNPI from '../src/index';

const wait = promisify(setTimeout);

async function installTest() {
  const dir = path.resolve(__dirname, 'testpkg');
  if (existsSync(path.resolve(__dirname, 'testpkg'))) {
    await fs.rm(dir, { recursive: true, force: true });
  }
  await fs.mkdir(dir);

  const npm = new PNPI('npm', {
    cwd: path.resolve(__dirname, 'testpkg'),
    log: false,
  });

  await npm.init();

  await npm.install(['abbie', 'createignore']);
  console.log('Installed packages');

  await wait(1000);

  await npm.remove(['abbie']);
  console.log('Removed packages');
}

installTest();
