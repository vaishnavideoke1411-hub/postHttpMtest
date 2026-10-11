import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/post';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.scss']
})
export class PostDashComponent implements OnInit {
  postArr : Ipost[] = []

  constructor(
    private postService: PostService
    // private _fetchPost : ApiSer
  ) { }

  ngOnInit(): void {
    this.onFetch()

  }

  onFetch(){
    this.postService.fetchPost()
      .subscribe({
        next : res => {
          console.log(res);
          
          for ( const key in res)
            this.postArr.push({
          ...res[key], id : key
        })
          
      },

        error : err => {
          console.log(err);
          
        }
        
    })
  }

  newPostObj(post: Ipost){
    this.postArr.unshift(post)
    console.log(post);
    
  }

  onUpdate(updtObj : Ipost){
    let getIndex = this.postArr.findIndex(m => m.id === updtObj.id)
    this.postArr[getIndex] = updtObj
  }

  removePost(id : string){
  let getIndex = this.postArr.findIndex(d => d.id === id)
  this.postArr.splice(getIndex,1)
  }
}
