export interface PNPIOptions {
  cwd?: string | undefined;
  log?: boolean;
}

export const defaultConfig: PNPIOptions = {
  log: false,
  cwd: process.cwd(),
};
