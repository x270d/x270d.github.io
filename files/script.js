/**
 * CstReCaptchaFree
 * customized module twim.recaptchafree
 */

var Recaptchafree = Recaptchafree || {};
Recaptchafree.items = new Array();
Recaptchafree.render = function() { 
	if(grecaptcha !== null) {
		var elements = document.querySelectorAll('div.g-recaptcha');
		var widget;
		for(var i = 0; i < elements.length; i++) {
			if(elements[i].innerHTML === '') {
				widget = grecaptcha.render(
					elements[i],
					{
						'sitekey': elements[i].getAttribute('data-sitekey'),
						'theme': elements[i].getAttribute('data-theme'),
						'size': elements[i].getAttribute('data-size'),
					}
				);
				Recaptchafree.items.push(widget);
				if(window['Recaptchafree_CustomRenderCallback']) {
					try {
						window['Recaptchafree_CustomRenderCallback'](elements[i], widget);
					} catch(e) {}
				}
			}
		}
	}
};

Recaptchafree.reset = function() {
	if(grecaptcha !== null) {
		for(var i = 0; i < Recaptchafree.items.length; i++) {
			grecaptcha.reset(Recaptchafree.items[i]);
		}
		Recaptchafree.render();
	}
};

function onloadRecaptchafree() {
	Recaptchafree.render();
}

if(window.BX) {
	BX.addCustomEvent(
		'onAjaxSuccess',
		function() {
			try {
				onloadRecaptchafree();
			} catch(e) {}
		}
	);
}
