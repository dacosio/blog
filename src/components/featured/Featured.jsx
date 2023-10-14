import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Discover my <b>stories</b> and creative <b>ideas.</b>
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            autem.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            adipisci velit tenetur rerum non, dicta, eos molestias harum quod
            magni ex consequuntur itaque deleniti inventore neque porro eius
            voluptatum tempore vitae doloremque corporis quisquam nam ducimus
            quaerat! Hic fugit minus amet ex, exercitationem cumque recusandae
            fugiat culpa, libero cum similique.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
