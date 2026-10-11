import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost, IpostRes } from '../model/post';

@Injectable({
  providedIn: 'root',
  
})

export class PostService {

  BASE_URL = environment.BASE_URL
  POST_URL =  `${this.BASE_URL}/posts.json`
  editPostSub$ : Subject<Ipost> = new Subject<Ipost>()
  
  constructor(
    private _http : HttpClient
  ) { }

  fetchPost(){
    return this._http.get<IpostRes>(this.POST_URL)

  }

  createPost(newPost : Ipost): Observable<IpostRes>{
    return this._http.post<IpostRes>(this.POST_URL, newPost)

  }
  onUpdate(updtPost : Ipost) : Observable<Ipost>{
    let updt_URL = `${this.BASE_URL}/posts/${updtPost.id}.json`
    return this._http.put<Ipost>(updt_URL, updtPost)
  }

  onRemove(id : string){
    let REMOVE_URL = `${this.BASE_URL}/posts/${id}.json`
    return this._http.delete(REMOVE_URL)
  
  }
}
