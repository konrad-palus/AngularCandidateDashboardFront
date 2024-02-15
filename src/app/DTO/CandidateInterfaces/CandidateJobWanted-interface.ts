import { PositionLevel } from "../enums/PositionLevel-enum";
import { JobType } from "../enums/JobType-enum";
import { ContractType } from "../enums/ContractType-enum";
export interface CandidateJobWanted {
    id: string;
    positionName: string;
    expectedPositionLevelList: PositionLevel[];
    jobTypeList: JobType[];
    contractTypeList: ContractType[];
    expectedWage: number;
    minimumWage?: number;
  }