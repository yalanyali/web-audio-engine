// rollup.config.js
import pkg from './package.json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src',
  plugins: [
    commonjs(),
    resolve({ preferBuiltins: true }),
    typescript({ exclude: '**/*.test.ts' }),
  ],
  external: ['assert', 'events', ...Object.keys(pkg.dependencies)],
  output: [
    {
      sourcemap: true,
      sourcemapExcludeSources: true,
      file: pkg.main,
      format: 'cjs',
    },
    {
      sourcemap: true,
      sourcemapExcludeSources: true,
      file: pkg.module,
      format: 'esm',
    },
  ],
};
