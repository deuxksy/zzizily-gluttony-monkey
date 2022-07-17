// ==UserScript==
// @name        01.login
// @namespace   https://assist9.i-on.net/login
// @match       https://assist9.i-on.net/login
// @grant       none
// @version     1.0
// @author      -
// @description 2022. 7. 17. 오후 5:05:27
// ==/UserScript==
let d = document;
let MK_INFO = console.info;
let MK_DEBUG = console.debug;
const MK_TITLE = "01.login";

function MK_welcome() {
  MK_INFO(MK_TITLE);
}

function MK_login() {
  let userid = d.getElementById("userId");
  let userpwd = d.getElementById("userPwd");
  userid.value = "crong";
  userpwd.value = "dksy2030";
  MK_INFO(userid.value);
  MK_INFO(userpwd.value);
  login();
}

function MK_main() {
  MK_welcome();
  MK_login();
}

MK_main();
