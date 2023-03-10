
const that = "That's a"
const descriptor = ["Hell of a","significant","remarkable","weighty","striking","exceptional","extrordinary","special","impressive","groundbreaking","disruptive","market-leading"]
const noun = ["statement,", "tag line,", "headline,", "email,","linkedin post,","Tweet","Instagram story,","target audeince,","cookie policy,","optimisation,","insight,","digital first brand,","client objective,","opportunity,","complex puzzle,","sales funnel,"]
const name = ["Eric","Neil","Michael","Christopher",
"Matthew",
"Joshua",
"Jacob",
"Nicholas",
"Andrew",
"Daniel",
"Tyler",
"Joseph",
"Brandon",
"David",
"James",
"Ryan",
"John",
"Zachary",
"Justin",
"William",
"Anthony",
"Robert",
"Jonathan",
"Austin",
"Alexander",
"Kyle",
"Kevin",
"Thomas",
"Cody",
"Jordan",
"Eric",
"Benjamin",
"Aaron",
"Christian",
"Samuel",
"Dylan",
"Steven",
"Brian",
"Jose",
"Timothy",
"Nathan",
"Adam",
"Richard",
"Patrick",
"Charles",
"Sean",
"Jason",
"Cameron",
"Jeremy",
"Mark"];

const getRandomNumber = (max) => Math.floor(Math.random()* max);

const getRandomName = () =>` ${descriptor[getRandomNumber(descriptor.length)]} ${noun[getRandomNumber(noun.length)]} ${name[getRandomNumber(name.length)]}`;

const setRandomName = () =>{
document.getElementById('randomState').innerText = getRandomName();}
setRandomName();

document.getElementById('generate').addEventListener('click', setRandomName);