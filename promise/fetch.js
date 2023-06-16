fetch("http://api.github.com/users/mandii1")
.then((response) => response.json())
.then((json) => console.log(json))
.then((erro) => console.log("Error", erro));