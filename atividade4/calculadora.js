module.exports = {
    somar: function(a, b) {
        return parseFloat(a) + parseFloat(b);
    },
    subtrair: function(a, b) {
        return parseFloat(a) - parseFloat(b);
    },
    multiplicar: function(a, b) {
        return parseFloat(a) * parseFloat(b);
    },
    dividir: function(a, b) {
        if (parseFloat(b) === 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        return parseFloat(a) / parseFloat(b);
    }
};