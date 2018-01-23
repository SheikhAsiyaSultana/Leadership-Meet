import { Component, OnInit } from '@angular/core';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [AgendaService]
})
export class AgendaComponent implements OnInit {

public speakers:any[];
public name:string;
public designation:string;
public description:string;


  constructor(private agendaService:AgendaService) { }

  ngOnInit() {
             
      this.agendaService.getAllSpeakers()
      .subscribe( 
       (res) => {
            this.speakers=res;
            this.name=res.name;
            this.designation=res.designation;
            this.description=res.description;
         
            console.log(this.speakers);
            console.log(this.name);
         },
      (err) => console.log(err)
    );
  }

}
