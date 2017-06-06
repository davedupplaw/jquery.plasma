import utils from './Utils';
import precalcs from './Precalcs';

export default class VerticalBars {
	constructor( speed, size ) {
		this.speed = speed || 10000;
		this.size = size || 4;
	}

	getPlasma(vals, time, h, w) {
		const ts = time / this.speed;

		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				let xx = utils.coords(x, w) * this.size + ts;
				vals[y*w+x] = precalcs.sine[utils.convert(xx)];
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
