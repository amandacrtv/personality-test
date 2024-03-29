//single bed
class halfBedFurniture extends gameFurniture {
    constructor(s, personality, n) {
        super(s, personality, n, 1, 3);
        this.states.tileStates = new Array();
        this.states.stateImage = new Array();
        for (i = 0; i < 2; i++) {
            if (i == 0) this.states.tileStates[i] = createVector(3, 1);
            else this.states.tileStates[i] = createVector(1, 3);
            this.states.stateImage[i] = loadImage(
                s + this.defineState(i) + '.png'
            );
        }
    }
}
