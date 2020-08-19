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

const getMathStudents = () =>
  Object.keys(allLessons)
    .filter((element) => allLessons[element].materia === "Matemática")
    .reduce(
      (acc, element) =>
        allLessons[acc].numeroEstudantes + allLessons[element].numeroEstudantes
    );
