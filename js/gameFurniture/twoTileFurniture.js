//furniture that only has two rotation states
class twoTileFurniture extends gameFurniture {
    constructor (s, personality, n) {
        super(s, personality, n, 0.5, 4);
        this.states.tileStates = new Array();
        this.states.stateImage = new Array();
        for (i = 0; i < 2; i++) {
            if (i == 0) states.tileStates[i] = createVector(2, 1);
            else this.states.tileStates[i] = createVector(1, 2);
            this.states.stateImage[i] = loadImage(s, this.defineState(i) + '.png');
        }
    }
}