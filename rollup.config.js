import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
    /**
     * UMD build.
     */
    {
        input: 'src/index.js',
        output: {
            name: pkg.name,
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            resolve(),
            commonjs()
        ]
    },
    /**
     * CommonJS and ES build.
     */
    {
        input: 'src/index.js',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins: [
            resolve(),
            commonjs()
        ]
    }
]