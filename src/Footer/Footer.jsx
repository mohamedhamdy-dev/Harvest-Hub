import { motion } from "motion/react";
import { informationData, myAccountData, myContactData } from "./FooterData";
import FooterBottom from "./FooterBottom";
import FooterMobileDropDown from "./FooterMobileDropDown";
import RenderFooterLinks from "./RenderFooterLinks";
import RenderContactItems from "./RenderContactItems";
import { contactInfoVariants } from "../motion/variants";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-[url(/footer/footer.jpg)] bg-[100%_100%]">
      <div className="absolute h-full w-full bg-black/45"></div>
      <div className="container relative mx-auto px-4 lg:py-4">
        <div className="relative py-8">
          <div className="absolute -top-6 left-1/2 size-12 -translate-x-1/2 rounded-full bg-green-800 p-[6px] lg:-top-10">
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
                viewBox="0 0 256 256"
              >
                <path d="M124.24,140.24h0l21.09-21.09a58,58,0,0,0,26.49,6.79A47.55,47.55,0,0,0,196.67,119c23.07-14,35.42-46.53,33-87.09a6,6,0,0,0-5.64-5.64c-40.56-2.38-73.12,10-87.09,33-9.22,15.22-9.2,33.71-.14,51.35L120,127.51l-14.64-14.63c6.32-13,6.15-26.6-.67-37.86C94.21,57.72,70,48.44,39.85,50.21a6,6,0,0,0-5.64,5.64C32.44,86,41.72,110.2,59,120.69A36.23,36.23,0,0,0,78,126a43.4,43.4,0,0,0,18.93-4.6L111.51,136l-10,10H56a6,6,0,0,0,0,12H67.18l13.57,61a13.91,13.91,0,0,0,13.67,11h67.17a13.91,13.91,0,0,0,13.66-11l13.57-61H200a6,6,0,0,0,0-12H118.48l5.76-5.76Zm23-74.7c11-18.22,37.24-28.33,70.72-27.5.83,33.47-9.28,59.68-27.5,70.72-12.3,7.44-27.09,6.92-41.79-1.43C140.31,92.63,139.79,77.84,147.24,65.54Zm-53.66,44c-10,5.56-20,5.87-28.34.84C52.78,102.87,45.75,85,46,62c23-.29,40.88,6.78,48.42,19.24C99.45,89.54,99.14,99.56,93.58,109.58ZM176.52,158l-13,58.43a2,2,0,0,1-1.95,1.57H94.42a2,2,0,0,1-2-1.57L79.48,158Z"></path>
              </svg>
            </Link>
          </div>
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="basis-1/4 pl-3">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Harvest Hub Logo"
                className="size-40"
              />

              <p className="mt-5 text-white">
                Harvest Hub – Connecting farmers with quality equipment,
                supplies, and resources for a smarter, more sustainable future.
                🌱
              </p>
            </div>

            <div className="mt-4 lg:hidden">
              <FooterMobileDropDown
                dataCategory={"information"}
                data={informationData}
                type={"links"}
              />
              <FooterMobileDropDown
                dataCategory={"my Account"}
                data={myAccountData}
                type={"links"}
              />
              <FooterMobileDropDown
                dataCategory={"contact info"}
                data={myContactData}
              />
            </div>
            {/* Desktop Footer  */}
            <motion.section
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hidden basis-1/5 lg:block"
            >
              <h3 className="mb-3 uppercase text-gray-200">information</h3>
              <div>
                <RenderFooterLinks data={informationData} />
              </div>
            </motion.section>
            <motion.section
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hidden basis-1/5 lg:block"
            >
              <h3 className="mb-3 uppercase text-gray-200">my account</h3>
              <div>
                <RenderFooterLinks data={myAccountData} />
              </div>
            </motion.section>
            <motion.section
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hidden basis-1/4 lg:block"
            >
              <h3 className="mb-3 uppercase text-gray-200">contact info</h3>
              <div>
                <RenderContactItems data={myContactData} />
              </div>
            </motion.section>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
