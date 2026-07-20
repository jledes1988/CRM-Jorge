// CRM-JORGE - Logica de la aplicacion
// Separada de index.html para facilitar el mantenimiento.
// Subir junto con index.html y estilos.css

// Version de la app: actualizar en CADA entrega para poder verificar
// que version tiene cargada cada dispositivo (login y Config > Debug)
var VERSION='3.8 - 20/07/2026';

var ET=['Nuevo Prospecto','Contactado','Propuesta Enviada','Negociacion','Cliente Activo'];
var SA=['No Le Interesa','Perdido'];
var EC={'Nuevo Prospecto':'#fb923c','Contactado':'#fbbf24','Propuesta Enviada':'#a78bfa','Negociacion':'#22d3ee','Cliente Activo':'#4ade80','No Le Interesa':'#f87171','Perdido':'#f87171'};
var MD={'Nuevo Prospecto':'Hola! Soy de Sei Tu Helados, pase por tu local y me gustaria contarte nuestra propuesta. Tenes un minuto?','Contactado':'Hola! Te escribo para coordinar una visita y mostrarte la propuesta de Sei Tu. Que dia te viene bien?','Propuesta Enviada':'Hola! Pudiste ver la propuesta? Queda alguna duda que pueda responder?','Negociacion':'Hola! Como venimos con la propuesta? Si necesitas ajustar algo avisame.','Cliente Activo':'Hola! Como va la venta? Aviso si hay novedades o promos.','No Le Interesa':'Gracias por tu tiempo! Si cambia la situacion quedo disponible.','Perdido':'Hola! Hace tiempo no hablamos. Segui interesado en Sei Tu?'};
var ARG_PROV=['Buenos Aires','Catamarca','Chaco','Chubut','Cordoba','Corrientes','Entre Rios','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquen','Rio Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe','Santiago del Estero','Tierra del Fuego','Tucuman'];
var ARG_CIU={
  'Buenos Aires':['Buenos Aires (CABA)','La Plata','Mar del Plata','Bah\u00eda Blanca','Quilmes','La Matanza','Lomas de Zamora','Mor\u00f3n','San Isidro','Tigre','Pilar','Moreno','San Fernando','Lanús','Avellaneda','Berazategui','Florencio Varela','Tres de Febrero','Merlo','Ezeiza','Tandil','Pergamino','Zárate','Campana','Luján','Chivilcoy','Olavarría','San Nicolás'],
  'Cordoba':['Córdoba Capital','Río Cuarto','Villa María','San Francisco','Villa Carlos Paz','Alta Gracia','Jesús María','Río Tercero','Bell Ville','La Calera','Marcos Juárez','Cruz del Eje','Villa Dolores','Arroyito','Oliva','Monte Cristo','Unquillo','Malagueño','Colonia Caroya','Las Varillas','Leones','General Cabrera','La Carlota','Hernando','Cosquín','Capilla del Monte','Villa Nueva','Almafuerte','Dean Funes','Villa Allende','Río Ceballos','Mendiolaza','Saldán','Salsipuedes','Agua de Oro','La Granja','Estación Juárez Celman','Toledo','Villa del Rosario','Laguna Larga','Pilar','Río Segundo','Río Primero','Villa General Belgrano','Santa Rosa de Calamuchita','Embalse','La Falda','Valle Hermoso','Huerta Grande','Villa Giardino','La Cumbre','Tanti','Bialet Massé','Santa María de Punilla','Icho Cruz','Mina Clavero','Villa Cura Brochero','General Deheza','Laboulaye','Corral de Bustos','Morteros','Brinkmann','Devoto','Freyre','Balnearia','Villa del Totoral','Sinsacate'],
  'Santa Fe':['Rosario','Santa Fe','Rafaela','Villa Constitución','San Lorenzo','Venado Tuerto','Reconquista','Esperanza','Casilda','Gálvez','Ceres','Las Rosas','Firmat','Sunchales','Cañada de Gómez'],
  'Mendoza':['Mendoza','San Rafael','Godoy Cruz','Guaymallén','Las Heras','Maipú','Luján de Cuyo','Junín','Rivadavia','Tunuyán','Malargüe'],
  'Tucuman':['San Miguel de Tucumán','Yerba Buena','Tafí Viejo','Banda del Río Salí','Alderetes','Concepción','Monteros','Aguilares'],
  'Salta':['Salta','General Güemes','Tartagal','Orán','Cafayate','Rosario de la Frontera'],
  'Entre Rios':['Paraná','Concordia','Gualeguaychú','Concepción del Uruguay','Gualeguay','Villaguay'],
  'Corrientes':['Corrientes','Goya','Paso de los Libres','Mercedes','Curuzú Cuatiá','Santo Tomé'],
  'Misiones':['Posadas','Oberá','Eldorado','Puerto Iguazú','Aristóbulo del Valle'],
  'Chaco':['Resistencia','Barranqueras','Villa Ángela','Roque Sáenz Peña'],
  'Santiago del Estero':['Santiago del Estero','La Banda','Termas de Río Hondo','Añatuya','Frías'],
  'San Juan':['San Juan','Rivadavia','Chimbas','Rawson','Pocito','Caucete'],
  'Jujuy':['San Salvador de Jujuy','Palpalá','Perico','Libertador Gral San Martín'],
  'Rio Negro':['Viedma','Bariloche','General Roca','Cipolletti','Allen','El Bolsón'],
  'Neuquen':['Neuquén','Cutral-Có','Zapala','Centenario','San Martín de los Andes'],
  'La Pampa':['Santa Rosa','General Pico','Toay','Eduardo Castex'],
  'Chubut':['Comodoro Rivadavia','Rawson','Trelew','Puerto Madryn','Esquel'],
  'San Luis':['San Luis','Villa Mercedes','Merlo'],
  'Catamarca':['San Fernando del Valle de Catamarca','Tinogasta','Andalgalá'],
  'La Rioja':['La Rioja','Chilecito','Aimogasta'],
  'Formosa':['Formosa','Clorinda','Pirané'],
  'Santa Cruz':['Río Gallegos','Caleta Olivia','Pico Truncado'],
  'Tierra del Fuego':['Ushuaia','Río Grande','Tolhuin']
};
var ARG_BARRIOS=['Alberdi','Alta Cordoba','Altamira','Altos de la Quintas','Argüello','Barra de Argüello','Bella Vista','Bimaco','Bo.13 de Diciembre','Bo.Ameghino','Bo.Calasanz Norte','Bo.Calasanz Sur','Bo.Centro','Bo.Cerro Chico','Bo.Cofico','Bo.Colinas de Velez Sarsfield','Bo.Don Bosco','Bo.General Paz','Bo.Jardin Espinosa','Bo.Jardin Hipico','Bo.Los Granados','Bo.Maipu','Bo.Muller','Bo.Naciones Unidas','Bo.Nueva Córdoba','Bo.Observatorio','Bo.Primero de Mayo','Bo.Residencial America','Bo.San Ignacio','Bo.San Lorenzo','Bo.San Vicente','Bo.Urca','Bo.Vallescondido','Bo.Velez Sarsfield','Bo.Villa Azalais','Bo.Villa Cornu','Bo.Villa del Parque','Bo.Villa Eucaristica','Bo.Villa Paez','Bo.Villa Progreso','Bo.Villa San Martin','Bo.Yapeyú','Casas Brujas','Centro','Cerro de las Rosas','Ciudad de los Cuartetos','Cofico','Colinas de Villa Allende','Country El Bosque','Country Los Cedros','Country Los Manantiales','Country Villa Allende','Estacion Juarez Celman','Ferreyra','General Bustos','General Fotheringham','General Paz','Guiñazú','Ituzaingo','Jardin','Jose Ignacio Diaz','Juniors','La Calera','La Floresta','Las Palmas','Lomas del Chateau','Los Bulevares','Los Cedros','Los Chasquis','Los Paraísos','Las Rosas','Manantiales','Marqués de Sobremonte','Mendiolaza','Miguel Cerro','Monte Cristo','Muller','Nicolas Avellaneda','Nuevo Cordoba','Palermo','Parque Capital','Parque Costanero','Parque Liceo','Parque San Martin','Parque Velez Sarsfield','Paso de los Andes','Patria Grande','Patricios','Pinar de Atenas','Pueyrredon','Quebrada Las Rosas','Quintas del Este','Quintas del Norte','Quintas del Sur','Ricardo Rojas','Rivadavia','Sagrada Familia','San Ignacio','San Juan Bautista','San Martin','San Roque','Santa Isabel','Santa Rita','Villa Acacias','Villa Allende','Villa Belgrano','Villa Bustos','Villa Cabrera','Villa Centenario','Villa Cornú','Villa del Prado','Villa Dolores','Villa Eucaristica','Villa Flores','Villa Fortabat','Villa Italia','Villa La Florida','Villa Libertad','Villa Maipú','Villa Martelli','Villa Páez','Villa Parque','Villa Poeta Lugones','Villa Progreso','Villa Rivera Indarte','Villa Rivadavia','Villa Sarmiento','Villa Sol','Villa Urquiza','Villa Warcalde','Yapeyú','Arguello','Colinas de Villa Allende'];

var CFG={msgPedido:'Hola {nombre}! Te escribo de parte de Sei Tu Helados. Nos podés pasar el pedido de {negocio}? Gracias!',barrios:['Nueva Cordoba','Cofico','Alta Cordoba','Alberdi','General Paz','Cerro de las Rosas','Urca','Villa Belgrano','Centro','Otro'],tipos:['Kiosco','Drugstore','Despensa','Almacen','Autoservicio','Supermercado','Minimercado','Mayorista','Bar','Restaurante','Parrilla','Cafeteria','Heladeria','Panaderia','Confiteria','Rotiseria','Estacion de servicio','Club','Camping','Hotel','Hostel','Complejo turistico','Balneario','Distribuidor','Farmacia','Otro'],marcas:['Frare','Bambi','Ugarte','Propio','Otro'],razones:['Sin plata','Freezer lleno','Freezer roto','Sin tiempo','Sin interes','Precio','Otro'],tiposProducto:['Helados','Panificacion','Fiambres y quesos','Bebidas','Congelados','Almacen','Golosinas','Lacteos','Otros'],msgs:Object.assign({},MD)};
var D={user:null,usrs:[{id:1,n:'JL',u:'jl',p:'seitu2026',r:'admin',activo:true,creado:'2026-06-01',ua:''},{id:2,n:'Jorge',u:'jorge',p:'seitu2026',r:'vendedor',activo:true,creado:'2026-06-01',ua:''},{id:3,n:'Chamu',u:'chamu',p:'seitu2026',r:'vendedor',activo:true,creado:'2026-06-01',ua:''},{id:4,n:'Pablo',u:'pablo',p:'seitu2026',r:'vendedor',activo:true,creado:'2026-06-01',ua:''}],cli:[],vis:[],com:[],gira:[],log:[],cfg:JSON.parse(JSON.stringify(CFG))};

// ════════════════════════════════════════════════════════════════════
// FIREBASE / FIRESTORE - FUENTE UNICA DE DATOS EN TIEMPO REAL
// ════════════════════════════════════════════════════════════════════
var firebaseConfig={
  apiKey:"AIzaSyDDZ2oRrdK2ZtnF0usQ-UT2-jivv5CbkVU",
  authDomain:"crm-jorge-63a40.firebaseapp.com",
  projectId:"crm-jorge-63a40",
  storageBucket:"crm-jorge-63a40.firebasestorage.app",
  messagingSenderId:"803130355928",
  appId:"1:803130355928:web:e5c2743eb2c6c961b6e7ad"
};
var fsDB=null; // se inicializa en window.load cuando los CDN están cargados

var FS_READY=false;          // true cuando los 7 listeners ya bajaron al menos una vez
var DEBUG_LOG=[];            // ultimos eventos tecnicos (errores, escrituras) para el Modo Debug del admin
var DEBUG_LASTSYNC={contactos:null,visitas:null,comodatos:null,gira:null,log:null,usuarios:null,config:null};
function debugLog(tipo,msg){
  DEBUG_LOG.unshift({ts:new Date().toISOString(),tipo:tipo,msg:msg});
  if(DEBUG_LOG.length>50)DEBUG_LOG=DEBUG_LOG.slice(0,50);
}
var FS_LOADED_COUNT=0;
var FS_COLLECTIONS=['contactos','visitas','comodatos','gira','log','usuarios','config'];

function fsBootMsg(t){var e=document.getElementById('sBootMsg');if(e)e.textContent=t;}

function fsOnFirstLoad(){
  FS_LOADED_COUNT++;
  if(FS_LOADED_COUNT>=FS_COLLECTIONS.length&&!FS_READY){
    FS_READY=true;
    fsArrancarApp();
  }
}

// Convierte snapshot de coleccion en array, usando doc.id como id del registro
function fsSnapToArr(snap){
  var out=[];
  snap.forEach(function(doc){var d=doc.data();d.id=doc.id;out.push(d);});
  return out;
}

function fsSetupListeners(){
  fsBootMsg('Conectando...');

  // TIMEOUT DE SEGURIDAD: si en 8 segundos no cargaron todos los listeners,
  // arrancar igual con los datos que haya (puede ser conexion lenta o error)
  var bootTimeout=setTimeout(function(){
    if(!FS_READY){
      debugLog('warn','Timeout de arranque - iniciando con datos parciales');
      FS_READY=true;
      fsArrancarApp();
    }
  },8000);

  // Wrapper que SIEMPRE llama fsOnFirstLoad, incluso con error
  function safeSnap(colName,onSuccess,onError){
    fsDB.collection(colName).onSnapshot(
      function(snap){
        try{onSuccess(snap);}catch(e){debugLog('error',colName+' parse: '+e.message);}
        DEBUG_LASTSYNC[colName]=new Date().toISOString();
        fsOnFirstLoad();
      },
      function(err){
        debugLog('error',colName+' listener: '+err.message);
        fsOnFirstLoad(); // ← CRÍTICO: llamar igual para no bloquear el arranque
      }
    );
  }

  safeSnap('contactos',function(snap){
    D.cli=fsSnapToArr(snap);
    normalizarDatos();
    if(FS_READY)refrescarVistaActual();
  });

  safeSnap('visitas',function(snap){
    D.vis=fsSnapToArr(snap);
    if(FS_READY)refrescarVistaActual();
  });

  safeSnap('comodatos',function(snap){
    D.com=fsSnapToArr(snap);
    if(FS_READY)refrescarVistaActual();
  });

  safeSnap('gira',function(snap){
    D.gira=fsSnapToArr(snap);
    if(FS_READY)refrescarVistaActual();
  });

  safeSnap('log',function(snap){
    D.log=fsSnapToArr(snap).sort(function(a,b){return(a.ts||'').localeCompare(b.ts||'');});
  });

  var USUARIOS_DEFAULT=[
    {id:1,n:'JL',u:'jl',p:'seitu2026',r:'admin',activo:true,creado:'2026-06-01',ua:''},
    {id:2,n:'Jorge',u:'jorge',p:'seitu2026',r:'vendedor',activo:true,creado:'2026-06-01',ua:''},
    {id:3,n:'Chamu',u:'chamu',p:'seitu2026',r:'vendedor',activo:true,creado:'2026-06-01',ua:''},
    {id:4,n:'Pablo',u:'pablo',p:'seitu2026',r:'vendedor',activo:true,creado:'2026-06-01',ua:''}
  ];
  fsDB.collection('usuarios').onSnapshot(function(snap){
    var arr=fsSnapToArr(snap);
    // Reparar usuarios faltantes (cubre tanto coleccion vacia como parcialmente poblada,
    // que es justo lo que paso: el primer vendedor que logueo creo SOLO su propio documento
    // y el listener pisaba D.usrs entero, haciendo desaparecer a JL y al resto)
    var faltantes=USUARIOS_DEFAULT.filter(function(def){return !arr.some(function(a){return a.u===def.u;});});
    if(faltantes.length){
      var batch=fsDB.batch();
      faltantes.forEach(function(u){batch.set(fsDB.collection('usuarios').doc(String(u.id)),u);});
      batch.commit().catch(function(e){console.error('reparar usuarios',e);});
      // No hace falta esperar: el propio onSnapshot se va a volver a disparar solo
      // cuando el batch se confirme, y entonces arr ya va a venir completo.
      if(!arr.length){fsOnFirstLoad();return;} // primera carga sin nada todavia: esperar la proxima vuelta
    }
    if(arr.length){D.usrs=arr.map(function(u){u.id=isNaN(u.id)?u.id:Number(u.id);return u;});}
    fsOnFirstLoad();
    // Si el usuario logueado fue desactivado o eliminado por el admin, cerrar sesion en el acto
    if(D.user&&FS_READY){
      var me=D.usrs.find(function(x){return x.u===D.user.u;});
      if(!me){toast('Tu usuario fue eliminado','err');doLogout();}
      else if(me.activo===false){toast('Tu usuario fue desactivado','err');doLogout();}
      else{D.user=me;}
    }
    DEBUG_LASTSYNC.usuarios=new Date().toISOString();
  },function(err){debugLog('error','usuarios: '+err.message);});

  fsDB.collection('config').doc('main').onSnapshot(function(doc){
    if(doc.exists){
      var data=doc.data();
      Object.keys(data).forEach(function(k){D.cfg[k]=data[k];});
    } else {
      // Primera vez: no existe el doc de config, lo creamos con los valores por defecto
      fsDB.collection('config').doc('main').set(CFG).catch(function(e){console.error(e);});
    }
    DEBUG_LASTSYNC.config=new Date().toISOString();
    fsOnFirstLoad();
  },function(err){debugLog('error','config: '+err.message);});
}

function fsArrancarApp(){
  if(typeof bootTimeout!=='undefined')clearTimeout(bootTimeout); // limpiar timeout de seguridad
  document.getElementById('sBoot').classList.remove('on');
  var ses=lg('jses',null);
  if(ses){
    var fresh=D.usrs.find(function(u){return u.u===ses.u;});
    if(!fresh||fresh.activo===false){
      // El usuario fue eliminado o desactivado desde otro dispositivo: cerrar sesion
      ls('jses',null);
      document.getElementById('sLogin').classList.add('on');
      return;
    }
    D.user=fresh;
    startApp();
  } else {
    document.getElementById('sLogin').classList.add('on');
  }
}

// Refresca la pantalla que esté visible en este momento (vendedor o admin)
function refrescarVistaActual(){
  if(!D.user)return;
  if(D.user.r==='admin'){
    var activeId=null;
    ['sGD','sGC','sGE','sGV','sGCo','sGI','sGCfg'].forEach(function(id){
      var el=document.getElementById(id);if(el&&el.classList.contains('on'))activeId=id;
    });
    var map={sGD:renderGD,sGC:renderGC,sGE:renderGE,sGV:renderGV,sGCo:renderGCo,sGI:renderGI,sGCfg:renderGCfg};
    if(activeId&&map[activeId])map[activeId]();
  } else {
    var activeIdV=null;
    ['sVH','sVC','sVE','sVG'].forEach(function(id){
      var el=document.getElementById(id);if(el&&el.classList.contains('on'))activeIdV=id;
    });
    var mapV={sVH:renderVH,sVC:renderVC,sVE:renderVE,sVG:renderVG};
    if(activeIdV&&mapV[activeIdV])mapV[activeIdV]();
  }
}

// ── PERFIL GERENTE: SOLO LECTURA ──────────────────────────────────────
// Ve todos los datos pero no puede modificar nada. La guarda esta en el punto
// central de escritura: aunque algun boton quede visible, el dato nunca se guarda.
function soloLectura(){
  if(D.user&&D.user.r==='gerente'){
    toast('Perfil Gerente: solo lectura, no se guardan cambios','err');
    return true;
  }
  return false;
}

// ── ESCRITURAS A FIRESTORE (cada una devuelve una promesa real, a diferencia del no-cors anterior) ──
// MODO LOCAL: si fsDB es null (el CDN de Firebase no cargo), las escrituras NO deben crashear.
// Se guarda todo el estado en localStorage y se avisa que quedo pendiente de sincronizar.
function fsGuardaLocal(){
  ls('jc',D.cli);ls('jv',D.vis);ls('jo',D.com);ls('jg',D.gira);ls('jf',D.cfg);ls('ju',D.usrs);
  setSyncDot('error');
  toast('Sin conexion a la base: guardado solo en este dispositivo','err');
  return Promise.resolve();
}
function fsSetContacto(c){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  setSyncDot('pending');
  return fsDB.collection('contactos').doc(c.id).set(c)
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');debugLog('error','contactos write: '+e.message);toast('No se pudo guardar: '+e.message,'err');});
}
function fsDelContacto(id){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  setSyncDot('pending');
  return fsDB.collection('contactos').doc(id).delete()
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');debugLog('error','contactos delete: '+e.message);toast('Error al eliminar','err');});
}
function fsSetVisita(v){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  setSyncDot('pending');
  return fsDB.collection('visitas').doc(v.id).set(v)
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');debugLog('error','visitas write: '+e.message);toast('No se pudo guardar la visita','err');});
}
function fsSetComodato(co){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  setSyncDot('pending');
  return fsDB.collection('comodatos').doc(co.id).set(co)
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');debugLog('error','comodatos write: '+e.message);toast('No se pudo guardar el comodato','err');});
}
function fsDelComodato(id){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  setSyncDot('pending');
  return fsDB.collection('comodatos').doc(id).delete()
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');});
}
function fsSetGira(g){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  // id sintetico: cid + fecha (un contacto solo puede estar una vez por dia)
  var gid=g.cid+'_'+g.fecha;
  setSyncDot('pending');
  return fsDB.collection('gira').doc(gid).set(g)
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');});
}
function fsDelGira(cid,fecha){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  var gid=cid+'_'+fecha;
  setSyncDot('pending');
  return fsDB.collection('gira').doc(gid).delete()
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');});
}
function fsAddLog(entry){
  if(!fsDB){ls('jl_log',D.log);return Promise.resolve();}
  return fsDB.collection('log').doc(entry.id).set(entry).catch(function(e){console.error('log',e);});
}
function fsSetUsuario(u){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  setSyncDot('pending');
  return fsDB.collection('usuarios').doc(String(u.id)).set(u)
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');debugLog('error','usuarios write: '+e.message);toast('No se pudo guardar el usuario','err');});
}
function fsSetConfig(cfg){
  if(soloLectura())return Promise.resolve();
  if(!fsDB)return fsGuardaLocal();
  setSyncDot('pending');
  return fsDB.collection('config').doc('main').set(cfg,{merge:true})
    .then(function(){setSyncDot('ok');})
    .catch(function(e){setSyncDot('error');debugLog('error','config write: '+e.message);toast('No se pudo guardar la configuracion','err');});
}

// ── MIGRACION UNICA: subir datos que hoy estan solo en localStorage (de pruebas previas) ──

// ════════════════════════════════════════════════════════════════════

