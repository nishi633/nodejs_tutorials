// ルーティング定義
// リクエストURLからパス名をパースし、パス名によって処理を切り分ける

function route(handle, pathname, response) {
  console.log("Request received. " + pathname);

  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

// route関数をrouteモジュールとしてエクスポート
exports.route = route;
