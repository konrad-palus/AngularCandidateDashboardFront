export interface CandidateExperience {
    id: string;
    startDate: Date;
    endDate?: Date;
    companyName: string;
    role: string;
    description?: string;
  }