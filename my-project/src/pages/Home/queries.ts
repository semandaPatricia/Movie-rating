export const fetchMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ3MmRlNzE4YzcxMmU3YzhhZWY3ZDUwMGYyODM2NCIsInN1YiI6IjY0ZmVkYjUxZGI0ZWQ2MTAzNDNmMDEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_H5JlikTs88AkHigdh9AhE7ojwbkjKzHB-IxyBUqmY'
      }
    });
    const data = await response.json();
    return data.results;
  };
  
  export const fetchTVShows = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ3MmRlNzE4YzcxMmU3YzhhZWY3ZDUwMGYyODM2NCIsInN1YiI6IjY0ZmVkYjUxZGI0ZWQ2MTAzNDNmMDEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_H5JlikTs88AkHigdh9AhE7ojwbkjKzHB-IxyBUqmY'
      }
    });
    const data = await response.json();
    return data.results;
  };
  