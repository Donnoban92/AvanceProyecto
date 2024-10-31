import { Component, OnInit } from '@angular/core';
import { DeejayServiceService } from './servicios/deejay-service.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items:any = [];
  
  constructor(private readonly deejayService:DeejayServiceService) {}
  ngOnInit(): void {
    this.deejayService.obtenerDeejay().subscribe(
     {
      next:(response:any) => {
        console.log(response)
        this.items = response.results;
      },
      error:(err:any) => {
        console.error(err)
      
      },

     } 
    )
  }
}
