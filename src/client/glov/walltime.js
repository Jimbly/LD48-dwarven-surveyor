// Portions Copyright 2019 Jimb Esser (https://github.com/Jimbly/)
// Released under MIT License: https://opensource.org/licenses/MIT

const { floor, min } = Math;

let offs = 0;
function now() {
  return Date.now() + offs;
}
module.exports = exports = now;
exports.now = now;
let first = true;
exports.sync = function (server_time) {
  if (first) {
    offs = server_time - Date.now();
  } else {
    offs = min(offs, server_time - Date.now());
  }
};
exports.seconds = function () {
  // Seconds since Jan 1st, 2020
  return floor(now() / 1000) - 1577836800;
};
