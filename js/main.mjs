function videpPlay(id){
    const urlSecreta="https://" +id;
    console.log("se esta reproduciendo desde url" + urlSecreta);
}
function videoStop(id){

    const urlSecreta="https://" + id;
    console.log("pausamos url" + urlSecreta);
}

export class platziClass{
    constructor({
        name,
        videoId,
    }){
        this.name=name;
        this.videoId=videoId;
    }
    reproducir(){
        videpPlay(this.videoId);
    }
    pausar(){
        videoStop(this.videoId);

    }
}



class Student3{
    constructor({
        name,
        email,
        username,
        instagram=undefined,
        facebook = undefined,
        approvedCourses =[],
        learningPaths=[],

    }){
        this.name=name;
        this.email=email;
        this.username =username;
        this.socialMedia={twitter,instagram,facebook};
        
        this.approvedCourses =approvedCourses;
        this.learningPaths=learningPaths;
    }
}

const juan2 = new Student3({
    name: "juanDc",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
});
const miguel2 = new Student3({
    name: "migue",
    username: "miguedc",
    email: "migue@migue.com",
    twitter: "miguedc",
});

class Course{
    constructor({
        name,
        clases=[],
    }){
        this._name = name;
        this.clases= clases;
    }
    get name(){
        return this._name;
    }
    set name(nuevoNombrecito){
        if(nuevoNombrecito=== "Curso malito de programacion basica"){
            console.error("Web... no");
        }else{
        this._name=nuevoNombrecito;
        }
    }
};

class learningPath{
    constructor({
        name,
        courses =[],
    }){
        this.name=name;
        this.courses=courses;
    }
}

const escuelaWeb = new learningPath({
    name:"Escuela de Desarrollo web",
    courses:[
        cursoProgBasica,
        
    ],
});

const cursoProgBasica = new Course({
    name:"Curso Gratis de Programación básica",
});
cursoProgBasica.name=""


