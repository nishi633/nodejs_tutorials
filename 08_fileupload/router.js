// ルーティング定義
// リクエストURLからパス名をパースし、パス名によって処理を切り分ける

function route(handle, pathname, response, request) {
  console.log("Request received. " + pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response,request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}

// route関数をrouteモジュールとしてエクスポート
exports.route = route;
