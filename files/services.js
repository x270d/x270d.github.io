define(["jquery","ui"],function(a){!function(a){"use strict";a.widget("akado.services",{_create:function(){this._events()},_events:function(){this._on({"click .services-block__select-object":this._activeteBlock}),this._on({"click .services-block__item-type":this._showPresent}),a("body").on("click",function(b){0===a(".services-block__item-type").has(b.target).length&&a(".services-block__item-type").removeClass("_active")})},_activeteBlock:function(b){var c=this;a(b.currentTarget).hasClass("_active")?a(b.currentTarget).removeClass("_active"):a(b.currentTarget).addClass("_active");var d=this.element.find(".services-block__select-objects").data("url"),e=[];a(".services-block__select-object._active").each(function(){var b=a(this).attr("data-section-id");e.push(b)}),a.ajax({type:"POST",url:d,data:{sections:e},success:function(b){c.element.find(".services-block__selected-list").find(".tariff-item").remove(),c.element.find(".services-block__selected-list").find("p").remove(),c.element.find(".services-block__selected-list").append(b),a.destroyWidgets(),a.initWidgets()}})},_showPresent:function(b){a(window).width()<1024&&(a(".services-block__item-type._active").removeClass("_active"),a(b.currentTarget).addClass("_active"))}})}(a)});