export class User {
    id: number;
    createDate: Date;
    updateDate: Date;
    createBy: string;
    updateBy: string;

    name: string;
    surname:string;
    password: string;
    isConfirm: boolean;
    email: string; // username
    profile: Profile;
}

export class Profile {
    picture: string;
}

export class Article {
    id: number;
    title: string;
    body: string;
    like: Array<number>;
}

export class Comment{
    id: number;
    articleId: number;
}