function drawPyramid() {
	const userNum = Number(document.getElementById('input-num').value);
	const arrayColumnRigth = []
	const arrayColumnLeft = []
	let arrayAsteriscPyramidRigth = []
	let arrayAsteriscPyramidLeft = []

	for(let i = 0; i < userNum; i++) {
		let column = ''

		for(let j = 0; j < i+1; j++) {
			column = column + '*'
			console.log(column)
			if(i = userNum - 1){
				arrayColumnLeft.push(`${column} \n`)
			}	
		}	
	}
	for(let i = 1; i < userNum; i++) {
		let column = ''

		for(let j = 1; j < i+1; j++) {
			column = column + '*'
			console.log(column)
			if(i = userNum - 1){
				arrayColumnRigth.push(`${column} \n`)
			}	
		}	
	}
	arrayColumnRigth.reverse()
	arrayAsteriscPyramidRigth = arrayColumnRigth.join('')
	arrayAsteriscPyramidLeft = arrayColumnLeft.join('')
	document.getElementById('result').innerHTML = arrayAsteriscPyramidLeft + arrayAsteriscPyramidRigth
}
