$(document).ready(function() {
   // on ready
});


async function registrarUsuario() {
  let datos = {};
  datos.nombre = document.getElementById('txtnombre').value;
  datos.apellido = document.getElementById('txtapellido').value;
  datos.email = document.getElementById('txtemail').value;
  datos.password = document.getElementById('txtpassword').value;

  let repetirPassword = document.getElementById('txtrepetirpassword').value;

  if (repetirPassword != datos.password) {
    alert('La contraseña que escribiste es diferente.');
    return;
  }

  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La cuenta fue creada con exito!");
  window.location.href = 'login.html'

}
