

function fetchUsers() {

  

apiURl=`https://masai-1d83f-default-rtdb.firebaseio.com/Mydata.json`

    fetch(apiURl,{
        method: "GET",
    })
    .then(res => res.json())
    .then(data => displayUsers(data))
    .catch(err => console.log(err));
}

fetchUsers();

function displayUsers(data) {
    document.querySelector("#container").innerHTML = "";

    const users = Object.entries(data);

    users.forEach(function (ele) {
let id =ele[0]
        let { company_name, salary } = ele[1];

        document.querySelector("#container").innerHTML += `
            <div class="card">
                <div id="innerdiv">
                    <h2> ${id}</h2>
                </div>
                <h3>salary: ${salary}</h3>
                <button id="delete-btn" onclick="deletebtn('${id}')">delete</button>
                 <button id="edit-btn" onclick="editbtn('${id}')">edit</button>
            </div>
        `;
    });
}

function deletebtn(id) {
        fetch(`https://masai-1d83f-default-rtdb.firebaseio.com/Mydata/${id}.json`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => {
            fetchUsers()
            window.location.reload()
        })
}


function editbtn(id){
    console.log(id)
    window.location.href = `edit.html?id=${id}`;
}

function previouspage(){
    console.log("red")
}

function nextpage(){
    console.log("blue")
}