
var main = function () {
  $('.icon-menu').click(function () {
    $('.menu').animate({
      left: '0px'
    }, 400);

    $('body').animate({
      left: '285px'
    }, 400);

    $('.icon-menu').hide();

  });



  $('.icon-close').click(function () {
    $('.menu').animate({
      left: '-285px'
    }, 400);

    $('body').animate({
      left: '0px'
    }, 400);

     $('.icon-menu').show();

  });
};

$(document).ready(main); //как только страница полностью загрузится, будет вызвана функция main, отвечающая за работу меню
