import precalcs from './Precalcs';

/** Maps between a grey value 0 < g < 255 to values 0 <= r,g,b,a <= 255 */
export default {
	GREY: function (v) {
		return [v, v, v, 255]
	},

	RED_GREEN: function (v) {
		const r = precalcs.sine8[~~v];
		const g = precalcs.cos8[~~v];
		return [r, g, 0, 255]
	},

	PINK_YELLOW: function (v) {
		const b = precalcs.sine8[~~v];
		const g = precalcs.cos8[~~v];
		return [255, g, b, 255]
	},

	RGB: function (v) {
		const r = precalcs.sine8[~~v];
		const g = precalcs.cos8[(~~v+40) %256];
		const b = precalcs.cos8[(~~v+140) %256];
		return [r, g, b, 255]
	},

	ZEBRA: function (v) {
		const r = precalcs.sine8[(~~v*5)%256];
		const g = r;
		return [r, g, g, 255]
	},

	MAGNOLIA: function (v) {
		const r = precalcs.sine8[~~v];
		const g = precalcs.cos8[~~v];
		return [r / 40 + 240, g / 8 + 230, r / 40 + 240, 255];
	},

	STRANGE_WAVES: function(v) {
		return [v/4, v/2, v, 2]
	},

	WHITE_WAVES: function(v) {
		return [v/6+180, v/6+180, v/6+180, 2]
	}
};
