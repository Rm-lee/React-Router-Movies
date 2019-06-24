import React, { Component } from 'react';
import MovieCard from './MovieCard'
import axios from 'axios';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      tmdb: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const {id} = this.props.match.params;
    
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
        this.getMovieImg(this.state.movie.title)
        
      })
      .catch(error => {
        console.error(error);
      });
  };

  getMovieImg = title => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=9482c0d614f49577f16fad8bd7b1d64f&language=en-US&query=${title}&page=1&include_adult=false`)
      .then(response => {
        this.setState(() => ({ tmdb: response.data.results[0].poster_path }));
       
        
      })
      .catch(error => {
        console.error(error);
      });
  }
  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  // saveMovie = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <MovieCard movie={this.state.movie} imgSrc={this.state.tmdb} />
    );
  }
}
