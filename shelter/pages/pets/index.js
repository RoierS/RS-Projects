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


// pagination


// {/* <div class="slider__item">
//     <div class="slider__item-img">
//         <img class="item__image" src="../../assets/images/katrine.png" alt="Katrine">
//     </div>
//     <div class="slider__item-name">Katrine</div>
//     <button class="learn-more__button">Learn more</button>
// </div> */}


fetch('../../pages/json/pets.json')
    .then((resolve) => resolve.json())
    .then((petsJson) => {
        const friendsGrid = document.querySelector('.friends__grid');
        const nextBtn = document.querySelector('.next-slide');
        const prevBtn = document.querySelector('.prev-slide');
        const firstBtn = document.querySelector('.start-slide');
        const lastBtn = document.querySelector('.end-slide');
        const pageNrBtn = document.querySelector('.current-slide');
        

        const arrPets = new Set();
        const COUNT_PETS = 48;
        const PET_CARDS_PER_PAGE = {
            desktop: 8,
            tablet: 6,
            mobile: 3
        }

        let currentPage = 1;
        let lastPage;

        const getPageSize = () => {
            if(window.innerWidth < 768) pageSize = 'mobile';
            else if (window.innerWidth < 1280) pageSize = 'tablet';
            else pageSize = 'desktop';
        }

        getPageSize();

        const generateNewPets = () => {
            const randomPetIndexes =  Array.from({length: COUNT_PETS}, () => Math.floor(Math.random() * petsJson.length));
            for (const index of randomPetIndexes) {
                arrPets.add(index);
                // console.log(arrPets)
            }
        }
        generateNewPets();
        // console.log(generateNewPets())

        const showPetsPage = () => {
            if (pageSize === 'desktop') {
                lastPage = Math.ceil(COUNT_PETS / 8);
            } else if (pageSize === 'tablet') {
                lastPage = Math.ceil(COUNT_PETS / 6);
            } else  {
                lastPage = Math.ceil(COUNT_PETS / 3);
            }

            const startIndex = (currentPage - 1) * (pageSize === 'desktop' ? 8 : pageSize === 'tablet' ? 6 : 3);
            const endIndex = startIndex + (pageSize === 'desktop' ? 8 : pageSize === 'tablet' ? 6 : 3);

            for (let i = startIndex; i < endIndex; i++) {
                if (arrPets.has(i)) {
                    const pet = petsJson[i];
                    const petCard = document.createElement('div');
                    petCard.classList.add('slider__item');
                    petCard.setAttribute('data-petnr', `${petsJson.indexOf(pet) + 1}`);
                    petCard.innerHTML = `
                        <div class="slider__item-img" data-petnr="${petsJson.indexOf(pet) + 1}">
                            <img class="item__image" src="../../assets/images/${pet.name}.png" alt="${pet.name}" data-petnr="${petsJson.indexOf(pet) + 1}">
                        </div>
                        <div class="slider__item-name" data-petnr="${petsJson.indexOf(pet) + 1}">${pet.name}</div>
                        <button class="learn-more__button">Learn more</button>
                    `;
                    friendsGrid.appendChild(petCard);
                    // console.log(pet)
                }
            }
            friendsGrid.addEventListener('click', (e) => {
                if (e.target.classList.contains('slider__item') 
                || e.target.parentNode.classList.contains('slider__item') 
                || e.target.parentNode.classList.contains('slider__item-img')) {
                    // const targetPet = e.target.parentNode.getAttribute('data-petnr');
                    // console.log(e.target)
                    const targetPet = e.target.closest('div').dataset.petnr;
        
                    const currentPet = petsJson.find((pet) => {
                        return pet.id === targetPet;
                    });
                    console.log(currentPet);
    
                            
                    popup = document.createElement('div');
                    popup.classList.add('popup__wrapper');
                    popup.classList.add('popup__wrapper-open');
                    document.body.classList.add('noscroll');
                    
                    const body = document.querySelector('body');
                    body.appendChild(popup);
                    popup.innerHTML = `
                        <div class="popup__overlay">
                            <div class="popup__window">
                                <div class="popup__img">
                                    <img src="../../assets/images/${currentPet.name}.png" alt="${currentPet.name}">
                                </div>
                                <div class="popup__content">
                                    <div class="popup__title">${currentPet.name}</div>
                                    <div class="popup__subtitle">${currentPet.type} - ${currentPet.breed}</div>
                                    <p class="popup__text">${currentPet.description}</p>
                                    <ul class="popup__list">
                                        <li class="popup__item">Age: <span class="popup__age">${currentPet.age}</span></li>
                                        <li class="popup__item">Inoculations: <span class="popup__inoculations">${currentPet.inoculations.join(', ')}</span></li>
                                        <li class="popup__item">Diseases: <span class="popup__diseases">${currentPet.diseases.join(', ')}</span></li>
                                        <li class="popup__item">Parasites: <span class="popup__parasites">${currentPet.parasites.join(', ')}</span></li>
                                    </ul>
                                </div>
                                <button class="popup__close"><img src="../../assets/icons/close.svg" alt="close"></button>
                            </div>
                        </div>
                    `; 
                
                popup.addEventListener('click', (e) => {
                    if (e.target.classList.contains('popup__close') || e.target.classList.contains('popup__overlay') || e.target.parentNode.classList.contains('popup__close')) {
                        console.log(e.target)
                        document.body.classList.remove('noscroll');
                        popup.style.visibility = 'hidden';
                        popup.style.opacity = '0';
                        popup.classList.remove('popup__wrapper-open');
                        // popup.classList.remove('popup__wrapper');
                        setTimeout(() => {
                            popup.remove();
                        }, 500)
                    }
                })
                }
            })
        }
        showPetsPage();


        nextBtn.addEventListener('click', () => {
            currentPage++;
            pageNrBtn.textContent = currentPage;
            friendsGrid.remove(friendsGrid.firstChild);
            showPetsPage();

        })


        




        // console.log(petsJson)
    //     const currentPet = petsJson.find(el => el.name === e.target.closest('div').dataset.name);
    //     console.log(currentPet)
    
     })
