let imageContainer = document.querySelector(`.image-container`);


for(let i = 1; i <= 5; i++) {
    imageContainer.innerHTML += `
    <img class="image" src="assets/${i}.png">
     `;
    
     

    
}

let images = document.querySelectorAll(`.image`); 
let orange = document.querySelector(`.form-range`);


for(let i = 0; i < images.length; i++) {
    let image = images[i];
    if(i != 0) {
        image.classList.add(`d-none`);
    }
}


orange.addEventListener(`input`, function() {
    
   
    
    

     
      if(orange.value == `1`) {
      imageContainer.innerHTML = `<img class="image" src="assets/1.png" alt="">`;
    } else if(orange.value == `2`) {
        imageContainer.innerHTML = `<img class="image" src="assets/2.png" alt="">`;
    } else if(orange.value == `3`) {
        imageContainer.innerHTML = `<img class="image" src="assets/3.png" alt="">`;
    } else if(orange.value == `4`) {
        imageContainer.innerHTML = `<img class="image" src="assets/4.png" alt="">`;
    } else if(orange.value == `5`) {
        imageContainer.innerHTML = `<img class="image" src="assets/5.png" alt="">`;
    }

    
 
});