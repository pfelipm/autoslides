![Banner acercaDe 300p](https://user-images.githubusercontent.com/12829262/74842491-cb22aa80-532a-11ea-8116-150ef294bd59.png)
# ¿Qué es AutoSlides?
AutoSlides es una **plantilla de presentación** de Google potenciada con código Apps Script diseñada para ser utilizada en **puntos de información desatendidos** (aunque también puede usarse como elemento informativo, enlazado o nuevamente incrustado, en cualquier sitio web). Dispone de las siguientes características y funciones:
+ Publicación de la presentación (de modo análogo a :computer_mouse:*Archivo > Publicar*) e incrustarla por medio de una webapp integrada. El despliegue inicial como webapp debe ser realizado manualmente por el propietario de la presentación, pero a partir de ese momento ya es posible controlar el estado de publicación utilizando los propios menús del script.
+ Actualización automática de la presentación incrustada a intervalos escogidos por el usuario, utilizando una transición suave al recargarla. De este modo se pueden introducir modificaciones en las diapositivas, que acabarán siendo visualizadas en cualquier soporte web donde se esté mostrando la webapp.
+ Incrustación totalmente responsive, teniendo en cuenta la relación de aspecto de las diapositivas de la presentación (16:9, 16:10, 4:3, etc).
+ Personalización del modo en que se realiza la incrustación por medio de un panel de control:
  + Tiempo de avance de diapositivas (s).
  + Periodicidad de la recarga (s).
  + Retardo tras fundido en recarga (ms). Se recomienda un valor de al menos 1500 ms para lograr una transición suave sin artefactos visuales.
  + Inicio automático (sí / no).
  + Repetición cíclica (sí / no).
  + Eliminación del panel de botones habitual en las presentaciones incrustadas (sí / no).
  + Eliminación de las bandas laterales negras habituales en las presentaciones incrustadas (sí / no).
  + Eliminación del borde del marco de incrustación (sí / no).
+ Detección de gráficos de hoja de cálculo vinculados en la presentación. De haberlos, AutoSlides mostrará un mensaje dando instrucciones para que el usuario cree, si lo desea, un activador por tiempo que deberá vincularse a una función específica del script para actualizar también estos gráficos a intervalos específicos.
