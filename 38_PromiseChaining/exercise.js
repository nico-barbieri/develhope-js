const isLogged = true;

function login(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random());
        } else {
            reject(new Error ('Not logged in!'));
        }
    })
}

function getUserData(id) {
    return new Promise((resolve, reject) => {
        if (id > .3) {
            resolve({name: "John", age: 24})
        } else {
            reject(new Error ('User not found'));
        }
    })
}

login(isLogged)
    .then(getUserData)
    .then((user) => console.log(user))
    .catch((err) => console.error(err));