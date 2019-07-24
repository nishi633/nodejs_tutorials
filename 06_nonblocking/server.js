// serverモジュール

// httpモジュールの宣言
var http = require("http");
var url  = require("url");

// サーバーの起動処理
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    // responseをrouterに渡す
    route(handle, pathname, response);
  }

  // onRequest関数にresponce引数を定義することでresponseが渡されるまで待つコールバック関数として扱われる
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
