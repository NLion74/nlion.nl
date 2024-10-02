function setAge(ageString) {
    const elements = document.querySelectorAll(".age");
    for (let element of elements) {
        element.innerHTML = ageString;
    }
}

function getAge() {
    const birthDate = new Date(2007, 9, 9); // October is month 9 (zero-indexed)
    const today = new Date();
    
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Convert to years
    const age = ageInYears.toFixed(8); // Format to 2 decimal places

    return age;
}

function updateAge() {
    setInterval(() => {
        setAge(getAge());
    }, 10);
}

updateAge();
