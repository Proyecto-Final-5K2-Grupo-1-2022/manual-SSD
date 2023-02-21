---
sidebar_position: 5
---
import ReactPlayer from 'react-player'

Aquí vamos a explicar la gestión de los pedidos desde 2 puntos de vista:

- Realizar pedidos siendo un **[Cliente](./Pedidos.md/#realizar-pedidos-siendo-un-cliente)**
- Realizar pedidos siendo **[Distribuidora Central](./Pedidos.md/#realizar-pedidos-siendo-distribuidora-central)**

## Realizar Pedidos siendo un Cliente

Cuando se envía un catálogo, el cliente recibe un mensaje de **Whatsapp** con un enlace **(link)** al Catálogo generado. 

![Activos](../../static/img/msjWhatsapp.jpg)

Todos aquellos clientes que hayan recibido el  mensaje de **Whatsapp**, podrán realizar un Pedido como se muestra a continuación:

<ReactPlayer controls url='https://youtu.be/iEd_Egslvt0'/>
-

:::tip enviar instructivo
Podrás enviar a tu cliente el instructivo sobre cómo se realiza el pedido.

Enviando el siguiente enlace, disponible en Youtube las 24hs, los 365 días del año.
```bash 
https://youtu.be/iEd_Egslvt0
```
:::

## Realizar Pedidos siendo Distribuidora Central

Todos los Pedidos se presupuestan, y una vez confirmados, se genera su Remito correspondiente, el cual se adjuntará en la entrega de los productos.

Existen 2 tipos de pedidos a Presupuestar:
- **[Pedidos generados por los Clientes](./Pedidos.md/#presupuestar-pedido-generado-por-un-cliente)**
- **[Pedidos generados manualmente](./Pedidos.md/#presupuestar-pedido-generado-por-distribuidora-central)**

:::tip Pedido → Presupuesto → Confirmación → Remito → Entrega.

 Luego de recibir el Pedido, se genera un Presupuesto. Al confirmar
 el Presupuesto del Pedido de productos disponibles, se genera un Remito. 
 El remito se adjunta con la entrega de  los productos.

:::
### Presupuestar pedido generado por un Cliente

Luego de que el Cliente realiza un Pedido desde un Catálogo enviado, podremos realizar el Prespuesto del mismo. 

En este ejemplo se presupuesta y se genera el remito del **Pedido Pendiente #10**.

:::danger Anular

Es posible anular en cualquier momento un Presupuesto o Remitos creados.

:::

<ReactPlayer controls url='https://youtu.be/SpkcowDtrlk'/>

 ### Presupuestar pedido generado por Distribuidora Central

Es posible generar Presupuestos manualmente, es decir; sin que se haya generado un **Catálogo de productos disponibles** vía whatsapp.

:::danger Importante
El campo Recargo/Descuento son valores porcentuales:

- positivos: cuando se desea aumentar un % del importe.
- negativos: cuando se desea descontar un % del importe.

```
Por ejemplo: 
              22% = aumenta un 22/100 el valor del importe
              y -22% = descuenta un 22/100 el valor del importe.

```
:::

<ReactPlayer controls url='https://youtu.be/hw4ECNqNaQ4'/>

## Acciones sobre Presupuestos

En todo Pedido que se haya presupuestado, se podrán realizar alguna de las siguientes acciones:
 - **Anular**: Esta acción cambia el estado del Presupuesto y lo inhabilita.
 - **Editar**: Esta acción sirve para modificar el Presupuesto antes de realizar cualquiera de las siguientes acciones.
 - **Confirmar**: cuando se confirma un Presupuesto, significa que el cliente aceptó el mismo y se pasa a la instancia de preparación del pedido, que habilita la creación del remito del mismo. **Ver [Pedidos Activos](../tutorial-basics/Pedidos.md/#pedidos-activos).**
 - **Imprimir**: la impresión del Pedido genera un archivo en formato PDF, luego de haber confirmado un Presupuesto.
 - **Enviar**: Esta acción, genera un archivo PDF y lo envía al whatsapp del Cliente que se encuentra asociado a ese Presupuesto.

Se muestran a continuación estas acciones:
<ReactPlayer controls url='https://www.youtube.com/watch?v=5izFl8PhsAA'/>.

## Pedidos Activos

 Los Pedidos activos son aquellos pedidos armados, cuyo remito fué generado, y que ya están listos para ser retirados por el Cliente. Les llamaremos **Pedidos Remitados**.
 
:::tip Remitos
 
Los pedidos Remitados son aquellos que ya poseen **remitos generados**.
:::

 Un **pedido remitado**, podrá tener alguna de las siguientes acciones:
   
   - Anular
   - Ver Presupuesto
   - Entregar

Se muestran a continuación estas acciones:

<ReactPlayer controls url='https://www.youtube.com/watch?v=5izFl8PhsAA'/>.