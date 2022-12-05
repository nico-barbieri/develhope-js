const number = 15;

const graterThanTen = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number);
    } else {
        reject(new Error ('Number is not greater than 10.'))
    }
})

graterThanTen
    .then((num) => console.log(num))
    .catch((err) => console.error(err))