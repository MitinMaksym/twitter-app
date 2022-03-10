import {
    Avatar,
    Button,
    CircularProgress,
    FormControl,
    Paper,
    TextareaAutosize,
} from "@mui/material";
import { useState } from "react";

type NewTweetAreaProps = {};

const MAX_TEXT_AREA_LENGTH = 10

const calculateProgress = (value: number, max: number) => {
    return value * 100 / max
}

export const NewTweetForm = (props: NewTweetAreaProps) => {
    const [value, setValue] = useState("")
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const circularProgressColor = value.length === MAX_TEXT_AREA_LENGTH ? "error" : "primary"

    return (
        <Paper elevation={3}>
            <div className="new-tweet-form">
                <div className="new-tweet-form__body">
                    <div className="new-tweet-form__main">
                        <div className="new-tweet-form__avatar">
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/1.jpg"
                            />
                        </div>
                        <FormControl className="new-tweet-form__text-area">
                            <TextareaAutosize
                                aria-label="tweet-text-area"
                                minRows={3}
                                placeholder="Что происходит?"
                                maxLength={MAX_TEXT_AREA_LENGTH}
                                value={value}
                                onChange={onChange}
                            />
                        </FormControl>
                    </div>

                    <div className="new-tweet-form__actions">
                        <CircularProgress variant="determinate" color={circularProgressColor} size={20} value={calculateProgress(value.length, MAX_TEXT_AREA_LENGTH)} />
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            onClick={() => { }}
                        >
                            Твитнуть
                        </Button>
                    </div>
                </div>
            </div>
        </Paper>
    );
};
