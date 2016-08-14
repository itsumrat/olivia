jQuery(document).ready(function($){

	/*========== FitText ==========*/
	jQuery("h1").fitText(1.2, { minFontSize: '30px', maxFontSize: '60px' });
	jQuery("h3").fitText(1.2, { minFontSize: '16px', maxFontSize: '28px' });
	jQuery("h4").fitText(1.2, { minFontSize: '14px', maxFontSize: '14px' });
	jQuery("p").fitText(1.2, { minFontSize: '15px', maxFontSize: '16px' });
	/*========== #FitText ==========*/

	/*========== Contact TextBox ==========*/
	$('#message').mouseup(function(){
	    $(this).css('margin', 'auto');  
	});
	/*========== #Contact TextBox ==========*/

	/*========== Restive ==========*/
	/*$('body').restive({
        breakpoints: ['320', '480', '640', '768', '1024', '1280'],
        classes: ['css-320', 'css-480', 'css-640', 'css-768', 'css-1024', 'css-1280']            
    });*/
	/*========== #Restive ==========*/


});