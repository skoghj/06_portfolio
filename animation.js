//window load//
window.addEventListener("load", sidenVises);
document.querySelector("#game_background").classList.add("hide");
document.querySelector("#game_mellemground").classList.add("hide");
document.querySelector("#game_foreground").classList.add("hide");
document.querySelector("#game_ui").classList.add("hide");
document.querySelector("#timer_container").classList.add("hide");
document.querySelector("#flaske").classList.add("hide");
document.querySelector("#fyld").classList.add("hide");

//Global vrialble//
let point;
let liv = 3;
//DRY - elementer
const con_god1 = document.querySelector("#god1_container");
const spri_god1 = document.querySelector("#god1_sprite");
const con_god2 = document.querySelector("#god2_container");
const spri_god2 = document.querySelector("#god2_sprite");
const con_god3 = document.querySelector("#god3_container");
const spri_god3 = document.querySelector("#god3_sprite");
const con_god4 = document.querySelector("#god4_container");
const spri_god4 = document.querySelector("#god4_sprite");

const con_ond1 = document.querySelector("#ond1_container");
const spri_ond1 = document.querySelector("#ond1_sprite");
const con_ond2 = document.querySelector("#ond2_container");
const spri_ond2 = document.querySelector("#ond2_sprite");

const con_lyn1 = document.querySelector("#lyn1_container");
const spri_lyn1 = document.querySelector("#lyn1_sprite");
const con_lyn2 = document.querySelector("#lyn2_container");
const spri_lyn2 = document.querySelector("#lyn2_sprite");

//point
const pointTavle = document.querySelector("#score_board");

//skærm og knapper
const StartScreen = document.querySelector("#start");
const GameOverScreen = document.querySelector("#game_over");
const LevelCompleteScreen = document.querySelector("#level_complete");

const PlayKnap = document.querySelector("#start_knap");
const RulesKnap = document.querySelector("#rules_knap");
const Rulesbox = document.querySelector("#rules_map");
const MenuKnap = document.querySelector("#menu_kanp");
const Musicbox = document.querySelector("#musicbox");

const PlayAgain = document.querySelector("#genstart_knap");
const PlayAgain_win = document.querySelector("#genstart_knap_2");

//music
const BgrMusic1 = document.querySelector("#sound1_background");
const BgrMusic = document.querySelector("#sound_background");

const Sound_cotton = document.querySelector("#sound_cottencandy");
const Sound_confetti = document.querySelector("#sound_confetti");

const Sound_bom = document.querySelector("#sound_bomber");
const Sound_bom2 = document.querySelector("#sound_bomber2");

const Sound_lyn = document.querySelector("#sound_lyn");

const gameover_bgr = document.querySelector("#sound_gameover");
const level_comp_juhu = document.querySelector("#sound_complete_juhu");

//music info////////////////
const MusicBar = document.querySelector("#music_bar");
const Play_Btn = document.querySelector("#play_button");
const Stopmusic_Btn = document.querySelector("#stop_button");
const SoundWave = document.querySelector("#sound_wave");
//Random position
function nytRand(max) {
  return Math.floor(Math.random() * max) + 1;
}

function sidenVises() {
  console.log("sidenVises");
  //Skjul andre skærme

  GameOverScreen.classList.add("hide");
  LevelCompleteScreen.classList.add("hide");
  Rulesbox.classList.add("hide");
  Musicbox.classList.add("hide");
  MusicBar.classList.add("hide");
  SoundWave.classList.add("hide");
  Stopmusic_Btn.classList.add("hide");
  Play_Btn.classList.add("hide");
  //Vis start skærm
  StartScreen.classList.remove("hide");
  RulesKnap.classList.remove("hide");

  //Klik på start_knap
  PlayKnap.addEventListener("click", startGame);
  PlayKnap.classList.add("pulse");
  RulesKnap.addEventListener("click", startInfo);
  MusicBar.addEventListener("click", music_Stop);
  SoundWave.classList.add("pulse");
  MenuKnap.addEventListener("click", startMusicInfo);
  Play_Btn.addEventListener("cklick", music_Stop);
}

//rules vises//
function startInfo() {
  console.log("info");
  document.querySelector("#rules_map").classList.remove("hide");
  GameOverScreen.classList.add("hide");
  LevelCompleteScreen.classList.add("hide");
  Rulesbox.classList.add("zoom_in_info");
  Rulesbox.addEventListener("click", sidenVises);
}
//menu_music indstilling//////////////////////////////////////
function music_Stop() {
  console.log("music_stop");
  Stopmusic_Btn.classList.remove("hide");
  BgrMusic1.pause("click", sidenVises);
  BgrMusic1.currentTime = 0;
  Stopmusic_Btn.addEventListener("click", music_Play);
}

