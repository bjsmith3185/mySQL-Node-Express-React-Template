const modelController = require("../controllers/modelController");

module.exports = {
  doSomething: function(data) {
    return new Promise((resolve, reject) => {
      console.log("in midddleware")
      console.log(data)
      modelController
        .create(data)
        .then(dbresults => {
          resolve(dbresults);
        })
        .catch(err => console.log(err));
    });
  }
};



// doSomething: function(data) {
//   return new Promise((resolve, reject) => {
//     console.log("in midddleware")
//     console.log(data)
//     modelController
//       .findAll()
//       .then(dbresults => {
//         resolve(dbresults);
//       })
//       .catch(err => console.log(err));
//   });
// }