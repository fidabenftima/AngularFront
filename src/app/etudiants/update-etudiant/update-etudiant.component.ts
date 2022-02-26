import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {

  etudiant =new Etudiant();
  id?:number;
    constructor(private http:HttpClient,private agent:EtudiantService,private router:Router,private sniper:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id = this.sniper.snapshot.params['id'];
      this.agent.getEtudiant(this.id).subscribe(
      data=>this.etudiant=data,
      error=>console.log(error)
  
      );
    }
    onSubmit(){
      this.agent.updateEtudiant(this.id,this.etudiant).subscribe(
  data=>{
    console.log(data);
    this.router.navigate(['/list-etudiant']);
  },
  error=>console.log(error)
      );
  
    }
  
  
  }