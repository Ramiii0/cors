function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude+","+longitude)
    var data1 = latitude+","+longitude
  const data = JSON.stringify({
    "collection": "api",
    "database": "natours",
    "dataSource": "Cluster0",
    "document": {
      "Coordination":`twat`
    }
  });
  
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '5dwXV6WAsIqxXHkrqqrJxRFTepsuEdAcfTStmHEGt9qfL6NyeJfyO5vuU4tkQawe',
    },
    body: data
  };
  
  fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-bpddjre/endpoint/data/v1/action/insertOne', config)
    .then(response => response.json())
    .then(data => {
      console.log(JSON.stringify(data));
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
console.log("hsi")
}
