class Precalcs {
	constructor() {
		this.nPrecalcs = 10000;
		this.sine  = [];
		const xx = (2*Math.PI/this.nPrecalcs);
		for( let v = 0; v < this.nPrecalcs; v++ ) {
			this.sine[v] = Math.sin(v * xx) * 128 + 128;
		}

		this.sine8 = [];
		this.cos8  = [];
		const yy = 2*Math.PI/256.0;
		for( let v = 0; v < 256; v++ ) {
			this.sine8[v] = ~~(Math.sin(v*yy) * 128 + 128);
			this.cos8[v]  = ~~(Math.cos(v*yy) * 128 + 128);
		}

	}

	get size() {
		return this.nPrecalcs;
	}
}

export default new Precalcs();