export const fetchRatedMovie = async () => {
  const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`
  );
  console.log("Rated Movie Response Status:", res.status); // Log the response status code
  const data = await res.json();
  console.log("Rated Movie Response Data:", data); // Log the response data
  return data;
};

export const fetchRatedTvShow = async () => {
  const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`
  );
  console.log("Rated TV Show Response Status:", res.status); // Log the response status code
  const data = await res.json();
  console.log("Rated TV Show Response Data:", data); // Log the response data
  return data;
};
