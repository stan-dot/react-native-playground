// http://www.aifdb.org/json/1238

export interface Node {
  nodeID: string;
  text: string;
  type: string;
  timestamp: string;
}

export interface Edge {
  edgeID: string;
  fromID: string;
  toID: string;
  formEdgeID?: any;
}

export interface Locution {
  nodeID: string;
  personID: string;
  timestamp: string;
  start?: any;
  end?: any;
  source?: any;
}

export interface RootObject {
  nodes: Node[];
  edges: Edge[];
  locutions: Locution[];
}
