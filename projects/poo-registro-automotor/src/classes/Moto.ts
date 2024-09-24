import { Vehiculo } from "./Vehiculo";

type Cilindrada = 50 | 125 | 250 | 300 | 500;

export class Moto extends Vehiculo {
  private cilindrada: Cilindrada;

  public constructor(marca: string, modelo: string, cilindrada?: Cilindrada) {
    super(marca, modelo);
    this.cilindrada = cilindrada ? cilindrada : 125;
  }

  public getCilindrada() {
    return `${this.cilindrada} cc`;
  }

  public setCilindrada(cilindrada: Cilindrada) {
    this.cilindrada = cilindrada;
  }
}
