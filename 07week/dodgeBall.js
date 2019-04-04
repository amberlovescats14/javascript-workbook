"use strict"
//   Im going to create a class that can construct first and last name
// Then Im going to extend that class with another class for extra values
// Then one more extend with a static property of the Blue teams color and mascot
//Then I need to add event listeners to the buttons which will move the innerHTML from one div to another.


const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Person {
  constructor(name, id){
    this.name = name;
    this.id = id
  }
}
let player1 = new Person('Amber', 1)
// console.log(player1.name)

class Player extends Person{
  constructor(name, id, age, skillSet, placeBorn){
    super(name, id)
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }
}
class BlueSpecs {
  constructor(color, mascot){
    this.color = color;
    this.mascot = mascot;
  }

}
class RedSpecs {
  constructor(color, mascot){
    this.color = color;
    this.mascot = mascot;
  }

}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person)} )
    li.appendChild(button)
    li.setAttribute('id', `${person.id}`)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (person) => {
  console.log(`li ${person.id} was clicked!`);
  document.getElementById(`${person.id}`).remove(this);
  const li = document.createElement('li');
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  const ul = document.getElementById('players');
  ul.appendChild(li).innerHTML = `${person.name} Age: ${person.age} Skills: ${person.skillSet} PlaceBorn: ${person.placeBorn}` ;
  li.setAttribute('id', `${person.id}`)
  li.append(button);
  li.append(button2);
  button.setAttribute('style', "background-color: #33D8FF; margin-left: 10px");
  button2.setAttribute('style', "background-color: #A70623; margin-left: 10px");
  button.innerHTML = 'Blue Team';
  button2.innerHTML = 'Red Team'
  button.addEventListener('click', function(){addToBlue(person)});
  button2.addEventListener('click', function(){addToRed(person)})

  // console.log(person.name)
}
function addToBlue(person) {
  console.log(`Blue button was clicked, ${person.name}`);
  document.getElementById(`${person.id}`).remove(this);
  const li = document.createElement('li');
  const button = document.createElement('button');
  const ul = document.getElementById('blue');
  const blue = new BlueSpecs('Blue', 'Eagle')
  ul.appendChild(li).innerHTML = `Name: ${person.name}, Age: ${person.age}
   Team Color: ${blue.color} Team Mascot: ${blue.mascot}`;
   li.setAttribute('style', "color:#33D8FF")
}
function addToRed(person) {
  console.log(`Red button was clicked, ${person.name}`);
  document.getElementById(`${person.id}`).remove(this);
  const li = document.createElement('li');
  const button = document.createElement('button');
  const ul = document.getElementById('red');
  const red = new RedSpecs('Red', 'Cat')
  ul.appendChild(li).innerHTML = `Name: ${person.name}, Age: ${person.age}
   Team Color: ${red.color} Team Mascot: ${red.mascot}`;
   li.setAttribute('style', "color:#A70623")
}











