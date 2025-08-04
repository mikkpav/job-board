import styles from './JobList.module.css';
import type { Job } from '../types/types';
import FavoriteOnIcon from '../assets/favoriteOn.png?url';
import FavoriteOffIcon from '../assets/favoriteOff.png?url';
import CloseIcon from '../assets/close.png?url';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

type JobsListProps = {
  jobsList: Job[];
  favoriteToggleHandler: (jobID: string) => void;
  jobDeleteHandler: (jobID: string) => void;
};

export default function JobsList({ 
  jobsList, 
  favoriteToggleHandler, 
  jobDeleteHandler 
}: JobsListProps) {
  const favoriteCount = jobsList.filter((job) => job.favorite).length;

  return (
    <div className={styles.jobListContainer}>
      <p className={styles.favoriteCount}>
        <img src={FavoriteOnIcon} alt='favoriteIcon'/> {favoriteCount}
      </p>
      <div className={styles.jobList}>
        <AnimatePresence>
          {jobsList.map((job) => (
            <motion.div 
              key={job.id} 
              className={styles.jobListItem}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}>
              <div className={styles.header}>
                <p className={styles.title}>{job.title}</p>
                <button 
                  className={classNames(styles.headerButton, styles.closeButton)}
                  onClick={() => jobDeleteHandler(job.id)}>
                  <img src={CloseIcon} alt='Delete job'
                  ></img>
                </button>
                <button
                  onClick={() => favoriteToggleHandler(job.id)}
                  aria-pressed={job.favorite}
                  className={`${styles.headerButton} ${styles.favoriteButton}`}
                >
                  <img 
                    src={job.favorite ? FavoriteOnIcon : FavoriteOffIcon}
                    alt='Delete job'></img>
                </button>
              </div>
              <dl>
                <div className={styles.valueLabelPair}>
                  <dt>Company</dt>
                  <dd>{job.company}</dd>
                </div>
                <div className={styles.valueLabelPair}>
                  <dt>Category</dt>
                  <dd>{job.category}</dd>
                  </div>
                <div className={styles.valueLabelPair}>
                  <dt>Description</dt>
                  <dd>{job.description}</dd>
                  </div>
                <div className={styles.valueLabelPair}>
                  <dt>Location</dt>
                  <dd>{job.location}</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
