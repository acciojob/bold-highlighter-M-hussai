let show=document.getElementById("ans")

function highlight() {
    //Write your code here


	let pap=document.querySelectorAll("strong")
    pap.forEach((item)=>{
        item.setAttribute("style","color:green;")
    })

}


function return_normal() {
    //Write your code here

	let pap=document.querySelectorAll(".one")
    pap.forEach((item)=>{
        item.setAttribute("style","color:black;")
    })

    
}

