import $ from 'jquery';
import ColourMap from './ColourMap';

/**
 *    Plasma routine.
 *
 *    @see "http://www.bidouille.org/prog/plasma"
 *    @see "http://lodev.org/cgtutor/plasma.html"
 *    @author David Dupplaw (david@dupplaw.me.uk)
 *    @created 29th May 2017
 */
export default class Plasma {

	/** Get the width of the widget */
	getWidth() {
		return this.options.width;
	}

	/** Set the width of the widget */
	setWidth(w) {
		this.options.width = w;
		this.element.width(w);
		this.canvas[0].width = w;
		this._reallocate();
	}

	/** Get the height of the widget */
	getHeight() {
		return this.options.height;
	}

	/** Set the height of the widget */
	setHeight(h) {
		this.options.height = h;
		this.element.height(h);
		this.canvas[0].height = h;
		this._reallocate();
	}

	/** [private]  Function that creates the canvas element */
	constructor(element, options) {
		this.options = options;
		this.element = $(element);

		this.canvas = $("<canvas id='" + this.element.attr("id") + "_canvas' />");
		this.canvas[0].getContext('2d').scale(this.options.scale, this.options.scale);
		this.element.append(this.canvas);

		this.setWidth(this.getWidth());
		this.setHeight(this.getHeight());

		this._initiateTimer();

		if (this.options.click) {
			this.canvas.on('click', this.options.click.bind(this));
		}

		if (typeof this.options.colourMap === 'string') {
			this.options.colourMap = ColourMap[this.options.colourMap];
		}
	}

	jumpTime(increase) {
		this.timeOffset += increase;
	}

	_initiateTimer() {
		this.timeOffset = 0;
		requestAnimationFrame(this._updateCanvas.bind(this));
	}

	_updateCanvas() {
		const time = Date.now() + this.timeOffset;

		const onscreenContext = this.canvas[0].getContext('2d');
		const context = this.offscreen.getContext('2d');
		const imageData = context.createImageData(1, 1);
		const pixel = imageData.data;

		const w = this.getWidth() / this.options.scale;

		// Get all the plasmas
		for (let p = 0; p < this.options.plasmas.length; p++)
			this.options.plasmas[p].getPlasma(this.allPlasmas[p], time, this.getHeight() / this.options.scale, w);

		// Aggregate all the plasmas
		const aggregatedPlasma = this.options.aggregator(this.allPlasmas, w);

		// Apply the colour map
		for (let y = 0; y < aggregatedPlasma.length; y++) {
			const cm = this.options.colourMap(aggregatedPlasma[y]);
			pixel[0] = cm[0];
			pixel[1] = cm[1];
			pixel[2] = cm[2];
			pixel[3] = cm[3];
			context.putImageData(imageData, y % w, ~~(y / w));
		}

		onscreenContext.drawImage(this.offscreen, 0, 0, this.getWidth(), this.getHeight());

		requestAnimationFrame(this._updateCanvas.bind(this));
	}

	_reallocate() {
		this.allPlasmas = [];
		for (let _ in this.options.plasmas) {
			this.allPlasmas.push([]);
		}
		this.offscreen = document.createElement('canvas');
		this.offscreen.width = this.getWidth() / this.options.scale;
		this.offscreen.height = this.getHeight() / this.options.scale;
	}
}