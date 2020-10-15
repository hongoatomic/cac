function validateForm() {
  var x = document.forms["myForm"]["lusuario"].value;
  var arroba = x.indexOf("@");
  var y = document.forms["myForm"]["lclave"].value;
  if (y == "") {
    alert("Falta la clave");
    return false;
  }

  if (arroba < 1) {
    alert("Falta el arroba en el usuario");
    return false;
  }
}
