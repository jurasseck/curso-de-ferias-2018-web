import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualPasswordsValidator } from '../../../validators/equalPasswords.validator';
import { Router } from '@angular/router';

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

  constructor(private _usuarioService: UsuarioService,fb: FormBuilder, private _router: Router) {

    this.form = fb.group({
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
  }

  salvar() {
    if(this.form.valid){
      this._usuarioService.adicionar(this.form.value);
      this.form.reset();
      this._router.navigate(['/main/usuario/consulta']);
    }
  }



}
