function toGMLSample() {
  var contents = '<?xml version="1.0" encoding="UTF-8"?>\n <graphml xmlns="http://graphml.graphdrawing.org/xmlns"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd">';
  contents += '<graph id="G" edgedefault="undirected">';
  contents +=
    '<node id="n0"/>\n<node id="n1"/>\n<edge id="e1" source="n0" target="n1"/>\n';
  contents += '</graph>\n</graphml>';
  return contents;
}



