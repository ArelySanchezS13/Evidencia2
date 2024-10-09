const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const gender = document.getElementsByName("gender");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const date = document.getElementById("date");
const colorfav = document.getElementById("colorfav");
const select = document.getElementById("select");
const datalist = document.getElementById("datalist");
const nivel = document.getElementById("nivel");
const selectOptgroup = document.getElementById("select-optgroup");
const month = document.getElementById("month");
const time = document.getElementById("time");
const range = document.getElementById("range");
const fecha = document.getElementById("fecha");
const datetime = document.getElementById("datetime");
const datetimelocal = document.getElementById("datetimelocal");
const selectMultiple = document.getElementById("select-multiple");
const archivo = document.getElementById("archivo");
const url = document.getElementById("url");
const week = document.getElementById("week");
const password = document.getElementById("password");
const search = document.getElementById("search");
const btnenviar = document.getElementById("btnsubmit");
const textarea = document.getElementById("textarea");
const visto = document.getElementById("visto");

btnenviar.addEventListener("click", e => {
    e.preventDefault(); 

    const ArrayDatos = {
        nombre: nombre.value,
        edad: edad.value,
        email: email.value,
        tel: tel.value,
        date: date.value,
        colorfav: colorfav.value,
        select: select.value,
        datalist: datalist.value,
        nivel: nivel.value,
        selectOptgroup: selectOptgroup.value,
        month: month.value,
        time: time.value,
        range: range.value,
        fecha: fecha.value,
        datetime: datetime.value,
        datetimelocal: datetimelocal.value,
        url: url.value,
        week: week.value,
        password: password.value,
        search: search.value,
        textarea: textarea.value,
        visto: visto.checked
    };

    // Enviar los datos a la consola
    alert(`Gracias, ${nombre.value}, por enviar el formulario.`);
    console.log(ArrayDatos);
});

