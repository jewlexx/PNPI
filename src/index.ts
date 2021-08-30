import { PNPIOptions, defaultConfig } from './typings/Options';

export default class PNPI {
  installCmd = 'install';

  constructor(public name: 'npm' = 'npm', public options: PNPIOptions = defaultConfig) {
    if (name !== 'npm') {
      throw new Error(`Invalid package manager ${name}. Must be "npm"`);
    }
  }
}
