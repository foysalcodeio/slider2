let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');


let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function(){
    itemActive = itemActive + 1
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

//auto run slider
let refreshInterval = setInterval(()=>{
    next.click();
}, 5000)

function showSlider(){
    let itemActionOld = document.querySelector('.slider .list .item.active');
    let thumbnailActionOld = document.querySelector('.thumbnail .item.active');

    itemActionOld.classList.remove('active')
    thumbnailActionOld.classList.remove('active')

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');


    //auto slider
    clearInterval(refreshInterval)
    refreshInterval = setInterval(()=>{
        next.click();
    }, 5000)


    //click thumbnail
    thumbnails.forEach((thumbnails, index) => {
        thumbnails.addEventListener('click', ()=>{
            itemActive = index;
            showSlider();
        })
    })

}