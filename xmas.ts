// Base code from https://github.com/npm/cli/blob/v6.13.6/lib/xmas.js
const { build } = Deno;
import * as log from "https://deno.land/std/log/mod.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "🦕 {msg}"
    })
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console"]
    }
  }
});

var s = build.os === "win" ? " *" : " \u2605";
var f = "\uFF0F";
var b = "\uFF3C";
var x = build.os === "win" ? " " : "";
var o = [
  "\u0069",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u0020",
  "\u2E1B",
  "\u2042",
  "\u2E2E",
  "&",
  "@",
  "\uFF61"
];
var oc = [33, 34, 35, 36, 37];
var l = "\u005e";

let str = "";
function w(s) {
  // process.stderr.write(s);
  if (s.includes("\n")) {
    console.log(str + s.trim());
    str = "";
  } else {
    str = str + s;
  }
}

w("\n");
(function T(H) {
  for (var i = 0; i < H; i++) w(" ");
  w(x + "\u001b[33m" + s + "\n");
  var M = H * 2 - 1;
  for (var L = 1; L <= H; L++) {
    var O = L * 2 - 2;
    var S = (M - O) / 2;
    for (i = 0; i < S; i++) w(" ");
    w(x + "\u001b[21m");
    w(x + "\u001b[32m" + f);
    for (i = 0; i < O; i++) {
      w(
        "\u001b[" +
          oc[Math.floor(Math.random() * oc.length)] +
          "m" +
          o[Math.floor(Math.random() * o.length)]
      );
    }
    w(x + "\u001b[32m" + b + "\n");
    w(x + "\u001b[0m");
  }
  w(" ");
  for (i = 1; i < H; i++) w("\u001b[32m" + l);
  w("| " + x + " |");
  for (i = 1; i < H; i++) w("\u001b[32m" + l);
  if (H > 10) {
    w("\n ");
    for (i = 1; i < H; i++) w(" ");
    w(" ");
    w("| " + x + " |");
    for (i = 1; i < H; i++) w(" ");
  }
})(20);
w("\n\n");
log.info("loves you Happy Xmas, JavaScripters & TypeScripters!");
