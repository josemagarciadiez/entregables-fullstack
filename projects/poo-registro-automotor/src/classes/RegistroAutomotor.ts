import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
  private estaAbierto: boolean;
  private vehiculos: Vehiculo[];

  public constructor() {
    this.estaAbierto = false;
    this.vehiculos = [];
  }

  public chequearApertura() {
    return this.estaAbierto;
  }

  public abrirRegistro() {
    this.estaAbierto = true;
    console.log("El registro se encuentra abierto y en funcionamiento.");
  }

  public cerrarRegistro() {
    this.estaAbierto = false;
    console.log("El registro ha sido cerrado éxitosamente.");
  }

  public listarVehiculos() {
    if (!this.estaAbierto) {
      console.error(
        "ERROR:El registro esta cerrado. Debe abrir antes de poder consultar el listado de vehículos."
      );
      return;
    }
    this.vehiculos.forEach((vehiculo, index) => vehiculo.describir(index + 1));
  }

  public agregarVehiculo(vehiculo: Vehiculo) {
    if (!this.estaAbierto) {
      console.error(
        "ERROR:El registro esta cerrado. Debe abrir antes de poder consultar el listado de vehículos."
      );
      return;
    }
    this.vehiculos.push(vehiculo);
    console.log(
      `El registro ${vehiculo.getId()} ha sido creado correctamente.`
    );
  }

  public modificarVehiculo(vehiculo: Vehiculo) {
    const index = this.vehiculos.findIndex(
      (v) => v.getId() === vehiculo.getId()
    );

    if (index === -1) {
      console.error("ERROR: No se ha podido encontrar el registro.");
      return;
    }
    this.vehiculos[index] = vehiculo;
    console.log(
      `El registro ${vehiculo.getId()} ha sido modificado éxitosamente.`
    );
  }

  public eliminarVehiculo(vehiculo: Vehiculo) {
    const index = this.vehiculos.findIndex(
      (v) => v.getId() === vehiculo.getId()
    );

    if (index === -1) {
      console.error("ERROR: No se ha podido encontrar el registro.");
      return;
    }

    this.vehiculos = this.vehiculos.filter(
      (v) => v.getId() !== vehiculo.getId()
    );

    console.log(
      `El registro ${vehiculo.getId()} ha sido eliminado éxitosamente.`
    );
  }
}
