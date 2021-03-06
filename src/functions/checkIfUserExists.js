const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: `` });

// eslint-disable-next-line require-await
const repo = octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'localzon-e',
    repo: 'website-frontend',
    type: 'private'
})

export default repo;