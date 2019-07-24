// serverモジュール

// httpモジュールの宣言
var http = require("http");
var url  = require("url");

// サーバーの起動処理
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname // urlのパス名を取得
    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
