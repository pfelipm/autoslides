![Banner acercaDe 300p](https://user-images.githubusercontent.com/12829262/74842491-cb22aa80-532a-11ea-8116-150ef294bd59.png)
# ¿Qué es AutoSlides?
AutoSlides es una **plantilla de presentaciones** de Google potenciada con código Apps Script diseñada para ser utilizada en **puntos de información desatendidos**, aunque también puede usarse como medio informativo, enlazado o incrustado, en cualquier sitio web. 

# ¿Por qué AutoSlides?
Las presentaciones de Google disponen de una función de publicación que facilita su difusión. De este modo pueden enlazarse o incrustarse en medios web con facilidad. No obstante, si se modifican las disapositivas de la presentación es necesario recargar la página que contiene sus versiones publicadas en el navegador para que estos cambios se manifiesten. AutoSlides es capaz de generar un pase de diapositivas auto hospedado, visible utilizando un navegador, que se **refresca automáticamente** a intervalos prefijados sin necesidad de recargar la página web de manera manual en el navegador.

# ¿Qué puede hacer AutoSlides?
AutoSlide dispone de las siguientes características y funciones:
+ Publicación de la presentación (de modo análogo a :computer_mouse: `Archivo` > `Publicar`) e incrustación por medio de una webapp integrada. El despliegue inicial como webapp debe ser realizado manualmente por el propietario de la presentación, pero a partir de ese momento ya es posible controlar su estado de publicación utilizando los propios menús de AutoSlides.
+ Actualización automática de la presentación incrustada a intervalos establecidos por el usuario, utilizando una transición suave al recargarla. De este modo se pueden introducir modificaciones en las diapositivas, que acabarán siendo visualizadas en cualquier soporte web donde se esté mostrando la webapp.
+ Incrustación totalmente *responsive*, teniendo en cuenta la relación de aspecto de las diapositivas de la presentación (16:9, 16:10, 4:3, etc).
+ Personalización del modo en que se realiza la incrustación por medio de un panel de control:
  + Tiempo de avance entre diapositivas (s).
  + Periodicidad de recarga de la presentación (s).
  + Retardo tras fundido en recarga (ms). Se recomienda un valor de al menos 1500 ms para lograr una transición suave sin artefactos visuales.
  + Inicio automático (sí / no).
  + Repetición cíclica (sí / no).
  + Eliminación del panel de botones habitual en las presentaciones incrustadas (sí / no).
  + Eliminación de las bandas laterales negras habituales en las presentaciones incrustadas (sí / no).
  + Eliminación del borde del marco de incrustación (sí / no).
+ Detección de gráficos de hoja de cálculo vinculados en la presentación. De haberlos, AutoSlides mostrará una advertencia y facilitará instrucciones para que el usuario cree, si así lo desea, un activador por tiempo que deberá vincularse a una función específica del script (`refrescarGraficosHdc`) para actualizar también estos gráficos a intervalos específicos.

![Diagrama AutoSlides](https://docs.google.com/drawings/d/e/2PACX-1vQmJbOnDrP2xuUAy6ffHRCBlZDgRKOh4ZEO2WFwbTal9Celksl7lL659P2P5AwAgdOStqMcJVpAncK9/pub?w=1059&h=346)

# No he entendido gran cosa ¿me pones un ejemplo?
Claro que sí.

Partimos de la hoja de cálculo [AutoSlides # origen (demo)](https://docs.google.com/spreadsheets/d/1MPYs0DleXOiLRjeKTLcopzh8XkvWp_jT2717SGRe2JU/template/preview). Como verás, contiene 5 gráficos distintos cuyos datos de origen podrían proceder de fuentes diversas: formularios, información importada de otras hojas de cálculo, valores numéricos introducidos directamente por el usuario...

Estos gráficos han sido insertados en la presentación [AutoSlides (demo)](https://docs.google.com/presentation/d/15QCPrNd9VlX2WA23basUCu-LQNzfADavtUh--xeg_pU/template/preview) y podrían alterarse como consecuencia de variaciones en sus datos de origen. En ese caso es necesario, de manera habitual, actualizarlos en la presentación utilizando las funciones del menú contextual del gráfico vinculado.

![AutoSlides vincular gráfico](https://user-images.githubusercontent.com/12829262/74864106-48601680-534f-11ea-8aa5-17bfecbb84cf.gif)

AutoSlides es capaz de publicar la presentación y generar una página web con ella incrustada.

![AutoSlides (demo) - Presentaciones de Google](https://user-images.githubusercontent.com/12829262/74864895-8f024080-5350-11ea-8a90-a9800b2bc2d5.gif)

La presentación publicada, visible en la ventana del navegador (derecha), reflejará los cambios que eventualmente se vayan produciendo en la vista de edición (izquierda) sin que el usuario que la visualice deba recargar la página.

![AutoSlides demo](https://user-images.githubusercontent.com/12829262/74866819-c6beb780-5353-11ea-9591-918299d3ccb0.gif)

Podríamos mostrar la versión publicada a pantalla completa en un **monitor visible en un espacio público** (al hacer clic sobre la presentación y pulsar `F11` se pasa a una vista de pantalla completa, sin elementos accesorios) o simplemente incrustar la página web servida por AutoSlides en cualquier **sitio web informativo**, por ejemplo creado con Google Sites.

![Test incrustación AutoSlides](https://user-images.githubusercontent.com/12829262/74867638-50bb5000-5355-11ea-96c4-7e2a8ea60426.gif)

Además, AutoSlides utiliza CSS para conseguir que la presentación se ajuste dinámicamente al tamaño de la ventana del navegador sin dejar bandas negras. También puede, si lo deseamos, eliminar la botonera inferior o los bordes del marco de la presentación.

![AutoSlides responsive recorte](https://user-images.githubusercontent.com/12829262/74868847-31252700-5357-11ea-876e-b17852c0af3f.gif)

Aprecia la diferencia que existe entre la inserción convencional (abajo) y la de AutoSlides (arriba).

![screenshot-sites google com-2020 02 19-20_39_47](https://user-images.githubusercontent.com/12829262/74869376-261ec680-5358-11ea-8f68-f9b842629044.png)

Por último, si el usuario crea un activador GAS que se dispare por tiempo y ejecute la función `refrescarGraficosHdc`, que forma parte del código de AutoSlides, a intervalos específicos lograremos que cualquier alteración en los gráficos vinculados de la presentación se propague a su versión publicada. Por ejemplo, aquí se realiza esta operación para conseguir su actualización con una frecuencia de 5 minutos.

![AutoSlides trigger lq](https://user-images.githubusercontent.com/12829262/74870995-fcb36a00-535a-11ea-9fe4-b845b30a1669.gif)

¿La cosa queda ya más clara? Pues veamos cómo puedes utilizar AutoSlides para publicar tus presentaciones, paso a paso.

# Instrucciones de uso

