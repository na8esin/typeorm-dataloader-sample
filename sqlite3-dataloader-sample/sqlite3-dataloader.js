// see https://github.com/graphql/dataloader/blob/master/examples/SQL.md

var DataLoader = require('dataloader');
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./db.sql');

db.serialize(function() {
  db.run("CREATE TABLE users (id INTEGER, name TEXT)");

  var stmt = db.prepare("INSERT INTO users VALUES (?, ?)");
  stmt.run([1234, "username_" + 1234]);
  stmt.run([5678, "username_" + 5678]);
  stmt.run([9101, "username_" + 9101]);
  stmt.finalize();
});

// Dispatch a WHERE-IN query, ensuring response has rows in correct order.
var userLoader = new DataLoader(ids => {
  var params = ids.map(id => '?' ).join();
  var query = `SELECT * FROM users WHERE id IN (${params})`;
  // SELECT * FROM users WHERE id IN (?,?,....,?)
  console.log(query);
  return queryLoader.load([query, ids]).then(
    rows => ids.map(
      id => rows.find(row => row.id === id) || new Error(`Row not found: ${id}`)
    )
  );
});

// Parallelize all queries, but do not cache.
var queryLoader = new DataLoader(queries => new Promise(resolve => {
  var waitingOn = queries.length;
  console.log('waitingOn:' + waitingOn); // waitingOn:1
  var results = [];
  db.parallelize(() => {
    queries.forEach((query, index) => {
      db.all.apply(db, query.concat((error, result) => {
        results[index] = error || result;
        if (--waitingOn === 0) {
          resolve(results);
        }
      }));
    });
  });
}), { cache: false });

// Usage
// https://github.com/graphql/dataloader#loadmanykeys
userLoader.loadMany([9101,5678,1234]).then(([ user1, user2, user3]) => {
  console.log(user1, user2, user3);
  db.run("DROP TABLE users");
});

