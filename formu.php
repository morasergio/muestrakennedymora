<html>
<head>
<title>formulario</title>
<h1><center>mi formulario</h1></center>
</head>
<body>
    <?php
echo"ejercico 1";
?>
<h3> complete el formulario</h3>
<h3> ingrese los numeros </h3>
<form action= "respuestaphp.php" method="post">
<label for=numero1>numero 1:  </label><input type="number" name="numero1"><br><br>
<label for=numero2>numero 2:   </label> <input type="number"   name="numero2"><br><br>
<input type="submit" value="SUMAR">
</form>
</body>
</html>