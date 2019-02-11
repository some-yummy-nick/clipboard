navigator.clipboard.writeText('Hello my dear friend')
	.then(() => {
		console.log("скопировано");
	})
	.catch(err => {
		console.log('Something went wrong', err);
	});

navigator.clipboard.readText()
	.then(text => {
		console.log("текст из буфера " + text);
	})
	.catch(err => {
		// возможно, пользователь не дал разрешение на чтение данных из буфера обмена
		console.log('Something went wrong', err);
	});