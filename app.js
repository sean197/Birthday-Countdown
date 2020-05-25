// 
const birthday = document.querySelector("#birthday");

// Submit Button
const submitBtn = document.querySelector("body > form > input[type=submit]:nth-child(3)")

// Reference to the form tag
// When we submit we submit to the form tag not the input
const form = document.querySelector("body > div > form")

// Where the days will eventually be shown
const clock = document.querySelector(".clock");

// current Date
const now = new Date();

// const now = dateFns.isToday(new Date());

// current Date in dateFns Form
const currentTime = dateFns.format(now, "YYYY MMM dddd");

// console.log(currentTime);




form.addEventListener("submit", function(e){
    e.preventDefault();

    // console.log (dateFns.format(birthday.value, "YYYY MMM dddd"));

    // dateFns.format(birthday.value, "YYYY MMM dddd");

    // birth is the value of the user
    const birth = dateFns.format(birthday.value, "YYYY MMM dddd");

    // const birth = birthday.value;

    console.log(birth);

    // Difference between current date and user next birthday
    const diff = dateFns.differenceInDays(birth, currentTime);

    // console.log(dateFns.distanceInDays(currentTime, birth, {addSuffix: true}));

    console.log(dateFns.differenceInDays(birth, currentTime))

    // UI
    let html = `
    <span>${diff}<span>
    `;
    // UI
    clock.innerHTML = html;
});
