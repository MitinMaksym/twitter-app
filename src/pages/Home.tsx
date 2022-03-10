import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Tweet } from "../components/common/Tweet";
import { Box } from "@mui/material";
import { SideMenu } from "../components/common/SideMenu";
import { NewTweetForm } from "../components/common/AddTweetForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets, Tweet as TweetType } from "../redux/ducks/tweets/tweetsSlice";
import { selectTweets } from "../redux/ducks/tweets/selectors"


export const Home = () => {
    const tweets: TweetType[] = useSelector(selectTweets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])
    return (
        <>
            <Container maxWidth="lg">
                <Grid container padding={2} className="home-page">
                    <Grid item xs={3}>
                        <SideMenu />
                    </Grid>
                    <Grid item xs={6} padding="0px 10px">
                        <Box padding={2}>
                            <Typography variant="h6">Главная</Typography>
                        </Box>
                        <NewTweetForm />
                        {tweets.map(tweet => (<Tweet author={tweet.fullName} text={tweet.text} />))}
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="standard" fullWidth className="home-page__search">
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                placeholder="Поиск в Твиттере"
                                sx={{
                                    backgroundColor: "#e7e7e7",
                                    borderRadius: "50px",
                                    padding: "4px 8px",
                                    "&:after, &:before": { display: "none" },
                                }}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
