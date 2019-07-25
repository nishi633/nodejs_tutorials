// メインファイル
// 実行コマンド node index.js

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// routing
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

// サーバーの起動
server.start(router.route, handle);
