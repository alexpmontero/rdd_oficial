
$(window).load(function() {
// setTimeout(function(){
	$(".load_bg").fadeOut(800);
// },2000);
}); 


function cargaComun()
{
	$("#header").load("html/header.html");
	$("#footer").load("html/footer.html");
	$("#contenido-gral").css({display:"none"}).fadeIn(360);
	$("#header").before("<input type='checkbox' id='menu-movil' /><label for='menu-movil'></label>");
}

function iniciarSlider()
{
	$("#slider").flexslider({
		animation:"slide",
		controlNav:false
	});
}

function fancybox()
{
	var fancy = ($(window).width()<650)?true:false;
	// console.log(fancy,$(window).width());

	if (fancy)
	{
		$(".ejemplo").fancybox({
			autoSize:false,
			height:"100%",
			width:"110%"
		});
	}else
	{
		$(".ejemplo").fancybox({
			autoSize:false,
			height:"100%",
			width:"70%"
		});
	}
}


function vision()
{
	$("#p-evan").slideDown(1000);		


	$("#btn-evan").on("click",function(){
		$("#p-evan").slideDown("1000");		
		$("#p-afir").slideUp("1000");
		$("#p-disc").slideUp("1000");
		$("#p-envi").slideUp("1000");
	});
	$("#btn-afir").on("click",function(){
		$("#p-afir").slideDown("1000");
		$("#p-evan").slideUp("1000");
		$("#p-disc").slideUp("1000");
		$("#p-envi").slideUp("1000");
	});
	$("#btn-disc").on("click",function(){
		$("#p-disc").slideDown("1000");
		$("#p-afir").slideUp("1000");
		$("#p-evan").slideUp("1000");
		$("#p-envi").slideUp("1000");
	});
	$("#btn-envi").on("click",function(){
		$("#p-envi").slideDown("1000");
		$("#p-afir").slideUp("1000");
		$("#p-disc").slideUp("1000");
		$("#p-evan").slideUp("1000");
	});

}

function cargarEfectos()
{
	cargaComun();
	vision();
	fancybox();
	iniciarSlider();
}

