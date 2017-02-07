document.getElementsByClassName("mobile-portfolio-menu")[0].addEventListener("click", portfolioMenuShow);

var clicked = false;

function portfolioMenuShow(){
	if(clicked == false){
		document.getElementById("mobile-portfolio-menu").style.display = "flex";
		document.getElementsByClassName("mobile-portfolio-menu")[0].style.background = "#FEFEFE";
		clicked = true;
	};
	if(clicked == true){
		document.getElementById("mobile-portfolio-menu").style.display = "none";
		document.getElementsByClassName("mobile-portfolio-menu")[0].style.background = "#95F2C3";
		clicked = false;
	}
}

