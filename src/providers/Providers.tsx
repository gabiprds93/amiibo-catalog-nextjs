import { useRef } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

// Contexts
import AmiibosProvider from "../contexts/amiibos/amiibos.context";
import FavoritesProvider from "../contexts/favorites/favorites.context";
import ThemeProvider from "../contexts/theme/theme.context";
import FiltersProvider from "../contexts/filters/filters.context";
// Types
import { ProvidersProps as Props } from "./Providers.types";

const Providers: React.FC<Props> = (props) => {
  const { children } = props;
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ThemeProvider>
        <FiltersProvider>
          <FavoritesProvider>
            <AmiibosProvider>{children}</AmiibosProvider>
          </FavoritesProvider>
        </FiltersProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

Providers.defaultProps = {};

export default Providers;
