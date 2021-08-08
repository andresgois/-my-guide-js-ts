type  MapStringCallback = (item: string) => string;

// antigo
//function mapString( array: string[], callbackfn: CallableFunction): string[] {
export function mapString(
  array: string[],
  callbackfn: MapStringCallback
): string[] {
  const newArray: string[] = [];

  for(let i=0; i< array.length;i++){
    //newArray.push(callbackfn(array[i]));
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a','b','c'];
//antigo
/*const abcMap = mapString(abc, function(item: any){
const abcMap = mapString(abc, function(item: any){
  return item.toUpperCase();
});*/
const abcMap = mapString(abc, item => item.toUpperCase());

console.log(abc);
console.log(abcMap);
