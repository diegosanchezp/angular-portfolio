import { Injectable } from '@angular/core';

export interface project {
    title: string;
    url: string;
    img: string;
    description: string;
    tags: string[];
    type: string;
    [key: string]: any
}

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private openRequest: any;
  private dbversion: number = 1;

  constructor() {
    // Open or create databse
    this.openRequest = indexedDB.open('projects', this.dbversion);

    this.openRequest.onupgradeneeded = () =>{
      // The database did not previously exist, so create object stores and indexes
      const db = this.openRequest.result; 
      const projectStore = db.createObjectStore(
        "projects", 
        {keyPath: "id", autoIncrement: true}
      );  

      // Test data delete this
      projectStore.put({
        title: 'testProject',
        url: 'https://www.testurl.com',
        img: 'image.png',
        description: 'A test project to see if database works',
        tags: ['TestProject', 'IndexedDB']
      });

      console.log("database created and setted");
      // db.createObjectStore("projectTypes", {keyPath: "id", autoIncrement: true});  
      // db.createObjectStore("tags", {keyPath: "id", autoIncrement: true});  
    }


  }
    
  private get dbresult(){
    return new Promise((resolve,reject)=>{
      this.openRequest.onsuccess = (e) => {
        resolve(e.target.result);
      }

      this.openRequest.onerror = () => {
        console.error("Error During DB creation", this.openRequest.error);
        reject(this.openRequest.error);
      };
    });
  }

  insertProject(project: project){
    return new Promise(async (resolve, reject)=>{
        const db = await this.dbresult as any;
        const transaction = db.transaction("projects", "readwrite");
        const projectStore = transaction.objectStore("projects");

        projectStore.put(project);

        transaction.oncomplete = () => {
          // All requests have succeeded and the transaction has committed.
          resolve();
        }

        transaction.onerror = ()=>{
          reject();
        }
    });
  }

  deleteProject(id: number){}

  updateProject(id: number){}

  getProjects(){
    // Get all projects
    return new Promise<project[]>(async (resolve, reject)=>{
        const db = await this.dbresult as any;
        const transaction = db.transaction("projects", "readonly");
        const projectStore = transaction.objectStore("projects");
        const request = projectStore.getAll();
        request.onsuccess = ()=>{
          resolve(request.result);
        }
        request.onerror = (e)=>{
          reject(e);
        }
    });
  }
}
