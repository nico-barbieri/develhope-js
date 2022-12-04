function printAsyncName(sayHello, name) {
    setTimeout(() => {
        sayHello();
        setTimeout(() => console.log(`${name}!`), 2000);
    }, 1000);
}

const sayHello = () => console.log("Hello");
printAsyncName(sayHello, "Nico");