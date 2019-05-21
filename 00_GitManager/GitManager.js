var Git = require("nodegit");
const fs = require('fs')

const RepositoryList = [
  ["https://github.com/fadel100/Submissions", "Fadel"],
  ["https://github.com/Haidara7/Submissions", "Haidara"],
  ["https://github.com/HovigKevorkian/Submissions", "HovigKevorkian"],
  ["https://github.com/jaafar21/Submissions", "Jaafar"],
  ["https://github.com/Karimh438/Submissions", "Karim"],
  ["https://github.com/liams98/Submissions", "William"],
  ["https://github.com/Maissaash/Submissions", "Maissa"],
  ["https://github.com/MARWAHAKMI/Submissions", "Marwa"],
  ["https://github.com/Mayadihny/Submissions", "Maya"],
  ["https://github.com/mohammadBaraka/Submissions", "M_Baraka"],
  ["https://github.com/Mohammadzaher92/Submissions", "M_Zaher"],
  ["https://github.com/myriam2008/Submissions", "Myriam"],
  ["https://github.com/nooraldeenhmhm/Submissions", "Noor"],
  ["https://github.com/omar-mhmd/Submissions", "Omar_M"],
  ["https://github.com/RaedElNABOULSI/Submissions", "Raed"],
  ["https://github.com/ridaFD/Submissions", "RidaFD"],
  ["https://github.com/salamab/Submissions", "Salam_M"],
  ["https://github.com/shirak96/Submissions", "Shirak"],
  ["https://github.com/Sousetk/Submissions", "Salam_K"],
  ["https://github.com/TheAwadianMan/Submissions", "OmarAwad"],
  ["https://github.com/amanihaki/Submissions", "Amani"],
  ["https://github.com/AshrafJurdi/Submissions", "Ashraf"],
  ["https://github.com/BaselBarghouth/Submissions", "Basel"],
  ["https://github.com/Basharfrancis/Submissions", "Bashar"],
  ["https://github.com/BringSteam/Submissions", "Charbel"]
];

const exercisesFilePaths = {
  'cv-styling': ['Exercises/CV-Styling/public/style1/style.css', 'Exercises/CV-Styling/public/style2/style.css', 'Exercises/CV-Styling/public/style3/style.css'],
}

var rmDir = function(dir, rmSelf) {
  var files;
  rmSelf = (rmSelf === undefined) ? true : rmSelf;
  dir = dir + "/";
  try { files = fs.readdirSync(dir); } catch (e) { console.log("!Oops, directory not exist."); return; }
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
}

const cloneRepos = () => {
  RepositoryList.forEach(elem => {
    if (fs.existsSync(`../${elem[1]}`))
    {
      rmDir(`../${elem[1]}`);
      console.log(`Updating : ${elem[1]}...`);
    }

    Git.Clone(elem[0], "../" + elem[1]).then(function(repo) {
      if (repo)
        console.log(`Completed : ${elem[1]}`);
    })
  });
};

const checkExerciseByName = (path) =>
{
  const badPeeps = [], goodpeeps = [];
  fs.readdir('../', function(err, items) {
    for (var i = 0; i < items.length; i++) {
      if (
        items[i] === ".git" ||
        items[i] === ".gitignore" ||
        items[i] === "00_GitManager" ||
        items[i] === "README.md"
      ) continue;

      const fullPath = '../' + items[i] + '/' + path;
      const studentName = items[i];
      
      if (!fs.existsSync(fullPath))
        badPeeps.push(studentName);
      else
        goodpeeps.push(studentName);
    }
    console.log(`${JSON.stringify(badPeeps)} => Did not complete the exercise : ${path}`);
    console.log(`${JSON.stringify(goodpeeps)} => Did complete the exercise : ${path}`)
  });
}

const main = () => {
  if (process.argv.length <= 2)
    cloneRepos();
  else {
    if (process.argv[2] == 'check')
    {
      if(process.argv[3])
      {
        let pos = 0;
        if (process.argv[4])
          pos = parseInt(process.argv[4]) - 1;

        const filePath = exercisesFilePaths[process.argv[3]][pos]; // Only One file for now
        if (filePath)
          checkExerciseByName(filePath)
        else
          console.log(`Filepath does not exist for ${process.argv[3]}`);
      }
      else
      {
        console.log('please type the file name with path');
        process.exit(-1);
      }
    }
  }
}

main();

