

const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]

// create a function that assigns a vampire hunter from the array of people.
// create a function to find the hunter.
// create a function that randomly assigns each person in the people array a location
// create a function to attack a location based upon button pressed
// create a function so a <p></p> is shown in the html

function createHunter() {
  let randomNumber = Math.floor(Math.random() * people.length)
  let randomPerson = people[randomNumber]
  randomPerson.isHunter = true
  console.log(randomPerson);
}
createHunter()

function assignLocation() {
  people.forEach(person => {
    let randomNumber = Math.floor(Math.random() * locations.length)
    person.location = locations[randomNumber]
    console.log(person);

  });

}
function isEveryoneBat() {
  let notHunter = people.filter(person => !person.isHunter)
  if (notHunter.every(person => person.picture == '🦇')) {
    return true
  } else {
    return false
  }
}


function attackLocation(attackedZone) {
  // console.log('this is my attacked Zone', attackedZone);
  let attackedPeople = people.filter(person => person.location == attackedZone)
  // console.log('attackedPeople', attackedPeople);
  attackedPeople.forEach(person => {

    if (!person.isHunter || isEveryoneBat()) {
      person.picture = '🦇'
      if (person.isHunter) {
        window.alert("Congratulations, you turned everyone into bats!")
        location.reload()
      }
    } else {
      window.alert("The Vampire Hunter Caught you! You Lose!")
      location.reload();
    }

    // console.log('this is my now attacked person...they should be a bat??', attackedPeople);
    assignLocation()
    drawPeople()

  })
}

function drawPeople() {

  // 1- look through your locations array (all the location emojis)...forEach
  locations.forEach(location => {
    // 2 - inside of this foreach declare a variable to hold the location emoji of the person 
    let livingPeopleAtLocation = people.filter(person => person.location == location)

    // 3 - declare a variable thats just going to hold the emoji of the person at that specific location 
    let personEmoji = livingPeopleAtLocation.map(p => p.picture)
    // console.log('person emoji?', personEmoji);
    // console.log(location)
    document.getElementById(location).innerText = personEmoji
  });


  // let peopleString = ""

  // livingPeople.forEach(person => {
  //   peopleString += person.picture
  // })
  // let locationDrawElement = document.getElementById()

  // locationDrawElement.innerText = peopleString
}
assignLocation()
drawPeople()

