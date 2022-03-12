import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { BackButton } from "./BackButton";

export const MainHeader = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header title="Твиты" />} />
            </Routes>
            <Routes>
                {["tweets/:id", "search"].map((path) => (
                    <Route path={path} element={<Header title="Твит" />} />
                ))}
            </Routes>
        </>
    );
};

type HeaderProps = { title: string };

const Header = ({ title }: HeaderProps) => {
    return <Box padding={2} display="flex" alignItems="center">
        <BackButton />
        <Typography variant="h6">{title}</Typography>
    </Box>;
};
