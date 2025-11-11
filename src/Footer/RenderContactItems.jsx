import { useTranslation } from "react-i18next";

export default function RenderContactItems({ data }) {
  const { t } = useTranslation("footer");
  return data.map(({ svg, text }, key) => (
    <div className="mb-3 flex items-center gap-2" key={key}>
      <div className="size-8 overflow-hidden rounded-full bg-apple-500 p-2">
        {svg}
      </div>
      <div>
        <span className="text-xs capitalize text-gray-200">{t(text)}</span>
      </div>
    </div>
  ));
}
