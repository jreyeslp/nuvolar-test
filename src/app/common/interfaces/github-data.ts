export interface GitHubUser {
    login: string,
    avatar_url: string,
    name: string
    public_repos: number,
    followers: number,
    repoList?: GitHubRepo[]
}

export interface GitHubRepo {
    name: string,
    private: boolean,
    description: string,
    html_url: string
}