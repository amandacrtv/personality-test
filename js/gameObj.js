//all objects inside the game extends this class

class gameObj {

    constructor(s) {
        this.strImg = s;
        this.obj = loadImage(this.strImg);
        poly = new Polygon2D();
        pos = createVector(0, 0);
    }


}