/**
 * This is a partially deobfuscated copy of the game replayer file. 
 * This probably won't run, it's just for reference when determining where to add code for the payload/replayer.js file
 * Essentially it works as follows:
 * The first variable _0x2275 contains a list of (almost) every string in the file, including keywords, function names, regex patterns, etc.
 * Search this file/variable to find the function ur looking for, then take note of its name's index in _0x2275
 * This will correspond to some hex encoded value in the original replayer.js file
 * 
 * e.g. 
 * "replace" is index 7 (line 27) of _0x2275, so it corresponds to "_0x2275[7]" in the original obfuscated file
 */






// Trying to align this so the first index of _0x2275 ends in zero to make the math easier (subtract 20 from the line number). 
// You can also just go to the replayer webpage and print _0x2275 in the console, which will list every string and its index
export var _0x2275 = ["use strict",
    "toFixed",
    "floor",
    ":",
    "0",
    "",
    "\\]",
    "replace",
    "\\[",
    "search",
    "exec",
    "[\\?&]",
    "=([^&#]*)",
    " ",
    "hasOwnProperty",
    "byteLength",
    "fromCharCode",
    "btoa",
    "atob",
    "length",
    "charCodeAt",
    "object",
    "indexOf",
    "filter",
    "slice",
    "&amp;",
    "&lt;",
    "&gt;",
    "?",
    "<svg class=\"",
    "\"><use xlink:href=\"",
    "/svg/",
    ".svg#",
    "\"></use></svg>",
    "display",
    "style",
    "block",
    "none",
    "&quot;",
    "selectAllChildren",
    "getSelection",
    "option",
    "createElement",
    "value",
    "id",
    "innerHTML",
    "title",
    "desc",
    "dataset",
    "description",
    "appendChild",
    "undefined",
    "cdn",
    "/",
    "https://",
    "head",
    "script",
    "type",
    "text/javascript",
    "src",
    "onload",
    "onreadystatechange",
    "values",
    "map",
    "keys",
    "set",
    "pos",
    "rot",
    "item",
    "blocks",
    "step",
    "scale",
    "items",
    "previewAs",
    "equidist",
    "allspin",
    "I",
    "O",
    "T",
    "L",
    "J",
    "S",
    "Z",
    "I5",
    "V5",
    "T5",
    "U5",
    "W5",
    "X5",
    "J5",
    "L5",
    "S5",
    "Z5",
    "TL",
    "TJ",
    "OZ",
    "OS",
    "TS",
    "TZ",
    "LL",
    "JJ",
    "I1",
    "I2",
    "I3",
    "L3",
    "concat",
    "push",
    "kicks",
    "name",
    "O+",
    "stringify",
    "parse",
    "spawn",
    "ghost",
    "INV",
    "A",
    "freeze",
    "ATI",
    "SOFT_DROP",
    "HARD_DROP",
    "CLEAR1",
    "CLEAR2",
    "CLEAR3",
    "CLEAR4",
    "CLEAR5",
    "TSPIN_MINI",
    "TSPIN",
    "TSPIN_MINI_SINGLE",
    "TSPIN_SINGLE",
    "TSPIN_DOUBLE",
    "TSPIN_TRIPLE",
    "PERFECT_CLEAR",
    "COMBO",
    "B2B",
    "get",
    "prototype",
    "lineAtk",
    "getComboAttack",
    "linesAttack",
    "wasBack2Back",
    "Score",
    "ISGAME",
    "randomizer",
    "matrix",
    "deadline",
    "blockSets",
    "softDropSpeeds",
    "blockIds",
    "queue",
    "queueLength",
    "gamedata",
    "skins",
    "None",
    "Default",
    "/res/b1.png",
    "Pixel",
    "/res/b2.png?v2",
    "Glass",
    "/res/b3.png?v2",
    "Gradient",
    "/res/b4.png?v2",
    "Nullpomino4",
    "/res/b5.png",
    "Invisible",
    "Mono",
    "Eyebites",
    "/res/b8.png",
    "Retro",
    "/res/b9.png",
    "Color Cubes",
    "/res/b10.png",
    "Simple",
    "/res/b11.png",
    "Color Blocks",
    "/res/b12.png",
    "Critter",
    "/res/b13.png",
    "customSkinPath",
    "temporaryBlockSet",
    "blockInHold",
    "spinPossible",
    "spinMiniPossible",
    "tspinMiniPossible",
    "isBack2Back",
    "isInvisibleSkin",
    "monochromeSkin",
    "cids",
    "coffset",
    "colors",
    "black",
    "#D70F37",
    "#E35B02",
    "#E39F02",
    "#59B101",
    "#0F9BD7",
    "#2141C6",
    "#AF298A",
    "#999999",
    "#6A6A6A",
    "white",
    "colorsV3",
    "NullCol",
    "#E4203E",
    "#E47E30",
    "#E3CF3C",
    "#1DE03D",
    "#00C9DF",
    "#0042DC",
    "#9E2CDC",
    "#585858",
    "multipleNames",
    "Single",
    "Double",
    "Triple",
    "Quadruple",
    "Multiple",
    "excludedBlocksAS",
    "Items",
    "R",
    "DEF",
    "rnd",
    "initRandomizer",
    "RNG",
    "usebag",
    "bag",
    "n",
    "getBlock",
    "lastIndex",
    "hist",
    "i",
    "nextSegment",
    "bsArr",
    "EXPECTED_BLOCKS",
    "volume",
    "comboTones",
    "maxCombo",
    "getSoundUrl",
    "getSoundUrlFromObj",
    "abs",
    "url",
    "/res/se",
    "getComboSFX",
    "c",
    "min",
    "linefall",
    "getScoreSFX",
    "scoring",
    "s",
    "getClearSFX",
    "b2bScoring",
    "b",
    "b2b",
    "hold",
    "hold.wav",
    "linefall.wav",
    "lock",
    "lock.wav",
    "move",
    "move.wav",
    "died",
    "topout.wav",
    "ready",
    "ready.wav",
    "go",
    "go.wav",
    "ding",
    "ding.wav",
    "msg",
    "msg2.mp3",
    "fault",
    "fault.wav",
    "blank",
    "null.wav",
    "item.mp3",
    "pickup",
    "pickup.mp3",
    "rotate",
    "rotate.ogg",
    "success",
    "success.ogg",
    "harddrop",
    "golive",
    "land",
    "garbage",
    "author",
    "inherit",
    "spawns",
    "Chris Butler, CC BY 3.0, remixed, freesound.org",
    "lock.mp3",
    "topout.mp3",
    "comboTones.mp3",
    "Dr Ocelot, CC BY 3.0",
    "ren/ren",
    ".ogg",
    "hold.ogg",
    "move.ogg",
    "ready.ogg",
    "go.ogg",
    "start.ogg",
    "locknohd.ogg",
    "harddrop.ogg",
    "step.ogg",
    "garbage.ogg",
    "b2b.ogg",
    "topout.ogg",
    "lockforce.ogg",
    "erase1.ogg",
    "erase2.ogg",
    "erase3.ogg",
    "erase4.ogg",
    "tspin0mini.ogg",
    "tspin0.ogg",
    "tspin1mini.ogg",
    "tspin1.ogg",
    "tspin2.ogg",
    "tspin3.ogg",
    "bravo.ogg",
    "Google Translate",
    "bl/I.mp3",
    "bl/O.mp3",
    "bl/S.mp3",
    "bl/Z.mp3",
    "bl/T.mp3",
    "bl/L.mp3",
    "bl/J.mp3",
    "game_over.mp3",
    "b2b/e4.mp3",
    "b2b/tspin2.mp3",
    "e1.mp3",
    "e2.mp3",
    "e3.mp3",
    "e4.mp3",
    "tspin0Mini.mp3",
    "tspin0.mp3",
    "tspin1Mini.mp3",
    "tspin1.mp3",
    "tspin2.mp3",
    "tspin3.mp3",
    "PC.mp3",
    "twitch.tv/daliciouss",
    "b/I.mp3",
    "b/O.mp3",
    "b/S.mp3",
    "b/Z.mp3",
    "b/T.mp3",
    "b/L.mp3",
    "b/J.mp3",
    "b2b.mp3",
    "tspin0mini.mp3",
    "tspin1mini.mp3",
    "well-done.ogg",
    "randomizerFactory",
    "baseBlockSet",
    "blockRNG",
    "Replay",
    "config",
    "getRandomizerBlock",
    "generateLiveQueue",
    "blockSeed",
    "seed",
    "conf",
    "generateQueue",
    "getBlockFromQueue",
    "pmode",
    "noBlocks",
    "noBlocks2",
    "gameWarning",
    "Caption",
    "activeBlock",
    "splice",
    "refillQueue",
    "updateQueueBox",
    "checkIntersection",
    "setCurrentPieceToDefaultPos",
    "x",
    "y",
    "centerColumnCheck",
    "rotateCurrentBlock",
    "finesse",
    "used180",
    "-1",
    "1",
    "2",
    "tspinType",
    "lockDelayActive",
    "timer",
    "playSound",
    "updateGhostPiece",
    "redraw",
    "addSolidGarbage",
    "solidHeight",
    "Action",
    "timestamp",
    "add",
    "gravityStep",
    "lockDelayActivated",
    "lastAction",
    "holdBlock",
    "holdUsedAlready",
    "holdEnabled",
    "getNextBlock",
    "lastGeneration",
    "VSEenabled",
    "VSFXset",
    "playCurrentPieceSound",
    "totalKeyPresses",
    "holds",
    "GameStats",
    "HOLD",
    "checkAutoRepeat",
    "redrawHoldBox",
    "onBlockHold",
    "v",
    "moveBlockToTheWall",
    "ghostEnabled",
    "redrawBlocked",
    "ghostPiece",
    "checkTSpin",
    "checkAllSpinImmobile",
    "checkAllSpin",
    "isArray",
    "checkLineClears",
    "countGarbageHeight",
    "clearLines",
    "allSpin",
    "clearDelay",
    "garbageCleared",
    "isPmode",
    "finish",
    "mapData",
    "MapManager",
    "FINISH_STANDARD",
    "lineCleared",
    "lines",
    "LINES",
    "singles",
    "debug",
    "T-Spin Single",
    "Scoring",
    "T-Spin Mini Single",
    "doubles",
    "TSD",
    "T-Spin Double",
    "triples",
    "T-Spin Triple",
    "tetrises",
    "Tetris",
    "Multitris (",
    ")",
    "Ignored ",
    "-Spin",
    "-Spin ",
    " Mini",
    "B2B ",
    "wasted",
    "tspins",
    "score",
    "PCs",
    "Perfect Clear",
    "FINISH_BY_PC",
    "practiceModeCompleted",
    "mapLines",
    "fourWideFlag",
    "noFourWide",
    "Live",
    "comboCounter",
    "is4W",
    "linesSent",
    "ATTACK",
    "SFXset",
    "showInChat",
    "attack",
    "linesRemaining",
    "textContent",
    "lrem",
    "cheeseLevel",
    "minCheeseHeight",
    "addGarbage",
    "setLrem",
    "notTSD",
    "notTSDInfo",
    "TSD20",
    "clock",
    "round",
    "lastPC",
    "PCdata",
    "evalPCmodeEnd",
    "ModeManager",
    "on",
    "blockOrSendAttack",
    "fwDetect",
    "fwDetectInfo",
    "sendAttack",
    "play",
    "animator",
    "onLinesCleared",
    "-Spin Mini",
    "maxCheeseHeight",
    "placeBlock",
    "placedBlocks",
    "tpieces",
    "BLOCKS",
    "getKPP",
    "KPP",
    "savePlacementTime",
    "color",
    "liveMode",
    "raceCompleted",
    "place",
    "playing",
    "solidToAdd",
    "gblock",
    "addGarbageFromQueue",
    "onBlockLocked",
    "getWasted",
    "WASTE",
    "getQueuePreview",
    "r",
    "redBar",
    "incomingGarbage",
    "gDelay",
    "recordRedbarChange",
    "solidAttack",
    "linesReceived",
    "garbageCols",
    "shift",
    "mess",
    "random",
    "lastHolePos",
    "randomExcept",
    "gapW",
    "gInv",
    "RECV",
    "d",
    "WIDE_GARBAGE_ADD",
    "AUX",
    "addToGarbageQueue",
    "redrawRedBar",
    "getAPM",
    "getVS",
    "scoreMult",
    " * ",
    " = <b>",
    "</b>",
    "SCORE",
    "getTime",
    "comboAttack",
    "deleteFromGarbageQueue",
    "paintMatrixWithColor",
    "clearMatrix",
    "QueueHoldEnabled",
    "clearQueueCanvas",
    "showPreviews",
    "repeatQueue",
    "addStaticQueueToQueue",
    "yp",
    "xp",
    "drawBlockOnCanvas",
    "drawBrickOverlayOnCanvas",
    "clearHoldCanvas",
    "resetGameData",
    "getGravityLevel",
    "MAX_SAFE_INTEGER",
    "exports",
    "getRandomExcept",
    "Nullpomino",
    "Yotipo",
    "Rainforest",
    "Tetra-X",
    "TTS-VoiceSFXset",
    "TTS-SpawnSFXset",
    "Commentary - Dal",
    "Block spawns - Dal",
    "playingSound",
    "p",
    "itmBox",
    "getElementsByClassName",
    "itmIcn",
    "itmTxt",
    "itmDef",
    "Tblocks",
    "/res/img/i/tpieces.png",
    "Tornado",
    "/res/img/i/tornado.png",
    "Compress",
    "/res/img/i/compress.png",
    "Fourwide",
    "/res/img/i/four.png",
    "Poison",
    "/res/img/i/poison.png",
    "Pentomino",
    "/res/img/i/pento.png",
    "Big",
    "/res/img/i/big.png",
    "Invert",
    "/res/img/i/invert.png",
    "Mystery",
    "/res/img/i/unknown.png",
    "Win",
    "/res/img/i/win.png",
    "B1",
    "/res/img/i/dot.png",
    "Big2",
    "key",
    "origBBS",
    "P1",
    "fs",
    "f",
    "isPriv",
    "active",
    "preload",
    "dom",
    "getDate",
    "g",
    "tmpMatrix",
    "invertMatrix",
    "PER_ROUND",
    "hadGhost",
    "hd",
    "onMapReady",
    "mapId",
    "emptyMatrix",
    "lowestMapLine",
    "STATE_NEW",
    "STATE_PUBLISHED",
    "onReady",
    "modeId",
    "modeData",
    "goalInfo",
    "modeBtns",
    "timesPlayed",
    "soundCache",
    "skinCache",
    "startingTimeout",
    "unpauseHandler",
    "nextModeHandler",
    "components",
    "eventTriggers",
    "timeTriggers",
    "initTrigger",
    "initTriggerFirst",
    "afterTrigger",
    "totalRuns",
    "totalTriggers",
    "usedTriggers",
    "fail",
    "isFinished",
    "noQueueRefill",
    "skinWasChanged",
    "lastAttackGarbageColumn",
    "STATE_LOCKED",
    "STATE_PUBLISHED_UNLISTED",
    "BLOCK",
    "LINE",
    "LINECLEAR",
    "statID",
    "blockNames",
    "fileload",
    "bind",
    "soundLoaded",
    "addEventListener",
    "Sound",
    "enabled",
    "cmds",
    "playSpeed",
    "pauseReplay",
    "listeners",
    "startDownloaders",
    "elemID",
    "elem",
    "getElementById",
    "live",
    "isDownloading",
    "controller",
    "download",
    "spin",
    "img",
    "repLoading",
    "classList",
    "/res/svg/spinWhite.svg",
    "nextSibling",
    "insertBefore",
    "parentNode",
    "reachedEnd",
    "subMode",
    "frames",
    "gameStep",
    "softDrop",
    "softDropId",
    "holdPressed",
    "solidInterval",
    "totalFinesse",
    "finFaults",
    "scoreStamps",
    "timeRemaining",
    "actions",
    "Analytics",
    "call",
    "data",
    "byte",
    "bitpos",
    "timeout",
    "playingLive",
    "frameId",
    "stop",
    "_playTask",
    "vol",
    "complete",
    "_next",
    "failed",
    "avail",
    "loadConf",
    "m",
    "forEach",
    "def",
    "autoSelectKey",
    "w",
    "z",
    "a",
    "e",
    "controls",
    "Settings",
    "includes",
    "<b>",
    "toUpperCase",
    "</b> to use",
    "genItem",
    "genItemType",
    "resolveProb",
    "onReset",
    "preloadIcons",
    "revert",
    "reset",
    "backgroundImage",
    "mysteryItem",
    "fullSize",
    "url(",
    "remove",
    "onHardDrop",
    "use",
    "applyItem",
    "changeRandomizer",
    "changeMatrix",
    "changeBBS",
    "BLOCK_SET",
    "Instant win",
    "loading",
    "resolveMystery",
    "MATRIX_MOD",
    "loadFourWide",
    "wipeDeadline",
    "VmAAAiJUYAACIlRAAAMyUUAAAzIRcAAGZhdwAAEWEXAABxFREAAHdVIgAAcVUiAAARVSIAABdWIgAAd3ZmAABmYzUAAGZjNQAAYzIlAABjNSUAACIlIQAAJEURRABEJRRAACIg==",
    "parseMatrix",
    "compressMatrix",
    "tfTornado",
    "RANDOMIZER",
    "hdAbort",
    "render",
    "iter",
    "finished",
    "gameEnded",
    "hardDrop",
    "mapFetchError",
    "This map could not be loaded!\n",
    "startPractice",
    "getLowestMapLine",
    "reduce",
    "parseMapData",
    "loadMap",
    "state",
    "/maps/api/",
    "GET",
    "open",
    "X-Requested-With",
    "XMLHttpRequest",
    "setRequestHeader",
    "Content-type",
    "application/x-www-form-urlencoded",
    "send",
    "message",
    "ontimeout",
    "REQUEST_TIMEOUT",
    "onerror",
    "onabort",
    "REQUEST_FAIL",
    "status",
    "responseText",
    " - ",
    "statusText",
    "prepare",
    "map not specified",
    "run",
    "execCommand",
    "execCommands",
    "clearPause",
    "clearNextModeHandler",
    "keydown",
    "removeEventListener",
    "clearUnPauseHandler",
    "resetUI",
    "getNamedStatVal",
    "string",
    "Blocks",
    "Finesse",
    "Sent",
    "Tspins",
    "Combo",
    "TSDs",
    "Time",
    "APM",
    "getPPS",
    "PPS",
    "VS",
    "Garbage cleared",
    "Holds",
    "WastedTs",
    "Lines",
    "MaxCombo",
    "Singles",
    "Doubles",
    "Triples",
    "Jstrises",
    "initialExecCommands",
    "pause",
    "field_type",
    "isClearMatrix",
    "redrawMatrix",
    "len",
    "opts",
    "skip",
    "paused",
    "totalCond",
    "usedCond",
    "stageCompleted",
    "sendForfeit",
    "l",
    "safeSend",
    "skipToNext",
    "next",
    "modeComplete",
    "skip-btn",
    "saveScore",
    "clip-congratz",
    "Info",
    "Result: Total starts: ",
    "button",
    "focusState",
    "keyCode",
    "stopImmediatePropagation",
    "BUTTON",
    "captions",
    "resolveIdentifier",
    ".",
    "split",
    "Namespace ",
    " does not exist!",
    "log",
    "assign",
    "cond",
    "check",
    "do",
    "check2",
    "match",
    "Could not fetch val for expression:",
    "<",
    ">",
    "=",
    "trim",
    "substring",
    ",",
    "<=",
    "=<",
    ">=",
    "=>",
    "span",
    "goalOk",
    "goalF",
    ": ",
    "childNodes",
    "firstChild",
    "fadeOutTop",
    "removeChild",
    "Required ",
    ",<br>you had ",
    "Failed",
    "do2",
    "execById",
    "rtrig",
    "af",
    "when",
    "registerCommandTrigger",
    "t",
    "sort",
    "refill",
    "wipe",
    "last",
    "staticQueue",
    "repeat",
    "stats",
    "resetAll",
    "applyShownStats",
    "reorder",
    "text",
    "replaceTextVars",
    "modeInfo",
    "sprintInfo",
    "sprintInfoLineContent",
    "inp",
    "hide",
    "redrawAll",
    "audio",
    "SEenabled",
    "clip-",
    "-",
    "context",
    "WebAudioPlugin",
    "suspended",
    "outOfFocus",
    "onstatechange",
    "atk",
    "col",
    "cols",
    "cs",
    "garbageQueue",
    "addAsyncGarbageFromTheQueue",
    "skin",
    "loaded",
    "Skin skipped because not loaded.",
    "warn",
    "changeSkin",
    "h",
    "loadSkin",
    "rule",
    "applyPresetRule",
    "RulesetManager",
    "attackTable",
    "comboTable",
    "speedLimit",
    "setSpeedLimit",
    "gravityLvl",
    "applyGravityLvl",
    "lockDelay",
    "setLockDelay",
    "switch",
    "substr",
    "findIndex",
    "matchAll",
    "Mode could not be loaded!\n",
    "restarts",
    "enableSkipButton",
    "click",
    "Skip",
    "href",
    "javascript:void(0)",
    "btnNX2",
    "btnNX-sm",
    "blue",
    "getHint",
    "xhint",
    "hintPtr",
    "hintCount",
    "enableHintButton",
    "hint-btn",
    "Hint",
    "Hint (",
    "loadMode",
    "parseModeData",
    "list",
    "getParameterByName",
    "effectiveList",
    "?list=",
    "Jstris",
    "/play/mode/list/",
    "pushState",
    "history",
    "/play/mode/",
    "/usermodes/api/",
    "restoreSkin",
    "origSkin",
    "json",
    "skinId",
    "authorized",
    "rated",
    "so",
    "loadedParts",
    "fields",
    "cid",
    "trig",
    "naturalHeight",
    "Loaded ",
    "loadModeSkins",
    "error",
    "One of the required skins couldnt be loaded.",
    "ID-",
    "when2",
    "https://audio.jezevec10.com/dal/congratulations.ogg",
    "flex",
    "registerSounds",
    "finalLoader",
    "startsWith",
    "replaceActiveBlock",
    "registerTimeTrigger",
    "mode",
    "Mode not specified!",
    "toggleRepControls",
    "disabled",
    "load",
    "prev",
    "addListener",
    "trigger",
    "frame",
    "update",
    "canvas",
    "requestAnimFrame",
    "playUntilTime",
    "onTimeRemainingChanged",
    "fixUltraClockPrecision",
    "loadReplay",
    "rep",
    "decompressFromEncodedURIComponent",
    "Error",
    "Invalid replay file. Aborting",
    "initReplay",
    "initSetOnce",
    "restart",
    "onReplayLoaded",
    "Replay Analytics Error",
    "toggleAnalytics",
    "Not possible to play two Ver1 replays at once!\nUse at least one V3 replay.",
    "allReplaysEnded",
    "ptr",
    "boolean",
    "Pause",
    "Play",
    "nextFrame",
    "updateTextBar",
    "prevFrame",
    "max",
    "loadAtTime",
    "loadAtFrame",
    "changeSpeed",
    "speed",
    "SAcontainer",
    "showSA",
    "Hide",
    "Show",
    "keyInput",
    "getFinesse",
    "rep0",
    "rep1",
    "onRepReady",
    "onData",
    "compressToEncodedURIComponent",
    "content",
    "[name=csrf-token]",
    "querySelector",
    "/replay/data",
    "?id=",
    "&type=",
    "X-CSRF-TOKEN",
    "onError",
    "function",
    "<br><b>ERROR:</b> ",
    "create",
    "buffer",
    "harddrops",
    "segSize",
    "showGlobalAvg",
    "showLocalSpeed",
    "showCurrentPos",
    "showRelAtk",
    "scLayer0",
    "speedChartLayer0",
    "ctx0",
    "2d",
    "getContext",
    "strokeStyle",
    "yellow",
    "fillStyle",
    "scLayer1",
    "speedChartLayer1",
    "ctx1",
    "mousemove",
    "mouseMove",
    "mouseleave",
    "clearHighlights",
    "chartClick",
    "checked",
    "dispP",
    "dispL",
    "dispG",
    "dispF",
    "dispRA",
    "change",
    "tb",
    "tbody",
    "getElementsByTagName",
    "scoreTable",
    "emptyData",
    "scoreFilter",
    "ordered",
    "initDefault",
    "order",
    "initialVal",
    "label",
    "td",
    "width",
    "ter",
    "statElem",
    "sval",
    "constructor",
    "getRandomizer",
    "seedrandom",
    "bbs",
    "pullBits",
    "loadBinaryActionsV3",
    "GARBAGE_ADD",
    "REDBAR_SET",
    "ARR_MOVE",
    "aux",
    "AFK",
    "MOVE_TO",
    "replaySEset",
    "se",
    "bs",
    "bp",
    "mClr",
    "onCreate",
    "processAction",
    "onRestart",
    "moveCurrentBlock",
    "onBlockMove",
    "cc",
    "hdId",
    "FINESSE",
    "updatePos",
    "GameOver",
    "onGameOver",
    "garbage_add_adv",
    "MOVE_LEFT",
    "MOVE_RIGHT",
    "DAS_LEFT",
    "DAS_RIGHT",
    "ROTATE_LEFT",
    "ROTATE_RIGHT",
    "ROTATE_180",
    "time",
    "SOFT_DROP_BEGIN_END",
    "steps",
    "GRAVITY_STEP",
    "HOLD_BLOCK",
    "SGARBAGE_ADD",
    "applyGravitySteps",
    "playLive",
    "[",
    "] SKIP_AHEAD: ",
    " actions, ",
    " ms",
    "frameFinish",
    "] WAITING: ",
    " ms (",
    "playByTimeouts",
    "onScoreChanged",
    "analyze",
    "analyzeHardDrops",
    "analyzeScoring",
    "initScoreFilter",
    "findSegments",
    "deltat",
    "processSegments",
    "drawSpeedChart",
    "speedChart",
    "height",
    "clearRect",
    "beginPath",
    "moveTo",
    "lineTo",
    "stroke",
    "segments",
    "ceil",
    "#1c1c1c",
    "font",
    "10px Verdana",
    "fillText",
    "xStep",
    "showFinesse",
    "red",
    "fill",
    "getRelativeAttackOutput",
    "lineWidth",
    "#B12888",
    "#F95025",
    "#B9E446",
    "#001B73",
    "#3639E5",
    "segFast",
    "segSlow",
    "<thead><tr><th width=\"100\">",
    "segment",
    "</th><th width=\"100\">",
    "duration",
    "</th><th width=\"70\">PPS</th></tr></thead>",
    "segrow",
    "tr",
    "mouseenter",
    "highlightSegment",
    "getTR",
    "TD",
    "nodeName",
    "target",
    "globalAlpha",
    "fillRect",
    "getEvtPos",
    "getBoundingClientRect",
    "X",
    "clientX",
    "left",
    "Y",
    "clientY",
    "top",
    "#FFFFFF",
    "setLineDash",
    "scoreFilter1",
    "<input type=\"checkbox\" name=\"chbx",
    "\" id=\"chbx",
    "\" checked=\"\"><label for=\"chbx",
    "\">",
    "</label><br>",
    "scoreFilter2",
    "applyFilter",
    "chbx",
    "fetchScoreStamps",
    "setShownStats",
    "shownStats",
    "getItem",
    "shown",
    "CLOCK",
    "roundTime",
    "addStat",
    "received",
    "#",
    "Wasted",
    "Hold",
    "0.00",
    "addShownStats",
    "statTable",
    "log2",
    "find"
];

use strict;

