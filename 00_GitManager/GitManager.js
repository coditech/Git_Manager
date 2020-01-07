var Git = require("nodegit");
const fs = require("fs");

const RepositoryList = [
  ["https://github.com/Abdallah2Kainassy/Submissions", "Abdallah_K"],
  ["https://github.com/abdelmajeedjurdi/Submissions", "Abdelmajeed_J"],
  ["https://github.com/AbdulkaderFreij/Submissions", "Abdulkader_F"],
  ["https://github.com/ahmadmtaleb/Submissions", "Ahmad_T"],
  ["https://github.com/Akram-m-Ahmad/Submissions", "Akram_A"],
  ["https://github.com/ali-fawaz/Submissions", "Ali_F"],
  ["https://github.com/basemEk/Submissions", "Bassem_E"],
  ["https://github.com/Bassel17/Submissions", "Basel_k"],
  ["https://github.com/BayanSwaid/Submissions", "Bayan_S"],
  ["https://github.com/Behaajumaa/Submissions", "Behaa_J"],
  ["https://github.com/Elmassri/Submissions", "Mahmoud_E"],
  ["https://github.com/ghadban135/Submissions", "Ahmad_G"],
  ["https://github.com/haddadanthony/Submissions", "Anthony_H"],
  ["https://github.com/HasanAwad/Submissions", "Hasan_A"],
  ["https://github.com/karimfarra/Submissions", "Karim_F"],
  ["https://github.com/Malak-Kanaan/Submissions", "Malak_k"],
  ["https://github.com/Marwa-Hodeib/Submissions", "Marwa_H"],
  ["https://github.com/michelalachkar/Submissions", "Michel_A"],
  ["https://github.com/mohamadmek/Submissions", "Mohamad_Me"],
  ["https://github.com/nassirGH/Submissions", "Nassir_G"],
  ["https://github.com/OussamaGhamian/Submissions", "Oussama_G"],
  ["https://github.com/oussamaH95/Submissions", "Oussama_H"],
  ["https://github.com/rania235/Submissions", "Rania_O"],
  ["https://github.com/Rayan94-sudo/Submissions", "Rayan_J"],
  ["https://github.com/RudzC/Submissions", "Rudolf_C"],
  ["https://github.com/SandraNaim/Submissions", "Sandra_N"],
  ["https://github.com/tinamechleb/Submissions", "Tina_M"],
  ["https://github.com/WANASX/Submissions", "Anas_K"],
  ["https://github.com/zeinabkassem27/Submissions", "Zenab_K"]
];

const exercisesFilePaths = {
  "cv-styling": [
    "Exercises/CV-Styling/public/style1/style.css",
    "Exercises/CV-Styling/public/style2/style.css",
    "Exercises/CV-Styling/public/style3/style.css"
  ]
};

var rmDir = function(dir, rmSelf) {
  var files;
  rmSelf = rmSelf === undefined ? true : rmSelf;
  dir = dir + "/";
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    console.log("!Oops, directory not exist.");
    return;
  }
  if (files.length > 0) {
    files.forEach(function(x, i) {
      if (fs.statSync(dir + x).isDirectory()) {
        rmDir(dir + x);
      } else {
        fs.unlinkSync(dir + x);
      }
    });
  }
  if (rmSelf) {
    // check if user want to delete the directory ir just the files in this directory
    fs.rmdirSync(dir);
  }
};

const cloneRepos = () => {
  RepositoryList.forEach(elem => {
    if (fs.existsSync(`../${elem[1]}`)) {
      rmDir(`../${elem[1]}`);
      console.log(`Updating : ${elem[1]}...`);
    }

    Git.Clone(elem[0], "../" + elem[1]).then(function(repo) {
      if (repo) console.log(`Completed : ${elem[1]}`);
    });
  });
};

const checkExerciseByName = path => {
  const badPeeps = [],
    goodpeeps = [];
  fs.readdir("../", function(err, items) {
    for (var i = 0; i < items.length; i++) {
      if (
        items[i] === ".git" ||
        items[i] === ".gitignore" ||
        items[i] === "00_GitManager" ||
        items[i] === "README.md"
      )
        continue;

      const fullPath = "../" + items[i] + "/" + path;
      const studentName = items[i];

      if (!fs.existsSync(fullPath)) badPeeps.push(studentName);
      else goodpeeps.push(studentName);
    }
    console.log(
      `${JSON.stringify(badPeeps)} => Did not complete the exercise : ${path}`
    );
    console.log(
      `${JSON.stringify(goodpeeps)} => Did complete the exercise : ${path}`
    );
  });
};

const main = () => {
  if (process.argv.length <= 2) cloneRepos();
  else {
    if (process.argv[2] == "check") {
      if (process.argv[3]) {
        let pos = 0;
        if (process.argv[4]) pos = parseInt(process.argv[4]) - 1;

        const filePath = exercisesFilePaths[process.argv[3]][pos]; // Only One file for now
        if (filePath) checkExerciseByName(filePath);
        else console.log(`Filepath does not exist for ${process.argv[3]}`);
      } else {
        console.log("please type the file name with path");
        process.exit(-1);
      }
    }
  }
};

main();
