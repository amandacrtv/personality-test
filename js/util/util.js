//Toxiclibs methods
const Polygon2D = toxi.geom.Polygon2D;
const Vec2D = toxi.geom.Vec2D;
const ToxiclibsSupport = toxi.processing.ToxiclibsSupport;

new p5();

//font
let font;

/*Defines room structure
0 - floor
1 - left wall
2 - right wall*/
let gameBase;

//room structure game obj
let gameStruct;

//game furniture structure array
let gameFurnitureArr;

//game furniture obj array
let gameObjFurniture;

//camera offset
let offsetX, offsetY;

//room options
let roomSmall;
let roomMedium;
let roomFull;

//selected item vector
let selItem = createVector(0, 0);

//identify if menu is selected
let MENU_SHOW = false;

//identify if a furniture has been selected
let OBJ_SEL_SHOW = false;

//identify if user has selected a room
let START_GAME = false;

//identify if the test already has ended
let GAME_END = false;

let strItemPage = 'assets/_chairs.png';

let gfx;
