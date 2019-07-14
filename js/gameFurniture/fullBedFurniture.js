//double bed
class fullBedFurniture extends gameFurniture {
    constructor (s, personality, n) {
        super(s, personality, n, 1.5, 2);
        this.states.tileStates = new Array();
        this.states.stateImage = new Array();
        for (i = 0; i < 2; i++) {
            if (i == 0) states.tileStates[i] = createVector(3, 2);
            else this.states.tileStates[i] = createVector(2, 3);
            this.states.stateImage[i] = loadImage(s, this.defineState(i) + '.png');
        }
    }
}