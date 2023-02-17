import { MemberType, Role, SectionEnum, PurpleType, RelationType, FromTypeEnum } from "./enums";
import { Map } from "./Map";


// todo need to flatten this
type StatementFlags={
    isUsedAsRelationStatement: boolean;
    isUsedAsPremise: boolean;
    isUsedAsIntermediaryConclusion: boolean;
    isUsedAsTopLevelStatement: boolean;
    isUsedAsMainConclusion:         boolean;
}

export interface  Statement{
    type:                      FromTypeEnum;
    title:                     string;
    relations:                 Relation[];
    members:                   Member[];
    section:                   SectionEnum;
    flags:                     StatementFlags;
    fontColor:                 string;
    color:                     string;
    tags:                      string[];
}
// todo need to transform into JSON using the title as JSON object name

export interface ArgDownObject {
    arguments:  Argument[];
    statements: Statement[];
    relations:  Relation[];
    map:        Map;
    sections:   SectionElement[];
    tags:       Tag[];
}

export interface Member {
    type:           MemberType;
    role:           Role;
    text?:          string;
   textCoordinates: TextCoordinates;
    isTopLevel?:    boolean;
    section:        SectionEnum;
    title:          string;
    ranges?:        Range[];
    tags?:          string[];
    isReference?:   boolean;
    pcs?:           Member[];
    argumentTitle?: string;
    inference?:     Inference;
}

// todo need to flatten this
type TextCoordinates={
    startLine:       number;
    startColumn:     number;
    endLine:         number;
    endColumn:       number;
}

export interface Inference {
    type:            string;
    relations:       Relation[];
    inferenceRules:  string[];
    textCoordinates: TextCoordinates;
    data:            Data;
    conclusionIndex: number;
    argumentTitle:   string;
}

export interface Data {
    someAdditionalData: number[];
}

export interface Range {
    type:   string;
    title?: string;
    start:  number;
    stop:   number;
    tag?:   string;
    url?:   string;
}

export interface Relation {
    type:         PurpleType;
    relationType: RelationType;
    from:         string;
    fromType:     FromTypeEnum;
    to:           string;
    toType:       FromTypeEnum;
}

export interface Argument {
    type:        FromTypeEnum;
    relations:   Relation[];
    members:     Member[];
    pcs:         Member[];
    title:       string;
    tags:        string[];
    section:     SectionEnum;
    textCoordinates: TextCoordinates;
    fontColor:   string;
    color:       string;
}

export interface SectionElement {
    type:        string;
    id:          SectionEnum;
    level:       number;
    title:       string;
    children:    SectionElement[];
    ranges:      Range[];
    textCoordinates: TextCoordinates;
    fontColor:   string;
    color:       string;
    isGroup:     boolean;
    parent?:     SectionEnum;
}

export interface Tag {
    tag:             string;
    cssClass:        string;
    occurrenceIndex: number;
    color:           string;
}
