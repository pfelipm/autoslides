![Banner acercaDe 300p](https://user-images.githubusercontent.com/12829262/74842491-cb22aa80-532a-11ea-8116-150ef294bd59.png)
# ¿Qué es AutoSlides?
AutoSlides es una **plantilla de presentaciónes** de Google potenciada con código Apps Script diseñada para ser utilizada en **puntos de información desatendidos**, aunque también puede usarse como medio informativo, enlazado o incrustado, en cualquier sitio web. 

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

# No he entendido nada ¿podría ver un ejemplo?
Claro que sí.
Partimos de la hoja de cálculo [AutoSlides # origen (demo)](https://docs.google.com/spreadsheets/d/1MPYs0DleXOiLRjeKTLcopzh8XkvWp_jT2717SGRe2JU/template/preview). Como verás, contiene 5 gráficos distintos cuyos datos de origen puede proceder de fuentes diversas: formularios, información importada de otras hojas de cálculo, introducida directamente por el usuario...

Estos gráficos han sido insertados en la presentación [AutoSlides (demo)](https://docs.google.com/presentation/d/15QCPrNd9VlX2WA23basUCu-LQNzfADavtUh--xeg_pU/template/preview). Si estos gráficos cambian como consecuencia de variaciones en sus datos de origen es necesario utilizar su menú contextual para refrescarlos.
![AutoSlides vincular gráfico](https://user-images.githubusercontent.com/12829262/74864106-48601680-534f-11ea-8aa5-17bfecbb84cf.gif)

