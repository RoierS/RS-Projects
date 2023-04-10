//Burger menu

const burgerMenu = document.querySelector('.menu__burger');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__list-link');
const overlay = document.querySelector('.menu__burger-overlay');

function toggleBurger() {
    if (burgerMenu.classList.contains('open')) {
        document.body.classList.remove('noscroll');
        burgerMenu.classList.remove('open');
        navMenu.classList.remove('open');
        overlay.style.display = 'none';
    } else {
        document.body.classList.toggle('noscroll');
        burgerMenu.classList.toggle('open');
        navMenu.classList.toggle('open');
        overlay.style.display = 'block';
    }
}

burgerMenu.addEventListener('click', toggleBurger);
overlay.addEventListener('click', toggleBurger);
navLinks.forEach(navLink => navLink.addEventListener('click', toggleBurger));


// Slider 

const btnNext = document.querySelector('.next-slide');
const btnPrev = document.querySelector('.prev-slide');

const carousel = document.querySelector('.friends__carousel');
const rightBlock = document.querySelector('.friends__slider.right');
const leftBlock = document.querySelector('.friends__slider.left');
const activeBlock = document.querySelector('.friends__slider.active');

const getNumberOfCards = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
        return 3;
    } else if (screenWidth >= 768) {
        return 2;
    } else {
        return 1;
    }
};

let currentPets = [];
let previousPets = [];

const generateNewPets = () => {
    const avaliablePets = pets.filter(pet => !currentPets.includes(pet) && !previousPets.
    includes(pet));
    const numberOfCards = getNumberOfCards();
    const newPets = [];

    for (let i = 0; i < numberOfCards; i++) {
        const randomIndex = Math.floor(Math.random() * avaliablePets.length);
        newPets.push(avaliablePets[randomIndex]);
        avaliablePets.splice(randomIndex, 1);
    }
    return newPets;
}

const createBlockTemplate = () => {
    const item = document.createElement('div');
    item.classList.add('slider__item');
    return item;
}

// next slide
const moveRight = () => {
    carousel.classList.add('transition-right');
    btnNext.removeEventListener('click', moveRight);
    btnPrev.removeEventListener('click', moveLeft);
}

// prev slide
const moveLeft = () => {
    carousel.classList.add('transition-left');
    btnPrev.removeEventListener('click', moveLeft);
    btnNext.removeEventListener('click', moveRight);
}

btnPrev.addEventListener('click', moveLeft);
btnNext.addEventListener('click', moveRight);

carousel.addEventListener('animationend', (animationDirection) => {
    let changedBlock;
    if (animationDirection.animationName === 'move-right') {
        carousel.classList.remove('transition-right');
        changedBlock = rightBlock;
        previousPets = currentPets;
        currentPets = generateNewPets();
        activeBlock.innerHTML = rightBlock.innerHTML;
    } else {
        carousel.classList.remove('transition-left');
        changedBlock = leftBlock;
        previousPets = currentPets;
        currentPets = generateNewPets();
        activeBlock.innerHTML = leftBlock.innerHTML;
    }

    changedBlock.innerHTML = '';
    for (let i = 0; i < 3; i++) {

        const item = createBlockTemplate();

        changedBlock.appendChild(item);
        item.innerHTML = `
        <div class="slider__item-img">
            <img class="item__image" src="${currentPets[i].img}" alt="${currentPets[i].name}">
        </div>
        <div class="slider__item-name">${currentPets[i].name}</div>
        <button class="learn-more__button">Learn more</button>
        `;
    }

    btnNext.addEventListener('click', moveRight);
    btnPrev.addEventListener('click', moveLeft);
})


const pets = [
        {
          "name": "Jennifer",
          "img": "../../assets/images/jennifer.png",
          "type": "Dog",
          "breed": "Labrador",
          "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
          "age": "2 months",
          "inoculations": ["none"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Sophia",
          "img": "../../assets/images/sophia.png",
          "type": "Dog",
          "breed": "Shih tzu",
          "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
          "age": "1 month",
          "inoculations": ["parvovirus"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Woody",
          "img": "../../assets/images/woody.png",
          "type": "Dog",
          "breed": "Golden Retriever",
          "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
          "age": "3 years 6 months",
          "inoculations": ["adenovirus", "distemper"],
          "diseases": ["right back leg mobility reduced"],
          "parasites": ["none"]
        },
        {
          "name": "Scarlett",
          "img": "../../assets/images/scarlett.png",
          "type": "Dog",
          "breed": "Jack Russell Terrier",
          "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
          "age": "3 months",
          "inoculations": ["parainfluenza"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Katrine",
          "img": "../../assets/images/katrine.png",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
          "age": "6 months",
          "inoculations": ["panleukopenia"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Timmy",
          "img": "../../assets/images/timmy.png",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
          "age": "2 years 3 months",
          "inoculations": ["calicivirus", "viral rhinotracheitis"],
          "diseases": ["kidney stones"],
          "parasites": ["none"]
        },
        {
          "name": "Freddie",
          "img": "../../assets/images/freddie.png",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
          "age": "2 months",
          "inoculations": ["rabies"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Charly",
          "img": "../../assets/images/charly.png",
          "type": "Dog",
          "breed": "Jack Russell Terrier",
          "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
          "age": "8 years",
          "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
          "diseases": ["deafness", "blindness"],
          "parasites": ["lice", "fleas"]
        }
      ];
    
