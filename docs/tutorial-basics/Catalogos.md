---
sidebar_position: 4
---
import ReactPlayer from 'react-player'

## Plantillas VS Catálogos

Una **Plantilla** es un listado de productos, es lo que le dá la forma al Catálago.

```
Una Plantilla tendrá lo siguiente:
 
 - Cliente Asosicado (1 o más) 
 - Cada producto a ofrecer (solo su Descripción)
```

Un **Catálogo** es lo que se envía al Cliente. Está asociado a una Plantilla. Y a diferencia de esta, posee Cantidades, Precios y Fecha de Vigencia de la oferta.

``` 
Un catálogo tendrá:

- Cliente Asosicado (1 o más) 
- Cada producto a ofrecer (detalle de su precio de venta y las cantidades disponibles)
- Fecha de Vigencia del catálogo (fecha desde - fecha hasta).
```

:::tip NOTA
Se podrán tener **plantillas personalizadas** para aquellos clientes frecuentes, junto con los productos que se ofrecen regularmente, permitiendo así, optimizar tiempos a la hora de enviar disponibles.

```
Ejemplo: Una plantilla para Veterinarios, otra plantilla para Farmacias, etc

```
:::

:::danger sin plantilla no hay catálogo
Para poder enviar un catálogo de productos disponibles, es necesario **crear una plantilla** que lo contenga. 
:::

## ¿Qué recibe el Cliente?

Cuando se envía un catálogo, el cliente recibe un mensaje de **Whatsapp** con un enlace **(link)** al Catálogo generado. 

![Activos](../../static/img/msjWhatsapp.jpg)

Podrá hacer un pedido a partir de ese enlace del Catálogo que hemos enviado. Ver **[Realizar un Pedido siendo un Cliente](./Pedidos.md)**

## Crear una nueva Plantilla

Vamos a crear una nueva plantilla de Catálogo, para luego poder enviarla al/los clientes seleccionados.

<ReactPlayer controls url='https://youtu.be/j6bO9QJHPQQ'/>

## Editar una Plantilla

Luego de creada una plantilla, podremos editar:
- su **Nombre**
- destinatarios **(Clientes)**
- y **Productos** asociados. 

<ReactPlayer controls url='https://youtu.be/rJGUVsg8Ax0' />

## Generar Catálogo

Una vez que se ha creado una plantilla, se podrá generar el Catálogo correspondiente para su posterior envío.

<ReactPlayer controls url='https://youtu.be/NRJPq_Ocels' />
-

:::tip Pendientes de Envío
Aquí se podrán visualizar los catálogos que aún **no han sido enviados**.

Estos catálogos se podrán:
- Editar, Eliminar, Enviar o Programar su envío.
:::

:::caution ENVÍO POR WHATSAPP
 En esta versión del sistema, solo se podrá enviar el catálogo vía whatsapp.
 No se encuentra disponible, el envío por email.
:::

### • Editar un Catálogo 

Se podrán editar los siguientes datos de aquellos catálogos que aún **no se hayan enviado**:

- Fecha de Vigencia
- Destinatarios
- Productos

<ReactPlayer controls url='https://youtu.be/mQln0IqI1Pc' />

### • Eliminar un Catálogo 

Todo catálogo que aún **no se haya enviado**, podrá eliminarse.
:::caution NO SE ELIMINA LA PLANTILLA
Tener en cuenta que esta acción, solo elimina el Catálogo de la sección "PENDIENTES DE ENVVÍO".

La plantilla que lo generó sigue estando creada.
:::

<ReactPlayer controls url='https://youtu.be/Dv6_LzAqOAY' />

### • Enviar un Catálogo 

Luego de la creación de un Catálogo, podrá enviarse a los destinatarios seleccionados.

:::tip enlace al catálogo
Recordar que lo que se envía es un **enlace al catálogo**.

Al hacer click, llevará a la página de **Distribuidora Central** donde, deberá seleccionar:
la cantidad de cada uno de los productos disponibles que desea pedir. 
:::

<ReactPlayer controls url='https://youtu.be/IzIJDPkhTn4' />
-
:::tip Catálogos Activos

- Todos los catálogos enviados, podrán ser consultados en la sección **Historicos**

:::

### • Programar envío de Catálogo
En la sección **Programados**, se visualizan aquellos catálogos que tienen una fecha y hora de envío programadas.

:::caution importante
Todos los catálogos se podrán **modificar** antes de ser enviados.

Debe tenerse en cuenta la **FECHA DE VIGENCIA** de un Catálogo.

La fecha Programada NO DEBE SER MAYOR a la fecha de vigencia del catálogo.
:::

<ReactPlayer controls url='https://youtu.be/SaREQS7TXO4'/>

### • Cancelar Programación de Envío

Luego de que se ha **programado** el envío de un **Catálgo**, podrá cancelarse dicho envío **antes de la fecha programada**.

<ReactPlayer controls url='https://youtu.be/p2PxJcIdBsY' />

## Ver o Cancelar Catálogos Activos 

En este segmento, se pueden observar aquellos catálogos que fueron enviados y sus fechas de validéz, aún se encuentran vigentes. 

<ReactPlayer controls url='https://youtu.be/Jpl2prm0ZtQ' />
-

:::caution ANULAR CATÁLOGO ENVIADO
Se podrá anular el acceso a un enlace de Catálogo ya enviado, para que el Cliente no pueda generar un pedido.

En algunas circunstancias, será necesario anular un catálogo enviado aunque se encuentre dentro de sus fechas de vigencia. 

``` 
Ejemplo: Se envía un Catálogo a Cliente C, pero el precio de venta de los productos han sufrido cambios. 

```
:::

Si el cliente intenta ingresar a un enlace **Cancelado**, no podrá realizar el Pedido y visualizará lo siguiente:
 *(insertar captura de pantalla)*


