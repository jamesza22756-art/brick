/*
====================================================
UTF8 ENCODE / DECODE
====================================================
*/

function encode(str){

  return btoa(
    new TextEncoder()
      .encode(str)
      .reduce(
        (data, byte)=>
          data + String.fromCharCode(byte),
        ''
      )
  );

}

function decode(base64){

  const bytes =
    Uint8Array.from(

      atob(base64),

      c=>c.charCodeAt(0)

    );

  return new TextDecoder()
    .decode(bytes);

}

/*
====================================================
PUZZLE DATA
====================================================
PUT ENCODED TEXT HERE
====================================================
*/

const ROOT_DATA =
"W+C4nuC4reC4peC4tOC5gOC4oeC4reC4o+C4tOC4gVvguYDguIHguLTguJTguIjguLLguIFb4LiK4Li04Lih4LmB4Lil4LmJ4LinW+KApi7guJXguK3guYHguKvguKXguJnguLBdXeC5guC4oeC5gOC4peC4geC4uOC4pVvguYLguIrguKfguYzguILguK3guIfguYLguJnguYnguJXguK3guLjguJTguKHguYHguJXguYnguJ7guLLguJPguLTguIrguKLguYxd4LmA4Lij4Li14Lii4LiHW+C4lOC4uOC4o+C5ieC4suC4ouC4geC4p+C5iOC4suC4nOC4tuC5ieC4h+C5geC4peC4sOC5geC4leC4mV3guIHguLHguJnguYDguKLguK3guLDguYZdXVtbW+C5gOC4peC4guC4l+C4teC5iOC5hOC4oeC5iOC4oeC4teC4hOC5iOC4sl3guKPguKfguKHguJXguLLguKvguLnguIjguKHguLnguIHguJvguLLguIFdW+C4reC4ouC4ueC5iOC5g+C4mVtb4LmA4LiB4Li04LiU4LiB4LmI4Lit4LiZ4LmA4Lib4LmH4LiZ4Lie4Li14LmIIOC5geC4leC5iOC4meC4teC5iOC5gOC4geC4tOC4lOC4l+C4teC4q+C4peC4seC4h13guILguK3guIdb4Lir4Liy4LiB4LmE4Lih4LmI4Lih4Li14Lic4Li54LmJ4LiK4Liy4Lii4LiE4LiZ4LiZ4Li14LmJIOC5gOC4o+C4suC5hOC4oeC5iOC5hOC4lOC5ieC5gOC4geC4tOC4lOC4oeC4suC4q+C4o+C4reC4gV1d4LiT4LiyWzEg4LmD4LiZIDQg4Lit4Liy4Lin4Li44LiY4LiC4Lit4LiH4Lie4Lij4Liw4LiZ4Liy4Lij4Liy4Lii4LiT4LmMIOC5g+C4iuC5ieC4leC4seC4lOC4qOC4teC4o+C4qeC4sOC5gOC4q+C4peC5iOC4suC4reC4quC4ueC4o+C5geC4peC4sOC4l+C4s+C4peC4suC4ouC4hOC4p+C4suC4oeC4iuC4seC5iOC4p+C4o+C5ieC4suC4ol0gcGxhbnRhZV3guJfguLXguYjguYDguJXguLTguJrguYLguJXguYPguJlb4LmC4Lit4LmIIOC5guC4rSDguJvguLHguIHguKnguYzigKYuLuC4muC5ieC4suC4meC5gOC4o+C4sl3guJTguLTguJldW+C4reC4ouC4ueC5iOC4lOC5ieC4suC4meC4peC5iOC4suC4h+C4guC4reC4hyDguIguW+C4quC4tOC5iOC4h+C4meC4teC5ieC5hOC4oeC5iOC5g+C4iuC5iFvguKrguLTguYjguIfguILguK3guIfguJnguLXguYlb4LmB4LiK4Lih4Lib4LmM4Lih4Lin4Lii4Liq4Liy4LiB4Lil4LmC4Lil4LiBXeC4nuC4tOC4huC4suC4leC4reC4quC4ueC4o+C5hOC4lOC5iV0g4LmB4LiV4LmI4LiE4Li34LitW+C4leC5ieC4meC4leC4o+C4sOC4geC4ueC4peC4guC4reC4h1tb4oCmLi7guYPguKvguYnguJTguLUg4LmA4LiU4Li14LmL4Lii4Lin4Lih4Lix4LiZ4LiI4Liw4LiZ4Lit4LiZ4LiB4LmJ4LiZXeC4reC4ouC5iOC4suC4h+C4quC4uOC4oOC4suC4nl0g4LiX4Li14LmI4LiE4Liy4LiU4Lin4LmI4Liy4Lin4Li04Lin4Lix4LiS4LiZ4Liy4LiB4Liy4Lij4Lih4Liy4LiI4Liy4LiB4Liq4Li04LmI4LiH4LiZ4Li14LmJXeC5g+C4meC4p+C4o+C4o+C4k+C4hOC4lOC4teC5hOC4l+C4ol1dW+C5gOC4geC4tOC4lOC4iOC4suC4gVvguYHguKHguIfguYDguKHguYjguLJb4LmE4Lih4LmI4LiW4Li24LiH4LiC4Lix4LmJ4LiZ4Lij4Lix4LiBIOC5geC4leC5iOC5hOC4oeC5iOC5hOC4lOC5ieC5gOC4geC4peC4teC4ouC4lOC4meC4sF1b4LiB4Liy4LiH4Lib4Li14LiB4Liq4Lit4LiH4LiC4LmJ4Liy4LiHIOC5gOC4leC4o+C4teC4ouC4oeC5guC4nOKApl3guYDguILguYnguLLguKvguLLguKrguLTguYjguIfguJnguLXguYnguYDguKHguLfguYjguK3guYTguKHguYjguKHguLVb4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lij4Lit4Lia4Liq4Li04LmI4LiH4LiZ4Li14LmJIOC4l+C4teC5iOC4peC4ueC4geC5gOC4quC4t+C4reC5geC4peC4sOC5gOC4meC4leC4o+C4meC4suC4o+C4teC4iuC4reC4muC4l+C4s11d4LiX4Li14LmIW+C4m+C4o+C4suC4geC4juC4geC4suC4o+C4k+C5jOC4l+C4teC5iOC5gOC4geC4tOC4lOC4guC4tuC5ieC4meC4iOC4suC4geC4geC4o+C4sOC4iOC4gV3guKfguLHguJXguJbguLjguYDguILguYnguLLguKrguLnguYhb4LiV4Li44LmK4LiBIOKApuKApiDguJXguLjguIfguITguLDguKHguJPguLVdXQ=="
;

