import kaboom from "./libs/kaboom.mjs";
import { LEVELS_JS } from "./scripts/levels.js";

//"use strict";

kaboom({
  debug: true,
});

// global vars
const GRAVITY = 1400;
const LEVELS = LEVELS_JS;
const PLAYER_HEALTH = 150;
const BASE_PLAYER_SPEED = 400;
const JUMP_STRENGTH = 670;

const GUN_DAMAGE = 50;
const BULLET_SPEED = 1200;

const SPAWNER_LIMIT = 3;
const REGENINTERVALSECONDS = 20;

const TILEWIDTH = 48;
const TILEHEIGHT = 48;

let storyScene = false;
let currentLevel = 0;

//loadSprite("metal_sand", "sprites/textures/metal_wall.png")

// GLOBAL: can be used anywhere
loadSprite("player", "sprites/character/player.png", {
  sliceX: 6,
  sliceY: 4,
  scale: 1,
  anims: {
    run: {
      from: 0,
      to: 5,
      speed: 6,
      loop: true,
    },
    idle: {
      from: 6,
      to: 6,
      speed: 3,
      loop: true,
    },
    attack: {
      from: 12,
      to: 14,
      speed: 30,
      loop: false,
    },
    jump: {
      from: 18,
      to: 18,
      speed: 1,
      loop: true,
    },
  },
});
loadSprite("ejector", "sprites/textures/ejector.png");
loadSprite("chest", "sprites/textures/chest.png");
loadSprite("spawner", "sprites/textures/spawner.png");
loadSprite("note", "sprites/textures/note.png", {
  sliceX: 2,
  sliceY: 1,
  scale: 0.8,
  anims: {
    bounce: {
      from: 0,
      to: 1,
      speed: 3,
      loop: true,
    },
  },
});
loadSprite("charge", "sprites/textures/charge.png", {
  sliceX: 6,
  sliceY: 1,
  scale: 1,
  anims: {
    chargeAnim: {
      from: 0,
      to: 5,
      speed: 10,
      loop: true,
    },
  },
});
loadSprite("bullet", "sprites/textures/bullet.png");
loadSprite("bullet-explosion", "sprites/textures/bullet-explosion.png");
loadSprite("activator", "sprites/textures/activator.png");
loadSprite("stationer", "sprites/textures/stationer.png");
loadSprite("portal", "sprites/textures/portal.png");
loadSprite("portalShard", "sprites/textures/portalShard.png", {
  sliceX: 2,
  sliceY: 1,
  scale: 1,
  anims: {
    sparkle: {
      from: 0,
      to: 1,
      speed: 1,
      loop: true,
    },
  },
});
loadSprite("healthbar", "sprites/textures/healthbar.png", {
  sliceX: 2,
  sliceY: 8,
  scale: 1,
  anims: {
    h150: {
      from: 0,
      to: 0,
      speed: 1,
      loop: false,
    },
    h140: {
      from: 1,
      to: 1,
      speed: 1,
    },
    h130: {
      from: 2,
      to: 2,
      speed: 1,
    },
    h120: {
      from: 3,
      to: 3,
      speed: 1,
    },
    h110: {
      from: 4,
      to: 4,
      speed: 1,
    },
    h100: {
      from: 5,
      to: 5,
      speed: 1,
    },
    h90: {
      from: 6,
      to: 6,
      speed: 1,
    },
    h80: {
      from: 7,
      to: 7,
      speed: 1,
    },
    h70: {
      from: 8,
      to: 8,
      speed: 1,
    },
    h60: {
      from: 9,
      to: 9,
      speed: 1,
    },
    h50: {
      from: 10,
      to: 10,
      speed: 1,
    },
    h40: {
      from: 11,
      to: 11,
      speed: 1,
    },
    h30: {
      from: 12,
      to: 12,
      speed: 1,
    },
    h20: {
      from: 13,
      to: 13,
      speed: 1,
    },
    h10: {
      from: 14,
      to: 14,
      speed: 1,
    },
    h0: {
        from: 15,
        to: 15,
        speed: 1,
    },
  },
});

// LEVEL 1
loadSprite(
  "dark_tile",
  "sprites/textures/level-1/lvl1-tile-up_scaled_3x_pngcrushed.png"
);
loadSprite("level-1-bg", "sprites/backgrounds/level-1-bg.png");
loadSprite("level-1-enemy", "sprites/enemies/level-1-enemy.png", {
  sliceX: 4,
  sliceY: 1,
  scale: 1,
  anims: {
    move: {
      from: 0,
      to: 3,
      speed: 4,
      loop: true,
    },
    idle: {
      from: 0,
      to: 0,
      speed: 2,
      loop: true,
    },
    attack: {
      from: 0,
      to: 3,
      speed: 4,
      loop: true,
    },
  },
});

// LEVEL 2
loadSprite("sand_tile", "sprites/textures/level-2/sand.png");
loadSprite("sandbrick_tile", "sprites/textures/level-2/sandbrick.png");
loadSprite("level-2-bg", "sprites/backgrounds/level-2-bg.png");
loadSprite("sandpillar_tile", "sprites/textures/level-2/sandpillar.png");
loadSprite("desert-fig", "sprites/textures/level-2/desert-fig.png", {
  sliceX: 3,
  sliceY: 1,
  scale: 1,
  anims: {
    sway: {
      from: 0,
      to: 2,
      speed: 6,
      loop: true,
    },
  },
});
loadSprite("level-2-enemy", "sprites/enemies/level-2-enemy.png", {
  sliceX: 4,
  sliceY: 1,
  scale: 1,
  anims: {
    move: {
      from: 0,
      to: 3,
      speed: 4,
      loop: true,
    },
    idle: {
      from: 1,
      to: 2,
      speed: 2,
      loop: true,
    },
    attack: {
      from: 0,
      to: 3,
      speed: 4,
      loop: true,
    },
  },
});

