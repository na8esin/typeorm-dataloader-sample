var request = require("request");

var REQUEST_COUNT = 1;
var apiUrl = "http://127.0.0.1:3000/clients";
var taskArray = [];

// タスク作成
for (var i = 0; i < REQUEST_COUNT; i++) {
  var task = new Promise(function(resolve, reject) {
    // リクエストデータ作成
    var param = {
      data: i
    };

    var options = {
      uri: apiUrl,
      method: "GET",
      form: param
    };

    const dbname = i % 2 === 0 ? "nakata" : "demo";

    // リクエストデータ
    request
      .get(options.uri + "?db=" + dbname + "&sessionId=" + i)
      .on("data", function(data) {
        const objData = JSON.parse(data);
        if (dbname === "nakata") {
          if (objData.length === 1) {
            console.log("even chunk: " + data);
            resolve();
          } else {
            console.log("even chunk: " + data);
            reject();
          }
        } else {
          if (objData.length === 3) {
            console.log("odd chunk: " + data);
            resolve();
          } else {
            console.log("odd chunk: " + data);
            reject();
          }
        }
        // decompressed data as it is received
      })
      .on("error", function(err) {
        console.log(err);
        reject();
      });
  });
  taskArray.push(task);
}

// タスク実行
Promise.all(taskArray)
  .then(function() {
    console.log("Success");
  })
  .catch(function() {
    console.log("Failure");
  });
