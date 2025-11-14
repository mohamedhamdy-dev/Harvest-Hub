import BreadCrumb from "../shared/BreadCrumb";
import { Link, Outlet } from "react-router-dom";

function Account() {
  return (
    <div className="mb-16 min-h-[852px]">
      <BreadCrumb />
      <main className="container mx-auto">
        <div className="flex gap-3 px-2">
          {/* aside  */}
          <div className="hidden h-fit flex-shrink-0 flex-grow-0 basis-[22%] overflow-hidden lg:block">
            <Link to="offer">
              <img
                src="../ads/ad1.jpg"
                className="w-full rounded-2xl duration-300 hover:scale-110"
              />
            </Link>
          </div>
          {/* account */}
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Account;
