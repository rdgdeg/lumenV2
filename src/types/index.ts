export interface Notice {
  id: string;
  firstName: string;
  lastName: string;
  birthPlace: string;
  birthDate: string;
  deathPlace: string;
  deathDate: string;
  photo: string | null;
  funeralInfo: string;
  visitingInfo: string;
}

export interface NoticeFormData {
  firstName: string;
  lastName: string;
  birthPlace: string;
  birthDate: string;
  deathPlace: string;
  deathDate: string;
  photo: string | null;
  funeralInfo: string;
  visitingInfo: string;
}

export interface CondolenceMessage {
  id: string;
  noticeId: string;
  authorName: string;
  authorEmail: string;
  message: string;
  date: string;
}
