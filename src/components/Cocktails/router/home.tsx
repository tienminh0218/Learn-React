import { Box, Typography } from "@material-ui/core";
import Search from "./search";
import CocktailsList from "./cocktailsList";
import Loading from "./loading";

const Home = () => {
    return (
        <div>
            <Box marginY={10} textAlign="center" fontSize="44px" fontWeight="500">
                Home
            </Box>
            <Search />

            <Typography align="center" variant="h3">
                Cocktails List
            </Typography>
            <CocktailsList />
        </div>
    );
};

export default Home;
