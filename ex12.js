const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// binding 3 objects in  a parent object

const allLessons = Object.assign({
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});


const createReport = (lesson, teacherName) => {
    const result = 
}

console.log(createReport(allLessons, "Maria Clara"));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
const createDetailedReport = (fullreport, propertyName, nameValue) => {
    const report = {};
    report[propertyName] = nameValue;
    report["aulas"] = fullreport
      .map((element) => element[0])
      .reduce((acc, number) => `${acc} ${number}`)
      .split(" ");
    report["estudantes"] = fullreport
      .map((element) => element[1])
      .reduce((acc, number) => acc + number);
  
    return report;
  };
  
  const generateFullReport = (obj, propertyName, propertyValue) => {
    const pairKeyValue = {};
    pairKeyValue[propertyName] = propertyValue;
    const fullreport = Object.keys(obj)
      .map((element) => Object.values(obj[element]))
      .filter(
        (element) =>
          element[findPropertyIndex(propertyValue, element)] === propertyValue
      );
    return fullreport;
  };
  const itemSearched = { materia: "Matemática" };
  const result = generateFullReport(allLessons, "professor", "Maria Clara");
  const report = createDetailedReport(result, "professor", "Maria Clara");