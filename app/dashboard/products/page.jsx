import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../../ui/dashboard/products/products.module.css"
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
// import sa from "./add"

const Products = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}></div>
    <Search placeholder="Search for a product.." />
    <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
    <table className={styles.table}>
      <thead>
          <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                 <Image src="/noproduct.jpg" width={40} height={40} className={styles.productImage}></Image>
                 Iphone
              </div>
          </td> 
          <td>Description</td> 
          <td>80,000</td>
          <td>23.12.2021</td>
          <td>72</td>
          <td>
            <Link href="/dashboard/products/test">
            <button className={`${styles.button} ${styles.view}`}>View</button>
            </Link>  
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
          </td>
          </tr>
      </tbody>
    </table>
    <Pagination/>
  </div>
  )
}

export default Products
