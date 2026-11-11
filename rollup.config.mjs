import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/solaredge-card.js',
    format: 'es',
  },
  plugins: [resolve(), typescript()],
};
