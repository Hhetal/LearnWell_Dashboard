import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";

const UserPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const users = await fetchUsers(q);

  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <Search placeholder="Search a user.." />
      <Link href="/dashboard/users/add">
      <button className={styles.addButton}>Add New</button>
      </Link>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Created At</td>
                <td>Role</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                   <Image src={user.img || "/avtar.png"}width={40} height={40} className={styles.userImage}></Image>
                   {user.username}
                </div>
            </td> 
            <td>{user.email}</td> 
            <td>{user.createdAt?.toString().slice(4,16)}</td>
            <td>{user.isAdmin ? "Admin" : "Client"}</td>
            <td>{user.isActive ? "Active" : "Passive"}</td>
            <td>
              <Link href={`/dashboard/users/${user.id}`}>
              <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link> 
               <form action={deleteUser}>
                <input type="hidden" name="id" value={(user.id)} />
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </form>
            </td>
            </tr>
              ))}
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};
export default UserPage;
