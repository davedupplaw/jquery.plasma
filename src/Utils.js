import precalcs from './Precalcs';

export default class Utils {
	/**
	 *    Converts the pixel coordinate in dimension d into a 0 <= x <= 1 value
	 *    @param c pixel coordinate
	 *    @param d maximum dimension
	 *    @return
	 */
	static coords(c, d) {
		return (c+.0) / (d+.0);
	}

	/**
	 *    Convert a sine percentage (0 < p < 1) into an index in the precalc
	 *    0 < i < nPrecalc.size. If p > 1, it is coerced into 0 < p < 1
	 *
	 *    @param x The sine percentage value
	 *    @return The index in precalcs
	 */
	static convert(x) {
		let z = (x * precalcs.size) % precalcs.size;
		// if (z < 0) {
		// 	z = precalcs.size + z;
		// }
		return ~~z;
	}

}