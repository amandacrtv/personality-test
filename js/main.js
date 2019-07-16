setup = () => {
    createCanvas(1000, 600);
    background(0);
    offsetX = width / 2;
    offsetY = height / 4;
    font = loadFont('assets/fonts/VCR_OSD_MONO_1.001.ttf');
    textFont(font, 20);
    roomSmall = loadImage('assets/_roomSmall.png');
    roomMedium = loadImage('assets/_roomMedium.png');
    roomFull = loadImage('assets/_roomFull.png');
};

draw = () => {
    if (!GAME_END) {
        if (START_GAME) {
            background(0);
            menuObj();
            gameBaseDisplay();
            gameFurnitureDisplay();
            showItemSel();
        } else {
            startGame();
        }
    }
};

keyPressed = () => {
    if (!GAME_END && START_GAME) {
        switch (key) {
            case 'd':
            case 'D':
                if (OBJ_SEL_SHOW) {
                    OBJ_SEL_SHOW = false;
                    objSelMenu = null;
                } else if (
                    selItem.x != 0 &&
                    selItem.y != 0 &&
                    gameObjFurniture[selItem.x][selItem.y] != null
                ) {
                    delFurniture(
                        gameObjFurniture[selItem.x][selItem.y],
                        selItem.x,
                        selItem.y
                    );
                    selItem.set(0, 0);
                }
                break;
            case 'r':
            case 'R':
                if (OBJ_SEL_SHOW && objSelMenu != null)
                    objSelMenu.alterCurrState();
                break;
            case 'p':
            case 'P':
                START_GAME = false;
                break;
            case 'F':
            case 'f':
                GAME_END = true;
                personalityTest();
                break;
            case 'K':
            case 'k':
                selItem.set(0, 0);
                break;
        }
    }
};

mousePressed = () => {
    if (!GAME_END) {
        if (START_GAME) {
            for (i = 0; i < gameBase.length; i++) {
                for (j = 0; j < gameBase[i].length; j++) {
                    if (i == 0 && j == 0) continue;
                    if (gameBase[i][j] == 0) {
                        if (OBJ_SEL_SHOW && objSelMenu != null) {
                            if (
                                gameStruct[i][j].isInside(
                                    createVector(mouseX, mouseY)
                                )
                            ) {
                                insertObject(i, j, objSelMenu);
                            }
                        }
                        if (
                            gameFurniture[i][j] != 0 &&
                            gameFurniture[i][j] != 9 &&
                            gameObjFurniture[i][j] != null
                        ) {
                            if (
                                gameStruct[i][j].isInside(
                                    createVector(mouseX, mouseY)
                                )
                            ) {
                                selItem.set(i, j);
                            }
                        }
                    }
                }
            }
            changeMenu();
            itemSelect();
        } else {
            if (
                mouseX >= 50 &&
                mouseX < 350 &&
                mouseY >= 200 &&
                mouseY <= 380
            ) {
                setEnviroment(0);
                START_GAME = true;
            } else if (
                mouseX >= 350 &&
                mouseX < 650 &&
                mouseY >= 200 &&
                mouseY <= 380
            ) {
                setEnviroment(1);
                START_GAME = true;
            } else if (
                mouseX >= 650 &&
                mouseX < 950 &&
                mouseY >= 200 &&
                mouseY <= 380
            ) {
                setEnviroment(2);
                START_GAME = true;
            }
        }
    }
};

mouseOver = (i, j) => {
    if (
        gameBase[i][j] == 0 &&
        gameStruct[i][j].isInside(createVector(mouseX, mouseY))
    ) {
        if (OBJ_SEL_SHOW && objSelMenu != null) {
            let mouse = definePosByObjType(objSelMenu, mouseX, mouseY);
            if (
                hasSpaceInsert(
                    objSelMenu.states.tilesStates[objSelMenu.currState].x,
                    objSelMenu.states.tilesStates[objSelMenu.currState].y,
                    i,
                    j
                )
            )
                showSpace(
                    objSelMenu.states.tilesStates[objSelMenu.currState].x,
                    objSelMenu.states.tilesStates[objSelMenu.currState].y,
                    i,
                    j
                );
            image(
                objSelMenu.states.stateImage[objSelMenu.currState],
                mouse.x,
                mouse.y
            );
        }
        if (
            gameFurniture[i][j] != 0 &&
            gameFurniture[i][j] != 9 &&
            gameObjFurniture[i][j] != null
        ) {
            fill(0, 0, 0, 20);
            gfx.polygon2D(gameStruct[i][j].poly);
        }
    }
};

