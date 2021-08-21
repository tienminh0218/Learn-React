import { FC } from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

type Prop = {
    name: string;
    image: string;
    info: string;
};

const CocktailsItem: FC<Prop> = ({ name, image, info }) => {
    return (
        <>
            <Box>
                <Card>
                    <CardHeader
                        title={name}
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                    <CardMedia title="title">
                        <img className="image" style={{ width: "100%" }} src={image} alt="" />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h5" color="textSecondary" align="center">
                            {info}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box marginX="auto" width="50%" mb={2}>
                            <Button variant="contained" color="primary" fullWidth>
                                Watch
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
};

export default CocktailsItem;
