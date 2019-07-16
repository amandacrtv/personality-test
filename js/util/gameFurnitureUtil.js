//furniture file names

const chair_1_Blue = 'assets/chair_1_blue';
const chair_1_Black = 'assets/chair_1_black';
const chair_1_Purple = 'assets/chair_1_purple';
const chair_1_Green = 'assets/chair_1_green';
const chair_1_Red = 'assets/chair_1_red';

const bed_1_Blue = 'assets/bed_1_blue';
const bed_1_Black = 'assets/bed_1_black';
const bed_1_Purple = 'assets/bed_1_purple';
const bed_1_Green = 'assets/bed_1_green';
const bed_1_Red = 'assets/bed_1_red';

const bed_2_Blue = 'assets/bed_2_blue';
const bed_2_Black = 'assets/bed_2_black';
const bed_2_Purple = 'assets/bed_2_purple';
const bed_2_Green = 'assets/bed_2_green';
const bed_2_Red = 'assets/bed_2_red';

const dresser_1_lb = 'assets/dresser_1';
const dresser_1_w = 'assets/dresser_1_white';
const dresser_1_db = 'assets/dresser_1_dbrown';

const dresser_2_lb = 'assets/dresser_2';
const dresser_2_w = 'assets/dresser_2_white';
const dresser_2_db = 'assets/dresser_2_dbrown';

const wardrobe_1_lb = 'assets/wardrobe_1';
const wardrobe_1_w = 'assets/wardrobe_1_white';
const wardrobe_1_db = 'assets/wardrobe_1_dbrown';

const bookcase_1 = 'assets/bookcase_1';
const bookcase_2 = 'assets/bookcase_2';
const bookcase_3 = 'assets/bookcase_3';

const pc_1_lb = 'assets/pc_1';
const pc_1_w = 'assets/pc_1_white';
const pc_1_db = 'assets/pc_1_dbrown';

const tv_1 = 'assets/tv_1';
const tv_2 = 'assets/tv_2';
const tv_3 = 'assets/tv_3';

const flower_yellow = 'assets/flower_yellow';
const flower_blue = 'assets/flower_blue';
const flower_white = 'assets/flower_white';
const flower_pink = 'assets/flower_pink';
const flower_purple = 'assets/flower_purple';
const flower_red = 'assets/flower_red';

const lamp_blue = 'assets/lamp_blue';
const lamp_white = 'assets/lamp_white';
const lamp_black = 'assets/lamp_black';
const lamp_purple = 'assets/lamp_purple';
const lamp_green = 'assets/lamp_green';
const lamp_red = 'assets/lamp_red';

//initialize game furniture obj array
gameFurnitureInitialize = () => {
    gameObjFurniture = new Array();
    for (i = 0; i < gameFurnitureArr[0].length; i++) {
        gameObjFurniture[i] = new Array();
    }
};

//display game furniture
gameFurnitureDisplay = () => {
    for (i = 0; i < gameFurnitureArr.length; i++) {
        for (j = 0; j < gameFurnitureArr[i].length; j++) {
            if (i == 0 && j == 0) continue;
            if (
                gameFurnitureArr[i][j] != 0 &&
                gameFurnitureArr[i][j] != 9 &&
                gameObjFurniture[i][j] != null
            ) {
                gameObjFurniture[i][j].displayByPosState();
            }
            mouseOver(i, j);
        }
    }
};

//delete furniture
delFurniture = (g, x, y) => {
    for (i = x; i < x + g.states.tileStates[g.currState].x; i++) {
        for (j = y; j < y + g.states.tileStates[g.currState].y; j++) {
            gameFurnitureArr[i][j] = 0;
            gameObjFurniture[i][j] = null;
        }
    }
};

//insert furniture
setFurniture = (g, x, y) => {
    for (i = x; i < x + g.states.tileStates[g.currState].x; i++) {
        for (j = y; j < y + g.states.tileStates[g.currState].y; j++) {
            if (i == x && j == y) {
                g.initialize(definePosByObjType(g, x, y));
                gameObjFurniture[i][j] = g;
                gameFurnitureArr[i][j] = g.type;
            } else gameFurnitureArr[i][j] = 9;
        }
    }
};

//defines furniture position by it's type
definePosByObjType = (g, i, j) => {
    let p = createVector(0, 0);
    switch (g.type) {
        //only occupates one tile
        case 1:
            x =
                j * tile_w -
                (g.states.stateImage[g.currState].height - floor_h);
            y =
                i * tile_h -
                (g.states.stateImage[g.currState].height - floor_h);
            p.set(x, y);
            break;
        //double bed
        case 2:
            x =
                j * tile_w -
                (g.states.stateImage[g.currState].width - tile_w) / 2;
            y = i * tile_h;
            //turned to left
            if (g.currState == 1) {
                x += tile_w / 2;
                y -= tile_h;
            }
            p.set(x, y);
            break;
        //single bed
        case 3:
            x =
                j * tile_w -
                (g.states.stateImage[g.currState].width - tile_w) / 2 -
                30;
            y = i * tile_h - 10;
            //turned to left
            if (g.currState == 1) {
                x += tile_w / 2 + 30;
                y -= tile_h;
            }
            p.set(x, y);
            break;
        //occupates two tiles
        case 4:
            x =
                j * tile_w -
                (g.states.stateImage[g.currState].height - floor_h);
            y =
                i * tile_h -
                (g.states.stateImage[g.currState].height - floor_h) +
                tile_h;
            if (g.currState == 1) {
                x += floor_h / 2;
                y -= tile_w / 2;
            }
            p.set(x, y);
            break;
    }
    return p;
};

//verify if object has space to be inserted and insert
insertObject = (i, j, g) => {
    if (
        hasSpaceInsert(
            g.states.tileStates[g.currState].x,
            g.states.tileStates[g.currState].y,
            i,
            j
        )
    ) {
        setFurniture(g, i, j);
        OBJ_SEL_SHOW = false;
        objSelMenu = null;
        selItem.set(i, j);
    }
};

//verify all map positions to find if can alocate new furniture
hasSpaceInsert = (x, y, i, j) => {
    let set = false;
    if (
        i + x <= gameFurnitureArr.length &&
        j + y <= gameFurnitureArr[i].length
    ) {
        set = true;
        for (iAux = i; iAux < i + x; iAux++) {
            for (jAux = j; jAux < j + y; jAux++) {
                if (gameFurnitureArr[iAux][jAux] != 0) set = false;
            }
        }
    }
    return set;
};

//display object hitbox
showSpace = (x, y, i, j, gameStruct) => {
    if (i + x <= gameStruct.length && j + y <= gameStruct[i].length) {
        for (iAux = i; iAux < i + x; iAux++) {
            for (jAux = j; jAux < j + y; jAux++) {
                gfx = new ToxiclibsSupport();
                gfx.polygon2D(gameStruct[iAux][jAux].poly);
            }
        }
    }
};
