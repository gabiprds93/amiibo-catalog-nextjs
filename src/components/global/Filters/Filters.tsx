// Components
import FilterList from "../FilterList/FilterList";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
import useFilters from "../../../contexts/filters/filters.hooks";
// Services
import { fetchAmiibos } from "../../../services/amiibos/amiibos.service";
// Types
import { FiltersProps as Props } from "./Filters.types";
import { useMediaQuery } from "react-responsive";
import CONSTANTS from "configs/constants";

const { BREAKPOINTS } = CONSTANTS;

const Filters: React.FC<Props> = (props) => {
  const { setCurrentAmiiboList } = useAmiibos();
  const { selectedFilter, setSelectedFilter, haveFilters } = useFilters();
  const { setHaveFilters } = useFilters();
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.desktop}px)`,
  });

  /** Function to handle when filters are clear.
   *
   */
  const handleClearFilter = async () => {
    const amiibosList = await fetchAmiibos();
    setCurrentAmiiboList(amiibosList);
    setHaveFilters(false);
    setSelectedFilter("");
  };

  if (!isDesktop) return null;

  return (
    <div className="Filters Filters__wrapper">
      <div className="Filters__content">
        <p className="Filters__title">Filtro</p>

        {haveFilters ? (
          <input
            type="button"
            value="Quitar filtro"
            onClick={handleClearFilter}
            className="Filters__button"
          />
        ) : null}

        <FilterList
          checkedValue={selectedFilter}
          setCheckedValue={setSelectedFilter}
          setHaveFilter={setHaveFilters}
        />
      </div>
    </div>
  );
};

Filters.defaultProps = {};

export default Filters;
