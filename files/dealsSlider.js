define(["jquery","ui","./slick.min"],function(a){!function(a){"use strict";a.widget("akado.dealsSlider",{_create:function(){this._events(),this._slider()},_events:function(){},_slider:function(){var b=this;a(window).width()<768&&b.element.slick({dots:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1})}})}(a)});