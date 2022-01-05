//Array of greetings to start the message.
const greeting = [
  "Hello",
  "Howdy",
  "Hi",
  "Greetings",
  "Hey",
  "Welcome",
  "Bonjour",
  "Buenos Dias",
  "What's up",
  "Heyyy",
];
//Array of ways to identify the user in the message
const identifier = [
  "friend",
  "foe",
  "acquaintance",
  "pal",
  "buddy",
  "chum",
  "brother",
  "amigo",
  "homey",
  "mate",
];
//Two arrays. One for compliments and one for insults. They will randomly be picked and added to the end of the message.
const compliment = [
  "Your positivity is infectious",
  "You should be so proud of yourself",
  "You're amazing!",
  "You're a true gift to the people in your life",
  "You're an incredible friend",
  "I really appreciate everything that you do",
  "You inspire me to be a better person",
  "Your passion always motivates me",
  "Your smile makes me smile",
];
const insult = [
  "You're a gray sprinkle on a rainbow cupcake",
  "If your brain was dynamite, there wouldn't be enough to blow your hat off",
  "You are more disappointing than an unsalted pretzel",
  "Light travels faster than sound, which is why you seemed bright until you spoke",
  "Your secrets are always safe with me. I never even listen when you tell me them",
  "I'll never forget the first time we met. But I'll keep trying",
  "Hold still. I'm trying to imagine you with a personality",
  "Your face makes onions cry",
  "Don't be ashamed of who you are. That's my job",
  "You are the human version of period cramps",
];

//Function to randomly pick an element of an array.
const getRandElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const randGreeting = getRandElement(greeting);
const randIdentifier = getRandElement(identifier);

//function to decide if we should use the compliment or insult array and returns a random element.
const complimentOrInsult = () => {
  let chance = Math.floor(Math.random() * 2);
  if (chance === 0) {
    return getRandElement(compliment);
  } else {
    return getRandElement(insult);
  }
};

const randComplimentOrInsult = complimentOrInsult();

//console.log the final mixed message because that's all I know how to do at this point of the codecademy tutorial
console.log(`${randGreeting} ${randIdentifier},\n${randComplimentOrInsult}.`);
