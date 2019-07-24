// ルーティング定義
// リクエストURLからパス名をパースし、パス名によって処理を切り分ける

function route(pathname) {
  console.log("Request received. " + pathname);
}

// route関数をrouteモジュールとしてエクスポート
exports.route = route;
