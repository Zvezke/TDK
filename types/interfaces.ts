export interface IAuthStore {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
  isValid: boolean;
}

export interface Test {
  record: AuthRecord;
  token: string;
}

export interface AuthRecord {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
}

export interface ParamsProps {
  lang: string;
}

export interface NavbarProps {
  params: ParamsProps;
  about: string;
  audition: string;
  contact: string;
}
