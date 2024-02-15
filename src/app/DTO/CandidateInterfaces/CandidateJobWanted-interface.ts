export interface CandidateJobWanted {
    id: string;
    positionName: string;
    expectedPositionLevelList: PositionLevel[];
    jobTypeList: JobType[];
    contractTypeList: ContractType[];
    expectedWage: number;
    minimumWage?: number;
  }