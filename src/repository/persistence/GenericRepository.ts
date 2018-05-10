import { IRepository } from "../domain/IRepository";
import { Db, Collection, InsertOneWriteOpResult } from "mongodb";

export class GenericRepository<T> implements IRepository<T> {
    public readonly collection: Collection;
    constructor (db: Db, collectionName: string){
        this.collection = db.collection(collectionName);
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    
    async create(item: T): Promise<boolean> {
        const result: InsertOneWriteOpResult = await this.collection.insert(item);
        return !!result.result.ok;
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}