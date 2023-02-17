import  {Role, SectionEnum, RelationType, EntityType } from "./enums";
import { StatementFlags, TextCoordinates, Styling } from "./flattable";
import { Map } from "./Map";


export interface  Statement{
    type:                      EntityType;
    title:                     string;
    relations:                 Relation[];
    members:                   Member[];
    section:                   SectionEnum;
    flags:                     StatementFlags;
    fontColor:   string;
    color:       string;
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
    type:           EntityType;
    role:           Role;
    text?:          string;
   textCoordinates: TextCoordinates;
    pcs?:           Member[];
    section:        SectionEnum;
    title:          string;
    ranges?:        Range[];
    tags?:          string[];
    isTopLevel?:    boolean;
    isReference?:   boolean;
    argumentTitle?: string;
    inference?:     Inference;
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
    type:         EntityType;
    relationType: RelationType;
    from:         string;
    fromType:     EntityType;
    to:           string;
    toType:       EntityType;
}

export interface Argument {
    type:        EntityType;
    relations:   Relation[];
    members:     Member[];
    pcs:         Member[];
    title:       string;
    tags:        string[];
    section:     SectionEnum;
    textCoordinates: TextCoordinates;
    styling: Styling;
}

export interface SectionElement {
    type:        string;
    id:          SectionEnum;
    level:       number;
    title:       string;
    children:    SectionElement[];
    ranges:      Range[];
    textCoordinates: TextCoordinates;
    styling: Styling;
    isGroup:     boolean;
    parent?:     SectionEnum;
}

export interface Tag {
    tag:             string;
    cssClass:        string;
    occurrenceIndex: number;
    color:           string;
}