// LEVEL 3
loadSprite("lava", "sprites/textures/level-3/lava.png", {
  sliceX: 4,
  sliceY: 1,
  scale: 1,
  anims: {
    burn: {
      from: 0,
      to: 3,
      speed: 10,
      loop: true,
    },
  },
});
loadSprite("level-3-bg", "sprites/backgrounds/level-3-bg.png");

// LEVEL 4
loadSprite("level-4-bg", "sprites/backgrounds/level-4-bg.png");
loadSprite("level-4-enemy", "sprites/enemies/level-4-enemy.png", {
  sliceX: 4,
  sliceY: 1,
  scale: 1,
  anims: {
    move: {
      from: 0,
      to: 3,
      speed: 4,
      loop: true,
    },
    idle: {
      from: 0,
      to: 0,
      speed: 2,
      loop: true,
    },
    attack: {
      from: 0,
      to: 3,
      speed: 4,
      loop: true,
    },
  },
});

// LEVEL 5
loadSprite("level-5-bg", "sprites/backgrounds/level-5-bg.png");
loadSprite("level-5-enemy", "sprites/enemies/level-5-enemy.png", {
  sliceX: 4,
  sliceY: 1,
  scale: 1,
  anims: {
    move: {
      from: 0,
      to: 3,
      speed: 4,
      loop: true,
    },
    idle: {
      from: 0,
      to: 0,
      speed: 2,
      loop: true,
    },
    attack: {
      from: 0,
      to: 3,
      speed: 4,
      loop: true,
    },
  },
});
loadSprite("acid", "sprites/textures/level-5/acid.png", {
  sliceX: 4,
  anims: {
    acidAnim: {
      from: 0,
      to: 3,
      speed: 6,
      loop: true,
    },
  },
});
loadSprite("metalfloor", "sprites/textures/level-5/metalfloor.png");
loadSprite(
  "metalfloor_closed",
  "sprites/textures/level-5/metalfloor_closed.png"
);
loadSprite(
  "metalwall_warning",
  "sprites/textures/level-5/metalwall_warning.png",
  {
    sliceX: 2,
    anims: {
      metalwall_warningAnim: {
        from: 0,
        to: 1,
        speed: 6,
        loop: true,
      },
    },
  }
);
loadSprite("metalwall", "sprites/textures/level-5/metalwall.png");
loadSprite("metalwall_up", "sprites/textures/level-5/metalwall_up.png");
loadSprite("portalorb", "sprites/textures/level-5/portalOrb.png");

// font
loadFont("myFont", "fonts/DotGothic16-Regular.ttf");

scene("story", () => {
  setBackground(0, 0, 0);

  const storyLines = [
    "Some time during the 11th Industrial Revolution..",
    "An known intelligent life form was lost in space",
    "yet his name remains unknown..",
    "Ever since his escape from the gamma collision of 3333..",
    "that left nothing of his home in the Cygnus nebulae, ",
    "through an intergalactic atomae device (IGAD) or a portal",
    "he has leaped to the other end of the universe ",
    "and has never felt the warmth of a settlement that welcomed him.",
    "To him it was all hostile and lonely",
    "For many centuries he has tried, and yet to no avail",
    "nothing...",
    "He IGADs to his advantage, and they happen to appear where he went",
    "IGADs or portals when configured correctly ",
    "can send anything to millions of light years in any direction",
    "No one really knows how he's doing...",
    "and even where... he is right now",
  ];

  //let isStoryFinished = false;
  let storySpeed = 0.01;
  async function displayLines(storyLines) {
    for (let i = 0; i < storyLines.length; i++) {
      const txt = storyLines[i];
      await add([
        text(txt, { font: "myFont" }),
        pos(width() / 2, height() / 2),
        lifespan(storySpeed, { fade: 1 }),
        anchor("center"),
      ]);
      await wait(storySpeed + 0.1);
      //i == storyLines.length-1 ? isStoryFinished = true : isStoryFinished = false;
    }
  }

  async function showInfo() {
    await add([
      text("Press [ENTER] to proceed", { font: "myFont" }),
      pos(width() / 2, height() / 2),
      anchor("center"),
    ]);
    await wait(1);
    await add([
      text("Press [ESC] to return to menu", { font: "myFont" }),
      pos(width() / 2, height() / 2 + 70),
      scale(0.8),
      anchor("center"),
    ]);
  }

  async function introduction() {
    await wait(1.4);
    await displayLines(storyLines);
    await wait(1.4);
    await showInfo();
  }

  introduction();

  onKeyPress("enter", () => {
    go("game", LEVELS[currentLevel]);
  });

  onKeyPress("escape", () => {
    go("main_menu");
  });
});

