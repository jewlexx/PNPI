import * as execa from 'execa';

export default class NPM {
  async install(...packages: string[]) {
    execa('npm', ['install', ...packages]);
  }
}
