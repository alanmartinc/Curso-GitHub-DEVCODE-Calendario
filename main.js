var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var dia_text = ["Dom", "Lun", "Mar", "Mie", "Juv", "Vie", "Sab"];

estructurar();

function estructurar() {
  for (m = 0; m <= 11; m++) {
    //Mes
    let mes = document.createElement("DIV");
    mes.className = "mes";
    document.body.appendChild(mes);
    //Tabla
    let tabla_mes = document.createElement("TABLE");
    tabla_mes.className = "tabla_mes";
    mes.appendChild(tabla_mes);
    //Título
    let titulo = document.createElement("CAPTION");
    titulo.className = "titulo";
    titulo.innerText = mes_text[m];
    tabla_mes.appendChild(titulo);
    //Cabecera
    let cabecera = document.createElement("THEAD");
    tabla_mes.appendChild(cabecera);
    let fila = document.createElement("TR");
    cabecera.appendChild(fila);
    for (d = 0; d < 7; d++) {
      let dia = document.createElement("TH");
      dia.innerText = dia_text[d];
      fila.appendChild(dia);
    }
    //Cuerpo
    let cuerpo = document.createElement("TBODY");
    tabla_mes.appendChild(cuerpo);
    for (f = 0; f < 6; f++) {
      let fila = document.createElement("TR");
      cuerpo.appendChild(fila);
      for (d = 0; d < 7; d++) {
        let dia = document.createElement("TD");
        dia.innerText = "";
        fila.appendChild(dia);
      }
    }
  }
}

numerar();

function numerar() {
  for (i = 1; i < 366; i++) {
    let fecha = fechaPorDia(2017, i);
    let mes = fecha.getMonth();
    let select_tabla = document.getElementsByClassName('tabla_mes')[mes];
    let dia = fecha.getDate()
    let dia_semana = fecha.getDay();
    if (dia == 1) {var sem = 0;}
    select_tabla.children[2].children[sem].children[dia_semana].innerText = dia;
    if (dia_semana == 6) { sem = sem + 1; }
  }
}

function fechaPorDia(año, dia) {
  var date = new Date(año, 0);
  return new Date(date.setDate(dia));
}
