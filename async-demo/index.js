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

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading user from database");
      resolve({
        id: id,
        gitHubUsername: "mosh",
      });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["rep1", "rep2", "rep3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
