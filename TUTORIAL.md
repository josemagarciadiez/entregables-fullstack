## Crear un nuevo proyecto de TypeScript

Para crear un nuevo proyecto TypeScript dentro de la carpeta `projects`, sigue estos pasos:

1. **Crear un Nuevo Directorio**: Dentro de la carpeta `projects`, crea un nuevo directorio para tu proyecto:

   ```bash
   mkdir projects/mi-nuevo-proyecto
   cd projects/mi-nuevo-proyecto
   ```

2. **Inicializar el Proyecto**: Usa npm para inicializar un nuevo proyecto TypeScript:

   ```bash
   npm init -y
   ```

3. **Agregar Scripts**: Actualiza el `package.json` con scripts útiles:

   ```json
   {
     "scripts": {
       "tsc": "tsc",
       "build": "node build/index.js",
       "dev": "ts-node-dev src/index.ts",
       "tnode": "ts-node-dev"
     }
   }
   ```

4. **Configurar la Estructura del Proyecto**: Crea una estructura básica para el proyecto:

   ```bash
   mkdir src
   touch src/index.ts
   ```

5. **Crear tsconfig.json**: Crea un archivo `tsconfig.json`:

   ```bash
   touch tsconfig.json
   ```

6. **Configura tsconfig.json**: Agrega la siguiente configuración básica al archivo `tsconfig.json`:

   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true
     },
     "include": ["src/**/*.ts"],
     "exclude": ["node_modules"]
   }
   ```

7. **DEPENDENCIAS**: Asegurate de tener instlado TypeScript y las dependencias necesarias, incluido ts-node-dev:

   ```bash
   npm install --save-dev typescript @types/node ts-node-dev
   ```

8. **Compilar y Ejecutar**: Compila el código TypeScript y ejecuta el proyecto:
   ```bash
   npm run dev
   ```

¡Felicidades! Has creado con éxito un nuevo proyecto TypeScript dentro del monorepositorio.
