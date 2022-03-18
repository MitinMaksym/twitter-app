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
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { LogOut } from "../auth/LogOut";

type SideMenuProps = {};

export const SideMenu = (props: SideMenuProps) => {
    return (
        <div className="sidemenu">

            <MenuList>
                <Link to="/home">
                    <div className="sidemenu__logo">
                        <TwitterIcon fontSize="large" color="primary" />
                    </div></Link>
                <MenuItem selected>
                    <ListItemIcon>
                        <HomeOutlinedIcon
                            className="sidemenu__menu-icon"
                            fontSize="medium"
                            color="primary"
                        />
                    </ListItemIcon>
                    <Typography variant="h6" fontSize={22}>
                        Главная
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <TagOutlinedIcon fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="h6" fontSize={22}>
                        Поиск
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <NotificationsOutlinedIcon fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="h6" fontSize={22}>
                        Уведомления
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <EmailOutlinedIcon fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="h6" fontSize={22}>
                        Главная
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <BookmarkBorderOutlinedIcon fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="h6" fontSize={22}>
                        Главная
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ListAltOutlinedIcon fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="h6" fontSize={22}>
                        Главная
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PermIdentityOutlinedIcon fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="h6" fontSize={22}>
                        Главная
                    </Typography>
                </MenuItem>
            </MenuList>
            <Button
                className="sidemenu__tweet-btn"
                variant="contained"
                color="primary"
                onClick={() => { }}
            >
                Твитнуть
            </Button>
            <LogOut />
        </div>
    );
};
