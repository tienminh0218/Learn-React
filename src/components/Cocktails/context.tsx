import { createContext, FC, ReactDOM, ReactNode, useContext, useEffect, useState } from "react";

type Prop = {
    children: ReactNode;
};

export type ContextType = {
    loading: boolean;
    search: string;
    cocktails: any[];
    handleSearch: (keyWord: string) => void;
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext<ContextType | null>(null);

export const AppProvider: FC<Prop> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");
    const [cocktails, setCocktails] = useState<any[]>([]);

    useEffect(() => {
        const fetchTimeOut = setTimeout(() => fetchData(search), 500);

        return () => {
            clearTimeout(fetchTimeOut);
        };
    }, [search]);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const { drinks } = await (await fetch(url)).json();
            setCocktails(drinks);
            setLoading(false);
        }
        getData();
    }, []);

    const handleSearch = (keyWord: string): void => {
        setSearch(keyWord);
    };

    const fetchData = async (keyWord: string = "") => {
        setLoading(true);
        try {
            const { drinks } = await (await fetch(`${url}${keyWord}`)).json();
            if (drinks) {
                setCocktails(drinks);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <AppContext.Provider
            value={{
                loading,
                cocktails,
                search,
                handleSearch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
