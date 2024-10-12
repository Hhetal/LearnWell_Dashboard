
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer";
const layout = ({ children }) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.menu}>
                <Sidebar/>

            </div>
            <div className={Styles.content}>
                <Navbar />
                {children}
                <Footer/>
            </div>
        </div>
    );
}
export default layout