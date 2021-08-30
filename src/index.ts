import { spawn, SpawnOptionsWithoutStdio } from 'child_process';
import { PNPIOptions, defaultConfig } from './typings/Options';

export default class PNPI {
  private exec: string;

  private installCmd = 'install';

  private installOptions: SpawnOptionsWithoutStdio = {
    cwd: this.options.cwd,
  };

  constructor(public name: 'npm' = 'npm', public options: PNPIOptions = defaultConfig) {
    if (name !== 'npm') {
      throw new Error(`Invalid package manager ${name}. Must be "npm"`);
    }

    if (/^win/.test(process.platform)) {
      this.exec = `${name}.cmd`;
    } else {
      this.exec = name;
    }
  }

  private run(command: string, ...args: string[]): Promise<void> {
    return new Promise((res, rej) => {
      const operation = spawn(this.exec, [command, ...args], this.installOptions);

      if (this.options.log) {
        operation.stdout.pipe(process.stdout);
        operation.stderr.pipe(process.stderr);
        operation.stdin.pipe(process.stdin);
        process.stdin.pipe(operation.stdin);
      }

      operation.stderr.on('data', data => {
        const string = data.toString();

        if (string.match(/ERR! 404 Not Found/g)) {
          const err = new Error('Package not found');
          rej(err);
        }
      });

      operation.on('error', err => rej(err));

      operation.on('close', code => {
        if (code === 0) {
          res();
        } else {
          rej();
        }
      });
    });
  }

  public async init(): Promise<void> {
    return this.run('init', '-y');
  }

  public async install(packages: string | string[]): Promise<void> {
    if (typeof packages === 'string') {
      return this.installPackages([packages]);
    }
    return this.installPackages(packages);
  }

  private installPackages(packages: string[]): Promise<void> {
    return this.run(this.installCmd, ...packages);
  }

  public async remove(packages: string[]): Promise<void> {
    return this.run('remove', ...packages);
  }
}
