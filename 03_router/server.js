// serverモジュール

// httpモジュールの宣言
var http = require("http");
var url  = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname // urlのパス名を取得
    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  // listenによって処理を待ち受け続ける
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

// start関数をstartモジュールとしてエクスポート
// exportsをすると外部のNode.jsファイルから呼び出せるようになる
// exports.プロパティ名（呼び出されるときの名前？）= 文字列/関数名/数値/配列/オブジェクトetc;
exports.start = start;
