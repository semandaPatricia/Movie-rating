import React from "react";
import { Card, Grid,Form } from "semantic-ui-react";
import { DisplayType } from "./index";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query"
import { rateMovie,rateTvShow } from "./mutations";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[]; //  data type to array
  displayType: DisplayType;
}

export const ColumnDisplay: React.FC<Props> = (props: Props) => {
  const { data, displayType } = props;
  const[rating,setRating]= useState<number>(0)

  const{mutate: rateMovieMutation} =useMutation({
    mutationKey:["rateMovie"],
    mutationFn:(id: number) =>rateMovie(id, rating),
  })
  const{mutate: rateTvShowMutation} =useMutation({
    mutationKey:["rateTvShow"],
    mutationFn:(id: number) =>rateTvShow(id, rating),
  })
  

  return (
    <Grid
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {data.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <Card.Group>
            <Link
              to={`/${
                displayType === DisplayType.Movies ? "movies" : "tvshow"
              } /${displayData.id}`}
            >
              <Card
                fluid
                image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                header={
                  displayType === DisplayType.Movies
                    ? displayData.title
                    : displayData.name
                }
                meta={`Release Date: {displayData.release_date} | Rating: {displayData.vote_average}`}
                description={displayData.overview.slice(0, 300) + "..."}
              ></Card>
            </Link>
            <Form style={{ marginTop: 10}} >
              <Form.Group inline>
                <Form.Field>
                  <Form.Input type="number" min='0' max="10" step="0.5" action={{
                    color:"violet",
                    lableposition:"right",
                    icon:"star",
                    onClick:() =>{
                        console.log(rating)
                    }

                  }} onChange={(e) => setRating(Number(e.target.value))}/>
                </Form.Field>
              </Form.Group>
            </Form>
          </Card.Group>
        </Grid.Column>
      ))}
    </Grid>
  );
};
