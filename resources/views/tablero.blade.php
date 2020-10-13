<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bingo Bailable</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300;500;700&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    
    <!-- <h1>Bingo Web 2020</h1> -->
    
    <div id="tableroBingo">      
    
            <!-- 
            <h3>B</h3>        
            <h3>I</h3>
            <h3>N</h3>
            <h3>G</h3>
            <h3>O</h3> 
            -->
             
    </div>
    <h3 class="numero-extraido animated zoomIn"></h3>
    <h3 class="btn-num">Sacar bola</h3>
    
    <h3 onclick="location.reload()" class="reset">Reset</h3>
    <h3 style="margin-top: 20px; grid-row:2;" class="reset autorun">Modo Automatico</h3>





    <script src="{{ asset('js/script.js') }}"></script>
    <script>
        
    function alerta()
    {
        var mensaje;
        var opcion = confirm("Clicka en Aceptar o Cancelar");
        if (opcion == true) {
            location.reload()
        } else {
            mensaje = "Has clickado Cancelar";
        }
        document.getElementById("ejemplo").innerHTML = mensaje;
    }
    </script>
</body>
</html>