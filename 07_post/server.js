// serverモジュール

// httpモジュールの宣言
var http = require("http");
var url  = require("url");

// サーバーの起動処理
function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;

    // リクエストのエンコード定義
    request.setEncoding("utf8");

    // postデータの塊ごとにpostDataChunkをpostDataに追加していく
    // addListenerの第1引数はイベント, 第2引数はイベントハンドラ
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("postDataChunk: " + postDataChunk);
    });

    // すべてのpostデータを受け取ったあとにrouterに渡せるようにする
    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });
  }

  // onRequest関数にresponce引数を定義することでresponseが渡されるまで待つコールバック関数として扱われる
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
