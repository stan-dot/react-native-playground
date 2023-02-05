type Logic = {
  name: string;
  operators: Operator[]
}
type DocumentMetadata = {
  title: string,
  completed:boolean,
  verisimilitude: number,
  public:boolean,
  statements: string[],
  logicType: string,
  baseScroll: string,
};

type ClassicalVeracity = boolean
type Veracity = string |  ClassicalVeracity
const ClassicalVeracities: ClassicalVeracity[] = [true, false];

type Operator = {
  name: string;
  symbol: string;
  action: (v1:string, v2:string)=> Veracity
}

const NF_CLASSICAL: Logic = {
  name: "Quine's new foundations of logic",
  operators: construe_classical_nf_operators()
}

function construe_classical_nf_operators(): Operator[]{
  let operators: Operator[] = [];
  return operators;
  //test[0]=("∈", "Inclusion", inclusion);
  // const nand: Operator = {
  //   symbol: 'NAND',
  //   name: 'Alternative denial',
  //   action: (v1, v2) => 'true'
  // };

  // const altDenial = (first: boolean, second: boolean) => {
  //   if (first === true && second === true) {
  //     return false;
  //   }
  //   return true;
  // };
  // const membership = (first: any, second: any) => {
  // };

  // const universalQuantification = (array: any[], formula: (arg0: any) => any) => {
  //   array.forEach((item: any, i: any) => {
  //     if (!formula(item)) {
  //       return false;
  //     }
  //   });
  //   return true;
  // };



  // //D1
  // var denial = (first: any) => {
  //   return altDenial(first, first);
  // };

  // test[0]=('NOT', 'Denial', denial);

  // //D2
  // var conjunction = (first: any, second: any) => {
  //   return denial(altDenial(first, second));
  // };
  // test[0]=('AND', 'Conjuncion', conjunction);

  // //D3
  // var materialConditional = (first: any, second: any) => {
  //   return altDenial(first, denial(second));
  // };
  // test[0]=('IMPLY', 'Material condition', materialConditional);

  // //D4
  // var alternation = (first: any, second: any) => {
  //   return materialConditional(denial(first), second);
  // };
  // test[0]=('OR', 'Alternation', alternation);

  // //D5
  // var materialBiconditional = (first: any, second: any) => {
  //   return altDenial(altDenial(first, second), alternation(first, second));
  // };
  // test[0]=('<=>', 'Material biconditional', materialBiconditional);

  // //D6
  // var existentialQuantification = (predicate: any, array: any) => {
  //   //return (!forAll(array, predicate)); here quite problematic
  //   return !universalQuantification(array, !predicate);
  // };
  // test[0]=('bigE', 'Existential quantification', existentialQuantification);


  // //D7
  // var supplementInclusionD7 = ((first: any, second: any) => {
  //   return true;
  // });

  // //D11
  // var supplementAbstractionD11 = ((condition: (arg0: any) => any, array: any[]) => {
  //   var result = [];
  //   array.forEach((item: any, i: any) => {
  //     if(condition(item){
  //       result.push(item);
  //     })
  //   });
  //   return result;
  // });


}
    