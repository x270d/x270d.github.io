define(["jquery","ui","./magnificpopup"],function(a){!function(a){"use strict";a.widget("akado.popupWidget",{_create:function(){this._events()},_events:function(){this._on(".popup-ajax",{click:a.proxy(this._initPopup,this)}),this._on(".ajax-popup",{click:a.proxy(this._initPopup,this)})},_initPopup:function(b){var c=a(b.currentTarget).data("popup-url")||a(b.currentTarget).attr("href"),d=a.magnificPopup.instance;a.ajax({type:"POST",url:c,data:{},success:function(b){a.magnificPopup.open({items:{src:b,type:"inline"},closeOnContentClick:!1,closeOnBgClick:!1,closeBtnInside:!0,showCloseBtn:!0,callbacks:{open:function(){a.initWidgets(),a.subscribe("updateOrderPopup",function(b,c){d.items=[{src:c,type:"inline"}],d.index=0,d.updateItemHTML(),a.initWidgets()}),a.subscribe("errorreport",function(b,c){a.initWidgets();var d=c,e="";a(".mfp-content").find('.popup__tab[data-tab-id="error-report"]').trigger("click"),d.length>148?(a(".mfp-content").find(".alert__text").addClass("active"),e=d.slice(0,148)):(a(".mfp-content").find(".alert__text").removeClass("active"),e=d),a(".mfp-content").find(".error-report__textarea").val(e)}),a.subscribe("updatePopup",function(b,c){d.items=[{src:c,type:"inline"}],d.index=0,d.updateItemHTML(),a.initWidgets()})}}})}}),b.stopPropagation(),b.preventDefault()}})}(a)});