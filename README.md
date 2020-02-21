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

![D9Az53UW4AEAjst](https://user-images.githubusercontent.com/12829262/74961946-42316f00-540f-11ea-9bc3-7047ff6ed239.png)

# ¿Por qué AutoSlides?
Las presentaciones de Google disponen de una función de publicación que facilita su difusión. De este modo pueden enlazarse o incrustarse en medios web con facilidad. No obstante, si se modifican las diapositivas de la presentación es necesario recargar la página que contiene sus versiones publicadas en el navegador para que estos cambios se manifiesten. AutoSlides es capaz de generar un pase de diapositivas auto hospedado, visible utilizando un navegador, que se **refresca automáticamente** a intervalos prefijados sin necesidad de recargar la página web de manera manual en el navegador.

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

Aprecia la diferencia que existe entre la inserción convencional :thumbsdown: y la de AutoSlides :+1:.

![74869376-261ec680-5358-11ea-8f68-f9b842629044](https://user-images.githubusercontent.com/12829262/74886759-5165dd80-5379-11ea-8a62-5f3192c130a9.png)

Por último, si el usuario crea un activador GAS temporal que ejecute a intervalos regulares la función `refrescarGraficosHdc`, que forma parte del código de AutoSlides, conseguiremos que los gráficos de hoja de cálculo vinculados se actualicen también *automágicamente*. Por ejemplo, en la imagen del ejemplo se establece una cadencia de actualización de 5 minutos.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74886825-8114e580-5379-11ea-876f-1f691fb14d85.gif"></p>

¿La cosa queda ya más clara? Pues veamos cómo puedes usar AutoSlides para mejorar la publicación de tus presentaciones, paso a paso.

# Instrucciones de uso
1. Obtén una copia de la **plantilla de AutoSlides** abriendo este enlace :point_right: [AutoSlides # plantilla](https://docs.google.com/presentation/d/1OVA_tBC5QM4vQhJeZzQLag7ktV2vPvWmVfcF46KO1_8/template/preview) :point_left: y a continuación haz clic en `Utilizar plantilla`.

2. Edita tu presentación del modo habitual.
3. Cuando estés listo para publicar tu presentación, haz clic en `🔄 AutoSlides` :: `⚙️ Configurar` para establecer los distintos ajustes que afectarán al modo en que se mostrarán tus diapositivas.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74887855-73ad2a80-537c-11ea-8e90-c500de653000.png"></p>

4. Si AutoSlides detecta que la presentación contiene gráficos de hoja de cálculo vinculados mostrará un mensaje y te facilitará instrucciones para indicarte cómo puedes configurar un activador por tiempo que también los actualice. Este paso es totalmente **opcional**, no tienes por qué utilizar gráficos de hojas de cálculo en tus presentaciones o, incluso si lo haces, configurar un activador para actualizarlos.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74888030-1796d600-537d-11ea-90c1-975c4f1ccf44.png"></p>

5. A continuación, clic en `🔄 AutoSlides` :: `🌐 Obtener URL público` y sigue al pie de la letra las instruciones que aparecerán en el panel lateral. Este procedimiento solo tendrás que completarlo una vez (por cada presentación en la que uses AutoSlides).

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74886891-a99cdf80-5379-11ea-8707-5289c6a81876.png"></p>

6. Finalmente, ejecuta nuevamente `🔄 AutoSlides` :: `🌐 Obtener URL público` y consigue el URL de la versión publicada de tu presentación. Puedes abrirlo directamente en tu navegador, enviarlo por correo eléctronico, difundirlo en plataformas sociales o utilizarlo como origen de incrustación, por ejemplo en un sitio web creado con Google Sites.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74888641-dd2e3880-537e-11ea-9923-e383b54ca195.png"></p>

7. Si en algún momento deseas que tu presentación deje de ser visible públicamente, solo tienes que hacer `🔄 AutoSlides` :: `🔻 Detener publicación`.

# Detalles técnicos
Echemos un mirada bajo el capó de AutoSlides. Si no te interesan este tipo de detalles esto te lo puedes saltar sin remordimientos.

![Diagrama de bloques AutoSlides](https://docs.google.com/drawings/d/e/2PACX-1vQVQyfYdmlQ6ZzOJu149dLcU4YcnoLlpDrzZCQg6nBsIAMTQXuSjrzutHNGV3YwobWN4mWzuUb8iRol/pub?w=1000&h=1000)

AutoSlides es un script GAS que vive dentro de una presentación de Google, facilitada como **plantilla**. El modo más fácil de usarlo es hacerse una copia de esta plantilla y trabajar sobre ella para construir una nueva presentación. Dado que el código de AutoSlides está compuesto por varios archivos, no resulta práctico incluir manualmente todos ellos en una presentación ya existente.

<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74946260-4fdbfa00-53f9-11ea-98b9-213226c7f2f8.png"></p>

La mayor parte del código vive dentro del archivo `Código.gs`. En él se encuentran las **funciones** necesarias para:

- Construir el **menú** de la aplicación (`onOpen`).
- Mostrar **información** sobre AutoScript (función `acercaDe`, que muestra el contenido del archivo HTML  `acercaDe.html`, inyectando como parámetro mediante un scriptlet explícito (*printing scriptlet*) la cadena que identifica la versión del script (`VERSION`). Esto se consigue gracias al servicio de [plantillas HTML](https://developers.google.com/apps-script/guides/html/templates).

```javascript
<p><?= version ?>.</p>
<p>Más información en su <a target="_blank" src="https://github.com/pfelipm/autoslides">Repositorio GitHub</a>.</p>
```

- Contabilizar y actualizar los **gráficos vinculados** de hoja de cálculo (funciones `contarGraficosHdc` y `refrescarGraficosHdc`). No parece haber en la clase GAS `SlidesApp` facilidades para hacer lo mismo con tablas (rangos de celdas) de hoja de cálculo vinculados del mismo modo. Una posible solución, que quizás no siempre será adecuada, consiste en generar a partir de ellos [gráficos de tipo tabla](https://support.google.com/docs/answer/9146787?hl=es) y vincular estos en nuestras presentaciones y vincular estos últimos. Hubiera preferido resolver esto de un modo más compacto usando *funciones flecha*, ya admitidas en Apps Script, pero desgraciadamente me he visto obligado a configurar AutoSlides con el antiguo motor de ejecución *Rhino*  para poder obtener la URL pública de la webapp.

```javascript
function refrescarGraficosHdc() { 

  // Versión V8. No se utiliza para seguir ejecutando con Rhino por bug V8 y ScriptApp.GetService().getUrl()
  // https://groups.google.com/d/topic/google-apps-script-community/0snPFcUqt40/discussion
  // SlidesApp.getActivePresentation().getSlides().map(diapo => {diapo.getSheetsCharts().map(grafico => {grafico.refresh();});});
 
  SlidesApp.getActivePresentation().getSlides().map(function(diapo) {
    diapo.getSheetsCharts().map(function(grafico) {
      grafico.refresh();});});
}
```

- Desplegar el **panel lateral de configuración** de AutoSlides (función `configurar`). Se utiliza `PropertiesService` para inicializar y guardar la configuración de incrustación y el estado de publicación de la presentación. La selección de ajustes se realiza mediante un formulario HTML (`panelLateral.html`) creado con la ayuda de [Materialize](https://materializecss.com/).

  Los valores vigentes de cada ajuste son inyectados nuevamente en los elementos HTML del formulario por medio de scriptlets explícitos. Las secciones CSS (`panelLateral_css.html`) y JavaScript (`panelLateral_js.html`) se insertan en el código HTML también mediante scriptlets explícitos, pero esta vez de tipo forzado (*force-printing scriptlets*). También se usan scriptlets no explícitos (*standard scriptlets*) para mostrar las instrucciones de creación de un activador por tiempo si se detectan gráficos vinculados:
  
```html
<!-- Incluir valores por defecto de controles del formulario usando printing scriptlets -->
<div class="row">
  <div class="input-field col s12">
  <label for="numFil">Avance automático cada (s)</label>
  <input class="validate" type="number" name="sAvanzar" value="<?= sAvanzar ?>" min="1" step="1" id="sAvanzar">
  </div>
 </div>
 ```

```html
<!-- Incluir css usando force-printing scriptlets -->
<?!= HtmlService.createHtmlOutputFromFile('panelLateral_css').getContent(); ?>
 ```

```html
<!-- Incluir js usando force-printing scriptlets -->
<?!= HtmlService.createHtmlOutputFromFile('panelLateral_js').getContent(); ?>
```

```html
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

- **Restablecer los ajustes** por defecto cuando se utiliza el botón correspondiente del panel lateral de configuración (función `ajustesPorDefecto`). No se modifica en este caso el valor de la propiedad `publicar`, que es independiente de los ajustes de publicación.

```javascript
function ajustesPorDefecto() {

  // Invocado desde panelLateral_js
  // Restablecer ajustes por defecto (false para preservar propiedad 'publicar' actual)
  PropertiesService.getDocumentProperties().setProperties(AJUSTES_P, false);
  
  // Devolver a panelLateral_js para que actualice formulario
  return AJUSTES_P; 
}
```

- **Recibir los ajustes** establecidos por el usuario desde el panel lateral de configuración vía la llamada de la API del cliente JavaScript `google.script.run.actualizarAjustes($('#formConfigurar').get(0));` y actualizar las propiedades del documento (función `actualizarAjustes`). A destacar que si el objeto `form` devuelto contiene casillas de verificación que no están activadas **no existen propiedades que las representen** en el objeto recibido del lado del servidor. Una asignación directa tipo `PropertiesService.getDocumentProperties().setProperties(form)` daría lugar a estupendas confusiones dado que la desactivación de una casilla en el formulario no se trasladaría a su representación en la propiedad del documento correspondiente.

```javascript
function actualizarAjustes(form) {

  // Invocado desde panelLateral_js
  // Al devolver form desde cliente, si una casilla de verificación no está marcada,
  // su propiedad (name) en el objeto pasado a servidor no se devuelve (cuidado).
  
  PropertiesService.getDocumentProperties().setProperties({
    'sAvanzar' : form.sAvanzar,
    'sRecargar' : form.sRecargar,
    'msFundido' : form.msFundido,
    'iniciar' : form.iniciar, // 'on' o NULL
    'repetir' : form.repetir, // 'on' o NULL
    'eliminarMenu' : form.eliminarMenu, // 'on' o NULL
    'eliminarBandas' : form.eliminarBandas, // 'on' o NULL
    'eliminarBordes' : form.eliminarBordes // 'on' o NULL
  }, false);
}

```

- Localizar la versión más reciente de la presentación (función `obtenerRevisiones`) para **publicarla** (`publicar`) o **dejar de publicarla** (función `despublicar`). El script depende para ello de la API avanzada de Drive. Si no se ha producido la publicación inicial del script como webapp se mostrará un nuevo panel lateral con instrucciones para el usuario (archivo `instruccionesWebApp.html`). En caso de que se detecte que la webapp ya haya sido desplegada simplemente se mostrará su URL público (archivo `infoPublicada.html`). Todo ello bien encerrado entre bloques `try{} .. catch{}` para cazar posibles errores en tiempo de ejecución, de los que preparando el código estos días me he encontrado alguno que otro, quizás como consecuencia de los [recientes cambios](https://developers.google.com/apps-script/guides/v8-runtime) en la plataforma de Apps Script. Mucho cuidado con el token que señaliza que hay más versiones no devueltas al interrogar a la API de Drive. Del mismo modo que el caso de otras APIs avanzadas (me viene ahora a la memoria la de Classroom), hay que tenerlo en cuenta para no dejarse nada.

```javascript
...
var slideId = SlidesApp.getActivePresentation().getId();
var respuesta;
var token;
var revisiones = [];
var hayMas = true;

// Iterar hasta alcanzar la última revisión de la presentación
try {
  while (hayMas == true) {
    respuesta = Drive.Revisions.list(slideId, {maxResults: 1000, pageToken: token});
    revisiones = revisiones.concat(respuesta.items);
    token = revisiones.nextPageToken;
    hayMas = (token == undefined) ? false : true;
  }
...
```

>La publicación de webapps Apps Script tiene en estos momentos bastantes sutilezas y, por qué no decirlo, aristas, que [la llegada](https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!msg/google-apps-script-community/0snPFcUqt40/lH9Dylk7GAAJ) del motor de ejecución `V8` no ha hecho sino afilar. La cosa da para extenderse de manera específica, así que mejor hablaremos de ello en otra ocasión.

- Generar y devolver al navegador del usuario que accede a la presentación publicada el **URL de la página web** en la que se encuentra incrustada, de acuerdo con las preferencias del usuario (función `doGet`). Aquí encontramos más scriptlets explícitos que parametrizan los ajustes del URL de incrustación, cuya dirección base no es idéntica a la que se obtiene al hacer :computer_mouse: `Archivo` :: `Publicar`, sino que se obtiene a partir del URL de edición + sufijo `/embed`. Este URL está enterrado en el código HTML que devuelve la webapp, pero puede ser obtenido fácilmente. Esto hace que, técnicamente, el acceso a la presentación (con este URL) siempre será posible para los usuarios con permisos de (al menos) lectura sobre ella, con independencia de su estado de publicación, pero será imposible para aquellos a los que no se les haya concedido permisos de acceso explícitos sobre ella (los que la visualizan de manera pública). La página web genererada se devuelve con `XFrameOptionsMode.ALLOWALL` para que admita ser incrustada en cualquier sitio web.

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
Dejando de lado las distintas funciones que forman parte del código de AutoSlides, veamos ahora qué hay en el interior de `slidesEmbed.html`, el archivo HTML donde realmente se realiza la incrustación de la presentación. Es corto pero tiene algún que otro detalle interesante. Vamos primero el código de incrustación:

```html
 <div id="marco1"
      style="display: block;
             position: relative;
             padding-bottom: <?= aspecto ?>%;
             height: 0;
             overflow: hidden;
             border: none;">
                         
   <iframe id="marco2"
           style="transition: opacity 1s;
                  position:absolute;
                  width: 100%; height: 100%;
                  clip-path: inset(<?= insetSuperior ?>px <?= insetLateral ?>px <?= insetInferior ?>px <?= insetLateral ?>px)";
           src="<?= url ?>
                ?start=<?= iniciar ?>
                &loop=<?= repetir ?>
                &delayms=<?= msAvanzar ?>"
           frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"> 
   </iframe>
 
</div>
```

Intervienen aquí numerosos scriptlets de parametrización, que son instanciados, como hemos visto, en la función `doGet`:
- `<?= aspecto ?>`: Aparece en el bloque `DIV` exterior. Se emplea como relleno inferior de la capa para conseguir una visualización adaptada al tamaño de la ventana (*responsive*) con independencia de la relación de aspecto de la presentación. Para que esto funcione es necesario que el `<iframe>` interior tenga un posicionamiento de tipo absoluto.
- `<?= insetSuperior ?>`, `<?= insetLateral ?>`, `<?= insetInferior ?>`: Se utilizan para recortar las bandas laterales, la barra inferior y, en su caso, los bordes del marco incrustado empleando la propiedad CSS `clip-path`.
- `<?= url ?>`: El URL de la versión publicada de la presentación.
- `<?= iniciar ?>`, `<?= repetir ?>`: Controlan si la presentación debe comenzar a reproducirse automáticamente al cargar y si se repite tras la proyección de la última diapositiva.
- `<?= msAvanzar ?>`: Velocidad de avance de diapositiva, en milisegundos.

Esto resuelve la incrustación parametrizada, solo falta ahora que el marco interior (`marco2`) se recargue automáticamente de acuerdo con el intervalo establecido por el usuario. Esto se consigue con este sencilla función JavaScript, que cambia su atributo `src` periódicamente de acuerdo con el parámetro `<?= msRecargar ?>` asociado a una función invocada mediante `setInterval`.

```javascript
  <script>
  
    setInterval(function(){
      
      document.getElementById("marco2").style.opacity = 0;
      
      sleep(1000).then(() => {document.getElementById('marco2').src="<?= url ?>?start=<?= iniciar ?>&loop=<?= repetir ?>&delayms=<?= msAvanzar ?>";});
      sleep(<?= msFundido ?>).then(() => {document.getElementById("marco2").style.opacity = 1;});
           
    }, <?= msRecargar ?>);
    
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
  </script>
```
Para que la recarga del contenido del marco interior (con la presentación) sea suave se juega con su propiedad `opacity`, sobre la que se ha establecido previamente una transición de 1 segundo. Además, gracias a una [promesa JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise), se introduce un retardo de `<?= msFundido ?>` milisengudos antes de volver a hacer visible la presentación.

Finalmente, todo este bloque que resuelve la incrustación y refresco de la presentación está gobernado por un scriptlet no explícito que vigila el valor de la propiedad del documento `publicar`:

```html
<body> 
  
  <!-- Mostrar presentación incrustada si publicación activada -->

  <? if (PropertiesService.getDocumentProperties().getProperty('publicar') == 'true') { ?>

    <!-- Aquí va la parte que muestra / refresca la presentación -->
    ...

  <? } else {?>

    <h1>La presentación no está disponible</h1>

  <? } ?>
  
</body>
```

Recordemos que los scriptlets son un poderoso mecanismo para generar código HTML dinámico. Pero este *dinamismo* se limita al momento en que la plantilla HTML que los contiene es evaluada con el método `.evaluate()` del servicio `Html` de Apps Script, justo antes de ser enviada al navegador del usuario. Si se modifican los ajustes de AutoSlides será necesario, ahora sí, recargar manualmente la página servida por la webapp para que tengan efecto.

No quiero acabar sin comentar 2 detalles adicionales:
- Es la primera vez que incluyo imágenes como elementos informativos o meramente decorativos en un desarrollo GAS. Resulta realmente práctico embeber estas imágenes en el código HTML del proyecto. Para ello hay que asignarle al atributo `src` del tag `<IMG>` una cadena con el prefijo `data:image/{tipo};base64` seguida del contenido binario de la imagen codificado en Base64. Para ello puedes utilizar cualquier conversor en línea, [este](https://www.base64-image.de/) por ejemplo.

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa...">
```
<p align="center"><img src="https://user-images.githubusercontent.com/12829262/74963641-5d51ae00-5412-11ea-971e-520562d85089.png")</p>

- Las webapps GAS admiten en estos momentos únicamente **30 accesos concurrentes** (bueno, [realmente 29](https://stackoverflow.com/a/50033976)). ¿Quiere esto decir que una presentación publicada con AutoSlides solo puede aparecer en 29 navegadores en un instante dado? En absoluto. Esta limitación de acceso únicamente afecta al momento en que la webapp recibe una petición y construye y devuelve la página web. Una vez el código HTML + JavaScript se está ejecutando en el navegador del usuario, deja de contabilizar como un acceso dado que a partir de ahí es código absolutamente estático que no conecta en ningún momento con las funciones GAS en el servidor. En cualquier caso, el escenario de uso principal de AutoSlides es la creación de paneles informativos desatentidos en espacios reales, por lo que entiendo que esta limitación es aún menos relevante.

# Licencia
© 2020 Pablo Felip Monferrer ([@pfelipm](https://twitter.com/pfelipm)). Se distribuye bajo licencia GNU GPL v3.
