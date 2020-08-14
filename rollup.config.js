import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'lib/index.cjs.js',
      sourcemap: true,
      exports: 'auto',
    },
    {
      format: 'es',
      file: 'lib/index.esm.js',
      sourcemap: true,
      exports: 'auto',
    },
  ],
  watch: {
    include: 'src/**/*',
  },
  // external: ['fs', 'os', 'path', 'util'],
  plugins: [nodeResolve(), typescript(), commonjs(), isProd && terser()],
};
