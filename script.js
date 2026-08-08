let show=document.getElementById("ans")

function highlight() {
    //Write your code here


	let pap=document.querySelectorAll("strong")
    pap.forEach((item)=>{
        item.setAttribute("style","color:rgb(0, 128, 0);")
    })

}


function return_normal() {
    //Write your code here

	let pap=document.querySelectorAll("strong")
    pap.forEach((item)=>{
        item.setAttribute("style","color:rgb(0, 0, 0);")
    })

    
}

