window.onload = function() {

	//HOME PAGE

	document.getElementById("home-about").addEventListener("mouseover", highlightAbout);
	document.getElementById("home-about").addEventListener("mouseout", lowlightAbout);
	document.getElementById("home-portfolio").addEventListener("mouseover", highlightPortfolio);
	document.getElementById("home-portfolio").addEventListener("mouseout", lowlightPortfolio);
	document.getElementById("home-resume").addEventListener("mouseover", highlightResume);
	document.getElementById("home-resume").addEventListener("mouseout", lowlightResume);
	document.getElementById("home-contact").addEventListener("mouseover", highlightContact);
	document.getElementById("home-contact").addEventListener("mouseout", lowlightContact);

	function highlightAbout(){
		document.getElementById("home-about").src = "images/aboutwhite.svg";
		console.log("happeneing");
	};

	function lowlightAbout(){
		document.getElementById("home-about").src = "images/about.svg";
	};

	function highlightPortfolio(){
		document.getElementById("home-portfolio").src = "images/portfoliowhite.svg";
	};

	function lowlightPortfolio(){
		document.getElementById("home-portfolio").src = "images/portfolio.svg";
	};

	function highlightResume(){
		document.getElementById("home-resume").src = "images/resumewhite.svg";
	};

	function lowlightResume(){
		document.getElementById("home-resume").src = "images/resume.svg";
	};

	function highlightContact(){
		document.getElementById("home-contact").src = "images/contactwhite.svg";
	};

	function lowlightContact(){
		document.getElementById("home-contact").src = "images/contact.svg";
	};

	

}