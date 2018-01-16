import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ProfessorService } from "../../professor.service";
import { LoadingService } from '../../../../services/loading.service';

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
    private ProfessorService : ProfessorService,
    private _loadingService: LoadingService
  ) {
      this._loadingService.callNextStatus(true);
      let item = 0;
      data.professores.forEach(element => {
        item++;
        this.ProfessorService.getItem(element).subscribe((suc)=>{
          this.nomeProfessores.push(suc);
          if(item == data.professores.length){
            this._loadingService.callNextStatus(false);
          }
        }, error=>{
          if(item == data.professores.length){
            this._loadingService.callNextStatus(false);
          }
        })
      });
     }
}
