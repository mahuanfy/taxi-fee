module.exports = function taxiFee(input) {
    let price = 0;

    if (input.distance <= 2) {
        price = 6;
    } else if (2 < input.distance && input.distance <= 8) {
        price = 6 + ((input.distance - 2) * 0.8);
    } else {
        price = 10.8 + ((input.distance - 8) * 1.2);
    }
    price += (input.parkTime * 0.25);

    return Math.round(price);
};
