(function($){
"use strict";
	/* ----------------------- MENU ---------------------- */
	$( 'body' ).on('click', '.nav-btn',  function( event ){
		$( event.currentTarget ).toggleClass('active');
		$('.nav-menu').toggleClass('active');
		$( 'body' ).toggleClass('no-scroll');
		return false;
	});

	$( window ).on('resize.myTemplate', function(){
		$('body')[ ( $(this).width() <= 767 ) ? 'addClass' : 'removeClass' ]('isMobile')
	}).trigger( 'resize.myTemplate' );

	$( 'body' ).on('click', '.dropdown>a', function( event){
		if( ! $('body.isMobile')[0] ){
			return;
		}

		var $thisLi = $( event.currentTarget ).parents( 'li' ),
			$thisLiActive = $thisLi.hasClass( 'dropdown-active' );

		$('.dropdown-active').removeClass('dropdown-active').children('ul').slideUp('slow');

		if( ! $thisLiActive ){
			$thisLi.addClass('dropdown-active');
			$thisLi.children('ul').slideDown('slow');
		}

		return false;
	});

	$( 'body' ).on( 'mouseenter', '.dropdown', function(event){
		if( $('body.isMobile')[0] ){
			return;
		}

		var menuItem = $( event.currentTarget );

		if( menuItem[0].timeOutMenu ){
			clearTimeout( menuItem[0].timeOutMenu );
		}

		menuItem.addClass('active');
	}).on( 'mouseleave', '.dropdown', function( event ){
		if( $('body.isMobile')[0] ){
			return;
		}

		var menuItem = $( event.currentTarget );

		menuItem[0].timeOutMenu = setTimeout( function(){
			menuItem.removeClass('active');
		}, 500 );
	});

	/* ------------------------ TO TOP ----------------------- */
	$(window).on( 'scroll.myTemplat', scrollWindow).trigger( 'scroll.myTemplat' );

	function scrollWindow() {
		if ($(window).scrollTop() > 500) {
			$('.to-top').addClass('active');
		} else {
			$('.to-top').removeClass('active');
		}
	}

	$( 'body' ).on( 'click', '.to-top',  function(event) {
		$('html, body').animate({
			scrollTop:0
		}, 400);
		return false;
	});

}(jQuery));
