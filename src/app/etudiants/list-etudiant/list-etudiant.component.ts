import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  etudiants? : Etudiant[]
  constructor(private http:HttpClient,private agent:EtudiantService,private router:Router) { }

  ngOnInit(): void {
    this.agent.getEtudiantsList().subscribe(
      data=>this.etudiants=data,
      error=>console.log(error)
    );
  }
  delete(id:any){
    this.agent.deleteEtudiant(id).subscribe(
      data => this.refresh()
      ,
    error => console.log(error)
    );

  }
  refresh(){
    this.agent.getEtudiantsList().subscribe(
      data=>this.etudiants= data,
      error=>console.log(error)
    );
  }
  update(id:any){
    this.router.navigate(['/update-etudiant',id])
  }

}
