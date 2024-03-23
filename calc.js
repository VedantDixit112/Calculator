let btn=document.querySelectorAll("button");
let val="";
let val1=0;
let ip=document.querySelector(".input");
for(l of btn){
    l.addEventListener("click",function(){
        if(this.innerText=="AC"){
            ip.innerText="";
            val="";
        }
        else if(this.innerText=="="){
            calculate(ip.innerText);  
        }
        else{
            val+=this.innerText;
            ip.innerText=val;
        }
    })
}
function calculate(str1){
    let val1=eval(str1);
    ip.innerText=val1;
}