// UTILS
function uid(){return Date.now()+Math.random().toString(36).slice(2,5);}
function ls(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function lg(k,d){try{var v=localStorage.getItem(k);return v!=null?JSON.parse(v):d;}catch(e){return d;}}
function fmt(d){if(!d||d==='')return '--';try{var p=String(d).split('-');if(p.length!==3)return d;return parseInt(p[2])+'/'+parseInt(p[1])+'/'+p[0].slice(2);}catch(e){return d;}}
function dias(d){if(!d)return null;return Math.floor((Date.now()-new Date(d+'T12:00:00'))/86400000);}
// ── Deteccion de inaccion ────────────────────────────────────────────
// Dias de tolerancia sin gestion antes de considerar un contacto "inactivo", por etapa
var UMBRAL_INACCION={'Nuevo Prospecto':5,'Contactado':7,'Propuesta Enviada':7,'Negociacion':7,'Cliente Activo':30};
function umbralEtapa(eta){return UMBRAL_INACCION[eta]||14;}
// Sugiere una fecha de proxima visita segun la etapa, para que ningun contacto quede sin seguimiento agendado.
// Si cae sabado o domingo se corre al lunes, porque la Gira solo muestra Lunes a Viernes.
function sugerirProxima(eta){
  var dd={'Nuevo Prospecto':3,'Contactado':5,'Propuesta Enviada':5,'Negociacion':5,'Cliente Activo':21};
  var n=dd[eta]||7;
  var d=new Date();d.setDate(d.getDate()+n);
  if(d.getDay()===6)d.setDate(d.getDate()+2);      // sabado -> lunes
  else if(d.getDay()===0)d.setDate(d.getDate()+1); // domingo -> lunes
  return fechaLocal(d);
}
// Si una fecha (elegida a mano o sugerida) cae sabado/domingo, correrla al lunes.
// La Gira solo muestra Lun-Vie: una entrada en finde quedaria INVISIBLE en la grilla.
function ajustarDiaHabil(f){
  if(!f)return f;
  var d=new Date(f+'T12:00:00');
  if(d.getDay()===6){d.setDate(d.getDate()+2);toast('La fecha caia sabado: se agendo para el lunes','ok');return fechaLocal(d);}
  if(d.getDay()===0){d.setDate(d.getDate()+1);toast('La fecha caia domingo: se agendo para el lunes','ok');return fechaLocal(d);}
  return f;
}
// Dias sin gestion de un contacto, con el mismo criterio en toda la app:
// referencia = ultima visita, o si nunca fue visitado, la fecha de ingreso.
function diasSinGestion(c){
  var ref=c.ul||c.ing;
  return ref?dias(ref):null;
}
// Devuelve la lista de contactos del vendedor en inaccion, ordenada de mas a menos urgente
function calcInaccion(){
  var mc=misContactos();
  var out=[];
  mc.forEach(function(c){
    var eta=c.etapaEmbudo||(c.esP?'Nuevo Prospecto':'Cliente Activo');
    if(eta==='No Le Interesa'||eta==='Perdido')return;
    var d=diasSinGestion(c);
    var umb=umbralEtapa(eta);
    if(d===null||d>=umb)out.push({c:c,dias:d,etapa:eta,umbral:umb});
  });
  out.sort(function(a,b){return(b.dias===null?9999:b.dias)-(a.dias===null?9999:a.dias);});
  return out;
}
function es(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function h2r(h){return parseInt(h.slice(1,3),16)+','+parseInt(h.slice(3,5),16)+','+parseInt(h.slice(5,7),16);}
function toast(m,t){var el=document.getElementById('toast');el.textContent=m;el.className='on';el.style.background=t==='err'?'rgba(248,113,113,.2)':t==='ok'?'rgba(74,222,128,.2)':'rgba(34,211,238,.15)';el.style.color=t==='err'?'var(--red)':t==='ok'?'var(--green)':'var(--cyan)';setTimeout(function(){el.className='';},2500);}
// Exporta filas (array de arrays, primera fila = encabezados) a un .xlsx real.
// Reemplaza el CSV manual: el CSV con comas quedaba todo amontonado en Excel
// configurado en español/Argentina (que usa ; como separador de listas).
function descargarXLSX(filas,nombreArchivo){
  try{
    if(typeof XLSX==='undefined')throw new Error('XLSX no cargó');
    var ws=XLSX.utils.aoa_to_sheet(filas);
    // Autoajustar ancho de columnas segun el contenido mas largo de cada una
    var anchos=filas[0].map(function(_,ci){
      var max=10;
      filas.forEach(function(fila){var v=fila[ci];var l=v==null?0:String(v).length;if(l>max)max=l;});
      return {wch:Math.min(max+2,45)};
    });
    ws['!cols']=anchos;
    var wb=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Datos');
    XLSX.writeFile(wb,nombreArchivo.replace(/\.csv$/i,'')+'.xlsx');
  }catch(e){
    // Fallback: si la libreria no cargo (sin conexion), exportar CSV con ; como separador
    var rows=filas.map(function(fila){return fila.map(function(f){return '"'+String(f==null?'':f).replace(/"/g,'""')+'"';}).join(';');});
    var blob=new Blob(['\ufeff'+rows.join('\n')],{type:'text/csv;charset=utf-8;'});
    var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download=nombreArchivo.replace(/\.xlsx$/i,'')+'.csv';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
  }
}
// Normaliza campos por si llegan registros viejos/incompletos desde Firestore
function normalizarDatos(){
  D.cli.forEach(function(c){if(!c.etapaEmbudo||c.etapaEmbudo==='')c.etapaEmbudo=c.esP?'Nuevo Prospecto':'Cliente Activo';if(!c.uv)c.uv='';if(!c.ex)c.ex={};if(c.deu===undefined)c.deu=false;if(!c.ing)c.ing='';if(!c.vend)c.vend='';if(!c.prods)c.prods=[];if(!c.prov)c.prov='';if(!c.ciu)c.ciu='';if(c.agendado===undefined)c.agendado=false;if(!c.tel2)c.tel2='';if(!c.email)c.email='';});
  D.usrs.forEach(function(u){if(u.activo===undefined)u.activo=true;if(!u.creado)u.creado='';if(!u.ua)u.ua='';});
  if(!D.cfg.msgPedido)D.cfg.msgPedido='Hola {nombre}! Te escribo de parte de Sei Tu Helados. Nos podés pasar el pedido de {negocio}? Gracias!';
  if(!D.cfg.msgLinks)D.cfg.msgLinks={};
}
function cFoto(file,cb){var r=new FileReader();r.onload=function(){var i=new Image();i.onload=function(){var cv=document.createElement('canvas');var mx=900;var rt=Math.min(mx/i.width,mx/i.height,1);cv.width=Math.round(i.width*rt);cv.height=Math.round(i.height*rt);cv.getContext('2d').drawImage(i,0,0,cv.width,cv.height);cb(cv.toDataURL('image/jpeg',.72));};i.src=r.result;};r.readAsDataURL(file);}
// CHIPS
function ch(id,lbl,grp,multi,cls){return '<span class="ch'+(cls?' '+cls:'')+'" data-id="'+es(id)+'" data-g="'+grp+'" onclick="tc(this,'+(multi?'true':'false')+')" style="cursor:pointer">'+es(lbl)+'</span>';}
function tc(el,m){if(!m){document.querySelectorAll('[data-g="'+el.getAttribute('data-g')+'"]').forEach(function(e){e.classList.remove('on');});}el.classList.toggle('on');}
function gc(g){var e=document.querySelector('[data-g="'+g+'"].on');return e?e.getAttribute('data-id'):'';}
function gcs(g){var r=[];document.querySelectorAll('[data-g="'+g+'"].on').forEach(function(e){r.push(e.getAttribute('data-id'));});return r;}
function sc(g,v){document.querySelectorAll('[data-g="'+g+'"]').forEach(function(e){e.classList.toggle('on',e.getAttribute('data-id')===v);});}
// SYNC
// AUTH
function doLogin(){
  var u=document.getElementById('lU').value.trim();
  var p=document.getElementById('lP').value.trim();
  var e=document.getElementById('lErr');e.style.display='none';
  if(!u||!p){e.textContent='Ingresa usuario y contrasena.';e.style.display='block';return;}
  var usr=null;for(var i=0;i<D.usrs.length;i++){if(D.usrs[i].u===u&&D.usrs[i].p===p){usr=D.usrs[i];break;}}
  if(!usr){e.textContent='Usuario o contrasena incorrectos.';e.style.display='block';return;}
  if(usr.activo===false){e.textContent='Este usuario esta desactivado.';e.style.display='block';return;}
  usr.ua=new Date().toISOString();
  D.user=usr;
  ls('jses',D.user);
  fsSetUsuario(usr);
  startApp();
}
function startApp(){
  document.getElementById('sLogin').classList.remove('on');
  if(D.user.r==='gerente'||D.user.r==='admin'){
    document.getElementById('sGerente').classList.add('on');
    document.getElementById('vNav').style.display='none';
    var mu=document.getElementById('gMobUser');if(mu)mu.textContent=D.user.n;
    var su=document.getElementById('gSideUserNm');if(su)su.textContent=D.user.n+' · '+(D.user.r==='gerente'?'Gerente (solo lectura)':'Admin');
    var bCfg=document.getElementById('gbCfg');if(bCfg)bCfg.style.display=(D.user.r==='gerente'?'none':'flex');
    renderVendBtns();
    gSecActual='D';
    renderGD();
  } else {
    document.getElementById('sVen').classList.add('on');
    document.getElementById('vNav').style.display='flex';
    document.getElementById('vNm').textContent='Hola, '+D.user.n+'!';
    document.getElementById('vDt').textContent=new Date().toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long'});
    renderVH();
    // Iniciar en tab ejecutar
    renderVG();
  }
}
function doLogout(){
  D.user=null;ls('jses',null);
  document.querySelectorAll('.sc').forEach(function(s){s.classList.remove('on');});
  document.getElementById('sLogin').classList.add('on');
  document.getElementById('vNav').style.display='none';
  document.getElementById('lU').value='';document.getElementById('lP').value='';
}
// NAV
// Fecha en formato YYYY-MM-DD usando la HORA LOCAL del dispositivo.
// NUNCA usar toISOString() para fechas: devuelve UTC, y en Argentina (UTC-3)
// despues de las 21:00 daria la fecha de MANANA.
function fechaLocal(d){d=d||new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function today(){return fechaLocal();}
function vGo(t){
  document.querySelectorAll('#sVen .sc').forEach(function(s){s.classList.remove('on');});
  document.querySelectorAll('.vb').forEach(function(b){b.classList.remove('on');});
  var m={H:['sVH','vbH',renderVH],C:['sVC','vbC',renderVC],E:['sVE','vbE',renderVE],G:['sVG','vbG',renderVG],M:['sVM','vbM',renderVM]};
  if(m[t]){
    var el0=document.getElementById(m[t][0]);
    var el1=document.getElementById(m[t][1]);
    if(el0)el0.classList.add('on');
    if(el1)el1.classList.add('on');
    try{m[t][2]();}catch(e){
      debugLog('error','render'+t+': '+e.message);
      var cont=document.getElementById(m[t][0]);
      if(cont){
        var inner=cont.querySelector('.scr');
        if(inner)inner.innerHTML='<div style="padding:20px;color:var(--red);font-size:13px">Error al cargar. Toca Sync para reintentar.<br><small>'+e.message+'</small></div>';
      }
    }
  }
}
function showWiz(){
  var esAdmin=D.user&&D.user.r==='admin';
  W.origenAdmin=esAdmin;
  document.getElementById(esAdmin?'sGerente':'sVen').classList.remove('on');
  document.getElementById('sWiz').classList.add('on');
  if(!esAdmin)document.getElementById('vNav').style.display='none';
}
function hideWiz(){
  document.getElementById('sWiz').classList.remove('on');
  if(W.origenAdmin){
    document.getElementById('sGerente').classList.add('on');
  } else {
    document.getElementById('sVen').classList.add('on');
    document.getElementById('vNav').style.display='flex';
  }
}

// ── HOY ───────────────────────────────────────────────────────────────
var vhMesSel='';
var histVHOpen=false;
function renderVH(){
  var hoy=today();
  var misCli=misContactos();
  var misVis=D.vis.filter(function(v){return !D.user||v.vend===D.user.n;});
  var h='';

  // Alertas de inaccion (prospectos/clientes que se estan pasando por alto)
  var inac=calcInaccion();
  if(inac.length){
    h+='<div style="background:rgba(248,113,113,.08);border:1px solid rgba(248,113,113,.25);border-radius:var(--rsm);padding:10px 12px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;cursor:pointer" onclick="verInaccion()">';
    h+='<div><div style="font-size:13px;font-weight:700;color:var(--red)">&#9888; '+inac.length+' contacto'+(inac.length!==1?'s':'')+' sin gestion</div><div style="font-size:11px;color:var(--muted);margin-top:2px">Toca para ver la lista ordenada por urgencia</div></div>';
    h+='<span style="color:var(--red);font-size:20px">&rsaquo;</span></div>';
  }

  // Stat boxes de HOY
  var visHoy=misVis.filter(function(v){return v.fecha===hoy;});
  var ventasHoy=visHoy.filter(function(v){return v.vendio===true;});
  var prosHoy=misCli.filter(function(c){return c.ing===hoy;});
  h+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px">';
  h+='<div class="sb"><div class="sn">'+visHoy.length+'</div><div class="sl2">Visitas hoy</div></div>';
  h+='<div class="sb"><div class="sn" style="color:var(--green)">'+ventasHoy.length+'</div><div class="sl2">Ventas hoy</div></div>';
  h+='<div class="sb"><div class="sn" style="color:var(--orange)">'+prosHoy.length+'</div><div class="sl2">Prospectos hoy</div></div>';
  h+='</div>';

  // Pendientes en la gira de hoy
  var giraHoy=misGira().filter(function(g){return g.fecha===hoy;});
  var pendientes=giraHoy.filter(function(g){return !visHoy.some(function(v){return v.cid===g.cid;});});
  if(pendientes.length){
    h+='<div style="background:rgba(34,211,238,.07);border:1px solid rgba(34,211,238,.2);border-radius:var(--rsm);padding:10px 12px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between">';
    h+='<div style="font-size:13px;font-weight:700;color:var(--cyan)">'+pendientes.length+' visita'+(pendientes.length!==1?'s':'')+' pendiente'+(pendientes.length!==1?'s':'')+' hoy</div>';
    h+='<button class="sm g" onclick="vGo(\'G\')">Ver gira</button></div>';
  }

  // Actividad de HOY solamente
  if(!visHoy.length&&!prosHoy.length){
    h+='<div class="card" style="text-align:center;padding:24px"><div style="font-size:32px;margin-bottom:10px">📅</div>';
    h+='<div style="font-size:15px;font-weight:700;margin-bottom:6px">Sin actividad hoy</div>';
    h+='<button class="btn" onclick="vGo(\'G\')" style="margin-bottom:8px">Ir a la Gira</button>';
    h+='<button class="btn sec" onclick="nuevoPros()" style="margin:0">Nuevo prospecto</button></div>';
  } else {
    h+='<div style="font-size:11px;font-weight:700;color:var(--cyan);text-transform:uppercase;letter-spacing:.5px;margin:4px 0 8px">HOY</div>';
    prosHoy.forEach(function(c){
      h+='<div class="cc" style="border-left:3px solid var(--orange);margin-bottom:8px"><div style="font-size:14px;font-weight:700">'+es(c.nm)+'</div>';
      if(c.fan)h+='<div style="font-size:13px;font-weight:700;color:var(--cyan)">'+es(c.fan)+'</div>';
      h+='<span class="tg o" style="margin-top:4px;display:inline-flex">Nuevo prospecto</span></div>';
    });
    visHoy.forEach(function(v){
      var c=D.cli.find(function(x){return x.id===v.cid;});
      h+='<div class="vh" style="border-left:3px solid '+(v.vendio===true?'var(--green)':'var(--border)')+'">';
      h+='<div class="vhd">'+es(c?c.nm:'?')+(c&&c.fan?' · '+es(c.fan):'')+'</div>';
      h+='<div class="vhr">'+(v.tipo==='prospecto'?'Visita a prospecto':v.vendio===true?'Venta realizada':'Sin venta')+'</div>';
      if(v.vendio===false&&v.razones)h+='<div class="vhx" style="color:var(--muted)">'+es(Array.isArray(v.razones)?v.razones.join(', '):v.razones)+'</div>';
      if(v.nt)h+='<div class="vhx" style="font-style:italic">'+es(v.nt)+'</div>';
      h+='</div>';
    });
  }

  // Historial desplegable: dias anteriores agrupados por mes
  h+='<button class="btn sec" onclick="toggleHistorialVH()" style="margin-top:16px" id="btnHistVH">📅 '+(histVHOpen?'Ocultar':'Ver')+' dias anteriores</button>';
  h+='<div id="histVH" style="display:'+(histVHOpen?'block':'none')+';margin-top:10px"></div>';

  var _vhb=document.getElementById('vHB');if(_vhb)_vhb.innerHTML=h;
  if(histVHOpen)renderHistorialVH();
}
// Panel de contactos en inaccion (abre modal)
function verInaccion(){
  var inac=calcInaccion();
  var h='';
  if(!inac.length){h='<div class="empty">Sin contactos en inaccion. Buen trabajo!</div>';}
  else{
    h='<div style="font-size:12px;color:var(--muted);margin-bottom:10px">Del mas urgente al menos urgente</div>';
    inac.forEach(function(it){
      var c=it.c;
      h+='<div class="cc" style="margin-bottom:8px">';
      h+='<div style="margin-bottom:8px"><div style="font-size:14px;font-weight:700">'+es(c.nm)+'</div>';
      if(c.fan)h+='<div style="font-size:13px;font-weight:700;color:var(--cyan)">'+es(c.fan)+'</div>';
      h+='<div style="font-size:11px;color:var(--muted);margin-top:2px">'+es(it.etapa)+' · '+(it.dias===null?'Sin visitas registradas':it.dias+' dias sin gestion (umbral: '+it.umbral+')')+'</div></div>';
      h+='<div style="display:flex;gap:6px">';
      h+='<button class="sm g" onclick="cMod();abrirVisita(\''+c.id+'\')">Visita</button>';
      if(c.tel)h+='<button class="sm wa" onclick="envWA(\''+c.id+'\')">WhatsApp</button>';
      h+='</div></div>';
    });
  }
  oMod('Contactos sin gestion ('+inac.length+')',h);
}
// Historial: desplegable por mes -> lista de dias con actividad -> detalle en modal
function toggleHistorialVH(){
  histVHOpen=!histVHOpen;
  var el=document.getElementById('histVH');var btn=document.getElementById('btnHistVH');
  if(!el||!btn)return;
  el.style.display=histVHOpen?'block':'none';
  btn.textContent='📅 '+(histVHOpen?'Ocultar':'Ver')+' dias anteriores';
  if(histVHOpen)renderHistorialVH();
}
function renderHistorialVH(){
  var el=document.getElementById('histVH');if(!el)return;
  var misCli=misContactos();
  var misVis=D.vis.filter(function(v){return !D.user||v.vend===D.user.n;});
  var hoy=today();
  var mesesSet={};mesesSet[hoy.slice(0,7)]=true;
  misVis.forEach(function(v){if(v.fecha)mesesSet[v.fecha.slice(0,7)]=true;});
  misCli.forEach(function(c){if(c.ing)mesesSet[c.ing.slice(0,7)]=true;});
  var meses=Object.keys(mesesSet).sort().reverse();
  var mesSel=vhMesSel||hoy.slice(0,7);
  var h='<select onchange="vhMesSel=this.value;renderHistorialVH()" style="background:var(--s2);border:1px solid var(--border);color:var(--text);border-radius:10px;padding:7px 12px;font-size:12px;font-weight:600;width:100%;margin-bottom:10px">';
  meses.forEach(function(m){
    var nm=new Date(m+'-15T12:00:00').toLocaleDateString('es-AR',{month:'long',year:'numeric'});
    nm=nm.charAt(0).toUpperCase()+nm.slice(1);
    h+='<option value="'+m+'"'+(m===mesSel?' selected':'')+'>'+nm+'</option>';
  });
  h+='</select>';
  var diasSet={};
  misVis.forEach(function(v){if(v.fecha&&v.fecha.slice(0,7)===mesSel&&v.fecha!==hoy)diasSet[v.fecha]=true;});
  misCli.forEach(function(c){if(c.ing&&c.ing.slice(0,7)===mesSel&&c.ing!==hoy)diasSet[c.ing]=true;});
  var diasList=Object.keys(diasSet).sort().reverse();
  if(!diasList.length){h+='<div class="empty">Sin actividad registrada ese mes</div>';el.innerHTML=h;return;}
  diasList.forEach(function(dia){
    var vDia=misVis.filter(function(v){return v.fecha===dia;});
    var pDia=misCli.filter(function(c){return c.ing===dia;});
    var nomDia=new Date(dia+'T12:00:00').toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'short'});
    nomDia=nomDia.charAt(0).toUpperCase()+nomDia.slice(1);
    h+='<div class="cc" style="margin-bottom:8px;cursor:pointer" onclick="verDetalleDiaVH(\''+dia+'\')">';
    h+='<div style="display:flex;align-items:center;justify-content:space-between">';
    h+='<div style="font-size:13px;font-weight:700">'+nomDia+'</div><span style="color:var(--muted);font-size:18px">&rsaquo;</span></div>';
    h+='<div style="font-size:11px;color:var(--muted);margin-top:2px">'+vDia.length+' visita'+(vDia.length!==1?'s':'')+(pDia.length?' · '+pDia.length+' prospecto'+(pDia.length!==1?'s':''):'')+'</div></div>';
  });
  el.innerHTML=h;
}
function verDetalleDiaVH(dia){
  var misCli=misContactos();
  var misVis=D.vis.filter(function(v){return v.fecha===dia&&(!D.user||v.vend===D.user.n);});
  var pDia=misCli.filter(function(c){return c.ing===dia;});
  var nomDia=new Date(dia+'T12:00:00').toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long'});
  nomDia=nomDia.charAt(0).toUpperCase()+nomDia.slice(1);
  var h='';
  pDia.forEach(function(c){
    h+='<div class="cc" style="border-left:3px solid var(--orange);margin-bottom:8px"><div style="font-size:14px;font-weight:700">'+es(c.nm)+'</div>';
    if(c.fan)h+='<div style="font-size:13px;font-weight:700;color:var(--cyan)">'+es(c.fan)+'</div>';
    h+='<span class="tg o" style="margin-top:4px;display:inline-flex">Nuevo prospecto</span></div>';
  });
  misVis.forEach(function(v){
    var c=D.cli.find(function(x){return x.id===v.cid;});
    h+='<div class="vh" style="border-left:3px solid '+(v.vendio===true?'var(--green)':'var(--border)')+'">';
    h+='<div class="vhd">'+es(c?c.nm:'?')+(c&&c.fan?' · '+es(c.fan):'')+'</div>';
    h+='<div class="vhr">'+(v.tipo==='prospecto'?'Visita a prospecto':v.vendio===true?'Venta realizada':'Sin venta')+'</div>';
    if(v.vendio===false&&v.razones)h+='<div class="vhx" style="color:var(--muted)">'+es(Array.isArray(v.razones)?v.razones.join(', '):v.razones)+'</div>';
    if(v.nt)h+='<div class="vhx" style="font-style:italic">'+es(v.nt)+'</div>';
    h+='</div>';
  });
  if(!pDia.length&&!misVis.length)h='<div class="empty">Sin actividad</div>';
  oMod(nomDia,h);
}

// ── CONTACTOS ─────────────────────────────────────────────────────────
var vcF={tipo_ctx:'',tipo:'',bar:'',tipOneg:'',vis:'',frez:'',comp:[],calU:'',trans:'',prods:[]};
function qFiltro(k){if(k==='comp'||k==='prods')vcF[k]=[];else vcF[k]='';renderVC();}
function setFiltro(k,v){
  if(k==='comp'||k==='prods'){
    var arr=vcF[k],i=arr.indexOf(v);
    if(i>=0)arr.splice(i,1);else arr.push(v);
  } else {
    vcF[k]=(vcF[k]===v)?'':v;
  }
  renderVC();
  document.querySelectorAll('[data-fk="'+k+'"]').forEach(function(el){
    var match=(k==='comp'||k==='prods')?(vcF[k].indexOf(el.getAttribute('data-fv'))>=0):(vcF[k]===el.getAttribute('data-fv'));
    el.classList.toggle('on',match);
  });
}
function abrirFiltros(){
  var mc=misContactos(true);
  var barrSet={};mc.forEach(function(c){if(c.bar)barrSet[c.bar]=true;});
  var ciuSet={};mc.forEach(function(c){if(c.ciu)ciuSet[c.ciu]=true;});
  var tipoSet={};mc.forEach(function(c){if(c.tipo)tipoSet[c.tipo]=true;});
  var compSet={};mc.forEach(function(c){if(c.comp)c.comp.split(',').forEach(function(x){x=x.trim();if(x)compSet[x]=true;});});
  var lugares=Object.keys(Object.assign({},barrSet,ciuSet)).sort();
  var tipos=Object.keys(tipoSet).sort();
  var comps=Object.keys(compSet).sort();
  // Cada filtro simple es un desplegable con solo las opciones que existen en los contactos.
  function fsel(k,lbl,opciones){
    var h='<div class="fg"><div class="fl">'+lbl+'</div>';
    h+='<select class="fi" style="margin:0" onchange="vcF.'+k+'=this.value;renderVC()">';
    h+='<option value="">Todos</option>';
    opciones.forEach(function(o){
      var v=Array.isArray(o)?o[0]:o;var l=Array.isArray(o)?o[1]:o;
      h+='<option value="'+es(v)+'"'+(vcF[k]===v?' selected':'')+'>'+es(l)+'</option>';
    });
    h+='</select></div>';
    return h;
  }
  function fchipMulti(k,v,lbl){
    var active=vcF[k].indexOf(v)>=0;
    return '<span class="ch'+(active?' on':'')+'" data-fk="'+k+'" data-fv="'+es(v)+'" onclick="setFiltro(this.dataset.fk,this.dataset.fv)" style="font-size:12px;padding:6px 11px">'+es(lbl||v)+'</span>';
  }
  var h='';
  h+=fsel('tipo_ctx','Tipo de contacto',[['prospecto','Prospecto'],['cliente','Cliente activo']]);
  h+=fsel('vis','Visita',[['v','Visitados'],['sv','Sin visitar']]);
  h+=fsel('frez','Freezer',[['sin','Sin freezer'],['pro','Freezer propio'],['comp','De competencia']]);
  if(lugares.length)h+=fsel('bar','Barrio / Ciudad',lugares);
  if(tipos.length)h+=fsel('tipOneg','Tipo de negocio',tipos);
  h+=fsel('calU','Calificacion ubicacion',['A','B','C','D']);
  h+=fsel('trans','Transito',['Alto','Medio','Bajo']);
  // Multiples: siguen como chips porque se pueden elegir varias a la vez
  if(comps.length){
    h+='<div class="fg"><div class="fl">Competencia (podes elegir varias)</div><div class="chips">';
    comps.forEach(function(cp){h+=fchipMulti('comp',cp,cp);});
    h+='</div></div>';
  }
  if((D.cfg.tiposProducto||[]).length){
    h+='<div class="fg"><div class="fl">Productos que vende (podes elegir varios)</div><div class="chips">';
    (D.cfg.tiposProducto||[]).forEach(function(p){h+=fchipMulti('prods',p,p);});
    h+='</div></div>';
  }
  h+='<div style="display:flex;gap:8px;margin-top:4px">';
  h+='<button class="btn sec" style="flex:1;margin:0" onclick="vcF={tipo_ctx:\'\',tipo:\'\',bar:\'\',tipOneg:\'\',vis:\'\',frez:\'\',comp:[],calU:\'\',trans:\'\',prods:[]};renderVC();cMod()">Limpiar</button>';
  h+='<button class="btn" style="flex:1;margin:0" onclick="renderVC();cMod()">OK</button>';
  h+='</div>';
  oMod('Filtrar contactos',h);
}

// Ficha rapida del vendedor
function abrirFichaV(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var vs=D.vis.filter(function(v){return v.cid===id;}).slice().reverse().slice(0,5);
  var h='<div style="margin-bottom:12px">';
  if(c.fan&&c.fan.trim().toLowerCase()!==c.nm.trim().toLowerCase())h+='<div style="font-size:17px;font-weight:800;color:var(--cyan);margin-bottom:6px">'+es(c.fan)+'</div>';
  if(c.tel)h+='<a href="tel:'+es(c.tel)+'" style="display:block;font-size:20px;font-weight:900;color:var(--cyan);text-decoration:none">'+es(c.tel)+'</a>';
  if(c.email)h+='<a href="mailto:'+es(c.email)+'" style="display:block;font-size:13px;color:var(--muted);text-decoration:none;margin-top:2px">'+es(c.email)+'</a>';
  if(c.tel2)h+='<a href="tel:'+es(c.tel2)+'" style="display:block;font-size:14px;font-weight:600;color:var(--muted);text-decoration:none;margin-top:2px">'+es(c.tel2)+' <span style="font-size:10px">(alt)</span></a>';
  if(c.agendado)h+='<div style="font-size:11px;color:var(--green);margin-top:3px">&#10003; Agendado en tu celular</div>';
  // Ubicacion completa
  var ubicParts=[c.dir,c.ciu||c.bar,c.prov].filter(Boolean);
  h+='<div style="font-size:13px;color:var(--muted);margin-top:4px">'+es(ubicParts.join(' · '))+(c.tipo?' · '+es(c.tipo):'')+'</div>';
  h+='<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">';
  h+=(c.esP?'<span class="tg o">'+es(c.etapaEmbudo||'PROSPECTO')+'</span>':'<span class="tg g">CLIENTE ACTIVO</span>');
  if(c.deu)h+='<span style="background:var(--red);color:#fff;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:900">⚠ DEUDOR</span>';
  if(c.cFr)h+='<span class="tg m">'+es(c.cFr)+'</span>';
  if(c.calU)h+='<span class="tg m">Ubic: '+c.calU+'</span>';
  if(c.trans)h+='<span class="tg m">Transito: '+es(c.trans)+'</span>';
  h+='</div>';
  // Productos
  if(c.prods&&c.prods.length){h+='<div style="font-size:12px;color:var(--muted);margin-top:6px">Vende: '+es(c.prods.join(' · '))+'</div>';}
  h+='</div>';
  h+='<div class="div"></div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">';
  h+='<div class="sb"><div class="fl">Ultima visita</div><div style="font-size:14px;font-weight:700;color:var(--cyan)">'+fmt(c.ul)+'</div></div>';
  h+='<div class="sb"><div class="fl">Ultima venta</div><div style="font-size:14px;font-weight:700;color:var(--green)">'+fmt(c.uv)+'</div></div>';
  h+='</div>';
  if(c.comp)h+='<div style="font-size:12px;color:var(--muted);margin-bottom:8px">Comp: '+es(c.comp)+'</div>';
  if(c.obs)h+='<div style="font-size:13px;color:var(--muted);margin-bottom:10px;font-style:italic">'+es(c.obs)+'</div>';
  if(vs.length){
    h+='<div class="div"></div><div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">ULTIMAS VISITAS</div>';
    vs.forEach(function(v){
      h+='<div class="vh"><div class="vhd">'+fmt(v.fecha)+'</div>';
      h+='<div class="vhr">'+(v.tipo==='prospecto'?'Visita prospecto':v.vendio===true?'Venta realizada':'Sin venta')+'</div>';
      if(v.obs)h+='<div class="vhx">'+es(v.obs)+'</div>';
      h+='</div>';
    });
  }
  h+='<div class="div"></div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">';
  h+='<button class="btn" onclick="cMod();abrirVisita(\''+id+'\')" style="margin:0">Registrar visita</button>';
  h+='<button class="btn sec" onclick="cMod();editarContacto(\''+id+'\')" style="margin:0">Editar</button>';
  h+='</div>';
  if(c.tel){
    h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">';
    h+='<button class="btn sec" onclick="envWA(\''+id+'\')" style="margin:0">Enviar WhatsApp</button>';
    // Ubicacion: dos caminos distintos y claros
    if(c.lat||c.gpsOk){
      h+='<div style="font-size:12px;margin:0 0 6px">'+(c.gpsOk?'<span style="color:var(--green)">&#128205; Ubicacion confirmada (en el mapa)</span>':'<span style="color:var(--orange)">&#128205; Ubicacion sin confirmar (no aparece en el mapa)</span>')+' &middot; <span style="color:var(--muted)">'+fmt(c.gpsF||'')+'</span></div>';
    }
    h+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 8px">';
    h+='<button class="btn sec" onclick="marcarUbicacion(\''+id+'\')" style="margin:0;flex:1;min-width:130px;font-size:12px">&#128205; GPS (en el local)</button>';
    if((c.dir||'').trim())h+='<button class="btn sec" onclick="ubicarPorDireccion(\''+id+'\')" style="margin:0;flex:1;min-width:130px;font-size:12px">&#128506; Ubicar por direccion</button>';
    h+='</div>';
    if(c.lat)h+='<button class="btn sec" onclick="borrarUbicacion(\''+id+'\')" style="margin:0 0 8px;font-size:11px;color:var(--orange)">&#9851; Quitar del mapa</button>';
    h+='<button class="btn sec" onclick="exportarVCard(\''+id+'\')" style="margin:0">📋 Agregar a agenda</button>';
    h+='</div>';
  }
  var logH=htmlLog(id,8);
  if(logH){h+='<div class="div"></div><div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">HISTORIAL</div>'+logH;}
  oMod(es(c.nm),h);
}

// ── EDITAR CONTACTO (VENDEDOR) ───────────────────────────────────────
function editarContacto(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var tH=(D.cfg.tipos||[]).map(function(t){return ch(t,t,'eTip',false,'');}).join('');
  var compOpts=['Frigor','Arcor','Grido','Glups','Sin competencia','Otra'];
  var compH=compOpts.map(function(cp){var on2=c.comp&&c.comp.includes(cp);return '<span class="ch'+(on2?' on':'')+'" data-id="'+es(cp)+'" data-g="eComp" onclick="this.classList.toggle(\'on\')" style="font-size:12px;padding:5px 10px">'+es(cp)+'</span>';}).join('');
  var frH=['Sin freezer','Propio','Competencia'].map(function(f){return ch(f,f,'eFr',false,'');}).join('');
  var prodH=(D.cfg.tiposProducto||[]).map(function(p){var on3=c.prods&&c.prods.indexOf(p)>=0;return '<span class="ch'+(on3?' on':'')+'" data-id="'+es(p)+'" data-g="eProds" onclick="this.classList.toggle(\'on\')" style="font-size:12px;padding:5px 10px">'+es(p)+'</span>';}).join('');
  var h='';
  h+='<div class="fg"><label class="fl">Nombre del local *</label><input class="fi" id="eNm" value="'+es(c.nm||'')+'"></div>';
  h+='<div class="fg"><label class="fl">Dueno / encargado</label><input class="fi" id="eFan" value="'+es(c.fan||'')+'"></div>';
  h+='<div class="fg"><label class="fl">Telefono</label><input class="fi" type="tel" id="eTel" value="'+es(c.tel||'')+'"></div>';
  h+='<div class="fg"><label class="fl">Direccion</label><input class="fi" id="eDir" value="'+es(c.dir||'')+'"></div>';
  h+='<div class="fg" style="position:relative"><label class="fl">Provincia</label><input class="fi" id="eProv" autocomplete="off" value="'+es(c.prov||'')+'" placeholder="Escribi para buscar..."><div id="eProvSugg" style="display:none;position:absolute;left:0;right:0;top:100%;background:var(--s2);border:1px solid var(--border);border-radius:var(--rsm);max-height:200px;overflow-y:auto;z-index:50"></div></div>';
  h+='<div class="fg" style="position:relative"><label class="fl">Ciudad</label><input class="fi" id="eCiudad" autocomplete="off" value="'+es(c.ciu||'')+'" placeholder="Escribi para buscar..."><div id="eCiudadSugg" style="display:none;position:absolute;left:0;right:0;top:100%;background:var(--s2);border:1px solid var(--border);border-radius:var(--rsm);max-height:200px;overflow-y:auto;z-index:50"></div></div>';
  h+='<div class="fg" id="eBarrioFg" style="position:relative;'+(c.ciu==='Córdoba Capital'?'':'display:none')+'"><label class="fl">Barrio</label><input class="fi" id="eBarrio" autocomplete="off" value="'+es(c.bar||'')+'" placeholder="Escribi para buscar..."><div id="eBarrioSugg" style="display:none;position:absolute;left:0;right:0;top:100%;background:var(--s2);border:1px solid var(--border);border-radius:var(--rsm);max-height:200px;overflow-y:auto;z-index:50"></div></div>';
  h+='<div class="fg"><label class="fl">Tipo de negocio</label><div class="chips">'+tH+'</div></div>';
  h+='<div class="fg"><label class="fl">Productos que vende</label><div class="chips">'+prodH+'</div></div>';
  h+='<div class="fg"><label class="fl">Competencia</label><div class="chips">'+compH+'</div></div>';
  h+='<div class="fg"><label class="fl">Freezer</label><div class="chips">'+frH+'</div></div>';
  h+='<div class="fg"><label class="fl">Calificacion ubicacion</label><div class="chips">'+['A','B','C','D'].map(function(v){return ch(v,v,'eCal',false,'');}).join('')+'</div></div>';
  h+='<div class="fg"><label class="fl">Transito</label><div class="chips">'+['Alto','Medio','Bajo'].map(function(v){return ch(v,v,'eTr',false,'');}).join('')+'</div></div>';
  h+='<div class="fg"><label class="fl">Telefono adicional <span style="font-size:10px;color:var(--muted)">(opcional)</span></label><input class="fi" id="eTel2" type="tel" value="'+es(c.tel2||'')+'"></div>';
  h+='<div class="fg"><label class="fl">Email <span style="font-size:10px;color:var(--muted)">(opcional)</span></label><input class="fi" id="eEmail" type="email" value="'+es(c.email||'')+'"></div>';
  h+='<div class="fg"><label class="fl">Observaciones</label><textarea class="fi fta" id="eObs" rows="3">'+es(c.obs||'')+'</textarea></div>';
  h+='<button class="btn or" onclick="guardarEdicionContacto(\'' + id.replace(/'/g,"\\'") + '\')">Guardar cambios</button>';
  oMod('Editar: '+es(c.nm),h);
  setTimeout(function(){
    if(c.tipo)sc('eTip',c.tipo);
    if(c.cFr)sc('eFr',c.cFr);
    if(c.calU)sc('eCal',c.calU);
    if(c.trans)sc('eTr',c.trans);
    initAuto('eProv','eProvSugg',function(){return ARG_PROV;});
    initAuto('eCiudad','eCiudadSugg',function(){var pv=document.getElementById('eProv').value;return ARG_CIU[pv]||[];});
    initAuto('eBarrio','eBarrioSugg',function(){return ARG_BARRIOS;});
    document.getElementById('eCiudad').addEventListener('change',function(){
      var bf=document.getElementById('eBarrioFg');if(bf)bf.style.display=(this.value.trim()==='Córdoba Capital')?'block':'none';
    });
  },50);
}
function guardarEdicionContacto(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var cambios=[];
  function chk(campo,nuevoVal){if((c[campo]||'')!==(nuevoVal||'')){cambios.push(campo+': '+JSON.stringify(c[campo])+' -> '+JSON.stringify(nuevoVal));c[campo]=nuevoVal;}}
  chk('nm',document.getElementById('eNm').value.trim());
  chk('fan',document.getElementById('eFan').value.trim());
  chk('tel',document.getElementById('eTel').value.trim());
  chk('dir',document.getElementById('eDir').value.trim());
  chk('prov',document.getElementById('eProv').value);
  chk('ciu',document.getElementById('eCiudad').value.trim());
  var bEl=document.getElementById('eBarrio');var ciuVal2=document.getElementById('eCiudad').value.trim();if(bEl)chk('bar',ciuVal2==='Córdoba Capital'?bEl.value.trim():'');
  var tel2ElE=document.getElementById('eTel2');if(tel2ElE)chk('tel2',tel2ElE.value.trim());
  chk('tipo',gc('eTip'));
  var nprod=gcs('eProds');if(JSON.stringify(c.prods)!==JSON.stringify(nprod)){cambios.push('prods');c.prods=nprod;}
  var ncomp=gcs('eComp').join(', ');chk('comp',ncomp);
  chk('cFr',gc('eFr'));
  chk('calU',gc('eCal'));
  chk('trans',gc('eTr'));
  var eEmailEl=document.getElementById('eEmail');if(eEmailEl)chk('email',eEmailEl.value.trim());
  chk('obs',document.getElementById('eObs').value.trim());
  if(cambios.length){
    c._modBy=D.user?D.user.n:'?';
    c._modAt=new Date().toISOString();
    logEvento('modificacion',id,c.nm,'Edicion: '+cambios.slice(0,3).join(' | ')+(cambios.length>3?' (+'+(cambios.length-3)+' mas)':''),'','');
    fsSetContacto(c);
  }
  cMod();renderVC();
  toast(cambios.length?cambios.length+' cambio'+(cambios.length!==1?'s':'')+' guardado'+(cambios.length!==1?'s':''):'Sin cambios','ok');
}

// ── EMBUDO ────────────────────────────────────────────────────────────
var vEFil='Todos';
var vEChartOpen=false;
function setVEF(v){vEFil=v||'Todos';renderVE();}
function cambiarEtapa(id,eta){
  if(!eta)return;
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var ant=c.etapaEmbudo;
  c.etapaEmbudo=eta;
  var conv=false;
  if(eta==='Cliente Activo'&&c.esP){c.esP=false;conv=true;}
  c._modBy=D.user?D.user.n:'?';
  c._modAt=new Date().toISOString();
  logEvento(conv?'conversion':'etapa',c.id,c.nm,(conv?'Prospecto convertido a Cliente Activo':'Etapa: '+ant+' -> '+eta),ant,eta);
  fsSetContacto(c);
  renderVE();
  toast(es(c.nm)+' '+( conv?'convertido a Cliente Activo':'movido a '+es(eta)),'ok');
}

// ── GIRA ─────────────────────────────────────────────────────────────
// EJECUTAR HOY
// PLANIFICAR
function abrirAgregarAGira(fecha){
  var yaEnDia=D.gira.filter(function(g){return g.fecha===fecha;}).map(function(g){return g.cid;});
  var disp=misContactos().filter(function(c){return yaEnDia.indexOf(c.id)<0;}).sort(function(a,b){return(a.nm||'').localeCompare(b.nm||'');});
  var nomDia=new Date(fecha+'T12:00:00').toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'short'});
  var h='<div style="font-size:12px;color:var(--muted);margin-bottom:8px">Fecha: '+es(nomDia)+'</div>';
  h+='<div class="srch" style="margin:0 0 10px;position:sticky;top:0;z-index:2"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--muted)" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" id="gBusq" placeholder="Buscar local, cliente o barrio..." oninput="filtrarAgregarGira(\''+fecha+'\')" style="background:none;border:none;outline:none;color:var(--text);font-size:14px;flex:1;font-family:inherit;width:100%"></div>';
  // Area de resultados con altura acotada: scrollea sola aunque este el teclado abierto
  h+='<div id="gBusqR" style="max-height:40vh;overflow-y:auto;-webkit-overflow-scrolling:touch">';
  h+=giraResultadosHTML(disp,fecha);
  h+='</div>';
  oMod('Agregar a la gira',h);
}
// Filas de resultados del buscador de gira (reutilizado en la carga inicial y en el filtrado)
function giraResultadosHTML(lista,fecha){
  if(!lista.length)return '<div style="color:var(--muted);font-size:13px;padding:10px 0">Sin resultados</div>';
  var h='';
  lista.slice(0,30).forEach(function(c){
    h+='<div style="display:flex;align-items:center;gap:8px;padding:9px 0;border-bottom:1px solid var(--border)"><div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">'+es(c.nm)+'</div>';
    if(c.fan)h+='<div style="font-size:12px;font-weight:600;color:var(--cyan)">'+es(c.fan)+'</div>';
    h+='<div style="font-size:11px;color:var(--muted)">'+es(c.bar||'')+(c.tipo?' · '+es(c.tipo):'')+'</div></div>';
    h+='<span class="tg '+(c.esP?'o':'g')+'">'+(c.esP?'PROS':'CLI')+'</span>';
    h+='<button class="sm g" onclick="agregarAGira(\''+c.id+'\',\''+fecha+'\');this.textContent=\'OK\';this.disabled=true">+ Agregar</button></div>';
  });
  return h;
}
function filtrarAgregarGira(fecha){
  var q=(document.getElementById('gBusq').value||'').toLowerCase();
  var yaEnDia=D.gira.filter(function(g){return g.fecha===fecha;}).map(function(g){return g.cid;});
  var disp=misContactos().filter(function(c){return yaEnDia.indexOf(c.id)<0&&(c.nm.toLowerCase().includes(q)||(c.fan||'').toLowerCase().includes(q)||(c.bar||'').toLowerCase().includes(q));}).sort(function(a,b){return(a.nm||'').localeCompare(b.nm||'');});
  document.getElementById('gBusqR').innerHTML=giraResultadosHTML(disp,fecha);
}
function agregarAGira(cid,fecha){
  var yaExiste=D.gira.some(function(g){return g.cid===cid&&g.fecha===fecha;});
  if(!yaExiste){
    var g={cid:cid,fecha:fecha,orden:D.gira.filter(function(x){return x.fecha===fecha;}).length};
    D.gira.push(g);
    fsSetGira(g);
    toast('Agregado a la gira','ok');
  }
}
// Reglas de integridad de la gira:
// 1. Los dias pasados son historial: los vendedores no pueden modificarlos (el admin si).
// 2. Si el contacto ya tiene una visita registrada ese dia, la parada es un hecho, no un plan: no se borra.
function giraBloqueada(cid,fecha){
  var esAdmin=D.user&&D.user.r==='admin';
  if(fecha<today()&&!esAdmin){toast('Los dias pasados no se pueden modificar','err');return true;}
  var visitado=D.vis.some(function(v){return v.cid===cid&&v.fecha===fecha;});
  if(visitado&&!esAdmin){toast('Ya se registro la visita: no se puede quitar de la gira','err');return true;}
  return false;
}
function quitarDeGira(cid,fecha){
  if(giraBloqueada(cid,fecha))return;
  D.gira=D.gira.filter(function(g){return !(g.cid===cid&&g.fecha===fecha);});
  fsDelGira(cid,fecha);
  renderVG();toast('Quitado de la gira','ok');
}

// ── NUEVA VISITA: adaptada segun tipo de contacto ─────────────────────
function abrirVisita(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  if(c.esP){abrirVisitaProspecto(id);}else{aVisita(id);}
}
// Visita simple para PROSPECTOS
function abrirVisitaProspecto(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var h='<div style="font-size:22px;font-weight:800;margin-bottom:6px">'+es(c.nm)+'</div>';
  h+='<div style="font-size:13px;color:var(--muted);margin-bottom:16px">'+es(c.etapaEmbudo||'Prospecto')+(c.bar?' · '+es(c.bar):'')+'</div>';
  h+='<div class="fg"><label class="fl">Observaciones de la visita</label><textarea class="fi fta" id="vpObs" rows="3" placeholder="Que paso en la visita? Mostro interes? Datos importantes..."></textarea></div>';
  h+='<div class="fg"><label class="fl">Se realizo una venta?</label>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">';
  h+='<div id="vpSi" onclick="togVP(true)" style="padding:16px;border-radius:var(--r);border:2px solid var(--border);text-align:center;font-size:16px;font-weight:800;cursor:pointer;background:var(--s2);color:var(--muted)">SI</div>';
  h+='<div id="vpNo" onclick="togVP(false)" style="padding:16px;border-radius:var(--r);border:2px solid var(--border);text-align:center;font-size:16px;font-weight:800;cursor:pointer;background:var(--s2);color:var(--muted)">NO</div></div></div>';
  h+='<div id="vpVentaBox" style="display:none">';
  h+='<div class="fg"><label class="fl">Fecha de la venta</label><input class="fi" type="date" id="vpFechaPed" value="'+today()+'"></div>';
  h+='<div class="fg"><div style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:14px;font-weight:700">Convertir a Cliente Activo</span><label class="sw"><input type="checkbox" id="vpConv" checked><span class="sl3"></span></label></div><div style="font-size:12px;color:var(--muted);margin-top:4px">Si se convierte, pasa a la lista de clientes activos</div></div></div>';
  h+='<div class="fg"><label class="fl">Mover en el embudo</label>';
  h+='<select class="fi" id="vpEta"><option value="">Mantener etapa actual ('+es(c.etapaEmbudo||'Nuevo Prospecto')+')</option>';
  ET.concat(SA).forEach(function(et){if(et!==c.etapaEmbudo)h+='<option value="'+es(et)+'">'+es(et)+'</option>';});
  h+='</select></div>';
  // CAMPO CLAVE: próxima visita -> se agrega sola a la Gira
  h+='<div class="fg"><label class="fl">Proxima visita <span style="color:var(--cyan);font-size:11px">(se agrega automaticamente a la Gira)</span></label>';
  h+='<input class="fi" type="date" id="vpProx" min="'+today()+'" value="'+(c.prox||'')+'"></div>';
  h+='<button class="btn or" onclick="guardarVisitaProspecto(\''+id+'\')">Guardar visita</button>';
  oMod('Visita a prospecto',h);
}
var vpVendio=null;
function togVP(si){
  vpVendio=si;
  var bS=document.getElementById('vpSi');var bN=document.getElementById('vpNo');var box=document.getElementById('vpVentaBox');
  if(bS){bS.style.background=si?'rgba(74,222,128,.2)':'var(--s2)';bS.style.borderColor=si?'var(--green)':'var(--border)';bS.style.color=si?'var(--green)':'var(--muted)';}
  if(bN){bN.style.background=!si?'rgba(248,113,113,.2)':'var(--s2)';bN.style.borderColor=!si?'var(--red)':'var(--border)';bN.style.color=!si?'var(--red)':'var(--muted)';}
  if(box)box.style.display=si?'block':'none';
}
function guardarVisitaProspecto(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var obs=document.getElementById('vpObs').value;
  var eta=document.getElementById('vpEta').value;
  var hoy=today();
  var v={id:uid(),cid:id,fecha:hoy,vend:D.user?D.user.n:'',tipo:'prospecto',vendio:vpVendio,obs:obs};
  var conv=false;
  if(eta){v.eta=eta;c.etapaEmbudo=eta;}
  if(vpVendio===true){
    var fp=document.getElementById('vpFechaPed').value||hoy;
    v.fechaPedido=fp;c.uv=fp;
    conv=document.getElementById('vpConv')&&document.getElementById('vpConv').checked;
    if(conv){c.esP=false;c.etapaEmbudo='Cliente Activo';v.eta='Cliente Activo';v.conversion=true;}
  }
  c.ul=hoy;
  // Próxima visita → agregar automáticamente a la Gira. Si no se cargó una fecha
  // y el contacto sigue activo en el embudo, se sugiere una automáticamente para
  // que ningún contacto quede sin seguimiento agendado.
  var proxEl=document.getElementById('vpProx');
  var prox=proxEl?ajustarDiaHabil(proxEl.value):'';
  var autoSug=false;
  if(!prox&&!conv&&vpVendio!==true){
    var etaRef=eta||c.etapaEmbudo||'Nuevo Prospecto';
    if(etaRef!=='No Le Interesa'&&etaRef!=='Perdido'){prox=sugerirProxima(etaRef);autoSug=true;}
  }
  if(prox){
    c.prox=prox;
    v.prox=prox;
    var yaEnGira=D.gira.some(function(g){return g.cid===id&&g.fecha===prox;});
    if(!yaEnGira){
      var ng={cid:id,fecha:prox,orden:D.gira.filter(function(x){return x.fecha===prox;}).length};
      D.gira.push(ng);
      fsSetGira(ng);
    }
  }
  D.vis.push(v);
  // Trazabilidad
  if(conv){logEvento('conversion',c.id,c.nm,'Prospecto convertido a Cliente Activo','Prospecto','Cliente Activo');}
  else if(vpVendio===true){logEvento('venta',c.id,c.nm,'Venta registrada en visita a prospecto','','');}
  else{logEvento('visita',c.id,c.nm,'Visita registrada'+(prox?' — Proxima: '+prox:''),'','');}
  fsSetVisita(v);
  fsSetContacto(c);
  cMod();
  toast(prox?'Visita guardada · Gira agendada para '+fmt(prox)+(autoSug?' (sugerida)':''):vpVendio===true?'Venta registrada!':'Visita guardada','ok');
  vpVendio=null;
  renderVH();
  if(gTab==='ejec')renderVG();
  // Confirmar ubicacion la primera vez, si el vendedor esta en el local
  if(!c.gpsOk&&(!D.user||D.user.r==='vendedor')){setTimeout(function(){confirmarUbicacion(c.id);},400);}
}
// ── MAPA DE CONTACTOS (Leaflet + OpenStreetMap, sin API key) ──────────
// Objetivo: ver donde estan los clientes y donde falta entrar (desarrollo de zona).
var vMapaObj=null,vMapaCapa=null;   // mapa del vendedor
var gMapaObj=null,gMapaCapa=null;   // mapa del admin
var vMFiltroEtapa='';               // filtro por etapa en el mapa del vendedor
var gMFiltroEtapa='';

function crearMapa(contId){
  var mapa=L.map(contId,{zoomControl:true,attributionControl:true}).setView([-31.4201,-64.1888],12); // Cordoba Capital
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{
    attribution:'&copy; OpenStreetMap &copy; CARTO',maxZoom:19
  }).addTo(mapa);
  return mapa;
}
function pintarMarcadores(mapa,capaVieja,lista,filtroEtapa,esAdmin){
  if(capaVieja)mapa.removeLayer(capaVieja);
  var capa=L.layerGroup();
  var bounds=[];
  lista.forEach(function(c){
    // Opcion B: solo se muestran contactos con ubicacion CONFIRMADA por GPS.
    if(!c.gpsOk||!c.lat||!c.lng)return;
    var eta=c.etapaEmbudo||(c.esP?'Nuevo Prospecto':'Cliente Activo');
    if(filtroEtapa&&eta!==filtroEtapa)return;
    var col=EC[eta]||'#94a3b8';
    var m=L.circleMarker([c.lat,c.lng],{radius:9,fillColor:col,color:'#0b1220',weight:2,fillOpacity:.92});
    var pop='<div style="font-family:inherit;min-width:170px">';
    pop+='<div style="font-weight:800;font-size:14px;margin-bottom:2px">'+es(c.nm)+'</div>';
    if(c.fan&&c.fan.trim().toLowerCase()!==c.nm.trim().toLowerCase())pop+='<div style="font-size:12px;font-weight:700;color:#0891b2">'+es(c.fan)+'</div>';
    pop+='<div style="font-size:11px;color:#666">'+es(c.bar||c.ciu||'')+(c.tipo?' · '+es(c.tipo):'')+'</div>';
    pop+='<div style="font-size:11px;margin-top:3px"><span style="background:'+col+';color:#fff;padding:2px 8px;border-radius:10px;font-weight:700">'+es(eta)+'</span></div>';
    pop+='<button onclick="'+(esAdmin?'aFicha':'abrirFichaV')+'(\''+c.id+'\')" style="margin-top:8px;background:#0891b2;color:#fff;border:none;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:700;cursor:pointer">Ver ficha</button>';
    pop+='</div>';
    m.bindPopup(pop);
    capa.addLayer(m);
    bounds.push([c.lat,c.lng]);
  });
  capa.addTo(mapa);
  if(bounds.length)mapa.fitBounds(bounds,{padding:[35,35],maxZoom:15});
  return capa;
}
function barraMapaHTML(lista,filtroActual,fnFiltro,fnCentro){
  var conf=lista.filter(function(c){return c.gpsOk&&c.lat&&c.lng;}).length;
  var sinConf=lista.length-conf;
  var h='<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">';
  h+='<select onchange="'+fnFiltro+'(this.value)" style="background:var(--s2);color:var(--text);border:1px solid var(--border);border-radius:var(--rsm);padding:6px 10px;font-size:12px;cursor:pointer">';
  h+='<option value="">Todas las etapas</option>';
  ET.concat(SA).forEach(function(e){h+='<option value="'+es(e)+'"'+(filtroActual===e?' selected':'')+'>'+es(e)+'</option>';});
  h+='</select>';
  h+='<button class="sm g" onclick="'+fnCentro+'()" style="font-size:11px">&#128205; Mi ubicacion</button>';
  h+='<span style="font-size:11px;color:var(--muted);margin-left:auto">'+conf+' en el mapa'+(sinConf?' &middot; <span style="color:var(--orange)">'+sinConf+' por confirmar</span>':'')+'</span>';
  h+='</div>';
  // Leyenda de colores
  h+='<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px">';
  ET.forEach(function(e){h+='<span style="font-size:10px;color:var(--muted);display:flex;align-items:center;gap:4px"><span style="width:9px;height:9px;border-radius:50%;background:'+(EC[e]||'#94a3b8')+';display:inline-block"></span>'+es(e)+'</span>';});
  h+='</div>';
  if(!conf)h+='<div style="font-size:11px;color:var(--orange);margin-top:6px">Todavia no hay contactos confirmados en el mapa. La ubicacion se confirma con GPS al crear un prospecto o en la primera visita a un cliente, parado en el local.</div>';
  return h;
}
function setVMFiltroEtapa(v){vMFiltroEtapa=v;renderVM();}
function setGMFiltroEtapa(v){gMFiltroEtapa=v;renderGM();}
function centrarMiUbicacion(mapa){
  capturarGPS(function(g){
    if(!g){toast('No se pudo obtener tu ubicacion','err');return;}
    mapa.setView([g.lat,g.lng],15);
    L.circleMarker([g.lat,g.lng],{radius:7,fillColor:'#fff',color:'#0891b2',weight:3,fillOpacity:1}).addTo(mapa).bindPopup('Estas aca').openPopup();
  });
}
function centrarVM(){if(vMapaObj)centrarMiUbicacion(vMapaObj);}
function centrarGM(){if(gMapaObj)centrarMiUbicacion(gMapaObj);}
function renderVM(){
  var top=document.getElementById('vMTop');var cont=document.getElementById('vMapa');
  if(!top||!cont)return;
  var mc=misContactos();
  top.innerHTML=barraMapaHTML(mc,vMFiltroEtapa,'setVMFiltroEtapa','centrarVM');
  if(typeof L==='undefined'){cont.innerHTML='<div class="empty" style="padding-top:40px">El mapa necesita conexion a internet la primera vez que se abre.</div>';return;}
  if(!vMapaObj){cont.innerHTML='';vMapaObj=crearMapa('vMapa');}
  vMapaCapa=pintarMarcadores(vMapaObj,vMapaCapa,mc,vMFiltroEtapa,false);
  setTimeout(function(){vMapaObj.invalidateSize();},120); // la pestaña recien se hizo visible
}
function renderGM(){
  var top=document.getElementById('gMTop');var cont=document.getElementById('gMapa');
  if(!top||!cont)return;
  var base=cliGlobal();
  top.innerHTML=barraMapaHTML(base,gMFiltroEtapa,'setGMFiltroEtapa','centrarGM');
  if(typeof L==='undefined'){cont.innerHTML='<div class="empty" style="padding-top:40px">El mapa necesita conexion a internet la primera vez que se abre.</div>';return;}
  if(!gMapaObj){cont.innerHTML='';gMapaObj=crearMapa('gMapa');}
  gMapaCapa=pintarMarcadores(gMapaObj,gMapaCapa,base,gMFiltroEtapa,true);
  setTimeout(function(){gMapaObj.invalidateSize();},120);
}

// ── UBICACION GPS DE LOS CONTACTOS ────────────────────────────────────
// La captura es silenciosa y no bloquea: si el celular no da la ubicacion, no pasa nada.
var gpsPend=null;
function capturarGPS(cb){
  if(!navigator.geolocation){if(cb)cb(null);return;}
  navigator.geolocation.getCurrentPosition(function(pos){
    if(cb)cb({lat:pos.coords.latitude,lng:pos.coords.longitude,acc:Math.round(pos.coords.accuracy||0),f:today()});
  },function(){if(cb)cb(null);},{enableHighAccuracy:true,timeout:8000,maximumAge:60000});
}
// Boton "Marcar ubicacion" de las fichas: captura GPS y CONFIRMA la ubicacion (gpsOk=true)
function marcarUbicacion(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  toast('Obteniendo ubicacion...','ok');
  capturarGPS(function(g){
    if(!g){toast('No se pudo obtener la ubicacion. Verifica el GPS del celular','err');return;}
    c.lat=g.lat;c.lng=g.lng;c.gpsAcc=g.acc;c.gpsF=g.f;c.gpsOk=true;delete c.gpsAprox;
    fsSetContacto(c);
    logEvento('edicion',c.id,c.nm,'Ubicacion GPS confirmada','','');
    toast('Ubicacion confirmada, ya aparece en el mapa','ok');
    cMod();
  });
}
// Ubica UN contacto usando su direccion de texto (para corregir desde el escritorio,
// distinto del boton GPS que usa la posicion fisica del celular).
function ubicarPorDireccion(id){
  if(soloLectura())return;
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  if(!(c.dir||'').trim()){toast('Este contacto no tiene direccion cargada','err');return;}
  if(typeof fetch==='undefined'){toast('Este navegador no soporta la funcion','err');return;}
  toast('Buscando la direccion en el mapa...','ok');
  var ciu=(!c.ciu||/c[oó]rdoba capital/i.test(c.ciu))?'Córdoba':c.ciu;
  var dir=(c.dir||'').replace(/\bB[o°]\.?\s/gi,'').replace(/\s+/g,' ').replace(/,+/g,',').trim();
  var intentos=[dir+', '+ciu+', Argentina'];
  if(c.bar)intentos.push(dir+', '+c.bar+', '+ciu+', Argentina');
  if(c.prov)intentos.push(dir+', '+c.prov+', Argentina');
  var t=0;
  function probar(){
    if(t>=intentos.length){toast('No se encontro la direccion. Revisa que este bien escrita, o usa el GPS parado en el local','err');return;}
    fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=ar&q='+encodeURIComponent(intentos[t]))
      .then(function(r){return r.json();}).then(function(res){
        t++;
        if(res&&res[0]){
          var la=parseFloat(res[0].lat),lo=parseFloat(res[0].lon);
          if(la<-20&&la>-56&&lo<-53&&lo>-74){
            c.lat=la;c.lng=lo;c.gpsAprox=true;c.gpsF=today();delete c.gpsAcc;
            fsSetContacto(c);
            logEvento('edicion',c.id,c.nm,'Ubicado por direccion','','');
            toast('Ubicado en el mapa (aproximado por direccion)','ok');
            cMod();
            return;
          }
        }
        setTimeout(probar,1100);
      }).catch(function(){t++;setTimeout(probar,1100);});
  }
  probar();
}
// Borra la ubicacion de un contacto para poder re-geocodificarla (util tras corregir la direccion)
function borrarUbicacion(id){
  if(soloLectura())return;
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  if(!confirm('Quitar la ubicacion de "'+es(c.nm)+'"? Volvera a aparecer sin marcar en el mapa y podras re-ubicarlo por direccion o GPS.'))return;
  delete c.lat;delete c.lng;delete c.gpsAcc;delete c.gpsAprox;delete c.gpsF;
  fsSetContacto(c);
  toast('Ubicacion borrada','ok');
  cMod();
}
function nuevoPros(){
  gpsPend=null;capturarGPS(function(g){gpsPend=g;}); // el vendedor esta parado en el local: momento perfecto para el GPS
  var tid=uid();
  var vend=D.user?D.user.n:'';
  var nuevo={id:tid,nm:'',fan:'',tel:'',dir:'',bar:'',tipo:'',prov:'',ciu:'',esP:true,etapaEmbudo:'Nuevo Prospecto',calU:'',trans:'',comp:'',cFr:'',cEx:'',obs:'',uv:'',ul:'',prox:'',ing:today(),ex:{},deu:false,vend:vend,prods:[]};
  D.cli.push(nuevo);
  fsSetContacto(nuevo);
  aVisPros(tid,true);
}


// ── DASHBOARD GERENTE: INTELIGENCIA COMERCIAL ─────────────────────────
// Meses (YYYY-MM) que tienen datos cargados (visitas o altas de contactos), de mas nuevo a mas viejo
function mesesConDatos(){
  var s={};s[today().slice(0,7)]=true;
  D.vis.forEach(function(v){if(v.fecha)s[v.fecha.slice(0,7)]=true;});
  D.cli.forEach(function(c){if(c.ing)s[c.ing.slice(0,7)]=true;});
  return Object.keys(s).sort().reverse();
}
function nombreMes(m){
  var nm=new Date(m+'-15T12:00:00').toLocaleDateString('es-AR',{month:'long',year:'numeric'});
  return nm.charAt(0).toUpperCase()+nm.slice(1);
}
var gPer='mes';
var gMesEsp=''; // 'YYYY-MM' cuando gPer==='mesEsp'
// gDVend eliminado: reemplazado por el filtro global gVendSel (botones del sidebar)
function getPer(){
  var hoy=today();var d=new Date();var desde,hasta=hoy;
  if(gPer==='hoy')desde=hoy;
  else if(gPer==='sem'){d.setDate(d.getDate()-(d.getDay()===0?6:d.getDay()-1));desde=fechaLocal(d);}
  else if(gPer==='mes'){desde=hoy.slice(0,7)+'-01';}
  else if(gPer==='mesEsp'){
    var m=gMesEsp||hoy.slice(0,7);
    desde=m+'-01';
    var ult=new Date(Number(m.slice(0,4)),Number(m.slice(5,7)),0).getDate();
    hasta=m+'-'+String(ult).padStart(2,'0');
  }
  else{desde=hoy.slice(0,4)+'-01-01';}
  return{desde:desde,hasta:hasta};
}
function getLunesSem(){var d=new Date();var dow=d.getDay()===0?6:d.getDay()-1;d.setDate(d.getDate()-dow);return fechaLocal(d);}
function visEnPer(){var r=getPer();return visGlobal().filter(function(v){return v.fecha>=r.desde&&v.fecha<=r.hasta;});}
function sG(titulo,cont){return '<div class="card" style="margin-bottom:12px"><div class="ct">'+es(titulo)+'</div>'+cont+'</div>';}

function renderGD(){
  var hoy=today();var per=getPer();var vis=visEnPer();
  var cliBase=cliGlobal();
  var clientes=cliBase.filter(function(c){return !c.esP;});
  var prospectos=cliBase.filter(function(c){return c.esP;});
  var vendedores=D.usrs.filter(function(u){return u.r==='vendedor';});
  // Metricas
  var pros_nuevos=prospectos.filter(function(c){return c.ing>=per.desde&&c.ing<=per.hasta;});
  var cli_visit=clientes.filter(function(c){return vis.some(function(v){return v.cid===c.id;});});
  var ventas=vis.filter(function(v){return v.vendio===true;});
  var conv=vis.filter(function(v){return v.conversion===true;});
  var com_per=D.com.filter(function(co){return co.fe>=per.desde&&co.fe<=per.hasta;});
  // Alertas
  var alertas=[];
  var sv30=clientes.filter(function(c){return !c.ul||dias(c.ul)>30;});
  if(sv30.length)alertas.push({t:'r',msg:sv30.length+' cliente'+(sv30.length!==1?'s':'')+' sin visita hace +30 dias',ids:sv30.map(function(c){return c.id;})});
  var ps7=prospectos.filter(function(c){return !c.ul||dias(c.ul)>7;});
  if(ps7.length)alertas.push({t:'r',msg:ps7.length+' prospecto'+(ps7.length!==1?'s':'')+' sin seguimiento hace +7 dias',ids:ps7.map(function(c){return c.id;})});
  var pest=prospectos.filter(function(c){return c.ul&&dias(c.ul)>14&&c.etapaEmbudo!=='Cliente Activo';});
  if(pest.length)alertas.push({t:'o',msg:pest.length+' prospecto'+(pest.length!==1?'s':'')+' estancado'+(pest.length!==1?'s':'')+' en el embudo sin avance +14 dias',ids:pest.map(function(c){return c.id;})});
  var msv=clientes.filter(function(c){var vc=D.vis.filter(function(v){return v.cid===c.id&&v.tipo==='cliente';}).slice(-3);return vc.length>=3&&vc.every(function(v){return v.vendio===false;});});
  if(msv.length)alertas.push({t:'o',msg:msv.length+' cliente'+(msv.length!==1?'s':'')+' con 3+ visitas consecutivas sin compra',ids:msv.map(function(c){return c.id;})});
  var ls=getLunesSem();
  var vb=vendedores.filter(function(u){return D.vis.filter(function(v){return v.vend===u.n&&v.fecha>=ls;}).length<3;});
  if(vb.length)alertas.push({t:'y',msg:'Baja actividad esta semana: '+vb.map(function(u){return u.n;}).join(', '),ids:null});
  var csv=D.com.filter(function(co){return !co.ret;}).filter(function(co){var c=D.cli.find(function(x){return x.id===co.cid;});return c&&(!c.ul||dias(c.ul)>30);});
  if(csv.length)alertas.push({t:'y',msg:csv.length+' cliente'+(csv.length!==1?'s':'')+' con comodato activo sin visita +30 dias',ids:csv.map(function(co){var c=D.cli.find(function(x){return x.id===co.cid;});return c?c.id:null;}).filter(Boolean)});
  var h='';
  // Filtro periodo
  h+='<div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap">';
  [{k:'hoy',l:'Hoy'},{k:'sem',l:'Esta semana'},{k:'mes',l:'Este mes'},{k:'ano',l:'Este ano'},{k:'mesEsp',l:'Elegir mes'}].forEach(function(p){
    h+='<span class="fb'+(gPer===p.k?' on':'')+'" onclick="gPer=\''+p.k+'\';renderGD()">'+p.l+'</span>';
  });
  h+='</div>';
  h+='<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap">';
  if(gPer==='mesEsp'){
    var mSel=gMesEsp||hoy.slice(0,7);
    h+='<select onchange="gMesEsp=this.value;renderGD()" style="background:var(--s2);border:1px solid var(--border);color:var(--text);border-radius:20px;padding:7px 12px;font-size:12px;font-weight:600">';
    mesesConDatos().forEach(function(m){h+='<option value="'+m+'"'+(m===mSel?' selected':'')+'>'+nombreMes(m)+'</option>';});
    h+='</select>';
  }
  h+='</div>';
  // Alertas
  if(alertas.length){
    h+='<div style="margin-bottom:14px"><div class="ct">ALERTAS Y ACCIONES RECOMENDADAS</div>';
    alertas.forEach(function(a){
      var col=a.t==='r'?'var(--red)':a.t==='o'?'var(--orange)':'var(--yellow)';
      var bg=a.t==='r'?'rgba(248,113,113,.08)':a.t==='o'?'rgba(251,146,60,.08)':'rgba(251,191,36,.08)';
      var bc=a.t==='r'?'rgba(248,113,113,.25)':a.t==='o'?'rgba(251,146,60,.25)':'rgba(251,191,36,.25)';
      var emo=a.t==='r'?'🔴':a.t==='o'?'🟠':'🟡';
      h+='<div style="background:'+bg+';border:1px solid '+bc+';border-radius:var(--rsm);padding:10px 12px;margin-bottom:6px;display:flex;align-items:center;gap:10px;'+(a.ids?'cursor:pointer':'')+'"'+(a.ids?' onclick="abrirListaDash('+JSON.stringify(a.ids).replace(/"/g,"'")+')"':'')+'>';
      h+='<span>'+emo+'</span><span style="font-size:13px;font-weight:600;color:'+col+';flex:1">'+es(a.msg)+'</span>';
      if(a.ids)h+='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="'+col+'" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>';
      h+='</div>';
    });
    h+='</div>';
  }
  // KPIs clickeables
  h+='<div class="ct">PERIODO: '+({hoy:'HOY',sem:'ESTA SEMANA',mes:'ESTE MES',ano:'ESTE ANO',mesEsp:(gMesEsp||hoy.slice(0,7))}[gPer])+(gVendSel?' · '+es(gVendSel).toUpperCase():'')+'</div>';
  h+='<div class="sg" style="margin-bottom:14px">';
  [{n:pros_nuevos.length,l:'Prospectos nuevos',c:'var(--orange)',ids:pros_nuevos.map(function(c){return c.id;})},
   {n:cli_visit.length,l:'Clientes visitados',c:'var(--cyan)',ids:cli_visit.map(function(c){return c.id;})},
   {n:vis.length,l:'Visitas totales',c:'var(--text)',ids:null},
   {n:ventas.length,l:'Ventas realizadas',c:'var(--green)',ids:null},
   {n:conv.length,l:'Conversiones',c:'var(--purple)',ids:conv.map(function(v){return v.cid;}).filter(function(id,i,a){return a.indexOf(id)===i;})},
   {n:com_per.length,l:'Comodatos firmados',c:'var(--yellow)',ids:null}
  ].forEach(function(k){
    var click=k.ids&&k.ids.length?' onclick="abrirListaDash('+JSON.stringify(k.ids).replace(/"/g,"'")+')" style="cursor:pointer"':' style="cursor:default"';
    h+='<div class="sb"'+click+'><div class="sn" style="color:'+k.c+'">'+k.n+'</div><div class="sl2">'+es(k.l)+'</div></div>';
  });
  h+='</div>';
  // Ranking vendedores
  if(vendedores.length){
    var rvh='<div class="bc">';
    var mx=0;
    var rvd=vendedores.map(function(u){var vv=vis.filter(function(v){return v.vend===u.n;});var vtas=vv.filter(function(v){return v.vendio===true;}).length;mx=Math.max(mx,vv.length);return{n:u.n,v:vv.length,vtas:vtas};}).sort(function(a,b){return b.v-a.v;});
    rvd.forEach(function(d){rvh+='<div class="br" style="cursor:pointer" onclick="oMod(\'Informe: '+es(d.n)+'\',\'\');_renderInformeVendedor(\''+es(d.n)+'\')"><div class="bl" style="color:var(--cyan);text-decoration:underline">'+es(d.n)+'</div><div class="bt"><div class="bf" style="width:'+(mx>0?Math.round(d.v/mx*100):0)+'%;background:var(--cyan)"></div></div><div class="bv">'+d.v+'</div><div style="font-size:10px;color:var(--green);width:44px;text-align:right">'+d.vtas+' vtas</div></div>';});
    rvh+='</div>';
    h+=sG('Ranking de vendedores',rvh);
  }
  // Embudo completo con conversion
  var emh='<div>';
  var totCli=cliBase.length||1;
  ET.forEach(function(et){
    var n=cliBase.filter(function(c){return c.etapaEmbudo===et;}).length;if(!n)return;
    var col=EC[et]||'var(--muted)';var pct=Math.round(n/totCli*100);
    emh+='<div class="br" style="cursor:pointer;margin-bottom:4px" onclick="abrirListaEtapa(\''+es(et)+'\')"><div class="bl">'+es(et)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(n/Math.max(totCli,1)*100)+'%;background:'+col+'"></div></div><div class="bv">'+n+'</div><div style="font-size:10px;color:var(--muted);width:30px;text-align:right">'+pct+'%</div></div>';
  });
  SA.forEach(function(et){var n=cliBase.filter(function(c){return c.etapaEmbudo===et;}).length;if(!n)return;emh+='<div class="br"><div class="bl" style="color:var(--red)">'+es(et)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(n/totCli*100)+'%;background:var(--red);opacity:.4"></div></div><div class="bv">'+n+'</div></div>';});
  emh+='</div>';
  h+=sG('Embudo de ventas (clickeable por etapa)',emh);
  // Clientes sin visitar
  var sv30l=clientes.filter(function(c){return !c.ul||dias(c.ul)>30;});
  var sv14l=clientes.filter(function(c){return c.ul&&dias(c.ul)>14&&dias(c.ul)<=30;});
  var sv7l=clientes.filter(function(c){return c.ul&&dias(c.ul)>7&&dias(c.ul)<=14;});
  var svh='';
  [{l:'+30 dias sin visita',n:sv30l.length,c:'var(--red)',ids:sv30l.map(function(c){return c.id;})},
   {l:'14 a 30 dias sin visita',n:sv14l.length,c:'var(--orange)',ids:sv14l.map(function(c){return c.id;})},
   {l:'7 a 14 dias sin visita',n:sv7l.length,c:'var(--yellow)',ids:sv7l.map(function(c){return c.id;})}
  ].forEach(function(item){
    if(!item.n)return;
    svh+='<div class="br" style="cursor:pointer;margin-bottom:4px" onclick="abrirListaDash('+JSON.stringify(item.ids).replace(/"/g,"'")+')">';
    svh+='<div class="bl">'+es(item.l)+'</div><div class="bt"><div class="bf" style="width:100%;background:'+item.c+';opacity:.2"></div></div>';
    svh+='<div class="bv" style="color:'+item.c+'">'+item.n+'</div>';
    svh+='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="'+item.c+'" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>';
  });
  if(!svh)svh='<div style="color:var(--green);font-size:13px">Todos los clientes visitados recientemente</div>';
  h+=sG('Clientes sin visitar',svh);
  // Causas no venta
  var nv=vis.filter(function(v){return v.vendio===false&&v.razones;});
  if(nv.length){
    var cau={};nv.forEach(function(v){var rs=Array.isArray(v.razones)?v.razones:[v.razones];rs.forEach(function(r){if(r)cau[r]=(cau[r]||0)+1;});});
    var cak=Object.keys(cau).map(function(k){return{k:k,n:cau[k]};}).sort(function(a,b){return b.n-a.n;});var mxc=cak[0]?cak[0].n:1;
    var cvh='<div class="bc">';cak.slice(0,6).forEach(function(x){cvh+='<div class="br"><div class="bl">'+es(x.k)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(x.n/mxc*100)+'%;background:var(--red)"></div></div><div class="bv">'+x.n+'</div></div>';});cvh+='</div>';
    h+=sG('Causas de no venta',cvh);
  }
  // Competencia
  var cmp={};cliBase.forEach(function(c){if(c.comp){c.comp.split(',').forEach(function(cv){var t=cv.trim();if(t&&t!=='Sin competencia')cmp[t]=(cmp[t]||0)+1;});}});
  var ca2=Object.keys(cmp).map(function(k){return{k:k,n:cmp[k]};}).sort(function(a,b){return b.n-a.n;});
  if(ca2.length){var mxk2=ca2[0].n;var cph='<div class="bc">';ca2.forEach(function(x){cph+='<div class="br"><div class="bl">'+es(x.k)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(x.n/mxk2*100)+'%;background:var(--orange)"></div></div><div class="bv">'+x.n+'</div></div>';});cph+='</div>';h+=sG('Presencia de competencia',cph);}
  // Tipos de negocio (clickeables)
  var tp={};cliBase.forEach(function(c){if(c.tipo)tp[c.tipo]=(tp[c.tipo]||0)+1;});
  var tpa=Object.keys(tp).map(function(k){return{k:k,n:tp[k]};}).sort(function(a,b){return b.n-a.n;});
  if(tpa.length){var mxt=tpa[0].n;var tph='<div class="bc">';tpa.forEach(function(x){tph+='<div class="br" style="cursor:pointer" onclick="abrirListaTipo(\''+es(x.k)+'\')"><div class="bl">'+es(x.k)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(x.n/mxt*100)+'%;background:var(--purple)"></div></div><div class="bv">'+x.n+'</div><div style="font-size:10px;color:var(--muted);width:28px;text-align:right">'+Math.round(x.n/Math.max(cliBase.length,1)*100)+'%</div></div>';});tph+='</div>';h+=sG('Tipos de negocio',tph);}
  // Barrios
  var bp={};cliBase.forEach(function(c){if(c.bar)bp[c.bar]=(bp[c.bar]||0)+1;});
  var bpa=Object.keys(bp).map(function(k){return{k:k,n:bp[k]};}).sort(function(a,b){return b.n-a.n;});
  if(bpa.length){var mxb=bpa[0].n;var bph='<div class="bc">';bpa.slice(0,10).forEach(function(x){bph+='<div class="br"><div class="bl">'+es(x.k)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(x.n/mxb*100)+'%;background:var(--cyan)"></div></div><div class="bv">'+x.n+'</div></div>';});bph+='</div>';h+=sG('Cobertura por barrio',bph);}
  // Tiempo en etapas embudo
  var teh='<div>';
  ET.filter(function(et){return et!=='Cliente Activo';}).forEach(function(et){
    var enE=prospectos.filter(function(c){return c.etapaEmbudo===et;});if(!enE.length)return;
    var ts=enE.map(function(c){return c.ul?dias(c.ul):null;}).filter(function(d){return d!==null;});
    var prom=ts.length?Math.round(ts.reduce(function(a,b){return a+b;},0)/ts.length):null;
    var col=EC[et]||'var(--muted)';
    teh+='<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--border)">';
    teh+='<div style="flex:1;font-size:13px;font-weight:600">'+es(et)+'</div>';
    teh+='<span style="background:rgba('+h2r(col)+',.15);color:'+col+';padding:3px 8px;border-radius:10px;font-size:11px;font-weight:700">'+enE.length+'</span>';
    if(prom!==null)teh+='<span style="font-size:11px;color:var(--muted);width:65px;text-align:right">~'+prom+' dias</span>';
    teh+='</div>';
  });
  teh+='</div>';
  h+=sG('Prospectos por etapa y tiempo promedio',teh);
  // Actividad reciente
  var recBase=visGlobal();
  var rec=recBase.filter(function(v){return dias(v.fecha)<=2;}).slice().reverse().slice(0,15);
  if(rec.length){
    var rh='';
    rec.forEach(function(v){var c=D.cli.find(function(x){return x.id===v.cid;});rh+='<div class="vh"><div class="vhd">'+fmt(v.fecha)+(v.vend?' · '+es(v.vend):'')+'</div><div class="vhr">'+es(c?c.nm:'?')+' — '+(v.tipo==='prospecto'?'Visita prospecto':v.vendio===true?'VENTA':'Sin venta')+'</div>'+(v.vendio===false&&v.razones?'<div class="vhx">'+es(Array.isArray(v.razones)?v.razones.join(', '):v.razones)+'</div>':'')+'</div>';});
    h+=sG('Actividad reciente (48hs)',rh);
  }
  // ── EMBUDO EN BARRAS DE PORCENTAJE ─────────────────────────────────
  h+=sG('Embudo de ventas - % por etapa'+(gVendSel?' ('+es(gVendSel)+')':''),embudoBarrasHTML(cliBase));

  // ── GRAFICOS DE TORTA ──────────────────────────────────────────────
  var paleta=['#22d3ee','#fb923c','#4ade80','#a78bfa','#fbbf24','#f87171','#38bdf8','#f472b6','#94a3b8','#facc15'];
  // 1. Distribucion por etapa del embudo
  var pEta=[];
  ET.concat(SA).forEach(function(et){var n=cliBase.filter(function(c){return (c.etapaEmbudo||(c.esP?'Nuevo Prospecto':'Cliente Activo'))===et;}).length;if(n)pEta.push({label:et,value:n,color:EC[et]||'var(--muted)'});});
  if(pEta.length)h+=sG('Distribucion por etapa del embudo',pieChartHTML(pEta));
  // 2. Distribucion por tipo de negocio
  var tpObj={};cliBase.forEach(function(c){if(c.tipo)tpObj[c.tipo]=(tpObj[c.tipo]||0)+1;});
  var tpArr=Object.keys(tpObj).map(function(k){return{label:k,value:tpObj[k]};}).sort(function(a,b){return b.value-a.value;});
  if(tpArr.length){
    var pTipo=tpArr.slice(0,7).map(function(x,i){return{label:x.label,value:x.value,color:paleta[i%paleta.length]};});
    var restoTipo=tpArr.slice(7).reduce(function(s,x){return s+x.value;},0);
    if(restoTipo)pTipo.push({label:'Otros',value:restoTipo,color:'var(--muted)'});
    h+=sG('Distribucion por tipo de negocio',pieChartHTML(pTipo));
  }
  // 3. Resultado de visitas en el periodo
  var vVenta=vis.filter(function(v){return v.vendio===true;}).length;
  var vSinVenta=vis.filter(function(v){return v.vendio===false;}).length;
  var vSinDef=vis.length-vVenta-vSinVenta;
  var pRes=[];
  if(vVenta)pRes.push({label:'Con venta',value:vVenta,color:'var(--green)'});
  if(vSinVenta)pRes.push({label:'Sin venta',value:vSinVenta,color:'var(--red)'});
  if(vSinDef)pRes.push({label:'Sin definir',value:vSinDef,color:'var(--muted)'});
  if(pRes.length)h+=sG('Resultado de visitas en el periodo',pieChartHTML(pRes));
  // 4. Actividad por vendedor (solo si no hay un vendedor especifico seleccionado)
  if(!gVendSel&&vendedores.length){
    var pVend=vendedores.map(function(u,i){return{label:u.n,value:D.vis.filter(function(v){var r=getPer();return v.vend===u.n&&v.fecha>=r.desde&&v.fecha<=r.hasta;}).length,color:paleta[i%paleta.length]};}).filter(function(x){return x.value>0;});
    if(pVend.length)h+=sG('Visitas por vendedor en el periodo',pieChartHTML(pVend));
  }
  h+='<button class="btn sec" onclick="expCSVAll()" style="margin-bottom:20px">Exportar todos los datos (Excel)</button>';
  document.getElementById('gDB').innerHTML=h;
}
// Grafico de torta con CSS conic-gradient + leyenda de porcentajes. datos=[{label,value,color}]
// Grafico de barras del embudo: % de contactos en cada etapa sobre el total.
// Usado en el Dashboard del admin (con filtro global) y en el EMBUDO del vendedor (sus datos).
function embudoBarrasHTML(lista){
  var total=lista.filter(function(c){
    var e=c.etapaEmbudo||(c.esP?'Nuevo Prospecto':'Cliente Activo');
    return e!=='No Le Interesa'&&e!=='Perdido';
  }).length;
  if(!total)return '<div class="empty">Sin contactos en el embudo</div>';
  var h='<div>';
  ET.forEach(function(et){
    var n=lista.filter(function(c){return(c.etapaEmbudo||(c.esP?'Nuevo Prospecto':'Cliente Activo'))===et;}).length;
    var pct=Math.round(n/total*100);
    var col=EC[et]||'var(--muted)';
    h+='<div style="margin-bottom:10px">';
    h+='<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span style="font-weight:700">'+es(et)+'</span><span style="color:'+col+';font-weight:800">'+n+' · '+pct+'%</span></div>';
    h+='<div style="height:16px;background:var(--s2);border-radius:8px;overflow:hidden"><div style="height:100%;width:'+pct+'%;background:'+col+';border-radius:8px;transition:width .3s"></div></div>';
    h+='</div>';
  });
  var salidas=lista.filter(function(c){return c.etapaEmbudo==='No Le Interesa'||c.etapaEmbudo==='Perdido';}).length;
  if(salidas)h+='<div style="font-size:11px;color:var(--muted);margin-top:4px">+ '+salidas+' fuera del embudo (No Le Interesa / Perdido)</div>';
  h+='</div>';
  return h;
}
function pieChartHTML(datos){
  var total=datos.reduce(function(s,d){return s+d.value;},0);
  if(!total)return '<div class="empty">Sin datos</div>';
  var acc=0;
  var stops=datos.map(function(d){
    var pct=d.value/total*100;var from=acc;acc+=pct;
    return d.color+' '+from.toFixed(2)+'% '+acc.toFixed(2)+'%';
  }).join(',');
  var h='<div class="pieWrap"><div class="pieChart" style="background:conic-gradient('+stops+')"></div><div class="pieLeg">';
  datos.forEach(function(d){
    var pct=Math.round(d.value/total*100);
    h+='<div class="pieLegItem"><span class="pieDot" style="background:'+d.color+'"></span><span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+es(d.label)+'</span><span style="color:var(--muted);flex-shrink:0">'+d.value+' ('+pct+'%)</span></div>';
  });
  h+='</div></div>';
  return h;
}
function abrirListaDash(ids){
  var cs=D.cli.filter(function(c){return ids.indexOf(c.id)>=0;});
  var h='<div style="font-size:11px;color:var(--muted);margin-bottom:10px">'+cs.length+' contactos</div>';
  cs.forEach(function(c){
    var d7=dias(c.ul);var col=d7===null?'var(--red)':d7>14?'var(--red)':d7>7?'var(--orange)':'var(--green)';
    h+='<div class="vh"><div class="vhd">'+es(c.nm)+(c.bar?' · '+es(c.bar):'')+'</div>';
    h+='<div class="vhr">'+(c.esP?es(c.etapaEmbudo||'Prospecto'):'Cliente activo')+(c.tipo?' · '+es(c.tipo):'')+'</div>';
    h+='<div class="vhx" style="color:'+col+'">Ultima visita: '+fmt(c.ul)+(c.uv?' · Ultima venta: '+fmt(c.uv):'')+'</div></div>';
  });
  oMod('Detalle ('+cs.length+')',h);
}
function abrirListaEtapa(eta){
  var cs=D.cli.filter(function(c){return c.etapaEmbudo===eta;});
  var h='<div style="font-size:11px;color:var(--muted);margin-bottom:10px">'+cs.length+' en "'+eta+'"</div>';
  cs.forEach(function(c){h+='<div class="vh"><div class="vhd">'+es(c.nm)+(c.bar?' · '+es(c.bar):'')+'</div><div class="vhr">'+(c.tipo?es(c.tipo):'Sin tipo')+'</div><div class="vhx">Ultima visita: '+fmt(c.ul)+'</div></div>';});
  oMod('Embudo: '+eta,h);
}
function abrirListaTipo(tipo){
  var cs=D.cli.filter(function(c){return c.tipo===tipo;});
  var h='<div style="font-size:11px;color:var(--muted);margin-bottom:10px">'+cs.length+' contactos de tipo '+tipo+'</div>';
  cs.forEach(function(c){h+='<div class="vh"><div class="vhd">'+es(c.nm)+(c.bar?' · '+es(c.bar):'')+'</div><div class="vhr">'+(c.esP?'Prospecto: '+es(c.etapaEmbudo||''):'Cliente activo')+'</div><div class="vhx">Ultima visita: '+fmt(c.ul)+'</div></div>';});
  oMod(tipo,h);
}
function expCSVAll(){
  var filas=[['Nombre','Tipo','Barrio','Direccion','Telefono','Es Prospecto','Etapa Embudo','Ultima Visita','Ultima Venta','Competencia','Freezer','Cal Ubic','Transito','Ingreso']];
  D.cli.forEach(function(c){
    filas.push([c.nm,c.tipo||'',c.bar||'',c.dir||'',c.tel||'',c.esP?'SI':'NO',c.etapaEmbudo||'',c.ul||'',c.uv||'',c.comp||'',c.cFr||'',c.calU||'',c.trans||'',c.ing||'']);
  });
  descargarXLSX(filas,'CRM-datos-'+today()+'.xlsx');
  toast('Excel exportado','ok');
}
// GERENTE CONTACTOS
var gCF2='Todos';
function renderGC(){
  var fs=['Todos','Clientes','Prospectos','Sin visitar','Con freezer','Deudores'];
  var fh=fs.map(function(f){return '<span class="fb'+(gCF2===f?' on':'')+'" onclick="sGCF(\''+f+'\')">'+f+'</span>';}).join('');
  // Filtros avanzados en desplegables (solo valores que existen en los datos)
  var base0=cliGlobal();
  function selOpts(campo,vacio){
    var s={};base0.forEach(function(c){var v=c[campo];if(campo==='comp'&&v){v.split(',').forEach(function(x){x=x.trim();if(x)s[x]=true;});}else if(v)s[v]=true;});
    var keys=Object.keys(s).sort();
    var o='<option value="">'+vacio+'</option>';
    keys.forEach(function(k){o+='<option value="'+es(k)+'"'+(gCFo[campo==='tipo'?'tipNeg':campo==='etapaEmbudo'?'eta':campo]===k?' selected':'')+'>'+es(k)+'</option>';});
    return o;
  }
  var estilo='background:var(--s2);color:var(--text);border:1px solid var(--border);border-radius:var(--rsm);padding:6px 10px;font-size:12px;cursor:pointer;max-width:160px';
  fh+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;width:100%">';
  fh+='<select onchange="gCFo.bar=this.value;renderGC()" style="'+estilo+'">'+selOpts('bar','Barrio: todos')+'</select>';
  fh+='<select onchange="gCFo.tipNeg=this.value;renderGC()" style="'+estilo+'">'+selOpts('tipo','Tipo negocio: todos')+'</select>';
  fh+='<select onchange="gCFo.comp=this.value;renderGC()" style="'+estilo+'">'+selOpts('comp','Competencia: toda')+'</select>';
  fh+='<select onchange="gCFo.frez=this.value;renderGC()" style="'+estilo+'">'+selOpts('cFr','Freezer: todos')+'</select>';
  fh+='<select onchange="gCFo.eta=this.value;renderGC()" style="'+estilo+'">'+selOpts('etapaEmbudo','Etapa: todas')+'</select>';
  fh+='<select onchange="gCFo.calU=this.value;renderGC()" style="'+estilo+'">'+selOpts('calU','Ubicacion: todas')+'</select>';
  var hayF=Object.keys(gCFo).some(function(k){return gCFo[k];});
  if(hayF)fh+='<button class="sm" onclick="limpiarGCFo()" style="font-size:11px;color:var(--red)">Limpiar</button>';
  fh+='<button class="sm g" onclick="document.getElementById(\'gCF\').scrollIntoView();renderGC()" style="font-size:11px">OK</button>';
  fh+='</div>';
  document.getElementById('gCF').innerHTML=fh;
  var q=(document.getElementById('gCS')&&document.getElementById('gCS').value||'').toLowerCase();
  var cs=base0.slice();
  if(gCFo.bar)cs=cs.filter(function(c){return c.bar===gCFo.bar;});
  if(gCFo.tipNeg)cs=cs.filter(function(c){return c.tipo===gCFo.tipNeg;});
  if(gCFo.comp)cs=cs.filter(function(c){return c.comp&&c.comp.includes(gCFo.comp);});
  if(gCFo.frez)cs=cs.filter(function(c){return c.cFr===gCFo.frez;});
  if(gCFo.eta)cs=cs.filter(function(c){return c.etapaEmbudo===gCFo.eta;});
  if(gCFo.calU)cs=cs.filter(function(c){return c.calU===gCFo.calU;});
  if(gCF2==='Clientes')cs=cs.filter(function(c){return !c.esP;});
  else if(gCF2==='Prospectos')cs=cs.filter(function(c){return c.esP;});
  else if(gCF2==='Sin visitar')cs=cs.filter(function(c){return !c.ul;});
  else if(gCF2==='Con freezer')cs=cs.filter(function(c){return c.cFr==='Propio';});
  else if(gCF2==='Deudores')cs=cs.filter(function(c){return c.deu;});
  if(q)cs=cs.filter(function(c){return c.nm.toLowerCase().includes(q)||(c.dir||'').toLowerCase().includes(q)||(c.bar||'').toLowerCase().includes(q);});
  cs.sort(function(a,b){return(a.nm||'').localeCompare(b.nm||'');});
  var h='<div style="padding:8px 14px;font-size:11px;color:var(--muted);font-weight:700">'+cs.length+' REGISTROS</div>';
  if(!cs.length){h+='<div class="empty">Sin resultados</div>';document.getElementById('gCB').innerHTML=h;return;}
  cs.forEach(function(c){
    var d7=dias(c.ul);var col=d7===null?'var(--red)':d7>14?'var(--red)':d7>7?'var(--orange)':'var(--green)';
    h+='<div class="cc" onclick="aFicha(\''+c.id+'\')">';
    h+='<div style="display:flex;align-items:flex-start;gap:10px"><div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:700">'+es(c.nm)+'</div>';
    if(c.fan&&c.fan.trim().toLowerCase()!==c.nm.trim().toLowerCase())h+='<div style="font-size:13px;font-weight:700;color:var(--cyan)">'+es(c.fan)+'</div>';
    h+='<div style="font-size:12px;color:var(--muted)">'+es(c.dir||'')+(c.bar?' · '+es(c.bar):'')+'</div>';
    h+='<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">';
    h+=(c.esP?'<span class="tg o">'+es(c.etapaEmbudo||'PROSPECTO')+'</span>':'<span class="tg g">CLIENTE</span>');
    if(c.vend)h+='<span class="tg m">'+es(c.vend)+'</span>';
    if(c.deu)h+='<span style="background:var(--red);color:#fff;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:900;letter-spacing:.5px">⚠ DEUDOR</span>';
    h+='</div></div>';
    h+='<div style="font-size:11px;color:'+col+';text-align:right;flex-shrink:0">'+(c.ul?fmt(c.ul):'Sin visitar')+'</div></div></div>';
  });
  document.getElementById('gCB').innerHTML=h;
}
function sGCF(f){gCF2=f;renderGC();}
var gCFo={bar:'',comp:'',frez:'',tipNeg:'',eta:'',calU:''};
function limpiarGCFo(){gCFo={bar:'',comp:'',frez:'',tipNeg:'',eta:'',calU:''};renderGC();}
function aFicha(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var vs=D.vis.filter(function(v){return v.cid===id;}).slice().reverse();
  var h='<div style="margin-bottom:14px"><div style="font-size:18px;font-weight:900">'+es(c.nm)+'</div>';
  h+=(c.fan&&c.fan.trim().toLowerCase()!==c.nm.trim().toLowerCase()?'<div style="font-size:15px;font-weight:700;color:var(--cyan)">'+es(c.fan)+'</div>':'');
  h+='<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">';
  h+=(c.esP?'<span class="tg o">'+es(c.etapaEmbudo||'PROSPECTO')+'</span>':'<span class="tg g">CLIENTE</span>');
  if(c.deu)h+='<span style="background:var(--red);color:#fff;padding:3px 8px;border-radius:6px;font-size:10px;font-weight:900">⚠ DEUDOR</span>';
  if(c.vend)h+='<span class="tg m">'+es(c.vend)+'</span>';
  h+='</div></div>';
  h+='<div class="div"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0">';
  if(c.tel)h+='<div><div class="fl">Telefono</div><div style="font-size:14px;font-weight:700">'+es(c.tel)+'</div></div>';
  if(c.dir)h+='<div><div class="fl">Direccion</div><div style="font-size:14px;font-weight:700">'+es(c.dir)+'</div></div>';
  if(c.prov)h+='<div><div class="fl">Provincia</div><div style="font-size:14px;font-weight:700">'+es(c.prov)+'</div></div>';
  if(c.ciu)h+='<div><div class="fl">Ciudad</div><div style="font-size:14px;font-weight:700">'+es(c.ciu)+'</div></div>';
  if(c.bar)h+='<div><div class="fl">Barrio</div><div style="font-size:14px;font-weight:700">'+es(c.bar)+'</div></div>';
  if(c.tipo)h+='<div><div class="fl">Tipo</div><div style="font-size:14px;font-weight:700">'+es(c.tipo)+'</div></div>';
  if(c.cFr)h+='<div><div class="fl">Freezer</div><div style="font-size:14px;font-weight:700">'+es(c.cFr)+'</div></div>';
  if(c.calU)h+='<div><div class="fl">Ubicacion</div><div style="font-size:14px;font-weight:700">'+es(c.calU)+'</div></div>';
  if(c.trans)h+='<div><div class="fl">Transito</div><div style="font-size:14px;font-weight:700">'+es(c.trans)+'</div></div>';
  if(c.ul)h+='<div><div class="fl">Ultima visita</div><div style="font-size:14px;font-weight:700">'+fmt(c.ul)+'</div></div>';
  if(c.uv)h+='<div><div class="fl">Ultima venta</div><div style="font-size:14px;font-weight:700;color:var(--green)">'+fmt(c.uv)+'</div></div>';
  h+='</div>';
  if(c.prods&&c.prods.length)h+='<div class="fl">Vende</div><div style="font-size:13px;margin-bottom:10px">'+es(c.prods.join(' · '))+'</div>';
  if(c.comp){h+='<div class="fl">Competencia</div><div style="font-size:13px;margin-bottom:10px">'+es(c.comp)+'</div>';}
  if(c.obs){h+='<div class="fl">Observaciones</div><div style="font-size:13px;color:var(--muted);margin-bottom:10px">'+es(c.obs)+'</div>';}
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:14px 0">';
  h+='<button class="btn" onclick="cMod();editarContacto(\''+id+'\')" style="margin:0">Editar</button>';
  h+='<button class="btn sec" onclick="cMod();abrirVisita(\''+id+'\')" style="margin:0">Registrar visita</button>';
  h+='</div>';
  if(c.tel){
    h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">';
    h+='<button class="btn sec" onclick="envWA(\''+id+'\')" style="margin:0">Enviar WhatsApp</button>';
    // Ubicacion: dos caminos distintos y claros
    if(c.lat||c.gpsOk){
      h+='<div style="font-size:12px;margin:0 0 6px">'+(c.gpsOk?'<span style="color:var(--green)">&#128205; Ubicacion confirmada (en el mapa)</span>':'<span style="color:var(--orange)">&#128205; Ubicacion sin confirmar (no aparece en el mapa)</span>')+' &middot; <span style="color:var(--muted)">'+fmt(c.gpsF||'')+'</span></div>';
    }
    h+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin:0 0 8px">';
    h+='<button class="btn sec" onclick="marcarUbicacion(\''+id+'\')" style="margin:0;flex:1;min-width:130px;font-size:12px">&#128205; GPS (en el local)</button>';
    if((c.dir||'').trim())h+='<button class="btn sec" onclick="ubicarPorDireccion(\''+id+'\')" style="margin:0;flex:1;min-width:130px;font-size:12px">&#128506; Ubicar por direccion</button>';
    h+='</div>';
    if(c.lat)h+='<button class="btn sec" onclick="borrarUbicacion(\''+id+'\')" style="margin:0 0 8px;font-size:11px;color:var(--orange)">&#9851; Quitar del mapa</button>';
    h+='<button class="btn sec" onclick="exportarVCard(\''+id+'\')" style="margin:0">📋 Agregar a agenda</button>';
    h+='</div>';
  }
  h+='<div class="div"></div><div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin:12px 0 8px">HISTORIAL DE VISITAS ('+vs.length+')</div>';
  if(!vs.length){h+='<div style="color:var(--muted);font-size:13px">Sin visitas registradas</div>';}
  vs.forEach(function(v){
    h+='<div class="vh"><div class="vhd">'+fmt(v.fecha)+(v.vend?' · '+es(v.vend):'')+'</div>';
    if(v.tipo==='cliente'){
      h+='<div class="vhr">'+(v.vendio===true?'Venta realizada':v.vendio===false?'Sin venta':'Sin dato de venta')+'</div>';
      if(v.vendio===false&&v.razones)h+='<div class="vhx">'+es(Array.isArray(v.razones)?v.razones.join(', '):v.razones)+'</div>';
      if(v.iE)h+='<div class="vhx">Ext: '+es(v.iE)+'</div>';
      if(v.frfX&&v.frfX!=='OK')h+='<div class="vhx" style="color:var(--orange)">Freezer ext: '+es(v.frfX)+'</div>';
      if(v.pop)h+='<div class="vhx">POP: '+es(v.pop)+'</div>';
    } else {
      h+='<div class="vhr">Visita a prospecto</div>';
      if(v.eta)h+='<div class="vhx">Etapa: '+es(v.eta)+'</div>';
    }
    if(v.nt)h+='<div class="vhx" style="margin-top:3px;font-style:italic">'+es(v.nt)+'</div>';
    h+='</div>';
  });
  h+='<div class="div"></div><button class="btn red" style="margin-top:12px" onclick="elimC(\''+id+'\')">Eliminar contacto</button>';
  // Reasignar vendedor
  var vendsH2=D.usrs.filter(function(u){return u.r==='vendedor';}).map(function(u){return '<option value="'+es(u.n)+'"'+(c.vend===u.n?' selected':'')+'>'+es(u.n)+'</option>';}).join('');
  h+='<div class="div"></div><div class="fg"><label class="fl">Vendedor asignado</label><select class="fi" onchange="reasignarContacto(\''+id+'\',this.value)"><option value="">Sin asignar</option>'+vendsH2+'</select></div>';
  // Historial de trazabilidad
  var lh=htmlLog(id,30);
  if(lh){h+='<div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin:12px 0 8px">HISTORIAL DE CAMBIOS</div>'+lh;}
  oMod(c.nm,h);
}
// Muestra la lista de contactos del vendedor elegido, con checkbox y buscador,
// para tildar SOLO los que se quieren pasar a otro vendedor.
function renderListaReasignar(){
  var de=document.getElementById('reasDe').value;
  var cont=document.getElementById('reasLista');if(!cont)return;
  if(!de){cont.innerHTML='';return;}
  var q=(document.getElementById('reasQ')&&document.getElementById('reasQ').value||'').toLowerCase();
  var lista=D.cli.filter(function(c){return c.vend===de&&(!q||(c.nm||'').toLowerCase().includes(q)||(c.fan||'').toLowerCase().includes(q)||(c.bar||'').toLowerCase().includes(q));}).sort(function(a,b){return(a.nm||'').localeCompare(b.nm||'');});
  var otros='<option value="">Pasar a...</option>';
  D.usrs.filter(function(u){return u.r==='vendedor'&&u.n!==de;}).forEach(function(u){otros+='<option value="'+es(u.n)+'">'+es(u.n)+'</option>';});
  var h='<div class="srch" style="margin:10px 0"><input type="text" id="reasQ" placeholder="Buscar en la lista..." oninput="renderListaReasignar()" value="'+es(q)+'" style="background:none;border:none;outline:none;color:var(--text);font-size:14px;width:100%;font-family:inherit"></div>';
  h+='<div style="max-height:300px;overflow-y:auto;border:1px solid var(--border);border-radius:var(--rsm);padding:6px">';
  if(!lista.length)h+='<div class="empty" style="padding:14px">Sin contactos</div>';
  lista.forEach(function(c){
    h+='<label style="display:flex;align-items:center;gap:9px;padding:8px 4px;border-bottom:1px solid var(--border);cursor:pointer">';
    h+='<input type="checkbox" class="reasChk" value="'+es(c.id)+'" style="width:18px;height:18px;flex-shrink:0">';
    h+='<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">'+es(c.nm)+'</div>';
    if(c.fan)h+='<div style="font-size:12px;color:var(--cyan)">'+es(c.fan)+'</div>';
    h+='<div style="font-size:11px;color:var(--muted)">'+es(c.bar||c.ciu||'')+(c.tipo?' · '+es(c.tipo):'')+'</div></div></label>';
  });
  h+='</div>';
  h+='<div style="display:flex;gap:8px;align-items:center;margin-top:10px;flex-wrap:wrap">';
  h+='<label style="font-size:12px;color:var(--muted);display:flex;align-items:center;gap:5px;cursor:pointer"><input type="checkbox" onchange="document.querySelectorAll(\'.reasChk\').forEach(function(x){x.checked=this.checked}.bind(this))" style="width:16px;height:16px">Todos</label>';
  h+='<select class="fi" id="reasA" style="margin:0;flex:1;min-width:120px">'+otros+'</select>';
  h+='<button class="btn sec" onclick="ejecutarReasignar(\''+es(de)+'\')" style="margin:0">Pasar seleccionados</button>';
  h+='</div>';
  cont.innerHTML=h;
}
function ejecutarReasignar(de){
  if(soloLectura())return;
  var a=document.getElementById('reasA').value;
  if(!a){toast('Elegi a que vendedor pasarlos','err');return;}
  var ids=Array.prototype.map.call(document.querySelectorAll('.reasChk:checked'),function(x){return x.value;});
  if(!ids.length){toast('No seleccionaste ningun contacto','err');return;}
  if(!confirm('Pasar '+ids.length+' contacto'+(ids.length!==1?'s':'')+' de '+de+' a '+a+'?'))return;
  ids.forEach(function(id){
    var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
    c.vend=a;c._modBy=D.user?D.user.n:'?';c._modAt=new Date().toISOString();
    fsSetContacto(c);
    logEvento('reasignacion',c.id,c.nm,'Reasignado: '+de+' -> '+a,de,a);
  });
  toast(ids.length+' contacto'+(ids.length!==1?'s':'')+' pasado'+(ids.length!==1?'s':'')+' a '+a,'ok');
  renderVendBtns();renderGCfg();
}
function reasignarContacto(id,nuevoVend){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var ant=c.vend||'Sin asignar';
  c.vend=nuevoVend;
  c._modBy=D.user?D.user.n:'?';
  c._modAt=new Date().toISOString();
  logEvento('reasignacion',id,c.nm,'Reasignado: '+ant+' -> '+(nuevoVend||'Sin asignar'),ant,nuevoVend);
  fsSetContacto(c);
  toast('Reasignado a '+( nuevoVend||'ninguno'),'ok');
}
function elimC(id){
  if(!confirm('Eliminar permanentemente este contacto y todas sus visitas?'))return;
  var visDelContacto=D.vis.filter(function(v){return v.cid===id;});
  D.cli=D.cli.filter(function(c){return c.id!==id;});
  D.vis=D.vis.filter(function(v){return v.cid!==id;});
  var batch=fsDB.batch();
  batch.delete(fsDB.collection('contactos').doc(id));
  visDelContacto.forEach(function(v){batch.delete(fsDB.collection('visitas').doc(v.id));});
  batch.commit().catch(function(e){toast('Error al eliminar en el servidor','err');});
  cMod();renderGC();toast('Eliminado','ok');
}
// GERENTE EMBUDO
var gEF2='Todos';
function renderGE(){
  var all=['Todos'].concat(ET,SA);
  document.getElementById('gEF').innerHTML=all.map(function(e){return '<span class="fb'+(gEF2===e?' on':'')+'" onclick="sGEF(\''+es(e)+'\')">'+es(e)+'</span>';}).join('');
  var base=cliGlobal();
  var cs=gEF2==='Todos'?base.slice():base.filter(function(c){return c.etapaEmbudo===gEF2;});
  var h='<div style="padding:8px 14px;font-size:11px;color:var(--muted);font-weight:700">'+cs.length+' REGISTROS</div>';
  if(!cs.length){h+='<div class="empty">Sin contactos</div>';document.getElementById('gEB').innerHTML=h;return;}
  cs.forEach(function(c){
    var col=EC[c.etapaEmbudo]||'var(--muted)';var nv=D.vis.filter(function(v){return v.cid===c.id;}).length;
    h+='<div class="cc" onclick="aFicha(\''+c.id+'\')" style="cursor:pointer"><div style="display:flex;align-items:center;gap:10px"><div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:700">'+es(c.nm)+'</div>'+(c.fan&&c.fan.trim().toLowerCase()!==c.nm.trim().toLowerCase()?'<div style="font-size:13px;font-weight:700;color:var(--cyan)">'+es(c.fan)+'</div>':'')+'<div style="font-size:12px;color:var(--muted)">'+es(c.bar||'')+(c.tipo?' · '+es(c.tipo):'')+'</div></div><div style="text-align:right"><span style="background:rgba('+h2r(col)+',.15);color:'+col+';padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700">'+es(c.etapaEmbudo||'')+'</span><div style="font-size:10px;color:var(--muted);margin-top:3px">'+nv+' visita'+(nv!==1?'s':'')+'</div></div></div></div>';
  });
  document.getElementById('gEB').innerHTML=h;
}
function sGEF(f){gEF2=f;renderGE();}
// GERENTE VISITAS
// ── VISITAS CON FILTROS COMPLETOS ─────────────────────────────────────
var gVF={per:'30d',vend:'',res:'',tipNeg:'',prov:'',eta:'',bar:'',comp:'',q:'',desde:'',hasta:''};
// ── PANEL DE CONTROL DE VENDEDORES (pestaña Visitas del admin) ────────
// KPIs, grilla dia-por-dia y comparativa semanal para controlar el trabajo de cada vendedor.
function kpisVendedor(vend,desde,hasta){
  var vs=D.vis.filter(function(v){return v.vend===vend&&v.fecha>=desde&&v.fecha<=hasta;});
  var ventas=vs.filter(function(v){return v.vendio===true;}).length;
  var diasTrab={};vs.forEach(function(v){diasTrab[v.fecha]=true;});
  var nDias=Object.keys(diasTrab).length;
  // Dias habiles del periodo sin ninguna actividad
  var sinAct=0;var d=new Date(desde+'T12:00:00');var fin=new Date(hasta+'T12:00:00');var hoyS=today();
  while(d<=fin){
    var ds=fechaLocal(d);
    if(d.getDay()>=1&&d.getDay()<=5&&ds<=hoyS&&!diasTrab[ds])sinAct++;
    d.setDate(d.getDate()+1);
  }
  return{visitas:vs.length,ventas:ventas,efect:vs.length?Math.round(ventas/vs.length*100):0,prom:nDias?(vs.length/nDias).toFixed(1):'0',diasTrab:nDias,sinAct:sinAct};
}
function panelControlHTML(vend,desde,hasta){
  var k=kpisVendedor(vend,desde,hasta);
  var h='<div class="card" style="margin:10px 14px">';
  h+='<div class="ct">CONTROL: '+es(vend).toUpperCase()+'</div>';
  // KPIs
  h+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px">';
  h+='<div class="sb"><div class="sn">'+k.visitas+'</div><div class="sl2">Visitas</div></div>';
  h+='<div class="sb"><div class="sn" style="color:'+(k.efect>=30?'var(--green)':k.efect>=15?'var(--orange)':'var(--red)')+'">'+k.efect+'%</div><div class="sl2">Efectividad</div></div>';
  h+='<div class="sb"><div class="sn">'+k.prom+'</div><div class="sl2">Visitas/dia trab.</div></div>';
  h+='<div class="sb"><div class="sn" style="color:'+(k.sinAct===0?'var(--green)':k.sinAct<=2?'var(--orange)':'var(--red)')+'">'+k.sinAct+'</div><div class="sl2">Dias habiles sin actividad</div></div>';
  h+='</div>';
  // Comparativa semana actual vs anterior
  var lun=new Date();var dow=lun.getDay()===0?6:lun.getDay()-1;lun.setDate(lun.getDate()-dow);
  var lunS=fechaLocal(lun);
  var lunAnt=new Date(lun);lunAnt.setDate(lunAnt.getDate()-7);var lunAntS=fechaLocal(lunAnt);
  var domAnt=new Date(lun);domAnt.setDate(domAnt.getDate()-1);var domAntS=fechaLocal(domAnt);
  var kAct=kpisVendedor(vend,lunS,today());
  var kAnt=kpisVendedor(vend,lunAntS,domAntS);
  function flecha(a,b){if(a>b)return '<span style="color:var(--green)">&#9650; +'+(a-b)+'</span>';if(a<b)return '<span style="color:var(--red)">&#9660; '+(a-b)+'</span>';return '<span style="color:var(--muted)">=</span>';}
  h+='<div style="font-size:11px;font-weight:700;color:var(--muted);margin-bottom:6px">ESTA SEMANA VS. LA ANTERIOR</div>';
  h+='<div style="display:flex;gap:16px;flex-wrap:wrap;font-size:13px;margin-bottom:14px">';
  h+='<div>Visitas: <b>'+kAct.visitas+'</b> '+flecha(kAct.visitas,kAnt.visitas)+' <span style="color:var(--muted);font-size:11px">(ant: '+kAnt.visitas+')</span></div>';
  h+='<div>Ventas: <b>'+kAct.ventas+'</b> '+flecha(kAct.ventas,kAnt.ventas)+' <span style="color:var(--muted);font-size:11px">(ant: '+kAnt.ventas+')</span></div>';
  h+='<div>Efectividad: <b>'+kAct.efect+'%</b> '+flecha(kAct.efect,kAnt.efect)+' <span style="color:var(--muted);font-size:11px">(ant: '+kAnt.efect+'%)</span></div>';
  h+='</div>';
  // Grilla dia por dia del periodo (ultimos 14 dias habiles como maximo visual)
  h+='<div style="font-size:11px;font-weight:700;color:var(--muted);margin-bottom:6px">DIA POR DIA</div>';
  h+='<div style="display:flex;gap:4px;flex-wrap:wrap">';
  var dd=new Date(hasta+'T12:00:00');var celdas=[];var hoyS2=today();
  while(celdas.length<14&&fechaLocal(dd)>=desde){
    var ds2=fechaLocal(dd);
    if(dd.getDay()>=1&&dd.getDay()<=5&&ds2<=hoyS2){
      var vsD=D.vis.filter(function(v){return v.vend===vend&&v.fecha===ds2;});
      var venD=vsD.filter(function(v){return v.vendio===true;}).length;
      var col=vsD.length===0?'var(--red)':venD>0?'var(--green)':'var(--orange)';
      var nom=dd.toLocaleDateString('es-AR',{weekday:'short',day:'numeric'});
      celdas.push('<div onclick="verDiaVendedor(\''+es(vend)+'\',\''+ds2+'\')" style="cursor:pointer;background:var(--s2);border:1px solid '+col+';border-radius:8px;padding:6px 8px;text-align:center;min-width:52px"><div style="font-size:9px;color:var(--muted)">'+nom+'</div><div style="font-size:13px;font-weight:800;color:'+col+'">'+vsD.length+'</div><div style="font-size:9px;color:var(--muted)">'+venD+' vta'+(venD!==1?'s':'')+'</div></div>');
    }
    dd.setDate(dd.getDate()-1);
  }
  h+=celdas.reverse().join('');
  h+='</div>';
  h+='<div style="font-size:10px;color:var(--muted);margin-top:6px">Verde: con venta &middot; Naranja: visitas sin venta &middot; Rojo: sin actividad &middot; Toca un dia para ver el detalle</div>';
  h+='</div>';
  return h;
}
function verDiaVendedor(vend,fecha){
  var vs=D.vis.filter(function(v){return v.vend===vend&&v.fecha===fecha;});
  var nom=new Date(fecha+'T12:00:00').toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long'});
  var h='';
  if(!vs.length)h='<div class="empty">Sin visitas registradas ese dia</div>';
  vs.forEach(function(v){
    var c=D.cli.find(function(x){return x.id===v.cid;});
    h+='<div class="vh" style="border-left:3px solid '+(v.vendio===true?'var(--green)':'var(--border)')+'">';
    h+='<div class="vhd">'+es(c?c.nm:'?')+'</div>';
    h+='<div class="vhr">'+(v.tipo==='prospecto'?'Visita a prospecto':v.vendio===true?'Venta realizada':'Sin venta')+'</div>';
    if(v.nt)h+='<div class="vhx" style="font-style:italic">'+es(v.nt)+'</div>';
    h+='</div>';
  });
  oMod(es(vend)+' - '+nom.charAt(0).toUpperCase()+nom.slice(1),h);
}
function renderGV(){
  var vendedores=D.usrs.filter(function(u){return u.r==='vendedor';});
  var hoy=today();
  // Barra de filtros
  var h='<div style="padding:10px 14px;background:var(--s1);border-bottom:1px solid var(--border)">';
  // Fila 1: período + vendedor
  h+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">';
  [{k:'h',l:'Hoy'},{k:'7d',l:'7 dias'},{k:'30d',l:'30 dias'},{k:'mes',l:'Este mes'},{k:'all',l:'Todas'},{k:'rng',l:'Rango'}].forEach(function(p){
    h+='<span class="fb'+(gVF.per===p.k?' on':'')+'" onclick="gVF.per=\''+p.k+'\';renderGV()" style="font-size:11px">'+p.l+'</span>';
  });
  h+='</div>';
  // Rango personalizado
  if(gVF.per==='rng'){
    h+='<div style="display:flex;gap:8px;margin-bottom:8px;align-items:center">';
    h+='<input type="date" class="fi" id="vDesde" value="'+es(gVF.desde)+'" oninput="gVF.desde=this.value;renderGV()" style="flex:1;margin:0;padding:7px 10px;font-size:12px">';
    h+='<span style="color:var(--muted);font-size:12px">a</span>';
    h+='<input type="date" class="fi" id="vHasta" value="'+es(gVF.hasta||hoy)+'" oninput="gVF.hasta=this.value;renderGV()" style="flex:1;margin:0;padding:7px 10px;font-size:12px">';
    h+='</div>';
  }
  // Fila 2: vendedor + resultado
  h+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">';
  h+='<select onchange="gVF.vend=this.value;renderGV()" style="background:var(--s2);color:var(--text);border:1px solid var(--border);border-radius:var(--rsm);padding:6px 10px;font-size:12px;cursor:pointer"><option value="">Todos los vendedores</option>';
  vendedores.forEach(function(u){h+='<option value="'+es(u.n)+'"'+(gVF.vend===u.n?' selected':'')+'>'+es(u.n)+'</option>';});
  h+='</select>';
  h+='<select onchange="gVF.res=this.value;renderGV()" style="background:var(--s2);color:var(--text);border:1px solid var(--border);border-radius:var(--rsm);padding:6px 10px;font-size:12px;cursor:pointer"><option value="">Todo resultado</option><option value="venta"'+(gVF.res==='venta'?' selected':'')+'>Con venta</option><option value="sinventa"'+(gVF.res==='sinventa'?' selected':'')+'>Sin venta</option><option value="prospecto"'+(gVF.res==='prospecto'?' selected':'')+'>Visita prospecto</option></select>';
  h+='<select onchange="gVF.tipNeg=this.value;renderGV()" style="background:var(--s2);color:var(--text);border:1px solid var(--border);border-radius:var(--rsm);padding:6px 10px;font-size:12px;cursor:pointer"><option value="">Tipo de negocio</option>';
  (D.cfg.tipos||[]).forEach(function(t){h+='<option value="'+es(t)+'"'+(gVF.tipNeg===t?' selected':'')+'>'+es(t)+'</option>';});
  h+='</select>';
  h+='<select onchange="gVF.eta=this.value;renderGV()" style="background:var(--s2);color:var(--text);border:1px solid var(--border);border-radius:var(--rsm);padding:6px 10px;font-size:12px;cursor:pointer"><option value="">Etapa embudo</option>';
  ET.concat(SA).forEach(function(e){h+='<option value="'+es(e)+'"'+(gVF.eta===e?' selected':'')+'>'+es(e)+'</option>';});
  h+='</select>';
  h+='</div>';
  // Búsqueda texto + exportar
  h+='<div style="display:flex;gap:6px;align-items:center">';
  h+='<div class="srch" style="flex:1;margin:0"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" placeholder="Buscar cliente..." value="'+es(gVF.q)+'" oninput="gVF.q=this.value;renderGV()" style="background:none;border:none;outline:none;color:var(--text);font-size:13px;font-family:inherit;width:100%"></div>';
  h+='<button class="sm" onclick="gVF={per:\'30d\',vend:\'\',res:\'\',tipNeg:\'\',prov:\'\',eta:\'\',q:\'\',desde:\'\',hasta:\'\'};renderGV()" style="font-size:11px">Limpiar</button>';
  h+='<button class="sm g" onclick="expCSV()">Excel</button>';
  if(gVF.vend){h+='<button class="sm" onclick="abrirInformeVendedor(\''+es(gVF.vend)+'\')" style="color:var(--cyan)">Informe completo</button>';}
  h+='</div></div>';
  // Panel de control: del vendedor elegido (global o local), o comparativa de todos
  var perCtl=(function(){var hoy2=today();var d30=new Date();d30.setDate(d30.getDate()-30);
    if(gVF.per==='h')return{desde:hoy2,hasta:hoy2};
    if(gVF.per==='7d'){var d7=new Date();d7.setDate(d7.getDate()-7);return{desde:fechaLocal(d7),hasta:hoy2};}
    if(gVF.per==='mes')return{desde:hoy2.slice(0,7)+'-01',hasta:hoy2};
    if(gVF.per==='rng'&&gVF.desde)return{desde:gVF.desde,hasta:gVF.hasta||hoy2};
    return{desde:fechaLocal(d30),hasta:hoy2};})();
  var vendCtl=gVendSel||gVF.vend;
  if(vendCtl){
    h+=panelControlHTML(vendCtl,perCtl.desde,perCtl.hasta);
  } else {
    // Comparativa rapida de todos los vendedores (clickeable para ver el panel completo)
    h+='<div class="card" style="margin:10px 14px"><div class="ct">CONTROL RAPIDO (toca un vendedor)</div>';
    vendedores.forEach(function(u){
      var k=kpisVendedor(u.n,perCtl.desde,perCtl.hasta);
      h+='<div class="sr" style="cursor:pointer" onclick="setVendGlobal(\''+es(u.n)+'\')">';
      h+='<div style="flex:1;font-size:13px;font-weight:700">'+es(u.n)+'</div>';
      h+='<div style="display:flex;gap:14px;font-size:12px">';
      h+='<span>'+k.visitas+' vis.</span><span style="color:var(--green)">'+k.ventas+' vtas.</span>';
      h+='<span style="color:'+(k.efect>=30?'var(--green)':k.efect>=15?'var(--orange)':'var(--red)')+'">'+k.efect+'%</span>';
      h+='<span style="color:'+(k.sinAct===0?'var(--green)':'var(--red)')+'">'+k.sinAct+' sin act.</span>';
      h+='</div></div>';
    });
    h+='</div>';
  }
  // Aplicar filtros (el filtro global de vendedor prevalece sobre todo)
  var vs=visGlobal().slice().reverse();
  var desde,hasta=hoy;
  if(gVF.per==='h'){desde=hoy;}
  else if(gVF.per==='7d'){var d7=new Date();d7.setDate(d7.getDate()-7);desde=fechaLocal(d7);}
  else if(gVF.per==='30d'){var d30=new Date();d30.setDate(d30.getDate()-30);desde=fechaLocal(d30);}
  else if(gVF.per==='mes'){desde=hoy.slice(0,7)+'-01';}
  else if(gVF.per==='rng'){desde=gVF.desde;hasta=gVF.hasta||hoy;}
  if(desde)vs=vs.filter(function(v){return v.fecha>=desde&&v.fecha<=hasta;});
  if(gVF.vend)vs=vs.filter(function(v){return v.vend===gVF.vend;});
  if(gVF.res==='venta')vs=vs.filter(function(v){return v.vendio===true;});
  else if(gVF.res==='sinventa')vs=vs.filter(function(v){return v.vendio===false;});
  else if(gVF.res==='prospecto')vs=vs.filter(function(v){return v.tipo==='prospecto';});
  if(gVF.tipNeg||gVF.prov||gVF.eta||gVF.bar||gVF.comp){
    vs=vs.filter(function(v){
      var c=D.cli.find(function(x){return x.id===v.cid;});
      if(!c)return false;
      if(gVF.tipNeg&&c.tipo!==gVF.tipNeg)return false;
      if(gVF.prov&&c.prov!==gVF.prov)return false;
      if(gVF.eta&&c.etapaEmbudo!==gVF.eta)return false;
      if(gVF.bar&&c.bar!==gVF.bar)return false;
      if(gVF.comp&&!(c.comp&&c.comp.includes(gVF.comp)))return false;
      return true;
    });
  }
  if(gVF.q){var q=gVF.q.toLowerCase();vs=vs.filter(function(v){var c=D.cli.find(function(x){return x.id===v.cid;});return c&&((c.nm||'').toLowerCase().includes(q)||(c.fan||'').toLowerCase().includes(q));});}
  // Resultado
  var ventas=vs.filter(function(v){return v.vendio===true;}).length;
  var sinventa=vs.filter(function(v){return v.vendio===false;}).length;
  h+='<div style="display:flex;gap:6px;padding:10px 14px;border-bottom:1px solid var(--border);flex-wrap:wrap">';
  h+='<span style="font-size:11px;font-weight:700;color:var(--muted)">'+vs.length+' VISITAS</span>';
  h+='<span style="font-size:11px;color:var(--green)">'+ventas+' con venta</span>';
  h+='<span style="font-size:11px;color:var(--red)">'+sinventa+' sin venta</span>';
  if(vs.length>0)h+='<span style="font-size:11px;color:var(--cyan);margin-left:auto">'+Math.round(ventas/vs.length*100)+'% conversion</span>';
  h+='</div>';
  if(!vs.length){h+='<div class="empty">Sin visitas con los filtros actuales</div>';document.getElementById('gVB').innerHTML=h;return;}
  vs.forEach(function(v){
    var c=D.cli.find(function(x){return x.id===v.cid;});
    var res=v.tipo==='prospecto'?'Prospecto':v.vendio===true?'VENTA':'Sin venta';
    var col=v.tipo==='prospecto'?'var(--orange)':v.vendio===true?'var(--green)':'var(--red)';
    h+='<div class="vh" style="cursor:pointer" onclick="'+(c?'aFicha(\''+c.id+'\')':'')+'">';
    h+='<div style="display:flex;justify-content:space-between;align-items:center">';
    h+='<div class="vhd">'+fmt(v.fecha)+(v.vend?' · <span style="color:var(--cyan)">'+es(v.vend)+'</span>':'')+'</div>';
    h+='<span style="font-size:10px;font-weight:700;color:'+col+'">'+res+'</span></div>';
    h+='<div class="vhr">'+es(c?c.nm:'?')+(c&&c.fan&&c.fan.trim().toLowerCase()!==(c.nm||'').trim().toLowerCase()?' · <span style="color:var(--cyan);font-weight:700">'+es(c.fan)+'</span>':'')+(c&&c.tipo?' · '+es(c.tipo):'')+'</div>';
    if(c&&c.ciu)h+='<div class="vhx">'+es(c.ciu)+(c.bar?' · '+es(c.bar):'')+'</div>';
    if(v.vendio===false&&v.razones)h+='<div class="vhx" style="color:var(--red)">Motivo: '+es(Array.isArray(v.razones)?v.razones.join(', '):v.razones)+'</div>';
    if(v.nt)h+='<div class="vhx" style="font-style:italic">'+es(v.nt)+'</div>';
    h+='</div>';
  });
  document.getElementById('gVB').innerHTML=h;
}
function sGVF(f){gVF.per=f;renderGV();}
function expCSV(){
  var vs=D.vis.slice().reverse();
  var filas=[['Fecha','Vendedor','Cliente','Tipo negocio','Ciudad','Barrio','Tipo visita','Venta','Motivo','Etapa embudo','Notas']];
  vs.forEach(function(v){
    var c=D.cli.find(function(x){return x.id===v.cid;});
    var m=v.razones?(Array.isArray(v.razones)?v.razones.join('; '):v.razones):'';
    filas.push([v.fecha,v.vend||'',(c?c.nm:'?'),(c?c.tipo||'':''),(c?c.ciu||'':''),(c?c.bar||'':''),v.tipo||'',v.vendio===true?'SI':v.vendio===false?'NO':'',m,v.eta||c&&c.etapaEmbudo||'',v.nt||'']);
  });
  descargarXLSX(filas,'visitas_'+today()+'.xlsx');
  toast('Excel exportado ('+vs.length+' visitas)','ok');
}

// ── INFORME INDIVIDUAL POR VENDEDOR ───────────────────────────────────
var infVendPer='mes'; // periodo por defecto del informe individual
function abrirInformeVendedor(vend){
  infVendPer=infVendPer||'mes';
  _renderInformeVendedor(vend);
}
function _renderInformeVendedor(vend){
  var hoy=today();var hoyD=new Date();
  // Calcular rango segun periodo
  var desde;
  if(infVendPer==='sem'){var dl=new Date();dl.setDate(dl.getDate()-(dl.getDay()===0?6:dl.getDay()-1));desde=fechaLocal(dl);}
  else if(infVendPer==='mes'){desde=hoy.slice(0,7)+'-01';}
  else if(infVendPer==='ano'){desde=hoy.slice(0,4)+'-01-01';}
  else{desde='2000-01-01';}
  // Datos del vendedor
  var misCli=D.cli.filter(function(c){return c.vend===vend;});
  var misVis=D.vis.filter(function(v){return v.vend===vend;});
  var misVisP=misVis.filter(function(v){return v.fecha>=desde;});
  var misCom=D.com.filter(function(co){
    var c=D.cli.find(function(x){return x.id===co.cid;});
    return c&&c.vend===vend;
  });
  var prosT=misCli.filter(function(c){return c.esP;});
  var cliT=misCli.filter(function(c){return !c.esP;});
  var prosNuevos=prosT.filter(function(c){return c.ing>=desde;});
  var conv=misVisP.filter(function(v){return v.conversion===true;});
  var ventasP=misVisP.filter(function(v){return v.vendio===true;});
  var cliVisP=cliT.filter(function(c){return misVisP.some(function(v){return v.cid===c.id;});});
  var cliNoVis=cliT.filter(function(c){return !c.ul||dias(c.ul)>30;});
  var comP=misCom.filter(function(co){return co.fe>=desde;});
  var comAct=misCom.filter(function(co){return !co.ret;});
  var tasaConv=prosT.length>0?Math.round(conv.length/prosT.length*100):0;
  // Causas de pérdida
  var noVentaVis=misVisP.filter(function(v){return v.vendio===false&&v.razones;});
  var causas={};
  noVentaVis.forEach(function(v){var rs=Array.isArray(v.razones)?v.razones:[v.razones];rs.forEach(function(r){if(r)causas[r]=(causas[r]||0)+1;});});
  var causasArr=Object.keys(causas).map(function(k){return{k:k,n:causas[k]};}).sort(function(a,b){return b.n-a.n;});
  // Construir modal
  var h='';
  // Selector de período
  h+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">';
  [{k:'sem',l:'Esta semana'},{k:'mes',l:'Este mes'},{k:'ano',l:'Este año'},{k:'todo',l:'Todo'}].forEach(function(p){
    h+='<span class="fb'+(infVendPer===p.k?' on':'')+'" onclick="infVendPer=\''+p.k+'\';_renderInformeVendedor(\''+es(vend)+'\')" style="font-size:11px">'+p.l+'</span>';
  });
  h+='<button class="sm g" onclick="expCSVVendedor(\''+es(vend)+'\')" style="margin-left:auto;font-size:11px">Exportar Excel</button>';
  h+='</div>';
  // KPIs principales
  h+='<div class="ct" style="margin-bottom:8px">RESUMEN DEL PERÍODO</div>';
  h+='<div class="sg" style="margin-bottom:14px">';
  [{n:misVisP.length,l:'Visitas',c:'var(--cyan)'},{n:ventasP.length,l:'Ventas',c:'var(--green)'},{n:prosNuevos.length,l:'Prospectos nuevos',c:'var(--orange)'},{n:conv.length,l:'Conversiones',c:'var(--purple)'},{n:comP.length,l:'Comodatos firmados',c:'var(--yellow)'}].forEach(function(k){
    h+='<div class="sb"><div class="sn" style="color:'+k.c+'">'+k.n+'</div><div class="sl2">'+k.l+'</div></div>';
  });
  h+='</div>';
  // KPIs de cartera total
  h+='<div class="ct" style="margin-bottom:8px">CARTERA TOTAL</div>';
  h+='<div class="sg" style="margin-bottom:14px">';
  [{n:cliT.length,l:'Clientes activos',c:'var(--green)'},{n:prosT.length,l:'Prospectos',c:'var(--orange)'},{n:cliVisP.length,l:'Clientes visitados',c:'var(--cyan)'},{n:cliNoVis.length,l:'Sin visita +30d',c:'var(--red)'},{n:comAct.length,l:'Comodatos activos',c:'var(--yellow)'},{n:tasaConv,l:'% Conversión',c:'var(--purple)'}].forEach(function(k){
    h+='<div class="sb"><div class="sn" style="color:'+k.c+'">'+k.n+(k.l.includes('%')?'%':'')+'</div><div class="sl2">'+k.l+'</div></div>';
  });
  h+='</div>';
  // Embudo
  h+='<div class="ct" style="margin-bottom:8px">EMBUDO</div>';
  var totalEmb=misCli.length||1;
  ET.concat(SA).forEach(function(et){
    var n=misCli.filter(function(c){return c.etapaEmbudo===et;}).length;if(!n)return;
    var col=EC[et]||'var(--muted)';
    h+='<div class="br" style="margin-bottom:4px"><div class="bl">'+es(et)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(n/totalEmb*100)+'%;background:'+col+'"></div></div><div class="bv">'+n+'</div></div>';
  });
  // Causas de no venta
  if(causasArr.length){
    h+='<div class="ct" style="margin:12px 0 8px">CAUSAS DE NO VENTA</div>';
    var mxc=causasArr[0].n;
    causasArr.slice(0,5).forEach(function(x){h+='<div class="br"><div class="bl">'+es(x.k)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(x.n/mxc*100)+'%;background:var(--red)"></div></div><div class="bv">'+x.n+'</div></div>';});
  }
  // Clientes sin visitar
  if(cliNoVis.length){
    h+='<div class="ct" style="margin:12px 0 8px">CLIENTES SIN VISITA +30 DIAS</div>';
    cliNoVis.slice(0,5).forEach(function(c){
      h+='<div class="vh"><div class="vhd">'+es(c.nm)+'</div><div class="vhx">Ultima visita: '+fmt(c.ul)+'</div></div>';
    });
    if(cliNoVis.length>5)h+='<div style="font-size:12px;color:var(--muted);padding:6px 0">... y '+(cliNoVis.length-5)+' mas</div>';
  }
  // Actividad semanal (últimas 4 semanas)
  h+='<div class="ct" style="margin:12px 0 8px">ACTIVIDAD SEMANAL (ultimas 4 semanas)</div>';
  for(var w=3;w>=0;w--){
    var wStart=new Date();wStart.setDate(wStart.getDate()-((wStart.getDay()===0?6:wStart.getDay()-1)+w*7));
    var wEnd=new Date(wStart);wEnd.setDate(wStart.getDate()+6);
    var ws=fechaLocal(wStart);var we=fechaLocal(wEnd);
    var visW=misVis.filter(function(v){return v.fecha>=ws&&v.fecha<=we;});
    var ventW=visW.filter(function(v){return v.vendio===true;});
    h+='<div class="br"><div class="bl" style="font-size:11px">'+wStart.toLocaleDateString('es-AR',{day:'numeric',month:'short'})+'</div><div class="bt"><div class="bf" style="width:'+(visW.length?Math.min(Math.round(visW.length/10*100),100):0)+'%;background:var(--cyan)"></div></div><div class="bv">'+visW.length+'</div><div style="font-size:10px;color:var(--green);width:40px;text-align:right">'+ventW.length+' vta</div></div>';
  }
  document.getElementById('mB').innerHTML=h;
}
function expCSVVendedor(vend){
  var misVis=D.vis.filter(function(v){return v.vend===vend;});
  var filas=[['Fecha','Cliente','Tipo negocio','Ciudad','Tipo visita','Venta','Motivo','Etapa embudo','Notas']];
  misVis.forEach(function(v){
    var c=D.cli.find(function(x){return x.id===v.cid;});
    var m=v.razones?(Array.isArray(v.razones)?v.razones.join('; '):v.razones):'';
    filas.push([v.fecha,(c?c.nm:'?'),(c?c.tipo||'':''),(c?c.ciu||'':''),v.tipo||'',v.vendio===true?'SI':v.vendio===false?'NO':'',m,v.eta||c&&c.etapaEmbudo||'',v.nt||'']);
  });
  descargarXLSX(filas,'informe_'+vend+'_'+today()+'.xlsx');
  toast('Excel de '+vend+' exportado','ok');
}

// GERENTE COMODATOS
var gCoF2='act';
function renderGCo(){
  document.getElementById('gCoF').innerHTML=['act','ret','all'].map(function(f){return '<span class="fb'+(gCoF2===f?' on':'')+'" onclick="sGCoF(\''+f+'\')">'+(f==='act'?'Activos':f==='ret'?'Retirados':'Todos')+'</span>';}).join('');
  var cs=D.com.slice();
  if(gVendSel){var idsV={};cliGlobal().forEach(function(c){idsV[c.id]=true;});cs=cs.filter(function(co){return idsV[co.cid];});}
  if(gCoF2==='act')cs=cs.filter(function(c){return !c.ret;});
  else if(gCoF2==='ret')cs=cs.filter(function(c){return c.ret;});
  var h='<div style="padding:8px 14px;font-size:11px;color:var(--muted);font-weight:700">'+cs.length+' COMODATOS</div>';
  if(!cs.length){h+='<div class="empty">Sin comodatos</div>';document.getElementById('gCoB').innerHTML=h;return;}
  cs.forEach(function(co){
    h+='<div class="cc"><div style="display:flex;align-items:center;gap:10px"><div style="flex:1"><div style="font-size:14px;font-weight:700">'+es(co.cnm||'?')+'</div><div style="font-size:12px;color:var(--muted)">Freezer #'+es(co.nro||'?')+(co.marca?' · '+es(co.marca):'')+'</div><div style="font-size:11px;color:var(--muted);margin-top:2px">Entrega: '+fmt(co.fe)+(co.ret?' · Retiro: '+fmt(co.fr):'')+'</div></div><span class="tg '+(co.ret?'r':'g')+'">'+(co.ret?'RETIRADO':'ACTIVO')+'</span></div>';
    if(!co.ret){h+='<div style="display:flex;gap:6px;margin-top:8px"><button class="sm" onclick="retCo(\''+co.id+'\')" style="color:var(--orange)">Registrar retiro</button><button class="sm rd" onclick="delCo(\''+co.id+'\')">Eliminar</button></div>';}
    h+='</div>';
  });
  document.getElementById('gCoB').innerHTML=h;
}
function sGCoF(f){gCoF2=f;renderGCo();}
function nuevoComodato(){
  var cH=D.cli.filter(function(c){return !c.esP;}).sort(function(a,b){return(a.nm||'').localeCompare(b.nm||'');}).map(function(c){return '<option value="'+c.id+'">'+es(c.nm)+'</option>';}).join('');
  var mH=(D.cfg.marcas||[]).map(function(m){return '<option>'+es(m)+'</option>';}).join('');
  oMod('Nuevo comodato','<div class="fg"><label class="fl">Cliente</label><select class="fi" id="coC"><option value="">Seleccionar...</option>'+cH+'</select></div><div class="fg"><label class="fl">N° de freezer</label><input class="fi" id="coN" placeholder="Ej: 042"></div><div class="fg"><label class="fl">Marca</label><select class="fi" id="coM"><option value="">Seleccionar...</option>'+mH+'</select></div><div class="fg"><label class="fl">Fecha de entrega</label><input class="fi" type="date" id="coF" value="'+fechaLocal()+'"></div><div class="fg"><label class="fl">Observaciones</label><textarea class="fi fta" id="coO" placeholder="Notas..."></textarea></div><button class="btn" onclick="saveCo()">Guardar</button>');
}
function saveCo(){
  var cid=document.getElementById('coC').value;var nro=document.getElementById('coN').value.trim();
  if(!cid||!nro){toast('Completa cliente y numero de freezer','err');return;}
  var c=D.cli.find(function(x){return x.id===cid;});
  var nCom={id:uid(),cid:cid,cnm:c?c.nm:'?',nro:nro,marca:document.getElementById('coM').value,fe:document.getElementById('coF').value,obs:document.getElementById('coO').value,ret:false,fr:''};
  D.com.push(nCom);
  logEvento('comodato',cid,c?c.nm:'?','Comodato firmado · Freezer #'+nro,'','activo');
  fsSetComodato(nCom);
  cMod();renderGCo();toast('Comodato registrado','ok');
}
function retCo(id){
  var co=D.com.find(function(c){return c.id===id;});if(!co)return;
  co.ret=true;co.fr=fechaLocal();
  logEvento('comodato',co.cid,co.cnm||'?','Comodato retirado · Freezer #'+(co.nro||''),'activo','retirado');
  fsSetComodato(co);
  renderGCo();toast('Retiro registrado','ok');
}
function delCo(id){
  if(!confirm('Eliminar?'))return;
  D.com=D.com.filter(function(c){return c.id!==id;});
  fsDelComodato(id);
  renderGCo();toast('Eliminado','ok');
}
// ── MODULO INFORMES (INDEPENDIENTE DEL DASHBOARD) ──────────────────────
var infPer='mes';
var infMesEsp='';
function getPerInf(){
  var hoy=today();var d=new Date();var desde,hasta=hoy;
  if(infPer==='hoy')desde=hoy;
  else if(infPer==='sem'){d.setDate(d.getDate()-(d.getDay()===0?6:d.getDay()-1));desde=fechaLocal(d);}
  else if(infPer==='mes'){desde=hoy.slice(0,7)+'-01';}
  else if(infPer==='ano'){desde=hoy.slice(0,4)+'-01-01';}
  else if(infPer==='mesEsp'){
    var m=infMesEsp||hoy.slice(0,7);
    desde=m+'-01';
    var ult=new Date(Number(m.slice(0,4)),Number(m.slice(5,7)),0).getDate();
    hasta=m+'-'+String(ult).padStart(2,'0');
  }
  else{desde='2000-01-01';}
  return{desde:desde,hasta:hasta};
}
function renderGI(){
  var per=getPerInf();
  var visP=visGlobal().filter(function(v){return v.fecha>=per.desde&&v.fecha<=per.hasta;});
  var clientes=cliGlobal().filter(function(c){return !c.esP;});
  var prospectos=cliGlobal().filter(function(c){return c.esP;});
  var vendedores=D.usrs.filter(function(u){return u.r==='vendedor';});
  var h='';
  h+='<div class="tb"><div class="tb-t">Informes</div></div>';
  h+='<div style="padding:0 14px">';
  h+='<div style="display:flex;gap:6px;margin:14px 0 6px;flex-wrap:wrap">';
  [{k:'hoy',l:'Hoy'},{k:'sem',l:'Esta semana'},{k:'mes',l:'Este mes'},{k:'ano',l:'Este ano'},{k:'mesEsp',l:'Elegir mes'},{k:'todo',l:'Todo'}].forEach(function(p){
    h+='<span class="fb'+(infPer===p.k?' on':'')+'" onclick="infPer=\''+p.k+'\';renderGI()">'+p.l+'</span>';
  });
  h+='</div>';
  if(infPer==='mesEsp'){
    var mSelI=infMesEsp||today().slice(0,7);
    h+='<div style="margin-bottom:10px"><select onchange="infMesEsp=this.value;renderGI()" style="background:var(--s2);border:1px solid var(--border);color:var(--text);border-radius:20px;padding:7px 12px;font-size:12px;font-weight:600">';
    mesesConDatos().forEach(function(m){h+='<option value="'+m+'"'+(m===mSelI?' selected':'')+'>'+nombreMes(m)+'</option>';});
    h+='</select></div>';
  }

  // ── PROSPECTOS ──
  h+='<div class="card"><div class="ct">PROSPECTOS</div>';
  var prosNuevos=prospectos.filter(function(c){return c.ing>=per.desde&&c.ing<=per.hasta;});
  var prosConv=visP.filter(function(v){return v.conversion===true;});
  var prosPerdidos=prospectos.filter(function(c){return c.etapaEmbudo==='Perdido';});
  var prosNoInteresa=prospectos.filter(function(c){return c.etapaEmbudo==='No Le Interesa';});
  var prosSinSeg=prospectos.filter(function(c){return !c.ul||dias(c.ul)>7;});
  var tasaConv=prospectos.length?Math.round(prosConv.length/Math.max(prospectos.length+clientes.length,1)*100):0;
  h+='<div class="sg">';
  h+='<div class="sb" onclick="abrirListaDash('+JSON.stringify(prosNuevos.map(function(c){return c.id;})).replace(/"/g,"'")+')" style="cursor:pointer"><div class="sn" style="color:var(--orange)">'+prosNuevos.length+'</div><div class="sl2">Nuevos (periodo)</div></div>';
  h+='<div class="sb"><div class="sn" style="color:var(--green)">'+prosConv.length+'</div><div class="sl2">Convertidos</div></div>';
  h+='<div class="sb" onclick="abrirListaDash('+JSON.stringify(prosSinSeg.map(function(c){return c.id;})).replace(/"/g,"'")+')" style="cursor:pointer"><div class="sn" style="color:var(--red)">'+prosSinSeg.length+'</div><div class="sl2">Sin seguimiento +7d</div></div>';
  h+='<div class="sb"><div class="sn">'+tasaConv+'%</div><div class="sl2">Tasa conversion</div></div>';
  h+='</div>';
  h+='<div style="margin-top:10px"><div class="br"><div class="bl">Prospectos por ciudad</div></div>';
  var porCiu={};prospectos.forEach(function(c){if(c.ciu)porCiu[c.ciu]=(porCiu[c.ciu]||0)+1;});
  var ciuArr=Object.keys(porCiu).map(function(k){return{k:k,n:porCiu[k]};}).sort(function(a,b){return b.n-a.n;});
  if(ciuArr.length){var mxc=ciuArr[0].n;ciuArr.slice(0,8).forEach(function(x){h+='<div class="br"><div class="bl">'+es(x.k)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(x.n/mxc*100)+'%;background:var(--orange)"></div></div><div class="bv">'+x.n+'</div></div>';});}
  h+='</div></div>';

  // ── CLIENTES ──
  h+='<div class="card"><div class="ct">CLIENTES</div>';
  var cliNuevos=clientes.filter(function(c){return c.ing>=per.desde&&c.ing<=per.hasta;});
  var cliSinVisitar=clientes.filter(function(c){return !c.ul;});
  var cliVencidos=clientes.filter(function(c){return c.ul&&dias(c.ul)>30;});
  var cliConCom=D.com.filter(function(co){return !co.ret;}).map(function(co){return co.cid;}).filter(function(id,i,a){return a.indexOf(id)===i;});
  h+='<div class="sg">';
  h+='<div class="sb"><div class="sn">'+clientes.length+'</div><div class="sl2">Total clientes</div></div>';
  h+='<div class="sb" onclick="abrirListaDash('+JSON.stringify(cliSinVisitar.map(function(c){return c.id;})).replace(/"/g,"'")+')" style="cursor:pointer"><div class="sn" style="color:var(--red)">'+cliSinVisitar.length+'</div><div class="sl2">Sin visitar nunca</div></div>';
  h+='<div class="sb" onclick="abrirListaDash('+JSON.stringify(cliVencidos.map(function(c){return c.id;})).replace(/"/g,"'")+')" style="cursor:pointer"><div class="sn" style="color:var(--orange)">'+cliVencidos.length+'</div><div class="sl2">Visita vencida +30d</div></div>';
  h+='<div class="sb"><div class="sn" style="color:var(--cyan)">'+cliConCom.length+'</div><div class="sl2">Con comodato activo</div></div>';
  h+='</div></div>';

  // ── VISITAS ──
  h+='<div class="card"><div class="ct">VISITAS (PERIODO)</div>';
  var ventasP=visP.filter(function(v){return v.vendio===true;});
  h+='<div class="sg">';
  h+='<div class="sb"><div class="sn">'+visP.length+'</div><div class="sl2">Total visitas</div></div>';
  h+='<div class="sb"><div class="sn" style="color:var(--green)">'+ventasP.length+'</div><div class="sl2">Con venta</div></div>';
  h+='</div>';
  h+='<div style="margin-top:10px">';
  vendedores.forEach(function(u){
    var vv=visP.filter(function(v){return v.vend===u.n;});
    var vt=vv.filter(function(v){return v.vendio===true;});
    h+='<div class="br" style="cursor:pointer" onclick="oMod(\'Informe: '+es(u.n)+'\',\'\');_renderInformeVendedor(\''+es(u.n)+'\')"><div class="bl" style="color:var(--cyan);text-decoration:underline">'+es(u.n)+'</div><div class="bt"><div class="bf" style="width:'+(visP.length?Math.round(vv.length/Math.max(visP.length,1)*100):0)+'%;background:var(--cyan)"></div></div><div class="bv">'+vv.length+'</div><div style="font-size:10px;color:var(--green);width:50px;text-align:right">'+vt.length+' vtas</div></div>';
  });
  h+='</div></div>';

  // ── EMBUDO ──
  h+='<div class="card"><div class="ct">EMBUDO COMERCIAL</div>';
  ET.forEach(function(et){
    var n=cliGlobal().filter(function(c){return c.etapaEmbudo===et;}).length;if(!n)return;
    var col=EC[et]||'var(--muted)';
    h+='<div class="br" style="cursor:pointer" onclick="abrirListaEtapa(\''+es(et)+'\')"><div class="bl">'+es(et)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(n/Math.max(D.cli.length,1)*100)+'%;background:'+col+'"></div></div><div class="bv">'+n+'</div></div>';
  });
  h+='</div>';

  // ── TIPO DE NEGOCIO ──
  h+='<div class="card"><div class="ct">RELEVAMIENTO POR TIPO DE NEGOCIO</div>';
  var porTipo={};cliGlobal().forEach(function(c){if(c.tipo)porTipo[c.tipo]=(porTipo[c.tipo]||0)+1;});
  var tipoArr=Object.keys(porTipo).map(function(k){return{k:k,n:porTipo[k]};}).sort(function(a,b){return b.n-a.n;});
  if(tipoArr.length){var mxt=tipoArr[0].n;tipoArr.forEach(function(x){h+='<div class="br" style="cursor:pointer" onclick="abrirListaTipo(\''+es(x.k)+'\')"><div class="bl">'+es(x.k)+'</div><div class="bt"><div class="bf" style="width:'+Math.round(x.n/mxt*100)+'%;background:var(--purple)"></div></div><div class="bv">'+x.n+'</div></div>';});}
  h+='</div>';

  // ── COMODATOS ──
  h+='<div class="card"><div class="ct">COMODATOS</div>';
  var comAct=D.com.filter(function(co){return !co.ret;});
  var comRet=D.com.filter(function(co){return co.ret;});
  var comPer=D.com.filter(function(co){return co.fe>=per.desde&&co.fe<=per.hasta;});
  h+='<div class="sg">';
  h+='<div class="sb"><div class="sn" style="color:var(--green)">'+comAct.length+'</div><div class="sl2">Activos</div></div>';
  h+='<div class="sb"><div class="sn" style="color:var(--red)">'+comRet.length+'</div><div class="sl2">Retirados</div></div>';
  h+='<div class="sb"><div class="sn" style="color:var(--orange)">'+comPer.length+'</div><div class="sl2">Firmados (periodo)</div></div>';
  h+='</div></div>';

  // ── CLIENTES SIN VISITAR POR SEMANA/MES ──
  h+='<div class="card"><div class="ct">COBERTURA - CLIENTES SIN VISITAR</div>';
  var sv7=clientes.filter(function(c){return !c.ul||dias(c.ul)>7;}).length;
  var sv30=clientes.filter(function(c){return !c.ul||dias(c.ul)>30;}).length;
  h+='<div class="br"><div class="bl">Sin visitar hace +7 dias</div><div class="bt"><div class="bf" style="width:'+(clientes.length?Math.round(sv7/clientes.length*100):0)+'%;background:var(--orange)"></div></div><div class="bv">'+sv7+'</div></div>';
  h+='<div class="br"><div class="bl">Sin visitar hace +30 dias</div><div class="bt"><div class="bf" style="width:'+(clientes.length?Math.round(sv30/clientes.length*100):0)+'%;background:var(--red)"></div></div><div class="bv">'+sv30+'</div></div>';
  h+='</div>';

  h+='<button class="btn sec" onclick="expCSVAll()" style="margin:10px 0 24px">Exportar todos los datos a Excel</button>';
  h+='</div>';

  // ── EVOLUCION GRAFICA ──────────────────────────────────────────────
  // Barras verticales simples: visitas (cyan) y ventas (verde) por periodo
  function barrasDobles(datos,titulo){
    if(!datos.length)return '';
    var mx=Math.max.apply(null,datos.map(function(d){return d.v;}).concat([1]));
    var g='<div class="card"><div class="ct">'+titulo+'</div>';
    g+='<div style="display:flex;align-items:flex-end;gap:8px;height:130px;padding:0 4px;overflow-x:auto">';
    datos.forEach(function(d){
      g+='<div style="flex:1;min-width:44px;display:flex;flex-direction:column;align-items:center;gap:3px;height:100%;justify-content:flex-end">';
      g+='<div style="font-size:10px;font-weight:700">'+d.v+'</div>';
      g+='<div style="display:flex;gap:2px;align-items:flex-end;width:100%;height:'+Math.max(Math.round(d.v/mx*80),2)+'%">';
      g+='<div style="flex:1;background:var(--cyan);border-radius:3px 3px 0 0;height:100%"></div>';
      g+='<div style="flex:1;background:var(--green);border-radius:3px 3px 0 0;height:'+(d.v?Math.round(d.s/d.v*100):0)+'%"></div>';
      g+='</div>';
      g+='<div style="font-size:9px;color:var(--muted);white-space:nowrap">'+d.l+'</div>';
      g+='<div style="font-size:9px;color:var(--green)">'+d.s+' vta'+(d.s!==1?'s':'')+'</div>';
      g+='</div>';
    });
    g+='</div><div style="font-size:10px;color:var(--muted);margin-top:8px">Barra cyan: visitas &middot; Barra verde: ventas</div></div>';
    return g;
  }
  var visBase=visGlobal();
  // Evolucion mensual (todos los meses con datos, hasta 12)
  var mm=mesesConDatos().slice(0,12).reverse();
  h+=barrasDobles(mm.map(function(m){
    var vsM=visBase.filter(function(v){return v.fecha&&v.fecha.slice(0,7)===m;});
    return{l:nombreMes(m).slice(0,3)+' '+m.slice(2,4),v:vsM.length,s:vsM.filter(function(v){return v.vendio===true;}).length};
  }),'EVOLUCION MENSUAL'+(gVendSel?' - '+es(gVendSel).toUpperCase():''));
  // Evolucion semanal (ultimas 8 semanas)
  var sems=[];
  for(var si=7;si>=0;si--){
    var lunW=new Date();var dowW=lunW.getDay()===0?6:lunW.getDay()-1;lunW.setDate(lunW.getDate()-dowW-si*7);
    var finW=new Date(lunW);finW.setDate(finW.getDate()+6);
    var dW=fechaLocal(lunW),hW=fechaLocal(finW);
    var vsW=visBase.filter(function(v){return v.fecha>=dW&&v.fecha<=hW;});
    sems.push({l:lunW.getDate()+'/'+(lunW.getMonth()+1),v:vsW.length,s:vsW.filter(function(v){return v.vendio===true;}).length});
  }
  h+=barrasDobles(sems,'EVOLUCION SEMANAL (ULTIMAS 8 SEMANAS)'+(gVendSel?' - '+es(gVendSel).toUpperCase():''));
  // Comparativa entre vendedores en el periodo elegido (solo si se ven todos)
  if(!gVendSel){
    h+=barrasDobles(vendedores.map(function(u){
      var vsU=D.vis.filter(function(v){return v.vend===u.n&&v.fecha>=per.desde&&v.fecha<=per.hasta;});
      return{l:u.n,v:vsU.length,s:vsU.filter(function(v){return v.vendio===true;}).length};
    }),'COMPARATIVA DE VENDEDORES EN EL PERIODO');
  }
  document.getElementById('gIB').innerHTML=h;
}

// ── ADMIN: CREAR NUEVO PROSPECTO/CLIENTE ────────────────────────────────
function nuevoProsAdmin(){
  var vendOpts=D.usrs.filter(function(u){return u.r==='vendedor';}).map(function(u){return '<option value="'+es(u.n)+'">'+es(u.n)+'</option>';}).join('');
  oMod('Nuevo contacto','<div class="fg"><label class="fl">Asignar a vendedor</label><select class="fi" id="npaVend"><option value="">Sin asignar</option>'+vendOpts+'</select></div><button class="btn" onclick="confirmarNuevoProsAdmin()">Continuar</button>');
}
function confirmarNuevoProsAdmin(){
  var vend=document.getElementById('npaVend').value;
  var tid=uid();
  var nuevo={id:tid,nm:'',fan:'',tel:'',dir:'',bar:'',tipo:'',prov:'',ciu:'',esP:true,etapaEmbudo:'Nuevo Prospecto',calU:'',trans:'',comp:'',cFr:'',cEx:'',obs:'',uv:'',ul:'',prox:'',ing:today(),ex:{},deu:false,vend:vend,prods:[]};
  D.cli.push(nuevo);
  fsSetContacto(nuevo);
  cMod();
  aVisPros(tid,true);
}

// GERENTE CONFIG
function renderGCfg(){
  var h='';
  // ── USUARIOS ──────────────────────────────────────────────────────
  h+='<div class="card"><div class="ct">REASIGNAR CONTACTOS ENTRE VENDEDORES</div>';
  h+='<div style="font-size:13px;color:var(--muted);margin-bottom:10px">Elegi un vendedor para ver su lista de contactos y tildar cuales pasar a otro.</div>';
  var vOptsR='<option value="">Ver contactos de...</option>';
  D.usrs.filter(function(u){return u.r==='vendedor';}).forEach(function(u){vOptsR+='<option value="'+es(u.n)+'">'+es(u.n)+' ('+D.cli.filter(function(c){return c.vend===u.n;}).length+')</option>';});
  h+='<select class="fi" id="reasDe" onchange="renderListaReasignar()" style="margin:0">'+vOptsR+'</select>';
  h+='<div id="reasLista"></div>';
  h+='</div>';
  h+='<div class="card"><div class="ct">MAPA Y UBICACIONES</div>';
  var _conf=D.cli.filter(function(c){return c.gpsOk;}).length;
  var _sinConf=D.cli.length-_conf;
  h+='<div style="font-size:13px;color:var(--muted);margin-bottom:6px">En el mapa solo aparecen los contactos con ubicacion <b style="color:var(--green)">confirmada por GPS</b>, para que sea 100% confiable.</div>';
  h+='<div style="display:flex;gap:16px;margin-bottom:4px"><div><div style="font-size:22px;font-weight:800;color:var(--green)">'+_conf+'</div><div style="font-size:11px;color:var(--muted)">confirmados</div></div>';
  h+='<div><div style="font-size:22px;font-weight:800;color:var(--orange)">'+_sinConf+'</div><div style="font-size:11px;color:var(--muted)">por confirmar</div></div></div>';
  h+='<div style="font-size:12px;color:var(--muted);margin-top:6px">La confirmacion se hace sola: al crear un prospecto, o en la primera visita a cada cliente, el vendedor marca el GPS parado en el local.</div>';
  h+='</div>';
  h+='<div class="card"><div class="ct">USUARIOS DEL SISTEMA</div>';
  D.usrs.forEach(function(u){
    h+='<div class="sr"><div style="flex:1">';
    h+='<div style="font-size:13px;font-weight:700">'+es(u.n)+(u.activo===false?' <span class="tg r">INACTIVO</span>':'')+'</div>';
    h+='<div style="font-size:11px;color:var(--muted)">@'+es(u.u)+' · '+es(u.r)+'</div>';
    h+='<div style="font-size:10px;color:var(--muted)">Ultimo acceso: '+(u.ua?fmtTs(u.ua):'Nunca')+'</div></div>';
    h+='<div style="display:flex;gap:6px">';
    h+='<button class="sm" onclick="togActivo('+u.id+')" style="font-size:11px;color:'+(u.activo===false?'var(--green)':'var(--muted)')+'">'+(u.activo===false?'Activar':'Desact.')+'</button>';
    h+='<button class="sm" onclick="cambPass('+u.id+')" style="font-size:11px">Pass</button></div></div>';
  });
  h+='<div style="border-top:1px solid var(--border);margin-top:12px;padding-top:12px">';
  h+='<div style="font-size:12px;font-weight:700;color:var(--cyan);margin-bottom:8px">CREAR NUEVO USUARIO</div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">';
  h+='<input class="fi" id="nuNom" placeholder="Nombre (ej: Martin)" style="margin:0">';
  h+='<input class="fi" id="nuUsr" placeholder="Usuario (ej: martin)" autocapitalize="none" style="margin:0">';
  h+='<input class="fi" id="nuPass" placeholder="Contrasena" style="margin:0">';
  h+='<select class="fi" id="nuRol" style="margin:0"><option value="vendedor">Vendedor</option><option value="gerente">Gerente (solo lectura)</option><option value="admin">Administrador</option></select>';
  h+='</div>';
  h+='<button class="btn sec" onclick="crearUsuario()" style="margin:0">+ Crear usuario</button>';
  h+='</div>';
  h+='</div>';

  // ── CATÁLOGO MANAGER ─────────────────────────────────────────────
  h+='<div class="card"><div class="ct">ADMINISTRADOR DE CATALOGOS</div>';
  h+='<div style="font-size:12px;color:var(--muted);margin-bottom:14px">Todas las listas del sistema. Los cambios se aplican inmediatamente en toda la app.</div>';

  var catalogos=[
    {key:'tipos',label:'Tipos de negocio'},
    {key:'tiposProducto',label:'Tipos de productos'},
    {key:'marcas',label:'Marcas competidoras'},
    {key:'razones',label:'Motivos de no venta'},
  ];
  catalogos.forEach(function(cat){
    var items=D.cfg[cat.key]||[];
    h+='<div style="border:1px solid var(--border);border-radius:var(--rsm);padding:12px;margin-bottom:12px">';
    h+='<div style="font-size:12px;font-weight:700;color:var(--cyan);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">'+es(cat.label)+' ('+items.length+')</div>';
    items.forEach(function(item,i){
      h+='<div style="display:flex;align-items:center;gap:6px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.05)">';
      h+='<span style="flex:1;font-size:13px">'+es(item)+'</span>';
      h+='<button class="sm rd" onclick="elimItemCat(\''+cat.key+'\','+i+')" style="font-size:11px;padding:3px 8px">&#215;</button></div>';
    });
    h+='<div style="display:flex;gap:6px;margin-top:8px">';
    h+='<input class="fi" id="niCat_'+es(cat.key)+'" placeholder="Agregar nuevo..." style="flex:1;margin:0;padding:8px 10px;font-size:13px">';
    h+='<button class="sm g" onclick="addItemCat(\''+cat.key+'\')" >+ Agregar</button></div></div>';
  });
  h+='</div>';

  // ── MENSAJES WHATSAPP POR ETAPA ───────────────────────────────────
  h+='<div class="card"><div class="ct">MENSAJES DE WHATSAPP POR ETAPA</div>';
  h+='<div style="background:rgba(34,211,238,.08);border:1px solid rgba(34,211,238,.2);border-radius:var(--rsm);padding:10px 12px;margin-bottom:14px">';
  h+='<div style="font-size:11px;font-weight:700;color:var(--cyan);margin-bottom:6px">VARIABLES DISPONIBLES</div>';
  h+='<div style="font-size:12px;color:var(--muted);line-height:1.7">';
  h+='<code style="color:var(--cyan)">{nombre}</code> — Nombre del dueño o encargado<br>';
  h+='<code style="color:var(--cyan)">{negocio}</code> — Nombre del local<br>';
  h+='<code style="color:var(--cyan)">{ciudad}</code> — Ciudad o barrio<br>';
  h+='<code style="color:var(--cyan)">{etapa}</code> — Etapa actual del embudo<br>';
  h+='<span style="font-style:italic">Ejemplo: "Hola <code style=\\"color:var(--cyan)\\">{nombre}</code>, soy Jorge de Sei Tu. Quería seguir en contacto con {negocio}..."</span></div></div>';
  if(!D.cfg.msgs)D.cfg.msgs={};
  ET.concat(SA).forEach(function(et,i){
    var msg=(D.cfg.msgs&&D.cfg.msgs[et])||MD[et]||'';
    h+='<div style="margin-bottom:12px"><div style="font-size:12px;font-weight:700;color:'+(EC[et]||'var(--muted)')+';margin-bottom:4px">'+es(et)+'</div>';
    h+='<textarea class="fi fta" id="msg'+i+'" data-et="'+es(et)+'" rows="2" style="font-size:13px">'+es(msg)+'</textarea></div>';
  });
  h+='<button class="btn sec" onclick="savMsgs()" style="margin-bottom:8px">Guardar mensajes</button></div>';
  // Mensaje de pedido
  h+='<div class="card"><div class="ct">MENSAJE DE PEDIDO (boton en Gira)</div>';
  h+='<textarea class="fi fta" id="msgPedidoCfg" rows="3" style="font-size:13px">'+es(D.cfg.msgPedido||'')+'</textarea>';
  h+='<button class="btn sec" onclick="savMsgPedido()" style="margin-top:8px">Guardar mensaje de pedido</button></div>';
  // Links de catálogo
  h+='<div class="card"><div class="ct">LINKS DE CATÁLOGO / LISTA DE PRECIOS</div>';
  h+='<div style="font-size:12px;color:var(--muted);margin-bottom:12px">Pegá el link de Google Drive o Dropbox. Se agrega automáticamente al final de cada mensaje de WhatsApp.</div>';
  h+='<div class="fg"><label class="fl">Link para todos los mensajes</label><input class="fi" id="linkTodos" value="'+es((D.cfg.msgLinks&&D.cfg.msgLinks.todos)||'')+'" placeholder="https://drive.google.com/..."></div>';
  ET.concat(SA).forEach(function(et,j){
    h+='<div class="fg"><label class="fl" style="color:'+es(EC[et]||'var(--muted)')+'">'+es(et)+'</label><input class="fi" id="lnk'+j+'" data-et="'+es(et)+'" value="'+es((D.cfg.msgLinks&&D.cfg.msgLinks[et])||'')+'" placeholder="Link especifico para esta etapa (opcional)"></div>';
  });
  h+='<button class="btn sec" onclick="savLinks()">Guardar links</button></div>';

  // ── ESTADO DE CONEXION ───────────────────────────────────────────
  h+='<div class="card"><div class="ct">SINCRONIZACION</div>';
  h+='<div style="font-size:13px;color:var(--muted)">Los datos se sincronizan automaticamente y en tiempo real entre todos los dispositivos a traves de Firebase. No requiere configuracion manual.</div></div>';

  // ── REPARAR ASIGNACION DE CONTACTOS ────────────────────────────────
  var sinVend=D.cli.filter(function(c){return !c.vend;});
  if(sinVend.length){
    h+='<div class="card" style="border:1px solid var(--orange)">';
    h+='<div class="ct" style="color:var(--orange)">&#9888; CONTACTOS SIN VENDEDOR ASIGNADO ('+sinVend.length+')</div>';
    h+='<div style="font-size:12px;color:var(--muted);margin-bottom:10px">Estos contactos no son visibles para ningun vendedor hasta que los asignes.</div>';
    sinVend.forEach(function(c){
      var vendsOpt=D.usrs.filter(function(u){return u.r==='vendedor';}).map(function(u){return '<option value="'+es(u.n)+'">'+es(u.n)+'</option>';}).join('');
      h+='<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--border)">';
      h+='<div style="flex:1;font-size:13px;font-weight:600">'+es(c.nm)+'</div>';
      h+='<select class="sm" onchange="reasignarContacto(\''+c.id+'\',this.value)"><option value="">Asignar a...</option>'+vendsOpt+'</select></div>';
    });
    h+='</div>';
  }
  // ── BACKUP JSON ───────────────────────────────────────────────────
  h+='<div class="card"><div class="ct">BACKUP Y RESTAURACION</div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
  h+='<button class="btn sec" onclick="expJSON()">Exportar backup</button>';
  h+='<label class="btn sec" style="text-align:center;cursor:pointer">Importar backup<input type="file" accept=".json" onchange="impJSON(this)" style="display:none"></label></div></div>';

  // ── MODO DEBUG ────────────────────────────────────────────────────
  h+='<div class="card"><div class="ct">SOPORTE TECNICO</div>';
  h+='<div style="font-size:12px;color:var(--muted);margin-bottom:10px">Informacion tecnica del sistema para diagnosticar problemas</div>';
  h+='<button class="btn sec" onclick="abrirDebug()">Abrir Modo Debug</button></div>';

  document.getElementById('gCfgB').innerHTML=h;
}
function abrirDebug(){
  var h='';
  h+='<div class="fg"><div class="fl">Version de la app</div><div style="font-size:14px;font-weight:700;color:var(--cyan)">'+es(VERSION)+'</div></div>';
  h+='<div class="fg"><div class="fl">Usuario logueado</div><div style="font-size:14px;font-weight:700">'+es(D.user?D.user.n:'-')+' (@'+es(D.user?D.user.u:'-')+')</div></div>';
  h+='<div class="fg"><div class="fl">Rol</div><div style="font-size:14px;font-weight:700">'+es(D.user?D.user.r:'-')+'</div></div>';
  h+='<div class="fg"><div class="fl">Estado de sincronizacion</div><div style="font-size:14px;font-weight:700;color:'+(syncEstado==='ok'?'var(--green)':syncEstado==='pending'?'var(--yellow)':'var(--red)')+'">'+es(syncEstado||'ok')+'</div></div>';
  h+='<div class="fg"><div class="fl">Conexion a internet</div><div style="font-size:14px;font-weight:700">'+(navigator.onLine?'Online':'Offline')+'</div></div>';
  h+='<div class="div"></div>';
  h+='<div class="fl" style="margin-bottom:8px">REGISTROS CARGADOS</div>';
  h+='<div class="sg" style="margin-bottom:14px">';
  h+='<div class="sb"><div class="sn">'+D.cli.length+'</div><div class="sl2">Contactos</div></div>';
  h+='<div class="sb"><div class="sn">'+D.vis.length+'</div><div class="sl2">Visitas</div></div>';
  h+='<div class="sb"><div class="sn">'+D.com.length+'</div><div class="sl2">Comodatos</div></div>';
  h+='<div class="sb"><div class="sn">'+D.usrs.length+'</div><div class="sl2">Usuarios</div></div>';
  h+='</div>';
  h+='<div class="fl" style="margin-bottom:8px">ULTIMA SINCRONIZACION POR COLECCION</div>';
  Object.keys(DEBUG_LASTSYNC).forEach(function(k){
    h+='<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border);font-size:12px"><span style="color:var(--muted)">'+k+'</span><span>'+(DEBUG_LASTSYNC[k]?fmtTs(DEBUG_LASTSYNC[k]):'Sin datos aun')+'</span></div>';
  });
  h+='<div class="div"></div>';
  h+='<div class="fl" style="margin-bottom:8px">ULTIMOS EVENTOS TECNICOS ('+DEBUG_LOG.length+')</div>';
  if(!DEBUG_LOG.length){h+='<div style="color:var(--green);font-size:13px">Sin errores registrados</div>';}
  DEBUG_LOG.forEach(function(e){
    var col=e.tipo==='error'?'var(--red)':'var(--muted)';
    h+='<div style="padding:7px 0;border-bottom:1px solid var(--border)"><div style="font-size:11px;color:var(--muted)">'+fmtTs(e.ts)+'</div><div style="font-size:12px;color:'+col+';font-family:monospace">'+es(e.msg)+'</div></div>';
  });
  h+='<button class="btn sec" onclick="DEBUG_LOG=[];abrirDebug()" style="margin-top:14px">Limpiar log</button>';
  oMod('Modo Debug',h);
}
function expJSON(){
  var backup={cli:D.cli,vis:D.vis,com:D.com,gira:D.gira,log:D.log,cfg:D.cfg,usrs:D.usrs,fecha:new Date().toISOString()};
  var blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'});
  var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download='CRM-backup-'+today()+'.json';
  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
  toast('Backup exportado','ok');
}
function impJSON(inp){
  if(!inp.files||!inp.files[0])return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var data=JSON.parse(e.target.result);
      if(!confirm('Esto reemplazara TODOS los datos actuales en Firebase por los del backup. Confirmar?'))return;
      var batch=fsDB.batch();
      var nb=0;
      (data.cli||[]).forEach(function(c){batch.set(fsDB.collection('contactos').doc(c.id),c);nb++;});
      (data.vis||[]).forEach(function(v){batch.set(fsDB.collection('visitas').doc(v.id),v);nb++;});
      (data.com||[]).forEach(function(co){batch.set(fsDB.collection('comodatos').doc(co.id),co);nb++;});
      (data.gira||[]).forEach(function(g){var gid=g.cid+'_'+g.fecha;batch.set(fsDB.collection('gira').doc(gid),g);nb++;});
      if(data.cfg){batch.set(fsDB.collection('config').doc('main'),data.cfg,{merge:true});}
      (data.usrs||[]).forEach(function(u){batch.set(fsDB.collection('usuarios').doc(String(u.id)),u);});
      batch.commit().then(function(){
        toast('Backup restaurado correctamente ('+nb+' registros)','ok');
        renderGCfg();renderGD();
      }).catch(function(err){toast('Error al restaurar: '+err.message,'err');});
    }catch(err){toast('Archivo invalido o corrupto','err');}
  };
  reader.readAsText(inp.files[0]);
}
function addItemCat(cat){
  var inp=document.getElementById('niCat_'+cat);if(!inp)return;
  var val=inp.value.trim();if(!val)return;
  if(!D.cfg[cat])D.cfg[cat]=[];
  if(D.cfg[cat].indexOf(val)<0){
    D.cfg[cat].push(val);
    fsSetConfig(D.cfg);
    renderGCfg();toast('Agregado: '+val,'ok');
  } else {
    toast('Ya existe en la lista','err');
  }
}
function elimItemCat(cat,idx){
  if(!D.cfg[cat])return;
  var item=D.cfg[cat][idx];
  if(!confirm('Eliminar "'+item+'" de la lista?'))return;
  D.cfg[cat].splice(idx,1);
  fsSetConfig(D.cfg);
  renderGCfg();toast('Eliminado','ok');
}

function savMsgs(){
  ET.concat(SA).forEach(function(et,i){var el=document.getElementById('msg'+i);if(el)D.cfg.msgs[et]=el.value;});
  fsSetConfig(D.cfg);
  toast('Mensajes guardados','ok');
}
function savMsgPedido(){
  var el=document.getElementById('msgPedidoCfg');
  if(el)D.cfg.msgPedido=el.value;
  fsSetConfig(D.cfg);toast('Mensaje de pedido guardado','ok');
}
function savLinks(){
  if(!D.cfg.msgLinks)D.cfg.msgLinks={};
  var lt=document.getElementById('linkTodos');if(lt)D.cfg.msgLinks.todos=lt.value.trim();
  ET.concat(SA).forEach(function(et,j){var el=document.getElementById('lnk'+j);if(el&&el.value!==undefined)D.cfg.msgLinks[et]=el.value.trim();});
  fsSetConfig(D.cfg);toast('Links guardados','ok');
}
function togActivo(uid2){
  var u=D.usrs.find(function(x){return x.id==uid2;});if(!u)return;
  u.activo=u.activo===false?true:false;
  fsSetUsuario(u);
  renderGCfg();toast(u.n+(u.activo?' activado':' desactivado'),'ok');
}
function crearUsuario(){
  if(soloLectura())return;
  var n=(document.getElementById('nuNom').value||'').trim();
  var u=(document.getElementById('nuUsr').value||'').trim().toLowerCase();
  var p=(document.getElementById('nuPass').value||'').trim();
  var r=document.getElementById('nuRol').value;
  if(!n||!u||!p){toast('Completa nombre, usuario y contrasena','err');return;}
  if(p.length<4){toast('La contrasena debe tener al menos 4 caracteres','err');return;}
  if(/\s/.test(u)){toast('El usuario no puede tener espacios','err');return;}
  if(D.usrs.some(function(x){return x.u===u;})){toast('Ya existe un usuario "'+u+'"','err');return;}
  if(D.usrs.some(function(x){return x.n.toLowerCase()===n.toLowerCase();})){toast('Ya existe un usuario con el nombre "'+n+'"','err');return;}
  var maxId=D.usrs.reduce(function(m,x){return Math.max(m,x.id||0);},0);
  var nu={id:maxId+1,n:n,u:u,p:p,r:r,activo:true,creado:today(),ua:''};
  D.usrs.push(nu);
  fsSetUsuario(nu);
  logEvento('usuario','','','Usuario creado: '+n+' ('+r+')','','');
  toast('Usuario '+n+' creado como '+r,'ok');
  renderVendBtns(); // si es vendedor, aparece en los botones del filtro global
  renderGCfg();
}
function cambPass(uid2){oMod('Cambiar contrasena','<div class="fg"><label class="fl">Nueva contrasena</label><input class="fi" type="password" id="np" placeholder="Min 4 caracteres"></div><button class="btn" onclick="confPass(\''+uid2+'\')">Cambiar</button>');}
function confPass(uid2){
  var p=document.getElementById('np').value;
  if(!p||p.length<4){toast('Min 4 caracteres','err');return;}
  var u=D.usrs.find(function(x){return x.id==uid2;});if(!u)return;
  u.p=p;if(D.user&&D.user.id==uid2)D.user.p=p;
  fsSetUsuario(u);
  cMod();toast('Contrasena actualizada','ok');
}
function exportarVCard(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  if(!c.tel){toast('Este contacto no tiene telefono cargado','err');return;}
  var tel=c.tel.replace(/\D/g,'');
  // Agregar codigo de pais Argentina si no lo tiene
  var telIntl=tel.startsWith('54')?'+'+tel:'+54'+tel;
  // Nombre = dueño, Apellido = local, Detalle = dirección
  // Así en el celular: Nombre "Juan Pérez", Apellido "Kiosco El Sol", Empresa "Kiosco El Sol"
  var vcNombre=c.fan||c.nm||'';
  var vcApellido=c.fan?c.nm:'';
  var vcFN=vcApellido?vcNombre+' '+vcApellido:vcNombre;
  var vcard=[
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:'+es(vcFN),
    vcApellido?('N:'+es(vcApellido)+';'+es(vcNombre)+';;;'):('N:;'+es(vcNombre)+';;;'),
    vcApellido?'ORG:'+es(vcApellido):'',
    'TEL;TYPE=CELL:'+telIntl,
    c.tel2?'TEL;TYPE=WORK:+54'+c.tel2.replace(/\D/g,''):'',
    (c.dir||c.ciu||c.bar)?'ADR:;;'+es(c.dir||'')+';'+es(c.ciu||c.bar||'')+';;Argentina':'',
    c.email?'EMAIL:'+es(c.email):'',
    'NOTE:CRM Jorge - '+es(c.tipo||'')+(c.etapaEmbudo?' - '+es(c.etapaEmbudo):''),
    'END:VCARD'
  ].filter(Boolean).join('\r\n');
  var blob=new Blob([vcard],{type:'text/vcard;charset=utf-8'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');a.href=url;
  a.download=((c.nm||'contacto').replace(/[^a-zA-Z0-9 ]/g,'').trim()||'contacto')+'.vcf';
  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
  // Marcar como agendado en la base de datos
  c.agendado=true;
  fsSetContacto(c);
  toast('Archivo .vcf descargado — abrite para agregar a la agenda','ok');
}
function envWA(id){
  var c=D.cli.find(function(x){return x.id===id;});
  if(!c){toast('Contacto no encontrado','err');return;}
  if(!c.tel){toast('Este contacto no tiene telefono','err');return;}
  var mBase=c.esP
    ?((D.cfg.msgs&&D.cfg.msgs[c.etapaEmbudo])||MD[c.etapaEmbudo]||'Hola! Te escribo de Sei Tu Helados.')
    :'Hola! Te escribo de Sei Tu Helados.';
  // Reemplazar variables personalizadas en el mensaje
  var m=mBase
    .replace(/\{nombre\}/gi, c.fan||c.nm||'')   // dueño/encargado
    .replace(/\{negocio\}/gi, c.nm||'')           // nombre del local
    .replace(/\{ciudad\}/gi, c.ciu||c.bar||'')    // ciudad o barrio
    .replace(/\{etapa\}/gi, c.etapaEmbudo||'');   // etapa del embudo
  // Agregar link de catálogo si existe para esta etapa
  var link=(D.cfg.msgLinks&&c.esP&&c.etapaEmbudo)?D.cfg.msgLinks[c.etapaEmbudo]||D.cfg.msgLinks['todos']||'':D.cfg.msgLinks&&D.cfg.msgLinks['todos']||'';
  if(link)m=m+'\n\n'+link;
  window.open('https://wa.me/54'+c.tel.replace(/\D/g,'')+'?text='+encodeURIComponent(m),'_blank');
}
// ── SINCRONIZACION CON ESTADO VISUAL ────────────────────────────────
var syncEstado='ok'; // ok|pending|error
function setSyncDot(estado){
  syncEstado=estado;
  var col=estado==='ok'?'var(--green)':estado==='pending'?'var(--yellow)':'var(--red)';
  ['syncDot','syncDotAdmin','syncDotAdmin2'].forEach(function(id){
    var dot=document.getElementById(id);
    if(dot)dot.style.background=col;
  });
}
function sincronizarManual(){
  setSyncDot('pending');
  // Con Firestore los datos ya estan sincronizados en tiempo real.
  // Este boton fuerza una verificacion de conexion y refresca la pantalla actual.
  if(navigator.onLine===false){setSyncDot('error');toast('Sin conexion a internet','err');return;}
  refrescarVistaActual();
  setTimeout(function(){setSyncDot('ok');toast('Datos al dia','ok');},400);
}
window.addEventListener('online',function(){setSyncDot('ok');});
window.addEventListener('offline',function(){setSyncDot('error');toast('Sin conexion - los cambios se guardaran al reconectar','err');});

// Restaurar wizard si se interrumpió por la cámara
window.addEventListener('focus',function(){
  var bk=lg('jwiz_bk',null);
  if(bk&&bk.cid&&!W.cid){
    // Wizard fue interrumpido - preguntar si restaurar
    // No mostrar popup, solo restaurar silenciosamente si el wiz está activo
  } else if(bk&&bk.cid&&W.cid===bk.cid){
    W.data=bk.data||{};
    ls('jwiz_bk',null);
    wRender();
  }
});

// ── AUTOCOMPLETE GENERICO (reemplaza datalist nativo, mas confiable en mobile) ──
function initAuto(inpId,suggId,getList){
  var inp=document.getElementById(inpId);var sugg=document.getElementById(suggId);
  if(!inp||!sugg)return;
  inp.oninput=function(){
    var q=inp.value.trim().toLowerCase();
    if(q.length<2){sugg.style.display='none';sugg.innerHTML='';return;}
    var list=getList();
    var matches=list.filter(function(x){return x.toLowerCase().indexOf(q)>=0;}).slice(0,8);
    if(!matches.length){sugg.style.display='none';sugg.innerHTML='';return;}
    sugg.innerHTML=matches.map(function(m){return '<div style="padding:11px 12px;font-size:13px;cursor:pointer;border-bottom:1px solid var(--border)" onmousedown="event.preventDefault();selAuto(\''+inpId+'\',\''+suggId+'\',this.textContent)">'+es(m)+'</div>';}).join('');
    sugg.style.display='block';
  };
  inp.onblur=function(){setTimeout(function(){sugg.style.display='none';},150);};
  inp.onfocus=function(){if(inp.value.trim().length>=2)inp.oninput();};
}
function selAuto(inpId,suggId,val){
  var inp=document.getElementById(inpId);
  inp.value=val;
  document.getElementById(suggId).style.display='none';
  inp.dispatchEvent(new Event('change'));
}

// ── PROVINCIA / CIUDAD / BARRIO ───────────────────────────────────────

function logEvento(tipo,cid,nm,desc,ant,nue){
  var entry={
    id:uid(),
    ts:new Date().toISOString(),
    u:D.user?D.user.n:'?',
    tipo:tipo,
    cid:cid||'',
    nm:nm||'',
    desc:desc||'',
    ant:ant||'',
    nue:nue||''
  };
  D.log.push(entry); // actualizacion local instantanea
  fsAddLog(entry);   // se sincroniza solo, el listener lo confirma para todos
}
function fmtTs(ts){
  if(!ts)return '--';
  try{var d=new Date(ts);return d.toLocaleDateString('es-AR',{day:'numeric',month:'short'})+' '+d.toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});}catch(e){return ts.slice(0,16).replace('T',' ');}
}
// Retorna los contactos visibles para el usuario actual
function misContactos(incluirPerdidos){
  var base;
  if(!D.user||D.user.r==='admin'||D.user.r==='gerente'){
    base=D.cli;
  } else {
    // Cada vendedor solo ve sus propios contactos. Sin excepciones.
    base=D.cli.filter(function(c){return c.vend===D.user.n;});
  }
  if(!incluirPerdidos){
    base=base.filter(function(c){return c.etapaEmbudo!=='No Le Interesa'&&c.etapaEmbudo!=='Perdido';});
  }
  return base;
}
// Gira filtrada por vendedor: cada vendedor solo ve sus propias paradas
function misGira(){
  if(!D.user||D.user.r==='admin'||D.user.r==='gerente')return D.gira;
  return D.gira.filter(function(g){
    var c=D.cli.find(function(x){return x.id===g.cid;});
    return c&&c.vend===D.user.n;
  });
}
// Log de un contacto especifico (para mostrar en ficha)
function logDeContacto(cid){
  return D.log.filter(function(e){return e.cid===cid;}).slice().reverse();
}
// HTML del historial de trazabilidad
function htmlLog(cid,limit){
  var entries=logDeContacto(cid).slice(0,limit||20);
  if(!entries.length)return '<div style="color:var(--muted);font-size:12px">Sin historial registrado</div>';
  var tipoCol={visita:'var(--cyan)',etapa:'var(--purple)',conversion:'var(--green)',prospecto:'var(--orange)',venta:'var(--green)',comodato:'var(--yellow)',reasignacion:'var(--orange)',modificacion:'var(--muted)'};
  var tipoEmoji={visita:'&#128203;',etapa:'&#8594;',conversion:'&#11088;',prospecto:'&#43;',venta:'&#128200;',comodato:'&#10052;',reasignacion:'&#8646;',modificacion:'&#9998;'};
  var h='';
  entries.forEach(function(e){
    var col=tipoCol[e.tipo]||'var(--muted)';
    var emo=tipoEmoji[e.tipo]||'&#9679;';
    h+='<div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid var(--border)">';
    h+='<div style="width:22px;text-align:center;font-size:14px;flex-shrink:0">'+emo+'</div>';
    h+='<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:700;color:'+col+'">'+es(e.desc)+'</div>';
    h+='<div style="font-size:10px;color:var(--muted)">'+es(e.u)+' · '+fmtTs(e.ts)+'</div></div></div>';
  });
  return h;
}

// ── MODAL ─────────────────────────────────────────────────────────────
function oMod(t,h){document.getElementById('mT').textContent=t;document.getElementById('mB').innerHTML=h;document.getElementById('modal').classList.add('on');}
function cMod(){document.getElementById('modal').classList.remove('on');}

// ── ADMIN NAV ─────────────────────────────────────────────────────────
function toggleGSide(){
  var s=document.getElementById('gSide');var o=document.getElementById('gOverlay');
  var open=s.classList.contains('open');
  s.classList.toggle('open');
  if(o)o.style.display=open?'none':'block';
}
// ── FILTRO GLOBAL DE VENDEDOR ─────────────────────────────────────────
// Prevalece sobre todos los demas filtros, en todas las pestañas del admin.
var gVendSel='';      // '' = Todos
var gSecActual='D';   // seccion admin activa (para re-renderizar al cambiar el filtro)
function renderVendBtns(){
  var el=document.getElementById('gVendBtns');if(!el)return;
  var vendedores=D.usrs.filter(function(u){return u.r==='vendedor'&&u.activo!==false;});
  var h='<div style="font-size:10px;color:var(--muted);font-weight:700;letter-spacing:.5px;margin-bottom:6px">VIENDO DATOS DE</div>';
  h+='<div style="display:flex;flex-wrap:wrap;gap:5px">';
  h+='<span class="fb'+(gVendSel===''?' on':'')+'" onclick="setVendGlobal(\'\')" style="font-size:11px;padding:5px 11px">Todos</span>';
  vendedores.forEach(function(u){
    h+='<span class="fb'+(gVendSel===u.n?' on':'')+'" onclick="setVendGlobal(this.getAttribute(\'data-v\'))" data-v="'+es(u.n)+'" style="font-size:11px;padding:5px 11px">'+es(u.n)+'</span>';
  });
  h+='</div>';
  el.innerHTML=h;
}
function setVendGlobal(v){
  gVendSel=v||'';
  renderVendBtns();
  gGo(gSecActual); // re-renderiza la seccion activa con el filtro aplicado
}
// Contactos visibles segun el filtro global (para todas las vistas del admin)
function cliGlobal(){return gVendSel?D.cli.filter(function(c){return c.vend===gVendSel;}):D.cli;}
function visGlobal(){return gVendSel?D.vis.filter(function(v){return v.vend===gVendSel;}):D.vis;}

function gGo(sec){
  if(sec==='Cfg'&&D.user&&D.user.r==='gerente'){toast('El perfil Gerente no tiene acceso a Configuracion','err');return;}
  gSecActual=sec;
  document.querySelectorAll('#gCont .sc').forEach(function(s){s.classList.remove('on');});
  document.querySelectorAll('.gb').forEach(function(b){b.classList.remove('on');});
  var ids={D:'sGD',C:'sGC',E:'sGE',V:'sGV',Co:'sGCo',M:'sGM',I:'sGI',Cfg:'sGCfg'};
  var bids={D:'gbD',C:'gbC',E:'gbE',V:'gbV',Co:'gbCo',M:'gbM',I:'gbI',Cfg:'gbCfg'};
  var rend={D:renderGD,C:renderGC,E:renderGE,V:renderGV,Co:renderGCo,M:renderGM,I:renderGI,Cfg:renderGCfg};
  if(ids[sec]){document.getElementById(ids[sec]).classList.add('on');}
  if(bids[sec]){document.getElementById(bids[sec]).classList.add('on');}
  if(rend[sec])rend[sec]();
  // Cerrar menu mobile
  var side=document.getElementById('gSide');var ov=document.getElementById('gOverlay');
  if(side&&side.classList.contains('open')){side.classList.remove('open');if(ov)ov.style.display='none';}
}

// ── WIZARD ENGINE ─────────────────────────────────────────────────────
var W={steps:[],cur:0,data:{},cid:null,tipo:null,nu:false};
function wInit(t,steps,cid,tipo,nu){
  W.steps=steps;W.cur=0;W.data={};W.cid=cid;W.tipo=tipo;W.nu=!!nu;
  document.getElementById('wT').textContent=t;
  showWiz();wRender();
}
function wRender(){
  var s=W.steps[W.cur];var n=W.steps.length;
  document.getElementById('wS').textContent=s.sub||'';
  document.getElementById('wL').textContent=(W.cur+1)+'/'+n;
  document.getElementById('wP').style.width=(((W.cur+1)/n)*100)+'%';
  document.getElementById('wB').innerHTML=s.render(W.data,W.cid);
  document.getElementById('wBk').style.display=W.cur>0?'block':'none';
  var ul=W.cur===n-1;
  document.getElementById('wNx').textContent=ul?'Guardar':'Siguiente';
  document.getElementById('wNx').className=ul?'btn or':'btn';
  if(s.init)setTimeout(function(){s.init();},50);
}
function wBack(){
  if(W.cur===0){
    if(W.nu){
      var c=D.cli.find(function(x){return x.id===W.cid;});
      if(c&&!c.nm){
        D.cli=D.cli.filter(function(x){return x.id!==W.cid;});
        fsDelContacto(W.cid); // el alta ya se habia escrito en Firestore, hay que revertirla
      }
    }
    hideWiz();return;
  }
  W.cur--;wRender();
}
function wPrev(){W.cur--;wRender();}
function wNext(){
  var s=W.steps[W.cur];
  if(s.val){var e=s.val();if(e){toast(e,'err');return;}}
  if(s.sv)s.sv(W.data);
  if(W.cur===W.steps.length-1){wFin();}else{W.cur++;wRender();}
}
function wFin(){
  var v={id:uid(),cid:W.cid,fecha:today(),vend:D.user?D.user.n:'',tipo:W.tipo};
  Object.assign(v,W.data);
  D.vis.push(v);
  var c=D.cli.find(function(x){return x.id===W.cid;});
  if(c){
    c.ul=v.fecha;
    if(W.nu&&gpsPend&&!c.lat){c.lat=gpsPend.lat;c.lng=gpsPend.lng;c.gpsAcc=gpsPend.acc;c.gpsF=gpsPend.f;c.gpsOk=true;gpsPend=null;}
    if(v.vendio===true)c.uv=v.fecha;
    if(v.eta)c.etapaEmbudo=v.eta;
    if(v.deu!==undefined)c.deu=v.deu;
    if(v.prox)v.prox=ajustarDiaHabil(v.prox);
    if(!v.prox&&v.vendio!==true){
      var etaRef=v.eta||c.etapaEmbudo||'Nuevo Prospecto';
      if(etaRef!=='No Le Interesa'&&etaRef!=='Perdido'){v.prox=sugerirProxima(etaRef);v._proxAuto=true;}
    }
    if(v.prox){
      c.prox=v.prox;
      // Agregar automaticamente a la Gira en la fecha de proxima visita
      var yaEnGira=D.gira.some(function(g){return g.cid===W.cid&&g.fecha===v.prox;});
      if(!yaEnGira){
        var ng={cid:W.cid,fecha:v.prox,orden:D.gira.filter(function(x){return x.fecha===v.prox;}).length};
        D.gira.push(ng);
        fsSetGira(ng);
        toast('Agregado a la Gira para '+fmt(v.prox)+(v._proxAuto?' (sugerida)':''),'ok');
      }
    }
  }
  // Alta de prospecto: la creacion cuenta como visita del dia, asi que la parada
  // queda reflejada tambien en la gira de HOY (y no se puede borrar: ya esta visitada).
  if(W.nu){
    var yaHoyG=D.gira.some(function(g){return g.cid===W.cid&&g.fecha===v.fecha;});
    if(!yaHoyG){
      var ngHoy={cid:W.cid,fecha:v.fecha,orden:D.gira.filter(function(x){return x.fecha===v.fecha;}).length};
      D.gira.push(ngHoy);
      fsSetGira(ngHoy);
    }
  }
  // Trazabilidad
  if(W.tipo==='cliente'){logEvento('visita',W.cid,c?c.nm:'?',v.vendio===true?'Visita con venta':'Visita sin venta','','');}
  else if(W.nu){logEvento('prospecto',W.cid,c?c.nm:'?','Nuevo prospecto registrado','','');}
  else{logEvento('visita',W.cid,c?c.nm:'?','Visita a prospecto','','');}
  fsSetVisita(v);
  if(c)fsSetContacto(c);
  hideWiz();toast('Guardado!','ok');
  // Confirmar ubicacion: si el contacto todavia no tiene GPS confirmado, ofrecerlo ahora
  // (parado en el local). Solo para el vendedor, una unica vez por contacto.
  if(c&&!c.gpsOk&&!W.origenAdmin){
    setTimeout(function(){confirmarUbicacion(c.id);},400);
    return;
  }
  if(W.origenAdmin){
    gGo('C');
  } else if(W.nu&&W.tipo==='prospecto'){
    vGo('C');
  } else {
    renderVH();if(gTab==='ejec')renderVG();
  }
}
// Modal de confirmacion de ubicacion: mini-mapa + boton "Estoy en el local" (GPS).
// Aparece la primera vez que se visita un contacto sin ubicacion confirmada.
var confMapaObj=null;
function confirmarUbicacion(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var h='<div style="font-size:13px;color:var(--muted);margin-bottom:10px">Confirma donde esta ubicado <b style="color:var(--text)">'+es(c.nm)+'</b> para que aparezca en el mapa. Estando parado en el local, toca el boton para marcar el punto exacto.</div>';
  h+='<div id="confMapa" style="width:100%;height:230px;border-radius:var(--rsm);overflow:hidden;background:var(--s2);margin-bottom:10px"></div>';
  h+='<div id="confEstado" style="font-size:12px;color:var(--muted);margin-bottom:10px;text-align:center"></div>';
  h+='<button class="btn" onclick="confMarcarGPS(\''+id+'\')" style="margin:0 0 8px">&#128205; Estoy en el local (marcar GPS)</button>';
  h+='<button class="btn sec" onclick="cMod();'+(!W.origenAdmin?'vGo(\'C\')':'')+'" style="margin:0">Ahora no, confirmar despues</button>';
  oMod('Confirmar ubicacion en el mapa',h);
  // Dibujar el mini-mapa
  setTimeout(function(){
    if(typeof L==='undefined'){var cm=document.getElementById('confMapa');if(cm)cm.innerHTML='<div style="padding:20px;text-align:center;color:var(--muted);font-size:12px">El mapa necesita internet</div>';return;}
    var centro=(c.lat&&c.lng)?[c.lat,c.lng]:[-31.4201,-64.1888];
    confMapaObj=L.map('confMapa',{zoomControl:true,attributionControl:false}).setView(centro,c.lat?15:12);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(confMapaObj);
    if(c.lat&&c.lng){
      confMarcador=L.circleMarker([c.lat,c.lng],{radius:10,fillColor:'#fb923c',color:'#0b1220',weight:2,fillOpacity:.9}).addTo(confMapaObj);
      var est=document.getElementById('confEstado');if(est)est.textContent='Ubicacion tentativa por direccion. Marca el GPS para confirmarla.';
    } else {
      var est2=document.getElementById('confEstado');if(est2)est2.textContent='Sin ubicacion todavia. Marca el GPS parado en el local.';
    }
    confMapaObj.invalidateSize();
  },250);
}
var confMarcador=null;
function confMarcarGPS(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var est=document.getElementById('confEstado');if(est)est.textContent='Obteniendo ubicacion...';
  capturarGPS(function(g){
    if(!g){if(est)est.innerHTML='<span style="color:var(--red)">No se pudo obtener el GPS. Verifica que este activado.</span>';return;}
    c.lat=g.lat;c.lng=g.lng;c.gpsAcc=g.acc;c.gpsF=g.f;c.gpsOk=true;delete c.gpsAprox;
    fsSetContacto(c);
    logEvento('edicion',c.id,c.nm,'Ubicacion GPS confirmada en visita','','');
    if(confMapaObj){
      confMapaObj.setView([g.lat,g.lng],16);
      if(confMarcador)confMapaObj.removeLayer(confMarcador);
      confMarcador=L.circleMarker([g.lat,g.lng],{radius:11,fillColor:'#4ade80',color:'#0b1220',weight:2,fillOpacity:.95}).addTo(confMapaObj);
    }
    if(est)est.innerHTML='<span style="color:var(--green)">Ubicacion confirmada'+(g.acc?' (precision '+g.acc+'m)':'')+'. Ya aparece en el mapa.</span>';
    toast('Ubicacion confirmada','ok');
    setTimeout(function(){cMod();if(!W.origenAdmin)vGo('C');},1400);
  });
}
function wf(inp,fk,lk,pk){
  if(!inp.files||!inp.files[0])return;
  // Guardar estado del wizard antes de procesar la foto (por si la app se suspende)
  if(W.cid)ls('jwiz_bk',{cid:W.cid,cur:W.cur,tipo:W.tipo,nu:W.nu,data:W.data});
  cFoto(inp.files[0],function(b){
    W.data[fk]=b;
    var l=document.getElementById(lk);if(l)l.textContent='Foto guardada OK';
    var p=document.getElementById(pk);if(p){p.src=b;p.style.display='block';}
    // Limpiar backup ya que se procesó exitosamente
    ls('jwiz_bk',null);
  });
}

// ── NUEVO PROSPECTO: wizard 4 pasos ───────────────────────────────────
function aVisPros(id,nu){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var steps=[
    {sub:'1/4 · Datos del local',
     render:function(){
       var tH=(D.cfg.tipos||[]).map(function(t){return ch(t,t,'tip',false,'');}).join('');
       var prodH=(D.cfg.tiposProducto||[]).map(function(p){return ch(p,p,'prods',true,'');}).join('');
       return '<div style="font-size:20px;font-weight:800;margin-bottom:14px">Datos del local</div>'+
         '<div class="fg"><label class="fl">Nombre del local *</label><input class="fi" id="pNm" placeholder="Ej: Kiosco El Sol" value="'+es(c.nm||'')+'"></div>'+
         '<div class="fg"><label class="fl">Dueno o encargado</label><input class="fi" id="pFan" placeholder="Ej: Juan Perez" value="'+es(c.fan||'')+'"></div>'+
         '<div class="fg"><label class="fl">Telefono *</label><input class="fi" id="pTel" type="tel" inputmode="numeric" placeholder="Ej: 3511234567" value="'+es(c.tel||'')+'"></div>'+
         '<div class="fg"><label class="fl">Telefono adicional <span style="font-size:10px;color:var(--muted)">(opcional)</span></label><input class="fi" id="pTel2" type="tel" inputmode="numeric" placeholder="Otro numero" value="'+es(c.tel2||'')+'"></div>'+
         '<div class="fg"><label class="fl">Email <span style="font-size:10px;color:var(--muted)">(opcional)</span></label><input class="fi" id="pEmail" type="email" inputmode="email" placeholder="mail@ejemplo.com" value="'+es(c.email||'')+'"></div>'+
         '<div class="fg"><label class="fl">Direccion</label><input class="fi" id="pDir" placeholder="Calle y numero" value="'+es(c.dir||'')+'"></div>'+
         '<div class="fg" style="position:relative"><label class="fl">Provincia *</label><input class="fi" id="pProv" autocomplete="off" placeholder="Escribi para buscar..." value="'+es(c.prov||'')+'"><div id="pProvSugg" style="display:none;position:absolute;left:0;right:0;top:100%;background:var(--s2);border:1px solid var(--border);border-radius:var(--rsm);max-height:200px;overflow-y:auto;z-index:50"></div></div>'+
         '<div class="fg" style="position:relative"><label class="fl">Ciudad *</label><input class="fi" id="pCiudad" autocomplete="off" placeholder="Escribi para buscar..." value="'+es(c.ciu||'')+'"><div id="pCiudadSugg" style="display:none;position:absolute;left:0;right:0;top:100%;background:var(--s2);border:1px solid var(--border);border-radius:var(--rsm);max-height:200px;overflow-y:auto;z-index:50"></div></div>'+
         '<div class="fg" id="pBarrioFg" style="position:relative;'+(c.ciu==='Córdoba Capital'?'':'display:none')+'"><label class="fl">Barrio</label><input class="fi" id="pBarrio" autocomplete="off" placeholder="Escribi para buscar..." value="'+es(c.bar||'')+'"><div id="pBarrioSugg" style="display:none;position:absolute;left:0;right:0;top:100%;background:var(--s2);border:1px solid var(--border);border-radius:var(--rsm);max-height:200px;overflow-y:auto;z-index:50"></div></div>'+
         '<div class="fg"><label class="fl">Tipo de negocio</label><div class="chips" style="margin-top:6px">'+tH+'</div></div>'+
         '<div class="fg"><label class="fl">Productos que vende (podes elegir varios)</label><div class="chips" style="margin-top:6px">'+prodH+'</div></div>';
     },
     init:function(){
       if(c.tipo)sc('tip',c.tipo);
       if(c.prods&&c.prods.length){c.prods.forEach(function(p){var el=document.querySelector('[data-id="'+p+'"][data-g="prods"]');if(el)el.classList.add('on');});}
       initAuto('pProv','pProvSugg',function(){return ARG_PROV;});
       initAuto('pCiudad','pCiudadSugg',function(){var pv=document.getElementById('pProv').value;return ARG_CIU[pv]||[];});
       initAuto('pBarrio','pBarrioSugg',function(){return ARG_BARRIOS;});
       document.getElementById('pProv').addEventListener('change',function(){document.getElementById('pCiudad').value='';});
       document.getElementById('pCiudad').addEventListener('change',function(){
         var v=this.value.trim();
         var bf=document.getElementById('pBarrioFg');if(bf)bf.style.display=(v==='Córdoba Capital')?'block':'none';
       });
     },
     val:function(){
       var nm=document.getElementById('pNm').value.trim();
       var tel=document.getElementById('pTel').value.trim();
       var prov=document.getElementById('pProv').value;
       var ciu=document.getElementById('pCiudad').value.trim();
       if(!nm)return 'Ingresa el nombre del local';
       if(!tel)return 'Ingresa el telefono';
       if(!prov)return 'Selecciona la provincia';
       if(!ciu)return 'Ingresa la ciudad';
       var tn=tel.replace(/\D/g,'');
       var dp=D.cli.find(function(x){return x.tel&&x.tel.replace(/\D/g,'')===tn&&x.id!==id;});
       if(dp)return 'Ya existe un contacto con ese telefono: '+dp.nm;
       return null;
     },
     sv:function(d){
       c.nm=d.nm=document.getElementById('pNm').value.trim();
       c.fan=d.fan=document.getElementById('pFan').value.trim();
       c.tel=d.tel=document.getElementById('pTel').value.trim();
       c.dir=d.dir=document.getElementById('pDir').value.trim();
       c.prov=d.prov=document.getElementById('pProv').value.trim();
       c.ciu=d.ciu=document.getElementById('pCiudad').value.trim();
       var bEl=document.getElementById('pBarrio');c.bar=d.bar=(bEl&&c.ciu==='Córdoba Capital')?bEl.value.trim():'';
       c.tipo=d.tipo=gc('tip');
       c.prods=d.prods=gcs('prods');
       var emailEl2=document.getElementById('pEmail');c.email=d.email=emailEl2?emailEl2.value.trim():'';
       var tel2El=document.getElementById('pTel2');c.tel2=d.tel2=tel2El?tel2El.value.trim():'';
       fsSetContacto(c);
     }},

    {sub:'2/4 · Competencia',
     render:function(){
       return '<div style="font-size:20px;font-weight:800;margin-bottom:14px">Competencia</div>'+
         '<div class="fg"><label class="fl">Marcas presentes</label><div class="chips" style="margin-top:6px">'+
         ch('Frigor','Frigor','comp',true,'')+ch('Arcor','Arcor','comp',true,'')+ch('Grido','Grido','comp',true,'')+ch('Glups','Glups','comp',true,'')+ch('Sin competencia','Sin competencia','comp',true,'gon')+ch('Otra','Otra','comp',true,'')+'</div></div>'+
         '<div class="fg"><label class="fl">Freezer</label><div class="chips" style="margin-top:6px">'+
         ch('Propio','Freezer propio','cFr',false,'gon')+ch('Competencia','De la competencia','cFr',false,'oon')+ch('Sin freezer','Sin freezer','cFr',false,'')+'</div></div>'+
         '<div class="fg"><label class="fl">Observaciones de la competencia</label><textarea class="fi fta" id="cEx" placeholder="Precios, condiciones, notas...">'+es(c.cEx||'')+'</textarea></div>';
     },
     init:function(){if(c.comp){c.comp.split(',').forEach(function(cv){var el=document.querySelector('[data-id="'+cv.trim()+'"][data-g="comp"]');if(el)el.classList.add('on');});}if(c.cFr)sc('cFr',c.cFr);},
     sv:function(d){c.comp=d.comp=gcs('comp').join(', ');c.cFr=d.cFr=gc('cFr');c.cEx=d.cEx=document.getElementById('cEx').value;fsSetContacto(c);}},
    {sub:'3/4 · Evaluacion del comercio',
     render:function(){
       return '<div style="font-size:20px;font-weight:800;margin-bottom:14px">Evaluacion</div>'+
         '<div class="card"><div class="ct">Calificacion de ubicacion</div><div class="chips">'+ch('A','A — Excelente','cU',false,'gon')+ch('B','B — Buena','cU',false,'gon')+ch('C','C — Regular','cU',false,'oon')+ch('D','D — Baja','cU',false,'ron')+'</div></div>'+
         '<div class="card"><div class="ct">Transito</div><div class="chips">'+ch('Alto','Alto','tr',false,'gon')+ch('Medio','Medio','tr',false,'oon')+ch('Bajo','Bajo','tr',false,'ron')+'</div></div>'+
         '<div class="fg"><label class="fl">Proxima visita</label><input class="fi" type="date" id="pPV" value="'+es(c.prox||'')+'"></div>';
     },
     init:function(){if(c.calU)sc('cU',c.calU);if(c.trans)sc('tr',c.trans);},
     sv:function(d){c.calU=d.calU=gc('cU');c.trans=d.trans=gc('tr');d.prox=document.getElementById('pPV').value;if(d.prox)c.prox=d.prox;fsSetContacto(c);}},
    {sub:'4/4 · Observaciones',
     render:function(){
       var etH=ET.map(function(e){var col=EC[e];return '<div onclick="sEt(\''+es(e)+'\')" id="et_'+e.replace(/\s/g,'_')+'" style="padding:12px 14px;border-radius:var(--rsm);border:1px solid var(--border);background:var(--s2);cursor:pointer;margin-bottom:6px;display:flex;align-items:center;gap:10px"><div style="width:10px;height:10px;border-radius:50%;background:'+col+'"></div><div style="font-size:13px;font-weight:700">'+es(e)+'</div></div>';}).join('');
       return '<div style="font-size:20px;font-weight:800;margin-bottom:14px">Observaciones</div>'+
         '<div class="fg"><label class="fl">Notas de la visita</label><textarea class="fi fta" id="pObs" placeholder="Cualquier dato relevante...">'+es(c.obs||'')+'</textarea></div>'+
         '<div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">ETAPA DEL EMBUDO</div>'+etH;
     },
     init:function(){sEt(c.etapaEmbudo||'Nuevo Prospecto');},
     sv:function(d){c.obs=d.obs=document.getElementById('pObs').value;c.etapaEmbudo=d.eta=W.data.eta||'Nuevo Prospecto';if(!c.ing)c.ing=today();fsSetContacto(c);}}
  ];
  wInit(nu?'Nuevo prospecto':c.nm,steps,id,'prospecto',nu);
}
function sEt(et){
  W.data.eta=et;
  ET.forEach(function(e){var el=document.getElementById('et_'+e.replace(/\s/g,'_'));if(el){var col=EC[e];el.style.borderColor=e===et?col:'var(--border)';el.style.background=e===et?'rgba('+h2r(col)+',.1)':'var(--s2)';}});
}

// ── VISITA CLIENTE: wizard 5 pasos ────────────────────────────────────
function aVisita(id){
  var c=D.cli.find(function(x){return x.id===id;});if(!c)return;
  var rz=D.cfg.razones||['Sin plata','Freezer lleno','Otro'];
  var steps=[
    {sub:'1/5 · Imagen exterior',
     render:function(){return '<div style="font-size:20px;font-weight:800;margin-bottom:12px">Imagen exterior</div><div style="color:var(--muted);font-size:13px;margin-bottom:14px">Carteleria, limpieza y acceso al local</div><div class="chips">'+ch('OK','OK','ext',false,'gon')+ch('Mejorar','Necesita mejora','ext',false,'oon')+ch('Critico','Critico','ext',false,'ron')+'</div><div class="fg" style="margin-top:14px"><label class="fl">Observaciones</label><textarea class="fi fta" id="oE" placeholder="Detalles..."></textarea></div><label class="pb"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="1.8" stroke-linecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg><span id="lE">Foto exterior</span><input type="file" accept="image/*" capture="environment" style="display:none" onchange="wf(this,\'fE\',\'lE\',\'pE\')"></label><img id="pE" class="pp">';},
     init:function(){if(W.data.iE)sc('ext',W.data.iE);},
     sv:function(d){d.iE=gc('ext');d.oE=document.getElementById('oE').value;}},
    {sub:'2/5 · Imagen interior',
     render:function(){return '<div style="font-size:20px;font-weight:800;margin-bottom:12px">Imagen interior</div><div style="color:var(--muted);font-size:13px;margin-bottom:14px">Orden, limpieza y presentacion interna</div><div class="chips">'+ch('OK','OK','int',false,'gon')+ch('Mejorar','Necesita mejora','int',false,'oon')+ch('Critico','Critico','int',false,'ron')+'</div><div class="fg" style="margin-top:14px"><label class="fl">Observaciones</label><textarea class="fi fta" id="oI" placeholder="Detalles..."></textarea></div><label class="pb"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="1.8" stroke-linecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg><span id="lI">Foto interior</span><input type="file" accept="image/*" capture="environment" style="display:none" onchange="wf(this,\'fI\',\'lI\',\'pI\')"></label><img id="pI" class="pp">';},
     init:function(){if(W.data.iI)sc('int',W.data.iI);},
     sv:function(d){d.iI=gc('int');d.oI=document.getElementById('oI').value;}},
    {sub:'3/5 · Control del freezer',
     render:function(){return '<div style="font-size:20px;font-weight:800;margin-bottom:12px">Freezer</div><div class="card"><div class="ct">Ubicacion</div><div class="chips">'+ch('OK','OK','fU',false,'gon')+ch('Mej','Mejorable','fU',false,'oon')+ch('Reu','Reubicar','fU',false,'ron')+'</div></div><div class="card"><div class="ct">Planimetria</div><div class="chips">'+ch('OK','OK','fP',false,'gon')+ch('Mej','Mejorable','fP',false,'oon')+ch('Cri','Critica','fP',false,'ron')+'</div></div><div class="card"><div class="ct">Estado exterior</div><div class="chips">'+ch('OK','OK','fX',false,'gon')+ch('Ate','Necesita atencion','fX',false,'oon')+ch('Rot','Roto/Falla','fX',false,'ron')+'</div></div><div class="card"><div class="ct">Estado interior</div><div class="chips">'+ch('OK','OK','fN',false,'gon')+ch('Esc','Escarchado','fN',false,'oon')+ch('Des','Desorganizado','fN',false,'ron')+'</div></div><label class="pb"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="1.8" stroke-linecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg><span id="lF">Foto freezer</span><input type="file" accept="image/*" capture="environment" style="display:none" onchange="wf(this,\'fF\',\'lF\',\'pF\')"></label><img id="pF" class="pp">';},
     init:function(){['fU','fP','fX','fN'].forEach(function(g){if(W.data['fr'+g])sc(g,W.data['fr'+g]);});},
     sv:function(d){['fU','fP','fX','fN'].forEach(function(g){d['fr'+g]=gc(g);});}},
    {sub:'4/5 · Venta',
     render:function(){
       var rzH=rz.map(function(r){return ch(r,r,'nv',true,'');}).join('');
       return '<div style="font-size:20px;font-weight:800;margin-bottom:14px">Venta</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px"><div id="bS" onclick="tgV(true)" style="padding:18px;border-radius:var(--r);border:2px solid var(--border);text-align:center;font-size:18px;font-weight:800;cursor:pointer;background:var(--s2);color:var(--muted)">SI</div><div id="bN" onclick="tgV(false)" style="padding:18px;border-radius:var(--r);border:2px solid var(--border);text-align:center;font-size:18px;font-weight:800;cursor:pointer;background:var(--s2);color:var(--muted)">NO</div></div><div id="nvS" style="display:none"><div class="ct">Motivo (podes elegir varios)</div><div class="chips">'+rzH+'</div><div id="nvO" style="display:none;margin-top:8px"><input class="fi" id="otroT" placeholder="Especifica el motivo..."></div></div><div class="fg" style="margin-top:14px"><label class="fl">Notas de la visita</label><textarea class="fi fta" id="ntV" placeholder="Observaciones, acuerdos..."></textarea></div><div class="fg"><label class="fl">Proxima visita</label><input class="fi" type="date" id="prV"></div><div class="sr"><span style="font-weight:700;color:var(--red)">Marcar como deudor</span><label class="sw"><input type="checkbox" id="chD"><span class="sl3"></span></label></div>';
     },
     init:function(){if(W.data.vendio===true)tgV(true);else if(W.data.vendio===false)tgV(false);},
     sv:function(d){d.nt=document.getElementById('ntV').value;d.prox=document.getElementById('prV').value;d.deu=document.getElementById('chD').checked;if(d.vendio===false){d.razones=gcs('nv');var ot=document.getElementById('otroT');if(ot&&ot.value)d.otroM=ot.value;}}},
    {sub:'5/5 · Material POP',
     render:function(){return '<div style="font-size:20px;font-weight:800;margin-bottom:12px">Material POP</div><div style="color:var(--muted);font-size:13px;margin-bottom:14px">Carteleria, folletos y exhibidores</div><div class="chips">'+ch('OK','OK y actualizado','pop',false,'gon')+ch('Fal','Falta material','pop',false,'oon')+ch('Mal','En mal estado','pop',false,'ron')+ch('Sin','Sin POP','pop',false,'')+'</div><div class="fg" style="margin-top:14px"><label class="fl">Notas finales</label><textarea class="fi fta" id="ntP"></textarea></div>';},
     init:function(){if(W.data.pop)sc('pop',W.data.pop);},
     sv:function(d){d.pop=gc('pop');d.ntP=document.getElementById('ntP').value;}}
  ];
  wInit(c.nm,steps,id,'cliente',false);
}
function tgV(si){
  W.data.vendio=si;
  var bS=document.getElementById('bS');var bN=document.getElementById('bN');var sec=document.getElementById('nvS');
  if(bS){bS.style.background=si?'rgba(74,222,128,.2)':'var(--s2)';bS.style.borderColor=si?'var(--green)':'var(--border)';bS.style.color=si?'var(--green)':'var(--muted)';}
  if(bN){bN.style.background=!si?'rgba(248,113,113,.2)':'var(--s2)';bN.style.borderColor=!si?'var(--red)':'var(--border)';bN.style.color=!si?'var(--red)':'var(--muted)';}
  if(sec)sec.style.display=si?'none':'block';
  setTimeout(function(){var op=document.querySelector('[data-id="Otro"][data-g="nv"]');if(op&&!op._ok){op._ok=true;op.addEventListener('click',function(){var r=document.getElementById('nvO');if(r)r.style.display=op.classList.contains('on')?'block':'none';});}},50);
}

// ── GIRA UNIFICADA (semanal + tarjetas del día) ─────────────────────
var gSemOffset=0;
var gTab="ejec"; // compatibilidad con wFin y guardarVisitaProspecto
var gDiaActivo='';   // fecha 'YYYY-MM-DD' del día expandido

function renderVG(){
  var hoy=today();
  if(!gDiaActivo){
    // Por defecto: hoy. Pero si hoy es sabado/domingo (dias que no existen en la
    // grilla Lun-Vie), arrancar mostrando el LUNES de la semana que viene.
    var dh=new Date();
    if(dh.getDay()===6||dh.getDay()===0){
      dh.setDate(dh.getDate()+(dh.getDay()===6?2:1));
      gDiaActivo=fechaLocal(dh);
      gSemOffset=1;
    } else {
      gDiaActivo=hoy;
    }
  }
  // Calcular lunes de la semana según offset
  var lunes=new Date();
  var dow=lunes.getDay()===0?6:lunes.getDay()-1;
  lunes.setDate(lunes.getDate()-dow+(gSemOffset*7));
  lunes.setHours(0,0,0,0);
  var viernes=new Date(lunes);viernes.setDate(lunes.getDate()+4);
  var lunesS=fechaLocal(lunes);
  var viernesS=fechaLocal(viernes);
  var nomSem=lunes.toLocaleDateString('es-AR',{day:'numeric',month:'short'})+' — '+viernes.toLocaleDateString('es-AR',{day:'numeric',month:'short'});
  var h='';
  // Navegación semana
  h+='<div style="display:flex;align-items:center;padding:10px 14px;border-bottom:1px solid var(--border);flex-shrink:0">';
  h+='<button onclick="gSemOffset-=1;renderVG()" style="background:none;border:none;color:var(--cyan);font-size:20px;cursor:pointer;padding:4px 10px;border-radius:6px">&#8249;</button>';
  h+='<div style="flex:1;text-align:center"><div style="font-size:13px;font-weight:700">'+nomSem+'</div>';
  h+='<div style="font-size:10px;color:var(--muted)">'+(gSemOffset===0?'Esta semana':gSemOffset===1?'Próxima semana':gSemOffset>0?'+'+gSemOffset+' semanas':gSemOffset+' semanas')+'</div></div>';
  h+='<button onclick="gSemOffset+=1;if(gSemOffset>4)gSemOffset=4;renderVG()" style="background:none;border:none;color:'+(gSemOffset>=4?'var(--border)':'var(--cyan)')+';font-size:20px;cursor:pointer;padding:4px 10px;border-radius:6px" '+(gSemOffset>=4?'disabled':'')+'>&#8250;</button>';
  h+='</div>';
  // Grilla Lun-Vie
  var dias=['Lun','Mar','Mie','Jue','Vie'];
  h+='<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;padding:8px 10px;border-bottom:1px solid var(--border);flex-shrink:0">';
  for(var i=0;i<5;i++){
    var dia=new Date(lunes);dia.setDate(lunes.getDate()+i);
    var diaS=fechaLocal(dia);
    var plan=misGira().filter(function(g){return g.fecha===diaS;});
    var visitados=plan.filter(function(g){return D.vis.some(function(v){return v.cid===g.cid&&v.fecha===diaS;});}).length;
    var esHoy=diaS===hoy;var esActivo=diaS===gDiaActivo;
    var borderCol=esActivo?'var(--cyan)':esHoy?'rgba(34,211,238,.3)':'var(--border)';
    h+='<div onclick="gDiaActivo=\''+diaS+'\';renderVG()" style="background:'+(esActivo?'rgba(34,211,238,.1)':'var(--s1)')+';border:2px solid '+borderCol+';border-radius:8px;padding:8px 4px;text-align:center;cursor:pointer">';
    h+='<div style="font-size:10px;font-weight:700;color:'+(esHoy?'var(--cyan)':'var(--muted)')+';text-transform:uppercase">'+dias[i]+'</div>';
    h+='<div style="font-size:17px;font-weight:900;color:'+(esActivo?'var(--cyan)':'var(--text)')+'">'+dia.getDate()+'</div>';
    if(plan.length){
      h+='<div style="font-size:10px;color:'+(visitados===plan.length?'var(--green)':esActivo?'var(--cyan)':'var(--muted)')+'">'+visitados+'/'+plan.length+'</div>';
    }
    h+='</div>';
  }
  h+='</div>';
  // Verificar si el día activo está en esta semana; si no, seleccionar el lunes
  if(gDiaActivo<lunesS||gDiaActivo>viernesS){gDiaActivo=lunesS;}
  // Tarjetas del día activo
  var diaActivoD=new Date(gDiaActivo+'T12:00:00');
  var nomDia=diaActivoD.toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long'});
  var planActivo=misGira().filter(function(g){return g.fecha===gDiaActivo;}).sort(function(a,b){return(a.orden||0)-(b.orden||0);});
  h+='<div class="scr">';
  h+='<div style="padding:10px 14px 6px;display:flex;align-items:center;gap:8px">';
  h+='<div style="font-size:13px;font-weight:700;text-transform:capitalize;flex:1">'+nomDia+(gDiaActivo===hoy?' <span style="background:rgba(34,211,238,.15);color:var(--cyan);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px">HOY</span>':'')+'</div>';
  h+='<button class="sm g" onclick="abrirAgregarAGira(\''+gDiaActivo+'\')">+ Agregar</button>';
  h+='</div>';
  if(!planActivo.length){
    h+='<div style="text-align:center;padding:30px 14px;color:var(--muted)"><div style="font-size:28px;margin-bottom:8px">📅</div><div style="font-size:13px">Sin visitas para este día</div></div>';
  } else {
    var n=planActivo.length;
    planActivo.forEach(function(g,idx){
      var c=D.cli.find(function(x){return x.id===g.cid;});if(!c)return;
      var yaVis=D.vis.some(function(v){return v.cid===g.cid&&v.fecha===gDiaActivo;});
      var d7=dias_fn(c.ul);
      var colVis=d7===null?'var(--red)':d7>14?'var(--red)':d7>7?'var(--orange)':'var(--green)';
      h+='<div style="margin:0 10px 10px;border:1px solid '+(yaVis?'var(--green)':'var(--border)')+';border-radius:var(--r);background:var(--s1);overflow:hidden">';
      // Header de la tarjeta
      h+='<div style="display:flex;align-items:center;padding:10px 12px;gap:8px;border-bottom:1px solid var(--border)">';
      h+='<div style="display:flex;flex-direction:column;gap:1px;flex-shrink:0">';
      h+='<button style="background:none;border:none;font-size:12px;cursor:pointer;padding:1px 4px;color:var(--muted);'+(idx===0?'opacity:.2':'')+';" '+(idx===0?'disabled':'')+' onclick="moverEnGira(\''+g.cid+'\',\''+gDiaActivo+'\',-1)">▲</button>';
      h+='<button style="background:none;border:none;font-size:12px;cursor:pointer;padding:1px 4px;color:var(--muted);'+(idx===n-1?'opacity:.2':'')+';" '+(idx===n-1?'disabled':'')+' onclick="moverEnGira(\''+g.cid+'\',\''+gDiaActivo+'\',1)">▼</button>';
      h+='</div>';
      h+='<div style="width:28px;height:28px;border-radius:50%;background:'+(yaVis?'var(--green)':'var(--s3)')+';display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:'+(yaVis?'#000':'var(--text)')+';flex-shrink:0">'+(yaVis?'✓':idx+1)+'</div>';
      h+='<div style="flex:1;min-width:0">';
      h+='<div style="font-size:15px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+es(c.nm)+'</div>';
      if(c.fan)h+='<div style="font-size:15px;font-weight:700;color:var(--cyan);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+es(c.fan)+'</div>';
      h+='<div style="font-size:11px;color:var(--muted)">'+es(c.tipo||'')+(c.ciu?' · '+es(c.ciu):c.bar?' · '+es(c.bar):'')+'</div>';
      h+='</div>';
      h+='<span class="tg '+(c.esP?'o':'g')+'" style="flex-shrink:0">'+(c.esP?'PROS':'CLI')+'</span>';
      h+='<button onclick="quitarDeGira(\''+g.cid+'\',\''+gDiaActivo+'\')" style="background:none;border:none;color:var(--muted);font-size:16px;cursor:pointer;padding:4px;flex-shrink:0">✕</button>';
      h+='</div>';
      // Datos clave
      h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border)">';
      h+='<div style="background:var(--s1);padding:7px 12px"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.3px">Última visita</div><div style="font-size:12px;font-weight:700;color:'+colVis+'">'+fmt(c.ul)+'</div></div>';
      h+='<div style="background:var(--s1);padding:7px 12px"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.3px">Último pedido</div><div style="font-size:12px;font-weight:700;color:var(--green)">'+fmt(c.uv)+'</div></div>';
      h+='</div>';
      // Botones de acción
      h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1px solid var(--border)">';
      h+='<button onclick="abrirVisita(\''+g.cid+'\')" style="padding:12px;background:none;border:none;border-right:1px solid var(--border);color:var(--cyan);font-size:12px;font-weight:700;cursor:pointer">'+(yaVis?'✓ Ver visita':'Registrar visita')+'</button>';
      if(c.tel){
        h+='<button onclick="enviarPedidoWA(\''+g.cid+'\')" style="padding:12px;background:none;border:none;color:var(--green);font-size:12px;font-weight:700;cursor:pointer">📦 Pedido WA</button>';
      } else {
        h+='<div style="padding:12px;text-align:center;font-size:11px;color:var(--muted)">Sin teléfono</div>';
      }
      h+='</div>';
      h+='</div>';
    });
  }
  h+='</div>';
  var _vgb=document.getElementById('vGB');if(_vgb)_vgb.innerHTML=h;
}
// Alias para dias() con nombre diferente para usar dentro de renderVG sin conflicto de scope
function dias_fn(f){return dias(f);}

function enviarPedidoWA(id){
  var c=D.cli.find(function(x){return x.id===id;});
  if(!c||!c.tel){toast('Sin telefono','err');return;}
  var msg=(D.cfg.msgPedido||'Hola {nombre}! Nos podés pasar el pedido de {negocio}?')
    .replace(/\{nombre\}/gi,c.fan||c.nm||'')
    .replace(/\{negocio\}/gi,c.nm||'')
    .replace(/\{ciudad\}/gi,c.ciu||c.bar||'');
  // Agregar link de catálogo si está configurado
  var linkPed=D.cfg.msgLinks&&D.cfg.msgLinks.todos?D.cfg.msgLinks.todos:'';
  if(linkPed)msg=msg+'\n\n'+linkPed;
  window.open('https://wa.me/54'+c.tel.replace(/\D/g,'')+'?text='+encodeURIComponent(msg),'_blank');
}

// ── GIRA SEMANAL ─────────────────────────────────────────────────────
function moverEnGira(cid,fecha,dir){
  if(arguments[1]<today()&&!(D.user&&D.user.r==='admin')){toast('Los dias pasados no se pueden modificar','err');return;}
  var dd=D.gira.filter(function(g){return g.fecha===fecha;}).sort(function(a,b){return(a.orden||0)-(b.orden||0);});
  var idx=dd.findIndex(function(g){return g.cid===cid;});
  var idx2=idx+dir;if(idx2<0||idx2>=dd.length)return;
  dd.forEach(function(g,i){g.orden=i;});
  var tmp=dd[idx].orden;dd[idx].orden=dd[idx2].orden;dd[idx2].orden=tmp;
  fsSetGira(dd[idx]);
  fsSetGira(dd[idx2]);
  verDiaGira(fecha);
}
function verDiaGira(fecha){
  var planDia=D.gira.filter(function(g){return g.fecha===fecha;}).sort(function(a,b){return(a.orden||0)-(b.orden||0);});
  var hoy=today();var esHoy=fecha===hoy;
  var nomDia=new Date(fecha+'T12:00:00').toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long'});
  var h='<div style="font-size:13px;color:var(--muted);margin-bottom:14px;text-transform:capitalize">'+nomDia+(esHoy?' · <span style="color:var(--cyan);font-weight:700">HOY</span>':'')+'</div>';
  var n=planDia.length;
  if(n){
    planDia.forEach(function(g,idx){
      var c=D.cli.find(function(x){return x.id===g.cid;});if(!c)return;
      var yaVis=esHoy&&D.vis.some(function(v){return v.cid===g.cid&&v.fecha===hoy;});
      h+='<div style="display:flex;align-items:center;gap:6px;padding:9px 0;border-bottom:1px solid var(--border)">';
      h+='<div style="display:flex;flex-direction:column;gap:1px;flex-shrink:0">';
      h+='<button style="background:none;border:none;font-size:13px;cursor:pointer;padding:2px 5px;opacity:'+(idx===0?'.2':'1')+'" '+(idx===0?'disabled':'')+' onclick="moverEnGira(\''+g.cid+'\',\''+fecha+'\',-1)">&#9650;</button>';
      h+='<button style="background:none;border:none;font-size:13px;cursor:pointer;padding:2px 5px;opacity:'+(idx===n-1?'.2':'1')+'" '+(idx===n-1?'disabled':'')+' onclick="moverEnGira(\''+g.cid+'\',\''+fecha+'\',1)">&#9660;</button>';
      h+='</div>';
      h+='<div style="width:24px;height:24px;border-radius:50%;background:'+(yaVis?'var(--green)':'var(--s3)')+';display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;flex-shrink:0">'+(yaVis?'&#10003;':idx+1)+'</div>';
      h+='<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+es(c.nm)+'</div>';
      h+='<div style="font-size:11px;color:var(--muted)">'+es(c.ciu||c.bar||'')+(c.tipo?' · '+es(c.tipo):'')+'</div></div>';
      if(esHoy&&!yaVis){h+='<button class="sm g" onclick="cMod();abrirVisita(\''+c.id+'\')">Ir</button>';}
      h+='<button class="sm rd" onclick="quitarDeGira(\''+c.id+'\',\''+fecha+'\');verDiaGira(\''+fecha+'\')">&#215;</button></div>';
    });
  } else {
    h+='<div style="color:var(--muted);font-size:13px;text-align:center;padding:20px 0">Sin visitas planificadas</div>';
  }
  h+='<button class="btn" onclick="abrirAgregarAGira(\''+fecha+'\')" style="margin-top:14px">+ Agregar contactos</button>';
  oMod('Gira del dia',h);
}

// ── EMBUDO: helper para filtros sin comillas anidadas
function setVEFiltro(el){
  var k=el.getAttribute('data-k');
  var v=el.getAttribute('data-v');
  if(k==='bar'){vEBar=(vEBar===v?'':v);}
  else if(k==='tip'){vETipNeg=(vETipNeg===v?'':v);}
  renderVE();
}
// ── EMBUDO: ordenamiento ──────────────────────────────────────────────
var vEOrd='nm';var vEBar='';var vETipNeg='';
function renderVE(){
  var mc=misContactos();
  var all=['Todos','Nuevo Prospecto','Contactado','Propuesta Enviada','Negociacion','Cliente Activo','No Le Interesa','Perdido'];
  // Valores dinámicos de zona y tipo
  var eSet={};mc.forEach(function(c){if(c.bar)eSet[c.bar]=true;if(c.ciu)eSet[c.ciu]=true;});
  var eLugares=Object.keys(eSet).sort();
  var eTSet={};mc.forEach(function(c){if(c.tipo)eTSet[c.tipo]=true;});
  var eTipos=Object.keys(eTSet).sort();
  var fh='';
  // Mi embudo: grafico colapsable con % por etapa (solo datos del vendedor)
  fh+='<div style="margin-bottom:8px">';
  fh+='<span class="fb'+(vEChartOpen?' on':'')+'" onclick="vEChartOpen=!vEChartOpen;renderVE()" style="font-size:11px;padding:5px 11px">&#128202; Mi embudo '+(vEChartOpen?'&#9650;':'&#9660;')+'</span>';
  if(vEChartOpen)fh+='<div style="background:var(--s1);border:1px solid var(--border);border-radius:var(--rsm);padding:12px;margin-top:8px">'+embudoBarrasHTML(mc)+'</div>';
  fh+='</div>';
  // Etapas - fila compacta con scroll horizontal
  fh+='<div class="veRow">';
  fh+=all.map(function(e){return '<span class="fb'+(vEFil===e?' on':'')+'" onclick="setVEF(this.getAttribute(\'data-e\'))" data-e="'+es(e)+'" style="font-size:11px;padding:6px 12px">'+es(e)+'</span>';}).join('');
  fh+='</div>';
  // Zona y Tipo como desplegables (solo opciones cargadas)
  fh+='<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">';
  if(eLugares.length){
    fh+='<select onchange="vEBar=this.value;renderVE()">';
    fh+='<option value="">Todas las zonas</option>';
    eLugares.forEach(function(l){fh+='<option value="'+es(l)+'"'+(vEBar===l?' selected':'')+'>'+es(l)+'</option>';});
    fh+='</select>';
  }
  if(eTipos.length){
    fh+='<select onchange="vETipNeg=this.value;renderVE()">';
    fh+='<option value="">Todos los tipos</option>';
    eTipos.forEach(function(t){fh+='<option value="'+es(t)+'"'+(vETipNeg===t?' selected':'')+'>'+es(t)+'</option>';});
    fh+='</select>';
  }
  fh+='</div>';
  // Orden
  fh+='<div class="veRow" style="margin-top:6px">';
  [['nm','A-Z'],['bar','Barrio'],['tipo','Tipo'],['_inac','Urgencia']].forEach(function(x){
    fh+='<span class="fb'+(vEOrd===x[0]?' on':'')+'" onclick="vEOrd=\''+x[0]+'\';renderVE()" style="font-size:10px">'+x[1]+'</span>';
  });
  fh+='</div>';
  var _vef=document.getElementById('vEF');if(_vef)_vef.innerHTML=fh;
  // Filtrar
  var cs=vEFil==='Todos'?mc.slice():mc.filter(function(c){
    if(vEFil==='Nuevo Prospecto')return c.esP&&(!c.etapaEmbudo||c.etapaEmbudo==='Nuevo Prospecto');
    return c.etapaEmbudo===vEFil;
  });
  if(vEBar)cs=cs.filter(function(c){return c.bar===vEBar||c.ciu===vEBar;});
  if(vETipNeg)cs=cs.filter(function(c){return c.tipo===vETipNeg;});
  var vqEl=document.getElementById('vEQ');var vq=vqEl?vqEl.value.toLowerCase().trim():'';
  if(vq)cs=cs.filter(function(c){return (c.nm||'').toLowerCase().includes(vq)||(c.fan||'').toLowerCase().includes(vq)||(c.bar||'').toLowerCase().includes(vq);});
  if(vEOrd==='_inac'){
    cs.sort(function(a,b){var da=diasSinGestion(a);var db=diasSinGestion(b);return(db===null?9999:db)-(da===null?9999:da);});
  } else {
    cs.sort(function(a,b){return(a[vEOrd]||'').localeCompare(b[vEOrd]||'');});
  }
  var _veb=document.getElementById('vEB');if(!_veb)return;
  // En escritorio con "Todos" seleccionado: tablero Kanban por etapa
  if(window.innerWidth>=900&&vEFil==='Todos'){
    var etapasK=['Nuevo Prospecto','Contactado','Propuesta Enviada','Negociacion','Cliente Activo','No Le Interesa','Perdido'];
    var kh='<div class="kanban">';
    etapasK.forEach(function(eta){
      var colCards=cs.filter(function(c){return(c.etapaEmbudo||(c.esP?'Nuevo Prospecto':'Cliente Activo'))===eta;});
      var colorEta=EC[eta]||'var(--muted)';
      kh+='<div class="kbCol"><div class="kbHead" style="color:'+colorEta+'"><span>'+eta+'</span><span style="color:var(--muted)">'+colCards.length+'</span></div>';
      if(!colCards.length)kh+='<div style="font-size:11px;color:var(--muted);padding:8px 0">Sin contactos</div>';
      colCards.forEach(function(c){kh+=embudoCardHTML(c);});
      kh+='</div>';
    });
    kh+='</div>';
    _veb.innerHTML=kh;
    return;
  }
  if(!cs.length){_veb.innerHTML='<div class="empty">Sin contactos con los filtros actuales</div>';return;}
  var h='';
  cs.forEach(function(c){h+=embudoCardHTML(c);});
  _veb.innerHTML=h;
}
// Tarjeta de contacto del Embudo (reusada en la lista mobile y en el tablero Kanban de escritorio)
function embudoCardHTML(c){
  var col=EC[c.etapaEmbudo]||'var(--muted)';
  var eta=c.etapaEmbudo||(c.esP?'Nuevo Prospecto':'Cliente Activo');
  var dInac=diasSinGestion(c);
  var esInac=eta!=='No Le Interesa'&&eta!=='Perdido'&&(dInac===null||dInac>=umbralEtapa(eta));
  var h='<div class="cc">';
  h+='<div style="display:flex;align-items:center;gap:10px;margin-bottom:9px">';
  h+='<div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:700">'+es(c.nm)+'</div>';
  if(c.fan)h+='<div style="font-size:15px;font-weight:700;color:var(--cyan)">'+es(c.fan)+'</div>';
  h+='<div style="font-size:12px;color:var(--muted)">'+es(c.bar||c.ciu||'')+(c.tipo?' · '+es(c.tipo):'')+'</div>';
  if(esInac)h+='<div style="font-size:11px;color:var(--red);font-weight:700;margin-top:2px">&#9888; '+(dInac===null?'Sin visitas registradas':dInac+' dias sin gestion')+'</div>';
  h+='</div>';
  h+='<span style="background:rgba('+h2r(col)+',.15);color:'+col+';padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700;white-space:nowrap">'+es(c.etapaEmbudo||'Prospecto')+'</span></div>';
  h+='<div style="display:flex;gap:6px">';
  h+='<button class="sm g" onclick="abrirVisita(\''+c.id+'\')">Visita</button>';
  if(c.tel)h+='<button class="sm wa" onclick="envWA(\''+c.id+'\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>';
  h+='<select class="sm" onchange="cambiarEtapa(\''+c.id+'\',this.value);this.value=\'\'" style="border-color:'+col+';color:'+col+';max-width:120px">';
  h+='<option value="">Mover etapa</option>';
  ET.concat(SA).forEach(function(et){if(et!==c.etapaEmbudo)h+='<option value="'+es(et)+'">'+es(et)+'</option>';});
  h+='</select></div></div>';
  return h;
}

// ── CONTACTOS: tarjetas mejoradas con todos los datos ─────────────────
function renderVC(){
  var q=(document.getElementById('vCQ')&&document.getElementById('vCQ').value||'').toLowerCase();
  var cs=misContactos().slice();
  if(vcF.tipo_ctx==='prospecto')cs=cs.filter(function(c){return c.esP;});
  else if(vcF.tipo_ctx==='cliente')cs=cs.filter(function(c){return !c.esP;});
  if(vcF.bar)cs=cs.filter(function(c){return c.bar===vcF.bar||c.ciu===vcF.bar;});
  if(vcF.tipOneg)cs=cs.filter(function(c){return c.tipo===vcF.tipOneg;});
  if(vcF.vis==='v')cs=cs.filter(function(c){return !!c.ul;});
  if(vcF.vis==='sv')cs=cs.filter(function(c){return !c.ul;});
  if(vcF.frez==='sin')cs=cs.filter(function(c){return c.cFr==='Sin freezer'||!c.cFr;});
  if(vcF.frez==='pro')cs=cs.filter(function(c){return c.cFr==='Propio';});
  if(vcF.frez==='comp')cs=cs.filter(function(c){return c.cFr==='Competencia';});
  if(vcF.comp.length)cs=cs.filter(function(c){return vcF.comp.some(function(cp){return c.comp&&c.comp.includes(cp);});});
  if(vcF.calU)cs=cs.filter(function(c){return c.calU===vcF.calU;});
  if(vcF.trans)cs=cs.filter(function(c){return c.trans===vcF.trans;});
  if(vcF.prods.length)cs=cs.filter(function(c){return vcF.prods.some(function(p){return c.prods&&c.prods.indexOf(p)>=0;});});
  if(q)cs=cs.filter(function(c){return (c.nm||'').toLowerCase().includes(q)||(c.fan||'').toLowerCase().includes(q)||(c.dir||'').toLowerCase().includes(q)||(c.bar||'').toLowerCase().includes(q);});
  cs.sort(function(a,b){return(a.nm||'').localeCompare(b.nm||'');});
  var chips='';
  if(vcF.tipo_ctx){chips+='<span class="ch on" onclick="vcF.tipo_ctx=\'\';renderVC()" style="font-size:11px;padding:5px 10px">'+vcF.tipo_ctx+' &#215;</span>';}
  if(vcF.bar){chips+='<span class="ch on" onclick="qFiltro(\'bar\')" style="font-size:11px;padding:5px 10px">'+es(vcF.bar)+' &#215;</span>';}
  if(vcF.tipOneg){chips+='<span class="ch on" onclick="qFiltro(\'tipOneg\')" style="font-size:11px;padding:5px 10px">'+es(vcF.tipOneg)+' &#215;</span>';}
  if(vcF.vis){chips+='<span class="ch on" onclick="qFiltro(\'vis\')" style="font-size:11px;padding:5px 10px">'+(vcF.vis==='v'?'Visitados':'Sin visitar')+' &#215;</span>';}
  if(vcF.frez){chips+='<span class="ch on" onclick="qFiltro(\'frez\')" style="font-size:11px;padding:5px 10px">Freezer: '+(vcF.frez==='sin'?'Sin':vcF.frez==='pro'?'Propio':'Competencia')+' &#215;</span>';}
  if(vcF.comp.length){chips+='<span class="ch on" onclick="qFiltro(\'comp\')" style="font-size:11px;padding:5px 10px">Comp: '+es(vcF.comp.join(', '))+' &#215;</span>';}
  if(vcF.calU){chips+='<span class="ch on" onclick="qFiltro(\'calU\')" style="font-size:11px;padding:5px 10px">Ubic: '+vcF.calU+' &#215;</span>';}
  if(vcF.trans){chips+='<span class="ch on" onclick="qFiltro(\'trans\')" style="font-size:11px;padding:5px 10px">Transito: '+vcF.trans+' &#215;</span>';}
  if(vcF.prods.length){chips+='<span class="ch on" onclick="qFiltro(\'prods\')" style="font-size:11px;padding:5px 10px">Vende: '+es(vcF.prods.join(', '))+' &#215;</span>';}
  var actDiv=document.getElementById('vCActivos');
  if(actDiv){actDiv.innerHTML=chips;actDiv.style.display=chips?'block':'none';}
  var h='<div style="padding:6px 14px;font-size:11px;color:var(--muted);font-weight:700">'+cs.length+' CONTACTOS</div>';
  if(!cs.length){h+='<div class="empty">Sin resultados</div>';document.getElementById('vCB').innerHTML=h;return;}
  cs.forEach(function(c){
    var d7=dias(c.ul);
    var colVis=d7===null?'var(--red)':d7>14?'var(--red)':d7>7?'var(--orange)':'var(--green)';
    h+='<div class="cc" onclick="abrirFichaV(\''+c.id+'\')">';
    h+='<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px">';
    h+='<div style="flex:1;min-width:0">';
    h+='<div style="font-size:15px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+es(c.nm)+'</div>';
    if(c.fan)h+='<div style="font-size:15px;font-weight:700;color:var(--cyan)">'+es(c.fan)+'</div>';
    h+=(c.tipo?'<div style="font-size:12px;color:var(--muted)">'+es(c.tipo)+(c.bar?' · '+es(c.bar):'')+'</div>':'');
    h+='<div style="font-size:12px;color:var(--muted)">'+es(c.dir||'')+'</div>';
    h+='</div>';
    h+='<span class="tg '+(c.esP?'o':'g')+'">'+(c.esP?'PROS':'CLI')+'</span></div>';
    // Datos clave
    h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px">';
    h+='<div style="background:var(--s2);border-radius:6px;padding:6px 8px"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.3px">Ultima visita</div><div style="font-size:12px;font-weight:700;color:'+colVis+'">'+fmt(c.ul)+'</div></div>';
    h+='<div style="background:var(--s2);border-radius:6px;padding:6px 8px"><div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.3px">Ultimo pedido</div><div style="font-size:12px;font-weight:700;color:var(--green)">'+fmt(c.uv)+'</div></div>';
    h+='</div>';
    h+='<div style="display:flex;gap:6px">';
    h+='<button class="sm g" onclick="event.stopPropagation();abrirVisita(\''+c.id+'\')" style="flex:1">Registrar visita</button>';
    if(c.tel){h+='<button class="sm wa" onclick="event.stopPropagation();envWA(\''+c.id+'\')" title="WhatsApp"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>';}
    h+='</div></div>';
  });
  var _vcb=document.getElementById('vCB');if(_vcb)_vcb.innerHTML=h;
}

// INIT
// Al cambiar el ancho de la ventana (ej: pasar de mobile a escritorio), re-renderizar el Embudo
// para que alterne entre lista y tablero Kanban segun corresponda.
var _resizeT=null;
window.addEventListener('resize',function(){
  clearTimeout(_resizeT);
  _resizeT=setTimeout(function(){
    var s=document.getElementById('sVE');
    if(s&&s.classList.contains('on'))renderVE();
  },250);
});
window.addEventListener('load',function(){
  // PWA: registrar service worker
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(function(){});
  }
  document.getElementById('lP').addEventListener('keypress',function(e){if(e.key==='Enter')doLogin();});
  document.getElementById('modal').addEventListener('click',function(e){if(e.target===this)cMod();});
  var _lv=document.getElementById('lVer');if(_lv)_lv.textContent='Version '+VERSION;

  fsBootMsg('Conectando...');

  // Inicializar Firebase con protección total - si falla, la app funciona igual en modo local
  try{
    if(typeof firebase==='undefined'){throw new Error('Firebase CDN no cargó');}
    firebase.initializeApp(firebaseConfig);
    fsDB=firebase.firestore();
    try{fsDB.enablePersistence({synchronizeTabs:true});}catch(e){}

    firebase.auth().signInAnonymously().then(function(){
      fsBootMsg('Sincronizando datos...');
      fsSetupListeners();
    }).catch(function(err){
      debugLog('error','Auth: '+err.message);
      fsBootMsg('Error de conexion - abriendo en modo local...');
      setTimeout(function(){
        FS_READY=true;
        fsArrancarApp();
      },2000);
    });
  } catch(e){
    // Firebase no disponible: usar datos de localStorage si existen
    debugLog('error','Firebase init: '+e.message);
    fsBootMsg('Modo sin conexion...');
    // Cargar datos del localStorage como fallback
    var c=lg('jc',null);if(c){D.cli=c;}
    var v=lg('jv',null);if(v){D.vis=v;}
    var o=lg('jo',null);if(o){D.com=o;}
    var g=lg('jg',null);if(g){D.gira=g;}
    var f=lg('jf',null);if(f){Object.keys(CFG).forEach(function(k){if(f[k]!==undefined)D.cfg[k]=f[k];});}
    var u=lg('ju',null);if(u){D.usrs=u;}
    normalizarDatos();
    setTimeout(function(){
      FS_READY=true;
      fsArrancarApp();
    },1000);
  }
});
