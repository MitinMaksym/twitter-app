import { Avatar, Paper, TextareaAutosize } from "@mui/material";

type NewTweetAreaProps = {};

export const NewTweetArea = (props: NewTweetAreaProps) => {
    return (
        <Paper>
            <div className="new-tweet">
                <div className="new-tweet__body">
                    <div className="new-tweet__avatar">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/1.jpg"
                        />
                    </div>

                    <TextareaAutosize
                        className="new-tweet__text-area"
                        aria-label="tweet-text-area"
                        minRows={3}
                        placeholder="Что происходит?"
                        style={{ width: 200 }}
                    />
                </div>
            </div>
        </Paper>
    );
};
