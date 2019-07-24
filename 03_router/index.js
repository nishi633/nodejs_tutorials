// メインファイル
// 実行コマンド node index.js

// server.jsをserverモジュールとして読み込む
var server = require("./server");
var router = require("./router");

// Q. なぜ引数として渡す必要が?
// A. routeの定義は場合によって変わるから(router.jsファイルじゃないこともあるだろうから)start関数の中でrouterを呼び出すのではなく引数として渡してあげる
server.start(router.route);
