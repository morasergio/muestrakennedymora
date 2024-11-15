<!DOCTYPE html>
<html>
<head>
    <title>26deseptiembre</title>
</head>
<body>
<form action= "respuestaphp.php" method="post">
<label for=nombre>nombre</label><input type="varchar" name="nombre"><br><br>
<label for=apellido>apellido:   </label> <input type="varchar"   name="apellido"><br><br>
<label for=edad>edad:   </label> <input type="number"   name="edad"><br><br>
<input type="submit" value="enviar">
</form>
    <?php
session_start();
//conexión Base de Datos: 
$servidor="localhost";
$nombreBD="root";
$password="";
$base_datos="persona";
$conn=new mysqli($servidor,$nombreBD,$password,$base_datos);
if($conn->connect_error){
    die("conexion fallida: ".$conn->connect_error);
}else{ echo "Conexión exitosa!!"; }


//datos del formulario
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$edad=$_POST['edad'];

//consulta a la base de datos 
$sql="SELECT * FROM identificacion WHERE nombre=$nombre, apellido=$apellido, edad=$edad";
$resultado=$conn->query($sql);
if ($resultado->num_rows>0){
    $_SESSION['nombre']=$nombre;
    echo "los datos son validos, muchas gracias, "$_SESSION['nombre'];
}else{
    echo "los datos son incorrectos";
}
$conn->close();
    ?>

</body>
</html>