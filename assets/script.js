
/************ Tableau  ************/
const slider = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span> pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

/************ Test clic-alerte ************/
/*
const btn1 = document.querySelector(".arrow_left")
btn1.addEventListener('click', () => {
	const btnGauche = -1;
	alert("clique = " + btnGauche)
})

const btn2 = document.querySelector(".arrow_right")
btn2.addEventListener('click', () => {
	const btnDroite = 1;
	alert("clique = " + btnDroite)
})
*/

/************ Test Tableau  ************/
//const slider = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];
//[0,1,2,3,...]

/************ Bullet point ************/
const dot1 = document.getElementById('dot1')
const dot2 = document.getElementById('dot2')
const dot3 = document.getElementById('dot3')
const dot4 = document.getElementById('dot4')
const dotAll = [dot1, dot2, dot3, dot4]
let count = 0;
const srcImg = "assets/images/slideshow/"

/************ Première version slider  ************/
// const changeImg = (fleche) => {
// 	//console.log(fleche);
// 	count = count + fleche;

// 	//Si count prend une valeur inférieur à 0 alors count prend le dernier élement du tableau
// 	if (count < 0) {
// 		count = slider.length - 1;
// 	}
// 	//si count prend une valeur supérieur au dernier élément du tableau alors count prend le premier élemen du tableau
// 	else if (count > slider.length - 1) {
// 		count = 0;
// 	}
// 	document.querySelector(".banner-img").src = srcImg + slider[count];
// 	console.log(count);
// 	changeDot(); // appelle de la fonction chandeDot
// }

/************ Deuxième version slider  ************/
const changeImg = (fleche) => {
	//console.log(fleche);
	count = count + fleche;

	//Si count prend une valeur inférieur à 0 alors count prend le dernier élement du tableau
	if (count < 0) {
		count = slider.length - 1;
	}
	//si count prend une valeur supérieur au dernier élément du tableau alors count prend le premier élemen du tableau
	else if (count > slider.length - 1) {
		count = 0;
	}

	document.querySelector(".banner-img").src = srcImg + slider[count].image;
	document.querySelector(".banner").innerHTML= slider[count].tagLine;
	console.log(slider[count].tagLine);
	console.log(document.querySelector(".banner"));
	changeDot(); // appelle de la fonction chandeDot
}


/************ Première version bullet point  ************/
//const changeDot = () => {
// if (count == 0) {
// 	dot1.classList.add('dot_selected')
// 	dot2.classList.remove('dot_selected')
// 	dot4.classList.remove('dot_selected')
// }
// else if (count == 1) {
// 	dot2.classList.add('dot_selected')
// 	dot1.classList.remove('dot_selected')
// 	dot3.classList.remove('dot_selected')
// }
// else if (count == 2) {
// 	dot3.classList.add('dot_selected')
// 	dot2.classList.remove('dot_selected')
// 	dot4.classList.remove('dot_selected')
// }
// else if (count == 3) {
// 	dot4.classList.add('dot_selected')
// 	dot3.classList.remove('dot_selected')
// 	dot1.classList.remove('dot_selected')
// }
//}

/************ Deuxième version bullet point  ************/
const changeDot = () => {
	dotAll.forEach(dotSelected => {
		dotSelected.classList.remove('dot_selected')
	});
	switch (count) {
		case 0:
			dot1.classList.add('dot_selected')
			break;
		case 1:
			dot2.classList.add('dot_selected')
			break;
		case 2:
			dot3.classList.add('dot_selected')
			break;
		case 3:
			dot4.classList.add('dot_selected')
			break;
		default:
			break;
	}
}

/************ Troisième version bullet point (version expert bac + 22) ************/
// const changeDot = () => {
// 	dotAll.forEach(dotSelected => {
// 		dotSelected.classList.remove('dot_selected')
// 	});
// 	dotAll[count].classList.add('dot_selected');
// }

//changement d'image automatique toute les 10 sec
setInterval("changeImg(1)", 10000);
