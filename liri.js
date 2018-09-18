require("dotenv").config();




    // make it so liri.js can take in one of the commands:

    // * `my-tweets`

    // * `spotify-this-song`

    // * `movie-this`

    // * `do-what-it-says`

    

var keys = require("./keys.js");

    keys.find({  }, function(err, res) {

        if (err) {
            console.log(err);
        }
        console.log(JSON.stringify(res, null, 2));

    });


// Twitter

var myTweets = function() {
    var twitter = require("twitter");

    twitter ({
        TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
        TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
        TWITTER_ACCESS_TOKEN_KEY: process.env.TWITTER_ACCESS_TOKEN_KEY,
        TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    var params = {
        userName: " ",
        tweetCount: 20
    };

    client.get("user_timeline", params, function(err, tweets, res) {
        if(err) {
            console.log(err);
        }
        console.log("20 tweets");

        for(var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
            // when they were created
        }
        
    });
};

myTweets();



// Spotify

var spotifyThisSong = function() {
        var spotify = require("spotify");

       spotify ({
            SPOTIFY_ID: process.env.SPOTIFY_ID,
            SPOTIFY_SECRET: process.env.SPOTIFY_SECRET
       });


       var params = {
        artist: "Artist",
        songtTitle: "Song Title",
        // link: "Preview Link",
        // albumTitle: "Album Title"
       };

       if(spotifyThisSong === undefined) {
		        spotifyThisSong = "The Sign by Ace of Base.";
	        }

       song.search({artist: "Artist", songTitle: "Song Title"}, params, function(err, res) {
           if(err) {
               console.log(err);
           }
           for(var i = 0; i < res.artist[0].songTitle.length; i++) {
               console.log(res.artist[0].songTitle[i]);
           }
        //    add in preview link and album title
       });

};

spotifyThisSong();


// Movie

var movieThis = function() {
    var request = require("request");

    var params = {
        title: "Movie title",
        year: "year",
        IMDBrating: "IMDB movie rating",
        tomRating: "rotton tomates rating",
        produced: "country where movie was produced",
        language: "language of movie",
        plot: "plot",
        actors: "actors"
    };

    if(movieThis === undefined) {
        movieThis = "Mr. Nobody";
    } else {

    request("http://www.omdbapi.com/?apikey=[yourkey]&", params, function(err, res) {
        console.log("Movie title" + JSON.parse(body).title);
        console.log("year" + JSON.parse(body).year);
        console.log("IMDB movie rating" + JSON.parse(body).IMDBrating);
        console.log("rotton tomatoes rating" + JSON.parse(body).tomRating);
        console.log("country where movie was produced" + JSON.parse(body).produced);
        console.log("language of movie" + JSON.parse(body).language);
        console.log("plot", + JSON.parse(body).plot);
        console.log("actors", + JSON.parse(body).actors);
    });

   }

};

movieThis();


// Do what it says
// spotify-this-song,"I Want it That Way" from txt file
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.