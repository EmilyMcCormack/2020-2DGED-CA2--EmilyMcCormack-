/***************************************** Sprite Sheet Position & Animation Data ************************************************************************************************/

/**
 * Class to store together all sprite data for space invaders
 */
class SpriteData {

//#region Sprite Data
static RUNNER_START_POSITION = new Vector2(125,200);
static RUNNER_MOVE_KEYS = [Keys.A, Keys.D, Keys.Space, Keys.Enter];
static RUNNER_RUN_VELOCITY = 0.1;
static RUNNER_JUMP_VELOCITY = 0.6;
static ENEMY_SPRITE_START_LOCATION= new Vector2(300,300);
static RUNNER_ANIMATION_DATA = Object.freeze(
  {
  id: "runner_animation_data",
  spriteSheet: document.getElementById("character"),
  actorType: ActorType.Player,
  alpha: 1,
  takes: {  
    "run_right" :  
    {       
      fps: 12,
      alpha: 1,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 5,
      boundingBoxDimensions: new Vector2(91, 128), //notice I choose the largest of all the widths taken from the cellData array below
      cellData: [
        new Rect(27, 216, 91, 128),
        new Rect(124, 216, 89, 129),
        new Rect(214, 219, 95, 125),
        new Rect(316, 221, 87, 124),
        new Rect(414, 215, 87, 129),
        new Rect(505, 215, 90, 128)
      ]
    },
    "run_left" : {     
      fps: 12,
      alpha: 1,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 5,
      boundingBoxDimensions: new Vector2(91, 128), //notice I choose the largest of all the widths taken from the cellData array below
      cellData: [
        new Rect(33, 41, 91, 127),
        new Rect(131, 39, 88, 128),
        new Rect(228, 41, 88, 127),
        new Rect(321, 41, 95, 126),
        new Rect(420, 39, 87, 129),
        new Rect(512, 40, 89, 128)
      ]
    }
  }
});

static ENEMY_ANIMATION_DATA = Object.freeze({
  id: "enemy_animation_data",
  spriteSheet: document.getElementById("enemySprite"),
  alpha: 1,
  takes: {  
    "enemySprite" :  {    
      fps: 16,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 2,
      boundingBoxDimensions: new Vector2(105, 73), 
      cellData: [
        new Rect(26, 196, 99, 70),
        new Rect(136, 199, 101, 74),
        new Rect(250, 200, 105, 73),
        new Rect(357, 199, 110, 71)
      ]
    }
  }
});

static COLLECTIBLES_ANIMATION_DATA = Object.freeze({
  id: "collectibles_animation_data",
  spriteSheet: document.getElementById("lollipop"),
  alpha: 1,
  actorType: ActorType.Pickup,
  takes: {  
    "lollipop" :  {
      fps: 1,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 0,
      boundingBoxDimensions: new Vector2(16, 19), 
      cellData: [
        new Rect(8, 4, 16, 19),
      ]
    }
  }
});

static PLATFORM_DATA = Object.freeze({
  id: "platform",
  spriteSheet: document.getElementById("platforms"),
  sourcePosition: new Vector2(95, 127),
  sourceDimensions: new Vector2(49, 50),
  rotation: 0,
  scale: new Vector2(1, 1),
  origin: new Vector2(0, 0),
  alpha: 1,
  actorType: ActorType.Platform,
  translationArray: [
    //added spaces here so that you can easily see which grouping is which on screen
    new Vector2(100, 650),
    new Vector2(150, 650),
    new Vector2(200, 650),

    new Vector2(250, 600),
    new Vector2(300, 600),

    new Vector2(400, 550),
    new Vector2(450, 550),    
    new Vector2(500, 550),
    new Vector2(550, 550),  

    new Vector2(800, 500),
    new Vector2(750, 500),
    new Vector2(700, 500),
    new Vector2(850, 500),

    new Vector2(900, 400),
    new Vector2(750, 300),

    new Vector2(600, 250),
    new Vector2(550, 250),
    new Vector2(500, 250),

    new Vector2(400, 250),
    new Vector2(350, 200),
    new Vector2(300, 200),
    new Vector2(250, 200),
    
    new Vector2(150, 150),
    new Vector2(100, 150),
    new Vector2(50, 150)
  ]
});

static BACKGROUND_DATA = [
  {
    id: "background_1",
    spriteSheet: document.getElementById("sky"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(1024, 1024),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 1,
    scrollSpeedMultiplier: 0.2
  },
  {
    id: "background_2",
    spriteSheet: document.getElementById("cloud1"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(189, 127),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 1,
    scrollSpeedMultiplier: 0.15
  },
  {
    id: "background_3",
    spriteSheet: document.getElementById("cloud4"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(228, 124),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 1,
    scrollSpeedMultiplier: 0.1
  },
  {
    id: "background_4",
    spriteSheet: document.getElementById("clouds1"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(1001, 206),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 1,
    scrollSpeedMultiplier: 0.05
  },
  {
    id: "background_5",
    spriteSheet: document.getElementById("clouds2"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(1000, 246),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 1,
    scrollSpeedMultiplier: 0.01
  }
];
//#endregion

}
