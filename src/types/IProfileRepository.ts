export interface IRepository{
    name: string;
    description: string;
}

export interface IProfile{
    name: string,
    login: string;
    avatar_url: string;
}

export interface IProfileRepository{
    profile: IProfile;
    repositories: IRepository[]
}