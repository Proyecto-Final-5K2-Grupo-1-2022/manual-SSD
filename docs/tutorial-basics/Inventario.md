---
sidebar_position: 3
---
import ReactPlayer from 'react-player'

El Inventario es el **stock de Productos** que posee Distribuidora Central.

En esta sección encontrarás ayuda para las siguientes acciones:

## Ingreso de Productos al Stock
 En esta sección se registra, el ingreso al stock de **lotes** de productos.
 

 **¿Qué es un LOTE?**
  ```
 Un Lote es un conjunto de productos idénticos que comparten 
 determinadas características de producción.

 Ejemplo:(fecha de vencimiento, marca, proveedor, etc.)

 ```

:::tip Nota

 Se podrán registrar Ingresos de varios productos en una misma transacción.
:::

 <ReactPlayer controls url='https://youtu.be/N8ZBKl-B_Yw'/>
-

:::caution Importante

  En caso de que un producto no aparezca en el listado, deberá agregarse desde

  la sección **[Agregar Nuevos Productos](./Producto.md/#agregar-un-nuevo-producto)** 
  
::: 

## Egreso de Productos al Stock

En esta sección, se podrá actualizar manualmente, el Stock de aquellos productos que **no hayan sido remitados.**

**RECORDAR:** los productos que sean remitados, serán descontados automáticamente del inventario.


<ReactPlayer controls url='https://youtu.be/FajKRCPbQco'/>
---

:::danger Importante
- Un mismo producto puede tener varios lotes de existencias.
- Cada lote se diferenciará por su número de lote y por su fecha de vencimiento.
- Se podrán registrar egresos de varios productos en una misma transacción.
:::

## Buscar Stock de un Producto

Se podrá realizar la búsqueda del stock de un Producto, solo por el campo **"Nombre"**.

No será posible buscar por **"Categoría"** o **"Marca"**.

<ReactPlayer controls url='https://youtu.be/XEmLpbsGKW4'/>
-
:::danger STOCK RESERVADO

El stock reservado, hace referencia a aquellos productos que se encuentran en el proceso de armado de un Pedido. Es decir, que aún no han sido remitados para ser entregados al cliente. 
Ver sección **[Pedidos](./Pedidos.md)**

:::
## Próximos Vencimientos
 En esta sección podremos visualizar el listado de productos en stock que estén próximos a vencer.

 Se mostrarán en una grilla de modo **Ascendente**, es decir, desde fecha más próxima a fecha más lejana.

<ReactPlayer controls url='https://youtu.be/o_A5CaJ05xg'/>
-

:::tip NOTIFICACIONES

 Las verificaciones de las fechas de vencimiento son según los siguientes períodos de tiempo:
  - 1° Aviso: 1 año a vencerse
  - 2° Aviso: cada 3 meses del 1° aviso.
  - 3° Aviso: dentro del último mes de vencimiento.
:::

:::danger ACLARACIÓN: STOCK DISPONIBLE  -  STOCK RESERVADO 

- Solo se podrán eliminar de Próximos Vencimientos, aquellos productos que posean Stock Disponible **vencido**.

- **Ver Video:** En este ejemplo, Alcohol solo tiene stock Reservado, por lo tanto no es posible eliminarlo de próximos vencimientos.

:::
