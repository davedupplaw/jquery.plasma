import utils from './Utils';
import precalcs from './Precalcs';

export default class RotatingZoomingBars {
	constructor( speed, size ) {
		this.speed = speed || 3000;
		this.size = size || 64;
	}

	getPlasma( vals, time, h, w ) {
		const ts = time/this.speed;
		const xs = precalcs.sine[utils.convert(ts/0.4/this.speed)] / this.size;
		const ys = precalcs.sine[utils.convert(ts/0.6/this.speed + precalcs.size/4)] / this.size;
		for( let y = 0; y < h; y++ ) {
			for( let x = 0; x < w; x++ ) {
				vals[y*w+x] = precalcs.sine[ utils.convert(
						(utils.coords(x,w) * xs) + (utils.coords(y,h) * ys) + ts) ];
			}
		}
	}

	setSpeed( speed ) {
		this.speed = speed;
		return this;
	}

	setSize( size ) {
		this.size = size;
		return this;
	}
}

