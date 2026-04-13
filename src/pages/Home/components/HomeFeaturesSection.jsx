import { pageData } from "../homeData";
import FeatureRow from "./FeatureRow";

const HomeFeaturesSection = () => {
  return (
    <>
      <div className="home-features-section">
        {pageData.features.map((item) => (
          <FeatureRow key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default HomeFeaturesSection;
