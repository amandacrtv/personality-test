//identify if menu is selected
let MENU_SHOW = false;

//identify if a furniture has been selected
let OBJ_SEL_SHOW = false;

//identify if user has selected a room
let START_GAME = false;

//identify if the test already has ended
let GAME_END = false;

//store which menu page is selected
let strItemPage = 'assets/_chairs.png';

//selected and unselected menu icons
let sIconObj;
const strSIconObj = 'assets/_sIconObj.png';
let unIconObj;
const strUnIconObj = 'assets/_unIconObj.png';

//chairs menu page
let itemsChair;
const strItemsChair = 'assets/_chairs.png';

//bed menu page 1
let itemsBed_1;
const strItemsBed_1 = 'assets/_beds_1.png';
//bed menu page 2
let itemsBed_2;
const strItemsBed_2 = 'assets/_beds_2.png';

//dressers page 1
let itemsDresser_1;
const strItemsDresser_1 = 'assets/_dresser_1.png';
//dressers page 2
let itemsDresser_2;
const strItemsDresser_2 = 'assets/_dresser_2.png';

//others page 1
let itemsOther_1;
const strItemsOther_1 = 'assets/_other_1.png';
//others page 2
let itemsOther_2;
const strItemsOther_2 = 'assets/_other_2.png';

//decoration page 1
let itemsDeco_1;
const strItemsDeco_1 = 'assets/_deco_1.png';
//decoration page 2
let itemsDeco_2;
const strItemsDeco_2 = 'assets/_deco_2.png';

//store selected furniture
let objSelMenu;

//room options screen
startGame = () => {
    background(0);
    fill(255, 255, 255);
    textFont(font);
    text('Choose an option', offsetX - 100, 50);
    image(roomSmall, 50, 200);
    image(roomMedium, 350, 200);
    image(roomFull, 650, 200);
};

//initialize menu
initilizeMenu = () => {
    sIconObj = loadImage(strSIconObj);
    unIconObj = loadImage(strUnIconObj);
    itemsChair = loadImage(strItemsChair);
    itemsBed_1 = loadImage(strItemsBed_1);
    itemsBed_2 = loadImage(strItemsBed_2);
    itemsDresser_1 = loadImage(strItemsDresser_1);
    itemsDresser_2 = loadImage(strItemsDresser_2);
    itemsOther_1 = loadImage(strItemsOther_1);
    itemsOther_2 = loadImage(strItemsOther_2);
    itemsDeco_1 = loadImage(strItemsDeco_1);
    itemsDeco_2 = loadImage(strItemsDeco_2);
};

//show menu page depending on selection
menuObj = () => {
    if (MENU_SHOW) {
        image(sIconObj, 0, 0);
        switch (strItemPage) {
            case strItemsChair:
                image(itemsChair, 60, 0);
                break;
            case strItemsBed_1:
                image(itemsBed_1, 60, 0);
                break;
            case strItemsBed_2:
                image(itemsBed_2, 60, 0);
                break;
            case strItemsDresser_1:
                image(itemsDresser_1, 60, 0);
                break;
            case strItemsDresser_2:
                image(itemsDresser_2, 60, 0);
                break;
            case strItemsOther_1:
                image(itemsOther_1, 60, 0);
                break;
            case strItemsOther_2:
                image(itemsOther_2, 60, 0);
                break;
            case strItemsDeco_1:
                image(itemsDeco_1, 60, 0);
                break;
            case strItemsDeco_2:
                image(itemsDeco_2, 60, 0);
                break;
        }
    } else image(unIconObj, 0, 0);
};

