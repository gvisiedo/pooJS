const natalia = {
    name:"Natalia",
    age: 20,
    cursosaprobados:[
        "Curso definitivo de html y css",
        "curso práctico de html y css",
    ],
    aprobarCurso(nuevoCursito){
        this.cursosaprobados.push(nuevoCursito);

    },
};
//Hacer que natalia apruebe otro curso

natalia.cursosaprobados.push("Curso responsive design");

function Student(name, age, cursosaprobados){
    this.name = name;
    this.age = age;
    this.cursosaprobados = cursosaprobados;

}

Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosaprobados.push(nuevoCursito);
}

const juanita = new Student("juanita alejandra", 15, ["curso intro a la prod videojuegos","curso creación de personaje"]);

//Prototypos con la sintaxis de clases
class Student2{
    constructor(name, age, cursosaprobados){
        this.name = name;
        this.age = age;
        this.cursosaprobados = cursosaprobados;


    }
    aprobarCurso(nuevoCursito){
        this.cursosaprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2(
    "miguel",
    28,
    ["curso de analisis de negocio para ciencia de datos",
    "curso de principios de visualización de datos"],
);

