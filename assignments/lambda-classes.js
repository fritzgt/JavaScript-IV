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
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
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
  debugsCode(name, subject) {
    console.log(`${name} debugs {student.name}'s code on ${subject}`);
  }
}
