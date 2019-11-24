import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

interface BookedDates{

  day:number;
  month:number;
  year:number;
  _id:string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  lang:string;
  bookedDates:BookedDates[] = [
    { "_id": "03022019",
      "day": 3,
      "month": 1,
      "year": 2019},
    {  "_id": "02022019",
      "day": 2,
      "month": 1,
      "year": 2019},
    {"_id": "01022019",
      "day": 1,
      "month": 1,
      "year": 2019},
    {
      "_id": "03032019",
      "day": 3,
      "month": 2,
      "year": 2019
    },
    {"_id": "02032019",
      "day": 2,
      "month": 2,
      "year": 2019},
    { "_id": "01032019",
      "day": 1,
      "month": 2,
      "year": 2019},
    {"_id": "28022019",
      "day": 28,
      "month": 1,
      "year": 2019},
    {"_id": "27022019",
      "day": 27,
      "month": 1,
      "year": 2019},
    {"_id": "26022019",
      "day": 26,
      "month": 1,
      "year": 2019},
    {  "_id": "25022019",
      "day": 25,
      "month": 1,
      "year": 2019},
    {"_id": "24022019",
      "day": 24,
      "month": 1,
      "year": 2019},
    {  "_id": "23022019",
      "day": 23,
      "month": 1,
      "year": 2019},
    { "_id": "30122018",
      "day": 30,
      "month": 11,
      "year": 2018},
    { "_id": "20012019",
      "day": 20,
      "month": 0,
      "year": 2019},
    { "_id": "19012019",
      "day": 19,
      "month": 0,
      "year": 2019},
    {  "_id": "18012019",
      "day": 18,
      "month": 0,
      "year": 2019},
    {"_id": "13012019",
      "day": 13,
      "month": 0,
      "year": 2019},
    {"_id": "12012019",
      "day": 12,
      "month": 0,
      "year": 2019},
    {"_id": "11012019",
      "day": 11,
      "month": 0,
      "year": 2019},
    {"_id": "06012019",
      "day": 6,
      "month": 0,
      "year": 2019},
    {
      "_id": "05012019",
      "day": 5,
      "month": 0,
      "year": 2019},
    {"_id": "04012019",
      "day": 4,
      "month": 0,
      "year": 2019},
    {"_id": "26012019",
      "day": 26,
      "month": 0,
      "year": 2019},
    {  "_id": "27012019",
      "day": 27,
      "month": 0,
      "year": 2019},
    { "_id": "28012019",
      "day": 28,
      "month": 0,
      "year": 2019}
  ];
  nDate: string;
  dDate: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }
  getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }
  comparison(bookedDates,d){//проверяет совпадение даты с значением массива забранированных дат
    var resolt = false;
    for(var i=0; i<bookedDates.length; i++){
      if(d.getDate()==bookedDates[i].day&&
        d.getMonth()==bookedDates[i].month&&
        d.getFullYear()==bookedDates[i].year){
        resolt = true;
      }
    }
    return resolt;
  }

  createCalendar(id, year, month) {

    var elem = document.getElementById(id);

    var mon = month; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);
    var m0 = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];
    var m1 = ["січень","лютий","березень","травень","квітень","червень","липень","серпень","вересень","жовтень","листопад","грудень"];
    var m2 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var  m=d.getMonth();
    var table;
    //if(this.translate.use('ru')){table='<tbody><thead><tr><td colspan="4" style="color:rgb(85, 85, 85)">'+m0[m]+'<td colspan="3" style="color:rgb(85, 85, 85)">'+year+'<tr style="color:rgb(85, 85, 85)"><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'}else{
      //if(this.lang=='ua'){
        table='<tbody><thead><tr><td colspan="4" style="color:rgb(85, 85, 85)">'+m1[m]+'<td colspan="3" style="color:rgb(85, 85, 85)">'+year+'<tr style="color:rgb(85, 85, 85)"><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>нд</th></tr><tr>'
  //}else{
        //if(this.lang=='en'){table='<tbody><thead><tr><td colspan="4" style="color:rgb(85, 85, 85)">'+m2[m]+'<td colspan="3" style="color:rgb(85, 85, 85)">'+year+'<tr style="color:rgb(85, 85, 85)"><th>mo</th><th>tu</th><th>we</th><th>th</th><th>fr</th><th>sa</th><th>su</th></tr><tr>'}
      //}
   // };

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < this.getDay(d); i++) {
      table += '<td></td>';
    }
    // ячейки календаря с датами


    while (d.getMonth() == mon) {
      if(this.comparison(this.bookedDates,d)==true){
        if((this.getDay(d)%7==6)||(this.getDay(d)%7==5)){
          if(this.d.getDate()==d.getDate()&&
            this.d.getMonth()==d.getMonth()&&
            this.d.getFullYear()==d.getFullYear()){
            table+='<td style="background-color:#53dd2e; border:2px solid #e35050; color:#e35050; border-radius: 5px">'+d.getDate()+'</td>';
          }else{
            table+='<td style="background-color:#53dd2e; color:#e35050; border-radius: 5px">'+d.getDate()+'</td>';}
        }else{
          if(this.d.getDate()==d.getDate()&&
            this.d.getMonth()==d.getMonth()&&
            this.d.getFullYear()==d.getFullYear()){
            table+='<td style="background-color:#53dd2e; border:2px solid #007bff; color:#007bff; border-radius: 5px">'+d.getDate()+'</td>';
          }else{
            table+='<td style="background-color:#53dd2e; color:#007bff; border-radius: 5px">'+d.getDate()+'</td>';}
        }
      }else{
        // проверка на текущую дату
        if(this.d.getDate()==d.getDate()&&
          this.d.getMonth()==d.getMonth()&&
          this.d.getFullYear()==d.getFullYear()){
          if((this.getDay(d)%7==6)||(this.getDay(d)%7==5)){
            table += '<td style="color:white; background-color: #e35050; border-radius: 5px">' + d.getDate() + '</td>';
          }else{
            table += '<td style="color:white; background-color: #007bff; border-radius: 5px">' + d.getDate() + '</td>';
          }
        }else{
          if((this.getDay(d)%7==6)||(this.getDay(d)%7==5)){
            table += '<td style="color:#e35050">' + d.getDate() + '</td>';
          }else{
            table += '<td style="color:#007bff">' + d.getDate() + '</td>';

          }
        }}
      if (this.getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }
      d.setDate(d.getDate() + 1);
    }
    // добить таблицу пустыми ячейками, если нужно
    if (this.getDay(d) != 0) {
      for (var i = this.getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }
    // закрыть таблицу
    table += '</tr></tbody>';
    // только одно присваивание innerHTML
    elem.innerHTML = table;



  }
  d=new Date();
  m=this.d.getMonth();
  y=this.d.getFullYear();

  next(){

    return this.m==11 ? (this.m=0, this.y++) :(this.m++);
  }
  previous(){
    return this.m==0 ? (this.m=11,this.y--) : (this.m--);
  }

}
