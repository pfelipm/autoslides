![74842491-cb22aa80-532a-11ea-8116-150ef294bd59](https://user-images.githubusercontent.com/12829262/74886021-4d38c080-5377-11ea-8c70-1e03bf4c2231.png)

# ¿Qué hay aquí?
- [¿Qué es AutoSlides?](#qu%C3%A9-es-autoslides)
- [¿Por qué AutoSlides?](#por-qu%C3%A9-autoslides)
- [¿Qué puede hacer AutoSlides?](#qu%C3%A9-puede-hacer-autoslides)
- [No he entendido gran cosa ¿me pones un ejemplo?](#no-he-entendido-gran-cosa-me-pones-un-ejemplo)
- [Instrucciones de uso](#instrucciones-de-uso)
- [Detalles técnicos](#detalles-t%C3%A9cnicos)
- [Licencia](#licencia)

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
2. Edita tu presentación del modo habitual.
3. Cuando estés listo para publicar tu presentación, haz clic en `🔄 AutoSlides` :: `⚙️ Configurar` para establecer los distintos ajustes que afectarán al modo en que se mostrarán tus diapositivas.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74887855-73ad2a80-537c-11ea-8e90-c500de653000.png"></p>

4. Si AutoSlides detecta que la presentación contiene gráficos de hoja de cálculo vinculados mostrará un mensaje y te facilitará instrucciones para indicarte cómo puedes configurar un activador por tiempo que también los actualice. Este paso es totalmente **opcional**, no tienes por qué utilizar gráficos de hojas de cálculo en tus presentaciones o, incluso si lo haces, configurar un activador para actualizarlos.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74888030-1796d600-537d-11ea-90c1-975c4f1ccf44.png"></p>

5. A continuación, clic en `🔄 AutoSlides` :: `🌐 Obtener URL público` y sigue al pie de la letra las instruciones que aparecerán en el panel lateral. Este procedimiento solo tendrás que completarlo una vez (por cada presentación en la que uses AutoSlides).

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74886891-a99cdf80-5379-11ea-8707-5289c6a81876.png"></p>

6. Finalmente, ejecuta nuevamente `🔄 AutoSlides` :: `🌐 Obtener URL público` y consigue el URL de la versión publicada de tu presentación. Puedes abrirlo directamente en tu navegador, enviarlo por correo eléctronico, difundirlo en plataformas sociales o utilizarlo como origen de incrustación, por ejemplo en un sitio web creado con Google Sites. Existe una limitación, no obstante.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74888641-dd2e3880-537e-11ea-9923-e383b54ca195.png"></p>

7. Si en algún momento deseas que tu presentación deje de ser visible públicamente, solo tienes que hacer `🔄 AutoSlides` :: `🔻 Detener publicación`.

# Detalles técnicos
AutoSlides es un script GAS que vive dentro de una presentación de Google, facilitada como **plantilla**. El modo más fácil de usarlo es hacerse una copia de esta plantilla y trabajar sobre ella para construir una nueva presentación. Dado que el código de AutoSlides está compuesto por varios archivos, no resulta práctico incluir manualmente todos ellos en una presentación ya existente.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74914937-9f073800-53c3-11ea-8ab0-6b8f46206f45.png"></p>

La mayor parte del código vive dentro del archivo `Código.gs`. En él se encuentran las **funciones** necesarias para:

- Construir el menú de la aplicación (`onOpen`).
- Mostrar información sobre AutoScript (`acercaDe`, que muestra el contenido del archivo HTML  `acercaDe.html`, inyectando como parámetro mediante un scriptlet explícito (*printing scriptlet*) la cadena que identifica la versión del script (`VERSION`). Esto se consigue gracias al servicio de [plantillas HTML](https://developers.google.com/apps-script/guides/html/templates).
- Contabilizar y actualizar los gráficos vinculados de hoja de cálculo (`contarGraficosHdc` y `refrescarGraficosHdc`). No parece haber en la clase GAS `SlidesApp` facilidades para hacer lo mismo con tablas (rangos de celdas) de hoja de cálculo vinculados del mismo modo. Una posible solución, que quizás no siempre será adecuada, consiste en generar a partir de ellos [gráficos de tipo tabla](https://support.google.com/docs/answer/9146787?hl=es) y vincular estos en nuestras presentaciones y vincular estos últimos.
- Desplegar el panel lateral de configuración de AutoSlides (`configurar`). Se utiliza `PropertiesService` para inicializar y guardar la configuración de incrustación y el estado de publicación de la presentación. La selección de ajustes se realiza mediante un formulario HTML (`panelLateral.html`) creado con la ayuda de [Materialize](https://materializecss.com/).

  Los valores vigentes de cada ajuste son nuevamente inyectados en los elementos del formulario por medio de scriptlets explícitos. Las secciones CSS (`panelLateral_css.html`) y JavaScript (`panelLateral_js.html`) se insertan en el código HTML también mediante scriptlets explícitos, pero esta vez de tipo forzado (*force-printing scriptlets*). También se usan scriptlets no explícitos (*standard scriptlets*) para mostrar las instrucciones de creación de un activador por tiempo si se detectan gráficos vinculados:
  
```javascript
<!-- Incluir valores por defecto de controles del formulario usando printing scriptlets -->
<div class="row">
  <div class="input-field col s12">
  <label for="numFil">Avance automático cada (s)</label>
  <input class="validate" type="number" name="sAvanzar" value="<?= sAvanzar ?>" min="1" step="1" id="sAvanzar">
  </div>
 </div>

...

<!-- Incluir css usando force-printing scriptlets -->
<?!= HtmlService.createHtmlOutputFromFile('panelLateral_css').getContent(); ?>

...

<!-- Incluir js usando force-printing scriptlets -->
<?!= HtmlService.createHtmlOutputFromFile('panelLateral_js').getContent(); ?>
 
...

<!-- Mostrar nº de hdc vinculadas en la presentación + instrucciones  -->
<? if (contarGraficosHdc() > 0 ) { ?>
  <p>Se han detectado <b><?= numGraficos ?></b> gráficos de HdC vinculados.
  Configura un activador temporal si quieres que cuando cambien se actualice 
  la presentación.</p>
  <ul class="collapsible">
  ...
  </ul>
<?}?>
```

- Restablecer los ajustes por defecto cuando se utiliza el botón correspondiente del panel lateral de configuración (`ajustesPorDefecto`). No se modifica en este caso el valor de la propiedad `publicar`.
- Recibir los ajustes establecidos por el usuario desde el panel lateral de configuración vía la llamada JavaScript `google.script.run` y actualizar las propiedades del documento (`actualizarAjustes`).
- Localizar la versión más reciente de la presentación (`obtenerRevisiones`) para publicarla (`publicar`) o dejar de publicarla (`despublicar`). El script depende para ello de la API avanzada de Drive. Si no se ha producido la publicación inicial del script como webapp se mostrará un nuevo panel lateral con instrucciones para el usuario. En caso de que se detecte que la webapp ya haya sido desplegada simplemente se mostrará su URL público. Todo ello encerradito en bloques try{} .. catch{} para cazar posibles errores en tiempo de ejecución, de los que preparando el código estos días me he encontrado alguno que otro, quizás como consecuencia de los [recientes cambios](https://developers.google.com/apps-script/guides/v8-runtime) en la plataforma de Apps Script.

>La publicación de webapps Apps Script tiene en estos momentos bastantes sutilezas y, por qué no decirlo, aristas, que [la llegada](https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!msg/google-apps-script-community/0snPFcUqt40/lH9Dylk7GAAJ) del motor de ejecución `V8` no ha hecho sino afilar. La cosa da para extenderse, así que mejor hablaremos de ello en otra ocasión.

- Generar y devolver al navegador del usuario que accede a la presentación publicada la página web en la que se encuentra incrustada, de acuerdo con las preferencias del usuario (`doGet`). Aquí encontramos más scriptlets explícitos que parametrizan los ajustes del URL de incrustación, cuya dirección base no es idéntica a la que se obtiene al hacer :computer_mouse: `Archivo` :: `Publicar`, sino que se obtiene a partir del URL de edición + sufijo ' /embed'. Este URL está enterrado en el código HTML que devuelve la webapp, pero puede ser obtenido fácilmente. Esto hace que, técnicamemte, el acceso a la presentación (con este URL) siempre será posible para los usuarios con permisos de (al menos) lectura sobre ella, con independencia de su estado de publicación, pero será imposible para los usuarios a los que no se les ha concedido permisos de acceso explícitos sobre ella (los que acceden de manera pública). La página web genererada se devuelve `XFrameOptionsMode.ALLOWALL` para que admita ser incrustada en cualquier sitio web.

```javascript
function doGet(e) {

  // Generar formulario web

  var urlPres = 'https://docs.google.com/presentation/d/' + SlidesApp.getActivePresentation().getId() + '/embed';
  var formularioWeb = HtmlService.createTemplateFromFile('slidesEmbed');
  
  // Rellenar elementos de plantilla
  
  var ajustes = PropertiesService.getDocumentProperties().getProperties();
  var aspecto = 100 * SlidesApp.getActivePresentation().getPageHeight() / SlidesApp.getActivePresentation().getPageWidth();
  var offsetPx = ajustes.eliminarBordes == 'on' ? INSET_BORDES : 0;
  
  formularioWeb.url =  'https://docs.google.com/presentation/d/' + SlidesApp.getActivePresentation().getId() + '/embed';
  formularioWeb.iniciar = ajustes.iniciar == 'on' ? 'true' : 'false';
  formularioWeb.repetir = ajustes.repetir == 'on' ? 'true' : 'false';
  formularioWeb.msAvanzar = (+ajustes.sAvanzar * 1000).toString();
  formularioWeb.msFundido = ajustes.msFundido;
  formularioWeb.msRecargar = (+ajustes.sRecargar * 1000).toString();
  formularioWeb.insetInferior = ajustes.eliminarMenu == 'on' ? (INSET_INFERIOR  + offsetPx).toString() : '0';
  formularioWeb.insetLateral = ajustes.eliminarBandas == 'on' ? (100 * NUMERO_MAGICO / aspecto + offsetPx).toString() : '0';
  formularioWeb.insetSuperior = offsetPx.toString();

  // Para "truco" CSS que hace el iframe responsive
  
  formularioWeb.aspecto = aspecto.toString();
  
  return formularioWeb.evaluate().setTitle(SlidesApp.getActivePresentation().getName()).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}
```




# Licencia
© 2020 Pablo Felip Monferrer ([@pfelipm](https://twitter.com/pfelipm)). Se distribuye bajo licencia GNU GPL v3.
