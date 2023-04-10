// 10-4.
// Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().
// let server = {
//    data: 0,
//    convertToString: function (callback) {
//       callback((function () {
//          return this.data + "";
//       }).bind(this));
//    }
// };
// let client = {
//    server: server,
//    result: "",
//    calc: function (data) {
//       this.server.data = data;
//       this.server.convertToString(this.notification());
//    },
//    notification: function () {
//       return (function (callback) {
//          this.result = callback();
//       }).bind(this);
//    }
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"

let server = {
    data: 0,
    convertToString: function (callback) {
       callback(() => {
          return this.data + "";
       });
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function() {
       return (callback => {
          this.result = callback();
       });
    }
};

client.calc(123);
console.log(client.result); 
console.log(typeof client.result); 