function music_Play() {
  console.log("music_play");
  document.querySelector("#stop_button").classList.add("hide");
  document.querySelector("#play_button").classList.remove("hide");
  BgrMusic1.play();
  document.querySelector("#play_button").addEventListener("click", music_Stop);
}

function startMusicInfo() {
  console.log("music_play");
  Musicbox.classList.remove("hide");
  MusicBar.classList.remove("hide");
  SoundWave.classList.remove("hide");
  Play_Btn.classList.remove("hide");
  Musicbox.addEventListener("click", sidenVises);
  Play_Btn.addEventListener("click", music_Stop);
  if (BgrMusic1.paused) {
    music_Stop();
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
function startGame() {
  console.log("startGame");
  //skjul andre skærme
  GameOverScreen.classList.add("hide");
  LevelCompleteScreen.classList.add("hide");
  StartScreen.classList.add("hide");
  //Vis start skærm
  document.querySelector("#game_background").classList.remove("hide");
  document.querySelector("#game_mellemground").classList.remove("hide");
  document.querySelector("#game_foreground").classList.remove("hide");
  document.querySelector("#game_ui").classList.remove("hide");
  document.querySelector("#timer_container").classList.remove("hide");
  document.querySelector("#flaske").classList.remove("hide");
  document.querySelector("#fyld").classList.remove("hide");

  //stop start side lyd//
  BgrMusic1.pause();
  BgrMusic1.currentTime = 0;

  //Spil lyd generel//
  BgrMusic.volume = 0.3;
  BgrMusic.currentTime = 0;
  BgrMusic.play();

  // TODO: Når lyden er færdig -> gameOver
  BgrMusic.addEventListener("ended", GameOver);
  //nulstil point og udskriv
  point = 0;
  pointTavle.textContent = point;

  //Vis alle liv
  liv = 3;
  document.querySelector("#liv_1").classList.remove("fjern");
  document.querySelector("#liv_2").classList.remove("fjern");
  document.querySelector("#liv_3").classList.remove("fjern");

  //Start timer
  document.querySelector("#fyld").classList.add("timer");
  document.querySelector("#timer_container").addEventListener("animationend", stopSpillet);

  //Giv random-position og delay//
  con_god1.classList.add("pos" + nytRand(7));
  con_god1.classList.add("delay" + nytRand(5));
  con_god2.classList.add("pos" + nytRand(7));
  con_god2.classList.add("delay" + nytRand(5));
  con_god3.classList.add("pos" + nytRand(7));
  con_god3.classList.add("delay" + nytRand(5));
  con_god4.classList.add("pos" + nytRand(7));
  con_god4.classList.add("delay" + nytRand(5));

  con_ond1.classList.add("pos" + nytRand(7));
  con_ond1.classList.add("delay" + nytRand(5));
  con_ond2.classList.add("pos" + nytRand(7));
  con_ond2.classList.add("delay" + nytRand(5));

  con_lyn1.classList.add("pos" + nytRand(7));
  con_lyn1.classList.add("delay" + nytRand(5));
  con_lyn2.classList.add("pos" + nytRand(7));
  con_lyn2.classList.add("delay" + nytRand(5));

  //start fald - animationer på god og ond
  con_god1.classList.add("fald");
  con_god2.classList.add("fald");
  con_god3.classList.add("fald");
  con_god4.classList.add("fald");

  con_ond1.classList.add("fald");
  con_ond2.classList.add("fald");

  con_lyn1.classList.add("fald");
  con_lyn2.classList.add("fald");

  //Lyt efter fald-animationer er færdig
  con_god1.addEventListener("animationiteration", genstartGod);
  con_god2.addEventListener("animationiteration", genstartGod);
  con_god3.addEventListener("animationiteration", genstartGod);
  con_god4.addEventListener("animationiteration", genstartGod);

  con_ond1.addEventListener("animationiteration", genstartOnd);
  con_ond2.addEventListener("animationiteration", genstartOnd);

  con_lyn1.addEventListener("animationiteration", genstartLyn);
  con_lyn2.addEventListener("animationiteration", genstartLyn);

  //Lyt efter klik på alle elementer
  con_god1.addEventListener("mousedown", clickGodHandler);
  con_god2.addEventListener("mousedown", clickGodHandler);
  con_god3.addEventListener("mousedown", clickGodHandler);
  con_god4.addEventListener("mousedown", clickGodHandler);

  con_ond1.addEventListener("mousedown", clickOndHandler);
  con_ond2.addEventListener("mousedown", clickOndHandler);

  con_lyn1.addEventListener("mousedown", clickLynHandler);
  con_lyn2.addEventListener("mousedown", clickLynHandler);
}

///////////////////////////////////////////////////////////////////

function clickGodHandler() {
  console.log("clickGod");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickGodHandler);
  // giv et point og opdater pointTavle
  point++;
  pointTavle.textContent = point;
  //frys(container) og rotation-animation på sprite element (firstElementChild er sprite elementet)//
  this.classList.add("frys");
  this.firstElementChild.classList.add("rotation");
  //Lyt efter rotation-animation er færdig
  this.addEventListener("animationend", Confetti);
  //Spil lyd generel//
  Sound_cotton.volume = 0.5;
  Sound_cotton.currentTime = 0;
  Sound_cotton.play();
}

function Confetti() {
  this.removeEventListener("animationend", Confetti);
  this.firstElementChild.style.backgroundImage = "url('assets/svg/confetti.svg')";
  this.firstElementChild.classList = "confetti";
  this.addEventListener("animationend", genstartGod);
  //lyd
  Sound_confetti.volume = 0.5;
  Sound_confetti.currentTime = 0;
  Sound_confetti.play();
}

function genstartGod() {
  console.log("genstartGod");
  this.removeEventListener("animationend", genstartGod);
  spri_god1.style.backgroundImage = "url('assets/svg/cottoncandy_1.svg')";
  spri_god2.style.backgroundImage = "url('assets/svg/cottoncandy_2.svg')";
  spri_god3.style.backgroundImage = "url('assets/svg/cottoncandy_3.svg')";
  spri_god4.style.backgroundImage = "url('assets/svg/cottoncandy_4.svg')";
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";
  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position og delayt til container
  this.classList.add("pos" + nytRand(7));
  this.classList.add("delay" + nytRand(5));
  //Genstart fald-animation
  this.classList.add("fald");
  //Lyt efter klik på element
  this.addEventListener("mousedown", clickGodHandler);
}

//////////////////////////////////////////////////////////////////////////////

function clickOndHandler() {
  console.log("clickOndHandler");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickOndHandler);
  //frys(container) og zoom_out (sprite-firstElementChild)-animation//
  this.classList.add("frys");
  this.firstElementChild.classList.add("zoom_out");
  //Lyt efter zoom-out-animation er færdig

  //spil lyd
  Sound_bom.volume = 0.5;
  Sound_bom.currentTime = 0;
  Sound_bom.play();

  this.addEventListener("animationend", expl);
  // liv if
  console.log("mister_liv");
  document.querySelector("#liv_" + liv).classList.add("fjern");
  liv--; //rækkefølge, som fjern 3,2,1 #liv_
  /*  if (liv <= 0) {
    stopSpillet();
  }*/
}
function expl() {
  console.log("expl");
  this.removeEventListener("animationend", expl);
  this.firstElementChild.style.backgroundImage = "url('assets/svg/eksplosion.svg')";
  this.firstElementChild.classList = "expl";
  //spil lyd
  Sound_bom2.volume = 0.5;
  Sound_bom2.currentTime = 0;
  Sound_bom2.play();
  this.addEventListener("animationend", genstartOnd);
}

