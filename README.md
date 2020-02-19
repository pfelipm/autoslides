# AutoSlides
AutoSlides es una plantilla de presentación de Google potenciada con código Apps Script diseñada para ser utilizada en puntos de información desatendidos (aunque también puede usarse como elemento informativo, enlazado o nuevamente incrustado en cualquier sitio web). Dispone de las siguientes características y funciones:
+ Publicar la presentación (de modo análogo a Archivo > Publicar) e incrustarla por medio de una webapp integrada. El despliegue inicial como webapp debe ser realizado manualmente por el propietario de la presentación, pero a partir de ese momento ya es posible controlar el estado de publicación utilizando los propios menús del script.
+ Actualizar automáticamente la presentación incrustada a intervalos escogidos por el usuario, utilizando una transición suave al recargarla. De este modo se pueden introducir modificaciones en las diapositivas, que acabarán siendo visualizados en cualquier soporte web donde se esté mostrando la webapp.
+ La webapp incrusta la presentación de manera totalmente responsive, teniendo en cuenta para ello su relación de aspecto (16:9, 16:10, 4:3, etc).
+ El usuario puede personalizar el modo en que se realiza la incrustación alterando ciertos parámetros:
  + Tiempo de avance de diapositivas (s).
  + Periodicidad de la recarga (s).
  + Retardo tras fundido en recarga (ms).
  + Inicio automático (sí / no).
  + Repetición cíclica (sí / no).
  + Eliminación del panel de botones habitual en las presentaciones incrustadas (sí / no).
  + Eliminación de las bandas laterales negras habituales en las presentaciones incrustadas (sí / no).
  + Eliminación del borde del marco de incrustación (sí / no).
+ Gráficos de hoja de cálculo vinculados en la presentación. En ese caso AutoSlides muestra un mensaje dando instrucciones para que el usuario cree, si lo desea, un activador por tiempo, que deberá vincularse a una función específica del script para actualizar también estos gráficos a intervalos específicos.
