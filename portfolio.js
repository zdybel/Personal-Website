window.onload = function() {

//Portfolio PAGE

	document.getElementById("portfolio-menu").addEventListener("mouseover", showPortfolioMenu);
	document.getElementById("portfolio-menu").addEventListener("mouseout", hidePortfolioMenu);
	document.getElementById("portfolio-menu-list").addEventListener("mouseover", showPortfolioMenu);
	document.getElementById("portfolio-menu-list").addEventListener("mouseout", hidePortfolioMenu);

	function showPortfolioMenu(){
		document.getElementById("portfolio-menu-list").style.visibility = "visible";
		document.getElementById("portfolio-menu").style.background = "white";
	};

	function hidePortfolioMenu(){
		document.getElementById("portfolio-menu-list").style.visibility = "hidden";
		document.getElementById("portfolio-menu").style.background = "#95F2C3";
	}

	document.getElementById("portfolio-home").addEventListener("mouseover", portfolioHomeOn);
	document.getElementById("portfolio-home").addEventListener("mouseout", portfolioHomeOff);
	document.getElementById("portfolio-menu-about").addEventListener("mouseover", portfolioAboutShow);
	document.getElementById("portfolio-menu-about").addEventListener("mouseout", portfolioAboutHide);
	document.getElementById("portfolio-menu-resume").addEventListener("mouseover", portfolioResumeShow);
	document.getElementById("portfolio-menu-resume").addEventListener("mouseout", portfolioResumeHide);
	document.getElementById("portfolio-menu-contact").addEventListener("mouseover", portfolioContactShow);
	document.getElementById("portfolio-menu-contact").addEventListener("mouseout", portfolioContactHide);
	document.getElementById("portfolio-menu-home").addEventListener("mouseover", portfolioHomeShow);
	document.getElementById("portfolio-menu-home").addEventListener("mouseout", portfolioHomeHide);

	function portfolioHomeOn(){
		document.getElementById("portfolio-home").style.background = "white";
	}

	function portfolioHomeOff(){
		document.getElementById("portfolio-home").style.background = "#95F2C3";
	}

	function portfolioAboutShow(){
		document.getElementById("portfolio-menu-about").style.background = "white";
	}

	function portfolioAboutHide(){
		document.getElementById("portfolio-menu-about").style.background = "none";
	}

	function portfolioResumeShow(){
		document.getElementById("portfolio-menu-resume").style.background = "white";
	}

	function portfolioResumeHide(){
		document.getElementById("portfolio-menu-resume").style.background = "none";
	}
	function portfolioContactShow(){
		document.getElementById("portfolio-menu-contact").style.background = "white";
	}

	function portfolioContactHide(){
		document.getElementById("portfolio-menu-contact").style.background = "none";
	}
	function portfolioHomeShow(){
		document.getElementById("portfolio-menu-home").style.background = "white";
	}

	function portfolioHomeHide(){
		document.getElementById("portfolio-menu-home").style.background = "none";
	}

}