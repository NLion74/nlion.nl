function setAge(age_string) {
    const elements = document.querySelectorAll(".age");

    for (let element of elements) {
        element.innerHTML = age_string;
    }
}

function getAge() {
    const time =
        (new Date(
            new Date().toLocaleString({ timeZone: "Europe/Berlin" })
        ).getTime() -
            // Date 2007-09-09 is equal to 2007-10-9 because january is 0 and december 11
            new Date(
                new Date(2007, 9, 9, 0, 0, 0).toLocaleString({
                    timeZone: "Europe/Berlin",
                })
            ).getTime()) /
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
