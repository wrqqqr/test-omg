import generateRandomNumber from "./GenerateRandomNumber";

interface Cell {
    value: number;
    id: number
}

export default function generateData (range:number): Array<Cell> {
    const arr = [];
    for (let i = 0; i <= range; i++) {
        arr.push({value: generateRandomNumber(10, 30), id: i})
    }

    return arr;
}
