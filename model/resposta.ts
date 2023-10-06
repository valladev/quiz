export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, reveleada = false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = reveleada
    }

    get valor() {
        return this.#valor;
    }
    get certa() {
        return this.#certa;
    }
    get revelada() {
        return this.#revelada;
    }
}