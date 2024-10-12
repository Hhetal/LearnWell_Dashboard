import React from 'react'
import styles from "../../../ui/dashboard/products/singleproduct/singleProduct.module.css"
import Image from 'next/image'

const SingleProductPage = () => {   //VIEW
  return (
    <div className={styles.Container}>
      <div className={styles.infoContainer}>
        {/* img & userInfo */}
        <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="NOT FOUND"  fill />  
        </div>
        <div>
          <h2>Apple iphone</h2>
          {/* <p>Admin</p> */}
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <label>Title</label>
        <input type="text" name="title" placeholder='title'/>

        <label>Price</label>
        <input type="text" name="price" placeholder='2327'/>

        <label>Stock</label>
        <input type="text" name="stock" placeholder='34'/>

        <label>Color</label>
        <input type="text" name="color" placeholder='red'/>

        <label>Size</label>
        <textarea type="text" name="size" placeholder='Gujarat'/>

        <label>Category</label>
        <select name="cat" id="cat">
            <option value='kitchen'>Kitchen</option>
            <option value='computer'>Computer</option>
        </select>

        <label>Description</label>
        <textarea type="text" id='desc' name="desc" placeholder='description' rows='10'/>

        
        <button>Update</button>
        </form>
      </div>
    </div>
   
  )
}

export default SingleProductPage
