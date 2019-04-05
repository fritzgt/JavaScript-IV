// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from {this.location}`);
  }
}

class Instructor extends Person {
  constructor(instAttrs) {
    super(instAttrs);
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(stAtrrs) {
    super(stAtrrs);
    this.previousBackground = stAtrrs.previousBackground;
    this.className = stAtrrs.className;
    this.favSubjects = stAtrrs.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }
  debugsCode(obj, subject) {
    console.log(`${this.name} debugs ${obj.name}'s code on ${subject}`);
  }
}

//Testing Instructor code

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

fred.demo("JS");
fred.grade("Fritz", "JavaScript");

//Testing Student code

const fritz = new Student({
  name: "Fritz",
  location: "Jacsonville",
  age: 34,
  gender: "male",
  previousBackground: "Tier 2 Tech support",
  className: "WEBPT5",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

fritz.listsSubjects();
fritz.PRAssignment("CSS");
fritz.sprintChallenge("JavaScript");

//Testing ProjectManager code

const alex = new ProjectManager({
  name: "Alex",
  location: "UT",
  age: 25, //Trying to guess lol
  gender: "male",
  gradClassName: "WEB1",
  favInstructor: "Pope"
});

alex.standUp("WEBPT5");
alex.debugsCode(fritz, "HTML");
