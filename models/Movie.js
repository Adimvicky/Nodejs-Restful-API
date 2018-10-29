const mongoose = require('mongoose');

// Movie Schema

const MovieSchema = mongoose.Schema({
    title : String,
    plot : String,
    cover : String,
    genre : String,
    actors : Array,
    releaseDate : Date
});

const Movie =  mongoose.model('Movie',MovieSchema);

Movie.getMovies = function(callback, limit){
     Movie.find(callback).limit(limit);
}

Movie.getMovieById = function(id, callback){
    Movie.findById(id, callback);
}

module.exports = Movie;


