import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ProfessorService } from "../../professor.service";

@Component({
  selector: 'professor-dialog',
  templateUrl: './professor-dialog.component.html',
  styleUrls: ['./professor-dialog.component.scss']
})
export class ProfessorDialogComponent {

 public nomeProfessores = [];

 constructor(
    public dialogRef: MatDialogRef<ProfessorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ProfessorService : ProfessorService
  ) {
      data.professores.forEach(element => {
        this.ProfessorService.getItem(element).subscribe((suc)=>{
          this.nomeProfessores.push(suc);
        })
      });
     }
}
