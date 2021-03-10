const gallery_arr = [
    {
        name: "The queen's gambit",
        img:"pic1.jpg"
    },
    {
        name: "citizen kane",
        img:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg"
    },
    {
        name: "Casablanca",
        img:"https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY1200_CR83,0,630,1200_AL_.jpg"
    },
    {
        name: "Gone with the wind",
        img:"https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        name: "la la land",
        img:"https://www.goldenglobes.com/sites/default/files/articles/cover_images/2017-la_la_land.jpg"
    },
    {
        name: "A simple favor",
        img:"https://target.scene7.com/is/image/Target/GUEST_8269c9e2-c821-43c7-98fe-3abc340f0019?wid=488&hei=488&fmt=pjpeg"
    },
    {
        name:"Midnight in paris",
        img:"https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_.jpg"
    }

]

const img = document.getElementById("index-movie");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current = 0;
window.addEventListener("DOMContentLoaded",function(){
    let item = gallery_arr[current];
    img.src = item.img;
})

function show(picture){
    let item = gallery_arr[picture];
    img.src = item.img;
}

nextBtn.addEventListener("click",function(){
    current++;
    if(current>gallery_arr.length-1){
        current = 0;
    }
    show(current);
})

prevBtn.addEventListener("click",function(){
    current--;
    if(current<0){
        current = gallery_arr.length-1;
    }
    show(current);
})