setEnviroment = enviromentType => {
    switch (enviromentType) {
        case 0:
            gameBase = [
                [0, 2, 2, 2, 2],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0]
            ];
            gameFurniture = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];
            break;
        case 1:
            gameBase = [
                [0, 2, 2, 2, 2, 2, 2, 2],
                [1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0]
            ];
            gameFurniture = [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ];
            break;
        case 2:
            gameBase = [
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            gameFurniture = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            break;
    }
    initilizeMenu();
    gameBaseInitialize();
    gameFurnitureInitialize();
};

personalityTest = () => {
    let countRed = 0,
        countBlue = 0,
        countGreen = 0,
        countPurple = 0,
        countBlack = 0;
    background(0);
    fill(255, 255, 255);
    for (i = 0; i < gameBase.length; i++) {
        for (j = 0; j < gameBase[i].length; j++) {
            if (
                gameFurniture[i][j] != 0 &&
                gameFurniture[i][j] != 9 &&
                gameObjFurniture[i][j] != null
            ) {
                switch (gameObjFurniture[i][j].personality) {
                    case 'Red':
                    case 'Pink':
                        countRed += gameObjFurniture[i][j].score;
                        break;
                    case 'Blue':
                        countBlue += gameObjFurniture[i][j].score;
                        break;
                    case 'Yellow':
                    case 'Green':
                        countGreen += gameObjFurniture[i][j].score;
                        break;
                    case 'Purple':
                        countPurple += gameObjFurniture[i][j].score;
                        break;
                    case 'LBrown':
                    case 'DBrown':
                    case 'White':
                    case 'Black':
                        countBlack += gameObjFurniture[i][j].score;
                        break;
                }
            }
        }
    }
    //selected nothing
    if (
        countRed == 0 &&
        countBlue == 0 &&
        countGreen == 0 &&
        countPurple == 0 &&
        countBlack == 0
    ) {
        text(
            'You are very empty inside, or you are trying to troll the game, or you do not know how this test works. Pick any object next time. Just click the upper button on your left and select something and insert it in the room',
            offsetX - 300,
            offsetY - 100,
            500,
            600
        );
    }
    //red as biggest
    else if (
        countRed > countBlue &&
        countRed > countGreen &&
        countRed > countPurple &&
        countRed > countBlack
    ) {
        text(
            'You are perhaps an optimistic, active, intense, and passionate person for what you do. Perhaps it is strong, competitive, impulsive and in need of control of the situation. On the positive side, you may be sure of yourself, but you need to control the impassivity.',
            offsetX - 300,
            offsetY - 100,
            500,
            600
        );
    }
    //blue
    else if (
        countBlue > countRed &&
        countBlue > countGreen &&
        countBlue > countPurple &&
        countBlue > countBlack
    ) {
        text(
            'You may be a person who likes to seek tranquility and peace with themself. You may not care much about other peoples opinions if what you do matches what you believe. Maybe you are a bit of beetle-head, since it does not change easily. Probably has strong personality, calm and balanced. Try to open your head a little for ideas different from yours.',
            offsetX - 300,
            offsetY - 100,
            500,
            600
        );
    }
    //green
    else if (
        countGreen > countRed &&
        countGreen > countBlue &&
        countGreen > countPurple &&
        countGreen > countBlack
    ) {
        text(
            'You may be a person with a relaxed personality. You tend to seek support from other people and want to support them as well. Maybe you enjoy being recognized for your efforts and actions, as well as being optimistic. It may be advisable to exercise a little individuality to not depend too much on others.',
            offsetX - 300,
            offsetY - 100,
            500,
            600
        );
    }
    //purple
    else if (
        countPurple > countRed &&
        countPurple > countBlue &&
        countPurple > countGreen &&
        countPurple > countBlack
    ) {
        text(
            'You may be a very sentimental and perhaps organized person. Despite this, you dont tend to show when you are injured because prefers to keep your emotions hidden at that moment. You prefer to think before acting and likes to help others. Consider whether to open more to people, may be a good thing.',
            offsetX - 300,
            offsetY - 100,
            500,
            600
        );
    }
    //black
    else if (
        countBlack > countRed &&
        countBlack > countBlue &&
        countBlack > countGreen &&
        countBlack > countPurple
    ) {
        text(
            'You may be a person who values ​​simplicity and tradition. Maybe you have a strong temperament and likes to have control of yourself and the situation, and may end up being a serious and intimidating person. Consider lowering your balls a bit and relaxing more, seeking to bring more colors into your life.',
            offsetX - 300,
            offsetY - 100,
            500,
            600
        );
    } else {
        //draw
        text(
            'You are a little of every thing, this is good because it means that your personality is very varied. Keep it up.',
            offsetX - 300,
            offsetY - 100,
            500,
            600
        );
    }
};
