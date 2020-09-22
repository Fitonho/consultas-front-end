export class Consulta{
    constructor(
        public owner:string,
        public nome:string,
        public dataConsulta:Date,
        public preco:string,
        public dataPagamento:Date,
        public pago:string,
        public id:string
    ){}
}