import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";

type SideBarProps = {}

export const SideBar = (props: SideBarProps) => {
    return <MenuList className="sidebar">
        <MenuItem >
            <ListItemIcon>
                <TwitterIcon fontSize="medium" color="primary" />
            </ListItemIcon>
        </MenuItem>
        <MenuItem selected>
            <ListItemIcon>
                <HomeOutlinedIcon
                    className="home-page__menu-icon"

                    fontSize="medium"
                    color="primary"
                />
            </ListItemIcon>
            <Typography variant="h6">Главная</Typography>
        </MenuItem>
        <MenuItem >
            <ListItemIcon>
                <TagOutlinedIcon

                    fontSize="medium"
                />
            </ListItemIcon>
            <Typography variant="h6">Поиск</Typography>
        </MenuItem>
        <MenuItem >
            <ListItemIcon>
                <NotificationsOutlinedIcon

                    fontSize="medium"
                />
            </ListItemIcon>
            <Typography variant="h6"> Уведомления</Typography>
        </MenuItem>
        <MenuItem >
            <ListItemIcon>
                <EmailOutlinedIcon

                    fontSize="medium"
                />
            </ListItemIcon>
            <Typography variant="h6">Главная</Typography>
        </MenuItem>
        <MenuItem >
            <ListItemIcon>
                <BookmarkBorderOutlinedIcon

                    fontSize="medium"
                />
            </ListItemIcon>
            <Typography variant="h6">Главная</Typography>
        </MenuItem>
        <MenuItem >
            <ListItemIcon>
                <ListAltOutlinedIcon

                    fontSize="medium"
                />
            </ListItemIcon>
            <Typography variant="h6">Главная</Typography>
        </MenuItem>
        <MenuItem>
            <ListItemIcon>
                <PermIdentityOutlinedIcon

                    fontSize="medium"
                />
            </ListItemIcon>
            <Typography variant="h6">Главная</Typography>
        </MenuItem>
        <Box marginTop="20px">
            <Button variant="contained" fullWidth color="primary">Твитнуть</Button>
        </Box>
    </MenuList>

}