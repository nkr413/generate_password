document.getElementById('start_generate').addEventListener('click', function(e) {
	let inp_base = document.querySelectorAll('.select-pass-blc input');
	let inpTwo_base = document.querySelectorAll(".select-pass-bukva-blc input");
	let inpThe_base = document.querySelectorAll(".select-pass-upperCase input");
	let psLenInt = 0, psBukvInt = false, psUpperInt = false;
	let numBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let symbolBase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

	for (i = 0; i < inp_base.length; i++) {
		if (inp_base[i].checked) {
			if (i == 0) psLenInt = 4;
			else if (i == 1) psLenInt = 6;
			else if (i == 2) psLenInt = 8;
			else if (i == 3) psLenInt = 10;
			else if (i == 4) psLenInt = 12;
			else if (i == 5) psLenInt = 14;
		}
	}

	for (x = 0; x < inpTwo_base.length; x++) {
		if (inpTwo_base[x].checked) {
			if (x == 0) psBukvInt = true;
			else if (x == 1) psBukvInt = false;
		}
	}

	for (n = 0; n < inpTwo_base.length; n++) {
		if (inpThe_base[n].checked) {
			if (n == 0) psUpperInt = true;
			else if (n == 1) psUpperInt = false;
		}
	}

	(function () {
		let newArray = [];
		let randomSym = symbolBase[Math.floor(Math.random()*symbolBase.length)];

		for (i = 0; i < psLenInt; i++) {
			if (psBukvInt == true) { 
				let x = Math.round(Math.random() * 1);
				if (x == 1) {
					if (psUpperInt == true) {
						let n = Math.round(Math.random() * 2);
						if (n == 1) {
							let randomSym = symbolBase[Math.floor(Math.random() * symbolBase.length)];
							newArray.push(randomSym.toUpperCase());
						} else {
							let randomSym = symbolBase[Math.floor(Math.random() * symbolBase.length)];
							newArray.push(randomSym);
						}
					} else {
						let randomSym = symbolBase[Math.floor(Math.random() * symbolBase.length)];
						newArray.push(randomSym);
					}
				} else {
					let randomNum = numBase[Math.floor(Math.random() * numBase.length)];
					newArray.push(randomNum);
				}
			} else {
				let randomNum = numBase[Math.floor(Math.random() * numBase.length)];
				newArray.push(randomNum);
			}
		}
		document.getElementById("result").innerHTML = newArray.join("");
		delete newArray;
	})();
});




