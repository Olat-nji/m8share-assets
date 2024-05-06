const firstContainer = document.getElementById("first-container");
const secondContainer = document.getElementById("second-container");
const thirdContainer = document.getElementById("third-container");

const parkingBtn = document.querySelector("#parking");
const garageBtn = document.querySelector("#garage");
const othersBtn = document.querySelector("#others");


window.onload = function() {
  document.getElementById('second-container').style.display = 'none';
  document.getElementById('third-container').style.display = 'none';
};

parkingBtn.onclick = function () {
	if (firstContainer.style.display == "none") {
	  firstContainer.style.display = "block";
	  secondContainer.style.display = "none";
	  thirdContainer.style.display = "none";
	} else {
	  firstContainer.style.display = "block";
	  secondContainer.style.display = "none";
	  thirdContainer.style.display = "none";
	}
  };
garageBtn.onclick = function () {
  if (secondContainer.style.display == "none") {
    secondContainer.style.display = "block";
	firstContainer.style.display = "none";
	thirdContainer.style.display = "none";
  } else {
    secondContainer.style.display = "block";
	firstContainer.style.display = "none";
	thirdContainer.style.display = "none";
  }
};
othersBtn.onclick = function () {
	if (thirdContainer.style.display == "none") {
	  thirdContainer.style.display = "block";
	  firstContainer.style.display = "none";
	  secondContainer.style.display = "none";
	} else {
	  thirdContainer.style.display = "block";
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
	}
  };