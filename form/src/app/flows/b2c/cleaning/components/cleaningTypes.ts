export type CleaningUserScenario = "moving" | "general";

export interface CleaningLocationData {
  address: string;
  detailAddress: string;
  roomCount: string;
  verandaCount: string;
  bathroomCount: string;
  isDuplex: boolean | null;
  hasBelongings: boolean | null;
  needsRemodelCleaning: boolean | null;
}

export interface CleaningContactData {
  name: string;
  phonePrefix: string;
  phoneNumber: string;
  phoneVerified: boolean;
}

export interface CleaningFormData {
  cleaningDate: Date | null;
  cleaningTime: string[];
  location: CleaningLocationData;
  contact: CleaningContactData;
  additionalMemo: string;
}
