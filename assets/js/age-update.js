function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setAge(age_string) {
    const elements = document.querySelectorAll('.age');

    for (let element of elements) {
        element.innerHTML = age_string
    }
}

function getAge() {
    const time =
    (new Date().getTime() - new Date(2007, 10, 9).getTime()) /
    (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
    const age = time.toString().substring(0, 11);

    return age;
}

function updateAge() {
    setInterval(() => {
        setAge(getAge());
    }, 10);
}

updateAge();
