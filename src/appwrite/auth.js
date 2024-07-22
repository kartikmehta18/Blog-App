import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectid);
        this.account = new Account(this.client);  
    }
    async createAccount({email,password,name}){
        try{
                const userAccount = await this.account.create(ID.unique(),email,password,name);
                if (userAccount) {
                    // call
                }else{
                    return userAccount
                }
        }catch(error){
             throw error;
        }
    }
    async login({email, password}) {
        try {
            
        } catch (error) {
          throw error; 
        }
    }
}

const authService = new AuthService();

export default authService