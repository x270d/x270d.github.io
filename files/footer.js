define(["jquery","ui"],function(a){!function(a){"use strict";a.widget("akado.footer",{_create:function(){this._events()},_events:function(){this._on({"click .bottom-nav__mobile-button":this._showMenu})},_showMenu:function(a){var b=this;this.element.find(".bottom-nav").hasClass("_opened")?b.element.find(".bottom-nav").removeClass("_opened"):b.element.find(".bottom-nav").addClass("_opened")}})}(a)});