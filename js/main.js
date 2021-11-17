const forma = document.getElementById('form');

forma.addEventListener('submit', async(event) => {
	event.preventDefault();
	  const formData = new FormData(forma);
	  const dataRemote = await fetch('https://fe-student-api.herokuapp.com/api/file',
	  {
		 method: 'POST', 
		 body: formData
	 }).then(data => data.json());
	  console.log(dataRemote);

 })