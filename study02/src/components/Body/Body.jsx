import Side from './components/Side/Side';
import Section from './components/Section/Section';

import styles from './Body.module.css';
const Body = () => {
    return <div className={styles.body}>
        <Side/>
        <Section/>
      </div>
  };

  export default Body;