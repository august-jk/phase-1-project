const handleFetch = (url, cb) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': 'b3d3fc8f-7cbd-4221-a42f-b7aebd2f1c21'
    }
    })
    .then(resp => resp.json())
    .then(cb)
}
const getCats = () => {
    const allCatsUrl = 'https://api.thecatapi.com/v1/images/search?limit=15'
    handleFetch(allCatsUrl, (cat) => {cat.map(createCard)})
}

const filterCatsUrl = 'https://api.thecatapi.com/v1/breeds'
let cardsContainer = document.querySelector('#cards-container')
const createFilter = () => {
    const filter = document.querySelector('select');
   handleFetch(filterCatsUrl, (breed) => {
        breed.map((breed) => {
            let option = document.createElement('option');
            option.value = breed.id;
            option.textContent = `${breed.name}`
            filter.appendChild(option)
            })
            filter.addEventListener('change', (e) => {
                let id = e.target.value;
                let container = document.querySelector('#filter-container');
                container.innerHTML = ''
                cardsContainer.innerHTML = ''
                breed.find((breed) => {
                    if(id === breed.id){ 
                        let specificBreed = document.createElement('div')
                        specificBreed.innerHTML = `
                        <h2>${breed.name}</h2>
                        <img src='${breed.image.url}' id='specific-cat-image'/>
                        <p>${breed.description}</p>
                        <a href='${breed.wikipedia_url}'>Source</a>
                        `
                        specificBreed.id = 'specific-breed'
                        container.appendChild(specificBreed)

                    } 
                })
                if( id === 'no-filter'){
                    getCats()
                } 
                document.querySelector('form').reset()
            })
        })
   }

const createCard = (cat) => {
   let card = document.createElement('div');
   card.className = 'card'
   cat.likes = 0;
   card.innerHTML = `
   <img src='${cat.url}'/>
   <div class='likes'>
        <button class="like-btn"> ♥ </button><p> ${cat.likes} Likes</p>
   </div>
   <div class='comments-section'>
        <h3>Comments:<h3>
        <p class='comments'> </p>
        </div>
        <div class='comment-box'>
        <form>
            <input type="text" placeholder='comment'></input>
            <input type="submit"></input>
        </form>
    </div>
   `
   cardsContainer.appendChild(card)

   let likeBtn = card.querySelector('button');
   likeBtn.addEventListener('click', () => {
       cat.likes += 1;
       card.querySelector('p').textContent = `${cat.likes} Likes`
   })
   let form = card.querySelector('form')
   form.addEventListener('submit', (e) => {
       e.preventDefault();
       let comments = card.querySelector('.comments');
       let ul = document.createElement('ul');
       let li = document.createElement('li');
       li.textContent = card.querySelector('input').value;
       ul.append(li);
       comments.append(ul);
       form.reset()
    })
    
}

getCats()
createFilter()