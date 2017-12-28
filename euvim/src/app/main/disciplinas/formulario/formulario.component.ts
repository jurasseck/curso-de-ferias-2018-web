import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualPasswordsValidator } from '../../../validators/equalPasswords.validator';
import { Router, ActivatedRoute } from '@angular/router';

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
  professor = null;

  constructor(private _disciplinaService: DisciplinaService, fb: FormBuilder, private _router: Router,private _activateRoute: ActivatedRoute) {

    this.form = fb.group({
      id: [null],
      descricao: [null, Validators.required],
      segmento: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataTermino: [null, Validators.required],
      urlLogo: [null],
    })
    //this.email = this.form.controls['email'];
  }
  
  

  ngOnInit() {
    this.identifier = null;    
    this._activateRoute.params.subscribe(params=>{
      this.identifier = params['id'];
    })
    if(this.identifier){
      this._disciplinaService.getItem(this.identifier).subscribe(suc=>{
        var item = Object(suc);
        item.senha = null;
        item.confirmacao = null;
        this.form.setValue(item);
        this.form.get("senha").setValidators(null);
        this.form.get("confirmacao").setValidators(null);
      });
      
    }
  }

  salvar() {
    if(this.form.valid){
      if(this.identifier){
        this._disciplinaService.editar(this.form.value).subscribe(suc=>{
          this.form.reset();
          this._router.navigate(['/main/usuario/consulta']);
        })
      } else {
        this._disciplinaService.adicionar(this.form.value).subscribe(suc=>{
            this.form.reset();
            this._router.navigate(['/main/usuario/consulta']);
          }
        )
      }
    }
  }

  failLoad(event){
    event.target.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/20804-200.png";
  }


}
