#Utilidades

>**Importante:** Al usar ECMAScript modules poner la extension del fichero.
>"type": "module"
>import {urls} from './helpers.js'
>Importar de terceros:
>import express from 'express'

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

> **express:**

- Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
- Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
- Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
- Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.S

```shell
 npm install express
```

> **Handlebars:** Lenguajes de plantillas sin lógica que mantienen la vista y el código separados como todos sabemos que deberían estar.
> Un adaptador de motor de vista Express.js para Handlebars.js
> https://github.com/pillarjs/hbs

```shell
npm install hbs
```

> **heroku:** Permite a los desarrolladores crear, ejecutar y operar aplicaciones completamente en la nube.
> Pasos:

- Instalar

```shell
npm install -g heroku
```

- Hacer Login

```shell
heroku login
```

- En la ruta del directorio del proyecto(Conectar el repositorio local con heroku)

```shell
heroku git:remote -a nombre-de-la-app-puesto-en-heroku
```

- Hacer push(En este caso al main)

```shell
git push heroku main
```

> **http-server:** Servidor HTTP estático de línea de comando simple y sin configuración.

```shell
npm i --global http-server
```

> **cors:** El Intercambio de Recursos de Origen Cruzado (CORS  es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent(Navegador) obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece.

```shell
npm install cors
```
