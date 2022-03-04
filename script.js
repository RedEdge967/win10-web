function hideNotifications() {
	var x = document.getElementById("notifications");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  x.classList.add("fade-in-bottom");
	} else {
	  x.classList.remove("fade-in-bottom");
	  x.classList.add("fade-out-bottom");
	  
	  setTimeout(() => {  x.style.display = "none"; x.classList.remove("fade-out-bottom"); }, 300);
	}
  }

  function hideNotify() {
		var x = document.getElementById("notify");
		x.classList.add("fade-out-bottom");
		setTimeout(() => {  x.style.display = "none"; }, 300);
  }

  function hideSearchBox() {
	var x = document.getElementById("searchBox");
	var y = document.getElementById("startMenu");
	if (x.style.display === "none" && y.style.display != "none") {
	  y.style.display = "none";
	  x.style.display = "block";
	  x.classList.add("fade-in-bottom");
	} else if (x.style.display === "none")  {
	  x.style.display = "block";
	  x.classList.add("fade-in-bottom");
	} else {
	  x.classList.remove("fade-in-bottom");
	  x.classList.add("fade-out-bottom");
	  
	  setTimeout(() => {  x.style.display = "none"; x.classList.remove("fade-out-bottom"); }, 300);
	}
  }

  function hide() {
	var x = document.getElementById("startMenu");
	var y = document.getElementById("searchBox");
	if (x.style.display === "none" && y.style.display != "none" ) {
	  y.style.display = "none";
	  x.style.display = "block";
	  x.classList.add("fade-in-bl");
	} else if (x.style.display === "none")  {
	  x.style.display = "block";
	  x.classList.add("fade-in-bl");
	} else {
	  x.classList.remove("fade-in-bl");
	  x.classList.add("fade-out-bl");
	  
	  setTimeout(() => {  x.style.display = "none"; x.classList.remove("fade-out-bl"); }, 300);
	}
  }

  function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
  }