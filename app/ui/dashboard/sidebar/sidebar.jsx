import Styles from "./sidebar.module.css";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdSettings,
    MdHelp,
    MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink"; 
import Image from "next/image";


const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Course",
                path: "/dashboard/course",
                icon: <MdShoppingBag />,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
        ],
    },
    {
        title: "Account",
        list: [
          {
            title: "Settings",
            path: "/dashboard/settings",
            icon: <MdSettings />,
          },
          {
            title: "Help",
            path: "/dashboard/help",
            icon: <MdHelp />,
          },
        ],
      },
    ];
  

const Sidebar = ( ) => {
    return (
        <div className={Styles.container}>
<div className={Styles.user}>
<Image className={Styles.userImage} src="/avtar.png" alt="not founfd" width={50} height={50} />
<div className={Styles.userDetail}>
<span className={Styles.username}>HETAL SATHALIYA</span>
<span className={Styles.userTitle}>Administrator</span>
</div>
</div>
        <ul className={Styles.list}>
            {menuItems.map((cat) => (
            <li key={cat.title}>
            <span className={Styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
            <MenuLink item={item} key={item.title} />
            ))}
        </li>
        ))}
        </ul>
        <button className={Styles.logout}> <MdLogout />Logout</button>
       
        </div>
         );
    };
    export default Sidebar;

