const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storeLocal(obj, key = 'key') {
  localStorage.setItem(key, JSON.stringify(obj));
};

function getLocal(key) {
  console.log(JSON.parse(localStorage.getItem(key)));
  return JSON.parse(localStorage.getItem(key));
}

storeLocal(user, 'user');
getLocal('user');