const RAW_ANSWERS = {

"4oCmLuC4leC4reC5geC4q+C4peC4meC4sA==": "4Lir4Lin4Liy4LiZ",
  "4LmC4LiK4Lin4LmM4LiC4Lit4LiH4LmC4LiZ4LmJ4LiV4Lit4Li44LiU4Lih4LmB4LiV4LmJ4Lie4Liy4LiT4Li04LiK4Lii4LmM": "4LmA4LiU4Li14LmI4Lii4Lin",
  "4LiU4Li44Lij4LmJ4Liy4Lii4LiB4Lin4LmI4Liy4Lic4Li24LmJ4LiH4LmB4Lil4Liw4LmB4LiV4LiZ": "4LiV4LmI4Lit",
  "4LiK4Li04Lih4LmB4Lil4LmJ4Lin4Lir4Lin4Liy4LiZ": "4LiZ4LmJ4Liz4LiV4Liy4Lil",
  "4LmC4Lih4LmA4Lil4LiB4Li44Lil4LmA4LiU4Li14LmI4Lii4Lin": "4LmC4Lih4LmC4LiZ4LmA4Lih4Lit4Lij4LmM",
  "4LmA4LiB4Li04LiU4LiI4Liy4LiB4LiZ4LmJ4Liz4LiV4Liy4Lil4LmC4Lih4LmA4Lil4LiB4Li44Lil4LmA4LiU4Li14LmI4Lii4Lin4LmA4Lij4Li14Lii4LiH4LiV4LmI4Lit4LiB4Lix4LiZ4LmA4Lii4Lit4Liw4LmG": "4LmE4Liu4LmC4Lia4LmE4LiE4LmA4LiU4Lij4LiV",
  "4Lie4Lit4Lil4Li04LmA4Lih4Lit4Lij4Li04LiB4LmE4Liu4LmC4Lia4LmE4LiE4LmA4LiU4Lij4LiV": "4LiB4Lix4Lih",
  "4LmA4Lil4LiC4LiX4Li14LmI4LmE4Lih4LmI4Lih4Li14LiE4LmI4Liy": "4Lio4Li54LiZ4Lii4LmM",
  "4Lio4Li54LiZ4Lii4LmM4Lij4Lin4Lih4LiV4Liy4Lir4Li54LiI4Lih4Li54LiB4Lib4Liy4LiB": "4Lir4Lix4Lin",
  "4LmA4LiB4Li04LiU4LiB4LmI4Lit4LiZ4LmA4Lib4LmH4LiZ4Lie4Li14LmIIOC5geC4leC5iOC4meC4teC5iOC5gOC4geC4tOC4lOC4l+C4teC4q+C4peC4seC4hw==": "4LiZ4LmJ4Lit4LiH",
  "4Lir4Liy4LiB4LmE4Lih4LmI4Lih4Li14Lic4Li54LmJ4LiK4Liy4Lii4LiE4LiZ4LiZ4Li14LmJIOC5gOC4o+C4suC5hOC4oeC5iOC5hOC4lOC5ieC5gOC4geC4tOC4lOC4oeC4suC4q+C4o+C4reC4gQ==": "4Lie4LmI4Lit",
  "4LiZ4LmJ4Lit4LiH4LiC4Lit4LiH4Lie4LmI4Lit": "4Lit4Liy",
  "MSDguYPguJkgNCDguK3guLLguKfguLjguJjguILguK3guIfguJ7guKPguLDguJnguLLguKPguLLguKLguJPguYwg4LmD4LiK4LmJ4LiV4Lix4LiU4Lio4Li14Lij4Lip4Liw4LmA4Lir4Lil4LmI4Liy4Lit4Liq4Li54Lij4LmB4Lil4Liw4LiX4Liz4Lil4Liy4Lii4LiE4Lin4Liy4Lih4LiK4Lix4LmI4Lin4Lij4LmJ4Liy4Lii": "4LiI4Lix4LiB4Lij",
  "4Lit4Lii4Li54LmI4LmD4LiZ4Lit4Liy4LiT4Liy4LiI4Lix4LiB4LijIHBsYW50YWU=": "4Lie4Li34LiK",
  "4Lir4Lix4Lin4Lie4Li34LiK4LiX4Li14LmI4LmA4LiV4Li04Lia4LmC4LiV4LmD4LiZ4LmD4LiV4LmJ4LiU4Li04LiZ": "4Lih4Lix4LiZ",
  "4LmC4Lit4LmIIOC5guC4rSDguJvguLHguIHguKnguYzigKYuLuC4muC5ieC4suC4meC5gOC4o+C4sg==": "4LmD4LiV4LmJ",
  "4LmB4LiK4Lih4Lib4LmM4Lih4Lin4Lii4Liq4Liy4LiB4Lil4LmC4Lil4LiB": "4Liq4Liy4Lih4Liy4Lij4LiW",
  "4oCmLi7guYPguKvguYnguJTguLUg4LmA4LiU4Li14LmL4Lii4Lin4Lih4Lix4LiZ4LiI4Liw4LiZ4Lit4LiZ4LiB4LmJ4LiZ": "4LiE4LiZ",
  "4LiE4LiZ4Lit4Lii4LmI4Liy4LiH4Liq4Li44Lig4Liy4Lie": "4Lih4LiZ4Li44Lip4Lii4LmM",
  "4LiV4LmJ4LiZ4LiV4Lij4Liw4LiB4Li54Lil4LiC4Lit4LiH4Lih4LiZ4Li44Lip4Lii4LmMIOC4l+C4teC5iOC4hOC4suC4lOC4p+C5iOC4suC4p+C4tOC4p+C4seC4kuC4meC4suC4geC4suC4o+C4oeC4suC4iOC4suC4geC4quC4tOC5iOC4h+C4meC4teC5iQ==": "4Lil4Li04LiH",
  "4Liq4Li04LmI4LiH4LiC4Lit4LiH4LiZ4Li14LmJ4Liq4Liy4Lih4Liy4Lij4LiW4Lie4Li04LiG4Liy4LiV4Lit4Liq4Li54Lij4LmE4LiU4LmJ": "4LiU4Liy4Lia",
  "4Liq4Li04LmI4LiH4LiZ4Li14LmJ4LmE4Lih4LmI4LmD4LiK4LmI4LiU4Liy4LiaIOC5geC4leC5iOC4hOC4t+C4reC4peC4tOC4h+C5g+C4meC4p+C4o+C4o+C4k+C4hOC4lOC4teC5hOC4l+C4og==": "4LiB4Lij4Liw4Lia4Li14LmI",
  "4Lit4Lii4Li54LmI4LiU4LmJ4Liy4LiZ4Lil4LmI4Liy4LiH4LiC4Lit4LiHIOC4iC7guIHguKPguLDguJrguLXguYg=": "4LiV4Lij4Lix4LiH",
  "4LmE4Lih4LmI4LiW4Li24LiH4LiC4Lix4LmJ4LiZ4Lij4Lix4LiBIOC5geC4leC5iOC5hOC4oeC5iOC5hOC4lOC5ieC5gOC4geC4peC4teC4ouC4lOC4meC4sA==": "4LiK4Lit4Lia",
  "4LiB4Liy4LiH4Lib4Li14LiB4Liq4Lit4LiH4LiC4LmJ4Liy4LiHIOC5gOC4leC4o+C4teC4ouC4oeC5guC4nOKApg==": "4Lia4Li04LiZ",
  "4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lij4Lit4Lia4Liq4Li04LmI4LiH4LiZ4Li14LmJIOC4l+C4teC5iOC4peC4ueC4geC5gOC4quC4t+C4reC5geC4peC4sOC5gOC4meC4leC4o+C4meC4suC4o+C4teC4iuC4reC4muC4l+C4sw==": "4LiB4Lit4LiH4LmE4Lif",
  "4LmB4Lih4LiH4LmA4Lih4LmI4Liy4LiK4Lit4Lia4Lia4Li04LiZ4LmA4LiC4LmJ4Liy4Lir4Liy4Liq4Li04LmI4LiH4LiZ4Li14LmJ4LmA4Lih4Li34LmI4Lit4LmE4Lih4LmI4Lih4Li14LiB4Lit4LiH4LmE4Lif": "4LmB4Liq4LiH",
  "4Lib4Lij4Liy4LiB4LiO4LiB4Liy4Lij4LiT4LmM4LiX4Li14LmI4LmA4LiB4Li04LiU4LiC4Li24LmJ4LiZ4LiI4Liy4LiB4LiB4Lij4Liw4LiI4LiB": "4Liq4Liw4LiX4LmJ4Lit4LiZ",
  "4LiV4Li44LmK4LiBIOKApuKApiDguJXguLjguIfguITguLDguKHguJPguLU=": "4LiU4Lin4LiH4LiV4Liy",
  "4LmA4LiB4Li04LiU4LiI4Liy4LiB4LmB4Liq4LiH4LiX4Li14LmI4Liq4Liw4LiX4LmJ4Lit4LiZ4Lin4Lix4LiV4LiW4Li44LmA4LiC4LmJ4Liy4Liq4Li54LmI4LiU4Lin4LiH4LiV4Liy": "4Liq4Li1",
};

