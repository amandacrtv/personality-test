//all furnitures inside the game extends this class
class gameFurniture extends gameObj {
    
    constructor (s, per, n, score, type) {
        super(s);
        this.personality = per; //personality
        this.score = score; //score
        this.currState = 0; //current rotation state
        this.name = n; //name
        this.type = type; //type
        this.states = new furnitureState(); //all rotations states
    }

    //display the furniture based on the current rotation state
    displayByPosState () {
        image(this.states.stateImage[this.currState], this.pos.x + offsetX, this.pos.y + offsetY);
    }

    //get the next rotation state
    getNextState () {
        if (this.currState < (this.states.tileStates.length - 1)) return this.currState + 1;
        else return 0;
    }

    //rotate the furniture
    alterCurrState () {
        this.currState = this.getNextState();
    }

    /* defines furniture file name extention based on
        rotation state */
    defineState (i) {
        let s = '';
        switch (i) {
            //left
            case 0:
                s = '_l';
                break;
            //right
            case 1:
                s = '_r';
                break;
            //back
            case 2:
                s = '_b';
                break; 
            //front
            case 3:
                s = '_f';
                break;     
        }
        return s;
    }
}