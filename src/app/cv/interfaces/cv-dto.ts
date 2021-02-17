export interface CvDTO {
    title?: string;
    fullName?: string;
    age?: number;
    phone?: string;
    address?: string;
    linkedin?: string;
    photo?: string;
    email?: string;
    experiences?: Array<ExperienceDTO>;
    educations?: Array<EducationDTO>;
    interests?: Array<InterestDTO>;
    skills?: Array<SkillsDTO>;
    languages?: Array<LanguageDTO>;

}

export interface ExperienceDTO extends GenericDTO {
    title: string;
    company: string;
    skills: Array<string>;
    tasks: Array<TasksDTO>;
}

export interface TasksDTO {
    label: string;
}

export interface EducationDTO extends GenericDTO {
    label: string;
    institute: string;
}

export interface SkillsDTO {
    label: string;
}

export interface InterestDTO {
    label: string;
}

export interface LanguageDTO {
    label: string;
    level: string;
}

export interface GenericDTO {
    dateFrom: Date;
    dateTo: Date;
}