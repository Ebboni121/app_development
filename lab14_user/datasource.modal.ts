// this file is used to save each user information in an array
import { User } from "./user.model";

export class Datasource{
    private users:User[]

    //construct an array with different users
    constructor(){
        this.users = new Array<User>(
            new User(1, 'Jade M','jad@jade.com' ),
            new User(2, 'Ebboni M', 'ebboni@ebboni.com'),
        )
    }
//define a getuser()method to return the array users
getuser():User[]{
    return this.users
}






}