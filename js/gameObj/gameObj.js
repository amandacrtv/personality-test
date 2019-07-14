//all objects inside the game extends this class
class gameObj {

    constructor(s) {
        this.strImg = s; //image file name
        this.obj = loadImage(this.strImg); //image
        this.poly = new Polygon2D(); //hitbox
        this.pos = createVector(0, 0); //isometric coordinates
    }

    /* Transforms given cartesian position to isometric
        and calls method to define object hitbox */
    initialize (point) {
        this.pos.x = point.x - point.y;
        this.pos.y = (point.x + point.y)/2;
        definePoly();
    }

    //Defines object hitbox
    definePoly () {}

    /* Display object by it's position 
        and considers global offset */
    displayByPos () {
        Image(this.obj, this.pos.x + offsetX, this.pos.y + offsetY);
    }

    //Verify if a point is inside obj hitbox
    isInside (point) {
        return this.poly.containsPoint(new Vec2D(point.x, point.y));
    }

}