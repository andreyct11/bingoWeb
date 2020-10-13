
$(document).ready(function () {
    
    //console.log('hola mundo')

    let all_numbers = [],
        all_selected_numbers = [];

        /* 
            Llenando tombola con 75 bolas 
         */

    for(let count = 1; count < 76; count++)
    {   
        
        $('#tableroBingo').append('<span style="animation-delay:0.'+count+'s;" class="animated zoomIn">'+count+'</span>');
        //console.log(count)
        //agregando los 75 num en el array
        all_numbers.push(count);
    }


    /* ***********************
            Modo Automatico
        **************** */
    var timer= 0;
    const autorun = () =>{
        timer = setInterval(function(){
            $('.btn-num').click();
        }, 2000);
    }

    $('.autorun').click(function () {             
        autorun();
    });

    $('.stop').click(function (e) { 
        e.preventDefault();
        
        clearInterval(timer);
    });

       /* ***********************
            Sacar bola de tombola
         **************** */

    $('.btn-num').click(function (e) { 
        e.preventDefault();


        if(all_numbers.length == 0){
            $('.btn-num').fadeOut();
        }



        $('.numero-extraido').fadeOut(1000, function(){

            //generando numero aleatorio
            let selected_number = all_numbers[Math.floor(Math.random() * all_numbers.length)]
            $('.numero-extraido').text(selected_number);
            $('.numero-extraido').fadeIn();

            //console.log(selected_number)
            //Eliminando los numeros sacados de la tombola para no obtener repetidos
            let remove = all_numbers.indexOf(selected_number);
                        all_numbers.splice(remove,1);
                        all_selected_numbers.push(selected_number);

                        console.log(all_selected_numbers);



        /* ***********************
            Cambiar de color numeros generados
        **************** */

        $('span').each(function () {
            // element == this
            let check = all_selected_numbers.includes(parseInt($(this).text()));           
            (check) ? $(this).addClass('num-marcado') : false
        });


                
        });
        
    });

        /* *********************************
            Sorteo aleatorio Numero Mayor
        *************************************/

    let all_mayores = [];
    let all_mayores_elegidos = [];


    $('.btn-sorteo').click(function () {                 

        $('.num-sorteo').fadeOut(1000, function () {
            let numMayor = Math.floor(Math.random() * (75-1)+1);
            //let numMayor = all_mayores[Math.floor(Math.random() * (75-1)+1)];
            //let selected_number = all_numbers[Math.floor(Math.random() * all_numbers.length)]

            $('.num-sorteo').text(numMayor);
            $('.num-sorteo').fadeIn();

        /*     let remove = all_mayores.indexOf(numMayor);
                        all_mayores.splice(remove,1);
                        all_mayores_elegidos.push(numMayor);
                     */    

        });

        
    });


    $('.btn-borrar').click(function (e) { 
        e.preventDefault();
        
        $('.num-sorteo').fadeOut();

    });


});

