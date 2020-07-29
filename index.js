//*****************Task1****************************** */
// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };


// function countProperties(obj){
//     return Object.keys(obj).length;
// }

// console.log(countProperties(mentor));

//*****************Task2****************************** */

// let user = {
//     status: "baba",
//     name: "Galia",
//     age: 85, 
//     proffesion: "oldTakingOnTheBeanchLady"
// }

// function showProps(obj){
//     return Object.entries(obj);

// }

// console.log(showProps(user));

//*****************Task3****************************** */


// class Person {
//     constructor(name, sourname){
//         this.name = name;
//         this.sourname = sourname;
//     }

//     showFullName(){
//         return this.name + " " + this.sourname;
//     }
// }

// class Student extends Person{
//     constructor(name, sourname, yearOfAdmission){
//         super(name, sourname);
//         this.yearOfAdmission = yearOfAdmission;       
//     }

//     showFullName(midleName){
//         return this.sourname +" "+ this.name +" "+  midleName;
//     }

//     showCourse(){
        
//         let currentYear = (new Date()).getFullYear();
//         let course = currentYear - this.yearOfAdmission;
//         if(course>=1 && course<=6){
//             return course;
//         }else{
//           return "he isn't a student";
//         }  
//     }
// }


// let stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 5

//*****************Task4****************************** */


// class Worker{
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays){
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showName(){
//         return this.fullName;
//     }
//     showSalary(){
//         return this.dayRate * this.workingDays;
//     }

//     showSalaryWithExperience(){
//        return this.dayRate * this.workingDays * this.#experience;
//     }

//     get showExp(){
//         return this.#experience;
//     }

//     set setExp(value){
//         return this.#experience = value;
//     }

// }

// function sortedWorkers(...arguments){
//     let workers = [...arguments];
// workers.sort((a,b)=>{
//     return a.showExp - b.showExp;
// }).forEach(worker =>{
//     console.log("worker_"+worker.fullName+" : salary_"+ worker.showSalaryWithExperience());
// })}


// // Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// console.log(worker1.showSalary());
// console.log("New experience: " + worker1.showExp);
// console.log(worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// console.log(worker1.showSalaryWithExperience());

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);                 
// console.log(worker2.showSalary());
// console.log("New experience: " + worker2.showExp);
// console.log(worker2.showSalaryWithExperience());
// worker2.setExp = 1.8;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);                 
// console.log(worker3.showSalary());
// console.log("New experience: " + worker3.showExp);
// console.log(worker3.showSalaryWithExperience());
// worker3.setExp = 1.2;
// console.log("New experience: " + worker3.showExp);
// console.log(worker3.showSalaryWithExperience());

// console.log(sortedWorkers(worker1,worker2,worker3))

//****************************task5 ***************** */

// class GeometricFigure{

//     getArea(){
//         return 0;
//     }
//     toString(){
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// class Triangle extends GeometricFigure{
//     constructor(a,b){
//         super();
//         this.a = a;
//         this.b = b;
      
//     }
//     getArea(){
        
//         let triangleArea = 0.5*this.a*this.b;
//         return triangleArea;
//     }
// }

// class Square extends GeometricFigure{
//     constructor(a){
//         super();
//         this.a = a;
//     }
//     getArea(){
//         let squareArea = this.a*this.a;
//         return squareArea;
//     }

// }

// class Circle extends GeometricFigure{
//     constructor(r){
//         super();
//         this.r = r;
//     }
//     getArea(){
//         let circleArea = Math.PI*this.r*this.r;
//         return circleArea;
//     }
// }



// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

// function handleFigures(figures){
    
//     return figures.reduce(function(accumulator, figure){
//                 if(figure instanceof GeometricFigure){
//                     console.log("Geometric Figure - "+ figure.toString()+" : area -"+ figure.getArea())
//                     return accumulator + figure.getArea(); 
//                 }else{
//                     console.log(figure, "- is not a geometric figure");   
//                 }
              
//             },0) 
// }

//     console.log(handleFigures(figures))



 
 
 























