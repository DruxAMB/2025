import styles from "../styles/ResumePage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["education-section"]}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Fullstack Development</h4>
          <div>Larva Coding Academy</div>
          <div>July. 2023 - Nov. 2023</div>
        </div>
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Bsc. in Computer Science</h4>
          <div>University of the People</div>
          <div>Sept. 2023 - Present</div>
        </div>
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Rust & Anchor Development</h4>
          <div>Soleerdevs</div>
          <div>July. 2024</div>
        </div>
      </div>

      <div className={styles["work-section"]}>
        <h3 className={styles.heading}>Professional Experience</h3>
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>DegenBall's - NFT Marketplace</h4>
          <div>Remote</div>
          <div>MERN Stack Developer</div>
          <div>March 2023 - July 2024</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Kafsol Store</h4>
          <div>Remote</div>
          <div>Fullstack Developer</div>
          <div>Dec. 2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Gotocourse</h4>
          <div>Contract</div>
          <div>Instructor</div>
          <div>Jan. 2024</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Web3js</h4>
          <div>Remote</div>
          <div>Ambassador</div>
          <div>Sep. 2024 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Leadershub Workspace</h4>
          <div>Contract</div>
          <div>Hub Manager</div>
          <div>Dec. 2024 - Present</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
    return {
      props: { title: 'Resume' },
    };
}
