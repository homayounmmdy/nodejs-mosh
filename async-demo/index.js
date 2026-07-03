console.log("Before");
const user = getUser(1);
console.log(user)
console.log("After");

function getUser(id) {
  setTimeout(() => {
    console.log("Reading user from database");
    return {
      id: id,
      gitHubUsername: "mosh",
    };
  }, 2000);
}
