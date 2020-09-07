export class Consulta{
    constructor(
        public owner:string,
        public nome:string,
        public dataConsulta:Date,
        public valor:string,
        public dataPagamento:Date,
        public valorPago:string,
        public resumo:string,
        public qtdConsultas:number,
        public proxConsultas:number,
        public consultasSemPagamento:number
    ){}
}