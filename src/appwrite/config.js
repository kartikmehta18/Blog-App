import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services{
    client =new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid);
        this.databases =new Databases (this.client);
        this.bucket = new Storage(this.client);

    }
    async createPost ({slug, title , content,  featuredImge, status, userId}) {
        try {
            return this.databases.createDocument(
                conf.appwriteCollectionid,
                conf.appwriteDatabaseid,
                slug,
                [
                  title,
                  content,
                  featuredImge,
                  status,
                  userId,

                ]
            ) 
        } catch (error) {
            console.log(error)
        }
    }
    
    async updatePost ({slug, title , content,  featuredImge, status, userId}){
        try {
            return this.databases.updateDocument(
                conf.appwriteCollectionid,
                conf.appwriteDatabaseid,
                slug,
                [
                  title,
                  content,
                  featuredImge,
                  status,
                  userId,

                ]
            ) 
        } catch (error) {
            console.log(error);
        }
    }

}


const service = new Services();
export default service ;