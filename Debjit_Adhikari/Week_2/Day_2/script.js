document.querySelector("button").addEventListener("click",pressed);
function pressed(){
    let ans=document.querySelector("#length").value*document.querySelector("#width").value;
    document.querySelector("span").textContent=ans;
}