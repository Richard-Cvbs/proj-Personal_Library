let form = document.querySelector("form");
let log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  let data = new FormData(form);
  var output = "";
  console.log(data)
   console.log(data.entries(e =>{
       console.log(e)
   }))
   for (let entry of data) {
     console.log(entry)
    output = output + entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);
