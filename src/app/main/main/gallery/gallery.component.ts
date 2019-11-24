import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service";
export class Foto{
  _id:string;
  imageSrc:string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery:Foto[]=[];
  //gallery: Foto[] = [
    //{imageSrc: '../../../../assets/childplas.jpg'},
    //{imageSrc: '../../../../assets/mangal.jpg'},
    //{imageSrc: '../../../../assets/riv.JPG'},
    //{imageSrc: '../../../../assets/swemingpull.jpg'},
    //{imageSrc: '../../../../assets/Yard3.JPG'},
    //{imageSrc: '../../../../assets/Yard5.JPG'}
  //];

  constructor(private mainService:MainService) {
  }
  ngOnInit() {
this.mainService.getGallery().subscribe((gallery:Foto[])=>{this.gallery=gallery; console.log(gallery)})
  }
}
