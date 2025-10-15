// Upload Tracking Service
// Tracks user uploads and subscription status using localStorage

const STORAGE_KEY = 'pptx-converter-data';
const FREE_UPLOAD_LIMIT = 3;

interface UserData {
  uploadCount: number;
  isPremium: boolean;
  lastUploadDate: string;
  subscriptionDate?: string;
}

const getDefaultUserData = (): UserData => ({
  uploadCount: 0,
  isPremium: false,
  lastUploadDate: new Date().toISOString(),
});

export const getUserData = (): UserData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return getDefaultUserData();
    }
    return JSON.parse(stored) as UserData;
  } catch (error) {
    console.error('Error reading user data:', error);
    return getDefaultUserData();
  }
};

export const saveUserData = (data: UserData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const getRemainingUploads = (): number => {
  const data = getUserData();
  if (data.isPremium) {
    return Infinity;
  }
  return Math.max(0, FREE_UPLOAD_LIMIT - data.uploadCount);
};

export const canUpload = (): boolean => {
  return getRemainingUploads() > 0;
};

export const incrementUploadCount = (): void => {
  const data = getUserData();
  data.uploadCount += 1;
  data.lastUploadDate = new Date().toISOString();
  saveUserData(data);
};

export const setPremiumStatus = (isPremium: boolean): void => {
  const data = getUserData();
  data.isPremium = isPremium;
  if (isPremium && !data.subscriptionDate) {
    data.subscriptionDate = new Date().toISOString();
  }
  saveUserData(data);
};

export const isPremiumUser = (): boolean => {
  const data = getUserData();
  return data.isPremium;
};

export const resetUserData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getFreeUploadLimit = (): number => {
  return FREE_UPLOAD_LIMIT;
};
