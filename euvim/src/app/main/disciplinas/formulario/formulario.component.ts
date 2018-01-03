import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualPasswordsValidator } from '../../../validators/equalPasswords.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {

  public segmentos = [
    { value: "Backend", description: 'Back-end' },
    { value: "Front-end", description: 'Front-end' },
    { value: "Mobile", description: 'Mobile' }
  ];


  form: FormGroup;
  identifier = null;
  professores = [];

  constructor(private _disciplinaService: DisciplinaService, 
              private fb: FormBuilder, 
              private _router: Router,
              private _activateRoute: ActivatedRoute,
              private _professorService: ProfessorService  
            ) {

    this.form = fb.group({
      id: [null],
      descricao: [null, Validators.required],
      segmento: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataTermino: [null, Validators.required],
      urlLogo: [null]
    })
  }
  
  ngOnInit() {
    this.identifier = null;    
    this._activateRoute.params.subscribe(params=>{
      this.identifier = params['id'];
    })
    this._professorService.listarProfessores().subscribe(suc=>{
      this.professores = suc;
    })
    if(this.identifier){
      this._disciplinaService.getItem(this.identifier).subscribe(suc=>{
        var item = Object(suc);
        this.form.setValue(item);
      });
    }
  }

  salvar() {
    if(this.form.valid){
      if(this.identifier){
        this._disciplinaService.editar(this.form.value).subscribe(suc=>{
          this.form.reset();
          this._router.navigate(['/main/disciplina/consulta']);
        })
      } else {
        this._disciplinaService.adicionar(this.form.value).subscribe(suc=>{
            this.form.reset();
            this._router.navigate(['/main/disciplina/consulta']);
          }
        )
      }
    }
  }

  failLoad(event){
    event.target.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/20804-200.png";
  }

  openCalendar(item){
    item.open();
  }
}
