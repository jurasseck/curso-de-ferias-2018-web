export class Usuario {
    id?: string;
    nome: string;
    login: string;
    email: string; 
    perfil: string;
    urlFoto: string;
    senha?:string;

    //Pode haver construtor
    constructor() {}
    
    //Métodos
    nomeAndMail():string {
        return this.nome+" - "+this.email;
    }
}