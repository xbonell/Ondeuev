$(document).ready(function(){

    $(".nav a, .lang a").hover(function() {  
    	$(this).stop().animate({ color: "#000000", backgroundColor: "#FFA500" }, 500);  
    },function() {  
        $(this).stop().animate({ color: "#FFFFFF", backgroundColor: "#222222" }, 500);  
    });

    $(".gallery a").hover(function() {
    	$(this).stop().animate({ backgroundColor: "#333333" }, 500);     
    },function() {  
        $(this).stop().animate({ borderTopColor: "#222222" }, 500);  
    });

	$("h2.claim a").children().andSelf().contents().each(function(){
	    if (this.nodeType == 3) {
	        var $this = $(this);
	        $this.replaceWith($this.text().replace(/(\w)/g, "<span>$&</span>"));
	    }
	});

    $("h2.claim span").hover(function() {  
    	$(this).stop().animate({ color: "#FFA500"}, 500);  
    },function() {  
        $(this).stop().animate({ color: "#000000" }, 5000);  
    });

	// Highlight a word
	jQuery.fn.highlight = function (str, className) {
	  var regex = new RegExp(str, "g");
	  return this.each(function () {
	    this.innerHTML = this.innerHTML.replace(regex, "<span class=\"" + className + "\">" + str + "</span>");
	  });
	};
	
	$('#main-content li, #main-content p').highlight("Ondeuev","ondeuev");

	// Generate random tag clouds
	$('ul.tags li').each(function(){
	  var weight = Math.floor((10-4)*Math.random()) + 5;
	  var alpha = weight/10;
	  var alphaIE = weight*10;
	  var size = weight*20+"%";
	  var ie8Alpha = "\"progid:DXImageTransform.Microsoft.Alpha(Opacity="+alphaIE+")\"";
	  var ieAlpha = "alpha(opacity="+alphaIE+")";
	  $(this).css({ 'opacity' : alpha, "filter" : ieAlpha,"-ms-filter" : ie8Alpha, 'font-size' : size });
	});

	// Tricks for browsers that suck at CSS support
	if($.browser.msie && (($.browser.version=="6.0")||($.browser.version=="7.0"))) {
		$('#main-content ul.gallery li:nth-child(5n)').css({marginRight: "0"});
		$('#aside .nav li .active').append(" &#x2192;")
	}

});