import { TIMEZONES } from "./constants";

export const getRandomNumber = () => {
    return Math.random();
}

export const getRandomIntegerUnderOneHundred = () => {
    return Math.floor(getRandomNumber() * 100);
}

export const getRandomItem = arr => {
    if (!Array.isArray(arr)) return null;
    const idx = Math.floor(getRandomNumber() * arr.length);
    return arr[idx]
}

export const getTwoRandomItems = arr => {
    if (!Array.isArray(arr)) return [null, null];

    const results = [arr[Math.floor(getRandomNumber() * arr.length)]]
    let idx = Math.floor(getRandomNumber() * arr.length)
    while(idx === results[0]) {
        idx = Math.floor(getRandomNumber() * arr.length)
    }

    results.push(arr[idx])
    return results;
}

export const getRandomDate = () => {
    return Date.now() - getRandomNumber() * 86400000 * 1000
}

export const getRandomSeat = () => {
    const letters = ['A','B','C','D','E'];
    const randomPosition = Math.floor(getRandomNumber() * 5);
    return getRandomIntegerUnderOneHundred() + letters[randomPosition];
}

export const getRandomGate = () => {
    const letters = ['A','B','C','D','E'];
    const randomPosition = Math.floor(getRandomNumber() * 5);
    return letters[randomPosition] + getRandomIntegerUnderOneHundred();
}

export const getRandomFlight = () => {
    return Math.floor(Math.random() * 10000);
}

const appendZero = str => {
    if (str.length === 1) return '0' + str
    return str
}

export const getRandomTime = () => {
    let hr = appendZero(Math.floor(getRandomNumber() * 13));
    let min = appendZero(Math.floor(getRandomNumber() * 60));
    return hr + ':' + min;
}

export const getRandomTimezone = () => {
    return TIMEZONES[Math.floor(getRandomNumber()* 4)];
}