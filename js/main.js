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
