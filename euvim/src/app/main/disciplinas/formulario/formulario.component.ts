import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { FormArray } from '@angular/forms/src/model';
import { MinLengthValidator } from '@angular/forms/src/directives/validators';

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
  selectProf=null;

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
      urlLogo: [null],
      instrutores : fb.array([])
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
        var item = suc;
        this.form.setValue({
          id: suc.id,
          descricao: suc.descricao,
          segmento: suc.segmento,
          dataInicio: suc.dataInicio,
          dataTermino: suc.dataTermino,
          urlLogo: suc.urlLogo,
          instrutores:[]
        });
        suc.instrutores.forEach(element => {
          let item = this.professores.find(item=>{ return item.id == element});
          if(item){
            this.selectProf = item;
            this.addProfessor();
          }
        });
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

  addProfessor(){
    let arrayProf = (<FormArray>this.form.get("instrutores"));
    if(!arrayProf.value.includes(this.selectProf.id)){
      arrayProf.value.push(this.selectProf.id);
    }
    this.selectProf.selected = true;
    delete this.selectProf;
  }

  nomeProfessor(id){
    let item = this.professores.find(item=>{ return item.id == id});
    return item ? item.nome : "Professor indisponível";
  }

  removerProfessor(id){
    let arrayProf = (<FormArray>this.form.get("instrutores"));
    let index = arrayProf.value.findIndex(item=>{return item == id});
    if(index > -1){
      arrayProf.value.splice(index,1);
    }
    let item = this.professores.find(item=>{ return item.id == id});
    item.selected = false;
  }

}