function makeid(l) {
  // write your code here
	let res="";
	let char="qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJAHSGDFMZNXBCV1029387465"
	for(let i=0;i<l;i++){
		res = res + char.charAt(
			Math.floor(
				Math.random() * char.length
			)
		);
	}
	return res;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));