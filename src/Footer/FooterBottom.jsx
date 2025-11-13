import FooterLinks from "./FooterLinks";

export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-3 border-b-2 border-t-2 border-gray-200 py-2 md:flex-row">
      <FooterLinks />
      <div>
        <img
          src={`${import.meta.env.BASE_URL}footer/payment.png`}
          alt="payment methods"
        ></img>
      </div>
    </div>
  );
}
