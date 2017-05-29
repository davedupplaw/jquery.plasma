import utils from './Utils';
import precalcs from './Precalcs';

export default class Circles {
	constructor( speed, size ) {
		this.speed = speed || 1000;
		this.size = size || 100;
	}

	getPlasma(vals, time, h, w) {
		const ts = time / this.speed;
		const xs = precalcs.sine[utils.convert(ts / 5.0)] / 2.0;
		const ys = precalcs.sine[utils.convert(ts / 3 + 128)] / 2.0;

		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const xx = utils.coords(x + xs, w);
				const yy = utils.coords(y + ys, h);
				vals[y*w+x] = precalcs.sine[utils.convert(Math.sqrt(this.size * (xx * xx + yy * yy) + 1) + ts)];
			}
		}
	}

	setSpeed(speed) {
		this.speed = speed;
		return this;
	}

	setSize(size) {
		this.size = size;
		return this;
	}
}
