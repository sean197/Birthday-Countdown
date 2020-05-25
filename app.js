const birthday = document.querySelector("#birthday");

const submitBtn = document.querySelector("body > form > input[type=submit]:nth-child(3)")

const form = document.querySelector("body > div > form")


const clock = document.querySelector(".clock");

const now = new Date();

// const now = dateFns.isToday(new Date());


const currentTime = dateFns.format(now, "YYYY MMM dddd");

// console.log(currentTime);




form.addEventListener("submit", function(e){
    e.preventDefault();

    // console.log (dateFns.format(birthday.value, "YYYY MMM dddd"));

    // dateFns.format(birthday.value, "YYYY MMM dddd");

    const birth = dateFns.format(birthday.value, "YYYY MMM dddd");

    // const birth = birthday.value;

    console.log(birth);

    const diff = dateFns.differenceInDays(birth, currentTime);

    // console.log(dateFns.distanceInDays(currentTime, birth, {addSuffix: true}));

    console.log(dateFns.differenceInDays(birth, currentTime))


    let html = `
    <span>${diff}<span>
    `;
    
    clock.innerHTML = html;
});
