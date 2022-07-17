// ==UserScript==
// @name        04.reservation-health
// @namespace   https://assist9.i-on.net/rb/main#booking/calendar?resourceId=555a0f1645cee1e334430183
// @match       https://assist9.i-on.net/rb/main#booking/calendar?resourceId=555a0f1645cee1e334430183
// @grant       none
// @version     1.0
// @author      -
// @description 2022. 7. 17. 오후 5:41:25
// ==/UserScript==
let d = document;
let MK_INFO = console.info;
let MK_DEBUG = console.debug;
const MK_TITLE = "04.reservation-health";

function MK_welcome() {
  MK_INFO(MK_TITLE);
}

function MK_sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function MK_reservation() {
  let elements = d.querySelectorAll(
    "div.fc-event.fc-event-hori.fc-event-start.fc-event-end.bg-color-greenLight"
  );
  MK_INFO(elements.length);
  if (0 < elements.length) {
    let lastElement = elements[elements.length - 1];
    $(lastElement).select("fc-event-title").click();
  }
}

function MK_main() {
  MK_welcome();
  MK_reservation();
}

MK_sleep(1500).then(function () {
  MK_main();
});
