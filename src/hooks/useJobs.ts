import { useState, useEffect } from 'react';
import { createDefaultJob } from '../utils/utils';
import * as constants from '../utils/constants';
import { Job, Category, CategoryFilterValues } from '../types/types';

export function useJobs() {
  const [jobDraft, setJobDraft] = useState<Job>(createDefaultJob());
  const [jobsList, setJobsList] = useState<Job[]>(() => {
    const storedJobsList = localStorage.getItem(constants.JOBS_LIST_STORAGE_KEY);
    return storedJobsList ? JSON.parse(storedJobsList) : [];
  });
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterValues>(
    constants.ALL_CATEGORIES
  );
  const filteredJobsList =
    categoryFilter === constants.ALL_CATEGORIES
      ? jobsList
      : jobsList.filter((job) => job.category === categoryFilter);

  useEffect(() => {
    localStorage.setItem(constants.JOBS_LIST_STORAGE_KEY, JSON.stringify(jobsList));
  }, [jobsList]);

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setJobsList((prevList) => [...prevList, jobDraft]);
    setJobDraft(createDefaultJob());
  }

  function handleNewJobUpdate(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { id, value } = e.target;
    const newValue = id === 'category' ? (value as Category) : value;
    setJobDraft((prevJobDraft) => ({ ...prevJobDraft, [id]: newValue }));
  }

  function handleFilterSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setCategoryFilter(e.target.value as Category);
  }

  function handleFavoriteToggle(jobID: string) {
    setJobsList((prevJobs) =>
      prevJobs.map((job) => (job.id === jobID ? { ...job, favorite: !job.favorite } : job))
    );
  }

  function handleJobDelete(jobID: string) {
    setJobsList((prevList) => prevList.filter((job) => job.id !== jobID));
  }

  return {
    jobDraft,
    setJobDraft,
    jobsList,
    setJobsList,
    categoryFilter,
    setCategoryFilter,
    filteredJobsList,
    handleFormSubmit,
    handleNewJobUpdate,
    handleFilterSelect,
    handleFavoriteToggle,
    handleJobDelete,
  };
}
