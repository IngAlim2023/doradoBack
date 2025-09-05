import User from "#models/user";
import { DataUser } from "../interfaces/user.js";


export default class UserServices{
    async create(data:DataUser){
        return await User.create(data)
    }
    async read(){
        return await User.all()
    }
    async readByUserName(username:string){
        return await User.query().where('username',username).first()
    }
}