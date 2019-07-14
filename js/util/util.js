//Toxiclibs methods
const Polygon2D = toxi.geom.Polygon2D;
const Vec2D = toxi.geom.Vec2D;
const ToxiclibsSupport = toxi.processing.ToxiclibsSupport;

new p5();

class util {

    constructor () {}

    //converts cartesian coordinates to isometric
    static twoDToISO (p) {
        n = new createVector(0, 0);
        n.x = p.x - p.y;
        n.y = (p.x + p.y)/2;
        return n;
    }

}
