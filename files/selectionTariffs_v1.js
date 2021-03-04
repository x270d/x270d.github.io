define(["jquery","ui","./ion.rangeSlider.min"], function(a){

	function setDescPromo() {

		return false;
		console.log("show text promo");

		var str = 'Ускоение до <span class="discountNewTableContentColorRed">200</span> Мбит/с +<br>\n' +
			'<span class="discountNewTableContentColorRed">скидка 50%</span> на Интернет и Цифровое ТВ';

		$(".showDiscoubtNullInterbet").show();
		$(".showDiscoubtNullInterbet").html(str);

	}

	!function(a){
		"use strict";
		a.widget("akado.selectionTariffs_v1", {
			_create:function() {

				if($(document).width() < 768 && $('.showDiscoubtNullInterbet').length){

					if(!window.selectionTariffInited){
						$('.selection-tariffs__total').each(function(id,el){
							var html = el.outerHTML;
							//$(el).remove();
							$('.palce_for_mobile_selection-tariffs__total').append(html);
						});
						window.selectionTariffInited = true;
					}

				}


    			var values = JSON.parse($("#data_config").val());

    			var slidersElements = [
					{
						type: 'internet',
						el: false
					},
					{
						type: 'digitalTv',
						el: false
					},
					{
						type: 'interactiveTv',
						el: false
					}
				];



    			this.element.find('.js-selection-tariffs-rangeinput').each(function(index, elem) {
					// Определение параметров для слайдера
					var min = parseInt($(elem).attr('data-range-min')),
						max = parseInt($(elem).attr('data-range-max')),
						current = parseInt($(elem).attr('data-range-current')),
						step = parseInt($(elem).attr('data-range-step')),
						points = parseInt($(elem).attr('data-range-points'));

					// Поиск инпута в боковой панели для заполнения
					var id = $(elem).attr('data-range-id'),
							$inputValue = $('.js-selection-tariffs-value[data-range-id="' + id + '"]'),
                            $textValue = $('.selection-tariffs__info p[data-id="' + id + '"]'),
                            $textLinkValue = $('.selection-tariffs__info a[data-id="' + id + '"]'),
                            $from = 0;
                    if($(elem).attr('data-range-from') === 'last') {
                    	$from = values.VALUES[id].length - 1;
                    }
                    if(values.FIRST){
                        if(values.FIRST[id]){
                            $from = parseInt(values.FIRST[id]);
                        }
                    }

					$(elem).attr('data-range-id')

					var nameSLider = "sliderObject_" + id;

					// Инициализация плагина слайдера
					var nameSLider = $(elem).ionRangeSlider({
						type: 'single',
						min: min || null,
						max: max || null,
						from: $from,
						step: step || 1,
						grid: true,
						grid_margin: true,
						grid_num: points || values.VALUES[id].length,
						hide_min_max: true,
						hide_from_to: true,
						force_edges: true,
						values: values.VALUES[id],
						onStart: function(data) {

							var showSummer = false;

							if($(elem).attr('data-range-id') == 1) {

								console.log("Интернет");

								//Убираем иконки
								$('.js-irs-0 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
									$(elem).removeClass("irs-grid-text--discount-acceleration");
								});

								//Проставляем иконки
								if(data.from_value == 200){

									$('.js-irs-0 .irs-grid-text').each(function(index, elem) {

										if($(elem).text() == 200){
											showSummer = true;
											$(elem).addClass("irs-grid-text--discount");
										}

									});

								}

								if(data.from_value == 100){

									$('.js-irs-0 .irs-grid-text').each(function(index, elem) {

										if($(elem).text() == 100){
											$(elem).addClass("irs-grid-text--discount-acceleration");
										}

									});

								}

							}

							if($(elem).attr('data-range-id') == 2) {

								console.log("Цифровое ТВ");

								//Убираем иконки
								$('.js-irs-1 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								//Проставляем иконки
								if(data.from_value == 165 || data.from_value == 166){

									$('.js-irs-1 .irs-grid-text').each(function(index, elem) {

										if($(elem).text() == 165 || $(elem).text() == 166){
											$(elem).addClass("irs-grid-text--discount");
										}

									});

								}

							}

							$inputValue.val(data.from_value);
							setTimeout(function() {
								$inputValue.trigger('update_width');
							}, 0);
                            var summ = 0;
                            var internet = $('.selection-tariffs__info input:eq(0)').val();
                            var ctv =  $('.selection-tariffs__info input:eq(1)').val();
                            var itv =  $('.selection-tariffs__info input:eq(2)').val();
                            var str = internet + "," + ctv + "," + itv;
                            $inputValue.parents(".selection-tariffs__info:not([data-range-id=1])").find(" .selection-tariffs__resume span").text(values.NAMES[data.from_value]);
                            if(str.length > 2){
                                if(values.TARIFFS[str]){

                                    var ids = values.TARIFFS[str];
									$('#dtr2').attr('href', values.DETAILS[ids].URL_CTV);
									$('#dtr3').attr('href', values.DETAILS[ids].URL_ITV);
									$(".selection-tariffs__aside-title").text(values.DETAILS[ids].NAME);
                                    $(".selection-tariffs__aside-subtitle").html(values.DETAILS[ids].DESCRIPTION);
                                    $(".selection-tariffs__info p[data-id=1]").html(values.DETAILS[ids].DESC_INTERNET);
                                    $(".selection-tariffs__info p[data-id=2]").html(values.DETAILS[ids].DESC_CTV);
                                    $(".selection-tariffs__info p[data-id=3]").html(values.DETAILS[ids].DESC_ITV);
                                    $(".selection-tariffs__info-bottom p").html(values.DETAILS[ids].DESC_PRICE);
									$(".selection-tariffs__amount span:first-child").text(values.DETAILS[ids].PRICE);
									$(".selection-tariffs [name=tarif]").val(values.DETAILS[ids].ID);
								}else{
                                    str = "0,0,0";
                                    var ids = values.TARIFFS[str];
									$('#dtr2').attr('href', values.DETAILS[ids].URL_CTV);
									$('#dtr3').attr('href', values.DETAILS[ids].URL_ITV);
									$(".selection-tariffs__aside-title").text(values.DETAILS[ids].NAME);
                                    $(".selection-tariffs__aside-subtitle").html(values.DETAILS[ids].DESCRIPTION);
                                    $(".selection-tariffs__info p[data-id=1]").html(values.DETAILS[ids].DESC_INTERNET);
                                    $(".selection-tariffs__info p[data-id=2]").html(values.DETAILS[ids].DESC_CTV);
                                    $(".selection-tariffs__info p[data-id=3]").html(values.DETAILS[ids].DESC_ITV);
                                    $(".selection-tariffs__info-bottom p").html(values.DETAILS[ids].DESC_PRICE);
									$(".selection-tariffs__amount span:first-child").text(values.DETAILS[ids].PRICE);
									$(".selection-tariffs [name=tarif]").val(values.DETAILS[ids].ID);
                                }
                            }

                            // Показ/скрытие скидок
                            var tariff = values.TARIFFS[str];
                            if(values.DETAILS[tariff].DISCOUNT_VALUES.length) {

                            	console.log("renderNewDiscountData 1");

                            	$('.js-selection-tariffs-discount-show').show();
                            	$('.js-selection-tariffs-discount-hide').hide();
                            	var discountSlider = $('.js-selection-tariffs-rangeinput-discount').data('ionRangeSlider');
                            	if(typeof discountSlider !== 'undefined'){
                                    var deffrom = 100;
                                    if($("#def_dis").length){
                                        deffrom = $("#def_dis").val();
                                    }
                                    discountSlider.update({from: deffrom});
                                }
								renderNewDiscountData(
									values.DETAILS[tariff].DISCOUNT_COUNT_MOUNT,
									values.DETAILS[tariff].DISCOUNT_VALUES[0],
									values.DETAILS[ids].PRICE,
									slidersElements
								);

							} else {
                            	$('.js-selection-tariffs-discount-show').hide();
                                //запись информации о скидке в скрытое поле
                                if($('[name=discount_info]').length){$('[name=discount_info]').val("");}
                            	$('.js-selection-tariffs-discount-hide').show();
                            }

							renderNewDiscountData(
								values.DETAILS[tariff].DISCOUNT_COUNT_MOUNT,
								values.DETAILS[tariff].DISCOUNT_VALUES[0],
								values.DETAILS[ids].PRICE,
								slidersElements
							);
                            // Показ/скрытие сообщение об акции ИТВ
                            if(id = 3) {
                            	if(data.from) {
                            		$('.js-itv-msg').show();
                            	} else {
                            		$('.js-itv-msg').hide();
                            	}
                            }

                            if(showSummer == true){
                            	console.log("11");
								setDescPromo();
							}


						},
						onChange: function(data) {

							$inputValue.val(data.from_value);
							$inputValue.trigger('update_width');

							var summ = 0;
                            var internet = $('.selection-tariffs__info input:eq(0)').val();
                            var ctv =  $('.selection-tariffs__info input:eq(1)').val();
                            var itv =  $('.selection-tariffs__info input:eq(2)').val();
                            var str = internet + "," + ctv + "," + itv;
                            $inputValue.parents(".selection-tariffs__info:not([data-range-id=1])").find(" .selection-tariffs__resume span").text(values.NAMES[data.from_value]);
                            if(str.length > 2){
                                if(values.TARIFFS[str]){

                                    var ids = values.TARIFFS[str];
									$('#dtr2').attr('href', values.DETAILS[ids].URL_CTV);
									$('#dtr3').attr('href', values.DETAILS[ids].URL_ITV);
									$(".selection-tariffs__aside-title").text(values.DETAILS[ids].NAME);
                                    $(".selection-tariffs__aside-subtitle").html(values.DETAILS[ids].DESCRIPTION);
                                    $(".selection-tariffs__info p[data-id=1]").html(values.DETAILS[ids].DESC_INTERNET);
                                    $(".selection-tariffs__info p[data-id=2]").html(values.DETAILS[ids].DESC_CTV);
                                    $(".selection-tariffs__info p[data-id=3]").html(values.DETAILS[ids].DESC_ITV);
                                    $(".selection-tariffs__info-bottom p").html(values.DETAILS[ids].DESC_PRICE);
									$(".selection-tariffs__amount span:first-child").text(values.DETAILS[ids].PRICE);
									$(".selection-tariffs [name=tarif]").val(values.DETAILS[ids].ID);
								}else{
                                    str = "0,0,0";
                                    var ids = values.TARIFFS[str];
									$('#dtr2').attr('href', values.DETAILS[ids].URL_CTV);
									$('#dtr3').attr('href', values.DETAILS[ids].URL_ITV);
									$(".selection-tariffs__aside-title").text(values.DETAILS[ids].NAME);
                                    $(".selection-tariffs__aside-subtitle").html(values.DETAILS[ids].DESCRIPTION);
                                    $(".selection-tariffs__info p[data-id=1]").html(values.DETAILS[ids].DESC_INTERNET);
                                    $(".selection-tariffs__info p[data-id=2]").html(values.DETAILS[ids].DESC_CTV);
                                    $(".selection-tariffs__info p[data-id=3]").html(values.DETAILS[ids].DESC_ITV);
                                    $(".selection-tariffs__info-bottom p").html(values.DETAILS[ids].DESC_PRICE);
									$(".selection-tariffs__amount span:first-child").text(values.DETAILS[ids].PRICE);
									$(".selection-tariffs [name=tarif]").val(values.DETAILS[ids].ID);
                                }
                            }

                            // Показ/скрытие скидок
                            var tariff = values.TARIFFS[str];
                            if(values.DETAILS[tariff].DISCOUNT_VALUES.length) {
                            	$('.js-selection-tariffs-discount-show').show();
                            	$('.js-selection-tariffs-discount-hide').hide();
                            	var discountSlider = $('.js-selection-tariffs-rangeinput-discount').data('ionRangeSlider');
                            	if(typeof discountSlider !== 'undefined'){
                                    var deffrom = 100;
                                    if($("#def_dis").length){
                                        deffrom = $("#def_dis").val();
                                    }
                                    discountSlider.update({from: deffrom});
                                }

							} else {
                            	$('.js-selection-tariffs-discount-show').hide();
                                //запись информации о скидке в скрытое поле
                                if($('[name=discount_info]').length){$('[name=discount_info]').val("");}
                            	$('.js-selection-tariffs-discount-hide').show();
                            }

							renderNewDiscountData(
								values.DETAILS[tariff].DISCOUNT_COUNT_MOUNT,
								values.DETAILS[tariff].DISCOUNT_VALUES[0],
								values.DETAILS[ids].PRICE,
								slidersElements);

                            // Показ/скрытие сообщение об акции ИТВ
                            if(id = 3) {
                            	if(data.from) {
                            		$('.js-itv-msg').show();
                            	} else {
                            		$('.js-itv-msg').hide();
                            	}
                            }

						},
						onUpdate: function(data) {

							console.log("--------");
							console.log("onUpdate");

							var showSummer = false;

							var sliderVal_1 = parseInt($(".js-selection-tariffs-rangeinput-1").val());
							var sliderVal_2 = parseInt($(".js-selection-tariffs-rangeinput-2").val());
							var sliderVal_3 = parseInt($(".js-selection-tariffs-rangeinput-3").val());

							///////
							if($(elem).attr('data-range-id') == 1) {

								console.log("Интернет");

								if(data.from_value != 100 && sliderVal_2 == 166){

									console.log("Обнуляем");
									var slider2 = slidersElements[1].el;
									var slider3 = slidersElements[2].el;

									slider2.update({from: 3});
									slider3.update({from: 2});

								}

								if(data.from_value == 100){

									if(sliderVal_2 != 166 && sliderVal_3 != 60){

										console.log("Обновляем");

										var slider2 = slidersElements[1].el;
										var slider3 = slidersElements[2].el;

										slider2.update({from: 2});
										slider3.update({from: 1});

									}

								}

								//Убираем иконки
								$('.js-irs-0 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
									$(elem).removeClass("irs-grid-text--discount-acceleration");
								});

								//Проставляем иконки
								if(data.from_value == 200){

									$('.js-irs-0 .irs-grid-text').each(function(index, elem) {

										if($(elem).text() == 200){
											showSummer = true;
											$(elem).addClass("irs-grid-text--discount");
										}

									});

								}

								if(data.from_value == 100){

									$('.js-irs-0 .irs-grid-text').each(function(index, elem) {

										if($(elem).text() == 100){
											$(elem).addClass("irs-grid-text--discount-acceleration");
										}

									});

								}

							}

							//////
							if($(elem).attr('data-range-id') == 2) {

								console.log("Цифровое ТВ");

								//Получаем значение ползунка интернет

								if(data.from_value != 166){

									if(sliderVal_1 == 100 && sliderVal_3 == 60 && data.from_value != 166){

										console.log("Обнуляем");

										//var slider1 = slidersElements[0].el;
										var slider3 = slidersElements[2].el;

										//slider1.update({from: 0});
										slider3.update({from: 2});

									}

								}

								if(data.from_value == 166){

									if(sliderVal_1 != 100 || sliderVal_3 != 60){

										console.log("Обновляем");

										var slider1 = slidersElements[0].el;
										var slider3 = slidersElements[2].el;

										slider1.update({from: 2});
										slider3.update({from: 1});


									}

								}

								//Убираем иконки
								$('.js-irs-0 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								if(sliderVal_1 == 100 && sliderVal_2 == 166){
									//Проставляем иконки
									if(data.from_value == 166){
										$('.js-irs-0 .irs-grid-text').each(function(index, elem) {
											if($(elem).text() == 100){
												$(elem).addClass("irs-grid-text--discount");
											}
										});

									}
								}

								$('.js-irs-1 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								if(sliderVal_1 == 100 && sliderVal_2 == 166){
									//Проставляем иконки
									if(data.from_value == 166){
										$('.js-irs-1 .irs-grid-text').each(function(index, elem) {
											if($(elem).text() == 165 || $(elem).text() == 166){
												$(elem).addClass("irs-grid-text--discount");
											}
										});

									}
								}

							}

							/////
							if($(elem).attr('data-range-id') == 3) {

								console.log("Интерактивное ТВ");

								if(data.from_value != 60) {

									/*if (sliderVal_1 == 200 && sliderVal_2 == 166) {

										console.log("Обнуляем");

										//var slider1 = slidersElements[0].el;
										var slider2 = slidersElements[1].el;

										//slider1.update({from: 0});
										slider2.update({from: 3});

									}*/

								}


								if(data.from_value == 60){

									if(sliderVal_1 != 100 || sliderVal_2 != 166){

										console.log("Устанавливаем");

										var slider1 = slidersElements[0].el;
										var slider2 = slidersElements[1].el;

										slider1.update({from: 2});
										slider2.update({from: 2});

									}

								}

								/*
								//Убираем иконки
								$('.js-irs-0 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								if(sliderVal_1 == 200 && sliderVal_2 == 166){
									//Проставляем иконки
									$('.js-irs-0 .irs-grid-text').each(function(index, elem) {
										if($(elem).text() == 200){
											$(elem).addClass("irs-grid-text--discount");
										}
									});
								}

								$('.js-irs-1 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								if(sliderVal_1 == 200 && sliderVal_2 == 166){
									//Проставляем иконки
									$('.js-irs-1 .irs-grid-text').each(function(index, elem) {
										if($(elem).text() == 166){
											$(elem).addClass("irs-grid-text--discount");
										}
									});
								}


								 */

							}

							var showSummer = false;

							$inputValue.val(data.from_value);
							$inputValue.trigger('update_width');
                            var summ = 0;
                            var internet = $('.selection-tariffs__info input:eq(0)').val();
                            var ctv =  $('.selection-tariffs__info input:eq(1)').val();
                            var itv =  $('.selection-tariffs__info input:eq(2)').val();
                            var str = internet + "," + ctv + "," + itv;
                            $inputValue.parents(".selection-tariffs__info:not([data-range-id=1])").find(" .selection-tariffs__resume span").text(values.NAMES[data.from_value]);
                            if(str.length > 2){
                                if(values.TARIFFS[str]){

                                    var ids = values.TARIFFS[str];
									$('#dtr2').attr('href', values.DETAILS[ids].URL_CTV);
									$('#dtr3').attr('href', values.DETAILS[ids].URL_ITV);
									$(".selection-tariffs__aside-title").text(values.DETAILS[ids].NAME);
                                    $(".selection-tariffs__aside-subtitle").html(values.DETAILS[ids].DESCRIPTION);
                                    $(".selection-tariffs__info p[data-id=1]").html(values.DETAILS[ids].DESC_INTERNET);
                                    $(".selection-tariffs__info p[data-id=2]").html(values.DETAILS[ids].DESC_CTV);
                                    $(".selection-tariffs__info p[data-id=3]").html(values.DETAILS[ids].DESC_ITV);
                                    $(".selection-tariffs__info-bottom p").html(values.DETAILS[ids].DESC_PRICE);
									$(".selection-tariffs__amount span:first-child").text(values.DETAILS[ids].PRICE);
									$(".selection-tariffs [name=tarif]").val(values.DETAILS[ids].ID);
								}else{
                                    str = "0,0,0";
                                    var ids = values.TARIFFS[str];
									$('#dtr2').attr('href', values.DETAILS[ids].URL_CTV);
									$('#dtr3').attr('href', values.DETAILS[ids].URL_ITV);
									$(".selection-tariffs__aside-title").text(values.DETAILS[ids].NAME);
                                    $(".selection-tariffs__aside-subtitle").html(values.DETAILS[ids].DESCRIPTION);
                                    $(".selection-tariffs__info p[data-id=1]").html(values.DETAILS[ids].DESC_INTERNET);
                                    $(".selection-tariffs__info p[data-id=2]").html(values.DETAILS[ids].DESC_CTV);
                                    $(".selection-tariffs__info p[data-id=3]").html(values.DETAILS[ids].DESC_ITV);
                                    $(".selection-tariffs__info-bottom p").html(values.DETAILS[ids].DESC_PRICE);
									$(".selection-tariffs__amount span:first-child").text(values.DETAILS[ids].PRICE);
									$(".selection-tariffs [name=tarif]").val(values.DETAILS[ids].ID);


                                }
                            }

                            // Показ/скрытие скидок
                            var tariff = values.TARIFFS[str];
                            if(values.DETAILS[tariff].DISCOUNT_VALUES.length) {
                            	$('.js-selection-tariffs-discount-show').show();
                            	$('.js-selection-tariffs-discount-hide').hide();
                            	var discountSlider = $('.js-selection-tariffs-rangeinput-discount').data('ionRangeSlider');

                            	if(typeof discountSlider !== 'undefined'){
                                    var deffrom = 100;
                                    if($("#def_dis").length){
                                        deffrom = $("#def_dis").val();
                                    }
                                    discountSlider.update({from: deffrom});
                                }


							} else {
                            	$('.js-selection-tariffs-discount-show').hide();
                                //запись информации о скидке в скрытое поле
                                if($('[name=discount_info]').length){$('[name=discount_info]').val("");}
                            	$('.js-selection-tariffs-discount-hide').show();
                            }
							renderNewDiscountData(
								values.DETAILS[tariff].DISCOUNT_COUNT_MOUNT,
								values.DETAILS[tariff].DISCOUNT_VALUES[0],
								values.DETAILS[ids].PRICE,
								slidersElements);

                            // Показ/скрытие сообщение об акции ИТВ
                            if(id = 3) {
                            	if(data.from) {
                            		$('.js-itv-msg').show();
                            	} else {
                            		$('.js-itv-msg').hide();
                            	}
                            }
						},
						onFinish: function(data) {

							console.log("--------");
							console.log("onFinish")

							var showSummer = false;

							var sliderVal_1 = parseInt($(".js-selection-tariffs-rangeinput-1").val());
							var sliderVal_2 = parseInt($(".js-selection-tariffs-rangeinput-2").val());
							var sliderVal_3 = parseInt($(".js-selection-tariffs-rangeinput-3").val());

							///////
							if($(elem).attr('data-range-id') == 1) {

								console.log("Интернет");

								if(data.from_value != 100 && sliderVal_2 == 166){

									console.log("Обнуляем");
									var slider2 = slidersElements[1].el;
									var slider3 = slidersElements[2].el;

									slider2.update({from: 3});
									slider3.update({from: 2});

								}

								if(data.from_value == 100){

									if(sliderVal_2 != 166 && sliderVal_3 != 60){

										console.log("Обновляем");

										var slider2 = slidersElements[1].el;
										var slider3 = slidersElements[2].el;

										slider2.update({from: 2});
										slider3.update({from: 1});

									}

								}

								//Убираем иконки
								$('.js-irs-0 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
									$(elem).removeClass("irs-grid-text--discount-acceleration");
								});

								//Проставляем иконки
								if(data.from_value == 200){

									$('.js-irs-0 .irs-grid-text').each(function(index, elem) {

										if($(elem).text() == 200){
											showSummer = true;
											$(elem).addClass("irs-grid-text--discount");
										}

									});

								}

								if(data.from_value == 100){

									$('.js-irs-0 .irs-grid-text').each(function(index, elem) {

										if($(elem).text() == 100){
											$(elem).addClass("irs-grid-text--discount-acceleration");
										}

									});

								}

							}

							//////
							if($(elem).attr('data-range-id') == 2) {

								console.log("Цифровое ТВ");

								//Получаем значение ползунка интернет

								if(data.from_value != 166){

									if(sliderVal_1 == 100 && sliderVal_3 == 60 && data.from_value != 166){

										console.log("Обнуляем");

										//var slider1 = slidersElements[0].el;
										var slider3 = slidersElements[2].el;

										//slider1.update({from: 0});
										slider3.update({from: 2});

									}

								}

								if(data.from_value == 166){

									if(sliderVal_1 != 100 || sliderVal_3 != 60){

										console.log("Обновляем");

										var slider1 = slidersElements[0].el;
										var slider3 = slidersElements[2].el;

										slider1.update({from: 2});
										slider3.update({from: 1});


									}

								}

								//Убираем иконки
								$('.js-irs-0 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								if(sliderVal_1 == 100 && sliderVal_2 == 166){
									//Проставляем иконки
									if(data.from_value == 166){
										$('.js-irs-0 .irs-grid-text').each(function(index, elem) {
											if($(elem).text() == 100){
												$(elem).addClass("irs-grid-text--discount");
											}
										});

									}
								}

								$('.js-irs-1 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								if(sliderVal_1 == 100 && sliderVal_2 == 166){
									//Проставляем иконки
									if(data.from_value == 166){
										$('.js-irs-1 .irs-grid-text').each(function(index, elem) {
											if($(elem).text() == 165 || $(elem).text() == 166){
												$(elem).addClass("irs-grid-text--discount");
											}
										});

									}
								}

							}

							/////
							if($(elem).attr('data-range-id') == 3) {

								console.log("Интерактивное ТВ");

								if(data.from_value != 60) {

									/*if (sliderVal_1 == 200 && sliderVal_2 == 166) {

										console.log("Обнуляем");

										//var slider1 = slidersElements[0].el;
										var slider2 = slidersElements[1].el;

										//slider1.update({from: 0});
										slider2.update({from: 3});

									}*/

								}


								if(data.from_value == 60){

									if(sliderVal_1 != 100 || sliderVal_2 != 166){

										console.log("Устанавливаем");

										var slider1 = slidersElements[0].el;
										var slider2 = slidersElements[1].el;

										slider1.update({from: 2});
										slider2.update({from: 2});

									}

								}

								/*
								//Убираем иконки
								$('.js-irs-0 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								if(sliderVal_1 == 200 && sliderVal_2 == 166){
									//Проставляем иконки
									$('.js-irs-0 .irs-grid-text').each(function(index, elem) {
										if($(elem).text() == 200){
											$(elem).addClass("irs-grid-text--discount");
										}
									});
								}

								$('.js-irs-1 .irs-grid-text').each(function (index, elem) {
									$(elem).removeClass("irs-grid-text--discount");
								});

								if(sliderVal_1 == 200 && sliderVal_2 == 166){
									//Проставляем иконки
									$('.js-irs-1 .irs-grid-text').each(function(index, elem) {
										if($(elem).text() == 166){
											$(elem).addClass("irs-grid-text--discount");
										}
									});
								}


								 */

							}

						}

					});

					slidersElements[index].el = $(elem).data("ionRangeSlider");


					$inputValue.on('change', function() {
						$inputValue.trigger('update_width');
						var value = parseInt($(this).val());
						$(elem).data('ionRangeSlider').update({ from: value });
					});

					$inputValue.on('update_width', function() {
						$(this).parent().append('<div class="js-selection-tariffs-value-w"></div>');
						var $th = $(this),
								$valueW = $th.parent().children('.js-selection-tariffs-value-w');

						$valueW.css({
							'position':'absolute',
							'visibiliti':'hidden',
							'left':0,
							'top':0,
							'opacity':0,
							'z-index':'-1',
							'font-size':$th.css('font-size'),
							'font-weight':$th.css('font-weight'),
							'font-family':$th.css('font-family'),
							'font-style':$th.css('font-style'),
							'letter-spacing':$th.css('letter-spacing'),
							'padding':$th.css('padding')
						});
						$valueW.text($th.val());
						$th.css('width', $valueW.outerWidth());
						$valueW.remove();
					});

				});

				// Событие изменения заполненность круга
				$('.js-selection-tariffs-circlebar').on('update', function(event, percent) {
					var $circles = $(this).find('.js-selection-tariffs-circle-bar'),
						percent = (percent > 1) ? percent / 100 : percent,
						angleBottom = 90;

					$circles.each(function(index, elem) {
						var radius = parseInt($(elem).attr('r')),
							length = parseInt($(elem).attr('stroke-dasharray')),
							offsetMin = length * (angleBottom / 360),
							offsetAvailable = length - offsetMin;

						var dashoffset = offsetAvailable * (1 - percent) + offsetMin;
						$(elem).attr('stroke-dashoffset', dashoffset);

					});
				});

				// Инициализация слайдера скидок
				this.element.find('.js-selection-tariffs-rangeinput-discount').each(function(index, elem) {
					// Определение параметров для слайдера
					var min = parseInt($(elem).attr('data-range-min')),
						max = parseInt($(elem).attr('data-range-max')),
						current = parseInt($(elem).attr('data-range-current')),
						step = parseInt($(elem).attr('data-range-step')),
						points = parseInt($(elem).attr('data-range-points')),
						id = $(elem).attr('data-range-id'),
                        $from = values.VALUES[id].length - 1;
                        if($("#def_dis").length){
                            $from = $("#def_dis").val();
                        }
                    // Поиск элементов скидки

                    var discountMonthsArray = [3,12];
                    var $textDiscount = $('.js-selection-tariffs-discount'),
                    	$textDiscountMonths = $('.js-selection-tariffs-discount-months'),
                    	$textDiscountMonthly = $('.js-selection-tariffs-discount-monthly'),
                    	$textTariffAmount = $('.js-selection-tariffs-amount'),
                    	$textDiscountAmount = $('.js-selection-tariffs-amount-discount');


                    // Инициализация плагина слайдера
					$(elem).ionRangeSlider({
						type: 'single',
						min: min || null,
						max: max || null,
						from: $from,
						step: step || 1,
						grid: true,
						grid_margin: true,
						grid_num: points || values.VALUES[id].length,
						hide_min_max: true,
						hide_from_to: true,
						force_edges: true,
						values: values.VALUES[id],
						onStart: function(data) {
							var discountMonths = 0,
								discountMonthly = 0,
								percent = 0;

							if(data.from) {

								var from = data.from - 1;
								var internet = $('.selection-tariffs__info input:eq(0)').val(),
	                            	ctv =  $('.selection-tariffs__info input:eq(1)').val(),
	                            	itv =  $('.selection-tariffs__info input:eq(2)').val(),
	                             	str = internet + "," + ctv + "," + itv,
	                            	tariff = values.TARIFFS[str];

								discountMonths = discountMonthsArray[from];
								discountMonthly = values.DETAILS[tariff].DISCOUNT_VALUES[from];

								percent = discountMonths / discountMonthsArray[discountMonthsArray.length - 1];

							}

							var	discount = discountMonths * discountMonthly,
								discountAmount = $textTariffAmount.first().text() - discountMonthly;
							if(discountAmount < 0) discountAmount = 0;

                            //запись информации о скидке в скрытое поле
                            if($('[name=discount_info]').length){$('[name=discount_info]').val([discount,discountMonths,discountMonthly,discountAmount]);}

							$textDiscount.text(discount);
							$textDiscountMonths.text(discountMonths);
							$textDiscountMonthly.text(discountMonthly);
							$textDiscountAmount.text(discountAmount);

							$textDiscount.parents('.js-selection-tariffs-circle').find('.js-selection-tariffs-circlebar').trigger('update', [percent]);
							$textDiscountMonths.parents('.js-selection-tariffs-circle').find('.js-selection-tariffs-circlebar').trigger('update', [percent]);
						},
						onChange: function(data) {
							var discountMonths = 0,
								discountMonthly = 0,
								percent = 0;

							if(data.from) {
                                var from = data.from - 1;
                                //update discount
                                // values.VALUES[id].forEach(function(value,ind){
                                //     if(value === data.from_value) {
                                //         from = ind - 1;
                                //     }
                                // });

								var internet = $('.selection-tariffs__info input:eq(0)').val(),
	                            	ctv =  $('.selection-tariffs__info input:eq(1)').val(),
	                            	itv =  $('.selection-tariffs__info input:eq(2)').val(),
	                             	str = internet + "," + ctv + "," + itv,
	                            	tariff = values.TARIFFS[str];

								discountMonths = discountMonthsArray[from];
								discountMonthly = values.DETAILS[tariff].DISCOUNT_VALUES[from];
                                percent = discountMonths / discountMonthsArray[discountMonthsArray.length - 1];

                                //update discount

                               /*  var options = JSON.parse(JSON.stringify(values.VALUES[id]));
                                values.DETAILS[tariff].DISCOUNT_VALUES.forEach(function(value,ind){
                                    if(value === null || value === 0){
                                        options.splice(ind+1,1);
                                    }
                                });
                                $(elem).data('ionRangeSlider').update({
                                    values:options,
                                }); */


							}

							var	discount = discountMonths * discountMonthly,
								discountAmount = $textTariffAmount.first().text() - discountMonthly;
							if(discountAmount < 0) discountAmount = 0;
                            //запись информации о скидке в скрытое поле
                            if($('[name=discount_info]').length){$('[name=discount_info]').val([discount,discountMonths,discountMonthly,discountAmount]);}

							$textDiscount.text(discount);
							$textDiscountMonths.text(discountMonths);
							$textDiscountMonthly.text(discountMonthly);
							$textDiscountAmount.text(discountAmount);

							$textDiscount.parents('.js-selection-tariffs-circle').find('.js-selection-tariffs-circlebar').trigger('update', [percent]);
							$textDiscountMonths.parents('.js-selection-tariffs-circle').find('.js-selection-tariffs-circlebar').trigger('update', [percent]);
						},
						onUpdate: function(data) {
							var discountMonths = 0,
								discountMonthly = 0,
								percent = 0;

							if(data.from) {

								var from = data.from - 1;
								var internet = $('.selection-tariffs__info input:eq(0)').val(),
	                            	ctv =  $('.selection-tariffs__info input:eq(1)').val(),
	                            	itv =  $('.selection-tariffs__info input:eq(2)').val(),
	                             	str = internet + "," + ctv + "," + itv,
	                            	tariff = values.TARIFFS[str];

								discountMonths = discountMonthsArray[from];
								discountMonthly = values.DETAILS[tariff].DISCOUNT_VALUES[from];

								percent = discountMonths / discountMonthsArray[discountMonthsArray.length - 1];

							}

							var	discount = discountMonths * discountMonthly,
								discountAmount = $textTariffAmount.first().text() - discountMonthly;
							if(discountAmount < 0) discountAmount = 0;
                            //запись информации о скидке в скрытое поле
                            if($('[name=discount_info]').length){$('[name=discount_info]').val([discount,discountMonths,discountMonthly,discountAmount]);}

							$textDiscount.text(discount);
							$textDiscountMonths.text(discountMonths);
							$textDiscountMonthly.text(discountMonthly);
							$textDiscountAmount.text(discountAmount);

							$textDiscount.parents('.js-selection-tariffs-circle').find('.js-selection-tariffs-circlebar').trigger('update', [percent]);
							$textDiscountMonths.parents('.js-selection-tariffs-circle').find('.js-selection-tariffs-circlebar').trigger('update', [percent]);
						}
					});

				});


		       	$('body').on('click', '.irs-grid-text', function() {
		       		var $wrapper = $(this).parents('.selection-tariffs__slider').eq(0),
		       				$input = $wrapper.find('.js-selection-tariffs-rangeinput, .js-selection-tariffs-rangeinput-discount'),
		       				$texts = $wrapper.find('.irs-grid-text'),
		       				index = $texts.index($(this));
		       		$input.data('ionRangeSlider').update({ from: index });
		       	});

				//common function

				function renderNewDiscountData(mount,discount,price,sliders) {

					var internet = parseInt($('.selection-tariffs__info input:eq(0)').val());
					var ctv =  parseInt($('.selection-tariffs__info input:eq(1)').val());
					var itv =  parseInt($('.selection-tariffs__info input:eq(2)').val());


					var classElementsOblect = {
						countMount: '.countMountNewDiscount',
						discountInMount: '.discountInMount',
						summDiscount: '.summDiscount'
					}

					$('.showDiscountNewHasDiscount').css('display','none');
					$('.showDiscoubtNullInterbet').css('display','none');

					$(classElementsOblect.countMount).html(mount);
					$(classElementsOblect.discountInMount).html(discount);
					$(classElementsOblect.summDiscount).html(mount * discount);
                    var dm = discount / mount;
                    var pd = price - discount;
                    var fullDiscount;
                    // установим параметр для передачи на странице заказо информацию о скидке
                    if (isNaN(dm)) {
                        dm = 0;
                    }
                    if (isNaN(pd)) {
                        pd = 0;
                    }
                    if (typeof discount === 'undefined') {
                        discount = 0;
                    }
                    if (discount === 0 && mount === 0 && dm === 0 && pd === 0) {
                        fullDiscount = 0;
                    } else {
                        fullDiscount = discount + ',' + mount + ',' + dm + ',' + pd;
                    }

                    $('input[name="discount_info"]').val(fullDiscount);

					$('.js-selection-tariffs-amount-discount').html(price - discount);
					$('.js-selection-tariffs-amount').html(price);

					if (sliders[0] && sliders[1] && !(sliders[0].el == false || sliders[1].el == false)) {
						if (sliders[0].el.result.from_value == 0 && sliders[1].el.result.from_value == 0) {
							if ($('.showDiscoubtNullInterbet').length) {

								// $('.js-selection-tariffs-discount-show').show();
								// $('.js-selection-tariffs-discount-hide').hide();
								$('.selection-tariffs__block_discount').show();
								$('.showDiscoubtNullInterbet').css('display', 'block');

								var allZero = 0;

								$.each(slidersElements, function (id, el) {
									if (el.el.result.from_value == 0) {
										allZero++;
									}
								});

								if (allZero == 3) {
									$('.selection-tariffs__total').css('display', 'none')
								}

							}
						} else {
							$('.showDiscountNewHasDiscount').css('display', 'block');
						}
					}




				}

		       	// Fix Mac
		       	var uAgent = navigator.userAgent || '';
		       	var browser = {
		       		safari : (!(/chrome/i.test(uAgent)) && /webkit|safari|khtml/i.test(uAgent)),
		       		iphone : /iphone/i.test(uAgent),
					ipod : /ipod/i.test(uAgent),
					iphone4 : /iphone.*OS 4/i.test(uAgent),
					ipod4 : /ipod.*OS 4/i.test(uAgent),
					ipad : /ipad/i.test(uAgent),
					ios : /ipad|ipod|iphone/i.test(uAgent),
					mac : /mac/i.test(uAgent),
		       	};
		       	var $wrapper = this.element;

		       	for(var key in browser) {
		       		if(browser[key] === true) {
		       			$wrapper.addClass('_macfix');
		       		}
		       	}
			},
		});

	}(a)
});