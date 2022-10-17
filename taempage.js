const article = document.querySelector(".all");
const rightbutton1 = article.querySelector(".firstRight");
const rightbutton2 = article.querySelector(".secondRight");
const rightbutton3 = article.querySelector(".thirdRight");
const leftbutton1 = article.querySelector(".firstLeft");
const leftbutton2 = article.querySelector(".secondLeft");
const leftbutton3 = article.querySelector(".thirdLeft");


const article_1 = document.querySelector(".profile_1");
const article_2 = document.querySelector(".profile_2");
const article_3 = document.querySelector(".profile_3");



const first = () =>{
    article_2.style.display = "none";
    article_3.style.display = "none";

    article_1.style.display = "flex";
};

const second = () =>{
    article_1.style.display = "none";
    article_3.style.display = "none";

    article_2.style.display = "flex";
};

const third = () =>{
    article_2.style.display = "none";
    article_1.style.display = "none";

    article_3.style.display = "flex";
};



rightbutton1.addEventListener("click",second);
rightbutton2.addEventListener("click",third);
rightbutton3.addEventListener("click",first);

leftbutton1.addEventListener("click",third);
leftbutton2.addEventListener("click",first);
leftbutton3.addEventListener("click",second);





