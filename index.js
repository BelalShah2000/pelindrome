
function palindrome(str){
  let del=/[\W_]/g;


let firstStr=str.toLowerCase().replace(del ,"")

let reversStr=firstStr.split('').reverse().join('')

if(firstStr===reversStr){
  return true

}else{
  return false
}


}


console.log(palindrome("My age is 0, 0 si ega ym."));