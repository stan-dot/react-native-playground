export type Styling = {
    fontColor: string;
    color: string;
};


export type TextCoordinates={
    startLine:       number;
    startColumn:     number;
    endLine:         number;
    endColumn:       number;
}



export type StatementFlags={
    isUsedAsRelationStatement: boolean;
    isUsedAsPremise: boolean;
    isUsedAsIntermediaryConclusion: boolean;
    isUsedAsTopLevelStatement: boolean;
    isUsedAsMainConclusion:         boolean;
}