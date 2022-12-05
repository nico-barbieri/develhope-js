const number = 15;

const graterThanTen = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number);
    } else {
        reject(number)
    }
})

graterThanTen
    .then((num) => console.log(num))
    .catch((err) => console.error(err))