scene("controls", () => {
  const bg = add([
    sprite("level-1-bg"),
    z(-1),
    anchor("center"),
    fixed(),
    pos(width() / 2, height() / 2),
    scale(5),
  ]);

  const txt = add([
    text(
      `
            [A] - LEFT \n
            [D] - RIGHT \n
            [SPACE] - JUMP\n
            [R] - USE PICKAXE\n
            [C] - USE SHEARS\n
            [E] - OPEN CHESTS\n
            [lCLICK] - SHOOT GUN / PULL OBJECTS`,
      { font: "myFont" }
    ),
    pos(width() / 2 - 700, height() / 2 - 100),
    scale(1),
    anchor("left"),
  ]);

  const info = add([
    text("Press [ESC] to return to menu", { font: "myFont" }),
    pos(width() / 2, height() / 2 + 250),
    scale(0.8),
    anchor("center"),
  ]);

  onKeyPress("escape", () => {
    go("main_menu");
  });
});

scene("main_menu", () => {
  const bg = add([
    sprite("level-1-bg"),
    z(-1),
    anchor("center"),
    fixed(),
    pos(width() / 2, height() / 2),
    scale(5),
  ]);

  const title = add([
    text("ESCAPE FROM THE UNKNOWN", { font: "myFont" }),
    pos(width() / 2, height() / 2 - 100),
    anchor("center"),
    scale(2),
  ]);
  const info = add([
    text("Press [ENTER] to start", { font: "myFont" }),
    pos(width() / 2, height() / 2 - 0),
    anchor("center"),
    scale(0.7),
  ]);
  const info1 = add([
    text("Press [C] to check controls", { font: "myFont" }),
    pos(width() / 2, height() / 2 + 200),
    anchor("center"),
    scale(0.7),
  ]);

  onKeyPress("enter", () => {
    if (storyScene) {
      go("story");
    } else {
      go("game", LEVELS[currentLevel]);
    }
  });
  onKeyPress("c", () => {
    go("controls");
  });
});

scene("ending_scene", () => {});

scene("failed", (causeOfDeath) => {
  const bg = add([
    sprite(LEVELS[currentLevel].bg.sprite),
    z(-1),
    anchor("center"),
    fixed(),
    pos(width() / 2, height() / 2),
    scale(LEVELS[currentLevel].bg.scale),
  ]);

  const title = add([
    text("YOU DIED", { font: "myFont" }),
    pos(width() / 2, height() / 2 - 100),
    anchor("center"),
    scale(2),
  ]);

  const causeOfDeathLabel = add([
    text("cause of death: " + causeOfDeath, { font: "myFont" }),
    pos(width() / 2, height() / 2 - 20),
    anchor("center"),
    scale(1),
  ]);

  onKeyPress("enter", () => {
    go("game", LEVELS[currentLevel]);
  });
});

