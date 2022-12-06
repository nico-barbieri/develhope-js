const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storeLocal(obj) {
  localStorage.setItem('user', JSON.stringify.obj);
};

storeLocal(user);