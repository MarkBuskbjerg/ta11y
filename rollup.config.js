import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const prod = process.env.NODE_ENV == 'production';

export default {
	input: 'src/scripts/_main.js',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'main',
		file: 'public/assets/main.bundle.js',
	},
	plugins: [
		replace({
			DEV_MODE: !prod,
		}),
		postcss({
			extract: 'main.bundle.css',
			minimize: prod,
		}),
		resolve({
			browser: true,
		}),
		commonjs(),
		prod && terser(),
	],
	watch: {
		clearScreen: false,
	},
};
