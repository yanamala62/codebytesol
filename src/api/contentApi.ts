import type { ContentData, PageData } from '../types';
import rawContent from '../data/content.json';

const content = rawContent as ContentData;

export async function fetchSitePayload(): Promise<ContentData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(content), 120);
  });
}

export async function fetchRoutes() {
  const data = await fetchSitePayload();
  return data.routes ?? [];
}

export async function fetchNavigation() {
  const data = await fetchSitePayload();
  return data.navigation ?? [];
}

export async function fetchPageByKey(pageKey: string): Promise<PageData | null> {
  const data = await fetchSitePayload();
  return data.pages?.[pageKey] ?? null;
}

export async function fetchAllContent(): Promise<ContentData> {
  return fetchSitePayload();
}

export async function fetchServices() {
  const data = await fetchSitePayload();
  return data.services ?? [];
}

export async function fetchIndustries() {
  const data = await fetchSitePayload();
  return data.industries ?? [];
}

export async function fetchUseCases() {
  const data = await fetchSitePayload();
  return data.useCases ?? [];
}

export async function fetchTechStack() {
  const data = await fetchSitePayload();
  return data.techStack ?? [];
}
