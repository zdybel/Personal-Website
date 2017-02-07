window.onload = function() {

//RESUME PAGE

	document.getElementById("resume-menu").addEventListener("mouseover", showResumeMenu);
	document.getElementById("resume-menu").addEventListener("mouseout", hideResumeMenu);
	document.getElementById("resume-menu-list").addEventListener("mouseover", showResumeMenu);
	document.getElementById("resume-menu-list").addEventListener("mouseout", hideResumeMenu);

	function showResumeMenu(){
		document.getElementById("resume-menu-list").style.visibility = "visible";
		document.getElementById("resume-menu").style.background = "white";
	};

	function hideResumeMenu(){
		document.getElementById("resume-menu-list").style.visibility = "hidden";
		document.getElementById("resume-menu").style.background = "#95F2C3";
	};

	document.getElementById("resume-home").addEventListener("mouseover", resumeHomeOn);
	document.getElementById("resume-home").addEventListener("mouseout", resumeHomeOff);
	document.getElementById("resume-menu-about").addEventListener("mouseover", resumeAboutShow);
	document.getElementById("resume-menu-about").addEventListener("mouseout", resumeAboutHide);
	document.getElementById("resume-menu-portfolio").addEventListener("mouseover", resumePortfolioShow);
	document.getElementById("resume-menu-portfolio").addEventListener("mouseout", resumePortfolioHide);
	document.getElementById("resume-menu-contact").addEventListener("mouseover", resumeContactShow);
	document.getElementById("resume-menu-contact").addEventListener("mouseout", resumeContactHide);
	document.getElementById("resume-menu-home").addEventListener("mouseover", resumeHomeShow);
	document.getElementById("resume-menu-home").addEventListener("mouseout", resumeHomeHide);

	function resumeHomeOn(){
		document.getElementById("resume-home").style.background = "white";
	}

	function resumeHomeOff(){
		document.getElementById("resume-home").style.background = "#95F2C3";
	}

	function resumeAboutShow(){
		document.getElementById("resume-menu-about").style.background = "white";
	}

	function resumeAboutHide(){
		document.getElementById("resume-menu-about").style.background = "none";
	}
	
	function resumePortfolioShow(){
		document.getElementById("resume-menu-portfolio").style.background = "white";
	}

	function resumePortfolioHide(){
		document.getElementById("resume-menu-portfolio").style.background = "none";
	}

	function resumeContactShow(){
		document.getElementById("resume-menu-contact").style.background = "white";
	}

	function resumeContactHide(){
		document.getElementById("resume-menu-contact").style.background = "none";
	}
	function resumeHomeShow(){
		document.getElementById("resume-menu-home").style.background = "white";
	}

	function resumeHomeHide(){
		document.getElementById("resume-menu-home").style.background = "none";
	}
}