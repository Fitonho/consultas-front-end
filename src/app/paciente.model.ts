export class Paciente{
    constructor(
        public owner:string,
        public nome:string,
        public telefone:string,
        public email:string,
        public quantidadeConsultas:number,
        public proximasConsultas:number,
        public semPagamento:number
    ){}
} 