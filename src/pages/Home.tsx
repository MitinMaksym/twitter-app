import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Tweet } from "../components/common/Tweet";
import { Box, List } from "@mui/material";
import { SideMenu } from "../components/common/SideMenu";
import { NewTweetForm } from "../components/common/AddTweetForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchTweets,
    Tweet as TweetType,
} from "../redux/ducks/tweets/tweetsSlice";
import { selectTweets } from "../redux/ducks/tweets/selectors";
import { Tag } from "../components/common/Tag";
import { fetchTags, Tag as TagType } from "../redux/ducks/tags/tagsSlice";
import { selectTags } from "../redux/ducks/tags/selectors";
import { Route, Routes } from "react-router-dom";
import { TweetDetails } from "../components/common/TweetDetails";
import { MainHeader } from "../components/common/MainHeader";

export const Home = () => {
    const dispatch = useDispatch();

    const tweets: TweetType[] = useSelector(selectTweets);
    const tags: TagType[] = useSelector(selectTags);

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);
    return (
        <>
            <Container maxWidth="lg">
                <Grid container padding={2} className="home-page">
                    <Grid item xs={3}>
                        <SideMenu />
                    </Grid>
                    <Grid item xs={6} padding="0px 10px">
                        <MainHeader />
                        <Routes>
                            {["/", "search"].map((path) => (
                                <Route path={path} element={<NewTweetForm />} />
                            ))}
                        </Routes>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        {tweets.map((tweet) => (
                                            <Tweet key={tweet._id} tweet={tweet} />
                                        ))}
                                    </>
                                }
                            />
                            <Route path="tweets/:id" element={<TweetDetails />} />
                        </Routes>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl
                            variant="standard"
                            fullWidth
                            className="home-page__search"
                        >
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
                        <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                        >
                            {tags.map(({ tagTitle, tweetsCount }) => (
                                <Tag
                                    key={tweetsCount}
                                    tagTitle={tagTitle}
                                    tweetsCount={tweetsCount}
                                />
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
