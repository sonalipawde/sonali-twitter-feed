/**
 * Hello candidate, this is the index file which lands to the solution of your problem.
 * As you can see a rudimentry code has been implemented to load the feeds.
 * You have several API options available at your disposal to achieve your task.
 * They are documented below.
 */
import { fetchTweetsAfterId } from "./api";
import { Entry } from "./api/persistent-database";
import "./styles.css";

const app = document.getElementById("app")!;

let allTweets: Entry[] = [];
let displayedTweetIds = new Set<number>(); // tweet IDs
let interval: number;
let timeout: number;
let afterId = 0;

async function fetchApi() {
  try {
    const fetchTweets = await fetchTweetsAfterId({ afterId, count: 10 });

    //no duplicate IDs
    const uniqueTweets = fetchTweets.filter(
      (tweet) => !displayedTweetIds.has(tweet.id)
    );

    afterId = fetchTweets[0].id; //after this 0th id start fetching

    // Add new ids to the displayedTweetIds set
    uniqueTweets.forEach((tweet) => {
      displayedTweetIds.add(tweet.id);
    });

    allTweets = [...allTweets, ...uniqueTweets];

    let html = "";

    allTweets.sort((a, b) => { // latest tweet at the top by sorting
      return b.id - a.id;
    });

    allTweets.forEach((tweet) => {
      html += `
          <div class="tweet">
            ${tweet.id}
            <img src="${tweet.image}" width="50px" />
            <div class="tweet-text">${tweet.text}</div>
          </div>
        `;
    });
    app.innerHTML = html;
  } catch (err) {
    await fetchApi(); 
  }
}

interval = setInterval(async () => await fetchApi(), 5000);
timeout = setTimeout(fetchApi, 5000);

let oldVal = 0;
let newVal = 0;

window.addEventListener("scroll", (e) => {
  newVal = window.pageYOffset;

  if (oldVal < newVal) { // scroll down 
    clearTimeout(timeout);
  } else if (oldVal > newVal) {
    if (newVal === 0) {
      interval = setInterval(async () => await fetchApi(), 1000); 
    }
  }

  oldVal = newVal; //update oldval
});

//starts here
fetchApi();
