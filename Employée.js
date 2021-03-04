function Employee(){
    let p =localStorage.getItem("Employee") || [];
    let z=JSON.parse(p)
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mail = document.getElementById("mailE").value;
    let adres = document.getElementById("Eaddress").value;
    let id =Math.floor(Math.random()* 100);
    let Employee={id:id,fname:fname,lname:lname,email:mail,address:adres}
    z.push(Employee);
    localStorage.setItem("Employee",JSON.stringify(z));
    window.location.reload();
}
function affichage(){
    let p =localStorage.getItem("Employee") || [];
    let z=JSON.parse(p)
    let hello=``;
    let i=1;
    z.forEach(x => {
        hello += `<tr>
        <th scope="row">${i}</th>
        <td>${x.fname}</td>
        <td>${x.lname}</td>
        <td>${x.address}</td>
        <td>${x.email}</td>
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
            <h1 style="text-align: center;">Employée</h1>
            <div class="card-body">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="text" class="form-control" id="fname1" placeholder="First name">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="text" class="form-control" id="lname1" placeholder="Last name">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="text" class="form-control" id="mailE1" placeholder="E-mail">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="text" class="form-control" id="Eaddress1" placeholder="address">
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
    let p =localStorage.getItem("Employee") || [];
    let z=JSON.parse(p)
    console.log(x);
    z.splice(x-1,1);
    console.log(z);
    localStorage.setItem("Employee",JSON.stringify(z));
    affichage()
}
let id;
function updateitem(a) {
    let p =localStorage.getItem("Employee") || [];
    let z=JSON.parse(p)
    // console.log(a);
    // console.log(z);
   let update= z.find(x =>x.id ==a);
   document.getElementById("fname1").value=update.fname;
   document.getElementById("lname1").value=update.lname;
   document.getElementById("mailE1").value=update.email;
   document.getElementById("Eaddress1").value=update.address
   console.log(update);
   id=a;
   console.log(id);
}
function save(){
    let p =localStorage.getItem("Employee") || [];
    let z=JSON.parse(p)
    console.log(id);
    let update= z.find(x =>x.id == id );
    update.fname = document.getElementById("fname1").value;
    update.lname = document.getElementById("lname1").value;
    update.email = document.getElementById("mailE1").value;
    update.address = document.getElementById("Eaddress1").value;
    console.log(update.fname);
    // console.log(update.discrip);
    console.log(update);
    // z.splice(b-1,b);
    // z.splice(b-1,0,update);
    console.log(z);
    localStorage.setItem("Employee",JSON.stringify(z));
    window.location.reload()
}