/*
====================================================
DECODE
====================================================
*/

const ROOT_TEXT =
decode(ROOT_DATA);

const ANSWERS = {};

for(const key in RAW_ANSWERS){

  ANSWERS[
    decode(key)
  ] =
  decode(
    RAW_ANSWERS[key]
  );

}

/*
====================================================
GAME ENGINE
====================================================
*/

let currentText =
ROOT_TEXT;

const puzzleEl =
document.getElementById("puzzle");

const currentClueEl =
document.getElementById("currentClue");

const inputEl =
document.getElementById("answerInput");

const submitBtn =
document.getElementById("submitBtn");

const statusEl =
document.getElementById("status");

const completeEl =
document.getElementById("complete");

let selectedClue =
null;

/*
====================================================
FIND INNERMOST BRACKETS
====================================================
*/

function findInnermostBrackets(text){

  const results = [];

  const regex =
  /\[([^[\]]+)\]/g;

  let match;

  while(
    (match = regex.exec(text))
    !== null
  ){

    results.push({

      full:
      match[0],

      inner:
      match[1],

      start:
      match.index,

      end:
      regex.lastIndex

    });

  }

  return results;

}

/*
====================================================
RENDER
====================================================
*/

function render(){

  const activeNodes =
  findInnermostBrackets(
    currentText
  );

  let html =
  currentText;

  activeNodes.forEach(node=>{

    const isSelected =
    selectedClue ===
    node.inner;

    const className =
    `node active ${
      isSelected
      ? "selected"
      : ""
    }`;

    html =
    html.replace(

      node.full,

      `<span
        class="${className}"
        data-clue="${node.inner}"
      >
        ${node.full}
      </span>`

    );

  });

  html =
  html.replace(

    /\[([^[\]]+)\]/g,

    `<span class="node locked">
      [$1]
    </span>`

  );

  puzzleEl.innerHTML =
  html;

  document
    .querySelectorAll(".active")
    .forEach(el=>{

      el.addEventListener(

        "click",

        ()=>{

          selectedClue =
          el.dataset.clue;

          currentClueEl.textContent =
          selectedClue;

          render();

          inputEl.focus();

        }

      );

    });

  if(
    activeNodes.length === 0
  ){

    completeEl.textContent =
    currentText;

    currentClueEl.textContent =
    "PUZZLE COMPLETE";

    inputEl.disabled =
    true;

    submitBtn.disabled =
    true;

  }

}

