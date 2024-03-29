$('.fa-chevron-right').click(function () {

  var img_corrente = $('.container-img img.active-img');
  var nuova_img = img_corrente.next('img');
  var bullet_span_corrente = $('.bullet span.active-bullet');
  var nuova_bullet = bullet_span_corrente.next('span');

  if (nuova_img.length == 0) {
    nuova_img = $('.container-img img:first-child');
    nuova_bullet = $('.bullet span:first-child');
  }
  $('.container-img img.active-img').removeClass('active-img');
  nuova_img.addClass('active-img');
  $('.bullet span.active-bullet').removeClass('active-bullet');
  nuova_bullet.addClass('active-bullet');
});


$('.fa-chevron-left').click(function () {

  var img_corrente = $('.container-img img.active-img');
  var nuova_img = img_corrente.prev('img');
  var bullet_span_corrente = $('.bullet span.active-bullet');
  var nuova_bullet = bullet_span_corrente.prev('span');

  if (nuova_img.length == 0) {
    nuova_img = $('.container-img img:last-child');
    nuova_bullet = $('.bullet span:last-child');
  }
  $('.container-img img.active-img').removeClass('active-img');
  nuova_img.addClass('active-img');
  $('.bullet span.active-bullet').removeClass('active-bullet');
  nuova_bullet.addClass('active-bullet');
})


// BONUS

$('.bullet span').click(function () {
  var bullet_span_corrente = $('.bullet span.active-bullet');
  var bullet_span_click = $(this).index();
  $('.bullet span.active-bullet').removeClass('active-bullet');
  var nuova_bullet = $(this).addClass('active-bullet')

  var img_corrente = $('.container-img img.active-img');
  $('.container-img img.active-img').removeClass('active-img');

  var nuova_img = $('.container-img img').eq(bullet_span_click).addClass('active-img');
})
