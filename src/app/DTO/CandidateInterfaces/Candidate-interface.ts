import { ImportantSites } from "../SharedInterfaces/ImportantSites-interface";
import { CandidateEducation } from "./CandidateEducation-interface";
import { CandidateExperience } from "./CandidateExperience-interface";
import { CandidateJobWanted } from "./CandidateJobWanted-interface";
import { CandidateSkills } from "./CandidateSkills-interface";

export interface Candidate {
    id: string;
    about?: string;
    candidateEducations?: CandidateEducation[];
    candidateExperience?: CandidateExperience[];
    candidateSkills?: CandidateSkills[];
    importantSites?: ImportantSites[];
    candidateJobWanted?: CandidateJobWanted[];
  }