import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { DisplayType } from './index';
import { Link } from 'react-router-dom';

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

    return (
        <Grid columns={3} stackable centered verticalAlign='top' padded='vertically'>
            {data.map((displayData: DisplayData) => (
                <Grid.Column key={displayData.id}>
                    <Card.Group>
                        <Link to={`/${displayType === DisplayType.Movies ? "movies" : "tvshow"} /${displayData.id}`}>
                        <Card 
                      fluid
                      image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                      header={
                        displayType === DisplayType.Movies ? displayData.title : displayData.name
                        
                      }
                      meta={`Release Date: {displayData.release_date} | Rating: {displayData.vote_average}`}
                      Description={displayData.overview.slice(0,300) +'...'}


                      >

                      </Card>
                 
                        </Link>
                   
                        </Card.Group>
                    
                </Grid.Column>
            ))}
        </Grid>
    );
};
