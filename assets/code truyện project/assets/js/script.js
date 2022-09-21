function getRandomArbitrary(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}


function getSnow(){
		$(document).ready(function(){
			setInterval(function(){
				var screenHeight = $(document).height();
				var screenWidth = $(document).width();
				var startLeft = getRandomArbitrary(0, screenWidth);
				var timeRun = getRandomArbitrary(12000, 14000);
				var opacityR = Math.random() * (1 - 0.2) + 0.2;
				var sizeR = getRandomArbitrary(10, 40);
				var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);
				var snow = document.createElement('i');
				$(snow).addClass('snow-item far fa-snowflake').css({
					'position'  : 'absolute',
					'z-index'   : 'auto',
					'color'     : 'var(--primary-color)',
					'display'   : 'block',
					'top'       : 0,
					'left'      : startLeft,
					'opacity'   : opacityR,
					'font-size' : sizeR+'px'
				})
				.appendTo('body')
				.animate({
					'top'       : screenHeight-sizeR,
					'left'      : endLeft
				},{
					duration : timeRun,
					easing : 'linear',
					complete:function(){
						$(this).fadeOut('fast',function(){
							$(this).remove();
						});
					}
				});
			},500);
		});
}



openImage3D()
function openImage3D (){
    const openImage3D = document.querySelector('.open-musics')
    const isOpen = false
    openImage3D.onclick = function(){       
		getSnow()
    }
}
