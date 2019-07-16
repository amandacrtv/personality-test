//furniture that occupies only one tile with N rotation states
class oneTileFurniture extends gameFurniture {
    constructor(s, personality, n, ns, score) {
        super(s, personality, n, score, 1);
        this.states.tileStates = new Array();
        this.states.stateImage = new Array();
        for (i = 0; i < ns; i++) {
            this.states.tileStates[i] = createVector(1, 1);
            this.states.stateImage[i] = loadImage(
                s + this.defineState(i) + '.png'
            );
        }
    }
}
