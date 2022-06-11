document.addEventListener('DOMContentLoaded', () => {
    getCats();


} )
const getCats = () => {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
    fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': 'b3d3fc8f-7cbd-4221-a42f-b7aebd2f1c21'
    }
    })
    .then(resp => resp.json())
    .then(createCard)
}
const createCard = (array) => {
    array.forEach( cat => {
        const card = document.createElement('div');
        card.className = 'card';
        const cardContainer = document.querySelector('#cards');
        cardContainer.appendChild(card);
        card.innerHTML = `
            <img src='${cat.url}' class='cat-img'/>
            <div class="container">
                <p>${cat.likes} Likes</p>
                <button class="like-btn">♡</button>
                <form action="submit" class="comment">
                    <input type="text" placeholder='comment'></input>
                    <input type="submit"></input>
                </form>
            </div>
             ` 
        const likeBtn = card.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            cat.likes += 1;
            card.querySelector('p').textContent = `${cat.likes} Likes`
            updateLikes(cat)
    });
    })
}