import { Component, OnInit } from '@angular/core';
export class Foto{
  imageSrc:string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
   gallery:Foto[]=[
     {imageSrc:'../../../../assets/childplas.jpg'},
     {imageSrc:'../../../../assets/mangal.jpg'}
  ];

  constructor() {
  }

  ngOnInit() {}

}
