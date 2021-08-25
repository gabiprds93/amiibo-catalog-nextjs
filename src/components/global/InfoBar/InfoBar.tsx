import { useState } from "react";
import { useMediaQuery } from "react-responsive";

// Components
import SortBy from "../SortBy/SortBy";
import Button from "../Button/Button";
import FiltersDrawer from "../FiltersDrawer/FiltersDrawer";
// Types
import { InfoBarProps as Props } from "./InfoBar.types";
// Configs
import CONSTANTS from "../../../configs/constants";
import { useRouter } from "next/router";

const { BREAKPOINTS } = CONSTANTS;

const InfoBar: React.FC<Props> = (props) => {
  const { title } = props;
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { asPath } = useRouter();
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.desktop}px)`,
  });

  /** Function to handle categories side drawer
   *
   */
  const drawerHandler = () => {
    setDrawerOpened((prev) => !prev);
  };

  return (
    <div className="InfoBar">
      <div className="InfoBar__content">
        <h1 className="InfoBar__content__title">{title}</h1>

        <div className="InfoBar__content__modifiers">
          {!isDesktop && asPath === "/" ? (
            <div className="InfoBar__button-wrapper">
              <Button type="button" value="Filtros" onClick={drawerHandler} />
            </div>
          ) : null}

          <div>
            <SortBy />
          </div>
        </div>
      </div>

      <FiltersDrawer opened={drawerOpened} onClose={drawerHandler} />
    </div>
  );
};

InfoBar.defaultProps = {};

export default InfoBar;
