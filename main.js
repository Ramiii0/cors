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
    var data = JSON.stringify({
        "collection": "api",
        "database": "natours",
        "dataSource": "Cluster0",
        "document": {
          "Coordinationa": `${data1}`
        }
    });
    
    var config = {
        method: 'post',
        url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-bpddjre/endpoint/data/v1/action/insertOne',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': '5dwXV6WAsIqxXHkrqqrJxRFTepsuEdAcfTStmHEGt9qfL6NyeJfyO5vuU4tkQawe',
        },
        data: data
    };
    
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
