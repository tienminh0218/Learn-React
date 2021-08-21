import "./index.css";
import { useGlobleContext, ContextType, AppProvider } from "./context";
import { useStyles } from "./use-style";
import Content from "./content";
import Navbar from "./Nav";

export default function DenseAppBar() {
    const classes = useStyles();
    return (
        <AppProvider>
            <div className={classes.root}>
                <Navbar />
                <Content />
            </div>
        </AppProvider>
    );
}
