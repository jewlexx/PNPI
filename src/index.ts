import * as execa from 'execa';

export default class PNPI {
  constructor(private packageManager: 'npm' | 'yarn' = 'npm', public cwd: string = process.cwd()) {
    if (packageManager !== 'npm' && packageManager !== 'yarn') {
      console.error(`Invalid package manager ${packageManager}`);
      return process.exit(1);
    }
  }

  public async init(): Promise<void> {
    await execa(this.packageManager, ['init'], { cwd: this.cwd });
  }

  public async install(...packages: string[]): Promise<void> {
    await execa(this.packageManager, ['install', ...packages], { cwd: this.cwd });
  }
}
