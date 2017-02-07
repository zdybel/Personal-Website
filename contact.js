window.onload = function() {

//RESUME PAGE

	document.getElementById("contact-menu").addEventListener("mouseover", showContactMenu);
	document.getElementById("contact-menu").addEventListener("mouseout", hideContactMenu);
	document.getElementById("contact-menu-list").addEventListener("mouseover", showContactMenu);
	document.getElementById("contact-menu-list").addEventListener("mouseout", hideContactMenu);

	function showContactMenu(){
		document.getElementById("contact-menu-list").style.visibility = "visible";
		document.getElementById("contact-menu").style.background = "white";
	};

	function hideContactMenu(){
		document.getElementById("contact-menu-list").style.visibility = "hidden";
		document.getElementById("contact-menu").style.background = "#95F2C3";
	};

	document.getElementById("contact-home").addEventListener("mouseover", contactHomeOn);
	document.getElementById("contact-home").addEventListener("mouseout", contactHomeOff);
	document.getElementById("contact-menu-about").addEventListener("mouseover", contactAboutShow);
	document.getElementById("contact-menu-about").addEventListener("mouseout", contactAboutHide);
	document.getElementById("contact-menu-portfolio").addEventListener("mouseover", contactPortfolioShow);
	document.getElementById("contact-menu-portfolio").addEventListener("mouseout", contactPortfolioHide);
	document.getElementById("contact-menu-resume").addEventListener("mouseover", contactResumeShow);
	document.getElementById("contact-menu-resume").addEventListener("mouseout", contactResumeHide);
	document.getElementById("contact-menu-home").addEventListener("mouseover", contactHomeShow);
	document.getElementById("contact-menu-home").addEventListener("mouseout", contactHomeHide);

	function contactHomeOn(){
		document.getElementById("contact-home").style.background = "white";
	}

	function contactHomeOff(){
		document.getElementById("contact-home").style.background = "#95F2C3";
	}

	function contactAboutShow(){
		document.getElementById("contact-menu-about").style.background = "white";
	}

	function contactAboutHide(){
		document.getElementById("contact-menu-about").style.background = "none";
	}
	
	function contactPortfolioShow(){
		document.getElementById("contact-menu-portfolio").style.background = "white";
	}

	function contactPortfolioHide(){
		document.getElementById("contact-menu-portfolio").style.background = "none";
	}

	function contactResumeShow(){
		document.getElementById("contact-menu-resume").style.background = "white";
	}

	function contactResumeHide(){
		document.getElementById("contact-menu-resume").style.background = "none";
	}
	function contactHomeShow(){
		document.getElementById("contact-menu-home").style.background = "white";
	}

	function contactHomeHide(){
		document.getElementById("contact-menu-home").style.background = "none";
	}

	document.getElementById("gmail").addEventListener("mouseover", gmailOn);
	document.getElementById("gmail").addEventListener("mouseout", gmailOff);
	document.getElementById("gmail").addEventListener("click", gmailClick);
	document.getElementById("github").addEventListener("mouseover", githubOn);
	document.getElementById("github").addEventListener("mouseout", githubOff);
	document.getElementById("github").addEventListener("click", githubClick);
	document.getElementById("linkedin").addEventListener("mouseover", linkedinOn);
	document.getElementById("linkedin").addEventListener("mouseout", linkedinOff);
	document.getElementById("linkedin").addEventListener("click", linkedinClick);
	document.getElementById("twitter").addEventListener("mouseover", twitterOn);
	document.getElementById("twitter").addEventListener("mouseout", twitterOff);
	document.getElementById("twitter").addEventListener("click", twitterClick);

	function gmailOn(){
		document.getElementById("gmail").style.background = "rgb(255,255,255";
	}

	function gmailOff(){
		document.getElementById("gmail").style.background = "none";
	}

	function gmailClick(){
		document.getElementById("gmail-gmail").style.display = "flex";

	}

	function githubOn(){
		document.getElementById("github").style.background = "rgb(255,255,255)";
	}

	function githubOff(){
		document.getElementById("github").style.background = "none";
	}

	function githubClick(){
		document.getElementById("github-github").style.display = "flex";
	}

	function linkedinOn(){
		document.getElementById("linkedin").style.background = "rgb(255,255,255)";
	}

	function linkedinOff(){
		document.getElementById("linkedin").style.background = "none";
	}

	function linkedinClick(){
		document.getElementById("linkedin-linkedin").style.display = "flex";
	}

	function twitterOn(){
		document.getElementById("twitter").style.background = "rgb(255,255,255)";
	}

	function twitterOff(){
		document.getElementById("twitter").style.background = "none";
	}

	function twitterClick(){
		document.getElementById("twitter-twitter").style.display = "flex";
	}

	document.getElementById("github-github").addEventListener("mouseover", githubLink);
	document.getElementById("github-github").addEventListener("mouseout", githubLinkOff);
	document.getElementById("linkedin-linkedin").addEventListener("mouseover", linkedinLink);
	document.getElementById("linkedin-linkedin").addEventListener("mouseout", linkedinLinkOff);
	document.getElementById("twitter-twitter").addEventListener("mouseover", twitterLink);
	document.getElementById("twitter-twitter").addEventListener("mouseout", twitterLinkOff);

	function githubLink(){
		document.getElementById("github-link").style.color = "white";
	}

	function githubLinkOff(){
		document.getElementById("github-link").style.color="#350C90";
	}

	function linkedinLink(){
		document.getElementById("linkedin-link").style.color="white";
	}

	function linkedinLinkOff(){
		document.getElementById("linkedin-link").style.color="#350C90";
	}

	function twitterLink(){
		document.getElementById("twitter-link").style.color="white";
	}

	function twitterLinkOff(){
		document.getElementById("twitter-link").style.color="#350C90";
	}

}