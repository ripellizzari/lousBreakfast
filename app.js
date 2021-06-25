// addEventListener('DOMContentLoaded', () => {
//     const btn_menu = document.querySelector('.btn_menu')
//     if (btn_menu) {
//         btn_menu.addEventListener('click', () => {
//             const menu_items = document.querySelector('.menu-items')
//             menu_items.classList.toggle('show')

//         })
//     }
// })

$('#definicion').append("<p>Un lugar pensado para que puedas personalizar al máximo tu experiencia. Podrás elegir entre nuestra variedad de productos y armar tu desayuno como más te guste. También tendrás la posibilidad de aprovechar nuestra modalidad de Take-Away, y disfrutar de tu café al aire libre. Además, con LOU'S podrás sorprender a esa persona tanimportante para vos, con nuestros envios personalizados, hechos a medida, de acuerdo sus gustos.</p>")


/********************************************************************** */

var resultado = $('#resultado')

$('#titulo').click(function () {
    resultado.toggle(1200);
})

$('#titulo').css("font-size: 50px, margin:20px, background-color: EQBBE4 ")


$('#contacto').prepend("<h2>SEGUINOS</h2>");





