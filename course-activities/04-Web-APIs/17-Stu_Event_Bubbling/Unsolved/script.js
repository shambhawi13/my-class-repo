var imgArray = [
    'https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg',
    'https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg',
    'https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg'
];

var imgEl = document.getElementById('img');

var currentImgIndex = 0;
var nextEl = document.getElementsByClassName('next');
var previousEl = document.getElementsByClassName('prev');

nextEl[0].addEventListener('click',function(event){
    event.stopPropagation();
    if(currentImgIndex < imgArray.length-1){
        currentImgIndex++;
    }
    else{
        currentImgIndex = 1;
    }
    
    imgEl.setAttribute('src',imgArray[currentImgIndex]);

});

previousEl[0].addEventListener('click',function(event){
    event.stopPropagation();
    if(currentImgIndex < 1){
        currentImgIndex = imgArray.length-1;
    }
    else{
        currentImgIndex--;
    }
    
    imgEl.setAttribute('src',imgArray[currentImgIndex]);

});


imgEl.addEventListener('click',function(event){
    
})