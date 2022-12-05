function repeatHello(func) {
    const repeatFunc = setInterval(func, 1000);
    setTimeout(() => {clearInterval(repeatFunc)}, 5000);
}

const sayHello = () => console.log('Hello!');

repeatHello(sayHello);
