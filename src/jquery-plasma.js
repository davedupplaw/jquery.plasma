/* global $ */

import Plasma from './Plasma'
import PlasmaAggregator from './PlasmaAggregator';
import ColourMap from './ColourMap';
import VerticalBars from "./VerticalBarsPlasma";
import RotatingZoomingBars from "./RotatingZoomingBarsPlasma";
import Circles from "./CirclePlasma";
import HorizontalBars from "./HorizontalBarsPlasma";

(function($){
	const PlasmaWidget = {
		_create: function() {
			this.verticalBars = new VerticalBars().setSize( 4 ).setSpeed(10000);
			this.horizontal = new HorizontalBars().setSize( 4 ).setSpeed(10000);
			this.rotatingZoomingBars = new RotatingZoomingBars().setSize(64).setSpeed(3000);
			this.circles = new Circles().setSize(20).setSpeed(9000);
			this.plasmaMap = {
				"verticalBars": this.verticalBars,
				"horizontalBars": this.horizontal,
				"rotatingZoomingBars": this.rotatingZoomingBars,
				"circles": this.circles
			};

			let newOptions = $.extend({
				plasmas: [this.rotatingZoomingBars, this.verticalBars, this.circles],
				aggregator: PlasmaAggregator.AVERAGE,
				colourMap: ColourMap.RED_GREEN,
				width: window.innerWidth,
				height: 200,
				scale: 4,
				click: function() { this.jumpTime(50); }
			}, this.options);

			// Map names of plasmas to objects
			if( newOptions.plasmas.length > 0 ) {
				let newPlasmas = [];
				for( let p in newOptions.plasmas ) {
			 		if( typeof newOptions.plasmas[p] === 'string' ) {
						newPlasmas.push( this.plasmaMap[newOptions.plasmas[p]] );
					} else {
			 			newPlasmas.push( newOptions.plasmas[p] );
					}
				}
				newOptions.plasmas = newPlasmas;
			}

			new Plasma(this.element, newOptions);
		}
	};

	$.widget( "dd.plasma", PlasmaWidget );

	return Plasma;
}(jQuery));