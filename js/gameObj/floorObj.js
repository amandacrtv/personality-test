//floor game obj class
class floorObj extends gameObj {
    
    constructor (s) {
        super(s);
    }

    //defines floor hitbox
    definePoly () {
        this.poly.add(new Vec2D(this.pos.x + tile_w + offsetX, this.pos.y + offsetY));
        this.poly.add(new Vec2D(this.pos.x + (tile_w * 2) + offsetX, this.pos.y + offsetY + (tile_h/2)));
        this.poly.add(new Vec2D(this.pos.x + tile_w + offsetX, this.pos.y + tile_h + offsetY));
        this.poly.add(new Vec2D(this.pos.x + offsetX, this.pos.y + offsetY + (tile_h/2)));
    }
}