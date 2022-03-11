import { Divider, ListItem, ListItemText, Typography } from "@mui/material";

type TagProps = { tweetsCount: number; tagTitle: string };

export const Tag = (props: TagProps) => {
    const { tweetsCount, tagTitle } = props
    return <>
        <ListItem className="tag" >
            <ListItemText
                primary={
                    <Typography
                        className="tag__title"
                        fontWeight={700}
                        fontSize={15}
                    >
                        {tagTitle}
                    </Typography>
                }
                secondary={
                    <Typography
                        className="tag__tweets-count"
                        fontSize={13}
                    >
                        {`${tweetsCount} Tweets`}
                    </Typography>
                }
            />
        </ListItem>
        <Divider variant="fullWidth" />
    </>;

};