function sprintTimeFormat(_0x976ex2, _0x976ex3) {
    if (_0x976ex2 < 60 && _0x976ex3 > 0) {
        return _0x976ex2[toFixed](_0x976ex3)
    };

    var _0x976ex4 = Math[floor](_0x976ex2 / 60),
    _0x976ex5 = (_0x976ex2 -= 60 * _0x976ex4)[toFixed](_0x976ex3 < 0 ? 0 : _0x976ex3);

    return _0x976ex4 + :  + (parseInt(_0x976ex5) < 10 ? 0 : ) + _0x976ex5
}
function getParameterByName(_0x976ex2) {
    _0x976ex2 = _0x976ex2[replace](/[\[]/,  \ [)[replace](/[\]]/,  \ ]);

                var _0x976ex3 = new RegExp([ \  ?  & ] + _0x976ex2 +  = ([ ^  &  # ] * ))[exec](location[search]);

                return null === _0x976ex3 ?  : decodeURIComponent(_0x976ex3[1][replace](/\+/g, ))
    }
    function getKeyByValue(_0x976ex2, _0x976ex3) {
        for (var _0x976ex4 in _0x976ex2) {
            if (_0x976ex2[hasOwnProperty](_0x976ex4) && _0x976ex2[_0x976ex4] === _0x976ex3) {
                return _0x976ex4
            }
        }
    }
    function _simpleArrayBufferToBase64(_0x976ex2) {
        for (var _0x976ex3 = , _0x976ex4 = new Uint8Array(_0x976ex2), _0x976ex5 = _0x976ex4[byteLength], _0x976ex9 = 0;
 _0x976ex9 < _0x976ex5;
 _0x976ex9++) {
            _0x976ex3 += String[fromCharCode](_0x976ex4[_0x976ex9])
        };

        return window[btoa](_0x976ex3)
    }
    function base64ToBinary(_0x976ex2) {
        for (var _0x976ex3 = window[atob](_0x976ex2), _0x976ex4 = _0x976ex3[length], _0x976ex5 = new Uint8Array(new ArrayBuffer(_0x976ex4)), _0x976ex9 = 0;
 _0x976ex9 < _0x976ex4;
 _0x976ex9++) {
            _0x976ex5[_0x976ex9] = _0x976ex3[charCodeAt](_0x976ex9)
        };

        return _0x976ex5
    }
    function objSize(_0x976ex2) {
        var _0x976ex3,
        _0x976ex4 = 0;

        for (_0x976ex3 in _0x976ex2) {
            _0x976ex2[hasOwnProperty](_0x976ex3) && _0x976ex4++
        };

        return _0x976ex4
    }
    function objCopy(_0x976ex2) {
        if (null == _0x976ex2 || object != typeof _0x976ex2) {
            return _0x976ex2
        };

        var _0x976ex3 = {};

        for (var _0x976ex4 in _0x976ex2) {
            _0x976ex2[hasOwnProperty](_0x976ex4) && (_0x976ex3[_0x976ex4] = _0x976ex2[_0x976ex4])
        };

        return _0x976ex3
    }
    function arrayContains(_0x976ex2, _0x976ex3) {
        for (var _0x976ex4 = _0x976ex2[length];
 _0x976ex4--;
 ) {
            if (_0x976ex2[_0x976ex4] === _0x976ex3) {
                return true
            }
        };

        return false
    }
    function hexToRgb(_0x976ex2, _0x976ex3) {
        var _0x976ex4 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i[exec](_0x976ex2);

        return _0x976ex3 || (_0x976ex3 = 1),
        _0x976ex4 ? [parseInt(_0x976ex4[1], 16) / _0x976ex3, parseInt(_0x976ex4[2], 16) / _0x976ex3, parseInt(_0x976ex4[3], 16) / _0x976ex3] : null
    }
    function arrayUnique(_0x976ex2) {
        return _0x976ex2[filter]((function (_0x976ex2, _0x976ex3, _0x976ex4) {
                return _0x976ex4[indexOf](_0x976ex2) === _0x976ex3
            }))
    }
    function copyMatrix(_0x976ex2) {
        for (var _0x976ex3 = new Array(_0x976ex2[length]), _0x976ex4 = 0;
 _0x976ex4 < _0x976ex2[length];
 _0x976ex4++) {
            _0x976ex3[_0x976ex4] = _0x976ex2[_0x976ex4][slice]()
        };

        return _0x976ex3
    }
    function stringEscape(_0x976ex2) {
        var _0x976ex3 = {
            "\x26" :  "&amp;"
 ,
            "\x3C":  "&lt;"
 ,
            "\x3E":  "&gt;"

        };

        return _0x976ex2[replace](/[&<>]/g, (function (_0x976ex2) {
                return _0x976ex3[_0x976ex2] || _0x976ex2
            }))
    }
    function trans(_0x976ex2, _0x976ex3) {
        return _0x976ex2[replace](/{(\w+)}/g, (function (_0x976ex2, _0x976ex4) {
                return _0x976ex3[_0x976ex4] ||  ?
            }))
    }
    function getSVG(_0x976ex2, _0x976ex3, _0x976ex4) {
        return  < svg class = "+ _0x976ex4+ " >  < use xlink : href = "+ (/svg/+ _0x976ex3+ .svg#+ _0x976ex2)+ " >  <  / use >  <  / svg >
    }
    function showElem(_0x976ex2) {
        _0x976ex2 && (_0x976ex2[style][display] = block)
    }
    function hideElem(_0x976ex2) {
        _0x976ex2 && (_0x976ex2[style][display] = none)
    }
    function htmlEntities(_0x976ex2) {
        return String(_0x976ex2)[replace](/&/g,  "&amp;"
 )[replace](/</g,  "&lt;"
 )[replace](/>/g,  "&gt;"
 )[replace](/"/g,  "&quot;"
 )
    }
    function toggleElem(_0x976ex2) {
        return block === _0x976ex2[style][display] ? (hideElem(_0x976ex2), false) : (showElem(_0x976ex2), true)
    }
    function selectText(_0x976ex2) {
        window[getSelection]()[selectAllChildren](_0x976ex2)
    }
    function addOption(_0x976ex2, _0x976ex3) {
        var _0x976ex4 = document[createElement](option);

        _0x976ex4[value] = _0x976ex3[id],
        _0x976ex4[innerHTML] = stringEscape(_0x976ex3[title]),
        _0x976ex4[dataset][desc] = stringEscape(_0x976ex3[description]),
        _0x976ex2[appendChild](_0x976ex4)
    }
    function CDN_URL(_0x976ex2) {
        var _0x976ex3 = ;

        return undefined != typeof conf_global && (_0x976ex3 = conf_global[cdn]),
        _0x976ex3 ? (/!== _0x976ex2[0]&& (_0x976ex2= / + _0x976ex2),
        https : //+ _0x976ex3+ _0x976ex2):_0x976ex2}function includeScript(_0x976ex2,_0x976ex3){var _0x976ex4=document[head],_0x976ex5=document[createElement](script);
_0x976ex5[type]= text/javascript,_0x976ex5[src]= _0x976ex2,_0x976ex5[onload]= _0x976ex5[onreadystatechange]= _0x976ex3,_0x976ex4[appendChild](_0x976ex5)}Object[values]|| (Object[values]= (_0x976ex2)=>{return Object[keys](_0x976ex2)[map](((_0x976ex3)=>{return _0x976ex2[_0x976ex3]}))});
var finesse=[[[1,2,1,0,1,2,1],[2,2,2,2,1,1,2,2,2,2],[1,2,1,0,1,2,1],[2,2,2,2,1,1,2,2,2,2]],[[1,2,2,1,0,1,2,2,1],[1,2,2,1,0,1,2,2,1],[1,2,2,1,0,1,2,2,1],[1,2,2,1,0,1,2,2,1]],[[1,2,1,0,1,2,2,1],[2,2,3,2,1,2,3,3,2],[3,4,3,2,3,4,4,3],[2,3,2,1,2,3,3,2,2]],[[1,2,1,0,1,2,2,1],[2,2,3,2,1,2,3,3,2],[3,4,3,2,3,4,4,3],[2,3,2,1,2,3,3,2,2]],[[1,2,1,0,1,2,2,1],[2,2,3,2,1,2,3,3,2],[3,4,3,2,3,4,4,3],[2,3,2,1,2,3,3,2,2]],[[1,2,1,0,1,2,2,1],[2,2,2,1,1,2,3,2,2],[1,2,1,0,1,2,2,1],[2,2,2,1,1,2,3,2,2]],[[1,2,1,0,1,2,2,1],[2,2,2,1,1,2,3,2,2],[1,2,1,0,1,2,2,1],[2,2,2,1,1,2,3,2,2]]];
function Block(_0x976ex2){this[id]= _0x976ex2,this[set]= 0,this[pos]= {x:3,y:0},this[rot]= 0,this[item]= 0}function BlockSet(){this[blocks]= {},this[step]= 1,this[scale]= 1,this[items]=  false,this[previewAs]= null,this[equidist]=  true,this[allspin]= null}var _blockSets=null;
function getBlockSets(){if(null!== _blockSets){return _blockSets};
var _0x976ex2= new BlockSet;
_0x976ex2[items]=  true;
var _0x976ex3=[{"\x2D\x31":[[0,0],[1,0],[1,1],[0,-2],[1,-2]],1:[[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],2:[[0,0],[0,1]]},{"\x2D\x31":[[0,0],[1,0],[1,-1],[0,2],[1,2]],1:[[0,0],[1,0],[1,-1],[0,2],[1,2]],2:[[0,0],[1,0]]},{"\x2D\x31":[[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],1:[[0,0],[1,0],[1,1],[0,-2],[1,-2]],2:[[0,0],[0,-1]]},{"\x2D\x31":[[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],1:[[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],2:[[0,0],[-1,0]]}],_0x976ex4=[{"\x2D\x31":[[0,0],[-1,0],[2,0],[-1,2],[2,-1]],1:[[0,0],[-2,0],[1,0],[-2,-1],[1,2]],2:[[0,0],[0,1]]},{"\x2D\x31":[[0,0],[2,0],[-1,0],[2,1],[-1,-2]],1:[[0,0],[-1,0],[2,0],[-1,2],[2,-1]],2:[[0,0],[1,0]]},{"\x2D\x31":[[0,0],[1,0],[-2,0],[1,-2],[-2,1]],1:[[0,0],[2,0],[-1,0],[2,1],[-1,-2]],2:[[0,0],[0,-1]]},{"\x2D\x31":[[0,0],[-2,0],[1,0],[-2,-1],[1,2]],1:[[0,0],[1,0],[-2,0],[1,-2],[-2,1]],2:[[0,0],[-1,0]]}],_0x976ex5=[{"\x2D\x31":[[0,0]],1:[[0,0]],2:[[0,0]]},{"\x2D\x31":[[0,0]],1:[[0,0]],2:[[0,0]]},{"\x2D\x31":[[0,0]],1:[[0,0]],2:[[0,0]]},{"\x2D\x31":[[0,0]],1:[[0,0]],2:[[0,0]]}];
_0x976ex2[blocks]= [{id:0,name:I,color:5,blocks:[[[0,0,0,0],[1,2,3,4],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,2,0],[0,0,3,0],[0,0,4,0]],[[0,0,0,0],[0,0,0,0],[4,3,2,1],[0,0,0,0]],[[0,4,0,0],[0,3,0,0],[0,2,0,0],[0,1,0,0]]],cc:[0,2,0,1],yp:[1,1],spawn:[3,-1],kicks:_0x976ex4,h:[1,4,1,4],center:[[1,1],[2,1],[2,2],[1,2]]},{id:1,name:O,color:3,blocks:[[[0,0,0,0],[0,1,2,0],[0,3,4,0],[0,0,0,0]],[[0,0,0,0],[0,3,1,0],[0,4,2,0],[0,0,0,0]],[[0,0,0,0],[0,4,3,0],[0,2,1,0],[0,0,0,0]],[[0,0,0,0],[0,2,4,0],[0,1,3,0],[0,0,0,0]]],cc:[1,1,1,1],yp:[1,2],spawn:[3,-2],kicks:_0x976ex5,h:[2,2,2,2],center:[[1,2],[1,1],[2,1],[2,2]]},{id:2,name:T,color:7,blocks:[[[0,0,0,0],[0,1,0,0],[2,3,4,0],[0,0,0,0]],[[0,0,0,0],[0,2,0,0],[0,3,1,0],[0,4,0,0]],[[0,0,0,0],[0,0,0,0],[4,3,2,0],[0,1,0,0]],[[0,0,0,0],[0,4,0,0],[1,3,0,0],[0,2,0,0]]],cc:[0,1,0,0],yp:[1,2],spawn:[3,-2],kicks:_0x976ex3,h:[2,3,2,3],center:[[1,2],[1,2],[1,2],[1,2]]},{id:3,name:L,color:2,blocks:[[[0,0,0,0],[0,0,1,0],[2,3,4,0],[0,0,0,0]],[[0,0,0,0],[0,2,0,0],[0,3,0,0],[0,4,1,0]],[[0,0,0,0],[0,0,0,0],[4,3,2,0],[1,0,0,0]],[[0,0,0,0],[1,4,0,0],[0,3,0,0],[0,2,0,0]]],cc:[0,1,0,0],yp:[1,2],spawn:[3,-2],kicks:_0x976ex3,h:[2,3,2,3],center:[[1,2],[1,2],[1,2],[1,2]]},{id:4,name:J,color:6,blocks:[[[0,0,0,0],[1,0,0,0],[2,3,4,0],[0,0,0,0]],[[0,0,0,0],[0,2,1,0],[0,3,0,0],[0,4,0,0]],[[0,0,0,0],[0,0,0,0],[4,3,2,0],[0,0,1,0]],[[0,0,0,0],[0,4,0,0],[0,3,0,0],[1,2,0,0]]],cc:[0,1,0,0],yp:[1,2],spawn:[3,-2],kicks:_0x976ex3,h:[2,3,2,3],center:[[1,2],[1,2],[1,2],[1,2]]},{id:5,name:S,color:4,blocks:[[[0,0,0,0],[0,1,2,0],[3,4,0,0],[0,0,0,0]],[[0,0,0,0],[0,3,0,0],[0,4,1,0],[0,0,2,0]],[[0,0,0,0],[0,0,0,0],[0,4,3,0],[2,1,0,0]],[[0,0,0,0],[2,0,0,0],[1,4,0,0],[0,3,0,0]]],cc:[0,1,0,0],yp:[1,2],spawn:[3,-2],kicks:_0x976ex3,h:[2,3,2,3],center:[[1,2],[1,2],[1,2],[1,2]]},{id:6,name:Z,color:1,blocks:[[[0,0,0,0],[1,2,0,0],[0,3,4,0],[0,0,0,0]],[[0,0,0,0],[0,0,1,0],[0,3,2,0],[0,4,0,0]],[[0,0,0,0],[0,0,0,0],[4,3,0,0],[0,2,1,0]],[[0,0,0,0],[0,4,0,0],[2,3,0,0],[1,0,0,0]]],cc:[0,1,0,0],yp:[1,2],spawn:[3,-2],kicks:_0x976ex3,h:[2,3,2,3],center:[[1,2],[1,2],[1,2],[1,2]]}],_0x976ex2[allspin]= [[[[-1,1,4,1],[[1,0,2,0],[1,2,2,2]]],[[2,-1,2,4],[[1,1,1,2],[3,1,3,2]]],[[-1,2,4,2],[[1,1,2,1],[1,3,2,3]]],[[1,-1,1,4],[[0,1,0,2],[2,1,2,2]]]],null,null,[[[0,3,2,3],[0,1,1,1]],[[0,1,0,3],[2,1,2,2]],[[0,1,2,1],[1,3,2,3]],[[2,1,2,3],[0,2,0,3]]],[[[0,3,2,3],[1,1,2,1]],[[0,1,0,3],[2,2,2,3]],[[0,1,2,1],[0,3,1,3]],[[2,1,2,3],[0,1,0,2]]],[[[3,1,-1,2],[0,1,2,2]],[[1,0,2,4],[2,1,1,3]],[[3,2,-1,3],[0,2,2,3]],[[0,0,1,4],[1,1,0,3]]],[[[-1,1,3,2],[0,2,2,1]],[[2,0,1,4],[1,1,2,3]],[[-1,2,3,3],[2,2,0,3]],[[-1,2,0,4],[0,1,1,3]]]],_0x976ex2[previewAs]= _0x976ex2;
var _0x976ex9= new BlockSet,_0x976ex21=[{"\x2D\x31":[[0,0],[1,0],[-1,0]],1:[[0,0],[1,0],[-1,0]],2:[[0,0],[1,0],[-1,0]]},{"\x2D\x31":[[0,0],[1,0],[-1,0]],1:[[0,0],[1,0],[-1,0]],2:[[0,0],[1,0],[-1,0]]},{"\x2D\x31":[[0,0],[1,0],[-1,0]],1:[[0,0],[1,0],[-1,0]],2:[[0,0],[1,0],[-1,0]]},{"\x2D\x31":[[0,0],[1,0],[-1,0]],1:[[0,0],[1,0],[-1,0]],2:[[0,0],[1,0],[-1,0]]}];
_0x976ex9[blocks]= [{id:200,name:I,color:1,blocks:[[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]],cc:[0,2,0,1],spawn:[3,-1],kicks:_0x976ex5},{id:201,name:O,color:3,blocks:[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]],cc:[1,1,1,1],spawn:[3,-2],kicks:_0x976ex21},{id:202,name:T,color:5,blocks:[[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[0,1,0,0],[1,1,1,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]],cc:[0,1,0,0],spawn:[3,-2],kicks:_0x976ex21},{id:203,name:L,color:2,blocks:[[[0,0,0,0],[1,1,1,0],[1,0,0,0],[0,0,0,0]],[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[0,0,1,0],[1,1,1,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]]],cc:[0,1,0,0],spawn:[3,-2],kicks:_0x976ex21},{id:204,name:J,color:6,blocks:[[[0,0,0,0],[1,1,1,0],[0,0,1,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,0,0,0],[1,1,1,0],[0,0,0,0]],[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]]],cc:[0,1,0,0],spawn:[3,-2],kicks:_0x976ex21},{id:205,name:S,color:7,blocks:[[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]]],cc:[0,1,0,0],spawn:[3,-2],kicks:_0x976ex21},{id:206,name:Z,color:4,blocks:[[[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]],cc:[0,1,0,0],spawn:[3,-2],kicks:_0x976ex21}],_0x976ex9[previewAs]= _0x976ex9;
var _0x976ex22= new BlockSet;
_0x976ex22[previewAs]= _0x976ex22,_0x976ex22[equidist]=  false,_0x976ex22[blocks]= [{id:21,name:I5,yp:[2,2],xp:0,rp:[2,2],blocks:[[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]]],spawn:[3,-2],kicks:_0x976ex4,cc:[0,0,0,0],color:5},{id:22,name:V5,yp:[0,2],xp:0,rp:[1,1],blocks:[[[0,0,1,0,0],[0,0,1,0,0],[1,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,1,1,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:6},{id:23,name:T5,yp:[0,2],xp:[1,3],rp:[2,2],blocks:[[[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,1,1],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,1,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[1,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:7},{id:24,name:U5,yp:[0,1],xp:0,rp:[1,1],blocks:[[[1,0,1,0,0],[1,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,1,0,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[1,1,1,0,0],[1,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,1,0,0,0],[0,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-1],kicks:_0x976ex3,cc:[0,0,0,0],color:1},{id:25,name:W5,yp:[0,2],xp:0,rp:[1,1],blocks:[[[0,0,1,0,0],[0,1,1,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,0,0,0,0],[1,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,1,0,0],[1,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,1,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:2},{id:26,name:X5,yp:[0,2],xp:0,rp:[1,1],blocks:[[[0,1,0,0,0],[1,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[1,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[1,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[1,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:3},{id:27,name:J5,yp:[1,2],xp:[1,4],rp:[2,2],blocks:[[[0,0,0,0,0],[0,1,0,0,0],[0,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,0],[0,0,0,1,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:4},{id:28,name:L5,yp:[1,2],xp:0,rp:[2,2],blocks:[[[0,0,0,0,0],[0,0,0,1,0],[1,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,1],[0,1,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:5},{id:29,name:S5,yp:[1,2],xp:0,rp:[2,2],blocks:[[[0,0,0,0,0],[0,0,1,1,0],[1,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,0,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,1],[0,1,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:6},{id:30,name:Z5,yp:[1,2],xp:[1,4],rp:[2,2],blocks:[[[0,0,0,0,0],[0,1,1,0,0],[0,0,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,1,0],[0,0,1,1,0],[0,0,1,0,0],[0,0,1,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,0,0],[0,0,1,1,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:7},{id:31,name:TL,yp:[1,2],xp:0,rp:[2,2],blocks:[[[0,0,0,0,0],[0,0,1,0,0],[1,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,1],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:1},{id:32,name:TJ,yp:[1,2],xp:[1,4],rp:[2,2],blocks:[[[0,0,0,0,0],[0,0,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,1,0,0],[0,0,1,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:2},{id:33,name:OZ,yp:[0,1],xp:0,rp:[1,1],blocks:[[[1,1,0,0,0],[1,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,1,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[1,1,1,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[1,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-1],kicks:_0x976ex3,cc:[0,0,0,0],color:3},{id:34,name:OS,yp:[0,1],xp:0,rp:[1,1],blocks:[[[0,1,1,0,0],[1,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[0,1,1,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[1,1,1,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,1,0,0,0],[1,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-1],kicks:_0x976ex3,cc:[0,0,0,0],color:4},{id:35,name:TS,yp:[0,2],xp:0,rp:[1,1],blocks:[[[1,0,0,0,0],[1,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,1,0,0],[1,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[1,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[0,1,1,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:5},{id:36,name:TZ,yp:[0,2],xp:0,rp:[1,1],blocks:[[[0,0,1,0,0],[1,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[1,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,0,0,0],[1,1,1,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,1,0,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:6},{id:37,name:LL,yp:[0,2],xp:0,rp:[1,1],blocks:[[[0,0,1,0,0],[1,1,1,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,1,0,0,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,1,0,0],[1,1,1,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,1,0,0,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:7},{id:38,name:JJ,yp:[0,2],xp:0,rp:[1,1],blocks:[[[1,0,0,0,0],[1,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,1,0,0],[0,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,0,0,0,0],[1,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,1,0,0],[0,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]],spawn:[3,-2],kicks:_0x976ex3,cc:[0,0,0,0],color:1}];
var _0x976ex23= new BlockSet;
_0x976ex23[items]=  true,_0x976ex23[previewAs]= _0x976ex23,_0x976ex23[equidist]=  false,_0x976ex23[blocks]= [{id:40,name:I1,yp:[0,0],blocks:[[[1]],[[1]],[[1]],[[1]]],spawn:[4,0],kicks:_0x976ex3,cc:[0,0,0,0],color:1},{id:41,name:I2,yp:[0,0],blocks:[[[1,2],[0,0]],[[0,1],[0,2]],[[0,0],[2,1]],[[2,0],[1,0]]],spawn:[4,0],kicks:_0x976ex3,cc:[0,0,0,0],color:2},{id:42,name:I3,yp:[1,1],blocks:[[[0,0,0],[1,2,3],[0,0,0]],[[0,1,0],[0,2,0],[0,3,0]],[[0,0,0],[3,2,1],[0,0,0]],[[0,3,0],[0,2,0],[0,1,0]]],spawn:[3,-1],kicks:_0x976ex3,cc:[0,0,0,0],color:3},{id:43,name:L3,yp:[0,1],blocks:[[[1,0,0],[2,3,0],[0,0,0]],[[2,1,0],[3,0,0],[0,0,0]],[[3,2,0],[0,1,0],[0,0,0]],[[0,3,0],[1,2,0],[0,0,0]]],spawn:[4,-1],kicks:_0x976ex3,cc:[0,0,0,0],color:4}];
var _0x976ex24= new BlockSet;
_0x976ex24[previewAs]= _0x976ex24,_0x976ex24[equidist]=  false,_0x976ex24[blocks]= _0x976ex2[blocks][slice]()[concat](_0x976ex23[blocks][slice]())[concat](_0x976ex22[blocks][slice]());
var _0x976ex25= new BlockSet;
for(var _0x976ex26 in _0x976ex25[blocks]= [],_0x976ex25[previewAs]= _0x976ex25,_0x976ex2[blocks]){_0x976ex25[blocks][push](objCopy(_0x976ex2[blocks][_0x976ex26]))};
var _0x976ex27=[[0,0],[-1,0],[1,0],[0,-1],[-1,-1],[1,-1],[-2,0],[2,0]],_0x976ex28={"\x2D\x31":_0x976ex27,1:_0x976ex27,2:_0x976ex27},_0x976ex29=[_0x976ex28,_0x976ex28,_0x976ex28,_0x976ex28];
for(var _0x976ex26 in _0x976ex25[blocks]){_0x976ex25[blocks][_0x976ex26][kicks]= _0x976ex29};
var _0x976ex2a= new BlockSet;
_0x976ex2a[previewAs]= _0x976ex2a,_0x976ex2a[blocks]= [];
var _0x976ex2b=[[0,0],[-1,0],[1,0],[0,-1],[-1,-1],[1,-1],[-2,0],[2,0],[0,-2],[-1,-2],[1,-2],[0,1],[-2,-2],[2,-2],[-3,-3],[3,-3]],_0x976ex2c={"\x2D\x31":_0x976ex2b,1:_0x976ex2b,2:_0x976ex2b},_0x976ex2d=[_0x976ex2c,_0x976ex2c,_0x976ex2c,_0x976ex2c],_0x976ex2e=[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[1,0,0,0],[0,0,0,0]],[[0,0,0,0],[1,0,0,0],[1,1,0,0],[1,0,0,0]],[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]];
for(var _0x976ex26 in _0x976ex2[blocks]){_0x976ex2a[blocks][push](objCopy(_0x976ex2[blocks][_0x976ex26])),_0x976ex2a[blocks][_0x976ex26][kicks]= _0x976ex2d,O=== _0x976ex2a[blocks][_0x976ex26][name]&& (_0x976ex2a[blocks][_0x976ex26][name]= O+,_0x976ex2a[blocks][_0x976ex26][id]= 50,_0x976ex2a[blocks][_0x976ex26][blocks]= _0x976ex2e)};
var _0x976ex2f= new BlockSet;
_0x976ex2f[previewAs]= _0x976ex2f,_0x976ex2f[equidist]=  false,_0x976ex2f[blocks]= [{id:400,name:I1,yp:[0,0],blocks:[[[0]],[[0]],[[0]],[[0]]],spawn:[4,-1],kicks:_0x976ex3,cc:[0,0,0,0],color:9}];
var _0x976ex30= new BlockSet;
function _0x976ex31(_0x976ex2,_0x976ex3,_0x976ex4,_0x976ex5){_0x976ex3>= _0x976ex2[length]&& (_0x976ex2[_0x976ex3]= []),_0x976ex2[_0x976ex3][_0x976ex4]= _0x976ex5}function _0x976ex32(_0x976ex2,_0x976ex3){for(var _0x976ex4=0;
_0x976ex4< _0x976ex2[length];
_0x976ex4++){_0x976ex2[_0x976ex4][0]*= _0x976ex3,_0x976ex2[_0x976ex4][1]*= _0x976ex3}}function _0x976ex33(_0x976ex3){var _0x976ex4= new BlockSet;
_0x976ex4[blocks]= JSON.parse(JSON.stringify(_0x976ex2[blocks]));
for(var _0x976ex5=_0x976ex2[blocks],_0x976ex9=0;
_0x976ex9< _0x976ex5[length];
_0x976ex9++){for(var _0x976ex21=0;
_0x976ex21< 4;
_0x976ex21++){for(var _0x976ex22=_0x976ex5[_0x976ex9][blocks][_0x976ex21],_0x976ex23=0;
_0x976ex23< 4;
_0x976ex23++){for(var _0x976ex24=0;
_0x976ex24< 4;
_0x976ex24++){var _0x976ex25=_0x976ex22[_0x976ex23][_0x976ex24];
_0x976ex31(_0x976ex4[blocks][_0x976ex9][blocks][_0x976ex21],_0x976ex23* _0x976ex3,_0x976ex24* _0x976ex3,_0x976ex25),_0x976ex31(_0x976ex4[blocks][_0x976ex9][blocks][_0x976ex21],_0x976ex23* _0x976ex3+ 1,_0x976ex24* _0x976ex3,_0x976ex25),_0x976ex31(_0x976ex4[blocks][_0x976ex9][blocks][_0x976ex21],_0x976ex23* _0x976ex3,_0x976ex24* _0x976ex3+ 1,_0x976ex25),_0x976ex31(_0x976ex4[blocks][_0x976ex9][blocks][_0x976ex21],_0x976ex23* _0x976ex3+ 1,_0x976ex24* _0x976ex3+ 1,_0x976ex25)}}};
for(var _0x976ex26 in _0x976ex4[blocks][_0x976ex9][kicks]){_0x976ex32(_0x976ex4[blocks][_0x976ex9][kicks][_0x976ex26][-1],_0x976ex3),_0x976ex32(_0x976ex4[blocks][_0x976ex9][kicks][_0x976ex26][1],_0x976ex3),_0x976ex32(_0x976ex4[blocks][_0x976ex9][kicks][_0x976ex26][2],_0x976ex3)};
_0x976ex4[blocks][_0x976ex9][spawn][0]= 2=== _0x976ex3?2:1,_0x976ex4[blocks][_0x976ex9][id]+= 100};
return _0x976ex4[scale]= 2,_0x976ex4[step]= 2,_0x976ex4[previewAs]= _0x976ex2,_0x976ex4}_0x976ex30[items]=  true,_0x976ex30[previewAs]= _0x976ex2f,_0x976ex30[equidist]=  false,_0x976ex30[ghost]=  false,_0x976ex30[blocks]= [{id:401,name:INV,yp:[0,0],blocks:[[[1]],[[1]],[[1]],[[1]]],spawn:[4,-1],kicks:_0x976ex3,cc:[0,0,0,0],color:9}];
var _0x976ex34=_0x976ex33(2),_0x976ex35=_0x976ex33(2);
return _0x976ex35[step]= 1,_blockSets= [_0x976ex2,_0x976ex34,_0x976ex35,_0x976ex9,_0x976ex22,_0x976ex23,_0x976ex24,_0x976ex25,_0x976ex2a,_0x976ex30]}function Scoring(){this[A]= Object[freeze]({SOFT_DROP:0,HARD_DROP:1,CLEAR1:2,CLEAR2:3,CLEAR3:4,CLEAR4:5,TSPIN_MINI:6,TSPIN:7,TSPIN_MINI_SINGLE:8,TSPIN_SINGLE:9,TSPIN_DOUBLE:10,TSPIN_TRIPLE:11,PERFECT_CLEAR:12,COMBO:13,CLEAR5:14}),this[ATI]= [-1,-1,1,2,3,4,-1,-1,8,7,5,6,9,-1,6],this[S]= Array(15),this[S][this[A][SOFT_DROP]]= 1,this[S][this[A][HARD_DROP]]= 2,this[S][this[A][CLEAR1]]= 100,this[S][this[A][CLEAR2]]= 300,this[S][this[A][CLEAR3]]= 500,this[S][this[A][CLEAR4]]= 800,this[S][this[A][CLEAR5]]= 1600,this[S][this[A][TSPIN_MINI]]= 100,this[S][this[A][TSPIN]]= 400,this[S][this[A][TSPIN_MINI_SINGLE]]= 200,this[S][this[A][TSPIN_SINGLE]]= 800,this[S][this[A][TSPIN_DOUBLE]]= 1200,this[S][this[A][TSPIN_TRIPLE]]= 1600,this[S][this[A][PERFECT_CLEAR]]= 3e3,this[S][this[A][COMBO]]= 50,this[B2B]= Array(15),this[B2B][this[A][CLEAR4]]= 400,this[B2B][this[A][CLEAR5]]= 800,this[B2B][this[A][TSPIN_MINI_SINGLE]]= 100,this[B2B][this[A][TSPIN_SINGLE]]= 400,this[B2B][this[A][TSPIN_DOUBLE]]= 600,this[B2B][this[A][TSPIN_TRIPLE]]= 800}Scoring[prototype][get]= function(_0x976ex2,_0x976ex3){var _0x976ex4=this[S][_0x976ex2];
return void(0)!== _0x976ex3&& true=== _0x976ex3&& void(0)!== this[B2B][_0x976ex2]&& (_0x976ex4+= this[B2B][_0x976ex2]),_0x976ex4},Scoring[prototype][lineAtk]= function(_0x976ex2,_0x976ex3,_0x976ex4){if(_0x976ex2=== this[A][COMBO]){return _0x976ex4[getComboAttack](_0x976ex3)};
let _0x976ex5=this[ATI][_0x976ex2],_0x976ex9=0;
return _0x976ex5&& -1!= _0x976ex5&& (_0x976ex9= _0x976ex4[linesAttack][_0x976ex5]),this[B2B][_0x976ex2]&& _0x976ex4[wasBack2Back]&& (_0x976ex9+= _0x976ex4[linesAttack][10]),_0x976ex9},window[Score]=  new Scoring;
var Action=Object[freeze]({MOVE_LEFT:0,MOVE_RIGHT:1,DAS_LEFT:2,DAS_RIGHT:3,ROTATE_LEFT:4,ROTATE_RIGHT:5,ROTATE_180:6,HARD_DROP:7,SOFT_DROP_BEGIN_END:8,GRAVITY_STEP:9,HOLD_BLOCK:10,GARBAGE_ADD:11,SGARBAGE_ADD:12,REDBAR_SET:13,ARR_MOVE:14,AUX:15}),Aux=Object[freeze]({AFK:0,BLOCK_SET:1,MOVE_TO:2,RANDOMIZER:3,MATRIX_MOD:4,WIDE_GARBAGE_ADD:5});
function GameCore(_0x976ex2){//TODO GameCore Constructor
    this[ISGAME]= _0x976ex2,
    this[randomizer]= null,
    this[matrix]= [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],
    this[deadline]= [0,0,0,0,0,0,0,0,0,0],
    this[blockSets]= getBlockSets(),
    this[softDropSpeeds]= [{id:0,time:0.05,steps:0},{id:1,time:0.008,steps:0},{id:2,time:0,steps:1},{id:3,time:0,steps:2},{id:4,time:0,steps:20}],
    this[blockIds]= {Z:6,L:3,O:1,S:5,I:0,J:4,T:2},
    this[queue]= [ new Block(0), new Block(0), new Block(0), new Block(0), new Block(0)],
    this[queueLength]= this[queue][length],
    this[gamedata]= {lines:0,singles:0,doubles:0,triples:0,tetrises:0,maxCombo:0,linesSent:0,linesReceived:0,PCs:0,lastPC:0,TSD:0,TSD20:0,B2B:0,attack:0,score:0,holds:0,garbageCleared:0,wasted:0,tpieces:0,tspins:0},
    this[skins]= [{id:0,name:None,data:},{id:1,name:Default,data:/res/b1.png,w:32},{id:2,name:Pixel,data:/res/b2.png?v2,w:32},{id:3,name:Glass,data:/res/b3.png?v2,w:32},{id:4,name:Gradient,data:/res/b4.png?v2,w:32},{id:5,name:Nullpomino4,data:/res/b5.png,w:32},{id:6,name:Invisible,data:},{id:7,name:Mono,data:},{id:8,name:Eyebites,data:/res/b8.png,w:32},{id:9,name:Retro,data:/res/b9.png,w:32},{id:10,name:Color Cubes,data:/res/b10.png,w:32},{id:11,name:Simple,data:/res/b11.png,w:32},{id:12,name:Color Blocks,data:/res/b12.png,w:32},{id:13,name:Critter,data:/res/b13.png,w:32}],
    this[customSkinPath]= null,
    this[temporaryBlockSet]= null,
    this[blockInHold]= null,
    this[spinPossible]=  false,
    this[spinMiniPossible]=  false,
    this[tspinMiniPossible]=  false,
    this[isBack2Back]=  false,
    this[wasBack2Back]=  false,
    this[isInvisibleSkin]=  false,
    this[monochromeSkin]=  false,
    this[cids]= [0,1,2,3,4,5,6,7,8,9,10,11],
    this[coffset]= [0,2,3,4,5,6,7,8,1,0],
    this[colors]= [black,#D70F37,#E35B02,#E39F02,#59B101,#0F9BD7,#2141C6,#AF298A,#999999,#6A6A6A,black,white],
    this[colorsV3]= [[0,0,0],[215,15,55],[227,91,2],[227,159,2],[89,177,1],[15,155,215],[33,65,198],[175,41,138],[153,153,153],[106,106,106],[0,0,0],[255,255,255]];
    for(var _0x976ex3=0; _0x976ex3 < this[colorsV3][length]; ++_0x976ex3) {
        for(var _0x976ex4=0; _0x976ex4 < 3; ++_0x976ex4){
            this[colorsV3][_0x976ex3][_0x976ex4]/= 255;
        }
    }
    this[NullCol]= [black,#E4203E,#E47E30,#E3CF3C,#1DE03D,#00C9DF,#0042DC,#9E2CDC,#999999,#585858,black,white],this[multipleNames]= [Single,Double,Triple,Quadruple,Multiple],this[excludedBlocksAS]= [],this[Items]=  new Items(this),this[R]= this[DEF]= {clearDelay:0,rnd:0,showPreviews:5,holdEnabled:true,baseBlockSet:0,gravityLvl:1,lockDelay:[500,5e3,2e4],mess:0,gapW:1,gInv:false,gDelay:500,gblock:0,tsdOnly:false,allSpin:0,speedLimit:0,scoreMult:1,clearLines:true,sfx:true,vsfx:true,solidAttack:false,ext:0,sgProfile:[0,3]},this[initRandomizer](this[R][rnd])}function Bag(_0x976ex2,_0x976ex3,_0x976ex4){this[RNG]= _0x976ex2,this[usebag]= [];
    for(let _0x976ex2=0; _0x976ex2< _0x976ex3; _0x976ex2++){
        for(let _0x976ex3=0; _0x976ex3< _0x976ex4; _0x976ex3++){
            this[usebag][push](_0x976ex2)
        }
    };
    this[bag]= this[usebag][slice](0)
}
function Classic(_0x976ex2,_0x976ex3){this[RNG]= _0x976ex2,this[n]= _0x976ex3}function OneBlock(_0x976ex2,_0x976ex3,_0x976ex4,_0x976ex5){if(this[RNG]= _0x976ex2,this[n]= _0x976ex3,this[bag]= [],_0x976ex5){let _0x976ex9= new Bag(_0x976ex2,_0x976ex3,_0x976ex5);
for(let _0x976ex2=0;
_0x976ex2< _0x976ex4;
++_0x976ex2){this[bag][push](_0x976ex9[getBlock]()[id])}}else {for(let _0x976ex2=0;
_0x976ex2< _0x976ex4;
_0x976ex2++){let _0x976ex2;
do{_0x976ex2= Math[floor](this.RNG()* this[n])}while(-1!== this[bag][indexOf](_0x976ex2));
;
this[bag][push](_0x976ex2)}};
this[lastIndex]= 0}function C2Sim(_0x976ex2,_0x976ex3){this[RNG]= _0x976ex2,this[n]= _0x976ex3,this[hist]= [-1,-2]}function Repeated(_0x976ex2,_0x976ex3){this[randomizer]= _0x976ex2,this[n]= _0x976ex3,this[block]= null,this[i]= 0,this[nextSegment]()}function BsBlock(_0x976ex2,_0x976ex3){this[randomizer]= _0x976ex2,this[bsArr]= _0x976ex3,this[i]= 0}function BigBlockRand(_0x976ex2,_0x976ex3){this[randomizer]= _0x976ex2,this[bsArr]= _0x976ex3,this[i]= 0,this[EXPECTED_BLOCKS]= 5e3}function ConstBlock(_0x976ex2,_0x976ex3){this[id]= _0x976ex2,this[set]= _0x976ex3}function BaseSFXset(){this[volume]= 0.5,this[comboTones]=  false,this[maxCombo]= null,this[getSoundUrl]= function(_0x976ex2){return this[getSoundUrlFromObj](this[_0x976ex2])},this[getSoundUrlFromObj]= function(_0x976ex2){return null=== _0x976ex2?null:_0x976ex2[abs]?_0x976ex2[url]:CDN_URL(/res/se+ _0x976ex2[set]+ /+ _0x976ex2[url])},this[getComboSFX]= function(_0x976ex2){return this[comboTones]?c+ Math[min](this[maxCombo],_0x976ex2):linefall},this[getScoreSFX]= function(_0x976ex2){return this[scoring]&& this[scoring][_0x976ex2]?s+ _0x976ex2:null},this[getClearSFX]= function(_0x976ex2,_0x976ex3,_0x976ex4,_0x976ex5){let _0x976ex9=[],_0x976ex21=;
return _0x976ex4&& (this[b2bScoring]?_0x976ex21= b:_0x976ex9[push](b2b)),_0x976ex5>= 0&& _0x976ex9[push](this[getComboSFX](_0x976ex5)),this[scoring]&& (_0x976ex9[push](_0x976ex21+ this[getScoreSFX](_0x976ex3)),_0x976ex2=== Score[A][PERFECT_CLEAR]&& _0x976ex9[push](_0x976ex21+ this[getScoreSFX](_0x976ex2))),_0x976ex9},this[hold]= {url:hold.wav,abs:0,set:0},this[linefall]= {url:linefall.wav,abs:0,set:0},this[lock]= {url:lock.wav,abs:0,set:0},this[move]= {url:move.wav,abs:0,set:0},this[died]= {url:topout.wav,abs:0,set:0},this[ready]= {url:ready.wav,abs:0,set:0},this[go]= {url:go.wav,abs:0,set:0},this[ding]= {url:ding.wav,abs:0,set:0},this[msg]= {url:msg2.mp3,abs:0,set:0},this[fault]= {url:fault.wav,abs:0,set:0},this[blank]= {url:null.wav,abs:0,set:0},this[item]= {url:item.mp3,abs:0,set:0},this[pickup]= {url:pickup.mp3,abs:0,set:0},this[rotate]= {url:rotate.ogg,abs:0,set:3},this[success]= {url:success.ogg,abs:0,set:0},this[harddrop]= null,this[golive]= null,this[land]= null,this[garbage]= null,this[b2b]= null,this[scoring]= null,this[b2bScoring]= null,this[author]= null,this[inherit]= null,this[spawns]= null}function NullSFXset(){this[hold]= null,this[linefall]= null,this[lock]= null,this[move]= null,this[died]= null,this[ready]= null,this[go]= null,this[ding]= null,this[msg]= null,this[fault]= null,this[item]= null,this[pickup]= null,this[harddrop]= null,this[golive]= null,this[land]= null,this[garbage]= null,this[b2b]= null,this[rotate]= null,this[scoring]= null,this[b2bScoring]= null,this[author]= null,this[inherit]= null,this[spawns]= null,this[success]= null}function YotipoSFXset(){this[volume]= 1,this[hold]= null,this[linefall]= {url:linefall.wav,abs:0,set:1},this[lock]= {url:lock.wav,abs:0,set:1},this[move]= null,this[died]= {url:topout.wav,abs:0,set:1},this[ready]= {url:ready.wav,abs:0,set:1},this[go]= {url:go.wav,abs:0,set:1}}function RainforestSFXset(){this[author]= Chris Butler, CC BY 3.0, remixed, freesound.org,this[volume]= 0.4,this[move]= null,this[hold]= null,this[lock]= {url:lock.mp3,abs:0,set:2},this[died]= {url:topout.mp3,abs:0,set:2},this[comboTones]= {url:comboTones.mp3,abs:0,set:2,duration:1e3,spacing:500,cnt:15}}function TetraSFXset(){this[author]= Dr Ocelot, CC BY 3.0,this[volume]= 0.35,this[comboTones]= [null];
for(var _0x976ex2=1;
_0x976ex2<= 20;
_0x976ex2++){this[comboTones][push]({url:ren/ren+ _0x976ex2+ .ogg,abs:0,set:3})};
this[hold]= {url:hold.ogg,abs:0,set:3},this[move]= {url:move.ogg,abs:0,set:3},this[ready]= {url:ready.ogg,abs:0,set:3},this[go]= {url:go.ogg,abs:0,set:3},this[golive]= {url:start.ogg,abs:0,set:3},this[lock]= {url:locknohd.ogg,abs:0,set:3},this[harddrop]= {url:harddrop.ogg,abs:0,set:3},this[land]= {url:step.ogg,abs:0,set:3},this[garbage]= {url:garbage.ogg,abs:0,set:3},this[b2b]= {url:b2b.ogg,abs:0,set:3},this[linefall]= null,this[died]= {url:topout.ogg,abs:0,set:3},this[fault]= {url:lockforce.ogg,abs:0,set:3},this[scoring]= Array(15),this[scoring][Score[A][CLEAR1]]= {url:erase1.ogg,abs:0,set:3},this[scoring][Score[A][CLEAR2]]= {url:erase2.ogg,abs:0,set:3},this[scoring][Score[A][CLEAR3]]= {url:erase3.ogg,abs:0,set:3},this[scoring][Score[A][CLEAR4]]= {url:erase4.ogg,abs:0,set:3},this[scoring][Score[A][TSPIN_MINI]]= {url:tspin0mini.ogg,abs:0,set:3},this[scoring][Score[A][TSPIN]]= {url:tspin0.ogg,abs:0,set:3},this[scoring][Score[A][TSPIN_MINI_SINGLE]]= {url:tspin1mini.ogg,abs:0,set:3},this[scoring][Score[A][TSPIN_SINGLE]]= {url:tspin1.ogg,abs:0,set:3},this[scoring][Score[A][TSPIN_DOUBLE]]= {url:tspin2.ogg,abs:0,set:3},this[scoring][Score[A][TSPIN_TRIPLE]]= {url:tspin3.ogg,abs:0,set:3},this[scoring][Score[A][PERFECT_CLEAR]]= {url:bravo.ogg,abs:0,set:3},this[scoring][Score[A][CLEAR5]]= {url:tspin3.ogg,abs:0,set:3}}function SpawnSFXset(){this[author]= Google Translate,this[volume]= 1,this[spawns]= {I:{url:bl/I.mp3,abs:0,set:4},O:{url:bl/O.mp3,abs:0,set:4},S:{url:bl/S.mp3,abs:0,set:4},Z:{url:bl/Z.mp3,abs:0,set:4},T:{url:bl/T.mp3,abs:0,set:4},L:{url:bl/L.mp3,abs:0,set:4},J:{url:bl/J.mp3,abs:0,set:4}}}function VoiceSFXset(){this[author]= Google Translate,this[volume]= 1,this[died]= {url:game_over.mp3,abs:0,set:4},this[b2bScoring]= Array(15),this[b2bScoring][Score[A][CLEAR4]]= {url:b2b/e4.mp3,abs:0,set:4,q:1},this[b2bScoring][Score[A][TSPIN_DOUBLE]]= {url:b2b/tspin2.mp3,abs:0,set:4,q:1},this[scoring]= Array(15),this[scoring][Score[A][CLEAR1]]= {url:e1.mp3,abs:0,set:4,q:1},this[scoring][Score[A][CLEAR2]]= {url:e2.mp3,abs:0,set:4,q:1},this[scoring][Score[A][CLEAR3]]= {url:e3.mp3,abs:0,set:4,q:1},this[scoring][Score[A][CLEAR4]]= {url:e4.mp3,abs:0,set:4,q:1},this[scoring][Score[A][TSPIN_MINI]]= {url:tspin0Mini.mp3,abs:0,set:4,q:1},this[scoring][Score[A][TSPIN]]= {url:tspin0.mp3,abs:0,set:4,q:1},this[scoring][Score[A][TSPIN_MINI_SINGLE]]= {url:tspin1Mini.mp3,abs:0,set:4,q:1},this[scoring][Score[A][TSPIN_SINGLE]]= {url:tspin1.mp3,abs:0,set:4,q:1},this[scoring][Score[A][TSPIN_DOUBLE]]= {url:tspin2.mp3,abs:0,set:4,q:1},this[scoring][Score[A][TSPIN_TRIPLE]]= {url:tspin3.mp3,abs:0,set:4,q:1},this[scoring][Score[A][PERFECT_CLEAR]]= {url:PC.mp3,abs:0,set:4,q:1}}function DalSpawnVSFXset(){this[author]= twitch.tv/daliciouss,this[volume]= 1,this[died]= {url:game_over.mp3,abs:0,set:5},this[spawns]= {I:{url:b/I.mp3,abs:0,set:5},O:{url:b/O.mp3,abs:0,set:5},S:{url:b/S.mp3,abs:0,set:5},Z:{url:b/Z.mp3,abs:0,set:5},T:{url:b/T.mp3,abs:0,set:5},L:{url:b/L.mp3,abs:0,set:5},J:{url:b/J.mp3,abs:0,set:5}}}function DalVSFXset(){this[author]= twitch.tv/daliciouss,this[volume]= 1,this[died]= {url:game_over.mp3,abs:0,set:5},this[b2bScoring]= null,this[b2b]= {url:b2b.mp3,abs:0,set:5,q:1},this[scoring]= Array(15),this[scoring][Score[A][CLEAR4]]= {url:e4.mp3,abs:0,set:5,q:1},this[scoring][Score[A][TSPIN_MINI]]= {url:tspin0mini.mp3,abs:0,set:5,q:1},this[scoring][Score[A][TSPIN]]= {url:tspin0.mp3,abs:0,set:5,q:1},this[scoring][Score[A][TSPIN_MINI_SINGLE]]= {url:tspin1mini.mp3,abs:0,set:5,q:1},this[scoring][Score[A][TSPIN_SINGLE]]= {url:tspin1.mp3,abs:0,set:5,q:1},this[scoring][Score[A][TSPIN_DOUBLE]]= {url:tspin2.mp3,abs:0,set:5,q:1},this[scoring][Score[A][TSPIN_TRIPLE]]= {url:tspin3.mp3,abs:0,set:5,q:1},this[scoring][Score[A][PERFECT_CLEAR]]= {url:PC.mp3,abs:0,set:5,q:1},this[success]= {url:well-done.ogg,abs:0,set:5,q:1}}GameCore[prototype][randomizerFactory]= function(_0x976ex2,_0x976ex3){let _0x976ex4=this[blockSets][this[R][baseBlockSet]][blocks][length],_0x976ex5=null,_0x976ex9=_0x976ex3|| this[blockRNG];
switch(_0x976ex2){case 0:;
default:_0x976ex5=  new Bag(_0x976ex9,_0x976ex4,1);
break;
case 1:_0x976ex5=  new Bag(_0x976ex9,_0x976ex4,2);
break;
case 2:_0x976ex5=  new Classic(_0x976ex9,_0x976ex4);
break;
case 3:_0x976ex5=  new OneBlock(_0x976ex9,_0x976ex4,1,null);
break;
case 4:_0x976ex5=  new OneBlock(_0x976ex9,_0x976ex4,2,null);
break;
case 5:_0x976ex5=  new OneBlock(_0x976ex9,_0x976ex4,_0x976ex4,1);
break;
case 6:_0x976ex5=  new OneBlock(_0x976ex9,_0x976ex4,2* _0x976ex4,2);
break;
case 7:_0x976ex5=  new C2Sim(_0x976ex9,_0x976ex4);
break;
case 8:_0x976ex5=  new Repeated( new Bag(_0x976ex9,_0x976ex4,1),7);
break;
case 9:_0x976ex5=  new BsBlock( new Bag(_0x976ex9,_0x976ex4,1),[2,4]);
break;
case 10:_0x976ex5=  new BigBlockRand( new Bag(_0x976ex9,_0x976ex4,1),2);
break;
case 11:_0x976ex5=  new ConstBlock(2,0);
break;
case 12:_0x976ex5=  new ConstBlock(0,5)};
return _0x976ex5},
GameCore[prototype][initRandomizer]= function(_0x976ex2){this[randomizer]= this[randomizerFactory](_0x976ex2),this[ISGAME]&& this[Replay]&& (0!== _0x976ex2?this[Replay][config][rnd]= _0x976ex2:rnd in  this[Replay][config]&&  delete this[Replay][config][rnd])},GameCore[prototype][getRandomizerBlock]= function(_0x976ex2){let _0x976ex3=(_0x976ex2= _0x976ex2|| this[randomizer])[getBlock]();
return 0=== _0x976ex3[set]?_0x976ex3[set]= this[R][baseBlockSet]:-1=== _0x976ex3[set] && (_0x976ex3[set]= 0),null!== this[temporaryBlockSet]&& (_0x976ex3[set]= this[temporaryBlockSet],this[temporaryBlockSet]= null),_0x976ex3},GameCore[prototype][generateLiveQueue]= function(){this[blockRNG]= alea(this[blockSeed]),this[RNG]= alea(this[blockSeed]),this[Replay][config][seed]= this[blockSeed],this[initRandomizer](this[conf][0][rnd]),this[generateQueue]()},
GameCore[prototype][getBlockFromQueue]= function() {
    if(0=== this[queue][length]){
        return this[ISGAME]&& 9=== this[pmode]&& 
        this[Caption][gameWarning](i18n[noBlocks],i18n[noBlocks2]),
        this.GameOver(),
        this[activeBlock]
    };
var _0x976ex2=this[queue][splice](0,1)[0];
return this[refillQueue](),this[updateQueueBox](),_0x976ex2},GameCore[prototype][checkIntersection]= function(_0x976ex2,_0x976ex3,_0x976ex4){_0x976ex4= null=== _0x976ex4?this[activeBlock][rot]:_0x976ex4;
let _0x976ex5=this[blockSets][this[activeBlock][set]],_0x976ex9=_0x976ex5[blocks][this[activeBlock][id]][blocks],_0x976ex21=_0x976ex5[blocks][this[activeBlock][id]][blocks][_0x976ex4][length];
for(var _0x976ex22=0;
_0x976ex22< _0x976ex21;
_0x976ex22++){for(var _0x976ex23=0;
_0x976ex23< _0x976ex21;
_0x976ex23++){if(_0x976ex9[_0x976ex4][_0x976ex22][_0x976ex23]> 0){if(_0x976ex3+ _0x976ex22>= 20){return true};
if(_0x976ex2+ _0x976ex23< 0|| _0x976ex2+ _0x976ex23>= 10){return true};
if(_0x976ex3+ _0x976ex22>= 0&& this[matrix][_0x976ex3+ _0x976ex22][_0x976ex2+ _0x976ex23]> 0){return true}}}};
return false},GameCore[prototype][setCurrentPieceToDefaultPos]= function(){let _0x976ex2=this[blockSets][this[activeBlock][set]][blocks][this[activeBlock][id]],_0x976ex3=_0x976ex2[blocks][0][length];
if(this[activeBlock][rot]= 0,this[activeBlock][pos][x]= _0x976ex2[spawn][0],this[activeBlock][pos][y]= _0x976ex2[spawn][1],0=== this[activeBlock][set]){var _0x976ex4=_0x976ex2[blocks][0][-this[activeBlock][pos][y]];
(this[matrix][0][3]&& _0x976ex4[0]|| this[matrix][0][4]&& _0x976ex4[1]|| this[matrix][0][5]&& _0x976ex4[2]|| this[matrix][0][6]&& _0x976ex4[3])&& this[activeBlock][pos][y]--}else {for(;
this[checkIntersection](this[activeBlock][pos][x],this[activeBlock][pos][y],null);
){this[activeBlock][pos][y]--}};
var _0x976ex5=-(1+ this[activeBlock][pos][y]);
if(_0x976ex5>= 0&& _0x976ex5< _0x976ex3){for(var _0x976ex9=0;
_0x976ex9< _0x976ex3;
++_0x976ex9){if(_0x976ex2[blocks][this[activeBlock][rot]][_0x976ex5][_0x976ex9]&& this[deadline][this[activeBlock][pos][x]+ _0x976ex9]){this.GameOver();
break}}}},GameCore[prototype][centerColumnCheck]= function(_0x976ex2,_0x976ex3){let _0x976ex4=this[activeBlock][id],_0x976ex5=false;
return !(_0x976ex3< 0)&& (3=== _0x976ex4|| 4=== _0x976ex4?0=== this[activeBlock][rot]?_0x976ex5= (this[matrix][_0x976ex3][_0x976ex2+ 1]> 0|| this[matrix][_0x976ex3+ 2][_0x976ex2+ 1]> 0)&&  !(this[matrix][_0x976ex3+ 2][_0x976ex2+ 1]> 0&& this[matrix][_0x976ex3][_0x976ex2+ (2* (4=== _0x976ex4)| 0)]> 0):3=== this[activeBlock][rot]&& (_0x976ex5= this[matrix][_0x976ex3][_0x976ex2+ 1]> 0|| this[matrix][_0x976ex3+ 1][_0x976ex2+ 1]> 0):2=== _0x976ex4&& (0!== this[activeBlock][rot]&& 2!== this[activeBlock][rot]|| (_0x976ex5= this[matrix][_0x976ex3+ 1][_0x976ex2]> 0)),_0x976ex5)},GameCore[prototype][rotateCurrentBlock]= function(_0x976ex2){2=== _0x976ex2?(this[finesse]+= 2,++this[used180]):++this[finesse];
let _0x976ex3=-1=== _0x976ex2?-1:1=== _0x976ex2?1:2,_0x976ex4=this[activeBlock][rot]+ _0x976ex2;
_0x976ex4= -1=== _0x976ex4?_0x976ex4= 3:_0x976ex4% 4;
let _0x976ex5=this[blockSets][this[activeBlock][set]][blocks][this[activeBlock][id]],_0x976ex9=_0x976ex5[kicks][this[activeBlock][rot]][_0x976ex3],_0x976ex21=_0x976ex9[length];
if(3!== this[activeBlock][set]||  !this[centerColumnCheck](this[activeBlock][pos][x],this[activeBlock][pos][y])){for(let _0x976ex3=0;
_0x976ex3< _0x976ex21;
_0x976ex3++){let _0x976ex21=_0x976ex9[_0x976ex3][0],_0x976ex22=_0x976ex9[_0x976ex3][1];
if(!this[checkIntersection](this[activeBlock][pos][x]+ _0x976ex21,this[activeBlock][pos][y]- _0x976ex22,_0x976ex4)){if(this[spinPossible]=  true,2=== _0x976ex5[id]){this[tspinType]= 10* _0x976ex4+ _0x976ex3}else {if(50=== _0x976ex5[id]){if(2=== _0x976ex2){return};
if(3=== _0x976ex4&& _0x976ex3< 14){return};
if((1=== _0x976ex4&& 0=== this[activeBlock][rot]|| 2=== _0x976ex4&& 1=== this[activeBlock][rot])&& 3!== _0x976ex3){return};
if((0=== _0x976ex4&& 1=== this[activeBlock][rot]|| 1=== _0x976ex4&& 2=== this[activeBlock][rot])&& 11!== _0x976ex3){return};
if(3=== this[activeBlock][rot]&& 0!== _0x976ex4){return}}};
this[activeBlock][rot]= _0x976ex4,this[activeBlock][pos][x]+= _0x976ex21,this[activeBlock][pos][y]-= _0x976ex22,_0x976ex22> 0&& (this[lockDelayActive]=  false,this[timer]= 0),this[ISGAME]&& this[playSound](rotate);
break}};
this[updateGhostPiece](true),this[redraw]()}},GameCore[prototype][addSolidGarbage]= function(){if(20=== this[solidHeight]){return};
let _0x976ex2=[9,9,9,9,9,9,9,9,9,9];
this[deadline]= this[matrix][0][slice](0);
for(var _0x976ex3=this[matrix][length],_0x976ex4=0;
_0x976ex4< _0x976ex3;
_0x976ex4++){this[matrix][_0x976ex4]= _0x976ex3- _0x976ex4> 1?this[matrix][_0x976ex4+ 1][slice](0):_0x976ex2[slice](0)};
this[solidHeight]++,this[ISGAME]&& this[Replay][add]( new ReplayAction(this[Replay][Action].SGARBAGE_ADD,this[timestamp]()))},GameCore[prototype][gravityStep]= function(_0x976ex2,_0x976ex3){return this[checkIntersection](this[activeBlock][pos][x],this[activeBlock][pos][y]+ 1,null)?(this[ISGAME]&&  !this[lockDelayActive]&& (this[lockDelayActive]=  true,this[lockDelayActivated]= _0x976ex3,this[lastAction]= _0x976ex3,this[playSound](land)),0):(this[activeBlock][pos][y]++,this[lockDelayActive]=  false,this[spinPossible]=  false,_0x976ex2?1+ this[gravityStep](_0x976ex2- 1,_0x976ex3):1)},GameCore[prototype][holdBlock]= function(){if(!this[holdUsedAlready]&& this[R][holdEnabled]){var _0x976ex2=null;
if(this[ISGAME]&& (_0x976ex2= this[timestamp](),this[Replay][add]( new ReplayAction(this[Replay][Action].HOLD_BLOCK,_0x976ex2))),this[lockDelayActive]=  false,null=== this[blockInHold]){this[blockInHold]= this[activeBlock],this[getNextBlock](_0x976ex2)}else {var _0x976ex3=this[blockInHold];
this[blockInHold]= this[activeBlock],this[activeBlock]= _0x976ex3,this[setCurrentPieceToDefaultPos](),this[ISGAME]&& (this[lastGeneration]= _0x976ex2,this[VSEenabled]&& this[VSFXset][spawns]&& this[playCurrentPieceSound]())};
this[updateGhostPiece](true),this[holdUsedAlready]=  true,this[totalKeyPresses]++,this[gamedata][holds]++,this[GameStats]&& this[GameStats][get](HOLD)[set](this[gamedata][holds]),this[ISGAME]?(this[checkAutoRepeat](_0x976ex2,false),this[redrawHoldBox](),this[redraw](),this[playSound](hold)):this[v][onBlockHold]()}},GameCore[prototype][moveBlockToTheWall]= function(_0x976ex2){for(var _0x976ex3=0;
!this[checkIntersection](this[activeBlock][pos][x]+ _0x976ex2,this[activeBlock][pos][y],null);
){this[activeBlock][pos][x]= this[activeBlock][pos][x]+ _0x976ex2,_0x976ex3+= 1};
return _0x976ex3&& (this[updateGhostPiece](true),this[redraw]()),_0x976ex3},GameCore[prototype][updateGhostPiece]= function(_0x976ex2){if(_0x976ex2|| this[ghostEnabled]&& (!this[ISGAME]|| this[v][ghostEnabled]&&  !this[v][redrawBlocked])){for(var _0x976ex3=this[activeBlock][pos][y];
_0x976ex3<= 20;
++_0x976ex3){if(this[checkIntersection](this[activeBlock][pos][x],_0x976ex3,null)){this[ghostPiece][pos][x]= this[activeBlock][pos][x],this[ghostPiece][pos][y]= _0x976ex3- 1;
break}}}},GameCore[prototype][checkTSpin]= function(_0x976ex2){let _0x976ex3=0,_0x976ex4=0,_0x976ex5=this[activeBlock][rot],_0x976ex9=this[activeBlock][pos][x],_0x976ex21=this[activeBlock][pos][y];
if(202=== _0x976ex2&& (2!== this[activeBlock][rot]&&  --_0x976ex21,_0x976ex5= (this[activeBlock][rot]+ 2)% 4),_0x976ex21<  -2){return false};
switch(_0x976ex5){case 0:_0x976ex21>=  -1?_0x976ex3= (this[matrix][_0x976ex21+ 1][_0x976ex9]> 0)+ (this[matrix][_0x976ex21+ 1][_0x976ex9+ 2]> 0):-2=== _0x976ex21 && (_0x976ex3= (this[deadline][_0x976ex9]> 0)+ (this[deadline][_0x976ex9+ 2]> 0)),_0x976ex4= 17=== _0x976ex21?2:(this[matrix][_0x976ex21+ 3][_0x976ex9]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9+ 2]> 0);
break;
case 1:-1=== _0x976ex9 && (_0x976ex4= 2),_0x976ex21>=  -1?(_0x976ex3= (this[matrix][_0x976ex21+ 1][_0x976ex9+ 2]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9+ 2]> 0),_0x976ex4|| (_0x976ex4= (this[matrix][_0x976ex21+ 1][_0x976ex9]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9]> 0))):-2=== _0x976ex21 && (_0x976ex3= (this[deadline][_0x976ex9+ 2]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9+ 2]> 0),_0x976ex4|| (_0x976ex4= (this[deadline][_0x976ex9]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9]> 0)));
break;
case 2:_0x976ex21>=  -1?_0x976ex4= (this[matrix][_0x976ex21+ 1][_0x976ex9]> 0)+ (this[matrix][_0x976ex21+ 1][_0x976ex9+ 2]> 0):-2=== _0x976ex21 && (_0x976ex4= (this[deadline][_0x976ex9]> 0)+ (this[deadline][_0x976ex9+ 2]> 0)),_0x976ex3= 17=== _0x976ex21?2:(this[matrix][_0x976ex21+ 3][_0x976ex9]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9+ 2]> 0);
break;
case 3:8=== _0x976ex9&& (_0x976ex4= 2),_0x976ex21>=  -1?(_0x976ex3= (this[matrix][_0x976ex21+ 1][_0x976ex9]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9]> 0),_0x976ex4|| (_0x976ex4= (this[matrix][_0x976ex21+ 1][_0x976ex9+ 2]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9+ 2]> 0))):-2=== _0x976ex21 && (_0x976ex3= (this[deadline][_0x976ex9]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9]> 0),_0x976ex4|| (_0x976ex4= (this[deadline][_0x976ex9+ 2]> 0)+ (this[matrix][_0x976ex21+ 3][_0x976ex9+ 2]> 0)))};
this[spinPossible]= 2=== _0x976ex3&& _0x976ex4>= 1,this[spinMiniPossible]= 1=== _0x976ex3&& 2=== _0x976ex4},GameCore[prototype][checkAllSpinImmobile]= function(){let _0x976ex2=this[activeBlock][pos][x],_0x976ex3=this[activeBlock][pos][y];
this[spinPossible]= this[checkIntersection](_0x976ex2- 1,_0x976ex3,null)&& this[checkIntersection](_0x976ex2+ 1,_0x976ex3,null)&& this[checkIntersection](_0x976ex2,_0x976ex3- 1,null)},GameCore[prototype][checkAllSpin]= function(_0x976ex2){let _0x976ex3=this[blockSets][this[activeBlock][set]];
if(!_0x976ex3[allspin]){return};
let _0x976ex4=_0x976ex3[allspin][_0x976ex2];
if(!_0x976ex4){return};
let _0x976ex5=this[activeBlock][pos][x],_0x976ex9=this[activeBlock][pos][y],_0x976ex21=_0x976ex4[this[activeBlock][rot]][0],_0x976ex22=_0x976ex4[this[activeBlock][rot]][1],_0x976ex23=this,_0x976ex24=function(_0x976ex2){let _0x976ex3=0;
for(let _0x976ex4=0;
_0x976ex4< _0x976ex2[length];
_0x976ex4+= 2){let _0x976ex21=_0x976ex5+ _0x976ex2[_0x976ex4],_0x976ex22=_0x976ex9+ _0x976ex2[_0x976ex4+ 1];
(_0x976ex21< 0|| _0x976ex21>= 10|| _0x976ex22< 0|| _0x976ex22>= 20|| _0x976ex23[matrix][_0x976ex22][_0x976ex21]> 0)&&  ++_0x976ex3};
return _0x976ex3};
if(_0x976ex24(_0x976ex21)!== _0x976ex21[length]/ 2){return};
let _0x976ex25=0;
if(Array[isArray](_0x976ex22[0])){for(let _0x976ex2=0;
_0x976ex2< _0x976ex22[length];
_0x976ex2++){_0x976ex24(_0x976ex22[_0x976ex2])&& _0x976ex25++}}else {_0x976ex25= _0x976ex24(_0x976ex22)};
if(this[spinPossible]=  true,2== _0x976ex25){;
}else {if(1!= _0x976ex25){return};
this[spinMiniPossible]=  true}},GameCore[prototype][checkLineClears]= function(_0x976ex2){let _0x976ex3=0,_0x976ex4=-1,_0x976ex5=0,_0x976ex9=0,_0x976ex21=false,_0x976ex22=0,_0x976ex23=0,_0x976ex24=[],_0x976ex25=null,_0x976ex26=this[blockSets][this[activeBlock][set]][blocks][this[activeBlock][id]],_0x976ex27=;
if(this[wasBack2Back]= this[isBack2Back],this[spinMiniPossible]=  false,this[ISGAME]|| 3!== this[pmode]|| (_0x976ex23= this[countGarbageHeight]()),this[R][clearLines]){this[spinPossible]&& 1!== this[R][allSpin]&& (2=== _0x976ex26[id]|| 202=== _0x976ex26[id]?this[checkTSpin](_0x976ex26[id]):2=== this[R][allSpin]?(this[spinPossible]=  false,this[checkAllSpin](_0x976ex26[id])):this[spinPossible]=  false);
for(var _0x976ex28=0;
_0x976ex28< 10;
++_0x976ex28){if(0!== this[deadline][_0x976ex28]){++_0x976ex5}else {if(_0x976ex5> 0){break}}};
10=== _0x976ex5?(this[deadline]= [0,0,0,0,0,0,0,0,0,0],++_0x976ex3):_0x976ex22+= _0x976ex5;
for(var _0x976ex29=0;
_0x976ex29< 20;
_0x976ex29++){_0x976ex5= 0,_0x976ex9= 0;
for(_0x976ex28= 0;
_0x976ex28< 10;
_0x976ex28++){let _0x976ex2=this[matrix][_0x976ex29][_0x976ex28];
if(9=== _0x976ex2){break};
if(0!== _0x976ex2){_0x976ex5++,_0x976ex9|= _0x976ex2}else {if(_0x976ex22+ _0x976ex5> 0){break}}};
if(10=== _0x976ex5){this[R][clearDelay]&& (null=== _0x976ex25&& (_0x976ex25= copyMatrix(this[matrix])),_0x976ex24[push](_0x976ex29)),this[matrix][_0x976ex29][indexOf](8)>= 0&& this[gamedata][garbageCleared]++;
for(var _0x976ex2a=_0x976ex29;
_0x976ex2a> 0;
_0x976ex2a--){this[matrix][_0x976ex2a]= this[matrix][_0x976ex2a- 1]};
this[matrix][0]= this[deadline][slice](0),this[deadline]= [0,0,0,0,0,0,0,0,0,0],_0x976ex5= 0,_0x976ex3++,_0x976ex4= _0x976ex29,this[ISGAME]&& 6=== this[isPmode](false)&& this[MapManager][mapData][finish]=== this[MapManager][FINISH_STANDARD]&& this[MapManager][lineCleared](_0x976ex29),16& _0x976ex9&& (_0x976ex21=  true)};
_0x976ex22+= _0x976ex5};
if(_0x976ex3> 0){this[gamedata][lines]+= _0x976ex3,this[GameStats]&& this[GameStats][get](LINES)[set](this[gamedata][lines]);
var _0x976ex2b=0,_0x976ex2c=null;
switch(_0x976ex3){case 1:this[gamedata][singles]++,_0x976ex2b= this[linesAttack][1],this[spinPossible]?(this[debug]&& (_0x976ex27= T-Spin Single),_0x976ex2c= this[Scoring][A][TSPIN_SINGLE],_0x976ex2b= this[linesAttack][7],this[isBack2Back]?(this[gamedata][B2B]+= 1,_0x976ex2b+= this[linesAttack][10]):this[isBack2Back]=  true):this[spinMiniPossible]?(_0x976ex2c= this[Scoring][A][TSPIN_MINI_SINGLE],this[isBack2Back]?this[gamedata][B2B]+= 1:this[isBack2Back]=  true,_0x976ex2b= this[linesAttack][8],this[debug]&& (_0x976ex27= T-Spin Mini Single)):(this[isBack2Back]=  false,_0x976ex2c= this[Scoring][A][CLEAR1]);
break;
case 2:this[gamedata][doubles]++,_0x976ex2b= this[linesAttack][2],this[spinPossible]|| this[spinMiniPossible]?(this[gamedata][TSD]++,_0x976ex2b= this[linesAttack][5],_0x976ex2c= this[Scoring][A][TSPIN_DOUBLE],this[isBack2Back]?(this[gamedata][B2B]+= 1,_0x976ex2b+= this[linesAttack][10]):this[isBack2Back]=  true,this[debug]&& (_0x976ex27= T-Spin Double)):(this[isBack2Back]=  false,_0x976ex2c= this[Scoring][A][CLEAR2]);
break;
case 3:this[gamedata][triples]++,_0x976ex2b= this[linesAttack][3],!this[spinPossible]&&  !this[spinMiniPossible] || 2!== _0x976ex26[id]&& 50!== _0x976ex26[id]?(this[isBack2Back]=  false,_0x976ex2c= this[Scoring][A][CLEAR3]):(_0x976ex2b= this[linesAttack][6],_0x976ex2c= this[Scoring][A][TSPIN_TRIPLE],this[isBack2Back]?(this[gamedata][B2B]+= 1,_0x976ex2b+= this[linesAttack][10]):this[isBack2Back]=  true,this[debug]&& (_0x976ex27= T-Spin Triple));
break;
case 4:this[gamedata][tetrises]++,_0x976ex2c= this[Scoring][A][CLEAR4],_0x976ex2b= this[linesAttack][4],this[isBack2Back]?(this[gamedata][B2B]+= 1,_0x976ex2b+= this[linesAttack][10]):this[isBack2Back]=  true,this[debug]&& (_0x976ex27= Tetris);
break;
default:this[gamedata][tetrises]++,_0x976ex2c= this[Scoring][A][CLEAR5],_0x976ex2b= this[linesAttack][6],this[isBack2Back]?(this[gamedata][B2B]+= 1,_0x976ex2b+= this[linesAttack][10]):this[isBack2Back]=  true,this[debug]&& (_0x976ex27= Multitris (+ _0x976ex3+ ))};
this[R][allSpin]&& this[spinPossible]&& (this[excludedBlocksAS]&& this[excludedBlocksAS][length]&& -1!== this[excludedBlocksAS][indexOf](_0x976ex26[name])?(_0x976ex2b= 0,this[debug]&& (_0x976ex27= Ignored + _0x976ex26[name]+ -Spin)):2!== _0x976ex26[id]&& (_0x976ex2c= 127,_0x976ex2b= 1=== this[R][allSpin]?_0x976ex3>= 4?this[linesAttack][6]+ 1:3=== _0x976ex3?this[linesAttack][6]:2=== _0x976ex3?this[linesAttack][5]:this[linesAttack][7]:this[spinMiniPossible]?Math[min](2,_0x976ex3):Math[min](5,2* _0x976ex3),this[wasBack2Back]&& (_0x976ex2b+= this[linesAttack][10]),this[isBack2Back]=  true,this[debug]&& this[ISGAME]&& (_0x976ex27= _0x976ex26[name]+ -Spin + (_0x976ex3<= 4?this[multipleNames][_0x976ex3- 1]:this[multipleNames][4]),this[spinMiniPossible]&& (_0x976ex27+=  Mini),this[wasBack2Back]&& (_0x976ex27= B2B + _0x976ex27)))),_0x976ex2c>= 8&& _0x976ex2c<= 11&& (this[gamedata][wasted]--,this[gamedata][tspins]++),this[score](_0x976ex2c);
let _0x976ex5=_0x976ex2c;
0=== _0x976ex22&& (this[gamedata][PCs]++,_0x976ex2b= this[linesAttack][9],_0x976ex5= this[Scoring][A][PERFECT_CLEAR],this[debug]&& (_0x976ex27= Perfect Clear),this[score](_0x976ex5),this[ISGAME]&& 6=== this[isPmode](false)&& this[MapManager][mapData][finish]=== this[MapManager][FINISH_BY_PC]&& this[practiceModeCompleted](_0x976ex2)),this[ISGAME]&& 6=== this[isPmode](false)&& this[MapManager][mapData][finish]=== this[MapManager][FINISH_STANDARD]&& 0=== this[MapManager][mapLines][length]&& this[practiceModeCompleted](_0x976ex2),this[fourWideFlag]= this[ISGAME]&& this[Live][noFourWide]&& (this[fourWideFlag]&& this[comboCounter]>= 0|| this[is4W](_0x976ex4)),this[comboCounter]++,this[comboCounter]> 0&& this[score](this[Scoring][A].COMBO,this[comboCounter]),this[comboCounter]> this[gamedata][maxCombo]&& (this[gamedata][maxCombo]= this[comboCounter]);
var _0x976ex2d=this[getComboAttack](this[comboCounter]);
this[gamedata][linesSent]+= _0x976ex2b+ _0x976ex2d;
let _0x976ex9={type:_0x976ex5,b2b:this[wasBack2Back],cmb:this[comboCounter]};
if((_0x976ex2b> 0|| _0x976ex2d> 0)&& this[GameStats]&& this[GameStats][get](ATTACK)[set](this[gamedata][linesSent]),this[ISGAME]){let _0x976ex2=[_0x976ex5,_0x976ex2c,this[wasBack2Back]&& this[isBack2Back],this[comboCounter]];
this[playSound](this[SFXset][getClearSFX](..._0x976ex2),1),this[VSEenabled]&& this[playSound](this[VSFXset][getClearSFX](..._0x976ex2),2),this[debug]&& _0x976ex27&& this[Live][showInChat](,_0x976ex27)};
if(this[isPmode](false)){if(this[gamedata][attack]= this[gamedata][linesSent],1=== this[isPmode](false)){this[linesRemaining]>= _0x976ex3?this[linesRemaining]-= _0x976ex3:this[linesRemaining]= 0,this[ISGAME]&& (this[lrem][textContent]= this[linesRemaining])}else {if(3=== this[isPmode](false)){let _0x976ex2=this[countGarbageHeight]();
if(this[ISGAME]){if(this[cheeseLevel]> _0x976ex2){var _0x976ex2e=this[cheeseLevel]- _0x976ex2;
this[cheeseLevel]= _0x976ex2,this[linesRemaining]-= _0x976ex2e,this[linesRemaining]> this[cheeseLevel]&& this[cheeseLevel]< this[minCheeseHeight]&& (this[addGarbage](1),this[cheeseLevel]+= 1)};
this[setLrem](this[linesRemaining])}else {let _0x976ex3=_0x976ex23- _0x976ex2;
this[linesRemaining]-= _0x976ex3}}else {if(7=== this[isPmode](false)){this[ISGAME]&& _0x976ex2c!== this[Scoring][A][TSPIN_DOUBLE]&& (this[Caption][gameWarning](i18n[notTSD],i18n[notTSDInfo]),this[practiceModeCompleted]()),this[ISGAME]&& (this[lrem][textContent]= this[gamedata][TSD]),20=== this[gamedata][TSD]&& (this[gamedata][TSD20]= Math[round](1e3* this[clock]))}else {if(this[ISGAME]&& 8=== this[isPmode](false)){_0x976ex5=== this[Scoring][A][PERFECT_CLEAR]?(this[gamedata][lastPC]= this[clock],this[lrem][textContent]= this[gamedata][PCs],this[ISGAME]&& (this[PCdata]= {blocks:0,lines:0})):this[ISGAME]&& (this[PCdata][blocks]++,this[PCdata][lines]+= _0x976ex3,this[evalPCmodeEnd]())}else {if(this[ISGAME]&& 9=== this[isPmode](false)){let _0x976ex4=this[gamedata][lines]- _0x976ex3;
for(let _0x976ex2=1;
_0x976ex2<= _0x976ex3;
++_0x976ex2){this[ModeManager][on](this[ModeManager].LINE,_0x976ex4+ _0x976ex2)};
this[ModeManager][on](this[ModeManager].LINECLEAR,_0x976ex3),_0x976ex2b> 0&& this[blockOrSendAttack](_0x976ex2b,_0x976ex2),_0x976ex2d> 0&& this[blockOrSendAttack](_0x976ex2d,_0x976ex2)}}}}};
!this[linesRemaining]&& this[ISGAME] && this[practiceModeCompleted]()}else {if(this[ISGAME]){if(this[fourWideFlag]&& _0x976ex2d&& this[Live][noFourWide]){for(this[Caption][gameWarning](i18n[fwDetect],i18n[fwDetectInfo]);
_0x976ex2d> 0;
){this[addGarbage](1),--_0x976ex2d}};
let _0x976ex3=null,_0x976ex4=null;
_0x976ex2b> 0&& (_0x976ex3= this[blockOrSendAttack](_0x976ex2b,_0x976ex2)),_0x976ex2d> 0&& (_0x976ex4= this[blockOrSendAttack](_0x976ex2d,_0x976ex2)),(_0x976ex3|| _0x976ex4)&& this[Live][sendAttack](_0x976ex3,_0x976ex4,_0x976ex9)}};
this[ISGAME]?(_0x976ex21&& this[Items][pickup](),this[R][clearDelay]&&  !this[redrawBlocked]&& (this[play]=  false,this[redrawBlocked]=  true,this[animator]=  new LineClearAnimator(_0x976ex25,_0x976ex24,this))):this[v][onLinesCleared](_0x976ex2b,_0x976ex2d,_0x976ex9)}else {this[comboCounter]=  -1;
let _0x976ex2=null;
if(this[spinPossible]?(_0x976ex2= this[Scoring][A][TSPIN],this[debug]&& this[ISGAME]&& this[Live][showInChat](,_0x976ex26[name]+ -Spin)):this[spinMiniPossible]&& (_0x976ex2= this[Scoring][A][TSPIN_MINI],this[debug]&& this[ISGAME]&& this[Live][showInChat](,_0x976ex26[name]+ -Spin Mini)),_0x976ex2&& (this[score](_0x976ex2),this[ISGAME])){let _0x976ex3=[_0x976ex2,_0x976ex2,false,-1];
this[playSound](this[SFXset][getClearSFX](..._0x976ex3),1),this[VSEenabled]&& this[playSound](this[VSFXset][getClearSFX](..._0x976ex3),2)};
if(this[ISGAME]&& 3=== this[isPmode](false)){var _0x976ex2f=this[maxCheeseHeight]- this[cheeseLevel];
if(_0x976ex2f> 0){var _0x976ex30=Math[min](_0x976ex2f,this[linesRemaining]- this[cheeseLevel]);
for(_0x976ex2a= 0;
_0x976ex2a< _0x976ex30;
_0x976ex2a++){this[addGarbage](1)};
this[cheeseLevel]+= _0x976ex30}}else {this[ISGAME]&& 8=== this[isPmode](false)&& (this[PCdata][blocks]++,this[evalPCmodeEnd]())}}}else {this[comboCounter]=  -1}},GameCore[prototype][countGarbageHeight]= function(_0x976ex2){_0x976ex2= _0x976ex2|| 20;
for(var _0x976ex3=0,_0x976ex4=0;
_0x976ex4< _0x976ex2;
_0x976ex4++){if(8!== this[matrix][19- _0x976ex4][0]&& 8!== this[matrix][19- _0x976ex4][1]){_0x976ex3= _0x976ex4;
break}};
return _0x976ex3},GameCore[prototype][is4W]= function(_0x976ex2){for(var _0x976ex3=0,_0x976ex4=_0x976ex2;
_0x976ex4>= 0;
_0x976ex4--){for(var _0x976ex5=null,_0x976ex9=false,_0x976ex21=0;
_0x976ex21< 10;
_0x976ex21++){if(9!== this[matrix][_0x976ex4][_0x976ex21]){if(0=== this[matrix][_0x976ex4][_0x976ex21]){if(_0x976ex9){_0x976ex5=  -1,_0x976ex9=  false;
break};
if(null=== _0x976ex5){_0x976ex5= 1}else {if(++_0x976ex5> 4){_0x976ex9=  false;
break}}}else {if(4=== _0x976ex5){_0x976ex9=  true}else {if(_0x976ex5){_0x976ex5=  -1,_0x976ex9=  false;
break}}}}};
if(4=== _0x976ex5|| _0x976ex9){if(++_0x976ex3>= 3){return true}}else {if(_0x976ex3= 0,_0x976ex4<= 3){return false}}};
return false},

GameCore[prototype][placeBlock] = function(_0x976ex2,_0x976ex3,_0x976ex4) { // GameCore[_0x2275[135]][_0x2275[498]] = function(_0x976ex2, _0x976ex3, _0x976ex4) {
    ++this[placedBlocks],
    2=== this[activeBlock][id]&& (this[gamedata][wasted]++,this[gamedata][tpieces]++),
    this[GameStats]&& this[GameStats][get](BLOCKS)[set](this[placedBlocks]),
    this[GameStats]&& this[GameStats][get](KPP)[set](this[getKPP]()),
    this[ISGAME]&& (this[savePlacementTime](),_0x976ex4= _0x976ex4|| this[timestamp]());
    let _0x976ex5=0,_0x976ex9=0,_0x976ex21=false,_0x976ex22=this[blockSets][this[activeBlock][set]][blocks][this[activeBlock][id]],_0x976ex23=_0x976ex22[blocks][this[activeBlock][rot]][length],_0x976ex24=0;
    this[spinPossible]&& 1=== this[R][allSpin]&& this[checkAllSpinImmobile]();
    for(var _0x976ex25=0; _0x976ex25< _0x976ex23; _0x976ex25++) {
        for(var _0x976ex26=0; _0x976ex26< _0x976ex23; _0x976ex26++) {
            let _0x976ex4=_0x976ex22[blocks][this[activeBlock][rot]][_0x976ex25][_0x976ex26];
            (_0x976ex4 > 0) && (++_0x976ex9),
            _0x976ex24 = _0x976ex4 === this[activeBlock][item] ? 16 : 0,
            ((_0x976ex3 + _0x976ex25) >= 0) && _0x976ex2+ _0x976ex26>= 0 ? (this[matrix][_0x976ex3+ _0x976ex25][_0x976ex2+ _0x976ex26]= _0x976ex22[color]^ _0x976ex24,_0x976ex3+ _0x976ex25=== 19- this[solidHeight]&& (this[ISGAME]&& 1=== this[Live][liveMode]&&  !this[pmode]?(this[Live][raceCompleted](),this[place]= 1,_0x976ex21=  true):this[ISGAME]|| (this[playing]=  false))):(_0x976ex5++,_0x976ex3+ _0x976ex25===  -1&& 0=== this[deadline][_0x976ex2+ _0x976ex26]&& (this[deadline][_0x976ex2+ _0x976ex26]= _0x976ex22[color]^ _0x976ex24)))
    }};
    if(_0x976ex5=== _0x976ex9&& this.GameOver(),this[play]){for(this[holdUsedAlready]=  false,this[checkLineClears](_0x976ex4);
    this[solidToAdd];
    ){this[addSolidGarbage](),this[solidToAdd]--};
    -1!== this[comboCounter] && 0=== this[R][gblock] || this[addGarbageFromQueue](_0x976ex4),this[getNextBlock](_0x976ex4),_0x976ex21&& this.GameOver()}else {this[ISGAME]|| (this[holdUsedAlready]=  false,this[checkLineClears](),this[getNextBlock](),this[v][onBlockLocked]())};
    this[gamedata][tpieces]> 0&& this[GameStats]&& this[GameStats][get](WASTE)[set](this[getWasted]())
},

GameCore[prototype][getQueuePreview]= function(_0x976ex2){let _0x976ex3=[];
for(var _0x976ex4=0;
_0x976ex4< this[queueLength];
_0x976ex4++){_0x976ex3[push](this[getRandomizerBlock](_0x976ex2))};
return _0x976ex3},GameCore[prototype][generateQueue]= function(){this[ISGAME]?this[queue]= []:this[queue][splice](0,this[queueLength]);
for(var _0x976ex2=0;
_0x976ex2< this[queueLength];
_0x976ex2++){this[queue][push](this[getRandomizerBlock]())};
if(!this[ISGAME]){if(1=== this[pmode]){if(this[queue][0][id]>= 5&& 0=== this[queue][0][set]){var _0x976ex3=this[queue][0];
this[queue][1][id]< 5?(this[queue][0]= this[queue][1],this[queue][1]= _0x976ex3):(this[queue][0]= this[queue][2],this[queue][2]= _0x976ex3)}}else {if(this[r][c][v]< 3.3&& 2!== this[pmode]&& this[queue][length]>= 3&& this[queue][0][id]>= 5&& this[queue][1][id]>= 5){_0x976ex3= this[queue][0];
this[queue][0]= this[queue][2],this[queue][2]= _0x976ex3}}}},GameCore[prototype][addGarbageFromQueue]= function(_0x976ex2){if(this[redBar]> 0){var _0x976ex3,_0x976ex4=this[incomingGarbage][length],_0x976ex5=0,_0x976ex9=0;
for(_0x976ex5= 0;
_0x976ex5< _0x976ex4&&  !(_0x976ex2- this[incomingGarbage][_0x976ex5][1]<= this[R][gDelay]);
_0x976ex5++){_0x976ex3= this[addGarbage](this[incomingGarbage][_0x976ex5][0])};
for(this[redBar]= 0,null=== _0x976ex3&& this[recordRedbarChange](_0x976ex2);
_0x976ex5< _0x976ex4;
){this[incomingGarbage][_0x976ex9++]= this[incomingGarbage][_0x976ex5],this[redBar]+= this[incomingGarbage][_0x976ex5][0],_0x976ex5++};
this[incomingGarbage][length]= _0x976ex9}},GameCore[prototype][addGarbage]= function(_0x976ex2){var _0x976ex3=void(0),_0x976ex4=this[isPmode](false);
if(_0x976ex2<= 0){return 0};
if(this[R][solidAttack]){for(var _0x976ex5=0;
_0x976ex5< _0x976ex2;
++_0x976ex5){this[addSolidGarbage]()};
_0x976ex3= null}else {this[gamedata][linesReceived]+= _0x976ex2;
var _0x976ex9=[8,8,8,8,8,8,8,8,8,8];
if(9=== _0x976ex4&& this[garbageCols][length]){_0x976ex3= this[garbageCols][shift]()}else {if(3!== _0x976ex4&& 4!== _0x976ex4){if(this[R][mess]>= 0){_0x976ex3= this[random](0,9)}else {var _0x976ex21=100+ this[R][mess];
(!this[lastHolePos]|| _0x976ex21> 0&& this.RNG()< _0x976ex21/ 100) && (this[lastHolePos]= this[random](0,9)),_0x976ex3= this[lastHolePos]}}else {_0x976ex3= this[lastHolePos]= this[randomExcept](0,9,this[lastHolePos])}};
if(1=== this[R][gapW]){_0x976ex9[_0x976ex3]= 0}else {1=== this[R][baseBlockSet]&& (_0x976ex3-= _0x976ex3% 2),_0x976ex3+ this[R][gapW]> 10&& (_0x976ex3= 10- this[R][gapW]);
for(let _0x976ex2=0;
_0x976ex2< this[R][gapW];
++_0x976ex2){_0x976ex9[_0x976ex3+ _0x976ex2]= 0}};
if(this[R][gInv]){for(let _0x976ex2=0;
_0x976ex2< _0x976ex9[length];
++_0x976ex2){_0x976ex9[_0x976ex2]= 8=== _0x976ex9[_0x976ex2]?0:8}};
_0x976ex2<= this[matrix][length]?this[deadline]= this[matrix][_0x976ex2- 1][slice](0):this[deadline]= _0x976ex9[slice](0);
for(var _0x976ex22,_0x976ex23=this[matrix][length]- this[solidHeight],_0x976ex24=0;
_0x976ex24< _0x976ex23;
_0x976ex24++){this[matrix][_0x976ex24]= _0x976ex23- _0x976ex24> _0x976ex2?this[matrix][_0x976ex24+ _0x976ex2][slice](0):_0x976ex9[slice](0)};
if(this[GameStats][get](RECV)[set](this[gamedata][linesReceived]),this[R][gInv]|| 1!== this[R][gapW]){(_0x976ex22=  new ReplayAction(this[Replay][Action].AUX,this[timestamp]()))[d]= [this[Replay][AUX][WIDE_GARBAGE_ADD],_0x976ex2,_0x976ex3,this[R][gapW],this[R][gInv]?1:0]}else {(_0x976ex22=  new ReplayAction(this[Replay][Action].GARBAGE_ADD,this[timestamp]()))[d]= [_0x976ex2,_0x976ex3]};
this[Replay][add](_0x976ex22),this[updateGhostPiece](true)};
return _0x976ex3},GameCore[prototype][addToGarbageQueue]= function(_0x976ex2){var _0x976ex3=this[timestamp]();
if(0=== this[R][mess]){this[incomingGarbage][push]([_0x976ex2,_0x976ex3])}else {for(var _0x976ex4=0,_0x976ex5=0,_0x976ex9=this[R][mess]> 0?this[R][mess]:100;
_0x976ex4< _0x976ex2;
){_0x976ex5++,(100=== _0x976ex9|| Math[random]()< _0x976ex9/ 100)&& (this[incomingGarbage][push]([_0x976ex5,_0x976ex3]),_0x976ex5= 0),_0x976ex4++};
_0x976ex5&& this[incomingGarbage][push]([_0x976ex5,_0x976ex3])};
this[redBar]+= _0x976ex2,this[recordRedbarChange](_0x976ex3),this[v][redrawRedBar](true)},GameCore[prototype][getAPM]= function(){var _0x976ex2=this[clock];
return this[ISGAME]|| (_0x976ex2/= 1e3),Math[round](100* this[gamedata][attack]/ (_0x976ex2/ 60))/ 100},GameCore[prototype][getKPP]= function(){var _0x976ex2=0;
return this[placedBlocks]&& (_0x976ex2= (this[totalKeyPresses]+ this[placedBlocks])/ this[placedBlocks]),Math[round](100* _0x976ex2)/ 100},GameCore[prototype][getVS]= function(){var _0x976ex2=this[clock];
return this[ISGAME]|| (_0x976ex2/= 1e3),Math[round](1e4* (this[gamedata][garbageCleared]+ this[gamedata][attack])/ _0x976ex2)/ 100},GameCore[prototype][getWasted]= function(){return Math[round](this[gamedata][wasted]/ this[gamedata][tpieces]* 100)/ 100},GameCore[prototype][score]= function(_0x976ex2,_0x976ex3){var _0x976ex4;
void(0)=== _0x976ex3&& (_0x976ex3= 1),_0x976ex3*= this[R][scoreMult],this[gamedata][score]+= _0x976ex4= Math[round](_0x976ex3* this[Scoring][get](_0x976ex2,this[wasBack2Back])),_0x976ex4> 0&& this[debug]&& this[Live][showInChat](,Object[keys](this[Scoring].A)[_0x976ex2]+  * + _0x976ex3+  = <b>+ _0x976ex4+ </b>),this[GameStats][get](SCORE)[set](this[gamedata][score])},GameCore[prototype][timestamp]= function(){return ( new Date)[getTime]()},GameCore[prototype][getComboAttack]= function(_0x976ex2){return _0x976ex2<= 12?this[comboAttack][_0x976ex2]:this[comboAttack][this[comboAttack][length]- 1]},GameCore[prototype][deleteFromGarbageQueue]= function(_0x976ex2){for(var _0x976ex3=this[incomingGarbage][length],_0x976ex4=0;
_0x976ex4< _0x976ex3;
_0x976ex4++){if(this[incomingGarbage][_0x976ex4][0]>= _0x976ex2){this[incomingGarbage][_0x976ex4][0]-= _0x976ex2;
break};
_0x976ex2-= this[incomingGarbage][_0x976ex4][0],this[incomingGarbage][_0x976ex4][0]= 0}},GameCore[prototype][blockOrSendAttack]= function(_0x976ex2,_0x976ex3){return this[gamedata][attack]+= _0x976ex2,this[redBar]> 0&& this[R][gblock]< 2&& (this[redBar]> _0x976ex2?(this[redBar]-= _0x976ex2,this[deleteFromGarbageQueue](_0x976ex2),_0x976ex2= 0):(_0x976ex2-= this[redBar],this[redBar]= 0,this[incomingGarbage]= []),this[recordRedbarChange](_0x976ex3)),_0x976ex2> 0&& 0=== this[Live][liveMode]|| 2=== this[Live][liveMode]?_0x976ex2:null},GameCore[prototype][recordRedbarChange]= function(_0x976ex2){_0x976ex2= _0x976ex2|| this[timestamp]();
var _0x976ex3= new ReplayAction(this[Replay][Action].REDBAR_SET,_0x976ex2);
_0x976ex3[d]= [this[redBar]<= 20?this[redBar]:20],this[Replay][add](_0x976ex3)},GameCore[prototype][paintMatrixWithColor]= function(_0x976ex2){for(var _0x976ex3=0;
_0x976ex3< 20;
_0x976ex3++){for(var _0x976ex4=0;
_0x976ex4< 10;
_0x976ex4++){this[matrix][_0x976ex3][_0x976ex4]> 0&& (this[matrix][_0x976ex3][_0x976ex4]= _0x976ex2)}}},GameCore[prototype][clearMatrix]= function(){for(var _0x976ex2=this[matrix][length],_0x976ex3=0;
_0x976ex3< _0x976ex2;
_0x976ex3++){for(var _0x976ex4=this[matrix][_0x976ex3][length],_0x976ex5=0;
_0x976ex5< _0x976ex4;
_0x976ex5++){this[matrix][_0x976ex3][_0x976ex5]= 0}}},GameCore[prototype][updateQueueBox]= function(){if(this[ISGAME]&& this[redrawBlocked]){return};
if(!this[ISGAME]&& (this[v][redrawBlocked]||  !this[v][QueueHoldEnabled])){return};
this[v][clearQueueCanvas]();
let _0x976ex2=0;
for(var _0x976ex3=0;
_0x976ex3< this[R][showPreviews];
_0x976ex3++){if(_0x976ex3>= this[queue][length]){if(9!= this[pmode]){break};
if(!this[ModeManager][repeatQueue]){break};
this[ModeManager][addStaticQueueToQueue]()};
for(var _0x976ex4=this[queue][_0x976ex3],_0x976ex5=this[blockSets][_0x976ex4[set]][previewAs],_0x976ex9=_0x976ex5[blocks][_0x976ex4[id]][blocks][0],_0x976ex21=_0x976ex5[blocks][_0x976ex4[id]][color],_0x976ex22=_0x976ex5[equidist]?[0,3]:_0x976ex5[blocks][_0x976ex4[id]][yp],_0x976ex23=_0x976ex9[length],_0x976ex24=_0x976ex5[blocks][_0x976ex4[id]][xp]?_0x976ex5[blocks][_0x976ex4[id]][xp]:[0,_0x976ex23- 1],_0x976ex25=_0x976ex22[0];
_0x976ex25<= _0x976ex22[1];
_0x976ex25++){for(var _0x976ex26=_0x976ex24[0];
_0x976ex26<= _0x976ex24[1];
_0x976ex26++){_0x976ex9[_0x976ex25][_0x976ex26]> 0&& (this[v][drawBlockOnCanvas](_0x976ex26- _0x976ex24[0],_0x976ex25- _0x976ex22[0]+ _0x976ex2,_0x976ex21,this[v].QUEUE),_0x976ex4[item]&& _0x976ex9[_0x976ex25][_0x976ex26]=== _0x976ex4[item]&& this[v][drawBrickOverlayOnCanvas](_0x976ex26- _0x976ex24[0],_0x976ex25- _0x976ex22[0]+ _0x976ex2,this[v].QUEUE))}};
_0x976ex5[equidist]?_0x976ex2+= 3:_0x976ex2+= _0x976ex22[1]- _0x976ex22[0]+ 2}},GameCore[prototype][redrawHoldBox]= function(){if((!this[ISGAME]||  !this[redrawBlocked]) && (this[ISGAME]|| !this[v][redrawBlocked]&& this[v][QueueHoldEnabled]) && (this[v][clearHoldCanvas](),null!== this[blockInHold])){for(var _0x976ex2=this[blockSets][this[blockInHold][set]][previewAs],_0x976ex3=_0x976ex2[blocks][this[blockInHold][id]][blocks][0],_0x976ex4=_0x976ex2[blocks][this[blockInHold][id]][color],_0x976ex5=_0x976ex2[equidist]?[0,3]:_0x976ex2[blocks][this[blockInHold][id]][yp],_0x976ex9=_0x976ex3[length],_0x976ex21=_0x976ex2[blocks][this[blockInHold][id]][xp]?_0x976ex2[blocks][this[blockInHold][id]][xp]:[0,_0x976ex9- 1],_0x976ex22=_0x976ex5[0];
_0x976ex22<= _0x976ex5[1];
_0x976ex22++){for(var _0x976ex23=_0x976ex21[0];
_0x976ex23<= _0x976ex21[1];
_0x976ex23++){_0x976ex3[_0x976ex22][_0x976ex23]> 0&& (this[v][drawBlockOnCanvas](_0x976ex23- _0x976ex21[0],_0x976ex22- _0x976ex5[0],_0x976ex4,this[v].HOLD),this[blockInHold][item]&& _0x976ex3[_0x976ex22][_0x976ex23]=== this[blockInHold][item]&& this[v][drawBrickOverlayOnCanvas](_0x976ex23- _0x976ex21[0],_0x976ex22- _0x976ex5[0],this[v].HOLD))}}}},GameCore[prototype][resetGameData]= function(){let _0x976ex2=Object[keys](this[gamedata]);
for(let _0x976ex3 of _0x976ex2){this[gamedata][_0x976ex3]= 0}},GameCore[prototype][random]= function(_0x976ex2,_0x976ex3){return Math[round](_0x976ex2+ this.RNG()* (_0x976ex3- _0x976ex2))},GameCore[prototype][randomExcept]= function(_0x976ex2,_0x976ex3,_0x976ex4){for(;
;
){var _0x976ex5=this[random](_0x976ex2,_0x976ex3);
if(_0x976ex5!== _0x976ex4){return _0x976ex5}}},GameCore[prototype][getGravityLevel]= function(_0x976ex2){return _0x976ex2<= 0?[Number[MAX_SAFE_INTEGER],0]:_0x976ex2<= 18?[(18- 1* (_0x976ex2- 1))/ 20,0]:_0x976ex2<= 24?[(0.9- 0.1* (_0x976ex2- 19))/ 20,0]:25=== _0x976ex2?[0.03,1]:26=== _0x976ex2?[0.02,1]:27=== _0x976ex2?[0.1/ 3,2]:[0,20]},undefined!=  typeof module&& null!= module&& (module[exports]= GameCore),Bag[prototype][getBlock]= function(){let _0x976ex2=Math[floor](this.RNG()* this[bag][length]),_0x976ex3=this[bag][splice](_0x976ex2,1)[0];
return 0=== this[bag][length]&& (this[bag]= this[usebag][slice](0)), new Block(_0x976ex3)},Classic[prototype][getBlock]= function(){return  new Block(Math[floor](this.RNG()* this[n]))},OneBlock[prototype][getBlock]= function(){var _0x976ex2=this[bag][0];
return this[bag][length]> 1&& (_0x976ex2= this[bag][this[lastIndex]++],this[lastIndex]%= this[bag][length]), new Block(_0x976ex2)},C2Sim[prototype][getRandomExcept]= function(_0x976ex2){let _0x976ex3=Math[floor](this.RNG()* (this[n]- 1));
return _0x976ex2>= 0&& _0x976ex3>= _0x976ex2&&  ++_0x976ex3,_0x976ex3=== this[n]&& (_0x976ex3= 0),_0x976ex3},C2Sim[prototype][getBlock]= function(){let _0x976ex2=0;
if(this[hist][0]< 0){_0x976ex2= Math[floor](this.RNG()* this[n])}else {if(this[hist][0]=== this[hist][1]|| this[hist][1]< 0){_0x976ex2= this.RNG()<= 0.028105?this[hist][0]:this[getRandomExcept](this[hist][0])}else {let _0x976ex3=this.RNG();
if(_0x976ex3<= 0.027055){_0x976ex2= this[hist][0]}else {if(_0x976ex3>= 0.882639){_0x976ex2= this[hist][1]}else {do{_0x976ex2= this[getRandomExcept](this[hist][0])}while(_0x976ex2=== this[hist][1]);
}}}};
return this[hist][1]= this[hist][0],this[hist][0]= _0x976ex2, new Block(_0x976ex2)},Repeated[prototype][nextSegment]= function(_0x976ex2){this[block]= this[randomizer][getBlock](),this[i]= 1+ Math[floor](this[randomizer].RNG()* this[n])},Repeated[prototype][getBlock]= function(_0x976ex2){return 0=== this[i]&& this[nextSegment](),this[i]--,this[block]},BsBlock[prototype][getBlock]= function(){let _0x976ex2=this[randomizer][getBlock]();
return this[i]++,this[i]>= 21&& this[randomizer].RNG()< 0.1&& (_0x976ex2[set]= this[bsArr][Math[floor](this[randomizer].RNG()* this[bsArr][length])],this[i]= 0,2=== _0x976ex2[set]&& (_0x976ex2[id]= Math[floor](7* this[randomizer].RNG())),4=== _0x976ex2[set]&& (_0x976ex2[id]= Math[floor](18* this[randomizer].RNG()))),_0x976ex2},BigBlockRand[prototype][getBlock]= function(){let _0x976ex2=this[randomizer][getBlock]();
return this[i]++,this[randomizer].RNG()< this[i]/ this[EXPECTED_BLOCKS]&& (_0x976ex2[set]= 2,_0x976ex2[id]= Math[floor](7* this[randomizer].RNG())),_0x976ex2},ConstBlock[prototype][getBlock]= function(){let _0x976ex2= new Block(this[id]);
return _0x976ex2[set]= 0=== this[set]?-1:this[set],_0x976ex2},YotipoSFXset[prototype]=  new BaseSFXset,RainforestSFXset[prototype]=  new BaseSFXset,TetraSFXset[prototype]=  new BaseSFXset,NullSFXset[prototype]=  new BaseSFXset,VoiceSFXset[prototype]=  new NullSFXset,SpawnSFXset[prototype]=  new NullSFXset,DalVSFXset[prototype]=  new NullSFXset,DalSpawnVSFXset[prototype]=  new NullSFXset;
var SFXsets=[{id:0,name:Nullpomino,data:BaseSFXset},{id:1,name:Yotipo,data:YotipoSFXset},{id:2,name:Rainforest,data:RainforestSFXset},{id:3,name:Tetra-X,data:TetraSFXset},{id:4,name:None,data:NullSFXset}],VSFXsets=[{id:0,name:TTS-VoiceSFXset,data:VoiceSFXset},{id:1,name:TTS-SpawnSFXset,data:SpawnSFXset},{id:2,name:Commentary - Dal,data:DalVSFXset},{id:3,name:Block spawns - Dal,data:DalSpawnVSFXset}];
function SoundQueue(){this[playingSound]= null,this[queue]= []}function Items(_0x976ex2){this[p]= _0x976ex2,this[itmBox]= document[getElementsByClassName](itmBox)[0],this[itmIcn]= document[getElementsByClassName](itmIcn)[0],this[itmTxt]= document[getElementsByClassName](itmTxt)[0],this[itmDef]= [null,{id:1,n:Tblocks,i:/res/img/i/tpieces.png,m:0.24,p:0.12},{id:2,n:Tornado,i:/res/img/i/tornado.png,m:0.22,p:0.22},{id:3,n:Compress,i:/res/img/i/compress.png,m:0.2,p:0.06},{id:4,n:Fourwide,i:/res/img/i/four.png,m:0.04,p:0.06},{id:5,n:Poison,i:/res/img/i/poison.png,m:0.003,p:0.03},{id:6,n:Pentomino,i:/res/img/i/pento.png,m:0.107,p:0.06},{id:7,n:Big,i:/res/img/i/big.png,m:0.13,p:0.06},{id:8,n:Invert,i:/res/img/i/invert.png,m:0.02,p:0.06},{id:9,n:Mystery,i:/res/img/i/unknown.png,m:0,p:0.3},{id:10,n:Win,i:/res/img/i/win.png,m:0,p:0},{id:11,n:B1,i:/res/img/i/dot.png,m:0.04,p:0.03},{id:12,n:Big2,i:/res/img/i/big.png,m:0,p:0}],this[item]= null,this[key]= 87,this[origBBS]= null,this[P1]= 200,this[fs]=  false,this[f]= null,this[isPriv]=  false,this[active]= [],this[preload]= [];
var _0x976ex3= new Date;
this[dom]= parseInt(_0x976ex3[getDate]())}function InvertAnimator(_0x976ex2,_0x976ex3){this[items]= _0x976ex2,this[g]= _0x976ex3,this[matrix]= _0x976ex3[matrix],this[tmpMatrix]= copyMatrix(_0x976ex3[matrix]),this[items][invertMatrix](),this[PER_ROUND]= 0.1,this[hadGhost]= this[g][ghostEnabled],this[i]= 0,this[d]= 0,this[g][ghostEnabled]=  false,this[g][redraw]()}function PoisonAnimator(_0x976ex2,_0x976ex3){this[items]= _0x976ex2,this[g]= _0x976ex3,this[matrix]= _0x976ex3[matrix],this[PER_ROUND]= 0.06,this[hadGhost]= this[g][ghostEnabled],this[i]= 0,this[d]= 0,this[g][setCurrentPieceToDefaultPos](),this[g][updateGhostPiece](true),this[g][ghostEnabled]=  false}function CompressAnimator(_0x976ex2,_0x976ex3){this[items]= _0x976ex2,this[g]= _0x976ex3,this[matrix]= _0x976ex3[matrix],this[PER_ROUND]= 0.06,this[hadGhost]= this[g][ghostEnabled],this[i]= 0,this[d]= 0,this[g][setCurrentPieceToDefaultPos](),this[g][updateGhostPiece](true),this[g][ghostEnabled]=  false}function WindAnimator(_0x976ex2,_0x976ex3,_0x976ex4){this[items]= _0x976ex2,this[g]= _0x976ex3,this[i]= _0x976ex4,this[matrix]= _0x976ex3[matrix],this[PER_ROUND]= 0.06,this[d]= 0,this[hadGhost]= this[g][ghostEnabled],this[g][setCurrentPieceToDefaultPos](),this[g][updateGhostPiece](true),this[g][ghostEnabled]=  false}function ItemActivation(_0x976ex2){this[id]= _0x976ex2,this[hd]= 0}function MapManager(_0x976ex2){this[p]= _0x976ex2,this[onMapReady]= null,this[mapId]= null,this[matrix]= [],this[emptyMatrix](),this[mapData]= {},this[lowestMapLine]= null,this[mapLines]= [],this[FINISH_STANDARD]= 0,this[FINISH_BY_PC]= 1,this[STATE_NEW]= 0,this[STATE_PUBLISHED]= 1}function ModeManager(_0x976ex2){this[p]= _0x976ex2,this[onReady]= null,this[modeId]= null,this[modeData]= {},this[lowestMapLine]= null,this[mapLines]= [],this[goalInfo]= document[getElementsByClassName](goalInfo)[0],this[modeBtns]= document[getElementsByClassName](modeBtns)[0],this[timesPlayed]= {},this[soundCache]= {},this[skinCache]= {},this[startingTimeout]= null,this[unpauseHandler]= null,this[nextModeHandler]= null,this[components]= {},this[eventTriggers]= {},this[timeTriggers]= [],this[initTrigger]=  new ModeTrigger,this[initTriggerFirst]=  new ModeTrigger,this[afterTrigger]=  new ModeTrigger,this[totalRuns]= 0,this[totalTriggers]= 0,this[usedTriggers]= 0,this[fail]=  false,this[isFinished]=  false,this[noQueueRefill]=  false,this[skinWasChanged]=  false,this[lastAttackGarbageColumn]=  -1,this[FINISH_STANDARD]= 0,this[FINISH_BY_PC]= 1,this[STATE_NEW]= 0,this[STATE_LOCKED]= 1,this[STATE_PUBLISHED]= 2,this[STATE_PUBLISHED_UNLISTED]= 3,this[BLOCK]= 3,this[LINE]= 4,this[LINECLEAR]= 5,this[statID]= {blocks:1,finesse:2,kpp:3,sent:4,tspins:5,combo:6,PC:7,TSD:8,time:9,APM:10,PPS:11,VS:12,garbage:13,hold:14,B2B:15,wasted:16,lines:17,maxCombo:18,single:19,double:20,triple:21,jstris:22,score:23},this[blockNames]= {I:[0,0],O:[0,1],T:[0,2],L:[0,3],J:[0,4],S:[0,5],Z:[0,6],BI:[2,0],BO:[2,1],BT:[2,2],BL:[2,3],BJ:[2,4],BS:[2,5],BZ:[2,6],I5:[4,0],V5:[4,1],T5:[4,2],U5:[4,3],W5:[4,4],X5:[4,5],J5:[4,6],L5:[4,7],S5:[4,8],Z5:[4,9],TL:[4,10],TJ:[4,11],OZ:[4,12],OS:[4,13],TS:[4,14],TZ:[4,15],LL:[4,16],JJ:[4,17],I1:[5,0],I2:[5,1],I3:[5,2],L3:[5,3],"\x4F\x2B":[8,1],INV:[9,0],NONE:[9,0]},createjs[Sound][addEventListener](fileload,this[soundLoaded][bind](this))}function ModeCommand(_0x976ex2){for(var _0x976ex3 in this[enabled]=  true,_0x976ex2){this[_0x976ex3]= _0x976ex2[_0x976ex3]}}function ModeTrigger(){this[enabled]=  true,this[cmds]= [],this[gamedata]= null}
function ReplayController(_0x976ex2){if(this[g]= _0x976ex2,this[playSpeed]= 1,this[clock]= 0,this[pauseReplay](false),this[listeners]= {},this[debug]= getParameterByName(debug),this[debug]){for(var _0x976ex3=0;
_0x976ex3< this[g][length];
_0x976ex3++){this[g][debug]= parseInt(this[debug])}};
this[startDownloaders]()}function ReplayDownloader(_0x976ex2,_0x976ex3,_0x976ex4,_0x976ex5){this[id]= _0x976ex2,this[elemID]= _0x976ex4,this[elem]= document[getElementById](this[elemID]),this[live]= _0x976ex3,this[isDownloading]=  false,this[controller]= void(0)!== _0x976ex5?_0x976ex5:null,_0x976ex2&& (this[download](_0x976ex2,_0x976ex3),this[spin]= document[createElement](img),this[spin][classList][add](repLoading),this[spin][src]= /res/svg/spinWhite.svg,insertNodeAfter(this[spin],this[elem]))}function insertNodeAfter(_0x976ex2,_0x976ex3){_0x976ex3[parentNode][insertBefore](_0x976ex2,_0x976ex3[nextSibling])}function Replayer(_0x976ex2){this[v]= _0x976ex2,this[v][g]= this,this[temporaryBlockSet]= null,this[reachedEnd]=  false,this[pmode]= 0,this[subMode]= 0,this[activeBlock]=  new Block(0),this[ghostPiece]= {pos:{x:0,y:0}},this[timer]= 0,this[frames]= 0,this[gameStep]= 0.9,this[softDrop]=  false,this[softDropId]= 2,this[holdPressed]=  false,this[holdUsedAlready]=  false,this[redBar]= 0,this[solidHeight]= 0,this[solidToAdd]= 0,this[solidInterval]= void(0),this[blockInHold]= null,this[ghostEnabled]=  true,this[placedBlocks]= 0,this[finesse]= 0,this[used180]= 0,this[totalFinesse]= 0,this[totalKeyPresses]= 0,this[finFaults]= null,this[scoreStamps]= null,this[linesAttack]= [0,0,1,2,4,4,6,2,0,10,1],this[comboAttack]= [0,0,1,1,1,2,2,3,3,4,4,4,5],this[timeRemaining]= 120,this[linesRemaining]= 0,this[RNG]= alea(this[timestamp]()),this[blockRNG]= this[RNG],this[r]= {},this[actions]= [],this[debug]= 0,this[Analytics]= null,this[Scoring]=  new Scoring,GameCore[call](this,false),this[data]= null,this[byte]= 0,this[bitpos]= 0,this[timeout]= null,this[playingLive]=  false,this[frameId]= 0,undefined!=  typeof i18n&& (this[GameStats]=  new SimpleStatsManager(_0x976ex2))}SoundQueue[prototype][add]= function(_0x976ex2,_0x976ex3){let _0x976ex4={id:_0x976ex2,vol:_0x976ex3};
null=== this[playingSound]?this._playTask(_0x976ex4):this[queue][push](_0x976ex4)},SoundQueue[prototype][stop]= function(){this[queue]= [],this[playingSound]&& (this[playingSound][stop](),this[playingSound]= null)},SoundQueue[prototype][_playTask]= function(_0x976ex2){var _0x976ex3=createjs[Sound][play](_0x976ex2[id]);
_0x976ex3[volume]= _0x976ex2[vol],_0x976ex3[on](complete,this[_next][bind](this)),_0x976ex3[on](failed,this[_next][bind](this)),this[playingSound]= _0x976ex3},SoundQueue[prototype][_next]= function(){if(this[queue][length]){let _0x976ex2=this[queue][shift]();
this._playTask(_0x976ex2)}else {this[playingSound]= null}},Items[prototype][avail]= function(){return false},Items[prototype][loadConf]= function(_0x976ex2){this[P1]= _0x976ex2[P1];
var _0x976ex3=this;
_0x976ex2[def][forEach]((function(_0x976ex2){_0x976ex2[m]&& (_0x976ex3[itmDef][_0x976ex2[id]][m]= _0x976ex2[m]),_0x976ex2[p]&& (_0x976ex3[itmDef][_0x976ex2[id]][p]= _0x976ex2[p])}))},Items[prototype][autoSelectKey]= function(){let _0x976ex2=0,_0x976ex3=[[87,w],[86,v],[88,x],[90,z],[67,c],[65,a],[66,b],[68,d],[69,e],[70,f],[71,g]],_0x976ex4=this[p][Settings][controls];
for(let _0x976ex5=0;
_0x976ex5< _0x976ex3[length];
_0x976ex5++){let _0x976ex9=_0x976ex3[_0x976ex5];
if(!_0x976ex4[includes](_0x976ex9[0])){_0x976ex2= _0x976ex5;
break}};
let _0x976ex5=_0x976ex3[_0x976ex2][0],_0x976ex9=<b>+ _0x976ex3[_0x976ex2][1][toUpperCase]()+ </b> to use;
this[key]= _0x976ex5,this[itmTxt][innerHTML]= _0x976ex9},Items[prototype][genItem]= function(){var _0x976ex2=this[p][random](0,this[P1]- 1);
if(this[avail]()){return 0=== _0x976ex2|| this[fs]?(this[fs]=  false,this[p][random](1,4)):0}},Items[prototype][genItemType]= function(){if(this[f]){let _0x976ex2=this[itmDef][this[f]];
return this[f]= null,_0x976ex2};
return this[resolveProb](p)},Items[prototype][onReset]= function(){this[avail]()&& this[preloadIcons](),this[origBBS]= 0;
var _0x976ex2=this;
this[active]&& this[active][forEach]((function(_0x976ex3){_0x976ex2[revert](_0x976ex3[id])})),this[active]= [],this[autoSelectKey](),this[reset]()},Items[prototype][reset]= function(){this[item]= null,hideElem(this[itmBox])},Items[prototype][pickup]= function(){showElem(this[itmBox]);
let _0x976ex2=this[genItemType]();
this[item]= _0x976ex2[id],this[p][playSound](pickup),9=== this[item]?(this[preloadIcons](),this[itmIcn][style][backgroundImage]= null,this[itmIcn][classList][add](mysteryItem),this[itmIcn][classList][add](fullSize)):(this[itmIcn][style][backgroundImage]= url(+ _0x976ex2[i]+ ),this[itmIcn][classList][remove](mysteryItem),this[itmIcn][classList][remove](fullSize))},Items[prototype][onHardDrop]= function(){let _0x976ex2=this[active][length];
for(;
_0x976ex2--;
){let _0x976ex3=this[active][_0x976ex2];
_0x976ex3[hd]--,_0x976ex3[hd]<= 0&& (this[active][splice](_0x976ex2,1),this[revert](_0x976ex3[id]))}},Items[prototype][use]= function(_0x976ex2){_0x976ex2= _0x976ex2|| this[p][timestamp]();
let _0x976ex3=this[item];
this[item]&& (this[item]= null,9!== _0x976ex3&& this[reset](),this[p][playSound](item),this[applyItem](_0x976ex3,_0x976ex2))},Items[prototype][applyItem]= function(_0x976ex2,_0x976ex3){if(1=== _0x976ex2){this[changeRandomizer](11,true,_0x976ex3);
let _0x976ex4= new ItemActivation(_0x976ex2);
_0x976ex4[hd]= 7,this[active][push](_0x976ex4)}else {if(2=== _0x976ex2){this[changeMatrix](1)}else {if(3=== _0x976ex2){this[changeMatrix](2)}else {if(4=== _0x976ex2){this[changeMatrix](3);
let _0x976ex3= new ItemActivation(_0x976ex2);
_0x976ex3[hd]= this[p][random](5,11),this[active][push](_0x976ex3)}else {if(5=== _0x976ex2){this[p][play]=  false,this[p][animator]=  new PoisonAnimator(this,this[p])}else {if(6=== _0x976ex2){this[changeBBS](4,_0x976ex3);
let _0x976ex4= new ItemActivation(_0x976ex2);
_0x976ex4[hd]= 5,this[active][push](_0x976ex4)}else {if(7=== _0x976ex2){var _0x976ex4= new ReplayAction(this[p][Replay][Action].AUX,_0x976ex3);
_0x976ex4[d]= [this[p][Replay][AUX][BLOCK_SET],0,2],this[p][Replay][add](_0x976ex4),this[p][temporaryBlockSet]= 2}else {if(8=== _0x976ex2){this[changeMatrix](4)}else {if(9=== _0x976ex2){this[mysteryItem](_0x976ex3)}else {if(10=== _0x976ex2){this[p][Caption][loading](Instant win,2)}else {if(11=== _0x976ex2){this[changeRandomizer](12,true,_0x976ex3);
let _0x976ex4= new ItemActivation(_0x976ex2);
_0x976ex4[hd]= this[p][random](7,28),this[active][push](_0x976ex4)}else {if(12=== _0x976ex2){this[changeBBS](2,_0x976ex3);
let _0x976ex4= new ItemActivation(_0x976ex2);
_0x976ex4[hd]= this[p][random](5,27),this[active][push](_0x976ex4)}}}}}}}}}}}}},Items[prototype][preloadIcons]= function(){if(!this[preload][length]){for(var _0x976ex2 of this[itmDef]){if(_0x976ex2){var _0x976ex3= new Image;
_0x976ex3[src]= _0x976ex2[i],this[preload][push](_0x976ex3)}}}},Items[prototype][resolveProb]= function(_0x976ex2){for(var _0x976ex3=Math[random](),_0x976ex4=0,_0x976ex5=0;
_0x976ex5< this[itmDef][length];
_0x976ex5++){let _0x976ex9=this[itmDef][_0x976ex5];
if(_0x976ex9&& _0x976ex3< (_0x976ex4+= _0x976ex9[_0x976ex2])){return _0x976ex9}};
return results[this[itmDef][length]- 1]},Items[prototype][resolveMystery]= function(){return this[resolveProb](m)},Items[prototype][mysteryItem]= function(_0x976ex2){let _0x976ex3=this[resolveMystery]()[id],_0x976ex4=this[itmDef][_0x976ex3];
this[itmIcn][style][backgroundImage]= url(+ _0x976ex4[i]+ ),this[applyItem](_0x976ex3,_0x976ex2),this[itmIcn][classList][remove](fullSize);
var _0x976ex5=this;
setTimeout((function(){null=== _0x976ex5[item]&& hideElem(_0x976ex5[itmBox])}),1500)},Items[prototype][changeBBS]= function(_0x976ex2,_0x976ex3){_0x976ex3= _0x976ex3|| this[p][timestamp]();
var _0x976ex4= new ReplayAction(this[p][Replay][Action].AUX,_0x976ex3);
_0x976ex4[d]= [this[p][Replay][AUX][BLOCK_SET],1,_0x976ex2],this[p][Replay][add](_0x976ex4),this[p][R][baseBlockSet]= _0x976ex2,this[changeRandomizer](this[p][R][rnd],true,_0x976ex3)},Items[prototype][changeMatrix]= function(_0x976ex2){if(1=== _0x976ex2){let _0x976ex2=this[p][random](10,31);
this[p][play]=  false,this[p][animator]=  new WindAnimator(this,this[p],_0x976ex2),(_0x976ex3=  new ReplayAction(this[p][Replay][Action].AUX,this[p][timestamp]()))[d]= [this[p][Replay][AUX][MATRIX_MOD],0,_0x976ex2],this[p][Replay][add](_0x976ex3)}else {if(2=== _0x976ex2){this[p][play]=  false,this[p][animator]=  new CompressAnimator(this,this[p]),(_0x976ex3=  new ReplayAction(this[p][Replay][Action].AUX,this[p][timestamp]()))[d]= [this[p][Replay][AUX][MATRIX_MOD],1,0],this[p][Replay][add](_0x976ex3)}else {if(3=== _0x976ex2){(_0x976ex3=  new ReplayAction(this[p][Replay][Action].AUX,this[p][timestamp]()))[d]= [this[p][Replay][AUX][MATRIX_MOD],2,0],this[p][Replay][add](_0x976ex3),this[loadFourWide](),this[p][redraw]()}else {if(4=== _0x976ex2){var _0x976ex3;
(_0x976ex3=  new ReplayAction(this[p][Replay][Action].AUX,this[p][timestamp]()))[d]= [this[p][Replay][AUX][MATRIX_MOD],3,0],this[p][Replay][add](_0x976ex3),this[p][play]=  false,this[p][animator]=  new InvertAnimator(this,this[p]),this[p][setCurrentPieceToDefaultPos](),this[p][updateGhostPiece](true)}}}}},Items[prototype][wipeDeadline]= function(){for(var _0x976ex2=0;
_0x976ex2< 10;
++_0x976ex2){this[p][deadline][_0x976ex2]= 0}},Items[prototype][invertMatrix]= function(){this[wipeDeadline]();
for(var _0x976ex2=0;
_0x976ex2< 2;
_0x976ex2++){if(9!== this[p][matrix][_0x976ex2][0]){for(var _0x976ex3=this[p][matrix][_0x976ex2],_0x976ex4=0;
_0x976ex4< 10;
++_0x976ex4){_0x976ex3[_0x976ex4]= 0}}};
for(_0x976ex2= 2;
_0x976ex2< this[p][matrix][length];
_0x976ex2++){if(9!== this[p][matrix][_0x976ex2][0]){_0x976ex3= this[p][matrix][_0x976ex2];
var _0x976ex5=0;
for(_0x976ex4= 0;
_0x976ex4< 10;
++_0x976ex4){_0x976ex3[_0x976ex4]?_0x976ex3[_0x976ex4]= 0:0=== _0x976ex3[_0x976ex4]&& (_0x976ex3[_0x976ex4]= 8,_0x976ex5++)};
10=== _0x976ex5&& (_0x976ex3[9]= 0)}}},Items[prototype][loadFourWide]= function(_0x976ex2){_0x976ex2|| (_0x976ex2= this[p][MapManager]);
var _0x976ex3=0;
_0x976ex2[parseMatrix](VmAAAiJUYAACIlRAAAMyUUAAAzIRcAAGZhdwAAEWEXAABxFREAAHdVIgAAcVUiAAARVSIAABdWIgAAd3ZmAABmYzUAAGZjNQAAYzIlAABjNSUAACIlIQAAJEURRABEJRRAACIg==),this[wipeDeadline]();
let _0x976ex4=0;
for(var _0x976ex5=_0x976ex3= this[p][matrix][length]- 1;
_0x976ex5>= 0;
--_0x976ex5,--_0x976ex3){9!== this[p][matrix][_0x976ex5][0]?this[p][matrix][_0x976ex5]= _0x976ex2[matrix][_0x976ex3+ _0x976ex4]:_0x976ex4++};
this[p][setCurrentPieceToDefaultPos](),this[p][updateGhostPiece](true),this[p][comboCounter]=  -1},Items[prototype][compressMatrix]= function(_0x976ex2){function _0x976ex3(_0x976ex2,_0x976ex3){if(!_0x976ex3[_0x976ex2- 1]){for(var _0x976ex4=_0x976ex2;
_0x976ex4< 10;
++_0x976ex4){_0x976ex3[_0x976ex4- 1]= _0x976ex3[_0x976ex4]};
_0x976ex3[9]= 0}}this[wipeDeadline]();
for(var _0x976ex4=1;
_0x976ex4<= _0x976ex2;
_0x976ex4++){for(var _0x976ex5=0;
_0x976ex5< 20;
++_0x976ex5){9!== this[p][matrix][_0x976ex5][0]&& _0x976ex3(_0x976ex4,this[p][matrix][_0x976ex5])}}},Items[prototype][tfTornado]= function(_0x976ex2){var _0x976ex3=copyMatrix(this[p][matrix]);
this[wipeDeadline]();
for(var _0x976ex4=0;
_0x976ex4< 20;
++_0x976ex4){if(9=== _0x976ex3[_0x976ex4][0]){continue};
let _0x976ex9=(_0x976ex4% 2== 0?1:-1)* _0x976ex2;
for(var _0x976ex5=0;
_0x976ex5< 10;
++_0x976ex5){let _0x976ex2=(_0x976ex5+ _0x976ex9)% 10;
for(;
_0x976ex2< 0;
){_0x976ex2+= 10};
this[p][matrix][_0x976ex4][_0x976ex5]= _0x976ex3[_0x976ex4][_0x976ex2]}}},Items[prototype][changeRandomizer]= function(_0x976ex2,_0x976ex3,_0x976ex4){let _0x976ex5=_0x976ex4|| this[p][timestamp](),_0x976ex9=_0x976ex3?1:0;
this[p][randomizer]= this[p][randomizerFactory](_0x976ex2),_0x976ex3&& (this[p][generateQueue](),this[p][updateQueueBox]());
var _0x976ex21= new ReplayAction(this[p][Replay][Action].AUX,_0x976ex5);
_0x976ex21[d]= [this[p][Replay][AUX][RANDOMIZER],_0x976ex9,_0x976ex2],this[p][Replay][add](_0x976ex21)},Items[prototype][revert]= function(_0x976ex2){if(1=== _0x976ex2){this[changeRandomizer](this[p][R][rnd],false)}else {if(4=== _0x976ex2){let _0x976ex2=this[item];
this[item]= 2,this[use](),this[item]= _0x976ex2,this[p][hdAbort]=  true}else {6=== _0x976ex2?this[changeBBS](this[origBBS]):11=== _0x976ex2?this[changeRandomizer](this[p][R][rnd],false):12=== _0x976ex2&& this[changeBBS](this[origBBS])}}},InvertAnimator[prototype][render]= function(_0x976ex2){for(this[d]+= _0x976ex2;
this[d]> this[PER_ROUND];
){this[d]-= this[PER_ROUND],this[iter]()}},InvertAnimator[prototype][iter]= function(){this[i]++;
var _0x976ex2=this[tmpMatrix];
this[tmpMatrix]= this[g][matrix],this[g][matrix]= _0x976ex2,2!== this[i]?this[g][redraw]():this[finished]()},
InvertAnimator[prototype][finished]= function() {
    this[g][animator]= null,
    this[g][gameEnded]|| (this[g][play]=  true),
    this[g][redrawBlocked]=  false,
    this[g][ghostEnabled]= this[hadGhost],
    this[g][updateGhostPiece](true),
    this[g][redraw]()
},
PoisonAnimator[prototype][render]= function(_0x976ex2){for(this[d]+= _0x976ex2;
this[d]> this[PER_ROUND];
){this[d]-= this[PER_ROUND],this[iter]()}},PoisonAnimator[prototype][iter]= function(){this[i]++,this[g][play]=  true,this[g][hardDrop](),this[g][play]|| this[finished](),this[g][play]=  false},PoisonAnimator[prototype][finished]= function(){this[g][animator]= null,this[g][gameEnded]|| (this[g][play]=  true),this[g][redrawBlocked]=  false,this[g][ghostEnabled]= this[hadGhost],this[g][updateGhostPiece](true),this[g][redraw]()},CompressAnimator[prototype][render]= function(_0x976ex2){for(this[d]+= _0x976ex2;
this[d]> this[PER_ROUND];
){this[d]-= this[PER_ROUND],this[iter]()}},CompressAnimator[prototype][iter]= function(){this[i]++,this[items][compressMatrix](this[i]),this[g][redraw](),this[i]>= 10&& this[finished]()},CompressAnimator[prototype][finished]= function(){this[g][animator]= null,this[g][gameEnded]|| (this[g][play]=  true),this[g][redrawBlocked]=  false,this[g][ghostEnabled]= this[hadGhost],this[g][updateGhostPiece](true),this[g][redraw]()},WindAnimator[prototype][render]= function(_0x976ex2){for(this[d]+= _0x976ex2;
this[d]> this[PER_ROUND];
){this[d]-= this[PER_ROUND],this[iter]()}},WindAnimator[prototype][iter]= function(){this[items][tfTornado](1),this[g][redraw](),this[i]--,this[i]<= 0&& this[finished]()},WindAnimator[prototype][finished]= function(){this[g][animator]= null,this[g][gameEnded]|| (this[g][play]=  true),this[g][redrawBlocked]=  false,this[g][ghostEnabled]= this[hadGhost],this[g][updateGhostPiece](true),this[g][redraw]()},MapManager[prototype][emptyMatrix]= function(){for(var _0x976ex2=0;
_0x976ex2< 20;
++_0x976ex2){this[matrix][_0x976ex2]= [0,0,0,0,0,0,0,0,0,0]}},MapManager[prototype][mapFetchError]= function(_0x976ex2){alert(This map could not be loaded!
         + _0x976ex2),
        this[p][startPractice](2, false)
    }, MapManager[prototype][parseMatrix] = function (_0x976ex2) {
        for (var _0x976ex3 = base64ToBinary(_0x976ex2), _0x976ex4 = 0;
 _0x976ex4 < _0x976ex3[length];
 _0x976ex4++) {
            var _0x976ex5 = Math[floor](_0x976ex4 / 5),
            _0x976ex9 = 2 * (_0x976ex4 - 5 * _0x976ex5);

            this[matrix][_0x976ex5][_0x976ex9] = _0x976ex3[_0x976ex4] >>> 4,
            this[matrix][_0x976ex5][_0x976ex9 + 1] = 15 & _0x976ex3[_0x976ex4]
        }
    }, MapManager[prototype][lineCleared] = function (_0x976ex2) {
        for (var _0x976ex3 = null, _0x976ex4 = 0;
 _0x976ex4 < this[mapLines][length];
 _0x976ex4++) {
            this[mapLines][_0x976ex4] === _0x976ex2 ? _0x976ex3 = _0x976ex4 : this[mapLines][_0x976ex4] < _0x976ex2 && ++this[mapLines][_0x976ex4]
        };

        null !== _0x976ex3 && this[mapLines][splice](_0x976ex3, 1)
    }, MapManager[prototype][getLowestMapLine] = function (_0x976ex2) {
        this[mapLines] = [];

        for (var _0x976ex3 = 19;
 _0x976ex3 >= 0;
 --_0x976ex3) {
            var _0x976ex4 = this[matrix][_0x976ex3][reduce](((_0x976ex2, _0x976ex3) => {
                        return _0x976ex2 + _0x976ex3
                    }), 0);

            _0x976ex4 > 0 && (this[lowestMapLine] = _0x976ex3),
            _0x976ex4 > 0 && this[mapLines][push](_0x976ex3)
        }
    }, MapManager[prototype][parseMapData] = function () {
        this[parseMatrix](this[mapData][data]),
        this[getLowestMapLine](),
        this[onMapReady]()
    }, MapManager[prototype][loadMap] = function () {
        if (this[mapId] !== this[mapData][id] || this[mapData][state] !== this[STATE_PUBLISHED]) {
            var _0x976ex2 = new XMLHttpRequest,
            _0x976ex3 = /maps/api /  + this[mapId];

            _0x976ex2[timeout] = 5e3,
            _0x976ex2[open](GET, _0x976ex3, true),
            _0x976ex2[setRequestHeader](X - Requested - With, XMLHttpRequest),
            _0x976ex2[setRequestHeader](Content - type, application / x - www - form - urlencoded);

            try {
                _0x976ex2[send]()
            } catch (_0x976ex2) {
                this[mapFetchError](_0x976ex2[message])
            };

            var _0x976ex4 = this;

            _0x976ex2[ontimeout] = function () {
                _0x976ex4[mapFetchError](REQUEST_TIMEOUT)
            },
            _0x976ex2[onerror] = _0x976ex2[onabort] = function () {
                _0x976ex4[mapFetchError](REQUEST_FAIL)
            },
            _0x976ex2[onload] = function () {
                200 === _0x976ex2[status] ? (_0x976ex4[mapData] = JSON.parse(_0x976ex2[responseText]), _0x976ex4[parseMapData]()) : _0x976ex4[mapFetchError](_0x976ex2[status] +  -  + _0x976ex2[statusText])
            }
        } else {
            this[parseMapData]()
        }
    }, MapManager[prototype][prepare] = function (_0x976ex2) {
        var _0x976ex3 = _0x976ex2 || parseInt(getParameterByName(map));

        !isNaN(_0x976ex3) && _0x976ex3 ? this[mapId] = _0x976ex3 : alert(map not specified),
        this[loadMap]()
    }, ModeCommand[prototype][run] = function (_0x976ex2) {
        this[enabled] && _0x976ex2[execCommand](this)
    }, ModeTrigger[prototype][push] = function (_0x976ex2) {
        this[cmds][push](_0x976ex2)
    }, ModeTrigger[prototype][run] = function (_0x976ex2) {
        this[enabled] && _0x976ex2[execCommands](this)
    }, ModeManager[prototype][on] = function (_0x976ex2, _0x976ex3) {
        let _0x976ex4 = null;

        try {
            _0x976ex4 = this[eventTriggers][_0x976ex2 + 100]
        } catch (_0x976ex2) {};

        _0x976ex4 && (this[execCommands](_0x976ex4), _0x976ex4 = null);

        try {
            if (_0x976ex4 = this[eventTriggers][_0x976ex2][_0x976ex3], !_0x976ex4) {
                return
            }
        } catch (_0x976ex2) {
            return
        };

        this[execCommands](_0x976ex4)
    }, ModeManager[prototype][clearPause] = function () {
        this[startingTimeout] && (clearTimeout(this[startingTimeout]), this[startingTimeout] = null)
    }, ModeManager[prototype][clearNextModeHandler] = function () {
        this[nextModeHandler] && (document[removeEventListener](keydown, this[nextModeHandler], true), this[nextModeHandler] = null)
    }, ModeManager[prototype][clearUnPauseHandler] = function () {
        this[unpauseHandler] && (document[removeEventListener](keydown, this[unpauseHandler]), this[unpauseHandler] = null)
    }, ModeManager[prototype][resetUI] = function () {
        hideElem(this[goalInfo]),
        this[clearPause](),
        this[clearUnPauseHandler](),
        this[p][redrawBlocked] = false,
        this[modeBtns][innerHTML] =
    }, ModeManager[prototype][getNamedStatVal] = function (_0x976ex2, _0x976ex3) {
        if (_0x976ex3 || (_0x976ex3 = this[p][gamedata]), (string == typeof _0x976ex2 || _0x976ex2 instanceof String) && !(_0x976ex2 = this[statID][_0x976ex2])) {
            return null
        };

        switch (_0x976ex2) {
        case 1:
            return [this[p][placedBlocks], Blocks];

        case 2:
            return [this[p][totalFinesse], Finesse];

        case 3:
            return [this[p][getKPP](), KPP];

        case 4:
            return [_0x976ex3[linesSent], Sent];

        case 5:
            return [_0x976ex3[tspins], Tspins];

        case 6:
            return [this[p][comboCounter], Combo];

        case 7:
            return [_0x976ex3[PCs], PCs];

        case 8:
            return [_0x976ex3[TSD], TSDs];

        case 9:
            return [this[p][clock], Time];

        case 10:
            return [this[p][getAPM](), APM];

        case 11:
            return [this[p][getPPS](), PPS];

        case 12:
            return [this[p][getVS](), VS];

        case 13:
            return [_0x976ex3[garbageCleared], Garbage cleared];

        case 14:
            return [_0x976ex3[holds], Holds];

        case 15:
            return [_0x976ex3[B2B], B2B];

        case 16:
            return [_0x976ex3[wasted], WastedTs];

        case 17:
            return [_0x976ex3[lines], Lines];

        case 18:
            return [_0x976ex3[maxCombo], MaxCombo];

        case 19:
            return [_0x976ex3[singles], Singles];

        case 20:
            return [_0x976ex3[doubles], Doubles];

        case 21:
            return [_0x976ex3[triples], Triples];

        case 22:
            return [_0x976ex3[tetrises], Jstrises];

        case 23:
            return [_0x976ex3[score], Score];

        default:
            return [0,  ? ]
        }
    }, ModeManager[prototype][initialExecCommands] = function (_0x976ex2) {
        this[usedTriggers]++;

        let _0x976ex3 = this[initTrigger][cmds],
        _0x976ex4 = null;

        1 == this[timesPlayed][this[modeData][id]] && this[initTriggerFirst][cmds] && (_0x976ex3 = _0x976ex3[concat](this[initTriggerFirst][cmds])),
        this[p][clearMatrix]();

        for (const _0x976ex2 of _0x976ex3) {
            _0x976ex2[enabled] && (pause == _0x976ex2[field_type] ? _0x976ex4 = _0x976ex2 : this[execCommand](_0x976ex2))
        };

        if (this[isClearMatrix]() || this[p][redrawMatrix](), null === _0x976ex4) {
            _0x976ex2()
        } else {
            this[p][Caption][paused]({
                sec: _0x976ex4[opts][len],
                skip: _0x976ex4[opts][skip]
            }),
            _0x976ex4[opts][skip] && (this[clearUnPauseHandler](), this[unpauseHandler] = (_0x976ex3) => {
                this[clearPause](),
                this[clearUnPauseHandler](),
                _0x976ex2()
            }, document[addEventListener](keydown, this[unpauseHandler]));

            let _0x976ex3 = 1e3 * parseFloat(_0x976ex4[opts][len]);

            this[startingTimeout] = setTimeout((() => {
                        this[clearUnPauseHandler](),
                        _0x976ex2(),
                        this[startingTimeout] = null
                    }), _0x976ex3)
        }
    }, ModeManager[prototype][execCommands] = function (_0x976ex2) {
        if (Array[isArray](_0x976ex2)) {
            for (const _0x976ex3 of _0x976ex2) {
                this[execCommands](_0x976ex3)
            };

            return
        };

        if (this[usedTriggers]++, !_0x976ex2[enabled]) {
            return
        };

        let _0x976ex3 = _0x976ex2[cmds];

        for (const _0x976ex2 of _0x976ex3) {
            this[execCommand](_0x976ex2)
        };

        0 == this[isFinished] && !this[fail] && this[totalCond] > 0 && this[totalCond] === this[usedCond] && this[stageCompleted]()
    }, ModeManager[prototype][sendForfeit] = function () {
        if (this[modeData][hasOwnProperty](l) && this[modeData][l][r]) {
            let _0x976ex2 = {
                t: 34,
                f: true,
                i: this[modeData][id]
            };

            this[p][Live][safeSend](JSON.stringify(_0x976ex2))
        }
    }, ModeManager[prototype][skipToNext] = function () {
        if (this[modeData][hasOwnProperty](next)) {
            if (null === this[modeData][next]) {
                this[p][Caption][modeComplete](1);

                let _0x976ex2 = this[modeBtns][getElementsByClassName](skip - btn)[0];

                _0x976ex2 && hideElem(_0x976ex2)
            } else {
                this[sendForfeit](),
                this[p][startPractice](9, false, {
                    mapId: this[modeData][next]
                })
            }
        }
    }, ModeManager[prototype][stageCompleted] = function () {
        if (this[isFinished] || this[fail]) {
            return
        };

        this[isFinished] = true;

        let _0x976ex2 = null === this[modeData][next];

        if (this[execCommands](this[afterTrigger]), this[p][practiceModeCompleted](), this[saveScore](true), _0x976ex2 || (this[p][Caption][modeComplete](), createjs[Sound][stop](), this[p][playSound](success)), this[modeData][hasOwnProperty](next)) {
            if (null === this[modeData][next]) {
                _0x976ex2 = true,
                this[p][Caption][modeComplete](1),
                createjs[Sound][stop](),
                createjs[Sound][play](clip - congratz),
                this[p][Live][showInChat](Info, Result: Total starts:  + this[totalRuns])
            } else {
                let _0x976ex2 = this[modeData][next];

                this[p][Caption][button]({
                    handler: () => {
                        this[p][startPractice](9, false, {
                            mapId: _0x976ex2
                        })
                    }
                }),
                this[clearNextModeHandler](),
                this[nextModeHandler] = (_0x976ex3) => {
                    if (!this[p][play] && 0 === this[p][focusState] && (_0x976ex3[keyCode] === this[p][Settings][hd] || 13 === _0x976ex3[keyCode] || 32 === _0x976ex3[keyCode])) {
                        _0x976ex3[stopImmediatePropagation]();

                        let _0x976ex4 = this[p][Caption];

                        none != _0x976ex4[captions][_0x976ex4[BUTTON]][style][display] && this[p][startPractice](9, false, {
                            mapId: _0x976ex2
                        }),
                        this[clearNextModeHandler]()
                    }
                },
                document[addEventListener](keydown, this[nextModeHandler], true)
            }
        }
    }, ModeManager[prototype][resolveIdentifier] = function (_0x976ex2) {
        let _0x976ex3 = _0x976ex2[split](., 2);

        if (1 == _0x976ex3[length]) {
            return this[getNamedStatVal](_0x976ex3[0])
        };

        let _0x976ex4 = _0x976ex3[0];

        if (!this[eventTriggers][hasOwnProperty](x + _0x976ex4)) {
            return console.log(Namespace + _0x976ex4 + does not exist!),
            [null, null]
        };

        let _0x976ex5 = this[eventTriggers][x + _0x976ex4][gamedata],
        _0x976ex9 = Object[assign]({}, this[p][gamedata]);

        for (const _0x976ex2 in _0x976ex9) {
            _0x976ex9[_0x976ex2] -= _0x976ex5[_0x976ex2]
        };

        let [o, n] = this[getNamedStatVal](_0x976ex3[1], _0x976ex9);

        return n = _0x976ex4 + . + n,
        [o, n]
    }, ModeManager[prototype][execCommand] = function (_0x976ex2) {
        if (_0x976ex2[enabled]) {
            if (cond == _0x976ex2[field_type]) {
                let _0x976ex3,
                _0x976ex4,
                _0x976ex5 = parseInt(_0x976ex2[opts][check]);

                _0x976ex2[opts][hasOwnProperty](on) || (_0x976ex2[opts][on] = false);

                let _0x976ex9 = parseInt(_0x976ex2[opts][do ]), _0x976ex21 = _0x976ex2[opts][check2], _0x976ex22 = false;

                        if (0 == _0x976ex2[opts][check]) {
                            let _0x976ex2 = _0x976ex21[match](/^((?:[\w]*\.)?[\w]+)([><=]+.*)$/);

                            if (3 != _0x976ex2[length]) {
                                return
                            };

                            let _0x976ex5 = _0x976ex2[1];

                            _0x976ex21 = _0x976ex2[2],
                            [_0x976ex3, _0x976ex4] = this[resolveIdentifier](_0x976ex5)
                        } else {
                            [_0x976ex3, _0x976ex4] = this[getNamedStatVal](_0x976ex5)
                        };

                if (null === _0x976ex3) {
                    return void(console.log(Could not fetch val for expression:  + _0x976ex2[opts][check2]))
                };

        let _0x976ex23, _0x976ex24, _0x976ex25 = 0, _0x976ex26 = ;

for (;
 _0x976ex25 < _0x976ex21[length];
 ) {
    if ( <  != _0x976ex21[_0x976ex25] &&  >  != _0x976ex21[_0x976ex25] &&  =  != _0x976ex21[_0x976ex25]) {
        _0x976ex23 = _0x976ex21[substring](0, _0x976ex25)[trim](),
        _0x976ex24 = _0x976ex21[substring](_0x976ex25, _0x976ex21[length])[trim]();

        break
    };

    ++_0x976ex25
};

if (_0x976ex24 = _0x976ex24[includes](.) || _0x976ex24[includes](, ) ? parseFloat(_0x976ex24) : parseInt(_0x976ex24),  >=  = _0x976ex23 ? (_0x976ex22 = _0x976ex3 > _0x976ex24, _0x976ex26 =  > ) :  <=  = _0x976ex23 ? (_0x976ex22 = _0x976ex3 < _0x976ex24, _0x976ex26 =  < ) :  <=  == _0x976ex23 ||  =  <=  = _0x976ex23 ? (_0x976ex22 = _0x976ex3 <= _0x976ex24, _0x976ex26 =  <= ) :  >=  == _0x976ex23 ||  =>  == _0x976ex23 ? (_0x976ex22 = _0x976ex3 >= _0x976ex24, _0x976ex26 =  >= ) : (_0x976ex22 = _0x976ex3 == _0x976ex24, _0x976ex26 = ), 1 == _0x976ex9) {
    this[usedCond]++;

    let _0x976ex5 = document[createElement](span),
    _0x976ex9 === _0x976ex26 ?= : _0x976ex26;

    if (_0x976ex5[classList][add](_0x976ex22 ? goalOk : goalF), _0x976ex5[textContent] = _0x976ex4 +  :  + _0x976ex3 +  + _0x976ex9 + _0x976ex24, this[goalInfo][appendChild](_0x976ex5), this[goalInfo][childNodes][length] >= 4) {
        let _0x976ex2 = this[goalInfo][firstChild];

        _0x976ex2[classList][add](fadeOutTop),
        setTimeout((() => {
                try {
                    this[goalInfo][removeChild](_0x976ex2)
                } catch (_0x976ex2) {}
            }), 1e3)
    };

    if (_0x976ex2[opts][on] === _0x976ex22) {
        this[fail] = true,
        this[p].GameOver();

        const _0x976ex2 = Required + _0x976ex26 + _0x976ex24 +  + _0x976ex4 + ,
         < br > you had + _0x976ex3 + .;

        this[p][Caption][gameWarning](Failed, _0x976ex2, {
            fade_after: 6e3
        })
    }
} else {
    if (2 == _0x976ex9 && _0x976ex2[opts][do2]) {
        if (_0x976ex2[opts][on] === _0x976ex22) {
            let _0x976ex3 = _0x976ex2[opts][do2];

            this[execById](_0x976ex3)
        }
    } else {
        3 == _0x976ex9 && _0x976ex2[opts][on] === _0x976ex22 && this[stageCompleted]()
    }
}
} else {
    if (rtrig == _0x976ex2[field_type]) {
        let _0x976ex3 = parseInt(_0x976ex2[opts][af]),
        _0x976ex4 = _0x976ex2[opts][when],
        _0x976ex5 = null;

        0 === _0x976ex3 ? (_0x976ex5 = this[registerCommandTrigger](2, this[p][clock] + _0x976ex4), this[timeTriggers][sort](((_0x976ex2, _0x976ex3) => {
                    return _0x976ex2[t] > _0x976ex3[t] ? 1 : -1
                }))) : 1 === _0x976ex3 ? _0x976ex5 = this[registerCommandTrigger](3, this[p][placedBlocks] + _0x976ex4) : 2 === _0x976ex3 && (_0x976ex5 = this[registerCommandTrigger](4, this[p][gamedata][lines] + _0x976ex4)),
        _0x976ex5 && _0x976ex5[push](new ModeCommand({
                field_type: run,
                opts: {
                    id: _0x976ex2[opts][id]
                }
            }))
    } else {
        if (queue == _0x976ex2[field_type]) {
            this[noQueueRefill] = !_0x976ex2[opts][hasOwnProperty](refill) || !_0x976ex2[opts][refill];

            let _0x976ex3 = _0x976ex2[opts][hasOwnProperty](wipe) && true === _0x976ex2[opts][wipe],
            _0x976ex4 = _0x976ex2[opts][hasOwnProperty](last) && true === _0x976ex2[opts][last];

            this[staticQueue] = _0x976ex2[opts][queue],
            this[p][queue] = [],
            this[repeatQueue] = _0x976ex2[opts][hasOwnProperty](repeat) && _0x976ex2[opts][repeat];

            let _0x976ex5 = this[addStaticQueueToQueue](_0x976ex3);

            if (!this[noQueueRefill]) {
                for (this[p][initRandomizer](this[p][R][rnd]);
 !this[noQueueRefill] && this[p][queue][length] < this[p][R][showPreviews];
 ) {
                    this[p][refillQueue]()
                }
            };

            if (_0x976ex4) {
                let _0x976ex2 = new Block(0);

                _0x976ex2[set] = 9,
                this[p][queue][push](_0x976ex2)
            };

            this[p][updateQueueBox](),
            _0x976ex5 && this[p][redrawHoldBox]()
        } else {
            if (map == _0x976ex2[field_type]) {
                let _0x976ex5 = _0x976ex2[opts][map],
                _0x976ex9 = parseInt(_0x976ex2[opts][spawn]);

                this[p][MapManager][onMapReady] = function () {},
                this[p][MapManager][mapData] = {
                    data: _0x976ex5
                },
                this[p][MapManager][parseMapData]();

                let _0x976ex21 = this[p][MapManager][matrix];

                if (isNaN(_0x976ex9) || 1 == _0x976ex9 || 7 == _0x976ex9) {
                    this[p][matrix] = copyMatrix(this[p][MapManager][matrix])
                } else {
                    for (var _0x976ex3 = 0;
 _0x976ex3 < _0x976ex21[length];
 _0x976ex3++) {
                        for (var _0x976ex4 = 0;
 _0x976ex4 < _0x976ex21[_0x976ex3][length];
 _0x976ex4++) {
                            let _0x976ex2 = this[p][matrix][_0x976ex3][_0x976ex4],
                            _0x976ex5 = _0x976ex2;

                            2 == _0x976ex9 || 6 == _0x976ex9 ? _0x976ex5 = this[p][MapManager][matrix][_0x976ex3][_0x976ex4] || _0x976ex2 : 3 == _0x976ex9 ? _0x976ex5 = this[p][MapManager][matrix][_0x976ex3][_0x976ex4] ? 0 : _0x976ex2 : 4 == _0x976ex9 ? _0x976ex5 = _0x976ex2 && this[p][MapManager][matrix][_0x976ex3][_0x976ex4] ? _0x976ex2 : 0 : 5 == _0x976ex9 && (_0x976ex5 = _0x976ex2 && this[p][MapManager][matrix][_0x976ex3][_0x976ex4] ? this[p][MapManager][matrix][_0x976ex3][_0x976ex4] : 0),
                            this[p][matrix][_0x976ex3][_0x976ex4] = _0x976ex5,
                            4 != _0x976ex9 && 5 != _0x976ex9 || (this[p][deadline] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                        }
                    }
                };

                7 != _0x976ex9 ? (this[p][setCurrentPieceToDefaultPos](), this[p][updateGhostPiece](true)) : this[p][checkIntersection](this[p][activeBlock][pos][x], this[p][activeBlock][pos][y], null) ? this[p].GameOver() : this[p][updateGhostPiece](true),
                this[p][redraw]()
            } else {
                if (stats == _0x976ex2[field_type]) {
                    this[p][GameStats][resetAll](),
                    this[p][GameStats][applyShownStats](parseInt(_0x976ex2[opts][stats])),
                    this[p][GameStats][reorder](),
                    this[p][GameStats][render]()
                } else {
                    if (text == _0x976ex2[field_type]) {
                        let _0x976ex3 = parseInt(_0x976ex2[opts][pos]),
                        _0x976ex4 = _0x976ex2[opts][text];

                        _0x976ex4 = this[replaceTextVars](_0x976ex4),
                        _0x976ex4 = stringEscape(_0x976ex4),
                        1 == _0x976ex3 || isNaN(_0x976ex3) ? this[p][Caption][modeInfo](_0x976ex4, {
                            t: 0
                        }) : 2 == _0x976ex3 ? (this[p][gameEnded] ? hideElem(this[p][sprintInfo]) : showElem(this[p][sprintInfo]), this[p][lrem][textContent] = _0x976ex4) : 3 == _0x976ex3 ? this[p][sprintInfoLineContent](_0x976ex4) : 4 == _0x976ex3 && this[p][Caption][modeInfo](_0x976ex4, {
                            t: 1
                        })
                    } else {
                        if (pause == _0x976ex2[field_type]) {
                            _0x976ex2[opts][hasOwnProperty](inp) || (_0x976ex2[opts][inp] = false),
                            this[p][Caption][paused]({
                                sec: _0x976ex2[opts][len],
                                skip: _0x976ex2[opts][skip]
                            }),
                            this[p][play] = false,
                            this[p][redrawBlocked] = _0x976ex2[opts][inp],
                            console.log(this[p][redrawBlocked]);

                            let _0x976ex3 = this[p][timestamp](),
                            _0x976ex4 = () => {
                                this[clearPause](),
                                this[clearUnPauseHandler](),
                                this[p][play] = true,
                                this[p][redrawBlocked] = false,
                                this[p][Caption][hide](this[p][Caption].PAUSED),
                                this[p][lockDelayActive] = false,
                                this[p][lastGeneration] = this[p][timestamp](),
                                _0x976ex2[opts][inp] || this[p][setCurrentPieceToDefaultPos](),
                                this[p][updateGhostPiece](true),
                                this[p][redrawAll]()
                            };

                            _0x976ex2[opts][skip] && (this[clearUnPauseHandler](), this[unpauseHandler] = (_0x976ex2) => {
                                this[p][timestamp]() - _0x976ex3 < 1e3 || _0x976ex4()
                            }, document[addEventListener](keydown, this[unpauseHandler]));

                            let _0x976ex5 = 1e3 * parseFloat(_0x976ex2[opts][len]);

                            this[startingTimeout] = setTimeout((() => {
                                        _0x976ex4()
                                    }), _0x976ex5)
                        } else {
                            if (audio == _0x976ex2[field_type]) {
                                if (this[p][SEenabled]) {
                                    let _0x976ex3 = clip -  + this[modeData][id] +  -  + _0x976ex2[id];

                                    var _0x976ex5 = createjs[Sound][play](_0x976ex3);

                                    try {
                                        let _0x976ex2 = createjs[WebAudioPlugin][context];

                                        suspended == _0x976ex2[state] && (this[p][Caption][outOfFocus]({
                                                top: 311
                                            }), _0x976ex5[stop](), _0x976ex2[onstatechange] = (_0x976ex2) => {
                                            _0x976ex5[play]()
                                        })
                                    } catch (_0x976ex2) {}
                                }
                            } else {
                                if (attack == _0x976ex2[field_type]) {
                                    if (this[p][gameEnded]) {
                                        return
                                    };

                                    let _0x976ex3 = _0x976ex2[opts][atk][split](, );

                                    if (_0x976ex2[opts][col]) {
                                        this[garbageCols];

                                        let _0x976ex3 = _0x976ex2[opts][cols][split](, );

                                        for (let _0x976ex2 of _0x976ex3) {
                                            let _0x976ex3 = parseInt(_0x976ex2);

                                            _0x976ex3 >= 0 && _0x976ex3 <= 9 && this[p][garbageCols][push](_0x976ex3)
                                        }
                                    } else {
                                        if (_0x976ex2[opts][cs]) {
                                            for (var _0x976ex9 = 0;
 _0x976ex9 < _0x976ex3[length];
 ++_0x976ex9) {
                                                let _0x976ex2 = Math[floor](10 * Math[random]());

                                                _0x976ex2 === this[lastAttackGarbageColumn] && (_0x976ex2 = (_0x976ex2 + 1 + Math[floor](8 * Math[random]())) % 9),
                                                this[p][garbageCols][push](_0x976ex2),
                                                this[lastAttackGarbageColumn] = _0x976ex2
                                            }
                                        }
                                    };

                                    for (let _0x976ex2 of _0x976ex3) {
                                        let _0x976ex3 = parseInt(_0x976ex2);

                                        _0x976ex3 && _0x976ex3 > 0 && _0x976ex3 < 30 && this[p][garbageQueue](_0x976ex3)
                                    };

                                    3 === this[p][R][gblock] && (this[p][addAsyncGarbageFromTheQueue](), this[p][redraw]())
                                } else {
                                    if (skin == _0x976ex2[field_type]) {
                                        let _0x976ex3 = _0x976ex2[opts][url],
                                        _0x976ex4 = this[skinCache][_0x976ex3];

                                        if (_0x976ex4 && !_0x976ex4[loaded]) {
                                            return void(console[warn](Skin skipped because not loaded.))
                                        };

                                        0 == _0x976ex3 ? this[p][changeSkin](0) : window[loadSkin](_0x976ex3, _0x976ex4[h]),
                                        this[p][isInvisibleSkin] = false,
                                        this[p][monochromeSkin] = false,
                                        this[skinWasChanged] = true,
                                        this[p][redrawAll]()
                                    } else {
                                        if (rule == _0x976ex2[field_type]) {
                                            let _0x976ex3 = _0x976ex2[opts][rule],
                                            _0x976ex4 = JSON.parse(_0x976ex3),
                                            _0x976ex5 = null;

                                            if (_0x976ex5 = _0x976ex2[opts][add] ? this[p][RulesetManager][applyPresetRule](_0x976ex4, this[p].R, false) : this[p][RulesetManager][applyPresetRule](_0x976ex4, this[p].R, true), _0x976ex4[hasOwnProperty](attackTable) && Array[isArray](_0x976ex4[attackTable]) && (this[p][linesAttack] = _0x976ex4[attackTable]), _0x976ex4[hasOwnProperty](comboTable) && Array[isArray](_0x976ex4[attackTable]) && (this[p][comboAttack] = _0x976ex4[comboTable]), _0x976ex5[hasOwnProperty](speedLimit) && this[p][setSpeedLimit](this[p][R][speedLimit]), _0x976ex5[hasOwnProperty](gravityLvl) && this[p][applyGravityLvl](this[p][R][gravityLvl]), _0x976ex5[hasOwnProperty](lockDelay) && this[p][setLockDelay](this[p][R][lockDelay]), _0x976ex5[hasOwnProperty](showPreviews)) {
                                                for (;
 !this[noQueueRefill] && this[p][queue][length] < this[p][R][showPreviews];
 ) {
                                                    this[p][refillQueue]()
                                                }
                                            };

                                            if (_0x976ex5[hasOwnProperty](baseBlockSet) || _0x976ex5[hasOwnProperty](rnd)) {
                                                let _0x976ex2 = 0 === this[p][clock];

                                                this[p][Items][changeRandomizer](this[p][R][rnd], _0x976ex2, this[p][timestamp]())
                                            };

                                            this[p][redrawAll]()
                                        } else {
                                            if (run == _0x976ex2[field_type]) {
                                                let _0x976ex3 = _0x976ex2[opts][id];

                                                this[execById](_0x976ex3)
                                            } else {
                                                if (switch  == _0x976ex2[field_type]) {
                                                        for (const _0x976ex3 in _0x976ex2[opts]) {
                                                            if (id == _0x976ex3[substr](0, 2)) {
                                                                let _0x976ex4 = _0x976ex3[substr](2),
                                                                _0x976ex5 = _0x976ex2[opts][_0x976ex3],
                                                                _0x976ex9 = !!_0x976ex2[opts][hasOwnProperty](on + _0x976ex4) && _0x976ex2[opts][on + _0x976ex4];

                                                                this[components][hasOwnProperty](_0x976ex5) ? this[components][_0x976ex5][enabled] = _0x976ex9 : this[eventTriggers][hasOwnProperty](x + _0x976ex5) && (this[eventTriggers][x + _0x976ex5][enabled] = _0x976ex9)
                                                            }
                                                        }
                                                    }
                                                        else {
                                                            if (random == _0x976ex2[field_type]) {
                                                                let _0x976ex3 = function (_0x976ex2) {
                                                                    let _0x976ex3 = Math[random](),
                                                                    _0x976ex4 = _0x976ex2[findIndex](((_0x976ex2) => {
                                                                                return (_0x976ex3 -= _0x976ex2) < 0
                                                                            }));

                                                                    return -1 === _0x976ex4 ? 0 : _0x976ex4
                                                                },
                                                                _0x976ex4 = [],
                                                                _0x976ex5 = [];

                                                                for (const _0x976ex3 in _0x976ex2[opts]) {
                                                                    if (r == _0x976ex3[substr](0, 1)) {
                                                                        let _0x976ex9 = _0x976ex2[opts][_0x976ex3][split](, , 2);

                                                                        _0x976ex4[push](_0x976ex9[0]),
                                                                        2 === _0x976ex9[length] && _0x976ex5[push](parseFloat(_0x976ex9[1]))
                                                                    }
                                                                };

                                                                if (!_0x976ex5[length]) {
                                                                    let _0x976ex2 = 1 / _0x976ex4[length];

                                                                    for (let _0x976ex3 = 0;
 _0x976ex3 < _0x976ex4[length];
 ++_0x976ex3) {
                                                                        _0x976ex5[push](_0x976ex2)
                                                                    }
                                                                };

                                                                let _0x976ex9 = _0x976ex4[_0x976ex3(_0x976ex5)];

                                                                this[execById](_0x976ex9)
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, ModeManager[prototype][execById] = function (_0x976ex2) {
    if (this[eventTriggers][hasOwnProperty](x + _0x976ex2)) {
        let _0x976ex3 = this[eventTriggers][x + _0x976ex2];

        _0x976ex3[gamedata] = Object[assign]({}, this[p][gamedata]),
        this[execCommands](_0x976ex3)
    } else {
        this[components][hasOwnProperty](_0x976ex2) && this[components][_0x976ex2][run](this)
    }
}, ModeManager[prototype][replaceTextVars] = function (_0x976ex2) {
    const _0x976ex3 = [..._0x976ex2[matchAll](/{([\w.]+)}/g)];

    for (let _0x976ex4 of _0x976ex3) {
        let _0x976ex3 = _0x976ex4[0],
        _0x976ex5 = _0x976ex4[1],
        _0x976ex9 = this[resolveIdentifier](_0x976ex5);

        null != _0x976ex9 && (_0x976ex2 = _0x976ex2[replace](_0x976ex3, _0x976ex9[0]))
    };

    return _0x976ex2
}, ModeManager[prototype][mapFetchError] = function (_0x976ex2) {
    alert(Mode could not be loaded!
         + _0x976ex2),
    this[p][startPractice](2, false)
}, ModeManager[prototype][saveScore] = function (_0x976ex2) {
    if (this[modeData][state] < 2 || !this[modeData][hasOwnProperty](l)) {
        return
    };

    let _0x976ex3 = this[modeData][l][f];

    if (!_0x976ex2 && !_0x976ex3) {
        return
    };

    let _0x976ex4 = null,
    _0x976ex5 = this[getNamedStatVal](this[modeData][l][p])[0],
    _0x976ex9 = this[modeData][l][c];

    var _0x976ex21 = _0x976ex9[indexOf](this[modeData][l][p]);

    -1 != _0x976ex21 && _0x976ex9[splice](_0x976ex21, 1),
    this[modeData][l][hasOwnProperty](s) && (_0x976ex4 = this[getNamedStatVal](this[modeData][l][s])[0], -1 != (_0x976ex21 = _0x976ex9[indexOf](this[modeData][l][s])) && _0x976ex9[splice](_0x976ex21, 1));

    let _0x976ex22 = {};

    for (const _0x976ex2 of _0x976ex9) {
        _0x976ex22[_0x976ex2] = this[getNamedStatVal](_0x976ex2)[0]
    };

    let _0x976ex23 = {
        t: 33,
        p: _0x976ex5,
        s: _0x976ex4,
        m: _0x976ex22,
        i: this[modeData][id],
        r: this[modeData][hasOwnProperty](restarts) ? this[modeData][restarts] : 0
    };

    this[modeData][restarts] = 0,
    this[p][Live][safeSend](JSON.stringify(_0x976ex23))
}, ModeManager[prototype][enableSkipButton] = function () {
    let _0x976ex2 = document[createElement](a);

    _0x976ex2[addEventListener](click, this[skipToNext][bind](this)),
    _0x976ex2[innerHTML] = Skip,
    _0x976ex2[href] = javascript: void(0),
    _0x976ex2[classList][add](btnNX2, btnNX - sm, blue, skip - btn),
    this[modeBtns][appendChild](_0x976ex2)
}, ModeManager[prototype][getHint] = function () {
    this[eventTriggers][hasOwnProperty](xhint + this[hintPtr]) && (this[p][play] || (this[p][deadline] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1 == this[hintPtr] && this[sendForfeit](), this[execCommands](this[eventTriggers][xhint + this[hintPtr]])),
    this[enableHintButton](this[hintCount] - this[hintPtr]),
    this[hintPtr]++
}, ModeManager[prototype][enableHintButton] = function (_0x976ex2) {
    let _0x976ex3 = this[modeBtns][getElementsByClassName](hint - btn)[0];

    _0x976ex3 ? _0x976ex2 <= 0 && hideElem(_0x976ex3) : (_0x976ex3 = document[createElement](a), _0x976ex3[addEventListener](click, this[getHint][bind](this)), _0x976ex3[innerHTML] = Hint, _0x976ex3[href] = javascript: void(0), _0x976ex3[classList][add](btnNX2, btnNX - sm, blue, hint - btn), this[modeBtns][appendChild](_0x976ex3)),
    _0x976ex3[innerHTML] = Hint( + _0x976ex2 + )
}, ModeManager[prototype][loadMode] = function () {
    if (this[modeId] === this[modeData][id] && this[modeData][state] >= 1) {
        return this[parseModeData](),
        void((this[modeData][hasOwnProperty](restarts) ? this[modeData][restarts]++ : this[modeData][restarts] = 1))
    };

    var _0x976ex2 = parseInt(this[p][Live][getParameterByName](list)),
    _0x976ex3 = ;

    !_0x976ex2 && this[effectiveList] && (_0x976ex2 = this[effectiveList]),
    _0x976ex2 && _0x976ex2 > 0 ? (_0x976ex3 =  ? list =  + _0x976ex2, window[history][pushState]({}, Jstris, /play/mode / list /  + _0x976ex2 + /+ this[modeId]),this[effectiveList]= _0x976ex2):window[history][pushState]({},Jstris,/play / mode /  + this[modeId]);
 var _0x976ex4 = new XMLHttpRequest, _0x976ex5 = /usermodes/api /  + this[modeId] + _0x976ex3;
 _0x976ex4[timeout] = 8e3, _0x976ex4[open](GET, _0x976ex5, true), _0x976ex4[setRequestHeader](X - Requested - With, XMLHttpRequest), _0x976ex4[setRequestHeader](Content - type, application / x - www - form - urlencoded);
 try {
            _0x976ex4[send]()
        } catch (_0x976ex2) {
                this[mapFetchError](_0x976ex2[message])
            };
 var _0x976ex9 = this;
 _0x976ex4[ontimeout] = function () {
                _0x976ex9[mapFetchError](REQUEST_TIMEOUT)
            }, _0x976ex4[onerror] = _0x976ex4[onabort] = function () {
                _0x976ex9[mapFetchError](REQUEST_FAIL)
            }, _0x976ex4[onload] = function () {
                200 === _0x976ex4[status] ? (_0x976ex9[modeData] = JSON.parse(_0x976ex4[responseText]), _0x976ex9[parseModeData]()) : _0x976ex9[mapFetchError](_0x976ex4[status] +  -  + _0x976ex4[statusText])
            }
            }, ModeManager[prototype][restoreSkin] = function () {
                this[skinWasChanged] ? (1 === this[origSkin][id] && (this[p][skins][1] = JSON.parse(this[origSkin][json])), this[p][changeSkin](this[origSkin][id])) : void(0) === this[origSkin] && (this[origSkin] = {
                        id: this[p][skinId]
                    }, 1 == this[p][skinId] && (this[origSkin][json] = JSON.stringify(this[p][skins][1])))
            }, ModeManager[prototype][parseModeData] = function () {
                if (this[timesPlayed][this[modeData][id]] ? this[timesPlayed][this[modeData][id]]++ : this[timesPlayed][this[modeData][id]] = 1, this[p][Live][authorized] && this[modeData][rated] >= 1 && 0 === this[modeData][l][so]) {
                    let _0x976ex2 = {
                        t: 34,
                        i: this[modeData][id]
                    };

                    this[p][Live][safeSend](JSON.stringify(_0x976ex2))
                };

                this[components] = {},
                this[eventTriggers] = {},
                this[timeTriggers] = [],
                this[loadedParts] = 0,
                this[totalTriggers] = 0,
                this[usedTriggers] = 0,
                this[usedCond] = 0,
                this[totalCond] = 0,
                this[fail] = false,
                this[isFinished] = false,
                this[noQueueRefill] = false,
                this[totalRuns]++;

                let _0x976ex2 = null;

                var _0x976ex3 = [];

                this[restoreSkin]();

                for (let _0x976ex4 of this[modeData][data][fields]) {
                    if (_0x976ex4[hasOwnProperty](id) || (_0x976ex4[id] = _0x976ex4[cid]), _0x976ex4[hasOwnProperty](on) || (_0x976ex4[on] = true), trig != _0x976ex4[field_type]) {
                        if (cond == _0x976ex4[field_type] && 1 == _0x976ex4[opts][do ] && (this[totalCond] += 1), audio == _0x976ex4[field_type]) {
                                        let _0x976ex2 = clip -  + this[modeData][id] +  -  + _0x976ex4[id];

                                        this[soundCache][_0x976ex2] || (this[soundCache][_0x976ex2] = {
                                                l: false
                                            }, _0x976ex3[push]({
                                                id: _0x976ex2,
                                                src: _0x976ex4[opts][url]
                                            }))
                                    };

                            if (skin == _0x976ex4[field_type] && _0x976ex4[opts][url][length] > 5 && !this[skinCache][_0x976ex4[opts][url]]) {
                                let _0x976ex2 = new Image;

                                this[skinCache][_0x976ex4[opts][url]] = {
                                    i: _0x976ex2,
                                    loaded: false
                                },
                                _0x976ex2[onload] = () => {
                                    this[skinCache][_0x976ex4[opts][url]][loaded] = true,
                                    this[skinCache][_0x976ex4[opts][url]][h] = _0x976ex2[naturalHeight],
                                    console.log(Loaded + _0x976ex4[opts][url]),
                                    this[loadModeSkins]()
                                },
                                _0x976ex2[onerror] = (_0x976ex2) => {
                                    console[error](_0x976ex2),
                                    alert(One of the required skins couldnt be loaded.)
                                },
                                _0x976ex2[src] = _0x976ex4[opts][url]
                            };

                    if (null !== _0x976ex2) {
                        let _0x976ex3 = new ModeCommand(_0x976ex4);

                        _0x976ex3[enabled] = _0x976ex4[on],
                        this[components][ID -  + _0x976ex4[id]] = _0x976ex3,
                        _0x976ex2[push](_0x976ex3)
                    }
    } else {
        _0x976ex2 = this[registerCommandTrigger](_0x976ex4[opts][when], _0x976ex4[opts][when2]),
        _0x976ex2[enabled] = _0x976ex4[on],
        this[components][ID -  + _0x976ex4[id]] = _0x976ex2
    }
};

if (this[modeData][hasOwnProperty](next) && (this[enableSkipButton](), null === this[modeData][next])) {
    let _0x976ex2 = clip - congratz;

    this[soundCache][_0x976ex2] || (this[soundCache][_0x976ex2] = {
            l: false
        }, _0x976ex3[push]({
            id: _0x976ex2,
            src: https: //audio.jezevec10.com/dal/congratulations.ogg}))};

            for(this[hintCount]= 0,this[hintPtr]= 1;

                this[eventTriggers][hasOwnProperty](xhint+ (this[hintCount]+ 1));

                ){this[hintCount]++};

                this[hintCount]> 0&& this[enableHintButton](this[hintCount]),
                this[timeTriggers][sort](((_0x976ex2,_0x976ex3)=>{
                    return _0x976ex2[t]> _0x976ex3[t]?1:-1
                })),
                this[goalInfo][innerHTML]= ,
                this[goalInfo][style][display]= flex,_0x976ex3[length]?createjs[Sound][registerSounds](_0x976ex3):this[loadedParts]++,
                this[loadModeSkins](),
                this[finalLoader]()},
                ModeManager[prototype][loadModeSkins]= function(){
                    let _0x976ex2=true;

                    for(const _0x976ex3 in this[skinCache]){
                        if(this[skinCache][hasOwnProperty](_0x976ex3)){
                            const _0x976ex4=this[skinCache][_0x976ex3];

                            _0x976ex2= _0x976ex2&& _0x976ex4[loaded]
                        }
                    };

                    _0x976ex2&& (this[loadedParts]++,this[finalLoader]())
                },
                ModeManager[prototype][soundLoaded]= function(_0x976ex2){let _0x976ex3=_0x976ex2[id];
if(_0x976ex3&& _0x976ex3[startsWith](clip-)){this[soundCache][_0x976ex3][l]=  true;
let _0x976ex2=true;
for(var _0x976ex4 in this[soundCache]){_0x976ex2= _0x976ex2&& this[soundCache][_0x976ex4][l]};
_0x976ex2&& (this[loadedParts]++,this[finalLoader]())}},ModeManager[prototype][finalLoader]= function(){2=== this[loadedParts]&& (this[loadedParts]++,this[onReady]())},ModeManager[prototype][replaceActiveBlock]= function(_0x976ex2){this[p][activeBlock]= _0x976ex2,this[p][setCurrentPieceToDefaultPos](),this[p][updateGhostPiece](true),this[p][redraw]()},ModeManager[prototype][addStaticQueueToQueue]= function(_0x976ex2){let _0x976ex3=false;
if(null!== this[staticQueue][match](/^[SZLJOIT]*$/)){for(var _0x976ex4=0;
_0x976ex4< this[staticQueue][length];
++_0x976ex4){let _0x976ex3= new Block(this[p][blockIds][this[staticQueue][_0x976ex4]]);
0=== _0x976ex4&& _0x976ex2?this[replaceActiveBlock](_0x976ex3):this[p][queue][push](_0x976ex3)}}else {let _0x976ex4=0,_0x976ex5=this[staticQueue][split](,),_0x976ex9=-1;
for(let _0x976ex21 of _0x976ex5){_0x976ex9++;
let _0x976ex5=_0x976ex21[split](=,2),_0x976ex22=false;
2== _0x976ex5[length]&& (h== _0x976ex5[0]&& (_0x976ex22=  true,_0x976ex4= 1),_0x976ex21= _0x976ex5[1]);
let _0x976ex23=_0x976ex21[match](/^\[([0-9]+):([0-9]+)\]$/),_0x976ex24=null,_0x976ex25=null;
if(null=== _0x976ex23&& this[blockNames][hasOwnProperty](_0x976ex21)){let _0x976ex2=this[blockNames][_0x976ex21];
_0x976ex24= _0x976ex2[0],_0x976ex25= _0x976ex2[1]}else {_0x976ex23&& 3=== _0x976ex23[length]&& (_0x976ex24= parseInt(_0x976ex23[1]),_0x976ex25= parseInt(_0x976ex23[2]))};
if(null!= _0x976ex24){let _0x976ex5= new Block(_0x976ex25);
if(_0x976ex5[set]= _0x976ex24,_0x976ex22){this[p][blockInHold]= _0x976ex5,9=== _0x976ex5[set]&& 0=== _0x976ex5[id]&& (this[p][blockInHold]= null),_0x976ex3=  true}else {if(_0x976ex9=== _0x976ex4&& _0x976ex2){this[replaceActiveBlock](_0x976ex5);
continue};
this[p][queue][push](_0x976ex5)}}}};
return _0x976ex3},ModeManager[prototype][registerTimeTrigger]= function(_0x976ex2){let _0x976ex3={t:_0x976ex2= parseFloat(_0x976ex2),c: new ModeTrigger};
return this[timeTriggers][push](_0x976ex3),_0x976ex3[c]},ModeManager[prototype][registerCommandTrigger]= function(_0x976ex2,_0x976ex3){if(9== (_0x976ex2= parseInt(_0x976ex2))){return  new ModeTrigger};
if(1!== _0x976ex2&& 5!== _0x976ex2&& this[totalTriggers]++,0== _0x976ex2|| 5== _0x976ex2){return 0== _0x976ex2?(this[initTrigger]=  new ModeTrigger,this[initTrigger]):(this[initTriggerFirst]=  new ModeTrigger,this[initTriggerFirst])};
if(2== _0x976ex2){return this[registerTimeTrigger](_0x976ex3)};
if(10== _0x976ex2){return this[registerTimeTrigger](0)};
if(1== _0x976ex2){return this[afterTrigger]=  new ModeTrigger,this[afterTrigger]};
if(3== _0x976ex2|| 4== _0x976ex2){_0x976ex3= parseInt(_0x976ex3);
let _0x976ex4=null;
this[eventTriggers][_0x976ex2]?_0x976ex4= this[eventTriggers][_0x976ex2]:(_0x976ex4= {},this[eventTriggers][_0x976ex2]= _0x976ex4),_0x976ex4[_0x976ex3]|| (_0x976ex4[_0x976ex3]= []);
let _0x976ex5= new ModeTrigger;
return _0x976ex4[_0x976ex3][push](_0x976ex5),_0x976ex5};
if(6== _0x976ex2){let _0x976ex2= new ModeTrigger;
return this[eventTriggers][this[BLOCK]+ 100]?this[eventTriggers][this[BLOCK]+ 100][push](_0x976ex2):this[eventTriggers][this[BLOCK]+ 100]= [_0x976ex2],_0x976ex2};
if(8== _0x976ex2){let _0x976ex2= new ModeTrigger;
return this[eventTriggers][this[LINECLEAR]+ 100]?this[eventTriggers][this[LINECLEAR]+ 100][push](_0x976ex2):this[eventTriggers][this[LINECLEAR]+ 100]= [_0x976ex2],_0x976ex2};
return 7== _0x976ex2?(this[eventTriggers][x+ _0x976ex3]=  new ModeTrigger,this[eventTriggers][x+ _0x976ex3]):void(0)},ModeManager[prototype][prepare]= function(_0x976ex2){var _0x976ex3=_0x976ex2;
_0x976ex2|| (_0x976ex3= this[modeData][id]?this[modeData][id]:parseInt(getParameterByName(mode))),!isNaN(_0x976ex3)&& _0x976ex3?this[modeId]= _0x976ex3:alert(Mode not specified!),this[loadMode]()},ModeManager[prototype][isClearMatrix]= function(){for(var _0x976ex2=0;
_0x976ex2< this[p][matrix][length];
_0x976ex2++){for(var _0x976ex3=0;
_0x976ex3< this[p][matrix][_0x976ex2][length];
_0x976ex3++){if(this[p][matrix][_0x976ex2][_0x976ex3]> 0){return false}}};
return true},ReplayController[prototype][toggleRepControls]= function(){document[getElementById](load)[disabled]=  true,document[getElementById](pause)[disabled]=  !document[getElementById](pause)[disabled],document[getElementById](prev)[disabled]=  !document[getElementById](prev)[disabled],document[getElementById](next)[disabled]=  !document[getElementById](next)[disabled]},ReplayController[prototype][addListener]= function(_0x976ex2,_0x976ex3){void(0)=== this[listeners][_0x976ex2]&& (this[listeners][_0x976ex2]= []),this[listeners][_0x976ex2][push](_0x976ex3)},ReplayController[prototype][trigger]= function(_0x976ex2){if(void(0)!== this[listeners][_0x976ex2]){for(var _0x976ex3 in this[listeners][_0x976ex2]){this[listeners][_0x976ex2][_0x976ex3]()}}},ReplayController[prototype][frame]= function(){var _0x976ex2=this[timestamp]();
this[update](Math[min](1e3,_0x976ex2- this[last])),this[last]= _0x976ex2,window[requestAnimFrame](this[frame][bind](this),this[canvas])},ReplayController[prototype][run]= function(){this[last]= this[timestamp](),this[frame]()},ReplayController[prototype][update]= function(_0x976ex2){if(this[play]){_0x976ex2*= this[playSpeed],this[clock]= this[clock]+ _0x976ex2;
for(var _0x976ex3=0,_0x976ex4=0;
_0x976ex4< this[g][length];
_0x976ex4++){if(this[g][_0x976ex4][playUntilTime](this[clock]),this[g][_0x976ex4][reachedEnd]&& _0x976ex3++,5=== this[g][_0x976ex4][pmode]){for(var _0x976ex5=120- this[clock]/ 1e3;
this[g][_0x976ex4][timeRemaining]- _0x976ex5>= 1;
){this[g][_0x976ex4][timeRemaining]--,this[g][_0x976ex4][v][onTimeRemainingChanged]()};
this[g][_0x976ex4][timeRemaining]<= 0&& (this[pauseReplay](false),this[fixUltraClockPrecision]())}};
_0x976ex3=== this[g][length]&& (this[pauseReplay](false),this[fixUltraClockPrecision]())}},
ReplayController[prototype][loadReplay]= function() { //ReplayController[_0x2275[135]][_0x2275[1017]] = function() {
    this[clock]= 0;
    for(var _0x976ex2=0,_0x976ex3=0; _0x976ex3< this[g][length]; _0x976ex3++) {
        var _0x976ex4=document[getElementById](rep+ _0x976ex3)[value];
        try {
            var _0x976ex5 = LZString.decompressFromEncodedURIComponent(_0x976ex4);

            if(_0x976ex5 === null) throw Error;
            if (this[debug]) console.log(_0x976ex5);

            this[g][_0x976ex3][r] = JSON.parse(_0x976ex5);
            if (typeof this[g][_0x976ex3][r] == string) {
                this[g][_0x976ex3][r]= JSON.parse(LZString.decompressFromEncodedURIComponent(this[g][_0x976ex3][r]));
            }
        } catch(_0x976ex2) {
            return alert(Invalid replay file. Aborting),false
        };
        this[g][_0x976ex3][initReplay](),this[g][_0x976ex3][initSetOnce]()
    };
    for(_0x976ex3= 0;
    _0x976ex3< this[g][length];
    _0x976ex3++){this[g][_0x976ex3][restart]();
    try{this[g][_0x976ex3][Analytics][onReplayLoaded](this[g][_0x976ex3][r])}catch(_0x976ex2){console[error](Replay Analytics Error,_0x976ex2);
    break};
    1=== this[g][length]&& this[toggleAnalytics](1),1=== this[g][_0x976ex3][r][c][v]&& _0x976ex2++};
    document[getElementById](pause)[disabled]&& this[toggleRepControls](),this[pauseReplay](true),_0x976ex2> 1&& (alert(Not possible to play two Ver1 replays at once!
                Use at least one V3 replay.),
                this[pauseReplay](false),
                this[toggleRepControls]())
        }, 
        ReplayController[prototype][allReplaysEnded] = function (_0x976ex2) {
            for (var _0x976ex3 = 0, _0x976ex4 = 0;
 _0x976ex4 < this[g][length];
 _0x976ex4++) {
                this[g][_0x976ex4][ptr] >= this[g][_0x976ex4][actions][length] && _0x976ex3++
            };

            return _0x976ex3 === this[g][length]
        }, ReplayController[prototype][pauseReplay] = function (_0x976ex2) {
            return this[play] = boolean == typeof _0x976ex2 ? _0x976ex2 : !this[play],
            this[play] && !this[allReplaysEnded]() ? document[getElementById](pause)[innerHTML] = Pause : (document[getElementById](pause)[innerHTML] = Play, this[play] = false),
            this[play]
        }, ReplayController[prototype][nextFrame] = function () {
            for (var _0x976ex2 = Number[MAX_SAFE_INTEGER], _0x976ex3 = 0;
 _0x976ex3 < this[g][length];
 _0x976ex3++) {
                var _0x976ex4 = this[g][_0x976ex3];

                _0x976ex4[ptr] >= _0x976ex4[actions][length] || (_0x976ex2 = Math[min](_0x976ex2, _0x976ex4[actions][_0x976ex4[ptr]][t]))
            };

            if (_0x976ex2 !== Number[MAX_SAFE_INTEGER]) {
                this[clock] = _0x976ex2;

                for (_0x976ex3 = 0;
 _0x976ex3 < this[g][length];
 _0x976ex3++) {
                    this[g][_0x976ex3][playUntilTime](this[clock]),
                    this[g][_0x976ex3][v][updateTextBar]()
                }
            }
        }, ReplayController[prototype][prevFrame] = function () {
            for (var _0x976ex2 = -1, _0x976ex3 = 0;
 _0x976ex3 < this[g][length];
 _0x976ex3++) {
                for (var _0x976ex4 = this[g][_0x976ex3], _0x976ex5 = -1, _0x976ex9 = 2;
 !(_0x976ex4[ptr] < _0x976ex9);
 ) {
                    if (_0x976ex4[actions][_0x976ex4[ptr] - _0x976ex9][t] < _0x976ex4[clock]) {
                        _0x976ex5 = _0x976ex4[actions][_0x976ex4[ptr] - _0x976ex9][t];

                        break
                    };

                    _0x976ex9++
                };

                _0x976ex2 = Math[max](_0x976ex2, _0x976ex5)
            };

            _0x976ex2 < 0 || this[loadAtTime](_0x976ex2)
        }, ReplayController[prototype][loadAtFrame] = function (_0x976ex2) {
            for (var _0x976ex3 = this[g][0];
 _0x976ex2 > 0 && (_0x976ex3[actions][_0x976ex2 - 1][t] === _0x976ex3[actions][_0x976ex2][t] || _0x976ex2 + 1 < _0x976ex3[actions][length] && _0x976ex3[actions][_0x976ex2 + 1][t] === _0x976ex3[actions][_0x976ex2][t]);
 ) {
                _0x976ex2--
            };

            _0x976ex3[v][redrawBlocked] = true,
            _0x976ex3[initReplay](),
            this[loadAtTime](_0x976ex3[actions][_0x976ex2][t])
        }, ReplayController[prototype][loadAtTime] = function (_0x976ex2) {
            this[clock] = _0x976ex2;

            for (var _0x976ex3 = 0;
 _0x976ex3 < this[g][length];
 _0x976ex3++) {
                var _0x976ex4 = this[g][_0x976ex3],
                _0x976ex5 = _0x976ex4[v][SEenabled];

                _0x976ex4[v][SEenabled] = false,
                _0x976ex4[v][redrawBlocked] = true,
                _0x976ex4[initReplay](),
                _0x976ex4[restart](),
                _0x976ex4[playUntilTime](this[clock]),
                _0x976ex4[v][SEenabled] = _0x976ex5,
                _0x976ex4[v][redrawBlocked] = false,
                _0x976ex4[updateGhostPiece](false),
                _0x976ex4[v][redraw](),
                _0x976ex4[redrawHoldBox](),
                _0x976ex4[updateQueueBox](),
                _0x976ex4[v][updateTextBar]()
            }
        }, ReplayController[prototype][changeSpeed] = function () {
            var _0x976ex2 = parseFloat(document[getElementById](speed)[value]);

            isNaN(_0x976ex2) || (this[playSpeed] = _0x976ex2);

            for (var _0x976ex3 = 0;
 _0x976ex3 < this[g][length];
 _0x976ex3++) {
                var _0x976ex4 = this[g][_0x976ex3];

                this[playSpeed] >= 10 ? _0x976ex4[SEenabled] = false : _0x976ex4[SEenabled] = true
            }
        }, ReplayController[prototype][timestamp] = function () {
            return (new Date)[getTime]()
        }, ReplayController[prototype][toggleAnalytics] = function (_0x976ex2) {
            if (void(0) !== _0x976ex2 && 1 === _0x976ex2) {
                return document[getElementById](SAcontainer)[style][display] = block,
                void((document[getElementById](showSA)[innerHTML] = Hide))
            };

            var _0x976ex3 = document[getElementById](SAcontainer)[style][display];

            document[getElementById](SAcontainer)[style][display] = block === _0x976ex3 ? none : block,
            document[getElementById](showSA)[innerHTML] = block === _0x976ex3 ? Show : Hide
        }, ReplayController[prototype][keyInput] = function (_0x976ex2) {
            37 !== _0x976ex2[keyCode] || document[getElementById](prev)[disabled] ? 39 !== _0x976ex2[keyCode] || document[getElementById](next)[disabled] || this[nextFrame]() : this[prevFrame]()
        }, ReplayController[prototype][getFinesse] = function () {
            var _0x976ex2 = this[g][0][ptr];

            this[pauseReplay](false),
            this[loadAtFrame](this[g][0][actions][length] - 1);

            var _0x976ex3 = {
                finesse: null !== this[g][0][finFaults] ? this[g][0][finFaults][slice](0) : [],
                scoreStamps: null !== this[g][0][scoreStamps] ? this[g][0][scoreStamps][slice](0) : []
            };

            return this[loadAtFrame](_0x976ex2),
            _0x976ex3
        }, ReplayController[prototype][fixUltraClockPrecision] = function () {
            this[clock] = 12e4;

            for (var _0x976ex2 = 0;
 _0x976ex2 < this[g][length];
 _0x976ex2++) {
                5 === this[g][_0x976ex2][pmode] && (this[g][_0x976ex2][clock] = this[clock], this[g][_0x976ex2][v][updateTextBar]())
            }
        }, ReplayController[prototype][startDownloaders] = function () {
            var _0x976ex2 = REP_ID,
            _0x976ex3 = null;

            if (1 === _0x976ex2[0] ? _0x976ex3 = new ReplayDownloader(_0x976ex2[1], 0, rep0, this) : 2 === _0x976ex2[0] ? _0x976ex3 = new ReplayDownloader(_0x976ex2[1], 1, rep0, this) : 3 === _0x976ex2[0] ? (_0x976ex3 = new ReplayDownloader(_0x976ex2[1][0], 1, rep0, this), _0x976ex3 = new ReplayDownloader(_0x976ex2[1][1], 1, rep1, this)) : 4 === _0x976ex2[0] ? _0x976ex3 = new ReplayDownloader(_0x976ex2[1], 2, rep0, this) : 5 === _0x976ex2[0] ? _0x976ex3 = new ReplayDownloader(_0x976ex2[1], 3, rep0, this) : 6 === _0x976ex2[0] && (_0x976ex3 = new ReplayDownloader(_0x976ex2[1][0], 2, rep0, this), _0x976ex3 = new ReplayDownloader(_0x976ex2[1][1], 3, rep1, this)), _0x976ex3 && _0x976ex3[isDownloading]) {
                var _0x976ex4 = document[getElementById](load);

                _0x976ex4[style][display] = none,
                this[addListener](onRepReady, (function () {
                        _0x976ex4[style][display] = null
                    }))
            }
        }, ReplayDownloader[prototype][onData] = function (_0x976ex2) {
            this[isDownloading] = false;

            var _0x976ex3 = LZString[compressToEncodedURIComponent](JSON.stringify(_0x976ex2));

            this[elem][innerHTML] = _0x976ex3,
            this[elem][parentNode][removeChild](this[spin]),
            null !== this[controller] && this[controller][trigger](onRepReady)
        }, ReplayDownloader[prototype][download] = function (_0x976ex2, _0x976ex3) {
            this[isDownloading] = true;

            var _0x976ex4 = document[head][querySelector]([name = csrf - token])[content],
            _0x976ex5 = new XMLHttpRequest,
            _0x976ex9 = /replay/data + ( ? id =  + _0x976ex2 +  & type =  + _0x976ex3);

            _0x976ex5[timeout] = 1e4,
            _0x976ex5[open](GET, _0x976ex9, true),
            _0x976ex5[setRequestHeader](X - Requested - With, XMLHttpRequest),
            //_0x976ex5[setRequestHeader](X - CSRF - TOKEN, _0x976ex4); //_0x2275[775](???, _0x976ex4)

            var _0x976ex21 = this;

            try {
                _0x976ex5[send]()
            } catch (_0x976ex2) {
                _0x976ex21[onError](_0x976ex2[message])
            };

            _0x976ex5[ontimeout] = function () {
                _0x976ex21[onError](REQUEST_TIMEOUT)
            },
            _0x976ex5[onerror] = _0x976ex5[onabort] = function () {
                _0x976ex21[onError](REQUEST_FAIL)
            },
            _0x976ex5[onload] = function () {
                200 === _0x976ex5[status] ? function  == typeof _0x976ex21[onData] && _0x976ex21[onData](JSON.parse(_0x976ex5[responseText])): _0x976ex21[onError](_0x976ex5[status] +  -  + _0x976ex5[statusText])
        }
    }, ReplayDownloader[prototype][onError] = function (_0x976ex2) {
        this[elem][parentNode][removeChild](this[spin]);

        var _0x976ex3 = document[createElement](span);

        _0x976ex3[innerHTML] =  < br >  < b > ERROR :  <  / b >  + _0x976ex2,
        insertNodeAfter(_0x976ex3, this[elem])
    };
 var LIVE_REPLAY_LOG = false, ReplayerProto = Object[create](GameCore[prototype]);
 function _base64ToArrayBuffer(_0x976ex2) {
        for (var _0x976ex3 = window[atob](_0x976ex2), _0x976ex4 = _0x976ex3[length], _0x976ex5 = new Uint8Array(_0x976ex4), _0x976ex9 = 0;
 _0x976ex9 < _0x976ex4 / 4;
 _0x976ex9++) {
            for (var _0x976ex21 = 0;
 _0x976ex21 < 4;
 _0x976ex21++) {
                _0x976ex5[4 * _0x976ex9 + _0x976ex21] = _0x976ex3[charCodeAt](4 * _0x976ex9 + 3 - _0x976ex21)
            }
        };

        return _0x976ex5[buffer]
    }
        function Analytics(_0x976ex2) {
        this[i] = void(0) === _0x976ex2 ? 0 : _0x976ex2,
        this[controller] = null,
        this[r] = null,
        this[actions] = null,
        this[harddrops] = [],
        this[segSize] = 10,
        this[showGlobalAvg] = false,
        this[showLocalSpeed] = true,
        this[showCurrentPos] = true,
        this[showRelAtk] = false,
        this[scLayer0] = document[getElementById](speedChartLayer0),
        this[ctx0] = this[scLayer0][getContext](2d),
        this[ctx0][strokeStyle] = yellow,
        this[ctx0][fillStyle] = yellow,
        this[scLayer1] = document[getElementById](speedChartLayer1),
        this[ctx1] = this[scLayer1][getContext](2d),
        this[scLayer1][addEventListener](mousemove, this[mouseMove][bind](this), false),
        this[scLayer1][addEventListener](mouseleave, this[clearHighlights][bind](this), false),
        this[scLayer1][addEventListener](click, this[chartClick][bind](this), false),
        document[getElementById](dispP)[checked] = true,
        document[getElementById](dispL)[checked] = true,
        document[getElementById](dispG)[checked] = false,
        document[getElementById](dispF)[checked] = false,
        document[getElementById](dispRA)[checked] = false,
        document[getElementById](dispP)[addEventListener](change, this[dispP][bind](this), false),
        document[getElementById](dispL)[addEventListener](change, this[dispL][bind](this), false),
        document[getElementById](dispG)[addEventListener](change, this[dispG][bind](this), false),
        document[getElementById](dispF)[addEventListener](change, this[dispF][bind](this), false),
        document[getElementById](dispRA)[addEventListener](change, this[dispRA][bind](this), false),
        this[tb] = document[getElementById](scoreTable)[getElementsByTagName](tbody)[0],
        this[data] = {},
        this[emptyData](),
        this[scoreFilter] = []
    }
        function SimpleStatsManager(_0x976ex2) {
        this[v] = _0x976ex2,
        this[ordered] = [],
        this[initDefault]()
    }
        function StatLine(_0x976ex2, _0x976ex3, _0x976ex4) {
        this[id] = _0x976ex2,
        this[order] = _0x976ex4,
        this[initialVal] = this[value] = 0,
        this[enabled] = false,
        this[label] = document[createElement](td),
        this[label][width] = 120,
        this[label][classList][add](ter),
        this[label][textContent] = _0x976ex3,
        this[statElem] = document[createElement](td),
        this[statElem][classList][add](sval)
    }
        Replayer[prototype] = ReplayerProto, Replayer[prototype][constructor] = Replayer, Replayer[prototype][getRandomizer] = function (_0x976ex2, _0x976ex3) {
        return 1 === _0x976ex2 && function  == typeof Math[seedrandom] ? (Math[seedrandom](_0x976ex3), Math[random]) : alea(_0x976ex3)
}, Replayer[prototype][initReplay] = function () {
    this[blockRNG] = this[getRandomizer](this[r][c][v], this[r][c][seed]),
    this[R][baseBlockSet] = void(0) !== this[r][c][bbs] ? this[r][c][bbs] : 0,
    this[initRandomizer](this[r][c][rnd] ? this[r][c][rnd] : 0),
    this[softDropId] = this[r][c][softDropId],
    this[ptr] = 0,
    this[reachedEnd] = false,
    3 === this[r][c][r] && (this[initRandomizer](2), this[R][showPreviews] = 0);

    var _0x976ex2 = 0 | this[r][c][m];

    this[pmode] = (4294901760 & _0x976ex2) >> 16;

    var _0x976ex3 = this[subMode] = 65535 & _0x976ex2;

    0 === this[pmode] && (this[pmode] = 1),
    this[generateQueue](),
    this[linesRemaining] = 1e6,
    100 === this[pmode] || (1 === this[pmode] ? this[linesRemaining] = {
            1: 40,
            2: 20,
            3: 100,
            4: 1e3
        }
        [_0x976ex3] : 2 === this[pmode] || (3 === this[pmode] ? this[linesRemaining] = {
                1: 10,
                2: 18,
                3: 100
            }
            [_0x976ex3] : 5 === this[pmode] ? this[timeRemaining] = 120 : 6 === this[pmode] ? (this[MapManager] = new MapManager(this), this[MapManager][parseMatrix](this[r][map][data]), this[loadMap](this[MapManager][matrix], this[r][map][queue])) : this[pmode])),
    this[blockInHold] = null,
    this[v][onReady]()
}, Replayer[prototype][loadMap] = function (_0x976ex2, _0x976ex3) {
    if (void(0) === this[r][map] && (this[r][map] = {}), this[r][map][queue] = _0x976ex3, this[matrix] = copyMatrix(_0x976ex2), _0x976ex3) {
        var _0x976ex4 = this[r][map][queue];

        this[queue] = [];

        for (var _0x976ex5 = 0;
 _0x976ex5 < _0x976ex4[length];
 ++_0x976ex5) {
            this[queue][push](new Block(this[blockIds][_0x976ex4[_0x976ex5]]))
        }
    }
}, Replayer[prototype][pullBits] = function (_0x976ex2) {
    if (this[data][length] === this[byte]) {
        return null
    };

    var _0x976ex3,
    _0x976ex4 = 32 - (this[bitpos] + _0x976ex2);

    if (_0x976ex4 >= 0) {
        var _0x976ex5 = (1 << _0x976ex2) - 1 << _0x976ex4;

        _0x976ex3 = (this[data][this[byte]] & _0x976ex5) >>> _0x976ex4
    } else {
        var _0x976ex9 = (1 << _0x976ex2 + _0x976ex4) - 1,
        _0x976ex21 = (this[data][this[byte]] & _0x976ex9) << -_0x976ex4,
        _0x976ex22 = (1 << -_0x976ex4) - 1 << 32 + _0x976ex4;

        if (this[data][length] === this[byte] + 1 && 0 !== _0x976ex4) {
            return null
        };

        _0x976ex3 = _0x976ex21 | (this[data][this[byte] + 1] & _0x976ex22) >>> 32 + _0x976ex4
    };

    return this[bitpos] = this[bitpos] + _0x976ex2,
    this[bitpos] >= 32 && (this[bitpos] -= 32, this[byte]++),
    _0x976ex3
}, Replayer[prototype][loadBinaryActionsV3] = function () {
    var _0x976ex2 = _base64ToArrayBuffer(this[r][d]);

    this[data] = new Uint32Array(_0x976ex2),
    this[byte] = 0,
    this[bitpos] = 0;

    this[data][length];

    for (var _0x976ex3 = 0, _0x976ex4 = 0;
 ;
 ) {
        var _0x976ex5 = {},
        _0x976ex9 = this[pullBits](12);

        if (null === _0x976ex9 || 4095 === _0x976ex9) {
            break
        };

        _0x976ex9 < _0x976ex3 && _0x976ex4++,
        _0x976ex3 = _0x976ex9,
        _0x976ex5[t] = 4094 * _0x976ex4 + _0x976ex9,
        _0x976ex5[a] = this[pullBits](4),
        _0x976ex5[a] === Action[GARBAGE_ADD] && (_0x976ex5[d] = [this[pullBits](5), this[pullBits](4)]),
        _0x976ex5[a] === Action[REDBAR_SET] && (_0x976ex5[d] = [this[pullBits](5)]),
        _0x976ex5[a] === Action[ARR_MOVE] && (_0x976ex5[d] = [this[pullBits](1)]),
        _0x976ex5[a] === Action[AUX] && (_0x976ex5[aux] = this[pullBits](4), _0x976ex5[aux] === Aux[AFK] ? (_0x976ex5[d] = [this[pullBits](16)], (_0x976ex3 += _0x976ex5[d][0] % 4094) >= 4094 && (_0x976ex3 -= 4094, _0x976ex4++), _0x976ex4 += _0x976ex5[d][0] / 4094 >>> 0) : _0x976ex5[aux] === Aux[BLOCK_SET] ? _0x976ex5[d] = [this[pullBits](1), this[pullBits](4)] : _0x976ex5[aux] === Aux[MOVE_TO] ? _0x976ex5[d] = [this[pullBits](4) - 3, this[pullBits](5) - 12] : _0x976ex5[aux] === Aux[RANDOMIZER] ? _0x976ex5[d] = [this[pullBits](1), this[pullBits](5)] : _0x976ex5[aux] === Aux[MATRIX_MOD] ? _0x976ex5[d] = [this[pullBits](4), this[pullBits](5)] : _0x976ex5[aux] === Aux[WIDE_GARBAGE_ADD] && (_0x976ex5[d] = [this[pullBits](5), this[pullBits](4), this[pullBits](3), this[pullBits](1)])),
        this[actions][push](_0x976ex5)
    };

    this[debug] && console.log(JSON.stringify(this[actions])),
    this[r][a] = this[actions]
}, Replayer[prototype][initSetOnce] = function () {
    if (this[actions] = [], this[r][c][v] >= 3 ? this[loadBinaryActionsV3]() : this[actions] = this[r][a], this[r][c][v] >= 2) {
        if (this[v][replaySEset] = this[r][c][se] ? this[r][c][se] : 0, this[r][c][bs] >= 1e3 && this[r][c][bp] && (this[customSkinPath] = this[r][c][bp]), 7 === this[r][c][bs]) {
            this[monochromeSkin] = this[r][c][mClr],
            this[v][changeSkin](0)
        } else {
            let _0x976ex2 = this[r][c][bs] ? this[r][c][bs] : 0;

            this[v][changeSkin](_0x976ex2)
        }
    } else {
        this[v][changeSkin](1),
        this[v][replaySEset] = 0
    };

    this[v][onCreate]()
}, Replayer[prototype][restart] = function () {
    if (6 !== this[pmode] && this[clearMatrix](), this[blockInHold] = null, this[comboCounter] = -1, this[holdUsedAlready] = false, this[isBack2Back] = false, this[deadline] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this[queueLength] = 5, this[activeBlock] = new Block(0), this[frames] = 0, this[softDrop] = false, this[gameStep] = 0.9, this[timer] = 0, this[clock] = 0, this[redBar] = 0, this[solidHeight] = 0, this[solidToAdd] = 0, this[placedBlocks] = 0, this[totalFinesse] = 0, this[totalKeyPresses] = 0, this[finesse] = 0, this[used180] = 0, this[finFaults] = null, this[scoreStamps] = null, this[resetGameData](), this[getNextBlock](), this[actions][length] > 0) {
        for (;
 0 === this[actions][this[ptr]][t] && this[ptr] < this[actions][length];
 ) {
            this[processAction](this[actions][this[ptr]]),
            this[ptr]++
        }
    };

    this[v][onRestart]()
}, Replayer[prototype][moveCurrentBlock] = function (_0x976ex2, _0x976ex3) {
    _0x976ex2 *= this[blockSets][this[activeBlock][set]][step],
    this[checkIntersection](this[activeBlock][pos][x] + _0x976ex2, this[activeBlock][pos][y], this[activeBlock][rot]) || (this[spinPossible] = false, this[activeBlock][pos][x] = this[activeBlock][pos][x] + _0x976ex2, this[updateGhostPiece](false), this[v][onBlockMove](_0x976ex3))
}, Replayer[prototype][hardDrop] = function () {
    var _0x976ex2 = this[blockSets][this[activeBlock][set]],
    _0x976ex3 = this[activeBlock][pos][x] + _0x976ex2[blocks][this[activeBlock][id]][cc][this[activeBlock][rot]],
    _0x976ex4 = this[finesse] - (0 === this[activeBlock][set] ? finesse[this[activeBlock][id]][this[activeBlock][rot]][_0x976ex3] : 0);

    _0x976ex4 > 0 && (this[totalFinesse] += _0x976ex4, null === this[finFaults] && (this[finFaults] = []), this[finFaults][push](this[actions][this[ptr]][hdId])),
    this[totalKeyPresses] += this[finesse] - this[used180],
    this[finesse] = 0,
    this[used180] = 0,
    this[v][ghostEnabled] && !this[v][redrawBlocked] || this[updateGhostPiece](true);

    var _0x976ex5 = this[ghostPiece][pos][y];

    this[score](this[Scoring][A].HARD_DROP, _0x976ex5 - this[activeBlock][pos][y]),
    this[placeBlock](this[ghostPiece][pos][x], _0x976ex5),
    this[spinPossible] && _0x976ex5 !== this[activeBlock][pos][y] && (this[spinPossible] = false),
    this[v][redraw](),
    _0x976ex4 && this[GameStats] && this[GameStats][get](FINESSE)[set](this[totalFinesse]),
    this[Analytics] && this[Analytics][updatePos](this[actions][this[ptr]][hdId]),
    this[playingLive] && this[v][updateTextBar]()
}, Replayer[prototype][GameOver] = function () {
    this[reachedEnd] = true,
    this[v][onGameOver]()
}, Replayer[prototype][refillQueue] = function () {
    6 === this[pmode] && null !== this[r][map][queue] || this[queue][push](this[getRandomizerBlock]())
}, Replayer[prototype][redraw] = function () {
    this[v][redraw]()
}, Replayer[prototype][getNextBlock] = function () {
    this[activeBlock] = this[getBlockFromQueue](),
    this[setCurrentPieceToDefaultPos](),
    this[updateGhostPiece](false),
    this[timer] = 0
}, Replayer[prototype][isPmode] = function () {
    return this[pmode]
}, Replayer[prototype][getComboAttack] = function (_0x976ex2) {
    return _0x976ex2 <= 12 ? this[comboAttack][_0x976ex2] : this[comboAttack][this[comboAttack][length] - 1]
}, Replayer[prototype][addGarbage] = function (_0x976ex2, _0x976ex3, _0x976ex4, _0x976ex5) {
    if (_0x976ex4 || (_0x976ex4 = 1), _0x976ex2 > 0) {
        this[gamedata][linesReceived] += _0x976ex2,
        _0x976ex2 > 20 && (_0x976ex2 = 20);

        var _0x976ex9 = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];

        if (_0x976ex9[_0x976ex3] = 0, _0x976ex4 > 1) {
            _0x976ex3 + _0x976ex4 > 10 && (_0x976ex3 = 10 - _0x976ex4);

            for (let _0x976ex2 = 1;
 _0x976ex2 < _0x976ex4;
 ++_0x976ex2) {
                _0x976ex9[_0x976ex3 + _0x976ex2] = 0
            }
        };

        if (_0x976ex5) {
            for (let _0x976ex2 = 0;
 _0x976ex2 < _0x976ex9[length];
 ++_0x976ex2) {
                _0x976ex9[_0x976ex2] = 8 === _0x976ex9[_0x976ex2] ? 0 : 8
            }
        };

        this[deadline] = this[matrix][_0x976ex2 - 1][slice](0);

        for (var _0x976ex21 = this[matrix][length] - this[solidHeight], _0x976ex22 = 0;
 _0x976ex22 < _0x976ex21;
 _0x976ex22++) {
            this[matrix][_0x976ex22] = _0x976ex21 - _0x976ex22 > _0x976ex2 ? this[matrix][_0x976ex22 + _0x976ex2][slice](0) : _0x976ex9[slice](0)
        };

        this[GameStats] && this[GameStats][get](RECV)[set](this[gamedata][linesReceived])
    }
}, Replayer[prototype][garbage_add_adv] = function (_0x976ex2, _0x976ex3, _0x976ex4, _0x976ex5) {
    if (_0x976ex4 || (_0x976ex4 = 1), _0x976ex5 || (_0x976ex5 = 0), this[redBar] > 0 && (this[redBar] -= _0x976ex2 > this[redBar] ? this[redBar] : _0x976ex2), this[ghostPiece][pos][y] -= _0x976ex2, this[addGarbage](_0x976ex2, _0x976ex3, _0x976ex4, _0x976ex5), this[ptr] + 1 === this[actions][length] || this[ptr] + 1 < this[actions][length] && this[actions][this[ptr] + 1][a] !== Action[GARBAGE_ADD]) {
        for (;
 this[checkIntersection](this[activeBlock][pos][x], this[activeBlock][pos][y], this[activeBlock][rot]) && (this[activeBlock][pos][y]--, !(this[activeBlock][pos][y] < -4));
 ) { ;

        };

        this[updateGhostPiece](false)
    };

    this[v][redraw]()
}, Replayer[prototype][processAction] = function (_0x976ex2) {
    var _0x976ex3 = _0x976ex2[a];

    switch (_0x976ex3) {
    case Action[MOVE_LEFT]:
        this[finesse]++,
        this[moveCurrentBlock](-1, true);

        break;

    case Action[MOVE_RIGHT]:
        this[finesse]++,
        this[moveCurrentBlock](1, true);

        break;

    case Action[DAS_LEFT]:
        this[moveBlockToTheWall](-1);

        break;

    case Action[DAS_RIGHT]:
        this[moveBlockToTheWall](1);

        break;

    case Action[ROTATE_LEFT]:
        this[rotateCurrentBlock](-1);

        break;

    case Action[ROTATE_RIGHT]:
        this[rotateCurrentBlock](1);

        break;

    case Action[ROTATE_180]:
        this[rotateCurrentBlock](2);

        break;

    case Action[HARD_DROP]:
        this[hardDrop]();

        break;

    case Action[SOFT_DROP_BEGIN_END]:
        this[r][c][v] >= 3 ? this[softDrop] = !this[softDrop] : (this[softDrop] = true, this[gameStep] = this[softDropSpeeds][this[softDropId]][time]);

        break;

    case Action[GRAVITY_STEP]:
        if (this[r][c][v] >= 3) {
            var _0x976ex4 = this[gravityStep](this[softDrop] ? this[softDropSpeeds][this[softDropId]][steps] : 0);

            _0x976ex4 && (this[v][redraw](), this[softDrop] && this[score](this[Scoring][A].SOFT_DROP, _0x976ex4))
        } else {
            this[softDrop] = false,
            this[gameStep] = 0.9,
            this[timer] = 0
        };

        break;

    case Action[HOLD_BLOCK]:
        this[holdBlock]();

        break;

    case Action[GARBAGE_ADD]:
        let _0x976ex3 = _0x976ex2[d][0],
        _0x976ex9 = _0x976ex2[d][1];

        this[garbage_add_adv](_0x976ex3, _0x976ex9);

        break;

    case Action[SGARBAGE_ADD]:
        for (this[ghostPiece][pos][y]--, this[addSolidGarbage]();
 this[checkIntersection](this[activeBlock][pos][x], this[activeBlock][pos][y], this[activeBlock][rot]) && (this[activeBlock][pos][y]--, !(this[activeBlock][pos][y] < -4));
 ) { ;

        };

        this[updateGhostPiece](false);

        break;

    case Action[REDBAR_SET]:
        this[redBar] = _0x976ex2[d][0],
        this[v][redraw]();

        break;

    case Action[ARR_MOVE]:
        this[moveCurrentBlock](0 === _0x976ex2[d][0] ? -1 : 1, false);

        break;

    case Action[AUX]:
        if (_0x976ex2[aux] === Aux[BLOCK_SET]) {
            0 === _0x976ex2[d][0] ? this[temporaryBlockSet] = _0x976ex2[d][1] : 1 === _0x976ex2[d][0] && (this[R][baseBlockSet] = _0x976ex2[d][1])
        } else {
            if (_0x976ex2[aux] === Aux[MOVE_TO]) {
                this[ghostPiece][pos][x] = this[activeBlock][pos][x] = _0x976ex2[d][0],
                this[ghostPiece][pos][y] = this[activeBlock][pos][y] = _0x976ex2[d][1],
                this[updateGhostPiece](true),
                this[v][redraw]()
            } else {
                if (_0x976ex2[aux] === Aux[RANDOMIZER]) {
                    this[randomizer] = this[randomizerFactory](_0x976ex2[d][1]),
                    1 === _0x976ex2[d][0] && this[generateQueue]()
                } else {
                    if (_0x976ex2[aux] === Aux[MATRIX_MOD]) {
                        if (0 === _0x976ex2[d][0]) {
                            let _0x976ex3 = _0x976ex2[d][1];

                            this[Items][tfTornado](_0x976ex3)
                        } else {
                            if (1 === _0x976ex2[d][0]) {
                                for (var _0x976ex5 = 1;
 _0x976ex5 < 10;
 _0x976ex5++) {
                                    this[Items][compressMatrix](_0x976ex5)
                                }
                            } else {
                                2 === _0x976ex2[d][0] ? this[Items][loadFourWide](new MapManager(this)) : 3 === _0x976ex2[d][0] && this[Items][invertMatrix]()
                            }
                        };

                        this[setCurrentPieceToDefaultPos](),
                        this[updateGhostPiece](true)
                    } else {
                        if (_0x976ex2[aux] === Aux[WIDE_GARBAGE_ADD]) {
                            let _0x976ex3 = _0x976ex2[d][0],
                            _0x976ex4 = _0x976ex2[d][1],
                            _0x976ex5 = _0x976ex2[d][2],
                            _0x976ex9 = _0x976ex2[d][3];

                            this[garbage_add_adv](_0x976ex3, _0x976ex4, _0x976ex5, _0x976ex9)
                        }
                    }
                }
            }
        }
    };

    this[debug] && console.log(Object[keys](Action)[_0x976ex3] +  -  + JSON.stringify(_0x976ex2))
}, Replayer[prototype][applyGravitySteps] = function () {
    if (!(this[r][c][v] >= 3)) {
        for (var _0x976ex2 = false, _0x976ex3 = 20;
 this[timer] >= this[gameStep] && (this[timer] -= this[gameStep], this[gravityStep](this[softDrop] ? this[softDropSpeeds][this[softDropId]][steps] : 0), _0x976ex2 = true, _0x976ex3--);
 ) { ;

        };

        _0x976ex2 && this[v][redraw]()
    }
}, Replayer[prototype][playLive] = function (_0x976ex2) {
    if (this[playingLive] = true, ++this[frameId], this[timeout]) {
        clearTimeout(this[timeout]),
        this[timeout] = null;

        let _0x976ex2 = 0,
        _0x976ex3 = 0;

        for (;
 this[ptr] < this[actions][length];
 ) {
            this[processAction](this[actions][this[ptr]]),
            ++_0x976ex2,
            _0x976ex3 += 0 === this[ptr] ? this[actions][this[ptr]][t] : this[actions][this[ptr]][t] - this[actions][this[ptr] - 1][t],
            ++this[ptr]
        };

        LIVE_REPLAY_LOG && console.log([ + this[frameId] + ]SKIP_AHEAD :  + _0x976ex2 + actions,  + _0x976ex3 + ms)
    } else {
        if (LIVE_REPLAY_LOG && this[frameFinish]) {
            let _0x976ex3 = (new Date)[getTime]();

            console.log([ + this[frameId] + ]WAITING:  + (_0x976ex3 - this[frameFinish]) + ms( + _0x976ex2[length] + ))
        }
    };

    for (this[frameFinish] = null, this[actions] = _0x976ex2, this[ptr] = 0;
 this[ptr] < this[actions][length] && 0 === this[actions][this[ptr]][t];
 ) {
        this[processAction](this[actions][this[ptr]]),
        ++this[ptr]
    };

    this[playByTimeouts]()
}, Replayer[prototype][playByTimeouts] = function () {
    if (this[ptr] < this[actions][length]) {
        var _0x976ex2 = this;

        this[timeout] = setTimeout((function () {
                    _0x976ex2[processAction](_0x976ex2[actions][_0x976ex2[ptr]]),
                    ++_0x976ex2[ptr],
                    _0x976ex2[timeout] = null,
                    _0x976ex2[playByTimeouts]()
                }), this[actions][this[ptr]][t])
    } else {
        this[ptr] === this[actions][length] && (this[frameFinish] = (new Date)[getTime]())
    }
}, Replayer[prototype][playUntilTime] = function (_0x976ex2) {
    if (!this[reachedEnd]) {
        for (;
 _0x976ex2 >= this[actions][this[ptr]][t];
 ) {
            if (this[ptr] && (this[timer] += (this[actions][this[ptr]][t] - this[actions][this[ptr] - 1][t]) / 1e3), this[applyGravitySteps](), this[processAction](this[actions][this[ptr]]), this[ptr]++, this[actions][length] === this[ptr]) {
                this[reachedEnd] = true;

                break
            }
        };

        this[frames]++,
        this[clock] = _0x976ex2,
        (this[frames] % 5 == 0 || this[reachedEnd]) && (this[reachedEnd] && (this[clock] = this[actions][this[actions][length] - 1][t], this[v][paintMatrixWithColor](9), this[v][redraw](), void(0) !== this[v][sprintInfo] && hideElem(this[v][sprintInfo])), this[v][updateTextBar]())
    }
}, Replayer[prototype][getPPS] = function () {
    return Math[round](100 * this[placedBlocks] / (this[clock] / 1e3)) / 100
}, Replayer[prototype][timestamp] = function () {
    return (new Date)[getTime]()
}, Replayer[prototype][score] = function (_0x976ex2, _0x976ex3) {
    var _0x976ex4;

    if (void(0) === _0x976ex3 && (_0x976ex3 = 1), this[gamedata][score] += _0x976ex4 = _0x976ex3 * this[Scoring][get](_0x976ex2, this[wasBack2Back]), null === this[scoreStamps] && (this[scoreStamps] = []), _0x976ex2 !== this[Scoring][A][SOFT_DROP] && _0x976ex2 !== this[Scoring][A][HARD_DROP]) {
        var _0x976ex5 = 0;

        this[ptr] >= 1 && (_0x976ex5 = this[actions][this[ptr] - 1][t]),
        0,
        this[scoreStamps][push]([_0x976ex5, _0x976ex2, _0x976ex4, _0x976ex3, 0])
    };

    this[GameStats] && this[GameStats][get](SCORE)[set](this[gamedata][score]),
    this[v][onScoreChanged](_0x976ex2)
}, undefined != typeof module && null != module && (module[exports] = Replayer), Analytics[prototype][emptyData] = function () {
    this[data] = {
        finesse: null,
        scoreStamps: null
    }
}, Analytics[prototype][onReplayLoaded] = function (_0x976ex2) {
    this[r] = _0x976ex2,
    this[actions] = this[r][a],
    this[emptyData](),
    this[analyze]()
}, Analytics[prototype][analyze] = function () {
    this[analyzeHardDrops](),
    this[analyzeScoring](),
    this[initScoreFilter]()
}, Analytics[prototype][analyzeHardDrops] = function () {
    this[harddrops] = [];

    for (var _0x976ex2 = null, _0x976ex3 = 0;
 _0x976ex3 < this[actions][length];
 _0x976ex3++) {
        if (this[actions][_0x976ex3][a] === Action[HARD_DROP]) {
            var _0x976ex4 = null !== _0x976ex2 ? this[actions][_0x976ex3][t] - _0x976ex2 : null;

            _0x976ex4 && this[harddrops][push]({
                frame: _0x976ex3,
                deltat: _0x976ex4
            }),
            _0x976ex2 = this[actions][_0x976ex3][t],
            this[actions][_0x976ex3][hdId] = this[harddrops][length] + 1
        }
    };

    this[findSegments]()
}, Analytics[prototype][findSegments] = function () {
    for (var _0x976ex2 = this[segSize], _0x976ex3 = [], _0x976ex4 = [], _0x976ex5 = 0;
 _0x976ex5 < this[harddrops][length];
 _0x976ex5++) {
        _0x976ex3[_0x976ex5] = this[harddrops][_0x976ex5][deltat],
        _0x976ex5 && (_0x976ex3[_0x976ex5] += _0x976ex3[_0x976ex5 - 1]),
        _0x976ex5 >= _0x976ex2 - 1 && (_0x976ex4[_0x976ex5] = [], _0x976ex4[_0x976ex5][0] = _0x976ex3[_0x976ex5] - (_0x976ex5 === _0x976ex2 - 1 ? 0 : _0x976ex3[_0x976ex5 - _0x976ex2]), _0x976ex4[_0x976ex5][1] = _0x976ex5, _0x976ex4[_0x976ex5][2] = void(0) !== this[harddrops][_0x976ex5 - (_0x976ex2 + 1)] ? this[harddrops][_0x976ex5 - (_0x976ex2 + 1)][frame] : this[harddrops][_0x976ex5 - _0x976ex2 + 1][frame], _0x976ex4[_0x976ex5][3] = _0x976ex3[_0x976ex5])
    };

    this[processSegments](_0x976ex4)
}, Analytics[prototype][drawSpeedChart] = function () {
    var _0x976ex2 = document[getElementById](speedChart),
    _0x976ex3 = _0x976ex2[getContext](2d),
    _0x976ex4 = _0x976ex2[width],
    _0x976ex5 = _0x976ex2[height],
    _0x976ex9 = -1,
    _0x976ex21 = 1,
    _0x976ex22 = 25;

    1 !== this[i] && _0x976ex3[clearRect](0, 0, _0x976ex4, _0x976ex5),
    _0x976ex3[strokeStyle] = white,
    _0x976ex3[beginPath](),
    _0x976ex3[moveTo](_0x976ex22, 10),
    _0x976ex3[lineTo](_0x976ex22, _0x976ex5 - 10),
    _0x976ex3[lineTo](_0x976ex4, _0x976ex5 - 10),
    _0x976ex3[stroke]();

    for (var _0x976ex23 = this[segSize];
 _0x976ex23 < this[segments][length];
 _0x976ex23++) {
        var _0x976ex24 = this[segSize] / (this[segments][_0x976ex23][0] / 1e3);

        _0x976ex24 > _0x976ex9 && (_0x976ex9 = _0x976ex24)
    };

    var _0x976ex25 = _0x976ex21 = (_0x976ex9 = Math[ceil](_0x976ex9)) >= 3 ? 1 : 0.5;

    for (_0x976ex3[beginPath](), _0x976ex3[strokeStyle] =  # 1c1c1c, _0x976ex3[font] = 10px Verdana, _0x976ex3[fillStyle] = white;
 _0x976ex25 < _0x976ex9;
 ) {
        var _0x976ex26 = _0x976ex25 / _0x976ex9 * (_0x976ex5 - 10);

        _0x976ex3[fillText](_0x976ex9 - _0x976ex25, 5, _0x976ex26 + 3),
        _0x976ex3[moveTo](_0x976ex22, _0x976ex26),
        _0x976ex3[lineTo](_0x976ex4, _0x976ex26),
        _0x976ex25 += _0x976ex21
    };

    if (_0x976ex3[fillText](PPS, 0, _0x976ex5 - 10), _0x976ex3[stroke](), this[xStep] = (_0x976ex4 - _0x976ex22) / (this[segments][length] - this[segSize]), this[showFinesse]) {
        var _0x976ex27 = this[controller][g][0][finFaults];

        null === _0x976ex27 && (this[data] = this[controller][getFinesse](), null === (_0x976ex27 = this[data][finesse]) && (_0x976ex27 = []));

        for (_0x976ex23 = 0;
 _0x976ex23 < _0x976ex27[length];
 _0x976ex23++) {
            _0x976ex3[beginPath](),
            _0x976ex3[strokeStyle] = red;

            var _0x976ex28 = _0x976ex22 + (_0x976ex27[_0x976ex23] - 1) * this[xStep];

            _0x976ex3[moveTo](_0x976ex28, 10),
            _0x976ex3[lineTo](_0x976ex28, _0x976ex5 - 10),
            _0x976ex3[stroke](),
            _0x976ex3[fillStyle] = red,
            _0x976ex3[moveTo](_0x976ex28 - 5, 0),
            _0x976ex3[lineTo](_0x976ex28 + 5, 0),
            _0x976ex3[lineTo](_0x976ex28, 15),
            _0x976ex3[fill]()
        }
    };

    if (this[showRelAtk]) {
        let _0x976ex2 = this[getRelativeAttackOutput](0);

        _0x976ex3[beginPath](),
        _0x976ex3[lineWidth] = 5;

        var _0x976ex29 = [ # B12888,  # F95025,  # B9E446];

        _0x976ex3[strokeStyle] = _0x976ex29[this[i]],
        _0x976ex3[moveTo](_0x976ex22, _0x976ex5 - 10);

        var _0x976ex2a = this[segSize];

        for (_0x976ex23 = this[segSize] - 1;
 _0x976ex23 < this[segments][length];
 _0x976ex23++) {
            _0x976ex26 = _0x976ex2[data][_0x976ex23 - this[segSize] + 1] / this[segSize] / (_0x976ex2[max] / this[segSize]) * (_0x976ex5 - 10);

            _0x976ex3[lineTo](_0x976ex22 + (_0x976ex23 - this[segSize] + 1) * this[xStep], _0x976ex5 - 10 - _0x976ex26)
        };

        _0x976ex3[stroke](),
        _0x976ex3[lineWidth] = 1
    };

    if (this[showGlobalAvg]) {
        _0x976ex3[beginPath](),
        _0x976ex3[lineWidth] = 5;

        _0x976ex29 = [ # 001B73,  # 001B73];

        _0x976ex3[strokeStyle] = _0x976ex29[this[i]],
        _0x976ex3[moveTo](_0x976ex22, _0x976ex5 - 10);

        for (_0x976ex2a = this[segSize], _0x976ex23 = this[segSize] - 1;
 _0x976ex23 < this[segments][length];
 _0x976ex23++) {
            _0x976ex26 = (_0x976ex2a += 1) / (this[segments][_0x976ex23][3] / 1e3) / _0x976ex9 * (_0x976ex5 - 10);

            _0x976ex3[lineTo](_0x976ex22 + (_0x976ex23 - this[segSize] + 1) * this[xStep], _0x976ex5 - 10 - _0x976ex26)
        };

        _0x976ex3[stroke](),
        _0x976ex3[lineWidth] = 1
    };

    if (this[showLocalSpeed]) {
        _0x976ex3[beginPath]();

        _0x976ex29 = [yellow,  # 3639E5];

        _0x976ex3[strokeStyle] = _0x976ex29[this[i]],
        _0x976ex3[moveTo](_0x976ex22, _0x976ex5 - 10);

        for (_0x976ex23 = this[segSize] - 1;
 _0x976ex23 < this[segments][length];
 _0x976ex23++) {
            _0x976ex26 = this[segSize] / (this[segments][_0x976ex23][0] / 1e3) / _0x976ex9 * (_0x976ex5 - 10);

            _0x976ex3[lineTo](_0x976ex22 + (_0x976ex23 - this[segSize] + 1) * this[xStep], _0x976ex5 - 10 - _0x976ex26)
        };

        _0x976ex3[stroke]()
    }
}, Analytics[prototype][processSegments] = function (_0x976ex2) {
    this[segments] = _0x976ex2[slice](0),
    this[drawSpeedChart]();

    var _0x976ex3,
    _0x976ex4,
    _0x976ex5 = [],
    _0x976ex9 = [];

    _0x976ex5[0] = function (_0x976ex2, _0x976ex3) {
        return _0x976ex2[0] > _0x976ex3[0] ? 1 : _0x976ex3[0] > _0x976ex2[0] ? -1 : 0
    },
    _0x976ex5[1] = function (_0x976ex2, _0x976ex3) {
        return _0x976ex2[0] < _0x976ex3[0] ? 1 : _0x976ex3[0] < _0x976ex2[0] ? -1 : 0
    },
    _0x976ex9[0] = document[getElementById](segFast),
    _0x976ex9[1] = document[getElementById](segSlow);

    for (var _0x976ex21 = 0;
 _0x976ex21 < 2;
 _0x976ex21++) {
        _0x976ex2[sort](_0x976ex5[_0x976ex21]);

        var _0x976ex22 =  < thead >  < tr >  < th width = "100" >  + i18n[segment] +  <  / th >  < th width = "100" >  + i18n[duration] +  <  / th >  < th width = "70" > PPS <  / th >  <  / tr >  <  / thead > ;

        _0x976ex9[_0x976ex21][innerHTML] = _0x976ex22;

        for (var _0x976ex23 = 0, _0x976ex24 = -1, _0x976ex25 = [];
 _0x976ex23 < 5 && ++_0x976ex24 !== _0x976ex2[length] && void(0) !== _0x976ex2[_0x976ex24];
 ) {
            for (var _0x976ex26 = false, _0x976ex27 = 0;
 _0x976ex27 < _0x976ex25[length];
 _0x976ex27++) {
                var _0x976ex28 = _0x976ex2[_0x976ex24][1] - (this[segSize] - 1),
                _0x976ex29 = _0x976ex2[_0x976ex24][1],
                _0x976ex2a = _0x976ex25[_0x976ex27][1] - (this[segSize] - 1),
                _0x976ex2b = _0x976ex25[_0x976ex27][1];

                if (_0x976ex28 >= _0x976ex2a && _0x976ex28 <= _0x976ex2b || _0x976ex29 >= _0x976ex2a && _0x976ex29 <= _0x976ex2b) {
                    _0x976ex26 = true;

                    break
                }
            };

            if (!_0x976ex26) {
                _0x976ex25[push](_0x976ex2[_0x976ex24]);

                var _0x976ex2c = Math[round](this[segSize] / (_0x976ex2[_0x976ex24][0] / 1e3) * 100) / 100;

                (_0x976ex4 = document[createElement](tr))[classList][add](segrow),
                _0x976ex4[dataset][pos] = _0x976ex2[_0x976ex24][2],
                _0x976ex4[dataset][i] = _0x976ex2[_0x976ex24][1],
                _0x976ex4[addEventListener](click, this[loadAtFrame][bind](this), false),
                _0x976ex4[addEventListener](mouseenter, this[highlightSegment][bind](this), false),
                _0x976ex4[addEventListener](mouseleave, this[clearHighlights][bind](this), false),
                (_0x976ex3 = document[createElement](td))[innerHTML] = S + _0x976ex2[_0x976ex24][1],
                _0x976ex4[appendChild](_0x976ex3),
                (_0x976ex3 = document[createElement](td))[innerHTML] = _0x976ex2[_0x976ex24][0] / 1e3,
                _0x976ex4[appendChild](_0x976ex3),
                (_0x976ex3 = document[createElement](td))[innerHTML] = _0x976ex2c,
                _0x976ex4[appendChild](_0x976ex3),
                _0x976ex9[_0x976ex21][appendChild](_0x976ex4),
                _0x976ex23++
            }
        }
    }
}, Analytics[prototype][getTR] = function (_0x976ex2) {
    var _0x976ex3 = _0x976ex2;

    return TD === _0x976ex3[nodeName] && (_0x976ex3 = _0x976ex3[parentNode]),
    _0x976ex3
}, Analytics[prototype][highlightSegment] = function (_0x976ex2) {
    this[scLayer1][width];

    var _0x976ex3 = this[scLayer1][height],
    _0x976ex4 = this[getTR](_0x976ex2[target])[dataset][i];

    this[ctx1][globalAlpha] = 0.5,
    this[ctx1][fillStyle] = blue,
    this[ctx1][fillRect](25 + (_0x976ex4 - this[segSize] + 1 - this[segSize]) * this[xStep], 10, this[segSize] * this[xStep], _0x976ex3 - 20)
}, Analytics[prototype][clearHighlights] = function (_0x976ex2) {
    this[ctx1][clearRect](0, 0, this[scLayer1][width], this[scLayer1][height])
}, Analytics[prototype][loadAtFrame] = function (_0x976ex2) {
    var _0x976ex3 = parseInt(this[getTR](_0x976ex2[target])[dataset][pos]);

    !isNaN(_0x976ex3) && _0x976ex3 >= 0 && this[controller][loadAtFrame](_0x976ex3)
}, Analytics[prototype][loadAtTime] = function (_0x976ex2) {
    var _0x976ex3 = parseInt(this[getTR](_0x976ex2[target])[dataset][t]);

    !isNaN(_0x976ex3) && _0x976ex3 >= 0 && this[controller][loadAtTime](_0x976ex3)
}, Analytics[prototype][getEvtPos] = function (_0x976ex2) {
    var _0x976ex3 = this[scLayer1][getBoundingClientRect](),
    _0x976ex4 = this[scLayer1][width] / _0x976ex3[width],
    _0x976ex5 = this[scLayer1][height] / _0x976ex3[height],
    _0x976ex9 = {};

    return _0x976ex9[X] = (_0x976ex2[clientX] - _0x976ex3[left]) * _0x976ex4,
    _0x976ex9[Y] = (_0x976ex2[clientY] - _0x976ex3[top]) * _0x976ex5,
    _0x976ex9[X] < 25 && (_0x976ex9[X] = 25),
    _0x976ex9
}, Analytics[prototype][mouseMove] = function (_0x976ex2) {
    var _0x976ex3 = this[getEvtPos](_0x976ex2);

    this[clearHighlights](),
    this[ctx1][strokeStyle] =  # FFFFFF,
    this[ctx1][fillStyle] =  # FFFFFF,
    this[ctx1][beginPath](),
    this[ctx1][moveTo](_0x976ex3.X, 10),
    this[ctx1][lineTo](_0x976ex3.X, this[scLayer1][height] - 10),
    this[ctx1][stroke](),
    this[ctx1][moveTo](_0x976ex3[X] - 5, 0),
    this[ctx1][lineTo](_0x976ex3[X] + 5, 0),
    this[ctx1][lineTo](_0x976ex3.X, 15),
    this[ctx1][fill]()
}, Analytics[prototype][chartClick] = function (_0x976ex2) {
    var _0x976ex3 = this[getEvtPos](_0x976ex2),
    _0x976ex4 = Math[round]((_0x976ex3[X] - 25) / this[xStep]) + (this[segSize] - 1);

    this[controller][loadAtFrame](this[segments][_0x976ex4][2])
}, Analytics[prototype][dispG] = function (_0x976ex2) {
    this[showGlobalAvg] = document[getElementById](dispG)[checked],
    this[drawSpeedChart]()
}, Analytics[prototype][dispF] = function (_0x976ex2) {
    this[showFinesse] = document[getElementById](dispF)[checked],
    this[drawSpeedChart]()
}, Analytics[prototype][dispL] = function (_0x976ex2) {
    this[showLocalSpeed] = document[getElementById](dispL)[checked],
    this[drawSpeedChart]()
}, Analytics[prototype][dispP] = function (_0x976ex2) {
    this[showCurrentPos] = document[getElementById](dispP)[checked],
    this[showCurrentPos] || this[ctx0][clearRect](0, 0, this[scLayer0][width], this[scLayer0][height])
}, Analytics[prototype][dispRA] = function (_0x976ex2) {
    this[showRelAtk] = document[getElementById](dispRA)[checked],
    this[drawSpeedChart]()
}, Analytics[prototype][updatePos] = function (_0x976ex2) {
    var _0x976ex3 = _0x976ex2;

    if (this[showCurrentPos]) {
        this[ctx0][clearRect](0, 0, this[scLayer0][width], this[scLayer0][height]),
        this[ctx0][beginPath]();

        var _0x976ex4 = 25 + (_0x976ex2 = Math[max](_0x976ex2 - this[segSize], 0)) * this[xStep];

        this[ctx0][moveTo](_0x976ex4, 10),
        this[ctx0][lineTo](_0x976ex4, this[scLayer0][height] - 10),
        this[ctx0][stroke]();

        var _0x976ex5 = Math[min](this[segSize], _0x976ex3 - 1);

        this[ctx0][beginPath](),
        this[ctx0][setLineDash]([5, 5]),
        this[ctx0][moveTo](_0x976ex4, this[scLayer0][height] - 12),
        this[ctx0][lineTo](_0x976ex4 + this[xStep] * _0x976ex5, this[scLayer0][height] - 12),
        this[ctx0][lineTo](_0x976ex4 + this[xStep] * _0x976ex5, 10),
        this[ctx0][stroke](),
        this[ctx0][setLineDash]([]),
        this[ctx0][beginPath](),
        this[ctx0][moveTo](_0x976ex4 - 5, 0),
        this[ctx0][lineTo](_0x976ex4 + 5, 0),
        this[ctx0][lineTo](_0x976ex4, 15),
        this[ctx0][fill]()
    }
}, Analytics[prototype][initScoreFilter] = function () {
    for (var _0x976ex2 = document[getElementById](scoreFilter1), _0x976ex3 = , _0x976ex4 = 0, _0x976ex5 = Object[keys](this[controller][g][0][Scoring].A), _0x976ex9 = 2;
 _0x976ex9 < _0x976ex5[length];
 _0x976ex9++) {
        _0x976ex3 +=  < input type = "checkbox" name = "chbx+ _0x976ex9+ " id = "chbx+ _0x976ex9+ " checked = "" >  < label for  = "chbx+ _0x976ex9+ " >  + _0x976ex5[_0x976ex9] +  <  / label >  < br > , 6 === ++_0x976ex4 && (_0x976ex2[innerHTML] = _0x976ex3, _0x976ex3 = , _0x976ex2 = document[getElementById](scoreFilter2))
    };

    _0x976ex2[innerHTML] = _0x976ex3,
    document[getElementById](applyFilter)[addEventListener](click, this[applyFilter][bind](this), false)
}, Analytics[prototype][applyFilter] = function () {
    for (var _0x976ex2 = Object[keys](this[controller][g][0][Scoring].A), _0x976ex3 = 2;
 _0x976ex3 < _0x976ex2[length];
 _0x976ex3++) {
        this[scoreFilter][_0x976ex3] = document[getElementById](chbx + _0x976ex3)[checked]
    };

    this[analyzeScoring]()
}, Analytics[prototype][fetchScoreStamps] = function () {
    var _0x976ex2 = this[data][scoreStamps];

    return null === _0x976ex2 && (this[data] = this[controller][getFinesse](), null === (_0x976ex2 = this[data][scoreStamps]) && (_0x976ex2 = [])),
    _0x976ex2
}, Analytics[prototype][getRelativeAttackOutput] = function (_0x976ex2) {
    for (var _0x976ex3 = 0 === _0x976ex2 ? 2 : 4, _0x976ex4 = this[fetchScoreStamps](), _0x976ex5 = 0, _0x976ex9 = 0, _0x976ex21 = 0, _0x976ex22 = [], _0x976ex23 = 0, _0x976ex24 = 0, _0x976ex25 = 0, _0x976ex26 = 0, _0x976ex27 = this[segSize] - 1;
 _0x976ex27 < this[segments][length];
 _0x976ex27++) {
        for (_0x976ex25 = (_0x976ex24 = _0x976ex27 - Math[floor](this[segments][length] / 100) * this[segSize]) <= this[segSize] - 1 ? 0 : this[segments][_0x976ex24][3] - this[segments][_0x976ex24][0], _0x976ex26 = this[segments][_0x976ex27][3];
 _0x976ex9 < _0x976ex4[length] && _0x976ex4[_0x976ex9][0] <= _0x976ex26;
 ) {
            _0x976ex21 += _0x976ex4[_0x976ex9][_0x976ex3],
            _0x976ex9++
        };

        for (;
 _0x976ex5 < _0x976ex4[length] && _0x976ex4[_0x976ex5][0] < _0x976ex25;
 ) {
            _0x976ex21 -= _0x976ex4[_0x976ex5][_0x976ex3],
            _0x976ex5++
        };

        var _0x976ex28 = _0x976ex21;

        _0x976ex22[push](_0x976ex28)
    };

    var _0x976ex29 = this[segments][length] / 30,
    _0x976ex2a = [];

    for (_0x976ex27 = 0;
 _0x976ex27 < _0x976ex22[length];
 _0x976ex27++) {
        let _0x976ex2 = 0;

        for (var _0x976ex2b = _0x976ex27;
 _0x976ex2b < _0x976ex27 + _0x976ex29 && _0x976ex2b < _0x976ex22[length];
 _0x976ex2b++) {
            _0x976ex2 += _0x976ex22[_0x976ex2b]
        };

        _0x976ex2 /= _0x976ex29,
        _0x976ex2 > _0x976ex23 && (_0x976ex23 = Math[ceil](_0x976ex2)),
        _0x976ex2a[push](_0x976ex2)
    };

    return {
        data: _0x976ex2a,
        max: _0x976ex23
    }
}, Analytics[prototype][analyzeScoring] = function () {
    var _0x976ex2 = this[fetchScoreStamps](),
    _0x976ex3 = this[controller][g][0][Scoring],
    _0x976ex4 = Object[keys](_0x976ex3.A);

    this[tb][innerHTML] = ;

    for (var _0x976ex5, _0x976ex9, _0x976ex21 = 0;
 _0x976ex21 < _0x976ex2[length];
 _0x976ex21++) {
        void(0) !== this[scoreFilter][_0x976ex2[_0x976ex21][1]] && false === this[scoreFilter][_0x976ex2[_0x976ex21][1]] || ((_0x976ex5 = document[createElement](tr))[classList][add](segrow), _0x976ex5[dataset][t] = _0x976ex2[_0x976ex21][0], _0x976ex5[addEventListener](click, this[loadAtTime][bind](this), false), (_0x976ex9 = document[createElement](td))[innerHTML] = sprintTimeFormat(_0x976ex2[_0x976ex21][0] / 1e3), _0x976ex5[appendChild](_0x976ex9), (_0x976ex9 = document[createElement](td))[innerHTML] = _0x976ex4[_0x976ex2[_0x976ex21][1]] + (_0x976ex2[_0x976ex21][1] === _0x976ex3[A][COMBO] ? x + _0x976ex2[_0x976ex21][3] : ), _0x976ex5[appendChild](_0x976ex9), (_0x976ex9 = document[createElement](td))[innerHTML] = _0x976ex2[_0x976ex21][2], _0x976ex5[appendChild](_0x976ex9), this[tb][appendChild](_0x976ex5))
    }
}, SimpleStatsManager[prototype][setShownStats] = function (_0x976ex2) {
    var _0x976ex3 = localStorage[getItem](shownStats);

    null != _0x976ex3 && (100 === _0x976ex2 && (_0x976ex2 = 0), (_0x976ex3 = _0x976ex3[split](, )[map](((_0x976ex2) => {
                        return parseInt(_0x976ex2)
                    })))[_0x976ex2]) ? this[shown] = _0x976ex3[_0x976ex2] : (this[shown] = 741, 5 === _0x976ex2 && (this[shown] = 742, this[shown] = 998), 100 === _0x976ex2 && (this[shown] = 965))
}, SimpleStatsManager[prototype][initDefault] = function (_0x976ex2) {
    this[addStat](new StatLine(CLOCK, i18n[roundTime], 0)),
    this[addStat](new StatLine(SCORE, i18n[score], 10)),
    this[addStat](new StatLine(LINES, Lines, 15)),
    this[addStat](new StatLine(ATTACK, i18n[attack], 20)),
    this[addStat](new StatLine(RECV, i18n[received], 30)),
    this[addStat](new StatLine(FINESSE, i18n[finesse], 40)),
    this[addStat](new StatLine(PPS, i18n.PPS, 50)),
    this[addStat](new StatLine(KPP, i18n.KPP, 60)),
    this[addStat](new StatLine(APM, i18n.APM, 70)),
    this[addStat](new StatLine(BLOCKS,  # , 80)),
    this[addStat](new StatLine(VS, VS, 90), false),
    this[addStat](new StatLine(WASTE, Wasted, 100), false),
    this[addStat](new StatLine(HOLD, Hold, 110), false),
    this[ordered][0][initialVal] = 0.00
}, SimpleStatsManager[prototype][addShownStats] = function () {
    let _0x976ex2 = this[v][statTable];

    for (;
 _0x976ex2[firstChild];
 ) {
        _0x976ex2[firstChild][remove]()
    };

    for (var _0x976ex3 = 0;
 _0x976ex3 < this[ordered][length];
 _0x976ex3++) {
        this[ordered][_0x976ex3][enabled] = false
    };

    for (_0x976ex3 = 0;
 _0x976ex3 <= Math[ceil](Math[log2](this[shown]));
 _0x976ex3++) {
        if (this[shown] & 1 << _0x976ex3) {
            let _0x976ex2 = document[createElement](tr);

            _0x976ex2[appendChild](this[ordered][_0x976ex3][label]),
            _0x976ex2[appendChild](this[ordered][_0x976ex3][statElem]),
            this[ordered][_0x976ex3][enabled] = true,
            this[ordered][_0x976ex3][statElem][textContent] = this[ordered][_0x976ex3][initialVal],
            this[v][statTable][appendChild](_0x976ex2)
        }
    }
}, SimpleStatsManager[prototype][addStat] = function (_0x976ex2) {
    this[ordered][push](_0x976ex2)
}, SimpleStatsManager[prototype][resetAll] = function () {
    for (var _0x976ex2 = 0;
 _0x976ex2 < this[ordered][length];
 _0x976ex2++) {
        this[ordered][_0x976ex2][reset]()
    }
}, StatLine[prototype][reset] = function () {
    return this[set](this[initialVal]),
    this
}, StatLine[prototype][set] = function (_0x976ex2) {
    return this[enabled] && _0x976ex2 != this[value] && (this[value] = _0x976ex2, this[statElem][textContent] = _0x976ex2),
    this
}, SimpleStatsManager[prototype][get] = function (_0x976ex2) {
    return this[ordered][find](((_0x976ex3) => {
            return _0x976ex3[id] === _0x976ex2
        }))
}