import propTypes from "prop-types";

import { BsShop } from "react-icons/bs";
import { PiGiftBold } from "react-icons/pi";
import { MdOutlineQueryStats } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useTranslation } from "react-i18next";

const featurePromoData = [
  {
    svg: <BsShop className="size-7 group-hover:fill-white" />,
    title: "featurePromo.feature1.title",
    descryption: "featurePromo.feature1.desc",
  },
  {
    svg: <TfiHeadphoneAlt className="size-7 group-hover:fill-white" />,
    title: "featurePromo.feature2.title",
    descryption: "featurePromo.feature2.desc",
  },
  {
    svg: <MdOutlineQueryStats className="size-7 group-hover:fill-white" />,
    title: "featurePromo.feature3.title",
    descryption: "featurePromo.feature3.desc",
  },
  {
    svg: <PiGiftBold className="size-7 group-hover:fill-white" />,
    title: "featurePromo.feature4.title",
    descryption: "featurePromo.feature4.desc",
  },
];

function FeaturePromo() {
  return (
    <div className="grid-row-2 container mx-auto grid grid-cols-2 gap-3 px-4 pt-16 md:flex md:justify-center md:pb-8 lg:gap-5 lg:pb-16">
      {featurePromoData.map((el, key) => (
        <FeaturePromoItem data={el} key={key} />
      ))}
    </div>
  );
}

export default FeaturePromo;
function FeaturePromoItem({ data }) {
  const { t } = useTranslation("home");
  const { svg, title, descryption } = data;

  return (
    <div className="mx-auto flex w-[165px] flex-col items-center gap-1 text-balance rounded-3xl bg-black/60 px-4 py-4 text-center capitalize sm:w-52">
      <div className="group relative mb-2 flex size-12 items-center justify-center rounded-full bg-white duration-300 hover:scale-125 hover:bg-apple-500 md:size-16">
        {svg}
      </div>
      <h3 className="text-xs text-white md:text-sm lg:text-lg xl:text-xl">
        {t(title)}
      </h3>
      <p className="mt-1 max-w-60 text-balance text-xs text-gray-400 lg:text-sm">
        {t(descryption)}
      </p>
    </div>
  );
}

FeaturePromoItem.propTypes = {
  data: propTypes.object,
};
