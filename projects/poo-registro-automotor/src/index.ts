import { Auto } from "./classes/Auto";
import { Camion } from "./classes/Camion";
import { Moto } from "./classes/Moto";
import { RegistroAutomotor } from "./classes/RegistroAutomotor";

const registro = new RegistroAutomotor();

const auto_1 = new Auto("Peugeot", "308", "nafta");
const moto_1 = new Moto("Kawasaki", "Ninja", 500);
const camion_1 = new Camion("Mercedes Benz", "Axor 530", 2, true);

// Abrir registro
registro.abrirRegistro();

// Agregar vehiculos
registro.agregarVehiculo(auto_1);
registro.agregarVehiculo(moto_1);
registro.agregarVehiculo(camion_1);

// Listar vehiculos
registro.listarVehiculos();

// Editar vehiculos
auto_1.setModelo("208");
registro.modificarVehiculo(auto_1);

// Listar vehiculos
registro.listarVehiculos();

// Eliminar un vehiculo
registro.eliminarVehiculo(moto_1);

// Listar vehiculos
registro.listarVehiculos();

// Cerrar registro
registro.cerrarRegistro();
