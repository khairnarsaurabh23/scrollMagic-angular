import { Component, OnInit } from '@angular/core';
import {ScrollMagic} from './../../node_modules/@types/scrollmagic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public A:number=0;
  public B:number=0;
  public C:number=0;

  contructor(){
  }

  ngOnInit(){

  }

  title = 'sm-test';
}
