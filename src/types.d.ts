export interface IPostForm {
    title: string,
    date: string,
    description: string,
}

export interface IPost {
    id: string,
    title: string,
    date: string,
    description: string,
}

export interface IPostAPI {
    [id: string]: IPost;
}