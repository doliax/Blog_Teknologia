
# Blog_Teknologia

Blog sobre tecnología hecho con Ionic / NestJS / MongoDB

## 🛠 Skills
Typescript, HTML5, CSS3, Ionic, NestJS


## Autor

- [@doliax](https://www.github.com/doliax)


## API Reference

#### Get all posts

```http
  GET /posts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `` | `` | Devuelve todos los posts |

#### Get post

```http
  GET /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del post a buscar |

#### Actualizar post

```http
  PUT /posts//${id}
```

| Parameter | Type     | Description                       |        
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del post a actualizar y los datos en el body |

#### Borrar post

```http
  Delete /posts/${id}
```

| Parameter | Type     | Description                       |        
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del post a borrar |


#### Get all opiniones

```http
  GET /opiniones
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Devuelve todas las opiniones |

```http
  POST /opinion
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email, puntuacion, descripcion` | `string, number` | Pasar los datos de la opinion a crear en el body como json |



## Deployment

To deploy this project run 

1. Los json con los datos de la bd estan dentro de la carpeta blog! Conveniente importarlos dentro de la bd de Mongoo

2. Dentro de cada carpeta (blog y blog_nest) instalamos las dependencias del frontend y backend.
```bash
    npm i
```
3. Una vez instaladas en la carpeta blog
```bash
    ionic serve
```
4. En la carpeta blog_nest
```bash
    npm run start
```
## Screenshots

![Home](/imagenes_docu/fotos_blog/01_home.png)


En la pagina principal tenemos un menu lateral el cual es un componente reutilizable.

El contenido son n cards con datos de la base de datos enviados desde la API REST.

También disponemos de un menu mobile para cuando estemos en versión mobile

![MenuLateral](/imagenes_docu/fotos_blog/02_home_menu.png)

En este menu desplegable tenemos el routing para ir a las demas page.

![Post](/imagenes_docu/fotos_blog/03_post.png)

Si clickamos en cualquier post nos lleva a una page con todos los datos de dicho post. En nombre del autor tiene una pipe personalizada que pone el nombre al revés.

![Categorias](/imagenes_docu/fotos_blog/04_categorias_nada.png)

Si vamos al apartado categorías podemos ver dos botones, si clickamos cualquiera de estos nos carga los posts que tengan
ese tipo de categoría y verlos.

![Categorias Datos](/imagenes_docu/fotos_blog/05_categorias_datos.png)

Si vamos al apartado sobre nosotros tenemos información y dos ion-chip que al clickar nos muestra información relevante

![Sobre Nosotros](/imagenes_docu/fotos_blog/06_sobre_nosotros_nada.png)
![Sobre Datos](/imagenes_docu/fotos_blog/07_sobre_nosotros_datos.png)

En el apartado de Opiniones tenemos un formulario el cual podemos enviar nuestras opiniones acerca de la web.
Si no rellenamos el formulario e intentamos enviarlo recibiremos un toast de error. Si lo enviamos correctamente tendremos uno de éxito y el formulario se limpiara.

![Form Invalido](/imagenes_docu/fotos_blog/08_opiniones_invalid.png)
![Form Valido](/imagenes_docu/fotos_blog/09_opiniones_valida.png)
