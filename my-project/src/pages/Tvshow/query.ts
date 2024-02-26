export const fetchTvShowDetails = async (tvShowId:string) => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ3MmRlNzE4YzcxMmU3YzhhZWY3ZDUwMGYyODM2NCIsInN1YiI6IjY0ZmVkYjUxZGI0ZWQ2MTAzNDNmMDEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_H5JlikTs88AkHigdh9AhE7ojwbkjKzHB-IxyBUqmY'
    }
  });
 return response.json()
};