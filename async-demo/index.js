console.log("Before");
const user = getUser(1, getRepositories);

console.log("After");

function getRepositories(user) {
  console.log("User", user);
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  console.log("Repos", repos);
  getCommits(repos, displayCommit);
}

function displayCommit(commits) {
  console.log(commits);
}

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
