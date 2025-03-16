function criaEmpregado (salarioBase, valorHoraExtra, horasExtras) {
  return {
    salarioBase,
    valorHoraExtra,
    horasExtras,
    calcularSalario: function () {
      return this.salarioBase + this.valorHoraExtra * this.horasExtras
    }
  }
}

const empregado1 = createEmploy(1000, 10, 20);
console.log(empregado1.calcularSalario()); // 1200

const empregado2 = createEmploy(1500, 15, 10);
console.log(empregado2.calcularSalario()); // 1650