export function mixArray<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * Función para elegir elemento de un arreglo al azar
 * @param array Arreglo de variables desde donde se deben elegir los valores
 * aleatorios.
 * @param q Cantidad de elementos que debe tener el arreglo devuelto.
 */
export function randomSelection<T>(array: T[], q: number): T[] {
  // 1. Mezclar
  const mixedItems = mixArray(array);
  // 2. Copia a devolver
  let randomItems: T[] = [];
  // 3. Hago copia auxiliar porque tengo que remover items
  // para que el mismo item no sea elegido dos veces.
  const aux = [...mixedItems];
  // 4. Loop para cargar la respuesta
  for (let i = 0; i < q; i++) {
    // 4a. Genero un index aleatorio entre 0 y q
    const randomIndex = Math.floor(Math.random() * aux.length);
    // 4b. Agrego elemento seleccionado al azar a la respuesta
    randomItems.push(aux[randomIndex]);
    // 4c. Remuevo el item seleccionado del arreglo auxiliar
    // para que no se repita en otro ciclo.
    aux.splice(randomIndex, 1);
  }
  // 5. Devuelvo el arreglo con los elementos aleatorios
  return randomItems;
}

