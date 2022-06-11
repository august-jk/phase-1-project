document.addEventListener('DOMContentLoaded', () => {
    getCats();


} )
const getCats = () => {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=100'
    fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': 'b3d3fc8f-7cbd-4221-a42f-b7aebd2f1c21'
    }
    })
    .then(resp => resp.json())
    .then((array, cat) => array.foreach(console.log(cat)))
}