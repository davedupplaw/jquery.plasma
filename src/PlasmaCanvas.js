import Plasma from './Plasma'
import PlasmaAggregator from './PlasmaAggregator';
import ColourMap from './ColourMap';
import VerticalBars from "./VerticalBarsPlasma";
import RotatingZoomingBars from "./RotatingZoomingBarsPlasma";
import Circles from "./CirclePlasma";
import HorizontalBars from "./HorizontalBarsPlasma";

const verticalBars = new VerticalBars().setSize( 4 ).setSpeed(10000);
const horizontal = new HorizontalBars().setSize( 8 ).setSpeed(200);
const rotatingZoomingBars = new RotatingZoomingBars().setSize(64).setSpeed(3000);
const circles = new Circles().setSize(20).setSpeed(9000);

export default new Plasma('#plasma', {
	plasmas: [rotatingZoomingBars, verticalBars, circles],
	aggregator: PlasmaAggregator.AVERAGE,
	colourMap: ColourMap.WHITE_WAVES,
	width: window.innerWidth,
	height: 200,
	scale: 4,
	framePeriod: 15,
	movement: 1000,
	click: function() { this.jumpTime(50); }
});
