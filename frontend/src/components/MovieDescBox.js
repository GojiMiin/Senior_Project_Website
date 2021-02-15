import {Box, Container, Typography} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

const HeaderBox = withStyles({
    root:{
        padding:'20px 20px 0px 20px'
    }
})(Box);
const TextBox = withStyles({
    root:{
        padding:'20px'
    }
})(Box);
const MovieDescBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        width:'800px',
        height:'auto'
    }
})(Box);

function MovieDescBoxs({movieName, movieCate, movieTime, movieRate}) {
    return (
        <MovieDescBox borderRadius={8}>
            <HeaderBox>
                <Typography variant='h6' align='left'>
                    {movieName}
                </Typography>
            </HeaderBox>
            <TextBox>
                <Grid container spacing={3}>
                    <Grid item>
                        <Typography align='left'>
                            {movieTime}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align='left'>
                            {movieCate}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align='left'>
                            {movieRate}
                        </Typography>
                    </Grid>

                </Grid>

            </TextBox>
        </MovieDescBox>
    );
}

export default MovieDescBoxs;