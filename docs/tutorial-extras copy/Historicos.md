---
sidebar_position: 7
---
import ReactPlayer from 'react-player'

En esta sección se podrá visualizar el historial de movimientos realizados en:

- **Catálogos**
- **Pedidos**
- **Presupuestos**
- **Stock**

## Histórico de Catálogos

Aquí podremos observar el histótico de todos los Catálogos generados, y que poseen alguno de los siguientes estados: 

- **Catálogo Pendiente de enviar:** Son todos aquellos catálogos que se generaron en la sección **[Plantillas/Generar](../tutorial-basics/Catalogos.md/#generar-catálogo).**
- **Catálogo Programado:** Son todos aquellos catálogos que se generaron pero que, aún no han sido enviados y poseen fecha programada de envío. **Ver [Programar Envío](../tutorial-basics/Catalogos.md/#•-programar-envío-de-catálogo).**
- **Catálogo Enviado:** detalla el histórico de los catálogos que ya fueron enviados a los clientes.
- **Catálogo Cancelado:** detalla el histórico de los catálogos que por algún motivo, se decidió cancelar su envió. **Ver [Cancelar envío de Catálogo](../tutorial-basics/Catalogos.md/#•-cancelar-programación-de-envío).**
- **Catálogo Expirado:** Todos los catálogos poseen una fecha de vigencia. Una vez finalizada esta fecha, los mismos expiran, y los clientes ya no pueden acceder a ellos para realizar pedidos.

Se muestran a continuación estas acciones:
<ReactPlayer controls url='https://www.youtube.com/watch?v=5izFl8PhsAA'/>

## Histórico de Pedidos

Aquí podremos observar el histótico de todos los Pedidos generados, y que poseen alguno de los siguientes estados: 

- **Pedido Presupuestado:** Detalla los pedidos que ya fueron generados y, presupuestados y, los montos y cantidades ya fueron aceptadas por el cliente. Estos pedidos aún no han sido armados para su entrega. **Ver sección [Presupuestar Pedidos](../tutorial-basics/Pedidos.md/#presupuestar-pedido-generado-por-distribuidora-central)**
- **Pedido Pendiente:** detalla todos aquellos pedidos realizados por un cliente a través del mensaje recibido por **Whatsapp** con un enlace **(link)**. Este enlace se corresponde al Catálogo de productos disponibles, que anteriormente fué enviado desde **[Enviar Catálogo](../tutorial-basics/Catalogos.md/#•-enviar-un-catálogo).**
- **Pedido Cancelado:** detalla el histórico de los Pedidos que, por algún motivo, se decidieron cancelar antes de ser presupuestados.


Se muestran a continuación estas acciones:
<ReactPlayer controls url='https://www.youtube.com/watch?v=5izFl8PhsAA'/>

## Histórico de Presupuestos

Aquí podremos observar el histótico de todos los Presupuestos generados, y que poseen alguno de los siguientes estados: 
- **Presupuesto Pendiente:** Muestra aquellos presupuestos sin confirmar. Es decir que no poseen Remito generado. **Ver [Confirmar Presupuesto](../tutorial-basics/Pedidos.md/#acciones-sobre-presupuestos)**.
- **Presupuesto Enviado:** Muestra aquellos Pedidos a los cuales se les ha enviado el presupuesto al cliente, pero que aún no han sido armados. 
- **Presupuesto Confirmado:** Muestra los Pedidos presupuestados que se encuentran Remitados.
- **Presupuesto Vendido:** Muestra el historial de Pedidos activos que ya fueron entregados.
- **Presupuesto Anulado:** detalla el histórico de los Presupuestos que por algún motivo, se decidieron anular. 
 
Se muestran a continuación estas acciones:
<ReactPlayer controls url='https://www.youtube.com/watch?v=5izFl8PhsAA'/>

## Histórico de Stock

Aquí podremos observar el histótico de todos los movimientos del stock de productos: 

- **Ingreso de Stock:** Muestra el histórico de ingresos de Productos por lotes. **Ver [Ingreso de Productos al Stock](../tutorial-basics/Inventario.md/#ingreso-de-productos-al-stock).**
- **Egreso de Stock:** Muestra el histórico de egresos de Productos. **Ver [Egreso de Productos al Stock](../tutorial-basics/Inventario.md/#egreso-de-productos-al-stock).**
- **Venta:** detalla los productos que egresaron del stock a través de una venta generada desde un Catálogo.

Se muestran a continuación estas acciones:
<ReactPlayer controls url='https://www.youtube.com/watch?v=5izFl8PhsAA'/>