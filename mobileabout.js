document.getElementsByClassName("mobile-about-menu")[0].addEventListener("click", aboutMenuShow);

var clicked = false;

function aboutMenuShow(){
	if(clicked == false){
		document.getElementById("mobile-about-menu").style.display = "flex";
		document.getElementsByClassName("mobile-about-menu")[0].style.background = "#FEFEFE";
		clicked = true;
	};
	if(clicked == true){
		document.getElementById("mobile-about-menu").style.display = "none";
		document.getElementsByClassName("mobile-about-menu")[0].style.background = "#95F2C3";
		clicked = false;
	}
}
