import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#E5E5E5',
        marginBottom: '30px'
    },
    center: {
        display:"flex",
        justifyContent:"center"
    },
    centerColumn: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    }
});
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
const ResultBox = withStyles({
    root:{
        backgroundColor: '#fff',
        maxWidth:'800px',
        height:'auto',
        marginTop:'24px'
    }
})(Box);
const ResultDetailBox = withStyles({
    root:{
        backgroundColor: '#E5E5E5',
        height:'auto'
    }
})(Box);

function ResultBoxs() {
    const classes = useStyles()
    return (
            <ResultBox>
                <Grid container>
                    <Grid item xs={4}>
                        <img style={{ width: '75%', height: 'auto' }} src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg" />
                    </Grid>
                    <Grid item xs={8} className={classes.centerColumn}>
                        <Box>
                            <ResultDetailBox borderRadius={8}>
                                <HeaderBox>
                                    <Typography variant='h6' align='left'>
                                        Movie Name
                                    </Typography>
                                </HeaderBox>
                                <TextBox>
                                    <Typography align='left'>
                                        Action, Drama, History
                                    </Typography>
                                </TextBox>
                            </ResultDetailBox>
                        </Box>
                    </Grid>
                </Grid>
            </ResultBox>

    );
}

export default ResultBoxs;