scene("game", (LEVEL) => {
  setGravity(GRAVITY);

  // BACKGROUND
  const bg = add([
    sprite(LEVEL.bg.sprite),
    z(-1),
    anchor("center"),
    fixed(),
    pos(width() / 2, height() / 2),
    scale(LEVEL.bg.scale),
  ]);

  /* -------------------------- level setup --------------------------*/

  const createPlayer = () => {
    return [
      sprite("player", { anim: "idle" }),
      area({
        scale: 0.8,
        shape: new Polygon([
          vec2(-9, -40),
          vec2(9, -40),
          vec2(9, 0),
          vec2(-9, 0),
        ]),
      }),
      body(),
      health(PLAYER_HEALTH),
      anchor("bot"),
      scale(2.7),
      // player properties
      {
        // status
        health: PLAYER_HEALTH,
        oxygen: 200,
        // items
        inventory: {
          portal_shards: 0,
          healing_potions: 1,
          tools: [],
        },
        weapons: {
          gun: true,
        },
        // abilities
        jumpMultiplier: 1,
        speedMultiplier: 1,
        // misc
        helmetOn: true,
        //
        canGoToNextLevel: true, // by default
        isAttacking: false,
      },
      "player",
    ];
  };

  const createEnemy = () => {
    if (LEVEL.hasEnemy) {
      return [
        sprite(LEVEL.enemy.sprite, {
          flipY: getGravity() == GRAVITY ? false : true,
        }),
        area(scale(0.6)),
        body(),
        //pos(x, y),
        anchor("bot"),
        health(rand(100, 200)),
        scale(LEVEL.enemy.scale),
        offscreen({ hide: true }),
        {
          agro: false,
        },
        state("move", ["idle", "attack", "move"]),
        "enemy",
      ];
    } else {
      return;
    }
  };

  const createNote = (text) => {
    return [
      sprite("note"),
      area(),
      body({ isStatic: true }),
      anchor("bot"),
      scale(2.3),
      {
        text: text,
      },
      "note",
    ];
  };

  const level = addLevel(LEVEL.map, {
    tileWidth: TILEWIDTH,
    tileHeight: TILEHEIGHT,
    tiles: {
      // DARK TILE
      "=": () => [
        sprite("dark_tile"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(1),
        tile({ isObstacle: true }),
        offscreen({ hide: true }),
        "solid",
      ],
      // UPSIDE DOWN DARK TILE
      "-": () => [
        sprite("dark_tile", { flipY: true }),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(1),
        tile({ isObstacle: true }),
        offscreen({ hide: true }),
        "solid",
      ],
      M: () => [
        sprite("metalfloor"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(1.5),
        tile({ isObstacle: true }),
        offscreen({ hide: true }),
        "solid",
      ],
      m: () => [
        sprite("metalfloor_closed"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(1.5),
        tile({ isObstacle: true }),
        offscreen({ hide: true }),
        "solid",
      ],
      w: () => [
        sprite("metalwall"),
        //area(),
        z(-1),
        //body({isStatic: true}),
        anchor("bot"),
        scale(1.5),
        offscreen({ hide: true }),
      ],
      W: () => [
        sprite("metalwall_warning", { anim: "metalwall_warningAnim" }),
        //area(),
        z(-1),
        //body({isStatic: true}),
        anchor("bot"),
        scale(1.5),
        offscreen({ hide: true }),
      ],
      // SAND
      2: () => [
        sprite("sand_tile"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        //tile({ isObstacle: true }),
        offscreen({ hide: true }),
        "solid",
      ],
      "+": () => [
        sprite("acid", { anim: "acidAnim" }),
        area({
          scale: 1,
        }),
        body({ isStatic: true }),
        anchor("bot"),
        scale(1.5),
        tile({ isObstacle: true }),
        offscreen({ hide: true }),
        "solid",
      ],
      // SAND BRICK
      3: () => [
        sprite("sandbrick_tile"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        //tile({ isObstacle: true }),
        offscreen({ hide: true }),
        "solid",
      ],
      "|": () => [
        sprite("sandpillar_tile"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        //tile({ isObstacle: true }),
        offscreen({ hide: true }),
        "solid",
      ],
      // SPIKE
      "^": () => [
        sprite("hell_grass"),
        color(BLACK),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(1.5),
        offscreen({ hide: true }),
        "spike",
      ],
      // EJECTOR
      B: () => [
        sprite("ejector"),
        area(),
        body(),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "ejector",
        "movable",
      ],
      // CHEST
      C: () => [
        sprite("chest"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "chest",
      ],
      // PORTAL
      "@": () => [
        sprite("portal"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "portal",
      ],
      // ACTIVATOR
      ")": () => [
        sprite("activator"),
        area(),
        body(),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "activator",
        "movable",
      ],
      // STATIONER
      "(": () => [
        sprite("stationer", { flipY: true }),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "stationer",
      ],
      "~": () => [
        sprite("lava"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "lava",
      ],
      "*": () => [
        sprite("portalShard"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "portalShard",
      ],
      // creates enemy
      "!": () => createEnemy(),
      // CREATES MORE ENEMY :3
      S: () => [
        sprite("spawner"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "spawner",
      ],
      // spawns player
      P: () => createPlayer(),
      // creates note
      "&": () => createNote(LEVEL.levelNote.text),
      // desert-fig
      F: () => [
        sprite("desert-fig"),
        area(),
        body({ isStatic: true }),
        anchor("bot"),
        scale(3),
        offscreen({ hide: true }),
        "desertfig",
      ],
    },
  });

  /* --------------------- PLAYER ------------------------- */
  // setting the tag player as a workable object
  const player = level.get("player")[0];

  player.onUpdate(() => {
    camPos(player.pos);
  });

  /* ======================================= dynamic direction values ========================== */
  let moveLeft = -BASE_PLAYER_SPEED;
  let moveRight = BASE_PLAYER_SPEED;

  let unFlipped = false;
  let flipped = true;

  // its set up like that para ma reverse naton ang values during the gravity flip
  let fireGunRIGHT = RIGHT;
  let fireGunLEFT = LEFT;

  /* --------------------- SOME FUNCS -----------------------*/

  // ======================================= damage player ============================
  // since their isnt a way to get the current health of an object with 'health()'

  async function damagePlayer(amount) {
    await player.hurt(amount);
    if (player.health - amount < 0) {
      player.health = 0;
    } else {
      player.health -= amount;
    }
  }

  // ====================================== passive regeneration =====================
  async function passivelyHealPlayer(amount) {
    loop(REGENINTERVALSECONDS, async () => {
      await player.heal(amount);
      if (player.health + amount > PLAYER_HEALTH) {
        player.health += PLAYER_HEALTH - player.health;
      } else {
        player.health += amount;
      }
    });
  }
  passivelyHealPlayer(20);

  // ========================================== using gun =============================

  async function fireGun(dir) {
    // returns a bullet pointing in the direction of the player
    if (player.curAnim() !== "attack") {
      player.play("attack");
    }
    const charge = add([
      sprite("charge", { flipX: player.flipX ? true : false }),
      scale(2),
      area(),
      pos(player.pos.sub(0, 10)),
      anchor("center"),
      move(dir, BULLET_SPEED),
      lifespan(4),
      {
        DIR: dir, // wala direction data sa gin butang ko na lang diri
      },
      "bullet",
    ]);
    charge.play("chargeAnim");
  }

  // ========================================== calls when player dies ================

  onUpdate(async () => {
    if (player.health <= 0) {
      await wait(0.7);
      await go("failed", "murder");
    }
  });

  // ========================================== explosions ============================

  // the rate at which the particles will be scaled
  function grow(rate) {
    return {
      update() {
        const n = rate * dt(); // mul by dt so the time becomes consistent
        this.scale.x += n;
        this.scale.y += n;
      },
    };
  }
  // spawns a particle for exploosionss
  function addExplode(p, num, rad, size) {
    for (let i = 0; i < num; i++) {
      wait(rand(num * 0.1), () => {
        for (let i = 0; i < 2; i++) {
          add([
            pos(p.add(rand(vec2(-rad), vec2(rad)))),
            sprite("bullet-explosion"),
            scale(1 * size, 1 * size),
            lifespan(0.2),
            grow(rand(9, 30) * size),
            anchor("center"),
          ]);
        }
      });
    }
  }

  // ===================================== bullet collisions ============================
  onCollide("enemy", "bullet", (e, b) => {
    addExplode(b.pos, 1, 1, 1); // add some exploding
    e.hurt(GUN_DAMAGE); // hurt the enemy
    destroy(b); // and remove the bullet like nothing happened
  });

  // if a bullet hits a wall
  onCollide("solid", "bullet", (s, b) => {
    addExplode(b.pos, 1, 1, 1); // add some exploding
    destroy(b); // remove the evidence
  });

  // If a bullet gets shot on a movable object it apparently defys newtons third law of motion and propels the object.. backward! ?
  onCollide("movable", "bullet", function (m, b) {
    if (b.DIR === fireGunLEFT) {
      m.pos.x += 10;
    } else if (b.DIR === fireGunRIGHT) {
      m.pos.x -= 10;
    }
    destroy(b); // also remove the evidence
  });

  // ==================================== tile animations ==============================

  if (level.get("desertfig")) {
    for (const desertfig of level.get("desertfig")) {
      desertfig.play("sway");
    }
  }

  for (const note of level.get("note")) {
    note.play("bounce");
  }

  for (const portalShard of level.get("portalShard")) {
    portalShard.play("sparkle");
  }

  if (level.get("lava")) {
    for (const lava of level.get("lava")) {
      lava.play("burn");
    }
  }

  /* --------------------- EVENTS -------------------------- */

  // jumping on bouncer blocks
  onCollide("player", "ejector", () => {
    player.jumpMultiplier = 1.5;
  });
  onCollideEnd("player", "ejector", () => {
    player.jumpMultiplier = 1;
  });

  // spikes
  onCollide("player", "spike", () => {
    damagePlayer(5);
    shake(1);
    debug.log("ouch"); // aray
  });

  onCollide("player", "portalShard", (pl, ps) => {
    destroy(ps), addExclaim("obtained portal shard", pl.pos);
    player.inventory.portal_shards += 1;
    debug.log(player.inventory.portal_shards);
  });

  // lava
  onCollide("player", "lava", () => {
    go("failed", "toasted alive");
  });

  // ========================================= chests =============================

  let currentChest = "";
  onCollide("player", "chest", (player, chest) => {
    currentChest = chest;
    onKeyPress("e", () => {
      if (LEVEL.item !== undefined) {
        player.inventory.tools.push(LEVEL.item);
        if (currentChest) {
          destroy(currentChest);
          addExclaim(`obtained ${LEVEL.item}`, player.pos);
        }
      }
    });
  });

  onCollideEnd("player", "chest", () => {
    currentChest = "";
  });

  // ======================================= portal ===============================

  onCollide("player", "portal", (pl, po) => {
    if (player.canGoToNextLevel == true) {
      if (currentLevel + 1 !== LEVEL.length) {
        currentLevel += 1;
        go("game", LEVELS[currentLevel]);
      } else {
        go("ending_scene");
      }
    } else {
      addExclaim("You cant yet enter", pl.pos);
    }
  });

  // ====================================== noteDialog ================================

  function addNoteDialog() {
    const pad = 16; // padding
    const border = add([
      pos(width() / 2, height() / 2),
      rect(830, 510),
      color(255, 255, 255),
      anchor("center"),
      z(100),
      fixed(),
    ]);
    const bg = add([
      pos(border.pos),
      rect(820, 500),
      color(18, 32, 32),
      anchor("center"),
      z(100),
      fixed(),
    ]);
    const txt = add([
      text("", {
        width: width(),
        font: "myFont",
      }),
      pos(width() / 2 - 390, height() / 2 + pad),
      z(100),
      fixed(),
      anchor("left"),
      scale(0.6),
    ]);
    // hides the sprites by default
    border.hidden = true;
    bg.hidden = true;
    txt.hidden = true;
    return {
      say(t) {
        txt.text = t;
        bg.hidden = false;
        txt.hidden = false;
        border.hidden = false;
      },
      dismiss() {
        if (!this.active()) {
          return;
        }
        txt.text = "";
        bg.hidden = true;
        txt.hidden = true;
        border.hidden = true;
      },
      active() {
        return !bg.hidden;
      },
      destroy() {
        bg.destroy();
        border.destroy();
        txt.destroy();
      },
    };
  }
  const dialog = addNoteDialog(); // initialize dialog per level

  // ================================================ exclaims ===========================

  function addExclaim(txt, p) {
    const bg = add([
      rect(150, 40),
      pos(p.x, p.y - 50),
      anchor("center"),
      color(18, 32, 32),
      lifespan(2),
      z(100),
    ]);
    const t1xt = add([
      text(txt, { font: "myFont" }),
      pos(bg.pos),
      anchor("center"),
      scale(0.4),
      lifespan(2, { fade: 2 }),
      z(100),
    ]);
  }

  player.onCollide("note", (note) => {
    dialog.say(note.text);
  });
  // when player moves away the dialog is removed
  player.onCollideEnd("note", (note) => {
    dialog.dismiss();
  });

  // ============================================== activators ===========================
  let activated = 0;
  let areAllStationersActivated = false;
  onCollide("activator", "stationer", () => {
    activated++;
    debug.log(activated);
    if (activated >= level.get("stationer").length) {
      areAllStationersActivated = true;
      debug.log("can now enter");
    }
  });
  onCollideEnd("activator", "stationer", () => {
    activated--;
    debug.log(activated);
  });

  // =============================================== enemy spawners =========================

  // every spawner present will activate and spawn enemies
  async function activateEnemySpawners() {
    // loops every 9-12s

    await loop(rand(9, 12), async () => {
      // if the number of enemies is less than: THE ENEMY LIMIT OF EACH SPAWNER COMBINED + ENEMIES THAT ALREADY SPAWNED IN THE LEVEL
      if (level.get("spawner").length > 0) {
        if (
          level.get("enemyFromSpawner").length <=
          SPAWNER_LIMIT * level.get("spawner").length
        ) {
          const spawner = level.get("spawner");
          // loop through all the spawners and spawn enemies around a certain area
          for (let i = 0; i < spawner.length; i++) {
            const enemy = level.spawn(
              "!",
              spawner[i].tilePos.sub(rand(2, -2), 1)
            );
            initEnemyState(enemy);
            enemy.use("enemyFromSpawner");
          }
        }
      }
    });
  }

  // checks if spawners do exist in this level
  if (level.get("spawner").length > 0) {
    activateEnemySpawners(); // hindi paglimtan i run

    // if player is next to a spawner and is carrying a pickaxe, the spawner will break
    let currentSpawner = "";
    player.onCollide("spawner", async (spawner) => {
      // to prevent all spawners from breaking in certain cases the current spawner is stored
      currentSpawner = spawner;
      await onKeyPress("r", function () {
        if (currentSpawner && spawner) {
          // if the player has "pickaxe" in their inventory
          if (player.inventory.tools.includes("pickaxe") === true) {
            addExplode(player.pos, 1, 1, 1);
            destroy(spawner);
          } else {
            addExclaim("you need a pickaxe", player.pos);
          }
        }
      });
    });
    player.onCollideEnd("spawner", async () => {
      await wait(0.3); // since kis a ga jump ka, so may delay para ma catch gyapon
      currentSpawner = "";
    });
  }

  // ====================================== enemy ===============================

  function initEnemyState(enemy) {
    enemy.onStateEnter("idle", async () => {
      await enemy.play("idle");
      await wait(rand(1, 1.5));
      enemy.enterState("attack");
    });

    enemy.onStateEnter("attack", async () => {
      if (
        player.pos.y >= enemy.pos.y - 100 &&
        player.pos.y <= enemy.pos.y + 20 &&
        player.pos.x >= enemy.pos.x - 1000 &&
        player.pos.x <= enemy.pos.x + 1000 &&
        enemy.exists() // for some reason ga tiro gyapon ang enemy even though wala na ga exist
      ) {
        enemy.play("attack");
        add([
          pos(enemy.pos.sub(-20, 50)),
          move(
            player.pos.sub(enemy.pos.x, enemy.pos.y - 30).unit(),
            BULLET_SPEED
          ),
          circle(5),
          area(),
          lifespan(5),
          anchor("center"),
          color(RED),
          "enemybullet",
        ]);
      }
      await wait(rand(0.3, 0.6));
      enemy.enterState("move");
    });

    enemy.onStateEnter("move", async () => {
      await enemy.play("move");
      await wait(rand(1.5, 2.5));
      enemy.enterState("idle");
    });

    enemy.onStateUpdate("move", async () => {
      if (
        player.pos.y >= enemy.pos.y - 100 &&
        player.pos.y <= enemy.pos.y + 20 &&
        player.pos.x >= enemy.pos.x - 1000 &&
        player.pos.x <= enemy.pos.x + 1000
      )
        return;

      const dir = player.pos.sub(enemy.pos).unit();
      enemy.move(dir.scale(LEVEL.enemy.speed));

      if (player.pos.sub(enemy.pos).unit().scale(1).x < 0) {
        enemy.flipX = flipped;
        debug.log("left");
      } else {
        enemy.flipX = unFlipped;
        debug.log("right");
      }
    });
  }

  for (const enemy of level.get("enemy")) {
    initEnemyState(enemy);
  }

  // when enemy dies they are expelled from reality
  on("death", "enemy", (e) => {
    destroy(e);
  });

  // ================================================ enemy bullet collision ===============================

  // when player collides with the bullet of the enemy the player is hurt
  player.onCollide("enemybullet", async () => {
    await damagePlayer(10);
  });

  onCollide("enemybullet", "solid", async (eb, s) => {
    await addExplode(s.pos, 0.5, 0.5, 0.5);
    await destroy(eb);
  });

  // ================================================ void collision =======================================

  player.onUpdate(() => {
    // i think 5000 ang max
    if (player.pos.y > LEVEL.map.length * TILEHEIGHT + 1000) {
      destroy(player);
      go("failed", "falling into the void");
    }
  });

  // ===================================================== gravity reversal =================================

  async function reverseGravity() {
    let angle = 0; // var to store current angle para ma check in conditions
    let timer = 0; // store the amount of seconds elapsed since last reversal
    //await wait(6)  // waits 10 seconds before it starts the loop so hindi siya ma run at launch
    await loop(1, async function () {
      timer++;

      //para magbalik sa 0 and make our lives easier
      if (angle === 360) {
        angle = 0;
      }

      if (timer === 6) {
        timer = 0; // reset timer
        tween(
          angle,
          angle + 180,
          0.7,
          (val) => camRot(val),
          easings.easeOutQuad // ambot kung ano ni
        );

        // reverses the gravity to the camRotation that matches
        angle += 180;
        if (angle === 180) {
          setGravity(GRAVITY * -1);
        } else {
          setGravity(GRAVITY);
        }

        // funcs that makes sure that hindi weird when upside down
        await shake(10); // *planet's core exploding*
        reverseControls(); // reverse controls
        flipEntities(); // reverse sprites of entities
      }
    });
  }

  function flipEntities() {
    if (getGravity() == GRAVITY) {
      player.flipY = false;
    } else {
      player.flipY = true;
    }

    for (const enemy of level.get("enemy")) {
      if (getGravity() == GRAVITY) {
        enemy.flipY = false;
      } else {
        enemy.flipY = true;
      }
    }
  }

  function reverseControls() {
    // reverse movement
    let temp1 = moveRight;
    moveRight = moveLeft;
    moveLeft = temp1;

    // reverse gun fire
    let temp2 = fireGunRIGHT;
    fireGunRIGHT = fireGunLEFT;
    fireGunLEFT = temp2;
    //JUMP_STRENGTH *= (-1); // hindi pwede negative ang jump :<

    let temp3 = unFlipped;
    unFlipped = flipped;
    flipped = temp3;
  }

  /* ======================================== user interface ======================== */

  // init the ui element
  const ui = add([
    fixed(), // so that it doesn't move
    z(999), // so nothing will overlap it
  ]);

  // adds health element to ui
  var healthLabel = make([
    text("hp: " + player.health, { font: "myFont" }),
    pos(width() / 40, height() / 40),
    scale(0.9),
  ]);

  // adds health bar to ui relative to health labek
  var healthBar = make([
    sprite(`healthbar`),
    pos(healthLabel.pos.x + 140, healthLabel.pos.y - 5),
    scale(3),
  ]);

  // add ui elements
  ui.add(healthLabel);
  ui.add(healthBar);

  // handles ui updates when stuff changes
  ui.onUpdate(() => {
    healthLabel.text = "hp: " + player.health;
    const p = player.health;

    switch (true) {
      case player.health >= 150:
        healthBar.play("h150");
        break;
      case player.health <= 149 && player.health >= 140:
        healthBar.play("h140");
        break;
      case player.health <= 139 && player.health >= 130:
        healthBar.play("h130");
        break;
      case player.health <= 129 && player.health >= 120:
        healthBar.play("h120");
        break;
      case player.health <= 119 && player.health >= 110:
        healthBar.play("h110");
        break;
      case player.health <= 109 && player.health >= 100:
        healthBar.play("h100");
        break;
      case player.health <= 99 && player.health >= 90:
        healthBar.play("h90");
        break;
      case player.health <= 89 && player.health >= 80:
        healthBar.play("h80");
        break;
      case player.health <= 79 && player.health >= 70:
        healthBar.play("h70");
        break;
      case player.health <= 69 && player.health >= 60:
        healthBar.play("h60");
        break;
      case player.health <= 59 && player.health >= 50:
        healthBar.play("h50");
        break;
      case player.health <= 49 && player.health >= 40:
        healthBar.play("h40");
        break;
      case player.health <= 39 && player.health >= 30:
        healthBar.play("h30");
        break;
      case player.health <= 29 && player.health >= 20:
        healthBar.play("h20");
        break;
      case player.health <= 19 && player.health >= 10:
        healthBar.play("h10");
        break;
      case player.health <= 9 && player.health >= 0:
        healthBar.play("h10");
        break;
      case player.health <= 0:
        healthBar.play("h0");
        break;
      default:
        console.log("Somethung went wroing...");
    }
    
    // the health bar will change color depending on how many is percent of health is left
  });

  // ====================================== controls =============================

  // return animation to idle
  function returnIdle() {
    if (player.curAnim() !== "idle") {
      player.play("idle");
    }
  }
  onKeyDown("a", () => {
    // prevents player from moving while holding down the attack
    if (!player.isAttacking) {
      player.move(moveLeft * player.speedMultiplier, 0);
    }

    player.flipX = flipped;
    // if player is on the ground and is not attacking
    if (
      player.curAnim() !== "run" &&
      player.isGrounded() &&
      !player.isAttacking
    ) {
      player.play("run");
    } else {
      // else if is not grounded, jump will play
      if (!player.isGrounded()) {
        player.play("jump");
      }
    }
  });
  onKeyRelease("a", () => {
    // return anim to idle
    if (player.curAnim() !== "idle") {
      returnIdle();
    }
  });

  onKeyDown("d", () => {
    // prevents player from moving while holding down the attack
    if (!player.isAttacking) {
      player.move(moveRight * player.speedMultiplier, 0);
    }

    player.flipX = unFlipped;
    // if player is on the ground and is not attacking
    if (
      player.curAnim() !== "run" &&
      player.isGrounded() &&
      !player.isAttacking
    ) {
      player.play("run");
    } else {
      // else if is not grounded, jump will play
      if (!player.isGrounded()) {
        player.play("jump");
      }
    }
  });
  onKeyRelease("d", () => {
    // return anim to idle
    if (player.curAnim() !== "idle") {
      returnIdle();
    }
  });

  onKeyPress("space", () => {
    if (player.curAnim() !== "jump" && player.isGrounded()) {
      player.jump(JUMP_STRENGTH * player.jumpMultiplier);
      player.play("jump");
    }
  });
  onKeyRelease("space", returnIdle);

  // keep tracks of when was the last time an attack was used
  let lastTimeFired = new Date().getTime();
  onKeyDown(";", async () => {
    player.isAttacking = true;
    let currentDir = undefined; // stores the player's current direction and thus the direction the attack

    // checks if the player is flipped or not
    if (player.flipX == flipped) {
      currentDir = fireGunLEFT;
    } else {
      currentDir = fireGunRIGHT;
    }

    const currentTime = new Date().getTime(); // gets current time when the key is pressed

    // checks if current time has elapsed the said delay of 250ms
    if (currentTime > lastTimeFired + 250) {
      // sets the currentTime to the lasttimefired
      lastTimeFired = currentTime;
      await fireGun(currentDir);
    }
  });
  onKeyRelease(";", () => {
    returnIdle();
    player.isAttacking = false;
  });

  // level swicth
  let numberOfPortalShards = 0;

  switch (LEVEL.level) {
    case 1:
      loop(0.8, () => {
        if (player.oxygen > 0) {
          player.oxygen -= 2;
        }
      });

      var oxygenBar = make([
        text("Oxygen:" + player.oxygen, { font: "myFont" }),
        pos(healthLabel.pos.x, healthLabel.pos.y + 50),
        scale(0.8),
      ]);

      ui.add(oxygenBar);

      oxygenBar.onUpdate(() => {
        oxygenBar.text = "Oxygen: " + player.oxygen;
      });

      // when player sufficates
      function sufficate(amount) {
        loop(2, () => {
          damagePlayer(amount);
        });
      }

      // if player does lose oxygen or oxygen is 0
      player.onUpdate(() => {
        if (player.oxygen < 1) {
          sufficate(20);
        }
        if (player.health <= 0) {
          go("failed", "suffication");
        }
      });

      numberOfPortalShards = level.get("portalShard").length;

      player.onUpdate(async () => {
        if (
          level.get("spawner").length <= 0 &&
          player.inventory.portal_shards == numberOfPortalShards
        ) {
          player.canGoToNextLevel = true;
        } else {
          player.canGoToNextLevel = false;
          debug.log(
            `\n${level.get("spawner").length} \n${
              player.inventory.portal_shards
            } - ${numberOfPortalShards} /n`
          );
        }
      });

      camScale(1);
      break;
    case 2:
      // adds pickaxe to inventory
      player.inventory.tools.push("pickaxe");

      // slows the player down kay may hangin
      player.speedMultiplier = 0.5;

      // for deserts and stuff
      let currentDesertFig = "";
      onCollide("player", "desertfig", (player, desertfig) => {
        currentDesertFig = desertfig;
        onKeyPress("c", () => {
          if (currentDesertFig) {
            // if the player has "pickaxe" in their inventory
            if (player.inventory.tools.includes("shears") === true) {
              addExplode(player.pos, 1, 1, 1);
              destroy(currentDesertFig);
            } else {
              addExclaim("you need shears", player.pos);
            }
          }
        });
      });

      onCollideEnd("player", "desertfig", () => {
        currentDesertFig = "";
      });

      camScale(1);
      break;
    case 3:
      numberOfPortalShards = level.get("portalShard").length;

      onUpdate(async () => {
        if (
          player.inventory.portal_shards == numberOfPortalShards &&
          areAllStationersActivated == true
        ) {
          player.canGoToNextLevel = true;
        } else {
          player.canGoToNextLevel = false;
        }
        debug.log(`
                     Stationers: ${areAllStationersActivated} 
                     ${player.inventory.portal_shards} / ${numberOfPortalShards}
                 `);
      });
      camScale(1.1);
      break;

    case 4:
      console.log("level4");

      reverseGravity();
      player.inventory.tools.push("pickaxe");
      player.inventory.tools.push("shears");

      numberOfPortalShards = level.get("portalShard").length;

      onUpdate(async () => {
        if (
          player.inventory.portal_shards == numberOfPortalShards &&
          areAllStationersActivated == true &&
          level.get("spawner").length <= 0
        ) {
          player.canGoToNextLevel = true;
        } else {
          player.canGoToNextLevel = false;
          debug.log(`
                     Stationers: ${areAllStationersActivated} 
                     ${player.inventory.portal_shards} / ${numberOfPortalShards}
                    `);
        }
      });
      camScale(0.7);
      break;

    case 5:
      console.log("level5");

      player.inventory.tools.push("pickaxe");
      player.inventory.tools.push("shears");

      reverseGravity();
      numberOfPortalShards = level.get("portalShard").length;

      onUpdate(async () => {
        if (
          player.inventory.portal_shards == numberOfPortalShards &&
          areAllStationersActivated == true &&
          level.get("spawner").length <= 0
        ) {
          player.canGoToNextLevel = true;
        } else {
          player.canGoToNextLevel = false;
          player.canGoToNextLevel = false;
          debug.log(`
                     Stationers: ${areAllStationersActivated} 
                     ${player.inventory.portal_shards} / ${numberOfPortalShards}
                     ${level.get("spawner").length}
                    `);
        }
      });

      camScale(1.1);
      break;
    default:
      console.log("Error level does not exist");
  }
});

// is this necessary????
document.addEventListener("DOMContentLoaded", () => {
  go("main_menu");
});
