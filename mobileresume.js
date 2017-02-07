document.getElementsByClassName("mobile-resume-menu")[0].addEventListener("click", resumeMenuShow);

var clicked = false;

function resumeMenuShow(){
	if(clicked == false){
		document.getElementById("mobile-resume-menu").style.display = "flex";
		document.getElementsByClassName("mobile-resume-menu")[0].style.background = "#FEFEFE";
		clicked = true;
	};
	if(clicked == true){
		document.getElementById("mobile-resume-menu").style.display = "none";
		document.getElementsByClassName("mobile-resume-menu")[0].style.background = "#95F2C3";
		clicked = false;
	}
}