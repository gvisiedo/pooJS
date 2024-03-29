class comment{
    constructor({
        content,
        studentName,
        studentRole="estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole=studentRole;
        this.like=0;
    }
    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.like + "likes");
        console.log(this.content);
    }
}



class Course{
    constructor({
        name,
        clases=[],
        isFree= false,
        lang ="spanish",
    }){
        this._name = name;
        this.clases= clases;
        this.isFree=isFree;
        this.lang=lang;
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
    publicarComentario(commentContent){
        const comment= new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}
class freeStudent extends Student3{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo sentimos, " + this.name + "solo puedes tomar cursos abiertos");
        }
    }
}

class basicStudent extends Student3{
    constructor(props){
        super(props);
    }  
    approveCourse(newCourse){
        if(newCourse.lang!=="english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo sentimos, " + this.name + "no puedes cursar cursos en ingles");
        }
    }
}

class expertStudent extends Student3{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    
}
class teacherStudent extends Student3{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    
}