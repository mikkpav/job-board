import type { Job } from '../types/types';
import * as constants from './constants';

function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Date.now().toString() + Math.random().toString(36).slice(2);
}

export function createDefaultJob(): Job {
  return {
    id: generateId(),
    title: '',
    company: '',
    category: constants.categories[0],
    description: '',
    location: '',
    favorite: false,
  };
}

export function isJobDraftValid(job: Job): boolean {
  return (
    job.title.trim() !== '' &&
    job.company.trim() !== '' &&
    job.category.trim() !== undefined &&
    job.description.trim() !== '' &&
    job.location.trim() !== ''
  );
}