//verify mouse input to see menu choices
changeMenu = () => {
    if (mouseX >= 0 && mouseX <= 60 && mouseY >= 0 && mouseY <= 60)
        MENU_SHOW = !MENU_SHOW;
    if (MENU_SHOW) {
        if (mouseX >= 65 && mouseY >= 5 && mouseX <= 85 && mouseY <= 27)
            strItemPage = strItemsChair;
        if (mouseX >= 91 && mouseY >= 5 && mouseX <= 114 && mouseY <= 27)
            strItemPage = strItemsBed_1;
        if (mouseX >= 123 && mouseY >= 5 && mouseX <= 147 && mouseY <= 27)
            strItemPage = strItemsDresser_1;
        if (mouseX >= 155 && mouseY >= 5 && mouseX <= 179 && mouseY <= 27)
            strItemPage = strItemsOther_1;
        if (mouseX >= 187 && mouseY >= 5 && mouseX <= 221 && mouseY <= 27)
            strItemPage = strItemsDeco_1;
        if (mouseX >= 62 && mouseY >= 150 && mouseX <= 87 && mouseY <= 168) {
            switch (strItemPage) {
                case strItemsBed_2:
                    strItemPage = strItemsBed_1;
                    break;
                case strItemsDresser_2:
                    strItemPage = strItemsDresser_1;
                    break;
                case strItemsOther_2:
                    strItemPage = strItemsOther_1;
                    break;
                case strItemsDeco_2:
                    strItemPage = strItemsDeco_1;
                    break;
            }
        }
        if (mouseX >= 191 && mouseY >= 150 && mouseX <= 216 && mouseY <= 168) {
            switch (strItemPage) {
                case strItemsBed_1:
                    strItemPage = strItemsBed_2;
                    break;
                case strItemsDresser_1:
                    strItemPage = strItemsDresser_2;
                    break;
                case strItemsOther_1:
                    strItemPage = strItemsOther_2;
                    break;
                case strItemsDeco_1:
                    strItemPage = strItemsDeco_2;
                    break;
            }
        }
    } else if (OBJ_SEL_SHOW) {
        objSelMenu = null;
        OBJ_SEL_SHOW = false;
    }
};