function genstartOnd() {
  console.log("genstartOnd");
  this.removeEventListener("animationend", genstartOnd);
  this.firstElementChild.style.backgroundImage = "url('assets/svg/bomber.svg')";
  //ryd op, fjern alt er på container og sprite og reset
  this.classList = "";
  this.firstElementChild.classList = "";
  this.offsetLeft;
  //Genstart fald-animation
  this.classList.add("fald");
  //Giv en random position og delay til container
  this.classList.add("pos" + nytRand(7));
  this.classList.add("delay" + nytRand(5));
  //Lyt efter klik på element
  this.addEventListener("mousedown", clickOndHandler);
  this.addEventListener("animationiteration", genstartOnd);
  if (liv <= 0) {
    stopSpillet();
  }
}

///////////////////////////////////////////////////////////////////////////

function clickLynHandler() {
  console.log("clickLyn");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickLynHandler);
  //tag et point af og opdater pointTavle
  point -= 1;
  document.querySelector("#score_board").textContent = point;
  //frys(container) og rotation-animation på sprite element (firstElementChild er sprite elementet)//
  this.classList.add("frys");
  this.firstElementChild.classList.add("zoom_out");
  //Lyt efter rotation-animation er færdig

  //spil lyd
  Sound_lyn.volume = 0.5;
  Sound_lyn.currentTime = 0;
  Sound_lyn.play();
  this.addEventListener("animationend", genstartLyn);
}

