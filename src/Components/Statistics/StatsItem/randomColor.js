function randomColor() {
    return '#' + randomRgb().toString(16)
        + randomRgb().toString(16)
        + randomRgb().toString(16);
}

function randomRgb() {
    return Math.floor(Math.random() * (256));
}

export default randomColor;