//treat which object has been selected
itemSelect = () => {
    if (MENU_SHOW) {
        if (mouseX >= 66 && mouseY >= 37 && mouseX <= 110 && mouseY <= 84) {
            OBJ_SEL_SHOW = true;
            switch (strItemPage) {
                case strItemsChair:
                    objSelMenu = new oneTileFurniture(
                        chair_1_Blue,
                        'Blue',
                        'Blue Chair',
                        4,
                        1
                    );
                    break;
                case strItemsBed_1:
                    objSelMenu = new fullBedFurniture(
                        bed_1_Green,
                        'Green',
                        'Green Double Bed'
                    );
                    break;
                case strItemsBed_2:
                    objSelMenu = new halfBedFurniture(
                        bed_2_Red,
                        'Red',
                        'Red Single Bed'
                    );
                    break;
                case strItemsDresser_1:
                    objSelMenu = new oneTileFurniture(
                        dresser_2_w,
                        'White',
                        'White Dresser',
                        2,
                        0.5
                    );
                    break;
                case strItemsDresser_2:
                    objSelMenu = new twoTileFurniture(
                        wardrobe_1_w,
                        'White',
                        'White Wardrobe'
                    );
                    break;
                case strItemsOther_1:
                    objSelMenu = new oneTileFurniture(
                        bookcase_1,
                        'LBrown',
                        'Light Brown Bookcase',
                        2,
                        0.5
                    );
                    break;
                case strItemsOther_2:
                    objSelMenu = new twoTileFurniture(
                        tv_1,
                        'LBrown',
                        'Light Brown TV'
                    );
                    break;
                case strItemsDeco_1:
                    objSelMenu = new oneTileFurniture(
                        flower_yellow,
                        'Yellow',
                        'Yellow Flower',
                        1,
                        2
                    );
                    break;
                case strItemsDeco_2:
                    objSelMenu = new oneTileFurniture(
                        lamp_blue,
                        'Blue',
                        'Blue Lamp',
                        1,
                        2
                    );
                    break;
            }
        }

        if (mouseX >= 117 && mouseY >= 37 && mouseX <= 161 && mouseY <= 84) {
            OBJ_SEL_SHOW = true;
            switch (strItemPage) {
                case strItemsChair:
                    objSelMenu = new oneTileFurniture(
                        chair_1_Purple,
                        'Purple',
                        'Purple Chair',
                        4,
                        1
                    );
                    break;
                case strItemsBed_1:
                    objSelMenu = new fullBedFurniture(
                        bed_1_Red,
                        'Red',
                        'Red Double Bed'
                    );
                    break;
                case strItemsBed_2:
                    objSelMenu = new halfBedFurniture(
                        bed_2_Blue,
                        'Blue',
                        'Blue Single Bed'
                    );
                    break;
                case strItemsDresser_1:
                    objSelMenu = new oneTileFurniture(
                        dresser_2_lb,
                        'LBrown',
                        'Light Brown Dresser',
                        2,
                        0.5
                    );
                    break;
                case strItemsDresser_2:
                    objSelMenu = new twoTileFurniture(
                        wardrobe_1_lb,
                        'LBrown',
                        'Light Brown Wardrobe'
                    );
                    break;
                case strItemsOther_1:
                    objSelMenu = new oneTileFurniture(
                        bookcase_2,
                        'White',
                        'White Bookcase',
                        2,
                        0.5
                    );
                    break;
                case strItemsOther_2:
                    objSelMenu = new twoTileFurniture(
                        tv_2,
                        'White',
                        'White TV'
                    );
                    break;
                case strItemsDeco_1:
                    objSelMenu = new oneTileFurniture(
                        flower_blue,
                        'Blue',
                        'Blue Flower',
                        1,
                        2
                    );
                    break;
                case strItemsDeco_2:
                    objSelMenu = new oneTileFurniture(
                        lamp_white,
                        'White',
                        'White Lamp',
                        1,
                        0.5
                    );
                    break;
            }
        }

        if (mouseX >= 168 && mouseY >= 37 && mouseX <= 212 && mouseY <= 84) {
            OBJ_SEL_SHOW = true;
            switch (strItemPage) {
                case strItemsChair:
                    objSelMenu = new oneTileFurniture(
                        chair_1_Green,
                        'Green',
                        'Green Chair',
                        4,
                        1
                    );
                    break;
                case strItemsBed_1:
                    objSelMenu = new fullBedFurniture(
                        bed_1_Blue,
                        'Blue',
                        'Blue Double Bed'
                    );
                    break;
                case strItemsBed_2:
                    objSelMenu = new halfBedFurniture(
                        bed_2_Black,
                        'Black',
                        'Black Single Bed'
                    );
                    break;
                case strItemsDresser_1:
                    objSelMenu = new oneTileFurniture(
                        dresser_2_db,
                        'DBrown',
                        'Dark Brown Dresser',
                        2,
                        0.5
                    );
                    break;
                case strItemsDresser_2:
                    objSelMenu = new twoTileFurniture(
                        wardrobe_1_db,
                        'DBrown',
                        'Dark Brown Wardrobe'
                    );
                    break;
                case strItemsOther_1:
                    objSelMenu = new oneTileFurniture(
                        bookcase_3,
                        'DBrown',
                        'Dark Brown Bookcase',
                        2,
                        0.5
                    );
                    break;
                case strItemsOther_2:
                    objSelMenu = new twoTileFurniture(
                        tv_3,
                        'DBrown',
                        'Dark Brown TV'
                    );
                    break;
                case strItemsDeco_1:
                    objSelMenu = new oneTileFurniture(
                        flower_white,
                        'White',
                        'White Flower',
                        1,
                        0.5
                    );
                    break;
                case strItemsDeco_2:
                    objSelMenu = new oneTileFurniture(
                        lamp_black,
                        'Black',
                        'Black Lamp',
                        1,
                        0.5
                    );
                    break;
            }
        }

        if (mouseX >= 66 && mouseY >= 94 && mouseX <= 110 && mouseY <= 141) {
            OBJ_SEL_SHOW = true;
            switch (strItemPage) {
                case strItemsChair:
                    objSelMenu = new oneTileFurniture(
                        chair_1_Red,
                        'Red',
                        'Red Chair',
                        4,
                        1
                    );
                    break;
                case strItemsBed_1:
                    objSelMenu = new fullBedFurniture(
                        bed_1_Black,
                        'Black',
                        'Black Double Bed'
                    );
                    break;
                case strItemsBed_2:
                    objSelMenu = new halfBedFurniture(
                        bed_2_Purple,
                        'Purple',
                        'Purple Single Bed'
                    );
                    break;
                case strItemsDresser_1:
                    objSelMenu = new twoTileFurniture(
                        dresser_1_w,
                        'White',
                        'White Dresser'
                    );
                    break;
                case strItemsOther_1:
                    objSelMenu = new twoTileFurniture(
                        pc_1_lb,
                        'LBrown',
                        'Light Brown PC'
                    );
                    break;
                case strItemsDeco_1:
                    objSelMenu = new oneTileFurniture(
                        flower_pink,
                        'Pink',
                        'Pink Flower',
                        1,
                        2
                    );
                    break;
                case strItemsDeco_2:
                    objSelMenu = new oneTileFurniture(
                        lamp_purple,
                        'Purple',
                        'Purple Lamp',
                        1,
                        2
                    );
                    break;
            }
        }

        if (mouseX >= 117 && mouseY >= 94 && mouseX <= 161 && mouseY <= 141) {
            OBJ_SEL_SHOW = true;
            switch (strItemPage) {
                case strItemsChair:
                    objSelMenu = new oneTileFurniture(
                        chair_1_Black,
                        'Black',
                        'Black Chair',
                        4,
                        0.5
                    );
                    break;
                case strItemsBed_1:
                    objSelMenu = new fullBedFurniture(
                        bed_1_Purple,
                        'Purple',
                        'Purple Double Bed'
                    );
                    break;
                case strItemsDresser_1:
                    objSelMenu = new twoTileFurniture(
                        dresser_1_lb,
                        'LBrown',
                        'Light Brown Dresser'
                    );
                    break;
                case strItemsOther_1:
                    objSelMenu = new twoTileFurniture(
                        pc_1_w,
                        'White',
                        'White PC'
                    );
                    break;
                case strItemsDeco_1:
                    objSelMenu = new oneTileFurniture(
                        flower_purple,
                        'Purple',
                        'Purple Flower',
                        1,
                        2
                    );
                    break;
                case strItemsDeco_2:
                    objSelMenu = new oneTileFurniture(
                        lamp_green,
                        'Green',
                        'Green Lamp',
                        1,
                        2
                    );
                    break;
            }
        }

        if (mouseX >= 168 && mouseY >= 94 && mouseX <= 212 && mouseY <= 141) {
            OBJ_SEL_SHOW = true;
            switch (strItemPage) {
                case strItemsBed_1:
                    objSelMenu = new halfBedFurniture(
                        bed_2_Green,
                        'Green',
                        'Green Single Bed'
                    );
                    break;
                case strItemsDresser_1:
                    objSelMenu = new twoTileFurniture(
                        dresser_1_db,
                        'DBrown',
                        'Dark Brown Dresser'
                    );
                    break;
                case strItemsOther_1:
                    objSelMenu = new twoTileFurniture(
                        pc_1_db,
                        'DBrown',
                        'Dark Brown PC'
                    );
                    break;
                case strItemsDeco_1:
                    objSelMenu = new oneTileFurniture(
                        flower_red,
                        'Red',
                        'Red Flower',
                        1,
                        2
                    );
                    break;
                case strItemsDeco_2:
                    objSelMenu = new oneTileFurniture(
                        lamp_red,
                        'Red',
                        'Red Lamp',
                        1,
                        2
                    );
                    break;
            }
        }
    }
};

