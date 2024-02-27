import { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "./columnDisplay"; // Imported ColumnDisplay component
//import { useQuery } from "react-query"; // Imported useQuery
import { useQuery } from '@tanstack/react-query'
import { fetchMovies, fetchTVShows } from "./queries";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  // Using useQuery to fetch data
  const { data: moviesData, isLoading: isLoadingMovies } = useQuery({
    queryKey:["movies"],
    queryFn: fetchMovies,
  });
   
  const { data: tvShowsData, isLoading: isLoadingTvShows } = useQuery({
    queryKey:["tvshows"],
    queryFn: fetchTVShows,
  });

  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button.Group >
        <Button
          color={displayType === DisplayType.Movies ? "yellow" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "yellow" : undefined}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TvShows
        </Button>
      </Button.Group>
      </div>
      

      {isLoadingMovies || isLoadingTvShows ? (
        <div>Loading....</div>
      ) : (
        <div style={{ marginTop: 20 }}>
          {displayType === DisplayType.Movies ? (
            <ColumnDisplay data={moviesData} displayType={DisplayType.Movies} />
          ) : (
            <ColumnDisplay data={tvShowsData} displayType={DisplayType.TvShows} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
