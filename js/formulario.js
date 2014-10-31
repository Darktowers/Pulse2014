var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$botton = $('.mostrar-form'),
	$list = $('#contenido'),
	$post = $('.Contenido-item').first();
	$video =$('video');

	//events
function mostrarFormulario(){

	$form.slideToggle();
	$list.slideToggle();
	$video.slideToggle();
	return false;
}

function agregarPost(){
	
	var url = $url.val(),
		titulo= $titulo.val(),
		$clone = $post.clone();

		$clone.find('.Contenido-itemTitulo a').text(titulo).attr('href',url);

		$clone.hide();

		$list.prepend($clone);

		$clone.fadeIn();
		mostrarFormulario();

		$("#url").val("");
		$("#titulo").val("");

		return false;


}
	$botton.click(mostrarFormulario);
	$form.on('submit',agregarPost);

