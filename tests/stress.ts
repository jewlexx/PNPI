import * as fs from 'fs/promises';
import * as path from 'path';
import { existsSync } from 'fs';
import PNPI from '../src/index';

const packages = [
  'printnode',
  'syncwrite',
  'bulkmessagelib',
  'createignore',
  'pnpi',
  'abbie',
  'react',
  'lodash',
  'chalk',
  'tslib',
  'axios',
  'commander',
  'express',
  'react-dom',
  'moment',
  'request',
  'dayjs',
  'uglify-js',
  'meow',
  'inquirer',
  'enquirer',
  'listr',
  'listr2',
  'terminalizer',
  'cliui',
  'cli-highlight',
  'string-width',
  'missionlog',
  '@angular/cli',
  'angular',
  '@angular/material',
  '@angular/core',
  '@angular/cdk',
  '@material-ui/core',
  '@material-ui/icons',
  'electron',
  'socket.io',
  'socket.io-client',
  'vite',
  'koa',
  'next',
  'nuxt',
  'connect',
  'preact',
  'vue',
  'vux',
  'svelte',
  'jest',
  'jest-cli',
  'nyc',
  'codecov',
  'typescript',
  'ts-node',
  '@jest/core',
  'c8',
  'jsdoc',
  'gray-matter',
  'typedoc',
  '@microsoft/tsdoc',
  'eslint',
  'prettier',
  'sass',
  'less',
  'autoprefixer',
  'less',
  'css-loader',
  'webpack',
  'rollup',
  'sass-loader',
  'style-loader',
  'classnames',
  'stylelint',
  'postcss-loader',
  'bootstrap',
  'tailwind',
  'color',
  'clean-css',
  'stylus',
  'mini-css-extract-plugin',
  '@babel/core',
  'parcel',
  'browserify',
  'grunt',
  'npm',
  'gulp',
  'grunt',
  'serverless',
  'serialport',
  'total.js',
  'serialport',
  'onoff',
  'wia',
  'node-red',
  'mocha',
  'chai',
  'supertest',
  'richmd',
  'js-spider',
  'breadstick',
];

async function stressTest() {
  return console.log(packages.join(' '));
  const dir = path.resolve(__dirname, 'testpkg');
  if (existsSync(path.resolve(__dirname, 'testpkg'))) {
    await fs.rm(dir, { recursive: true, force: true });
  }
  await fs.mkdir(dir);

  const npm = new PNPI('npm', {
    cwd: path.resolve(__dirname, 'testpkg'),
    log: true,
  });

  await npm.init();

  await npm.install(packages);
}

stressTest();
