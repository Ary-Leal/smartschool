import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  title = 'Professores';
  
   public professores = [

    { nome: 'Alberto'},
    { nome: 'Amaro'},
    { nome: 'James'},
    { nome: 'Antonio'},
    { nome: 'Bethe'},
    { nome: 'Carme'},
    { nome: 'Denise'},
   ];

  constructor() { }

  ngOnInit() {
  }

}
