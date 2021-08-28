import * as execa from 'execa';

export default class PNPI {
  constructor(private packageManager: 'npm' | 'yarn') {
    console.log(packageManager);
    execa(packageManager);
  }
}
