

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Header, Segment, Loader, Grid, Image, List, Label } from "semantic-ui-react";
import { fetchTvShowDetails } from "./query";

export const TvShow = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid Tvshow ID</div>;
  }

  // Using useQuery to fetch data
  const { data, isLoading } = useQuery({
    queryKey: ["tvShow"],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  return (
    <div>
      <Segment>
        <Header>{data.name}</Header>
        <Grid columns={2} divided textAlign={"left"} style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  size="medium"
                  centered
                />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <List>

                <List.Item>
                  <List.Header>Created by: </List.Header>
                  <List.Description>
                    {data.created_by
                      .map((creater: any) => creater.name)
                      .join(", ")}
                  </List.Description>
                </List.Item>

                <List.Item>
                  <List.Header>Episode Runtime:</List.Header>
                  {data.episode_run_time.join(", ")}
                </List.Item>

                <List.Item>
                  <List.Header>Genres: </List.Header>
                  {data.genres.map((genre: any) =>(
                    <Label key={genre.id}>{genre.name}</Label>
                  ))}
                </List.Item>

                <List.Item>
                  <List.Header>Popularity: </List.Header>
                  {data.Popularity}
                </List.Item>

                <List.Item>
                  <List.Header>Production Companies:</List.Header>
                  {data.production_companies
                    .map((company: any) => company.name)
                    .join(",")}
                </List.Item>

                <List.Item>
                  <List.Header>First Air Date:</List.Header>
                  {data.first_air_date}
                </List.Item>

                <List.Item>
                  <List.Header>Number of Episodes: </List.Header>
                  {data.number_of_episodes}
                </List.Item>

                <List.Item>
                  <List.Header>Networks: </List.Header>
                  {data.networks}
                </List.Item>

                <List.Item>
                  <List.Header>Language:</List.Header>
                  {data.original_language}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
