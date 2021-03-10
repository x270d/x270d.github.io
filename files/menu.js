define(["jquery", "ui"], function(a) {
    !function(a) {
        "use strict";
        a.widget("akado.menu", {
            _create: function() {
                this._events()
            },
            _events: function() {
                this._on({
                    "click .header__site-mobile-menu-button": this._showMenu
                }),
                this._on({
                    "click .__dropdown-menu__item": this._showSubMenu
                }),
                this._on({
                    "click ._close": this._closeMenu
                }),
                this._on({
                    "click .site-nav__connection-button": this._checkAddress
                }),
                this._on({
                    "mouseenter .head__site-nav-item": this._showDropdownItem
                }),
                this._on({
                    "mouseleave .head__site-nav-item": this._hideDropdownItem
                }),
                this._on({
                    "mouseenter .head__site-sub-nav-block-wrapper": this._openDropdown
                }),
                this._on({
                    "mouseleave .head__site-sub-nav-block-wrapper": this._closeDropdown
                })
            },
            _showMenu: function(b) {
                var c = a(b.currentTarget);
                if (c.parent().hasClass("_opened")) {
                    $('html').removeClass('_locked');
                    c.parent().removeClass("_opened")
                } else {
                    $('html').addClass('_locked');
                    c.parent().addClass("_opened")
                }
            },
            _showSubMenu: function(b) {
                a(b.currentTarget).hasClass("_opened") ? a(b.currentTarget).removeClass("_opened") : a(b.currentTarget).addClass("_opened")
            },
            _closeMenu: function(b) {
                $('html').removeClass('_locked');
                a(b.currentTarget).closest(".header__site-mobile-menu").removeClass("_opened")
            },
            _checkAddress: function(b) {
                var c = this;
                if (b.stopPropagation(),
                b.preventDefault(),
                a("body").hasClass("_address-checked") && !a("body").hasClass("_address-connected")) {
                    var d = c.element.find(".site-nav__connection-button").attr("data-order-url");
                    window.location.replace(d)
                } else if (a("body").hasClass("_address-checked") && a("body").hasClass("_address-connected")) {
                    var d = c.element.find(".site-nav__connection-button").attr("href");
                    window.location.replace(d)
                } else
                   
            },
            _openDropdown: function(b) {
                a(b.currentTarget).addClass("_hovered")
            },
            _closeDropdown: function(a) {
                this.element.find(".head__site-sub-nav-block-wrapper").removeClass("_hovered")
            },
            _showDropdownItem: function(b) {
                a(b.currentTarget).addClass("_mouseenter"),
                setTimeout(function() {
                    a("._mouseenter").find(".head__site-sub-nav-block-wrapper").fadeIn(300).parent().addClass("_hovered")
                }, 600)
            },
            _hideDropdownItem: function(b) {
                var c = a(b.currentTarget);
                c.removeClass("_mouseenter");
                var d = a(b.currentTarget).find(".head__site-sub-nav-block-wrapper")
                  , e = setTimeout(function() {
                    d.hasClass("_hovered") || (c.removeClass("_hovered"),
                    d.fadeOut(300).removeClass("_hovered"))
                }, 600);
                d.hasClass("_hovered") && clearTimeout(e)
            }
        })
    }(a)
});
