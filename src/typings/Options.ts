export interface PNPIOptions {
  cwd: string;
  log?: boolean;
}

export const defaultConfig: PNPIOptions = {
  cwd: process.cwd(),
  log: process.env.DEBUG === 'true',
};

export interface InstallOptions {
  on?: {
    error?: (error: Error) => void;
    warn?: (warning: string) => void;
    progress?: (current: number, total: number) => void;
  };
}
