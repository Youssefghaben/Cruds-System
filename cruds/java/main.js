let Name = document.getElementById('Name');
let Email = document.getElementById('Email');
let Salary = document.getElementById('Salary');
let City = document.getElementById('City');
let Submit = document.getElementById('Submit');

let mood = 'create';
//global
let tmp;

if(Name==''){

}

// create product cusmoter 
let dataCust;
if(localStorage.product != null){
  dataCust = JSON.parse(localStorage.product)
} else{
  dataCust = [];
}


Submit.onclick = function(){
  let newCust = {
    Name:Name.value,
    Email:Email.value,
    Salary:Salary.value,
    City:City.value,
  }
 if(mood === 'create'){
dataCust.push(newCust);
 }else{
  dataCust[tmp] = newCust;
  mood = 'create';
  Submit.innerHTML = 'Submit';
 }
 
  //save localstorage
  localStorage.setItem('product', JSON.stringify(dataCust) )
  
  clearData();
  showData();
}

//clear inputs
function clearData(){
Name.value = '';
Email.value = '';
Salary.value = '';
City.value = '';
}

//read
function showData(){
  let table = '';
for(let i = 0; i < dataCust.length;i++){
  table += `
  <tr>
        <td>${dataCust[i].Name}</td>
        <td>${dataCust[i].Email}</td>
        <td>${dataCust[i].Salary}</td>
        <td>${dataCust[i].City}</td>
        <td><button onclick="updateData(${i})" id="update"><i class="fa-solid fa-pen-to-square"></i></button><button onclick="deleteData( ${i} )" id='delete'><i class="fa-solid fa-trash-can" style="color: red;"></i></button></td>
       </tr>
       `

}

  document.getElementById('tbody').innerHTML = table;
}
showData()

//delete
function deleteData(i)
{
    dataCust.splice(i,1);
    localStorage.product = JSON.stringify(dataCust);
    showData()
}
let result = confirm('Are you sure to delete this record ?')
console.log(result);
//update
function updateData(i){
  Name.value = dataCust[i].Name;
  Email.value = dataCust[i].Email;
  Salary.value = dataCust[i].Salary;
  City.value = dataCust[i].City;
  
  Submit.innerHTML = 'Update';
  mood = 'Update';
  tmp = i;
  scroll({
    top:0,
    behavior:'smooth',
  })
} 