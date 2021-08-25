import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Components
import Navbar from "../../global/Navbar/Navbar";
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import InfoBar from "../../global/InfoBar/InfoBar";
import DarkToggle from "../../global/DarkToggle/DarkToggle";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Services
import { fetchAmiibos } from "../../../services/amiibos/amiibos.service";
// Types
import { CategoriesProps as Props } from "./Categories.types";
import { Amiibo } from "../../../types/amiibos.types";

const Categories: React.FC<Props> = (props) => {
  const [amiibosByCategory, setAmiibosByCategory] = useState<Amiibo[]>();
  const { currentAmiiboList, setCurrentAmiiboList } = useAmiibos();
  const { query } = useRouter();

  const { categoryName } = query;

  useEffect(() => {
    if (query) {
      (async () => {
        const amiibos = await fetchAmiibos({
          amiiboSeries: categoryName as string,
        });
        setAmiibosByCategory(amiibos);
      })();
    }
  }, [query]);

  useEffect(() => {
    if (amiibosByCategory) setCurrentAmiiboList(amiibosByCategory);
  }, [amiibosByCategory, setCurrentAmiiboList]);

  return (
    <div className="Categories">
      <header className="Categories__header">
        <Navbar />
      </header>

      <main className="Categories__main">
        <div className="Home__dark-toggle">
          <DarkToggle />
        </div>

        <InfoBar title={categoryName as string} />

        <AmiiboList list={currentAmiiboList} />
      </main>

      <footer className="Categories__footer" />
    </div>
  );
};

Categories.defaultProps = {};

export default Categories;
