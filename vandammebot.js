

//curl -X GET "http://127.0.0.1:3000/admin/users/list/active.json?api_key=d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de&api_username=Anna-Livia"";

//curl -X GET "http://communaute.amontourdeprogrammer.fr?api_key=d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de&api_username=yannick";

/**Curl works in console with 
"http://communaute.amontourdeprogrammer.fr?api_key=d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de&api_username=yannick"
It seems it could be any user that has access o 
**/

var request = require('request');

var a = request('http://communaute.amontourdeprogrammer.fr/t/titres-et-certifications-que-les-apprenantes-peuvent-passer/16.json?api_key=d4fb34eff83af60a16791e0807c39c2dfbfcc8a81005536dd9c432fe6ca8f6de&api_username=yannick', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
}) //ça marche!! 


//console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOH", a);