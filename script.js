document.addEventListener("DOMContentLoaded",async () => {
    await load_data();
});

async function load_data(){
    const request = await fetch("/list.php");
    const survivors = await request.json();

    document.getElementById("survivor").innerHTML=``;

    for(const survivor of Object.keys(survivors)){
        var survivordata = survivors[survivor]
        document.getElementById("survivor").innerHTML+=`<img src="${survivordata.img}">`;
        document.getElementById("survivor").innerHTML+=`<p class="text" >Name : ${survivordata.name} <br> Skills : ${survivordata.skills} <br> DLC : ${survivordata.dlc} </p> `;
        //document.getElementById("survivor").innerHTML+=`Skills : ${survivordata.skills}`;
        //document.getElementById("survivor").innerHTML+=`DLC : ${survivordata.dlc}`;
    }
}


async function addsurvivor(){
    const name = document.getElementById("add_name").value;
    const skills = document.getElementById("add_skills").value;
    const dlc = document.getElementById("add_dlc").value;
    const img = document.getElementById("add_img").value; 

    const survivor = {
        "name": name, "skills": skills, "dlc": dlc, "img": img 
    };

        await fetch('/add.php', {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(survivor)
        });
        await load_data();
    //const request = await fetch("/add.php");

}

async function delsurvivor(){
    const name = document.getElementById("del_name").value;
        await fetch('/delete.php', {
            method : "DELETE",
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(name)
        });
        await load_data();
    //const request = await fetch("/add.php");

}

async function upsurvivor(){
    const name = document.getElementById("up_name").value;
    const skills = document.getElementById("up_skills").value;
    const dlc = document.getElementById("up_dlc").value;
    const img = document.getElementById("up_img").value; 

    const survivor = {
        "name": name, "skills": skills, "dlc": dlc, "img": img 
    };

        await fetch('/edit.php', {
            method : "PUT",
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(survivor)
        });
        await load_data();
    //const request = await fetch("/add.php");

}
