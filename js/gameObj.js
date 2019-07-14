//all objects inside the game extends this class

class gameObj {

    constructor(s) {
        this.strImg = s; //image file name
        this.obj = loadImage(this.strImg); //image
        poly = new Polygon2D(); //hitbox
        pos = createVector(0, 0); //isometric coordinates
    }

    /* Transforms given cartesian position to isometric
    * and calls method to define object hitbox */

    initialize (point) {
        pos = util.twoDToISO(point);
        definePoly();
    }

    //Defines object hitbox

    definePoly () {}

    /*Display object by it's position 
    and considers global offset*/

    displayByPos () {
        Image(obj, pos.x + offsetX, pos.y + offsetY);
    }

    isInside (point) {
        return poly.containsPoint(new Vec2D(point.x, point.y));
    }

}