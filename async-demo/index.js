console.log("Before");
const user = getUser(1, (user) => {
  console.log("User", user);

  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos", repos);
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from database");
    callback({
      id: id,
      gitHubUsername: "mosh",
    });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["rep1", "rep2", "rep3"]);
  }, 2000);
}
