import { red } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        toolbarNav: {
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
        },
        mrginBottom: {
            marginBottom: "20px",
        },
        gapGrid: {
            display: "grid !important",
            gap: "2rem",
        },
        colorBtn: {
            color: red[500],
        },
        iconBack: {
            cursor: "pointer",
        },
    })
);
