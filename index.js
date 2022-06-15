document.addEventListener('DOMContentLoaded', () => {
    getCats();
    

} )
const getCats = () => {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=15'
    fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': 'b3d3fc8f-7cbd-4221-a42f-b7aebd2f1c21'
    }
    })
    .then(resp => resp.json())
    .then(cat => cat.map(createCard))
}
const createCard = (cat) => {
   let div = document.createElement('div');
   div.className = 'card'
   let cardsContainer = document.querySelector('#cards-container');
   cat.likes = 0;
   div.innerHTML = `
   <img src='${cat.url}'/>
   <div class='likes'>
        <button class="like-btn"> ♥ </button><p> ${cat.likes} Likes</p>
   </div>
   <div class='comments'>
        <h4>Comments:<h4>
        <p></p>
        </div>
        <div class='comment-box'>
        <form>
            <input type="text" placeholder='comment'></input>
            <input type="submit"></input>
        </form>
    </div>
   `



   cardsContainer.appendChild(div)
    
}
