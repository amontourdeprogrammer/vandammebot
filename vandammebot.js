
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


// This function extracts the posts from the json of a disourse topic
// Input : URL of discourse topic + api_key + api_username
// Output : list of post on the topic (as js objects)

//var urltopic = 'http://communaute.amontourdeprogrammer.fr/t/comptes-github-et-twitter-de-chacunes/40.json?api_key=d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de&api_username=Anna-Livia'
var urltopic = 'http://communaute.amontourdeprogrammer.fr/t/cle-publique-et-chiffrement-rsa/50.json?api_key=d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de&api_username=LoreenRH'

function getposts(url) {
	const fs = require('fs');
	const got = require('got');

	var listOfPosts = [] ;
	console.log('start getposts')
	// Open a url
	got(url)
	    .then(response => {
	    	// get the list of posts
	    	console.log("before list of posts");
	        listOfPosts = JSON.parse(response.body).post_stream.posts;
	        console.log("after list of posts");
	        // filter the list with the "is it new function
	        var filteredPosts = listOfPosts.filter(isItNew);
	        console.log("after filter");
			console.log(filteredPosts);
	        //=> '<!doctype html> ...' 
	    })
	    .catch(error => {
	        console.log(error.response.body);
	        //=> 'Internal server error ...' 
	    });
	console.log("end of getposts");
	}

getposts(urltopic);
//http://docs.discourse.org/

//var listOfPosts = ;




//console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOH", a);