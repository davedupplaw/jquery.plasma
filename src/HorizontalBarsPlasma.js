import utils from './Utils';
import precalcs from './Precalcs';

export default class HorizontalBars {
	constructor( speed, size ) {
		this.speed = speed || 1000;
		this.size = size || 10;
	}

	getPlasma(vals, time, h, w) {
		const ts = time / this.speed;
		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const yy = utils.coords(y, h) * this.size + ts;
				vals[y*w+x] = precalcs.sine[utils.convert(yy)];
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
