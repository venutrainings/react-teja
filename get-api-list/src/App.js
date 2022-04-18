

let divEl = document.createElement("div");
divEl.classList.add("bg-container")
document.body.appendChild(divEl);



let getButton = document.createElement("button");
getButton.classList.add("get-btn")
getButton.textContent = "get data";
divEl.appendChild(getButton)

let postButton = document.createElement("button");
postButton.classList.add("get-btn")
postButton.textContent = "Post data";
divEl.appendChild(postButton)

let updateButton = document.createElement("button");
updateButton.classList.add("get-btn")
updateButton.textContent = "Update data";
divEl.appendChild(updateButton) 

let deleteButton = document.createElement("button");
deleteButton.classList.add("get-btn")
deleteButton.textContent = "Delete data";
divEl.appendChild(deleteButton) 


getButton.setAttribute("id", "display");

const clik =document.getElementById('display');
let data =[];
const getData = () =>{
 sendHttpRequest('GET', 'https://gorest.co.in/public/v2/users').then(responseData =>{
   console.log(responseData)
 }) 
}

var postData = {

}


const sendData =() =>{
  sendHttpRequest('POST', 'https://gorest.co.in/public/v2/users', {

   "name":"Chikita Adiga",
   "email":"chikita_a1diga@predovic.name",
   "gender":"female",
    
  }).then(responseData =>{
    console.log("post data success" +responseData)
  })
}

const updateData =() =>{
  sendHttpRequest('PUT', 'https://gorest.co.in/public/v2/users/2736', {

    "id":2736,
    "name":"Bodhan rman",
    "email":"bohan_varn@hoppe.info",
    "gender":"male",
    "status":"active"
  }).then(responseData =>{
    console.log("post data success" +responseData)
  })
}

const deleteData =() =>{
  sendHttpRequest('DELETE', 'https://gorest.co.in/public/v2/users/2707',true).then(responseData =>{
    console.log("delete data success" +responseData)
  })
}



let displayData1 = (res) =>{
console.log(res)

let displayData = document.createElement("div");

document.body.appendChild(displayData);

let tableData = document.createElement("table");
tableData.classList.add("table-bordered");
displayData.appendChild(tableData);

let tableHeader = document.createElement("thead");
tableData.appendChild(tableHeader);

let trEl = document.createElement("tr");
tableHeader.appendChild(trEl);

let thEl1 = document.createElement("th");
thEl1.classList.add("col");
thEl1.textContent = "id";
trEl.appendChild(thEl1);


let thEl2 = document.createElement("th");
thEl2.classList.add("col");
thEl2.textContent = "name";
trEl.appendChild(thEl2);

let thEl3 = document.createElement("th");
thEl3.classList.add("col");
thEl3.textContent = "email";
trEl.appendChild(thEl3);


let thEl4 = document.createElement("th");
thEl4.classList.add("col");
thEl4.textContent = "gender";
trEl.appendChild(thEl4);


let thEl5 = document.createElement("th");
thEl5.classList.add("col");
thEl5.textContent = "status";
trEl.appendChild(thEl5);

let tableBodyData =document.createElement("tbody")
res.forEach(element => {
  const record1 = document.createElement("tr");
  tableBodyData.appendChild(record1)

  const idEl = document.createElement("td");
  idEl.textContent = element.id
  record1.appendChild(idEl)

  const nameEl = document.createElement("td");
  nameEl.textContent = element.name
  record1.appendChild(nameEl)

  const emailEl = document.createElement("td");
  emailEl.textContent = element.email
  record1.appendChild(emailEl)

  const genderEl = document.createElement("td");
  genderEl.textContent = element.gender
  record1.appendChild(genderEl)

  const statusEl = document.createElement("td");
  statusEl.textContent = element.status
  record1.appendChild(statusEl)


});
tableData.appendChild(tableBodyData)
}

getButton.addEventListener('click', getData);
clik.addEventListener('click', getData);
postButton.addEventListener('click', sendData);
updateButton.addEventListener('click', updateData);
deleteButton.addEventListener('click', deleteData)


const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) =>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
  
    xhr.responseType = 'json';

    if(data){
      
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('Authorization', 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561');
      
    }
  
    xhr.onreadystatechange = function() {
      console.log("State: ", this.readyState, "Status: ", this.status);
      if (this.readyState === 4 && this.status === 200) {
        resolve(xhr.response);
        // this.data =xhr.response;
      displayData1(xhr.response);
      } else if (this.readyState === 4) {
          console.log(this.status);
      } else {
          //not ready yet 
      }
  }

  xhr.onerror = () => {
    reject('Something went wrong');
  }
    xhr.send(JSON.stringify(data));
  });
 
return promise;
} 