//show selected furniture from menu, room or nothing
showItemSel = () => {
    fill(255, 255, 255);
    if (OBJ_SEL_SHOW && objSelMenu != null) {
        image(
            objSelMenu.states.stateImage[objSelMenu.currState],
            mouseX -
                objSelMenu.states.stateImage[objSelMenu.currState].width / 2,
            mouseY -
                objSelMenu.states.stateImage[objSelMenu.currState].height / 2
        );
        text('Press R rotate or D to cancel', 150, 580);
    } else if (
        selItem.x != 0 &&
        selItem.y != 0 &&
        gameObjFurniture[selItem.x][selItem.y] != null
    ) {
        text(
            'Selected: ' + gameObjFurniture[selItem.x][selItem.y].name,
            20,
            550
        );
        text('(Press D to delete or K to unselect)', 20, 580);
        fill(0, 0, 0, 20);
        showSpace(
            gameObjFurniture[selItem.x][selItem.y].states.tiles_states[
                gameObjFurniture[selItem.x][selItem.y].currState
            ].x,
            gameObjFurniture[selItem.x][selItem.y].states.tiles_states[
                gameObjFurniture[selItem.x][selItem.y].currState
            ].y,
            selItem.x,
            selItem.y
        );
    } else {
        textFont(font);
        text('Press F to finish the test or P to reset', 150, 580);
    }
};
