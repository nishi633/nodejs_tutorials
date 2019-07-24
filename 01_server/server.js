// 実行コマンド node server.js
// http://localhost:8888/ でアクセスできる

// httpモジュールの宣言
// ローカル変数にはrequireしたモジュール名をつけるのが慣習
var http = require("http");

// listen関数を使うことで引数のポート番号でリクエストを受けることができる
http.createServer(
  // サーバーで行う処理を定義
  function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"}); //header
    response.write("Hello World"); // body
    response.end(); // レスポンス完了
  }
).listen(8888);

console.log("start");
