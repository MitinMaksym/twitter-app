import Typography from "@mui/material/Typography";
import { Avatar, Box, IconButton, Paper } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SaveAltIcon from "@mui/icons-material/SaveAlt";


type TweetProps = {
    author: string;
    text: string;
};

export const Tweet = (props: TweetProps) => {
    const { author, text } = props;
    return (
        <Paper className="tweet" elevation={0}>
            <div className="tweet__wrapper">
                <div className="tweet__avatar">
                    <Avatar
                        alt="Remy Sharp"
                        src="https://mui.com/static/images/avatar/1.jpg"
                    />
                </div>
                <div className="tweet__body">
                    <Box sx={{ display: "flex" }}>
                        <Typography variant="subtitle2">
                            {author}
                        </Typography>
                        <Typography variant="subtitle2" marginLeft="5px" className="tweet__nickname">@Brie</Typography>
                    </Box>
                    <Typography variant="body2">{text}</Typography>

                    <Box className="tweet__actions"
                    >
                        <IconButton aria-label="comment">
                            <ChatBubbleOutlineIcon />
                            <span className="tweet__count"

                            >
                                1
                            </span>
                        </IconButton>

                        <IconButton aria-label="retweet">
                            <RepeatIcon />
                        </IconButton>
                        <IconButton aria-label="like">
                            <FavoriteBorderIcon />
                            <span className="tweet__count"

                            >
                                1
                            </span>
                        </IconButton>
                        <IconButton aria-label="save">
                            <SaveAltIcon />
                        </IconButton>
                    </Box>
                </div>
            </div>
        </Paper>
    );
};
