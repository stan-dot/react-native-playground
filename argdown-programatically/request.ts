import {argdown} from "@argdown/node";
import {SaysWhoPlugin, IArgdownRequest} from "@argdown/core";

argdown.addPlugin(new SaysWhoPlugin(), "add-proponents");
argdown.defaultProcesses["say-who-map"]: [
  "parse-input", // parses them (response.ast)
  "build-model", // builds the data model (response.arguments, response.statements...)
  "build-map", // creates the map (response.map)
  "add-proponents", // our new processor with the SaysWhoPlugin
  "export-dot", // exports the map into dot format
  "export-svg" // exports the dot file into svg format
];

// Here is our example debate from before again:
const input = `
# Section 1

<a>: Quack! {proponent: Donald Duck}
    - <b>
    + <c>

## Section 2

<b>: D'oh! {proponent: Homer Simpson}

<c>: Pretty, pretty, pretty, pretty good. {proponent: Larry David}
`;

// We have to create a request with the input and our process
const request:IArgdownRequest = {
    input,
    process: "says-who-map"
}
// Now we can run our request and hopefully we will get the svg data back:
const response = argdown.run(request);
console.log(response.svg);


// https://argdown.org/guide/using-argdown-in-your-application.html