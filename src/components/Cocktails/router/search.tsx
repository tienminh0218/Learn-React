import { Box, TextField } from "@material-ui/core";
import { useGlobalContext, ContextType } from "../context";

const Search = () => {
    const { search, handleSearch } = useGlobalContext() as ContextType;

    return (
        <Box marginX="auto" width="50%" mb={5}>
            <TextField
                variant="outlined"
                fullWidth
                label="search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </Box>
    );
};

export default Search;
