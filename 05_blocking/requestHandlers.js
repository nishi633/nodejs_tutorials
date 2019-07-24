// リクエストハンドラ
// routerで呼び出す処理関数

// startの実行中にuploadを実行するとstartによりブロッキングされてしまうため、uploadもstartの終了を待ってしまう
// "In node, everything runs in parallel, except your code"
function start() {
  console.log("Request handler 'start' was called.");

  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  sleep(10000)
  return "Hello Start";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
