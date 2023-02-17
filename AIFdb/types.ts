export interface AIFdb {
    nodes:     Node[];
    edges:     Edge[];
    locutions: Locution[];
}

export interface Edge {
    edgeID:     string;
    fromID:     string;
    toID:       string;
    formEdgeID: null;
}

export interface Locution {
    nodeID:    string;
    personID:  string;
    timestamp: Date;
    start:     null;
    end:       null;
    source:    null;
}

export interface Node {
    nodeID:    string;
    text:      string;
    type:      Type;
    timestamp: Date;
}

export type Type = "L" | "I" | "RA";
