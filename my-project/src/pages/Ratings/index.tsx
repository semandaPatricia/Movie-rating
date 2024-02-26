import { useQuery } from "@tanstack/react-query"
import { Container ,Header,Loader,Menu,Segment} from "semantic-ui-react"
import { DisplayType } from "../Home"
import { useState } from "react"
import {fetchRatedMovie,fetchRatedTvShow} from './query'

import { ColumnDisplay } from "../Home/columnDisplay"


const Ratings = () => {
  const [activeTabs,setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

  const{ data:ratedMovies,isLoading : isLoadingRatedMovies} = useQuery({
    queryKey:["ratedMovies"],
    queryFn:fetchRatedMovie,
  })

  const{ data:ratedTVShows,isLoading : isLoadingRatedTvShows} = useQuery({
    queryKey:["ratedTvshows"],
    queryFn:fetchRatedTvShow,
  })

  if (isLoadingRatedMovies || isLoadingRatedTvShows  ) {
    return <Loader active/>
  }


  return (
  <Container style={{ marginTop : 50 }}>
    {" "}
    <Menu pointing secondary>
      <Menu.Item
      name="Movies"
      color="green"
      active={activeTabs === DisplayType.Movies}
      onClick={() => setActiveTabs(DisplayType.Movies)}
      
      />

      <Menu.Item
      name="TV Shows"
      color="green"
      active={activeTabs === DisplayType.TvShows}
      onClick={() => setActiveTabs(DisplayType.TvShows)}
      
      />
<Segment>
{activeTabs === DisplayType.Movies ? (
  <div>
    <Header as ={"h2"}>Rated Movies</Header>
    <ColumnDisplay data={ratedMovies.results} displayType={DisplayType.Movies}/>
  </div>
) :(
  <div>
    <Header as ={"h2"}>Rated Tv shows</Header>
    <ColumnDisplay data={ratedTVShows.results} displayType={DisplayType.TvShows}/>
  </div>

)}

</Segment>
     
    </Menu>
  </Container>
  )}

export default Ratings