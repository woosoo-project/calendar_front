const range = (start: number, end: number): Array<number> => {
    const array = [];
    for (let i = start; i <= end; i += 1) {
        array.push(i);
    }
    return array;
};

export { range };
