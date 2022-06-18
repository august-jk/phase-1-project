Hello and welcome to CatSpace!

This is an application that allows you to see a large variety of cat pictures and gifs, like your favorites, and even comment on them!

Each picture is inside a card (div) that is a container for the image, like button, and comment section.

For each card I sent a GET request to https://thecatapi.com/, (a free API server that has an abundance of cat pictures and gifs) once the fetch is completed, I used .map() on the array of data received and created the individual cards which include the like button and comment section as well as the picture or gif.

You have the ability to like and comment on each card with the card updating immediately!

This will show you the amount of likes you've added to each card and any comments you've added as well.

Unfortunately I did not set up a PUSH request to update the API, so the liking and commenting functionality is superficial, but that doesn't mean it's any less fun!

Lastly, you'll have the ability to look up some information on your favorite breeds!
Each time you select a breed from the drop down list, the page will pull up that specific breed, it's picture, and a little description provided by wikipedia!

As for the code; I added 3 event listeners. 

We have the click event listener, which handles the like function. Once you click on any of the like buttons your likes will be automatically shown on the screen underneath the corrosponding picture!

Next we have the submit event listener. This event listener is handling the comment function. Whenever you want to leave a nice message on any of your favorite posts, you can type one up and see it pop up inside the comment section!

Lastly we have the change event listener. The change even listener is waiting for you to select a specific cat breed you would like to know more about.
Once you select a cat breed, the page will automatically load a little excerpt about that breed! 
You should see the breed name, a picture, and a short description provided by wikipedia (with the source below the description).

That's about it! 

I hope you enjoy your time on CatSpace!
