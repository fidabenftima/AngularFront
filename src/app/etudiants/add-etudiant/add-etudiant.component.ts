import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  etudiant = new Etudiant();
  constructor(
    private http:HttpClient,
    private agent:EtudiantService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.etudiant=new Etudiant();
  }
  onSubmit(){
this.agent.createEtudiant(this.etudiant).subscribe(
  data=>{
    console.log(data);
    this.router.navigate(['/list-etudiant']);
  },
 error=> console.log(error)
);
  }

}
