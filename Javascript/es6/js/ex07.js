const html = (strings, personExp, ageExp, addressExp) => {
    console.log(strings);
    console.log(personExp);
    console.log(ageExp);
    console.log(addressExp);
}


const person = 'Hoang An';
const age = 31;
const str = `Toi ten la ${person}, tôi ${age}`;

const output = html`Toi ten la ${person}, tôi ${age}`;