// ==UserScript==
// @name        03.click-health
// @namespace   https://assist9.i-on.net/rb/main#home
// @match       https://assist9.i-on.net/rb/main#home
// @grant       none
// @version     1.0
// @author      -
// @description 2022. 7. 17. 오후 5:29:12
// ==/UserScript==
let d = document;
let MK_INFO = console.info;
let MK_DEBUG = console.debug;
const MK_TITLE = "03.click-health";

function MK_welcome() {
  MK_INFO(MK_TITLE);
}

function MK_main() {
  MK_welcome();
  d.querySelector("#left-panel > nav > ul > li:nth-child(9) > a").click();
}

MK_main();
