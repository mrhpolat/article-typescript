import { Profile } from "./profile";

export class User {
    id: number;
    createDateTime: Date;
    updateDateTime: Date;

    firstName: string;
    lastName:string;
    userName:String;
    password: string;
    isConfirm: boolean;
    email: string; // username
    profile: Profile;
}