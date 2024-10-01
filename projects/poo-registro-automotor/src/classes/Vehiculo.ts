import { v4 as uuidv4 } from "uuid";

export class Vehiculo {
  private id: string;
  private marca: string;
  private modelo: string;

  public constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.id = uuidv4();
  }

  public getId(): string {
    return this.id;
  }

  public setMarca(marca: string) {
    this.marca = marca;
  }

  public setModelo(modelo: string) {
    this.modelo = modelo;
  }

  public describir(position: number) {
    console.log(`${position}: ${this.marca} ${this.modelo}`);
  }
}
