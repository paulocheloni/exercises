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

const insertProperty = (obj, property, value) => {
  obj.property = value;
};
insertProperty(lesson2, "turno", "manhã");

const listKeys = (obj) => Object.keys(obj);

const objLen = (obj) => Object.length(obj);