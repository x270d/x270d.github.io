define(["jquery","ui","./slick.min"],function(a){!function(a){"use strict";a.widget("akado.deviceSlider",{_create:function(){this._events()},_events:function(){this.element.slick({dots:!1,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})}})}(a)});