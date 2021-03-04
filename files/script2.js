if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
function getUtm(str, array){
  var glue1 = '=';
  var glue2 = '&';
  var array2 = str.split(glue2);
  var array3 = [];
  for(var x=0; x<array2.length; x++){
    var tmp = array2[x].split(glue1);
    if(tmp[0].startsWith('utm_'))
      array3[unescape(tmp[0].slice(4))] = unescape(tmp[1]).replace(/[+]/g, ' ');
  }
  if(array){
     array = array3;
  } else{
     return array3;
  }
}

$(function () {
    $('.small-banner__item-info-wrapper a').on('click',function(){
        yaCounter16448956.reachGoal('final_order_banner');
    })

    $('.emit_ym_event_quick_order_card').on('click',function(e){
        yaCounter16448956.reachGoal('quick_order_card');
    })
    //
})

$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - 153;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  var urlutm = getUtm(window.location.search.slice(1));
  var arrutm = $('.utmhide').text().split(',');
  var strkey = Object.entries(urlutm);
  if(strkey[0]){
    var srtutm = strkey[0][0]+'='+strkey[0][1];
  }
 
  if(urlutm.source && arrutm.indexOf(srtutm)){
  var expires = "";
  var date = new Date();
  date.setTime(date.getTime() + (24*60*60*1000));
  expires = "expires="+date.toUTCString();
  document.cookie = "source="+urlutm.source+"; path=/; "+expires+";";
  document.cookie = "medium="+urlutm.medium+"; path=/; "+expires+";";
  document.cookie = "campaign="+urlutm.campaign+"; path=/; "+expires+";";
  document.cookie = "type="+urlutm.type+"; path=/; "+expires+";";
  }
  if(typeof getCookie("source") != 'undefined' && getCookie("source") != 'undefined'){
  var utmcode = getCookie("source");
  $("input[name='form_hidden_300']").val(getCookie("source"));
  $("input[name='form_hidden_302']").val(getCookie("type"));
  $("input[name='form_hidden_306']").val(getCookie("medium"));
  $("input[name='form_hidden_304']").val(getCookie("campaign"));
  $('.phone_utm').each(function(){
      if(getCookie("source") == '2gis') {
          var strphone = $(this).parent().html().replace("4999405555", "4952762059");
          var strphones = strphone.replace("(499) 940-55-55", "(495) 276-20-59");
          $(this).replaceWith(strphones);
      }
      if(getCookie("source") == 'google') {
          var strphone = $(this).parent().html().replace("4999405555", "4952760527");
          var strphones = strphone.replace("(499) 940-55-55", "(495) 276-05-27");
          $(this).replaceWith(strphones);
      }
      if(getCookie("source") == 'yandex') {
          var strphone = $(this).parent().html().replace("4999405555", "4952760476");
          var strphones = strphone.replace("(499) 940-55-55", "(495) 276-04-76");
          $(this).replaceWith(strphones);
      }
      if(getCookie("source") == 'yandex-map') {
          var strphone = $(this).parent().html().replace("4999405555", "4952760655");
          var strphones = strphone.replace("(499) 940-55-55", "(495) 276-06-55");
          $(this).replaceWith(strphones);
      }
      if(getCookie("source") == 'google-map') {
          var strphone = $(this).parent().html().replace("4999405555", "4952760427");
          var strphones = strphone.replace("(499) 940-55-55", "(495) 276-04-27");
          $(this).replaceWith(strphones);
      }
  });
  }

});

$(function () {
    var widget = document.querySelectorAll(".network_service_works_notification_container"),
        content = document.querySelectorAll(".page__content-wrapper")[0],
        header = document.querySelectorAll("header")[0]

        function resize(header, content) {
            var size = $(window).width(),
                widgetHeight = sumWidjetsHeight();

                function sumWidjetsHeight() {
                    var sum = 0;
                    $(widget).each(function() {
                        sum += $(this).css('display') === 'none' ? 0 : $(this).height();
                    });

                    return sum;
                }

            if (widget !== undefined && widgetHeight) {
              if (size > 1110) {
                content.style.paddingTop = $(header).height() + "px";
              } else {
                content.style.paddingTop = $(header).height() + widgetHeight + 80 + "px";
              }
            } else {
              content.setAttribute('style', '');
            }

        }

    if (widget) {
        resize(header, content)
    }

    $(window).resize(function() {
        resize(header, content)
    })

    var closeNetworkNotificationPopuper = document.querySelectorAll('.closeNetworkNotificationPopuper');

        for (var i = 0; i < closeNetworkNotificationPopuper.length; i++) {
            closeNetworkNotificationPopuper[i].addEventListener('click', function() {
              setTimeout(function() {
                  resize(header, content);
              }, 500)
            });
        }
});
$(document).ready(function(){
  $('#open-form').next().addClass('my-form');
	$('.my-form').find('input[type="submit"]').after('<div class="sub-text-submit">Нажимая, на кнопку «Отправить  вопрос», вы соглашаетесь  на обработку своих персональных данных.</div>');
	
	$('.sub-text-submit').after('<p class="important-feeld">* Обязательные поля</p>');
	
	$('.__form-block-row ').find('textarea').after('<span class="title-label">Укажите свой телефон и/или e-mail для получения ответа</span>');
})