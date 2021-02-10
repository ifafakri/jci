import { Component, OnInit } from '@angular/core';
import  * as $ from 'jquery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $(document).ready(function(){
      $('#logo').show(function(){
        $('#logo').css("visibility","visible")
        $('#logo').fadeIn("slow")
      }) 

      $("#titre").show(function(){
        $('#titre').css("visibility","visible")
         $("#titre").addClass("ant")
      })

      $(".button").show(function(){
        $('.button').css("visibility","visible")
$(".button").addClass("an2")

      })


    })

  }

}
