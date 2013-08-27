// JavaScript Document
var hostedSetup = {};
hostedSetup.loadFtns = function () 
{
	//add in a magnifying glass for images over 100 px wide.
	$('a.lightbox').each(function () {
        var theLink = this;
        if ($(theLink).find('img').width() >= 100) {
            $(theLink).append('<span title="Click to enlarge picture"></span>');
            $(theLink).after('<br class="clear" />');
        }
    });
	$('a.lightbox').lightBox({fixedNavigation:false,
	overlayBgColor: '#FFF',
	overlayOpacity: 0.6,
	imageLoading: '/includes/lightbox/lightbox-ico-loading.gif',
	imageBtnClose: '/includes/lightbox/lightbox-btn-close.gif',
	imageBtnPrev:  '/includes/lightbox/lightbox-btn-prev.gif',          
    imageBtnNext:  '/includes/lightbox/lightbox-btn-next.gif',
	containerResizeSpeed: 350
	});
	return true;	
}
$(window).load(hostedSetup.loadFtns);