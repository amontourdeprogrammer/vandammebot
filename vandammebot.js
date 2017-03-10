
var got = require('got');

// This function extracts the posts from the json of a disourse topic
// Input : URL of discourse topic + api_key + api_username
// Output : list of post on the topic (as js objects)

var urltopic = 'http://communaute.amontourdeprogrammer.fr/t/demo-time-spectacle/75.json?api_key=d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de&api_username=Anna-Livia'
//var urltopic = 'http://communaute.amontourdeprogrammer.fr/t/cle-publique-et-chiffrement-rsa/50.json?api_key=d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de&api_username=LoreenRH'

getposts(urltopic);

function getposts(url) {

  var listOfPosts = [] ;
  // Open a url
  got.get(url)
      .then(filterAndRespond)
      .catch(error => {
          console.log(error.response.body);
          //=> 'Internal server error ...'
      });
}


function filterAndRespond(response) {       // get the list of posts
    listOfPosts = JSON.parse(response.body).post_stream.posts;
    // filter the list with the "is it new function
    console.log("list of", listOfPosts.length, typeof(listOfPosts));
    var filteredPosts = listOfPosts.filter(isItNew);
    if (filteredPosts.length > 0) {
      var postUrl = 'http://communaute.amontourdeprogrammer.fr/posts';

      got.post(postUrl, {body: {
        "api_key": "d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de",
        "api_username": "lisa",
        "topic_id": 75,
        "raw": getQuotes()
      }
      })
    }

    console.log("list of",filteredPosts.length, "new posts")
}

// This function tells me if a message is new or not
// Input : message object
// Output : true if new, False if not new

function isItNew(post) {
  console.log("Start isNew");
  console.log(post.read);
  //if unread
  if (post.read == false) {
      //keep in the list
      return true;
    } else {
      //discard
          console.log('NOOOOOOOOOPE !!!!!!!');
        return false;
    };
  }


//Vandamme quotes
var quotes = [
"Moi, Adam et Eve, j’y crois plus tu vois, parce que je suis pas un idiot : la pomme ça peut pas être mauvais, c’est plein de pectine…",
"Une noisette, j'la casse entre mes fesses tu vois...",
"Je crois au moment. S'il n'y a pas le moment, à ce moment-là, il faut arriver à ce moment-là, au moment qu'on veut",
"Selon les statistiques, il y a une personne sur cinq qui est déséquilibrée. S'il y a 4 personnes autour de toi et qu'elles te semblent normales, c'est pas bon.",
"Le monde est composé de flèches et de molécules, et d'électricité,comme le Big-Bang tu vois, et tout ça ensemble, ça forme l'Univers.",
"Si tu travailles avec un marteau-piqueur pendant un tremblement de terre, désynchronise-toi, sinon tu travailles pour rien.",
]

function getQuotes() {
   return quotes[Math.floor(Math.random() * quotes.length)];
}
