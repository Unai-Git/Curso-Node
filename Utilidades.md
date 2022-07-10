#Utilidades

##Comandos

> Ejecutar archivo:

```shell
node nombre_fichero.js

nodemon nombre_fichero.js
```

> Ejecutar scripts del package.json:

```shell
npm run nombre
```

> Reconstruir los módulos de node:

```shell
npm install
```

##Paquetes y Dependencias

> **Especificar version**

```shell
npm i colors@1.0.0
```

> **Actualizar version**

```shell
npm update
```

> **Nodemon:** Monitorea los cambios en el código fuente que se esta desarrollando y automáticamente re inicia el servidor.(Usar en desarrollo)

```shell
npm install -g nodemon
            O
npm install --save-dev nodemon
```

> **package.json:** Su finalidad es mantener un historial de los paquetes instalados y optimizar la forma en que se generan las dependencias del proyecto y los contenidos de la carpeta node_modules/

```shell
Inicializar package.json:
npm init

Valores por defecto
npm init -y
```

> **Yargs:** Ayuda a crear herramientas de línea de comandos interactivas analizando argumentos y generando una interfaz de usuario elegante

```shell
npm i yargs
```

> **Inquirer:** Colección de interfaces de usuario de línea de comando interactivas comunes.

```shell
npm install inquirer
```

> **uuid:** Crear uuid aleatorios.

```shell
npm install uuid
```

> **axios:** Cliente HTTP basado en promesas para el navegador y node.js.

```shell
npm install axios
```

> **fetch:** Obtener contenido de URL. Admite contenido comprimido con gzip para una descarga más rápida, redireccionamientos (con manejo automático de cookies, por lo que no hay bucles de redireccionamiento eternos), transmisión y canalización, etc

```shell
npm install fetch
```

> **dotenv:** Dotenv es un módulo de dependencia cero que carga variables de entorno desde un archivo .env en process.env

```shell
(Recomendado --save)
npm install dotenv --save
```
