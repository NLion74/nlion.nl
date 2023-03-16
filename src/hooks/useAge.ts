import { useState } from 'react';

function getAge() {
    const time =
    (new Date().getTime() - new Date(2007, 10, 9).getTime()) /
    (1000 * 60 * 60 * 24 * 365.25);
    const age = time.toString().substring(0, 11);

    return age;
}

export function useAge() {
    const [age, setAge] = useState("");
  
    setInterval(() => {
        const time = getAge();
        setAge(time.toString().substring(0, 11));
      }, 10);
  
    return age;
}
