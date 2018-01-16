import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualPasswordsValidator } from '../../../validators/equalPasswords.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {

  public profiles = [
    { value: "PROFESSOR", description: 'Professor' },
    { value: "ADMINISTRADOR", description: 'Administrador' },
    { value: "ALUNO", description: 'Aluno' },
  ];


  form: FormGroup;
  identifier = null;

  constructor(private _usuarioService: UsuarioService, fb: FormBuilder, private _router: Router,private _activateRoute: ActivatedRoute, private _loadingService:LoadingService) {

    this.form = fb.group({
      id: [null],
      nome: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      login: [null, Validators.required],
      perfil: [null, Validators.required],
      senha: [null, Validators.required],
      confirmacao: [null, Validators.required]
    }, {validator: EqualPasswordsValidator.validate("senha","confirmacao")})
    //this.email = this.form.controls['email'];
  }
  
  

  ngOnInit() {
    this._loadingService.callNextStatus(true);
    this.identifier = null;    
    this._activateRoute.params.subscribe(params=>{
      this.identifier = params['id'];
    })
    if(this.identifier){
      this._usuarioService.getItem(this.identifier).subscribe(suc=>{
        var item = Object(suc);
        delete item.urlFoto;
        item.senha = null;
        item.confirmacao = null;
        this.form.get("senha").setValidators(null);
        this.form.get("confirmacao").setValidators(null);
        this.form.setValue(item);
        this._loadingService.callNextStatus(false);
      },err=>{this._loadingService.callNextStatus(false);});
    }
  }

  salvar() {
    if(this.form.valid){
      this._loadingService.callNextStatus(true);
      if(this.identifier){
        this._usuarioService.editar(this.form.value).subscribe(suc=>{
          this.form.reset();
          this._router.navigate(['/main/usuario/consulta']);
          this._loadingService.callNextStatus(false);
        },err=>{this._loadingService.callNextStatus(false);})
      } else {
        this._usuarioService.adicionar(this.form.value).subscribe(suc=>{
            this.form.reset();
            this._router.navigate(['/main/usuario/consulta']);
            this._loadingService.callNextStatus(false);
          },err=>{this._loadingService.callNextStatus(false);}
        )
      }
    }
  }



}
