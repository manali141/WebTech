//On page load rendering card using JavaScript Array of Objects.
//Array object for card
const cardElement = [
    {
        title:'Web Technology',
        description:'User-friendly websites using HTML, CSS, and powerful frameworks.',
        imgUrl:'https://miro.medium.com/v2/resize:fit:1200/1*OaRU6kTgtm_shISCLb0fkQ.jpeg',
        altText:'Web Technologies. What is Web Technology? Web technology'
     },
    {
        title:'React',
        description:'React is a JavaScript library used to build fast and interactive user interfaces using reusable components.',
        imgUrl:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        altText:'React.js Community ' 
    },
    {
        title:'Angular',
        description:'Angular is a powerful framework for building dynamic, single-page applications with TypeScript.',
        imgUrl:'https://angular.io/assets/images/logos/angular/angular.png',
        altText:'React.js Community '
    },
    {
        title:'Javascript',
        description:'JavaScript brings websites to life by adding interactivity and dynamic behavior.',
        imgUrl:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        altText:'Vector icon of orange javascript shield, isolated simple flat il'
    }
]
console.log(cardElement);
let webCards ="";
cardElement.map((data) => {
 webCards += `<div class="category-card">
          <div class="category-image">
            <img alt="${data.altText}" src="${data.imgUrl}">
          </div>
          <div class="category-content">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
          </div>
          <div class="category-footer">
            <button>View Project</button>
          </div>
     </div>`;
})



document.querySelector(".categories").innerHTML =webCards;