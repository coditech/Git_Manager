var Git = require("nodegit");

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
]

RepositoryList.forEach(elem => {
  console.log(`Completed : ${elem[1]}`)
  Git.Clone(elem[0], "../" + elem[1]);
});