/*
====================================================
SUBMIT
====================================================
*/

function submitAnswer(){

  if(!selectedClue)
  return;

  const value =
  inputEl.value.trim();

  /*
  console.log(selectedClue);
  console.log(ANSWERS);
  */

  const correct =
  ANSWERS[selectedClue];

  if(!correct){

    statusEl.textContent =
      "MISSING ANSWER DATA";

    statusEl.style.color =
      "#ff6b9c";

    return;

  }

  if(
    value.toLowerCase()
    ===
    correct.toLowerCase()
  )
  {

    currentText =
    currentText.replace(

      `[${selectedClue}]`,

      correct

    );

    statusEl.textContent =
    "ACCESS GRANTED";

    statusEl.style.color =
    "#7dffb2";

    selectedClue =
    null;

    inputEl.value =
    "";

    currentClueEl.textContent =
    "Select a highlighted clue";

    render();

  }else{

    statusEl.textContent =
    "ACCESS DENIED";

    statusEl.style.color =
    "#ff6b9c";

    inputEl.animate(

      [

        {
          transform:
          'translateX(0px)'
        },

        {
          transform:
          'translateX(-6px)'
        },

        {
          transform:
          'translateX(6px)'
        },

        {
          transform:
          'translateX(0px)'
        }

      ],

      {
        duration:180
      }

    );

  }

}

/*
====================================================
EVENTS
====================================================
*/

submitBtn.addEventListener(

  "click",

  submitAnswer

);

inputEl.addEventListener(

  "keydown",

  e=>{

    if(
      e.key === "Enter"
    ){

      submitAnswer();

    }

  }

);

/*
====================================================
INIT
====================================================
*/

render();

/*
====================================================
HOW TO MAKE NEW PUZZLES
====================================================

1. OPEN BROWSER CONSOLE

2. RUN:

encode("ข้อความ")

3. COPY RESULT

4. PUT INTO:

ROOT_DATA

OR

RAW_ANSWERS

====================================================
*/