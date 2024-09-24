import { Vehiculo } from "./Vehiculo";

type Combustible = "nafta" | "diesel";
type Carroceria = "sedan" | "hatchback";
export class Auto extends Vehiculo {
  private combustible: Combustible;
  private carroceria: Carroceria;

  public constructor(
    marca: string,
    modelo: string,
    combustible?: Combustible,
    carroceria?: Carroceria
  ) {
    super(marca, modelo);
    this.combustible = combustible ? combustible : "nafta";
    this.carroceria = carroceria ? carroceria : "sedan";
  }

  public getCombustible() {
    return this.combustible;
  }
  public setCombustible(combustible: Combustible) {
    this.combustible = combustible;
  }

  public getCarroceria() {
    return this.carroceria;
  }
  public setCarroceria(carroceria: Carroceria) {
    this.carroceria = carroceria;
  }
}
