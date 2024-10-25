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

export interface IInfoAPI {
    info: string,
    info1: string,
    info2: string,
}
