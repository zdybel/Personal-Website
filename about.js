window.onload = function() {

//ABOUT PAGE

	document.getElementById("about-menu").addEventListener("mouseover", showAboutMenu);
	document.getElementById("about-menu").addEventListener("mouseout", hideAboutMenu);
	document.getElementById("about-menu-list").addEventListener("mouseover", showAboutMenu);
	document.getElementById("about-menu-list").addEventListener("mouseout", hideAboutMenu);

	function showAboutMenu(){
		document.getElementById("about-menu-list").style.visibility = "visible";
		document.getElementById("about-menu").style.background = "white";
	};

	function hideAboutMenu(){
		document.getElementById("about-menu-list").style.visibility = "hidden";
		document.getElementById("about-menu").style.background = "#95F2C3";
	}

	document.getElementById("about-home").addEventListener("mouseover", aboutHomeOn);
	document.getElementById("about-home").addEventListener("mouseout", aboutHomeOff);
	document.getElementById("about-menu-portfolio").addEventListener("mouseover", aboutPortfolioShow);
	document.getElementById("about-menu-portfolio").addEventListener("mouseout", aboutPortfolioHide);
	document.getElementById("about-menu-resume").addEventListener("mouseover", aboutResumeShow);
	document.getElementById("about-menu-resume").addEventListener("mouseout", aboutResumeHide);
	document.getElementById("about-menu-contact").addEventListener("mouseover", aboutContactShow);
	document.getElementById("about-menu-contact").addEventListener("mouseout", aboutContactHide);
	document.getElementById("about-menu-home").addEventListener("mouseover", aboutHomeShow);
	document.getElementById("about-menu-home").addEventListener("mouseout", aboutHomeHide);

	function aboutHomeOn(){
		document.getElementById("about-home").style.background = "white";
	}

	function aboutHomeOff(){
		document.getElementById("about-home").style.background = "#95F2C3";
	}

	function aboutPortfolioShow(){
		document.getElementById("about-menu-portfolio").style.background = "white";
	}

	function aboutPortfolioHide(){
		document.getElementById("about-menu-portfolio").style.background = "none";
	}

	function aboutResumeShow(){
		document.getElementById("about-menu-resume").style.background = "white";
	}

	function aboutResumeHide(){
		document.getElementById("about-menu-resume").style.background = "none";
	}
	function aboutContactShow(){
		document.getElementById("about-menu-contact").style.background = "white";
	}

	function aboutContactHide(){
		document.getElementById("about-menu-contact").style.background = "none";
	}
	function aboutHomeShow(){
		document.getElementById("about-menu-home").style.background = "white";
	}

	function aboutHomeHide(){
		document.getElementById("about-menu-home").style.background = "none";
	}
}