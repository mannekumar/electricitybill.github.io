// main.js

// POST request using fetch()
fetch("https://www.apeasternpower.com/getChatboxBill?ltscno=1525552719000009", {
	
	// Adding method type
	method: "POST",
	mode: 'no-cors',
	
	// Adding body or contents to send
	body: JSON.stringify({hello:"hai"}),
	
	// Adding headers to the request
	headers: {
		"Content-Type": "application/json",
                    "Accept":"application/json",
					"permissions-policy": "interest-cohort=()"
		//"Access-Control-Allow-Origin": "https://www.apeasternpower.com"
	}
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => {console.log(json)
const myObj = json;
  let text = "<table border='1'>"
  for (let x in myObj) {
    text += "<tr><td>" +x+":"+ myObj[x] + "</td></tr>";
  }
  text += "</table>"    
document.getElementById("demo").innerHTML = text;});
