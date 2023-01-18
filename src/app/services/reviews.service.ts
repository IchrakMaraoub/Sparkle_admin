import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
list:Review[];
  constructor(private http:HttpClient) { }
  getList(){
    this.list=[]
    return  this.http.get<{[id: string]: Review}>('http://localhost:3000/reviews')
    .pipe(map((res)=>{
      for(const _id in res){
        if(res.hasOwnProperty(_id)){
        this.list.push({...res[_id], _id:_id})
      } 
     
    }
    }))
  }
  deleteReview(id:number){
    return this.http.delete('http://localhost:3000/reviews/'+id)
    
  }
 /* postNew(text: string) {

    return this.http.post('http://localhost:3000/reviews', { "text": text })

  }*/
}
