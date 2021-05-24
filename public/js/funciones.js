var estilos = {};

function styles_p() {
	estilos.titulo = $(".js--titulo");
	estilos.btn = $(".js--btn--estilo");
	// estilos.lightwindow = $(".js--lightwindow");
	estilos.window01 = $("w1");
	estilos.btn_canc = $(".canc--button");
	estilos.btn_inicio = $(".js--btn--intro");
	estilos.btn_ok = $(".js--ok--button");
	estilos.btn_ux = $(".js--ux--button");
	estilos.windows  = $("d")
	estilos.body = $("body");
	estilos.audio01 = document.querySelector("#audio01");
	estilos.counter = 0;
	estilos.counterAdd = 0;

	estilos.close = $(".js--close--button");
	//------botton input 01
	estilos.inputOk01 = $("#range22");
	//------botton input 02
	estilos.inputOk02 = $("#text17");
	//------botton input 03
	estilos.inputOk03 = $("input[name='first-example']");
	//------botton input 04
	estilos.inputOk04 = $("#text18");
	//------botton input 05
	estilos.inputOk05 = $("#text19");
	//------botton input 06
	estilos.inputOk06 = $("#range23");
	//------botton input 07
	estilos.inputOk07 = $("#range24");
	//------botton input 08
	estilos.inputOk08 = $("input[name='second-example']");
	//------botton input 09
	estilos.inputOk09 = $("#selector01");
	//------botton input 10
	estilos.inputOk10 = $("#text20");

	estilos.inputButtonOk01 = $(".js--button--01");

	estilos.value01 = $(".js--value01");
	estilos.value02 = $(".js--value02");
	estilos.value03 = $(".js--value03");


//cambio de w´s
	estilos.btn_ux.click(function () {
			estilos.lightwindow =	$(".js--lightwindow[data-window='w" + estilos.counter + "']");
			estilos.lightwindow.removeClass("visible");
			document.getElementById("audio01").play();
			estilos.inputButtonOk01.prop("disabled", true);
			estilos.lightwindow_ux =	$(".js--lightwindow[data-window='wux']");
			estilos.lightwindow_ux.addClass("visible");
			estilos.lightwindow_add =	$(".js--anuncios[data-window='a" + estilos.counterAdd + "']");
			if(estilos.lightwindow_add){
					estilos.lightwindow_add.addClass("visibleAdd");
			}
			estilos.counterAdd ++;
		setTimeout(function () {
				estilos.counter ++;
				estilos.lightwindow =	$(".js--lightwindow[data-window='w" + estilos.counter +  "']");
				estilos.lightwindow.addClass("visible");
				document.getElementById("audio02").play();
		}, 10000);
	});

//cambio intro a WUX
	estilos.btn_inicio.click(function () {
			estilos.lightwindow_intro =	$(".js--lightwindow[data-window='wintro']");
			estilos.lightwindow_intro.removeClass("visible");
			document.getElementById("audio01").play();
			estilos.lightwindow_ux =	$(".js--lightwindow[data-window='wux']");
			estilos.lightwindow_ux.addClass("visible");
		setTimeout(function () {
				estilos.lightwindow =	$(".js--lightwindow[data-window='w0']");
				estilos.lightwindow.addClass("visible");
		}, 10000);
		// estilos.lightwindow.addClass("visible");
		//estilos.audio.play();
		// estilos.titulo.addClass("dark");
	});


//cancelar e ir a outro
	estilos.btn_canc.click(function () {
		estilos.lightwindow_intro =	$(".js--lightwindow[data-window='wintro']");
		estilos.lightwindow_intro.removeClass("visible");
		document.getElementById("audio01").play();
		setTimeout(function () {
		//	estilos.lightwindow =	$(".js--lightwindow[data-window='w" + estilos.counter +  "']");
			estilos.lightwindow =	$(".js--lightwindow[data-window='wtx']");
			estilos.lightwindow.addClass("visible");
			document.getElementById("audio03").play();
		}, 2000);
	});
//cancelar e ir a outro
	estilos.close.click(function () {
		estilos.lightwindow_intro =	$(".js--lightwindow[data-window='wintro']");
		estilos.lightwindow_intro.removeClass("visible");
		document.getElementById("audio01").play();
		setTimeout(function () {
			estilos.lightwindow =	$(".js--lightwindow[data-window='wout']");
			estilos.lightwindow.addClass("visible");
			document.getElementById("audio03").play();
		}, 500);
	});

//habilitar botones ok
//01
estilos.inputOk01.change(function() {
  estilos.inputButtonOk01.prop("disabled", false);
	estilos.value01.html(estilos.inputOk01.val());
});
//02
estilos.inputOk02.on("input",function() {
  estilos.inputButtonOk01.prop("disabled", false);
});
//03
estilos.inputOk03.on("input",function() {
  estilos.inputButtonOk01.prop("disabled", false);
});
//04
estilos.inputOk04.on("input",function() {
  estilos.inputButtonOk01.prop("disabled", false);
});
//05
estilos.inputOk05.on("input",function() {
  estilos.inputButtonOk01.prop("disabled", false);
});
//06
estilos.inputOk06.change(function() {
	estilos.inputButtonOk01.prop("disabled", false);
	estilos.value02.html(estilos.inputOk06.val());
});
//07
estilos.inputOk07.change(function() {
	estilos.inputButtonOk01.prop("disabled", false);
	estilos.value03.html(estilos.inputOk07.val());
});
//08
estilos.inputOk08.on("input",function() {
  estilos.inputButtonOk01.prop("disabled", false);
});
//09
estilos.inputOk09.change(function() {
	estilos.inputButtonOk01.prop("disabled", false);
});
//10
estilos.inputOk10.on("input",function() {
  estilos.inputButtonOk01.prop("disabled", false);
});



estilos.inputButtonOk01.click(function () {
	estilos.inputButtonOk01.prop("disabled", true);
});

console.log(estilos.inputOk03);


}

$("document").ready(function() {
  styles_p();
});
