const modelController = require("../controllers/modelController");

module.exports = {
  doSomething: function() {
    return new Promise((resolve, reject) => {
      modelController
        .findAll()
        .then(dbresults => {
          resolve(dbresults);
        })
        .catch(err => console.log(err));
    });
  }
};
