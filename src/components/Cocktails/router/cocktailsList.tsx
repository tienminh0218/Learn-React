import Loading from "./loading";
import { useGlobalContext, ContextType } from "../context";
import CocktailsItem from "./cocktailsItem";
import { Box } from "@material-ui/core";

const CocktailsList = () => {
    const { loading, cocktails } = useGlobalContext() as ContextType;

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Box
                mt={5}
                style={{
                    display: "grid",
                    gridTemplateColumns: "30% 30% 30%",
                    gap: "2rem",
                }}
            >
                {cocktails &&
                    cocktails.map((item) => {
                        const { strDrink, strDrinkThumb, strGlass, idDrink } = item;
                        console.log(item);
                        return (
                            <CocktailsItem key={idDrink} name={strDrink} image={strDrinkThumb} info={strGlass} />
                        );
                    })}
            </Box>
        </>
    );
};

export default CocktailsList;
