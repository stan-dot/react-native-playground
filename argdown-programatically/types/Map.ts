import { RelationType, EdgeType } from "./enums";

export interface Map {
    nodes: Node[];
    edges: Edge[];
}

export interface Edge {
    id: string;
    type: EdgeType;
    relationType: RelationType;
    from: string;
    to: string;
    fromEquivalenceClass?: string;
    toEquivalenceClass?: string;
}

export interface Node {
    id: string;
    tags?: string[];
    title: string;
    type: string;
    color: string;
    fontColor: string;
    level?: number;
    labelTitle?: string;
    children?: Node[];
    labelText?: string;
}
