/**
 * AutoSlides
 * Una plantilla de presentación de Google que permite generar un pase de 
 * diapositivas auto hospedado mediante una webapp que se actualiza automáticamente
 * a intervalos prefijados sin necesidad de recargar de manera manual en el navegador.
 *
 * Copyright (C) Pablo Felip (@pfelipm) · Se distribuye bajo licencia GNU GPL v3.
 *
 * @OnlyCurrentDoc
 */

// Constantes generales del script

var VERSION = 'Versión: 1.0 (febrero 2020)';

var AJUSTES_P = {
  'inicializado' : 'true',
  'sAvanzar' : '3',
  'sRecargar' : '60',
  'msFundido' : '1500',
  'iniciar' : 'on',
  'repetir' : 'on',
  'eliminarMenu' : 'on',
  'eliminarBandas' : 'on',
  'eliminarBordes' : 'off'};

var INSET_INFERIOR = 28; // Altura en px barra con botones inferior en presentación incrustada
var NUMERO_MAGICO = 14.25; // x ancho/alto para obtener el valor en px del recorte lateral que elimina bandas negras
var INSET_BORDES = 2;      // Desplazamiento adicional para eliminar todos los bordes mediante clip-path / inset (CSS) 
  
// Vamos a por faena...

function onOpen() {

  SlidesApp.getUi().createMenu('🔄 AutoSlides')
    .addItem('⚙️ Configurar', 'configurar')
    .addItem('🌐 Obtener URL público', 'publicar')
    .addItem('🔻 Detener publicación', 'despublicar')
    .addSeparator()
    .addItem('💡 Acerca de AutoSlides', 'acercaDe')
    .addToUi();
    
}

// Info del script

function acercaDe() {

  // Presentación del complemento
  var panel = HtmlService.createTemplateFromFile('acercaDe');
  panel.version = VERSION;
  SlidesApp.getUi().showModalDialog(panel.evaluate().setWidth(420).setHeight(375), '💡 ¿Qué es AutoSlides?');
}

// Refrescar gráficos vinculados de HdC

function refrescarGraficosHdc() {
    
  // Versión V8. No se utiliza para seguir ejecutando con Rhino por bug V8 y ScriptApp.GetService().getUrl()
  // https://groups.google.com/d/topic/google-apps-script-community/0snPFcUqt40/discussion
  
  // SlidesApp.getActivePresentation().getSlides().map(diapo => {diapo.getSheetsCharts().map(grafico => {grafico.refresh();});});
  
  SlidesApp.getActivePresentation().getSlides().map(function(diapo) {
    diapo.getSheetsCharts().map(function(grafico) {
      grafico.refresh();});});
  
}

function contarGraficosHdc() {
  
  var numGraficos = 0;
  
  // Idem anterior: Versión V8. No se utiliza para seguir ejecutando con Rhino por bug V8 y ScriptApp.GetService().getUrl()

  // SlidesApp.getActivePresentation().getSlides().map(diapo => {diapo.getSheetsCharts().map(grafico => {numGraficos++});});
  
  SlidesApp.getActivePresentation().getSlides().map(function(diapo)
    {diapo.getSheetsCharts().map(function(grafico) 
      {numGraficos++});});
  
  return numGraficos;

}

function configurar() {

  // Inicializar y / o leer configuración
  
  if (PropertiesService.getDocumentProperties().getProperty('inicializado') != 'true') {
    
    // Establecer ajustes por defecto
    
    PropertiesService.getDocumentProperties().setProperties(AJUSTES_P, true);
    PropertiesService.getDocumentProperties().setProperty('publicado', ' false');

  }
  
  // Plantilla del panel
  
  var panel = HtmlService.createTemplateFromFile('panelLateral');
  
  // Valores iniciales de controles
  
  var ajustes = PropertiesService.getDocumentProperties();
  
  panel.sAvanzar =  ajustes.getProperty('sAvanzar');
  panel.sRecargar = ajustes.getProperty('sRecargar');
  panel.msFundido = ajustes.getProperty('msFundido');
  panel.iniciar =  ajustes.getProperty('iniciar') == 'on' ? 'checked' : '' ;
  panel.repetir =  ajustes.getProperty('repetir') == 'on' ? 'checked' : '' ;
  panel.eliminarMenu = ajustes.getProperty('eliminarMenu')  == 'on' ? 'checked' : '';
  panel.eliminarBandas = ajustes.getProperty('eliminarBandas')  == 'on' ? 'checked' : '';
  panel.eliminarBordes = ajustes.getProperty('eliminarBordes')  == 'on' ? 'checked' : '';
  panel.numGraficos = contarGraficosHdc();
  
  // Construir y desplegar panel de configuración
  
  SlidesApp.getUi().showSidebar(panel.evaluate().setTitle('🔄 AutoSlides: Ajustes de incrustación'));
  
}

