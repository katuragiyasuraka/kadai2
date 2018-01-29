jQuery(function ($) {
	function changeImage() {
		var $graphic = $('.graphic ul');
		var $frontmost = $graphic.children('.now');
		var $next;
		if($frontmost.next()[0] != undefined){
			$next = $frontmost.next();
		} else {
			$next = $graphic.children().first();
		}
		$frontmost.removeClass('now');
		$next.addClass('now');

	}
	setInterval(changeImage, 4000);
});
