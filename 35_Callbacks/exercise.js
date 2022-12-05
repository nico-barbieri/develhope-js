function repeatHello(func) {
    setInterval(func, 1000);
}

const sayHello = () => console.log('Hello!');

repeatHello(sayHello);