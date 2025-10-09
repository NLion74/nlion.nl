// Using luxon for date time because the other code was huge a mess
const { DateTime } = luxon;

function setAge(ageString) {
    const elements = document.querySelectorAll(".age");
    for (let element of elements) {
        element.innerHTML = ageString;
    }
}

function getAge() {
    const today = DateTime.now().setZone("Europe/Berlin");

    const birthDate = DateTime.fromISO("2007-10-09T19:07:00", {
        zone: "Europe/Berlin",
    });

    const ageInYears = today.diff(birthDate, "years").years;

    return ageInYears.toFixed(8);
}

function updateAge() {
    setInterval(() => {
        setAge(getAge());
    }, 10);
}

updateAge();
