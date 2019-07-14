
const MAIN = (SKETCH) => {

	//floor square width
	const tile_w = 77/2;

	//floor square height
	const tile_h = 38;

	//complete floor height
	const floor_h = 50;

	//position
	let x, y, offsetX, offsetY;
	let p = SKETCH.createVector(0, 0);

	//font
	let font;

	SKETCH.setup = () => {
		SKETCH.createCanvas(720, 400);
		// Pick colors randomly
		r = SKETCH.random(255);
		g = SKETCH.random(255);
		b = SKETCH.random(255);
	};

	SKETCH.draw = () => {
		SKETCH.background(127);
		// Draw a circle
		SKETCH.strokeWeight(2);
		SKETCH.stroke(r, g, b);
		SKETCH.fill(r, g, b, 127);
		SKETCH.ellipse(360, 200, 200, 200);
	};

	SKETCH.mousePressed = () => {
		// Check if mouse is inside the circle
		let d = SKETCH.dist(SKETCH.mouseX, SKETCH.mouseY, 360, 200);
		if (d < 100) {
			// Pick new random color values
			r = SKETCH.random(255);
			g = SKETCH.random(255);
			b = SKETCH.random(255);
		}
	};
};

const P5 = new p5(MAIN);