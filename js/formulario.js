var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$botton = $('.mostrar-form'),
	$list = $('#contenido'),
	$post = $('.Contenido-item').first();


	//events
function mostrarFormulario(){

	$form.slideToggle();
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

		return false;


}
	$botton.click(mostrarFormulario);
	$form.on('submit',agregarPost);

