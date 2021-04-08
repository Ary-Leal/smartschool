import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

     public titulo = 'Alunos';

     public alunos = [
     { nome: 'Ana'},
     { nome: 'Amanda'},
     { nome: 'Jack'},
     { nome: 'Auristela'},
     { nome: 'Arivaldo'},
     { nome: 'Arinaldo'},
     { nome: 'Ariosto'},

];


  constructor() {}



  ngOnInit(): void {


  }

}
