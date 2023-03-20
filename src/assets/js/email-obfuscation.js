function decrypt(encoded) {
    let decoded = atob(encoded);

    return decoded;
}

function encodeString(str) {
    let new_str = [];
    for (let i in str) {
        new_str.push(`&#${str.charCodeAt(i)}`);
    }
    new_str = new_str.join("");

    return new_str;
}

function randomize_encoding(str) {
    let new_str = [];
    for (let i in str) {
        let chance = Math.random();

        if (chance < 0.5) {
            new_str.push(encodeString(str[i]));
        } else {
            new_str.push(str[i]);
        }
    }
    new_str = new_str.join("");

    return new_str;
}

function turn_around(str) {
    let new_str = str.split("").reverse().join("");
    return new_str;
}

function decryptEmail_mailto() {
    const elements = document.querySelectorAll(".mail_obfuscate_mailto");

    for (let element of elements) {
        let mailto = element.href.split("mailto:");
        let address = decrypt(mailto[mailto.length - 1]);

        let address_around = turn_around(address);

        element.href = `mailto:${address_around}`;
    }
}

function decryptEmail() {
    const elements = document.querySelectorAll(".mail_obfuscate");

    for (let element of elements) {
        let address = decrypt(element.innerHTML);

        let address_around = turn_around(address);

        element.innerHTML = address_around;
    }
}

decryptEmail();
decryptEmail_mailto();
