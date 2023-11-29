let c=0;
let d=0;
let img=document.querySelector("img");
let imgName=document.querySelector("#image > p");
let imgAbout=document.querySelector(".details > p");


document.querySelector("#cat").addEventListener("click",function(){
   
        setAllDetails("cat.jpg","Cat",
        "The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact."
        );
        
    
});

document.querySelector("#dog").addEventListener("click",function(){

        setAllDetails("dog.jpg","Dog",
        "Dog, (Canis lupus familiaris), domestic mammal of the family Canidae (order Carnivora). It is a subspecies of the gray wolf (Canis lupus) and is related to foxes and jackals. The dog is one of the two most ubiquitous and most popular domestic animals in the world (the cat is the other). For more than 12,000 years it has lived with humans as a hunting companion, protector, object of scorn or adoration, and friend."
        );
    
});

function setAllDetails(imgContent,imgTitle,imgDetails){
    img.src=imgContent;
    imgName.textContent=imgTitle;
    imgAbout.textContent=imgDetails;
}