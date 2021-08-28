import * as execa from 'execa';

export default class NPM {
  async init() {
    await execa('npm', ['init']);
  }

  async install(...packages: string[]) {
    await execa('npm', ['install', ...packages]);
  }
}
