import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Header, Segment, Loader, Grid, Image,List } from "semantic-ui-react";
import { fetchMoviesDetails } from "./query";

export const Movie = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Invalid Movie ID</div>;
  }

  // Using useQuery to fetch data
  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMoviesDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  return (
    <div>
      <Segment>
        <Header>{data.title}</Header>
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
                  <List.Header>Is this movie for Adults:</List.Header>
                  {data.adult ? "yes" : "no"}
                </List.Item>

                <List.Item>
                  <List.Header>Budget:</List.Header>
                  {data.budget}
                </List.Item>

                <List.Item>
                  <List.Header>Genre:</List.Header>
                  {data.genre}
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
                  <List.Header>Release Date:</List.Header>
                  {data.release_date}
                </List.Item>

                <List.Item>
                  <List.Header>IMDB ID:</List.Header>
                  {data.imdb_id}
                </List.Item>

                <List.Item>
                  <List.Header>Runtime:</List.Header>
                  {data.runtime}
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