function genstartLyn() {
  console.log("genstartLyn");
  this.removeEventListener("animationend", genstartLyn);
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";
  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position og delayt til container
  this.classList.add("pos" + nytRand(7));
  this.classList.add("delay" + nytRand(5));

  //Genstart fald-animation
  this.classList.add("fald");
  //Lyt efter klik på element
  this.addEventListener("mousedown", clickLynHandler);
}

////////////////////////////////////////////////////////////////////////////

function stopSpillet() {
  console.log("stopSpillet");
  //fjern alle animationer og EventListener
  con_god1.classList = "";
  spri_god1.classList = "";
  con_god2.classList = "";
  spri_god2.classList = "";
  con_god3.classList = "";
  spri_god3.classList = "";
  con_god4.classList = "";
  spri_god4.classList = "";

  con_ond1.classList = "";
  spri_ond1.classList = "";
  con_ond2.classList = "";
  spri_ond2.classList = "";

  con_lyn1.classList = "";
  spri_lyn1.classList = "";
  con_lyn2.classList = "";
  spri_lyn2.classList = "";

  con_god1.removeEventListener("animationiteration", genstartGod);
  con_god1.removeEventListener("animationend", genstartGod);
  con_god1.removeEventListener("mousedown", clickGodHandler);
  con_god2.removeEventListener("animationiteration", genstartGod);
  con_god2.removeEventListener("animationend", genstartGod);
  con_god2.removeEventListener("mousedown", clickGodHandler);
  con_god3.removeEventListener("animationiteration", genstartGod);
  con_god3.removeEventListener("animationend", genstartGod);
  con_god3.removeEventListener("mousedown", clickGodHandler);
  con_god4.removeEventListener("animationiteration", genstartGod);
  con_god4.removeEventListener("animationend", genstartGod);
  con_god4.removeEventListener("mousedown", clickGodHandler);

  con_ond1.removeEventListener("animationiteration", genstartOnd);
  con_ond1.removeEventListener("animationend", genstartOnd);
  con_ond1.removeEventListener("mousedown", clickOndHandler);
  con_ond2.removeEventListener("animationiteration", genstartOnd);
  con_ond2.removeEventListener("animationend", genstartOnd);
  con_ond2.removeEventListener("mousedown", clickOndHandler);

  con_lyn1.removeEventListener("animationiteration", genstartOnd);
  con_lyn1.removeEventListener("animationend", genstartOnd);
  con_lyn1.removeEventListener("mousedown", clickOndHandler);
  con_lyn2.removeEventListener("animationiteration", genstartOnd);
  con_lyn2.removeEventListener("animationend", genstartOnd);
  con_lyn2.removeEventListener("mousedown", clickOndHandler);

  // Stop timer
  document.querySelector("#fyld").classList.remove("timer");
  document.querySelector("#timer_container").removeEventListener("animationend", stopSpillet);

  if (liv <= 0) {
    GameOver();
  } else if (point >= 15) {
    LevelComplete();
  } else {
    GameOver();
  }
}
//følge efter state-machine diagram

//Gameover og Level complete skærm

function GameOver() {
  console.log("gameover");
  //Vis gameover skærm
  GameOverScreen.classList.remove("hide");
  document.querySelector("#game_over_points").textContent = "DU FIK KUN " + point + "_POINT...";
  //Klik på genstart1
  PlayAgain.addEventListener("click", startGame);
  PlayAgain.classList.add("pulse");
  document.querySelector("#home_knap").addEventListener("click", sidenVises);
  // TODO: sluk for event
  BgrMusic.removeEventListener("ended", GameOver);
  BgrMusic.pause();
  BgrMusic.currentTime = 0;
  // TODO: spil gameover-lyd
  gameover_bgr.volume = 0.5;
  gameover_bgr.currentTime = 0;
  gameover_bgr.play();
}
function LevelComplete() {
  console.log("levelcomplete");
  //Vis levelComplete skærm
  LevelCompleteScreen.classList.remove("hide");
  //Klik på genstart
  PlayAgain_win.classList.add("pulse");
  PlayAgain_win.addEventListener("click", startGame);
  document.querySelector("#home_knap_2").addEventListener("click", sidenVises);
  //spilmusic stop fra spillet
  BgrMusic.pause();
  BgrMusic.currentTime = 0;
  //spil lyd
  level_comp_juhu.volume = 0.5;
  level_comp_juhu.currentTime = 0;
  level_comp_juhu.play();
}
