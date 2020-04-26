class MensagemView {

    constructor(elemento) {
        this._elemento = elemento
    }

    templete(model) {

        return `<p class="alert alert-info">${model.texto}</p>`
    }

    update(model) {

        this._elemento.inerHTML = this.templete(model)
    }
}