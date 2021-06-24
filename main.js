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
                    "Accept":"application/json"
		//"Access-Control-Allow-Origin": "https://www.apeasternpower.com"
	}
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => console.log(json));
