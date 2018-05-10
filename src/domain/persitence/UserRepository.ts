import { User } from "../model/user";
import { GenericRepository } from "../../repository/persistence/GenericRepository";

export class UserRepository extends GenericRepository<User> {
    getUserByUsername(name: string): Promise<User>{
        return;
    }
}