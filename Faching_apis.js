// Get request om Fech apis

// console.log("apis")
// function getdata(){
// console.log("get data")
// url = 'food.txt'
// fetch(url).then(response => response.json())
// .then(data => console.log(data))
// }
// getdata();


//Post request on fach apis



// function postData(){
//     url = "https://api.instantwebtools.net/v1/passenger";
//     // data = '{"name":"kretkopjo","salary":"123","age":"23"}'
//     data = '{"name":"John Doe","trips":250,"airline":5}'
//     params = {
//         method:'POST',
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(data)
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }

// postData();

// Example POST method implementation:
async function postData(url = 'https://api.instantwebtools.net/v1/passenger', data = '{"name":"John Doe","trips":250,"airline":5}') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  