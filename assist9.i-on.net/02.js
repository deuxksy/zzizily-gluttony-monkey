// ==UserScript==
// @name        02.reservation-resource
// @namespace   https://assist9.i-on.net/main
// @match       https://assist9.i-on.net/main
// @grant       none
// @version     1.0
// @author      -
// @description 2022. 7. 17. 오후 5:22:15
// ==/UserScript==
let d = document;
let MK_INFO = console.info;
let debug = console.debug;
const MK_TITLE = "02.reservation-resource";

function MK_welcome() {
  MK_INFO(MK_TITLE);
}

function MK_main() {
  MK_welcome();
  d.location.href = "https://assist9.i-on.net/rb/main#home";
}

MK_main();
