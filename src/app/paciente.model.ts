export class Paciente{
    constructor(
        private owner:string,
        private nome:string,
        private telefone:string,
        private email:string,
        private quantidadeConsultas:number,
        private proximasConsultas:number,
        private semPagamento:number
    ){}
} 