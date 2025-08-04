import './styles/App.css';
import './styles/index.css';
import styles from './components/EntryForm.module.css';
import EntryForm from './components/EntryForm';
import JobsList from './components/JobList';
import CategoryFilter from './components/CategoryFilter'; 
import { useJobs } from './hooks/useJobs';

function App() {
  const {
    jobDraft,
    handleFormSubmit,
    handleNewJobUpdate,
    categoryFilter,
    handleFilterSelect,
    filteredJobsList,
    handleFavoriteToggle,
    handleJobDelete
  } = useJobs();

  return (
    <div className='container'>
      <div className={styles.formContainer}>
        <EntryForm
          jobDraft={jobDraft}
          formEntryHandler={handleFormSubmit}
          jobUpdateHandler={handleNewJobUpdate}
        />
        <CategoryFilter
          selectedCategoryFilter={categoryFilter}
          categoryFilterHandler={handleFilterSelect}
        />
      </div>
      <JobsList 
        jobsList={filteredJobsList} 
        favoriteToggleHandler={handleFavoriteToggle} 
        jobDeleteHandler={handleJobDelete} />
    </div>
  );
}

export default App;
