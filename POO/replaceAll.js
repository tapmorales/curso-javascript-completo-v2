if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (busca, troca) {

        if (!(busca instanceof String || typeof busca === "string")) {
            throw Error("first parameter must be a string")
        }
        if (!(troca instanceof String || typeof troca === "string")) {
            throw Error("second parameter must be a string")
        }
        return this.valueOf().split(busca).join(troca)
    }
}