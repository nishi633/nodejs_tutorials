// ルーティング定義
// リクエストURLからパス名をパースし、パス名によって処理を切り分ける

function route(handle, pathname) {
  console.log("Request received. " + pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log("No request handler! " + pathname);
  }
}

// route関数をrouteモジュールとしてエクスポート
exports.route = route;
