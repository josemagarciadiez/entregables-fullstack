import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
  private capacidad: number;
  private tieneCaja: boolean;
  public constructor(
    marca: string,
    modelo: string,
    capacidad?: number,
    caja?: boolean
  ) {
    super(marca, modelo);
    this.capacidad = capacidad ? capacidad : 1;
    this.tieneCaja = caja ? caja : true;
  }

  public getCapacidad() {
    return `${this.capacidad} Tn`;
  }

  public setCapacidad(capacidad: number) {
    this.capacidad = capacidad;
  }

  public getCaja() {
    return this.tieneCaja;
  }

  public setCaja(tieneCaja: boolean) {
    this.tieneCaja = tieneCaja;
  }
}
