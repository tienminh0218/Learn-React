import { Box, LinearProgress } from "@material-ui/core";
import React from "react";

const Loading = () => {
    return (
        <Box mt={10} width="80%" marginX="auto">
            <LinearProgress />
        </Box>
    );
};

export default Loading;
