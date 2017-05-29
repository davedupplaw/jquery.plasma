export default {
	AVERAGE: function( plasmas, w ) {
		const p = plasmas[0];
		const r = [];
		for( let y = 0; y < p.length; y++ ) {
			let acc = 0;
			for( let pp = 0; pp < plasmas.length; pp++ ) {
				acc += plasmas[pp][y];
			}

			acc /= plasmas.length;
			r[y] = acc;
		}
		return r;
	}
};