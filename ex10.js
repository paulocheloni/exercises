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

// get the sum of the values of a given property in diferent objects which are located in same level nested in same object

const getTotalStudents = () =>
  Object.keys(allLessons).reduce(
    (acc, element) =>
      allLessons[element].numeroEstudantes + allLessons[acc].numeroEstudantes
  );

//search property value by giving the property declaration position

const mapLessonsByPosition = (lesson, propertyPosition) => {
  const propValue = Object.keys(allLessons)
    .filter((element) => allLessons[element] === lesson)
    .map((element) => Object.values(allLessons[element])[propertyPosition])[0];
  return propValue;
};

const findPropertyIndex = (value, obj) => {
  const index = Object.values(obj).indexOf(value);
  return index;
};

const professorLesson3 = mapLessonsByPosition(lesson3, 2);

// search for propertyName

const mapLessonsByPropertyName = (lesson, propertyName) => {
  const propName = Object.keys(allLessons)
    .filter((element) => allLessons[element] === lesson)
    .map((element) =>
      Object.keys(allLessons[element]).filter(
        (element) => element === propertyName
      )
    )[0][0];
  return propName;
};
const professorLesson2 = mapLessonsByPropertyName(lesson2, "professor");

// search pair value
// const

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
