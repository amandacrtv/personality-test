//floor square width
const tile_w = 77/2;

//floor square height
const tile_h = 38;

//complete floor height
const floor_h = 50;

//floor width
const wall_w = 49/2;
//floor height
const wall_h = 83;

//position
let x, y, offsetX, offsetY;

let p = createVector(0, 0);

const floorStr     = 'assets/floor_1.png'; //floor image
const wallLeftStr  = 'assets/wall_l_1.png'; //left wall image
const wallRightStr = 'assets/wall_r_1.png'; //right wall image

let gameRoomObj;

gameBaseInitialize = (gameBase, gameStruct) => {
    //initialize gameStruct obj
    gameStruct = new Array();
    //loop to create room structure object
    for (i = 0; i < gameBase.length; i++) {
        gameStruct[i] = new Array();
        for (j = gameBase[i].length - 1; j >=0; j--) {
            if (i == 0 && j == 0) continue;
            switch (gameBase[i][j]) {
                //floor
                case 0:
                    x = j * tile_w;
                    y = i * tile_h;
                    p.set(x, y);
                    gameRoomObj = new floorObj(floorStr);
                    gameRoomObj.initialize(p);
                    gameStruct[i][j] = gameRoomObj;
                    break;
                //left wall
                case 1:
                    x = (j * tile_w) - (wall_w/2) - (floor_h - tile_h) - 60;
                    y = (i * tile_h) - (wall_h/2) - (floor_h - tile_h) - 60;    
                    p.set(x, y);
                    gameRoomObj = new wallObj(wallLeftStr);
                    gameRoomObj.initialize(p);
                    gameStruct[i][j] = gameRoomObj;
                    break;
                //right wall
                case 2:   
                    x = (j * tile_w) - (wall_w) - (floor_h - tile_h) - 2.5 - 60;
                    y = (i * tile_h) - (wall_w) - (floor_h - tile_h) - 2.5 - 60;    
                    p.set(x, y);
                    gameRoomObj = new wallObj(wallRightStr);
                    gameRoomObj.initialize(p);
                    gameStruct[i][j] = gameRoomObj;
                    break; 
            }
        }
    }
    return gameStruct;
};

gameBaseDisplay = (gameBase, gameStruct) => {
    //loop to display room structure objects
    for (i = 0; i < gameBase.length; i++) {
        for (j = 0; j < gameBase[i].length; j++) {
            if (i == 0 && j == 0) continue;
            gameStruct[i][j].displayByPos();
        }
    }
};