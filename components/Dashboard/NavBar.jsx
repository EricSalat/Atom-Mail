import styles from "../../styles/MailStatistic.module.css";
import NavBarButton from "./NavBarButton";
import { MdEmail } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlinePieChart, AiOutlineFolder, AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";





export default function NavBar() {
  return(
    
    <div className={`${"bg-white"} ${"px-4"} ${"py-3"} ${styles["nav-bar"]}`}>
      <div className="d-flex">
        {/* <MdEmail /> */}
        <p className="py-3">AtomMail</p>
      </div>
      <div>
        <p className={`${"text-uppercase"} ${"text-start"} ${"highlight-text"} ${styles["tab-button-title"]}`}>Analyics</p>
        <NavBarButton icon={<AiOutlinePieChart size="20" />} text="Performance" />
        <NavBarButton icon={<TbLayoutDashboard size="20" />} text="Dashboard" />
      </div>
      <div>
        <p className={`${"text-uppercase"} ${"text-start"} ${"highlight-text"} ${styles["tab-button-title"]}`}>Master</p>
        <NavBarButton icon={<AiOutlineUsergroupAdd size="20" />} text="Groups" />
        <NavBarButton icon={<AiOutlineFolder size="20" />} text="Files" />
      </div>
      <div>
      <NavBarButton icon={<TbLogout size="20" />} text="Log Out" />
      </div>
    </div>
    );
}