function ajustesPorDefecto() {
  
  // Restablecer ajustes por defecto (false para preservar propiedad 'publicado' actual)
  
  PropertiesService.getDocumentProperties().setProperties(AJUSTES_P, false);
  
  return AJUSTES_P;
  
}

function actualizarAjustes(form) {
 
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

function obtenerRevisiones() {
  
  // Devuelve el ID de la última revisión de la presentación actual
  
  var slideId = SlidesApp.getActivePresentation().getId();
  var revisiones = [];
  var token;
  var hayMas = true;
 
  // Iterar hasta alcanzar la última revisión de la presentación
 
  try {
      
    while (hayMas == true) {
      revisiones = Drive.Revisions.list(slideId, {maxResults: 1000, pageToken: token});
      token = revisiones.nextPageToken;
      hayMas = (revisiones.nextPageToken == undefined) ? false : true;
    }
    
    // Publicar última revisión de la presentación
    
    return revisiones.items[revisiones.items.length-1].id;
  } catch(e) {
  
    SlidesApp.getUi().alert('🔄 AutoSlides', '❌ Error al obtener las revisiones de la presentación.\n\n' + e, SlidesApp.getUi().ButtonSet.OK); 
 
  }
}
  

function publicar() {
     
  var slideId = SlidesApp.getActivePresentation().getId();
  var ultimaRevId = obtenerRevisiones();
 
  // Publicar última revisión de la presentación
 
  try {
      
    Drive.Revisions.patch({published: true,
                           publishedOutsideDomain: true,
                           publishAuto: true}, 
                          slideId, ultimaRevId);
    
    PropertiesService.getDocumentProperties().setProperty('publicar', 'true');
        
    if (ScriptApp.getService().isEnabled() == true) { // ==
      
      // La webapp ya ha sido previamente publicada, obtener URL público (¡con V8 devuelve el privado /dev! a 18/02/02)
      
      var urlWebApp = ScriptApp.getService().getUrl();
      var panel = HtmlService.createTemplateFromFile('infoPublicada');
      
      // V8
      // panel.mensaje = `🌐️ URL de la presentación publicada:<br><br><a target="_blank" href="${urlWebApp}">${urlWebApp}</a>`;
      
      panel.mensaje = '🌐️ URL de la presentación publicada:<br><br><a target="_blank" href="' + urlWebApp + '">' + urlWebApp + '</a>';
      SlidesApp.getUi().showModalDialog(panel.evaluate().setWidth(700).setHeight(150), '🔄 AutoSlides');
      
    } else {
      
      // El usuario debe realizar la publicación inicial de la webapp

      var panel = HtmlService.createHtmlOutputFromFile('instruccionesWebApp');
      SlidesApp.getUi().showSidebar(panel.setTitle('🌐 Instrucciones de publicación'));

    }
    
    
  } catch(e) {
   
    SlidesApp.getUi().alert('🔄 AutoSlides', '❌ Error al publicar la presentación.\n\n' + e, SlidesApp.getUi().ButtonSet.OK); 
    
  }

}  


function despublicar() {

  var slideId = SlidesApp.getActivePresentation().getId();
  var ultimaRevId = obtenerRevisiones();
 
  // Desactivar publicación de la última revisión de la presentación
 
  try {
  
    Drive.Revisions.patch({published: false,
                         publishedOutsideDomain: false,
                         publishAuto: false}, 
                         slideId, ultimaRevId);
  
    PropertiesService.getDocumentProperties().setProperty('publicar', 'false');
    SlidesApp.getUi().alert('🔄 AutoSlides', '🔻 La presentación ya no está disponible de manera pública.', SlidesApp.getUi().ButtonSet.OK);
  
  } catch(e) {
   
    SlidesApp.getUi().alert('🔄 AutoSlides', '❌ Error al dejar de publicar la presentación\n\n' + e, SlidesApp.getUi().ButtonSet.OK); 
  
  }
  
}

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