function Societe(){
    let p =localStorage.getItem("Company") || [];
    let z=JSON.parse(p)
    let name = document.getElementById("name").value;
    let adres = document.getElementById("Saddress").value;
    let mail = document.getElementById("mailS").value;
    let id=Math.floor(Math.random()* 100);
    let Company={id:id,name:name,address:adres,email:mail,Employees:[]}
    z.push(Company);
    localStorage.setItem("Company",JSON.stringify(z));
    window.location.reload();
}
function affichage(){
    let p =localStorage.getItem("Company") || [];
    let z=JSON.parse(p)
    let hello=``;
    let i=1;
    z.forEach(x => {
        hello += `<tr>
        <th scope="row">${i}</th>
        <td>${x.name}</td>
        <td>${x.address}</td>
        <td>${x.email}</td>
        <td>${x.Employees}</td>
        <td><button onclick="updateitem(${x.id})" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button></td>
        <td><button onclick="deleteitem(${i})" class="btn btn-danger btn-lg">Delete</button></td>
        </tr>
           
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="card" style="width: 100%; margin: auto; background-color: grey;">
            <h1 style="text-align: center;">Société</h1>
            <div class="card-body">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="text" class="form-control" id="name1" placeholder="Company Name">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="text" class="form-control" id="Saddress1" placeholder="address">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="email" class="form-control" id="mailS1" placeholder="E-mail">
                </div>
            </div>
        </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onclick="save()">Save changes</button>
            </div>
          </div>
        </div>
    </div>`

        i++;
    });
    document.getElementById("body").innerHTML= hello    
}
function deleteitem(x){
    let p =localStorage.getItem("Company") || [];
    let z=JSON.parse(p)
    console.log(x);
    z.splice(x-1,1);
    console.log(z);
    localStorage.setItem("Company",JSON.stringify(z));
    affichage()
}
let id;
function updateitem(a) {
    let p =localStorage.getItem("Company") || [];
    let z=JSON.parse(p)
    // console.log(z);
   let update= z.find(x =>x.id ==a);
   document.getElementById("name1").value=update.name
   document.getElementById("Saddress1").value=update.address;
   document.getElementById("mailS1").value=update.email;
   console.log(update);
   id=a;
}
function save(){
    let p =localStorage.getItem("Company") || [];
    let z=JSON.parse(p)
    console.log(id);
    let update= z.find(x =>x.id == id );
     update.name = document.getElementById("name1").value;
     update.address = document.getElementById("Saddress1").value;
     update.email = document.getElementById("mailS1").value;
    // console.log(update.name);
    // console.log(update.discrip);
    console.log(update);
    // z.splice(b-1,b);
    // z.splice(b-1,0,update);
    console.log(z);
    localStorage.setItem("Company",JSON.stringify(z));
    window.location.reload()
}