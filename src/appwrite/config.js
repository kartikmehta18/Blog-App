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
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
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
    
    async updatePost (slug,{ title , content,  featuredImge, status, userId}){
        try {
            return this.databases.updateDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
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

    async deletePost (slug){
        try {
            return this.databases.deleteDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
                
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPost (slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
            )
        } catch (error) {
           console.log(error) 
        }
    }

    async getPosts(queries =[Query.equal("status", "active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteCollectionid,
                    conf.appwriteDatabaseid,
                    queries,
                    
                )
            } catch (error) {
                console.log(error);
                return false
            }
    }
// file upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
            conf.appwriteBucketid,
            file    

            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    // delete file 
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
            conf.appwriteBucketid,
            fileId    

            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

//    getFilePreview(fileId){
//         try {
//              this.bucket.getFilePreview(
//                 conf.appwriteBucketid,
//                 fileId
//              )
//         } catch (error) {
//             console.log(error);
//             return false
//         }
//     }


    getFilePreview(fileId){
      return this.bucket.getFilePreview(
        conf.appwriteBucketid,
        fileId 
      )  
    }

    getFileView(fileId){
        return this.bucket.getFileView(
            conf.appwriteBucketid,
            fileId
        )

    }
}


const service = new Services();
export default service ;