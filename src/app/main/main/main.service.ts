import {Injectable} from "@angular/core";
import {Foto} from "./gallery/gallery.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export  class MainService {
  constructor(private http:HttpClient){}

    getGallery():Observable<Foto[]>{
   return this.http.get<Foto[]>('api/gallery')
    }

}
