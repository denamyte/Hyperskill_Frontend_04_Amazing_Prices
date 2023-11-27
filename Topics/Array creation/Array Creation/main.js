const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];

const createNewArray = (value, start, end) => {
    const newArray = originalArr.slice();
    newArray.fill(value, start, end);
    return `[ ${newArray.join(', ')} ]`;
}