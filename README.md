![74842491-cb22aa80-532a-11ea-8116-150ef294bd59](https://user-images.githubusercontent.com/12829262/74886021-4d38c080-5377-11ea-8c70-1e03bf4c2231.png)
# ¿Qué es AutoSlides?
AutoSlides es una **plantilla de presentaciones** de Google potenciada con código Apps Script diseñada para ser utilizada en **puntos de información desatendidos**, aunque también puede usarse como elemento informativo, enlazado o incrustado, en cualquier sitio web. 

# ¿Por qué AutoSlides?
Las presentaciones de Google disponen de una función de publicación que facilita su difusión. De este modo pueden enlazarse o incrustarse en medios web con facilidad. No obstante, si se modifican las disapositivas de la presentación es necesario recargar la página que contiene sus versiones publicadas en el navegador para que estos cambios se manifiesten. AutoSlides es capaz de generar un pase de diapositivas auto hospedado, visible utilizando un navegador, que se **refresca automáticamente** a intervalos prefijados sin necesidad de recargar la página web de manera manual en el navegador.

# ¿Qué puede hacer AutoSlides?
AutoSlide dispone de las siguientes características y funciones:
+ Publicación de la presentación (de modo análogo a :computer_mouse: `Archivo` :: `Publicar`) e incrustación por medio de una webapp integrada. El despliegue inicial como webapp debe ser realizado manualmente por el propietario de la presentación, pero a partir de ese momento ya es posible controlar su estado de publicación utilizando los propios menús de AutoSlides.
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
+ Detección de gráficos de hoja de cálculo vinculados en la presentación. De haberlos, AutoSlides mostrará una advertencia y facilitará instrucciones para que el usuario cree, si así lo desea, un activador por tiempo que deberá vincularse a una función específica del script (`refrescarGraficosHdc`) para actualizar también estos gráficos a intervalos específicos a partir de sus datos numéricos de origen.

![esquema](https://user-images.githubusercontent.com/12829262/74886127-9e48b480-5377-11ea-80ca-09f626e40f0d.png)

# No he entendido gran cosa ¿me pones un ejemplo?
Claro que sí.

Partimos de la **hoja de cálculo** [AutoSlides # origen (demo)](https://docs.google.com/spreadsheets/d/1MPYs0DleXOiLRjeKTLcopzh8XkvWp_jT2717SGRe2JU/template/preview). Como verás, contiene 5 gráficos distintos cuyos datos de origen podrían proceder de fuentes diversas: formularios, información importada de otras hojas de cálculo, valores numéricos introducidos directamente por el usuario...

Estos gráficos han sido insertados en la **presentación** [AutoSlides (demo)](https://docs.google.com/presentation/d/15QCPrNd9VlX2WA23basUCu-LQNzfADavtUh--xeg_pU/template/preview) y quizas podrían experimentar cambios en el futuro como consecuencia de variaciones en los datos en los que se basan. Eso es habitual cuando se usan gráficos que reflejan la evolución de procesos dinámicos (por ejemplo, las respuestas a un formulario abierto). Sin AutoSlides, deberíamos actualizarlos en la presentación de manera manual por medio de las funciones del menú contextual de gráfico vinculado. Con AutoSlides... veremos más abajo qué se puede hacer.

![74864106-48601680-534f-11ea-8aa5-17bfecbb84cf](https://user-images.githubusercontent.com/12829262/74886171-bcaeb000-5377-11ea-9f2c-0d1fb02e1a3f.gif)

AutoSlides es capaz de publicar la presentación y generar una página web con ella incrustada.

![74864895-8f024080-5350-11ea-8a90-a9800b2bc2d5](https://user-images.githubusercontent.com/12829262/74886289-fda6c480-5377-11ea-9809-be1a3d005dc2.gif)

La presentación publicada, visible en la ventana del navegador (derecha), reflejará los cambios que eventualmente se vayan produciendo en la vista de edición (izquierda) sin que el usuario que la visualice deba recargar la página.

![74866819-c6beb780-5353-11ea-9591-918299d3ccb0](https://user-images.githubusercontent.com/12829262/74886315-11eac180-5378-11ea-83b6-f4659f8afa2e.gif)

Podríamos mostrar la versión publicada a pantalla completa en un **monitor visible en un espacio público** (al hacer clic sobre la presentación y pulsar `F11` se pasa a una vista de pantalla completa, sin elementos accesorios) o simplemente incrustar la página web servida por AutoSlides en cualquier **sitio web informativo**, por ejemplo creado con Google Sites.

![74867638-50bb5000-5355-11ea-96c4-7e2a8ea60426](https://user-images.githubusercontent.com/12829262/74886377-49f20480-5378-11ea-8b1b-e5d10dcaeffa.gif)

Además, AutoSlides utiliza CSS para conseguir que la presentación se ajuste dinámicamente al tamaño de la ventana del navegador sin dejar bandas negras. También es posible, si lo deseamos, eliminar la botonera inferior o los bordes del marco de la presentación.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74886543-bbca4e00-5378-11ea-9ba0-260ba7d0fe74.gif"></p>

Aprecia la diferencia que existe entre la inserción convencional (abajo) y la de AutoSlides (arriba).

![74869376-261ec680-5358-11ea-8f68-f9b842629044](https://user-images.githubusercontent.com/12829262/74886759-5165dd80-5379-11ea-8a62-5f3192c130a9.png)

Por último, si el usuario crea un activador GAS temporal que ejecute a intervalos regulares la función `refrescarGraficosHdc`, que forma parte del código de AutoSlides, conseguiremos que los gráficos de hoja de cálculo vinculados se actualicen también *automágicamente*. Por ejemplo, en la imagen del ejemplo se establece una cadencia de actualización de 5 minutos.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74886825-8114e580-5379-11ea-876f-1f691fb14d85.gif"></p>

¿La cosa queda ya más clara? Pues veamos cómo puedes usar AutoSlides para mejorar la publicación de tus presentaciones, paso a paso.

# Instrucciones de uso
1. Obtén una copia de la **plantilla de AutoSlides** haciendo clic [aquí](https://docs.google.com/presentation/d/1xHNYGCL0t5uPPcRV7a9MUnNfy9Pysn6HnNfmoMQw104/template/preview) y a continuación en `Utilizar plantilla`.
1. Edita tu presentación del modo habitual.
1.Cuando estés listo para publicar tu presentación, haz clic en `🔄 AutoSlides` :: `⚙️ Configurar` para establecer los distintos ajustes que afectarán al modo en que se mostrarán tus diapositivas.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74887855-73ad2a80-537c-11ea-8e90-c500de653000.png"></p>

1. Si AutoSlides detecta que la presentación contiene gráficos de hoja de cálculo vinculados mostrará un mensaje y te facilitará instrucciones para indicarte cómo puedes configurar un activador por tiempo que también los actualice. Este paso es totalmente **opcional**, no tienes por qué utilizar gráficos de hojas de cálculo en tus presentaciones o, incluso si lo haces, configurar un activador para actualizarlos.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74888030-1796d600-537d-11ea-90c1-975c4f1ccf44.png"></p>

1. A continuación, clic en `🔄 AutoSlides` :: `🌐 Obtener URL público` y sigue al pie de la letra las instruciones que aparecerán en el panel lateral. Este procedimiento solo tendrás que completarlo una vez (por cada presentación en la que uses AutoSlides).

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74886891-a99cdf80-5379-11ea-8707-5289c6a81876.png"></p>

1. Finalmente, ejecuta nuevamente `🔄 AutoSlides` :: `🌐 Obtener URL público` y obtén el URL de la versión publicada de tu presentación. Puedes abrirlo directamente en tu navegador o utilizarlo como origen de incrustación, por ejemplo en un sitio web creado con Google Sites.  

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74888641-dd2e3880-537e-11ea-9923-e383b54ca195.png"></p>

1. Si en algún momento deseas que tu presentación deje de ser visible públicamente, solo tienes que hacer `🔄 AutoSlides` :: `🔻 Detener publicación`.
