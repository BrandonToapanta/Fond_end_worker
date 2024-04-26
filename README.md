
# API REST WORKERS

API REST para sistema de empleados, donde permite ingresar, actualizar, buscar, ordenar los empleados.


## Instalacion 

- Clonar el back-end/ repositorio [api_worker](https://github.com/BrandonToapanta/api_worker)

```bash
  git clone https://github.com/BrandonToapanta/api_worker.git
```

- Clonar el [front-end](https://github.com/BrandonToapanta/Fond_end_worker)

```bash
  git clone https://github.com/BrandonToapanta/Fond_end_worker.git
```
- Verifica la versión de Angular en la terminal. Debe ser la versión `17.3.5`.

```bash
  ng version
```
- Si es menor a esa versión, ejecuta el siguiente comando.

```bash
  npm install -g @angular/cli
```
- Abre el proyecto en tu terminal y luego instala npm en el proyecto.

```bash
  npm i
```
- Por último, ejecuta el proyecto.
```bash
  ng serve
```



## Cambiar URL de API REST

Ingresa al apartado de `src/app/service/api.service.ts` y edita la variable `url` con la dirección URL donde colocaste la API. Para obtener la API, dirígete a localhost de tu servicio de PHP, ingresa el nombre de la carpeta `http://localhost/tu-nombre-carpeta/` y utiliza esa URL.

```typescript
url: string = 'http://localhost/tu-nombre-carpeta/';
```


## Stack

**Front-end:** Angular 17, Bootstrap 4.6

**Back-end:** PHP

**Data Base:** MySQL


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://brandontoapanta.netlify.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brandon-toapanta-8a87b4199/)


