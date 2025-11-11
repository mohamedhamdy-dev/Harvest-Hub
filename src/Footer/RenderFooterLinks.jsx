import { useTranslation } from "react-i18next";

export default function RenderFooterLinks({ data }) {
  const { t } = useTranslation("footer");
  return data.map(({ href, title }, key) => (
    <a href={href} key={key} className="mb-3 block">
      <div className="left-underline w-fit capitalize text-gray-200 hover:after:w-full">
        {t(title)}
      </div>
    </a>
  ));
}
