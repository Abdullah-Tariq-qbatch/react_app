// call backs are not recommended for asynchronus call
// reason is simple it gets stuck in a traingle like structure wwe call callback hell

function getUser(callback) {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((json) => {
      callback(json);
    });
}

function getPost(callback) {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => {
      callback(json);
    });
}

function getComments(callback) {
  fetch("https://jsonplaceholder.typicode.com/comments/1")
    .then((response) => response.json())
    .then((json) => {
      callback(json);
    });
}

getUser((user) => {
  console.log(user);
  getPost((post) => {
    console.log(post);
    getComments((comments) => {
      console.log(comments);
    });
  });
});


// the ways to avoid callback hell
// 1. Comment
// 2. spliting callback
// 3. promises
// 4. async/await
