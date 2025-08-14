import type { Job } from '../types/types';
import { categories } from '../utils/constants';
import styles from './EntryForm.module.css';
import sharedStyles from '../styles/SharedStyles.module.css';
import { isJobDraftValid } from '../utils/utils';

type EntryFormProps = {
  jobDraft: Job;
  formEntryHandler: (e: React.FormEvent) => void;
  jobUpdateHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export default function EntryForm({
  jobDraft,
  formEntryHandler,
  jobUpdateHandler,
}: EntryFormProps) {
  return (
    <div>
      <form className={styles.form} onSubmit={formEntryHandler}>
        <label htmlFor="title">Title</label>
        <input
          className={styles.input}
          id="title"
          type="text"
          onChange={jobUpdateHandler}
          value={jobDraft.title}
        />

        <label htmlFor="company">Company</label>
        <input
          className={styles.input}
          id="company"
          type="text"
          onChange={jobUpdateHandler}
          value={jobDraft.company}
        />

        <label htmlFor="category">Category</label>
        <select
          className={sharedStyles.select}
          id="category"
          onChange={jobUpdateHandler}
          value={jobDraft.category}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="description">Description</label>
        <input
          className={styles.input}
          id="description"
          type="text"
          onChange={jobUpdateHandler}
          value={jobDraft.description}
        />

        <label htmlFor="location">Location</label>
        <input
          className={styles.input}
          id="location"
          type="text"
          onChange={jobUpdateHandler}
          value={jobDraft.location}
        />

        <button className={styles.button} type="submit" disabled={!isJobDraftValid(jobDraft)}>
          Submit
        </button>
      </form>
    </div>
  );
}
