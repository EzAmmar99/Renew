import { pageData } from "../homeData";
import FeatureRow from "./FeatureRow";

const HomeFeaturesSection = () => {
  return (
    <>
      <div className="home-features-section">
        {pageData.features.map((item, index) => (
          <FeatureRow key={item.id} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default HomeFeaturesSection;
