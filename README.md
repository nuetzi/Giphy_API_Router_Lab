## Giphy API Router Lab

So far we have set up a project with 1 route - Home

Home.jsx makes an API call to get a random gif and displays it on the page.
For this assignment you will continue to add to what we started today.

1. On the Home page, make it so you can click a button to get a new random gif 
2. Set up a new Route to a Trending.jsx component
    * add a new function to getRequests.js that fetches data from the giphy trending endpoint - see giphy docs: https://developers.giphy.com/docs/api/endpoint#trending (Links to an external site.) 
    * use this new function in Trending.jsx to get back an array of trending gifs 
    * use .map on the array to render each gif on the Trending page
3. (Optional) Use the giphy search endpoint in a new component with its own route that allows the user to type in a search term that you use in the search endpoint 