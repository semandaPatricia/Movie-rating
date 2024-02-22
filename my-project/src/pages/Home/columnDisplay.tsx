import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { DisplayType } from './index';

interface DisplayData {
    id: number;
    overview: string;
    poster_path: string;
    title?: string;
    name?: string;
    vote_average: number;
    release_date: string; // corrected typo in release_date
}

interface Props {
    data: DisplayData[]; // corrected data type to array
    displayType: DisplayType;
}

export const ColumnDisplay: React.FC<Props> = (props: Props) => {
    const { data, displayType } = props;

    return (
        <Grid columns={3} stackable centered verticalAlign='top' padded='vertically'>
            {data.map((displayData: DisplayData) => (
                <Grid.Column key={displayData.id}>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>{displayType === DisplayType.Movies ? displayData.title : displayData.name}</Card.Header>
                            <Card.Meta>Release Date: {displayData.release_date} | Rating: {displayData.vote_average}</Card.Meta>
                            <Card.Description>{displayData.overview}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <img src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} alt={displayType === DisplayType.Movies ? displayData.title : displayData.name} />
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}
        </Grid>
    );
};
