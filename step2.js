const fs = require("fs");
const axios = require("axios");

const path = process.argv[2];
// const stats = fs.statSync(path);

const webCat = (path) => {
  axios
    .get(path)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const cat = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`file contents: ${data}`);
  });
};

const isUrlOrPath = (path) => {
  if (path.includes("http")) {
    webCat(path);
  } else {
    cat(path);
  }
};

isUrlOrPath(path);
