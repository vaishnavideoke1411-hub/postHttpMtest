import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost, IpostRes } from '../../model/post';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() getData !: Ipost
  @Output() removeemit : EventEmitter<string> = new EventEmitter<string>()
  constructor(
    private postService : PostService
  ) { }

  ngOnInit(): void {
  }
   onEdit(getData : Ipost){
  this.postService.editPostSub$.next(getData)
   }
  onRemove(id : string){
    this.postService.onRemove(id)
      .subscribe({
          next : res => {
            this.removeemit.emit(id)
          },
          error : err => {
            console.log(err)
          }
        })

  }
}
