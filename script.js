// Array to store tweets
let tweets = [];

// Function to display tweets
function displayTweets() {
    const tweetContainer = document.getElementById('tweet-container');
    tweetContainer.innerHTML = '';

    tweets.forEach(tweet => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');
        tweetDiv.textContent = tweet;
        tweetContainer.appendChild(tweetDiv);
    });
}

// Function to add a new tweet
function addTweet() {
    const tweetText = document.getElementById('tweet-text').value;
    if (tweetText.trim() !== '') {
        tweets.push(tweetText);
        displayTweets();
        document.getElementById('tweet-text').value = '';
    }
}

// Event listener for tweet button
document.getElementById('tweet-button').addEventListener('click', addTweet);
