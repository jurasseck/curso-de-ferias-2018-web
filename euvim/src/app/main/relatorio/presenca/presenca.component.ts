import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../../services/disciplina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RelatorioService } from '../relatorio.service';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {

  public filtred: boolean;
  public disciplinas = [];
  public relatorio=null;
  public form: FormGroup;
  public disciplina;

  constructor(private _disciplinaService: DisciplinaService,
              private _relatorioService: RelatorioService,
              private _form: FormBuilder,
              private _loadingService:LoadingService) {
    this.form = this._form.group({
      disciplina: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required]
    })
  }

  ngOnInit() {
    this._loadingService.callNextStatus(true);
    this._disciplinaService.listar().subscribe(suc => {
      this.disciplinas = suc;
      this._loadingService.callNextStatus(false);
    },err=>{this._loadingService.callNextStatus(false);})
  }

  openCalendar(item) {
    item.open();
  }

  gerarRelatorio() {
    this._loadingService.callNextStatus(true);
    this.filtred = true
    this.relatorio=null;
    this.disciplina = this.disciplinas.find((item) => { return item.id = this.form.value.disciplina });
    this._relatorioService.getPresencaDisciplina(this.form.value).subscribe(suc=>{
      this.relatorio = suc;
      this._loadingService.callNextStatus(false);
    },err=>{this._loadingService.callNextStatus(false);})
  }
}
