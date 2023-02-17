

export function createArgument():ArgDownObject {
  const object: ArgDownObject = {
    arguments: [],
    statements: [],
    relations: [],
    map: undefined,
    sections: [],
    tags: []
  };

}


// todo functions that are needed - full CRUD


export function translateToText(o: ArgDownObject): string{
  return "";

}


// todo as you only modify some directly, the rest needs to update 
export function updateToKeepCoherence():ArgDownObject {

}


export function addArgument(a: Argument, object: ArgDownObject):ArgDownObject {

}

export function addStatement(s: Statement, object: ArgDownObject): ArgDownObject{

}

