import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IpostRes } from '../../model/post';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  isInEditMode : boolean = false
  editId !: string
  @ViewChild('postForm') postForm !: NgForm

  @Output() emitNewPost : EventEmitter<IpostRes> = new EventEmitter<IpostRes>()
  @Output() emitUpdtPost : EventEmitter<IpostRes> = new EventEmitter<IpostRes>()
  constructor(
     private postService : PostService
  ) { }

  ngOnInit(): void {
      this.onEditObj()
  }


  onSubmit(){
    if(this.postForm.valid){
      let newPost = this.postForm.value
      this.postService.createPost(newPost)
        .subscribe({
          next : res => {
            newPost.id = res['name']
            this.emitNewPost.emit(newPost)
            this.postForm.reset()
            console.log(newPost);
            
          },
          error : err => {
            console.log(err);
            
          }
        })
      
    }
  }

   onEditObj(){
    this.postService.editPostSub$
    .subscribe(res =>{
      if(res){
        this.isInEditMode = true;
        this.editId = res.id
        this.postForm.form.patchValue(res)
      }
    })
    
  }

  onUpdate(){
    if(this.postForm.valid){
      let updateObj = this.postForm.value
      this.postService.onUpdate(updateObj)
      .subscribe({
        next : res => {
          updateObj.id = this.editId
          this.emitUpdtPost.emit(updateObj)
          this.postForm.reset()
        }
      })
    }
  }

 
}
