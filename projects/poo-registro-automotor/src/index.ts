import { Auto } from "./classes/Auto";
import { Camion } from "./classes/Camion";
import { Moto } from "./classes/Moto";
import { RegistroAutomotor } from "./classes/RegistroAutomotor";

const registro = new RegistroAutomotor();

const auto_1 = new Auto("Peugeot", "308", "diesel");
const auto_2 = new Auto("Volkswagen", "Gol Trend", "nafta");
const auto_3 = new Auto("Ford", "Fiesta", "diesel");
const moto_1 = new Moto("Kawasaki", "Ninja", 500);
const moto_2 = new Moto("Norton", "Comando 961", 250);
const camion_1 = new Camion("Mercedes Benz", "Axor 530", 2, true);

// Abrir registro
registro.abrirRegistro();

// Agregar vehiculos
registro.agregarVehiculo(auto_1);
registro.agregarVehiculo(moto_1);
registro.agregarVehiculo(camion_1);
registro.agregarVehiculo(auto_2);
registro.agregarVehiculo(auto_3);
registro.agregarVehiculo(moto_2);

// Listar vehiculos
registro.listarVehiculos();

// Editar vehiculos
auto_1.setModelo("208");
registro.modificarVehiculo(auto_1);

// Listar vehiculos
registro.listarVehiculos();

// Eliminar un vehiculo
registro.eliminarVehiculo(camion_1);

// Listar vehiculos
registro.listarVehiculos();

// Listar vehiculos por tipo
console.log("/-----------Listar Autos -----------------/");
registro.listarVehiculosPorTipo(Auto);

console.log("/-----------Listar Motos -----------------/");
registro.listarVehiculosPorTipo(Moto);

console.log("/-----------Listar Camiones -----------------/");
registro.listarVehiculosPorTipo(Camion);
// Cerrar registro
registro.cerrarRegistro();
