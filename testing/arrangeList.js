let newList=[];
 
let buttonKeyPlaceHolder = [
   //max:k-47
   {
     id: "k-46",
     text: "shift",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-12",
     text: "sin",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-13",
     text: "cos",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-47",
     text: "tan",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-14",
     text: "sec",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-15",
     text: "cosec",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-16",
     text: "cot",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-32",
     text: "inv(sin)",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-33",
     text: "inv(cos)",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-34",
     text: "inv(tan)",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-35",
     text: "inv(sec)",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-36",
     text: "inv(cosec)",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-37",
     text: "inv(cot)",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-38",
     text: "+",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-39",
     text: "-",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-40",
     text: "*",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-41",
     text: "/",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-42",
     text: "backspace",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-43",
     text: "CE",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-44",
     text: "C",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-17",
     text: "inv",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-18",
     text: "log",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-7",
     text: "7",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-8",
     text: "8",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-9",
     text: "9",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-19",
     text: "ln",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-20",
     text: "10^x",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-21",
     text: "hyp",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-22",
     text: "^",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-24",
     text: "pi",
     isActive: true,
     isVisible: true,
   },

   {
     id: "k-4",
     text: "4",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-5",
     text: "5",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-6",
     text: "6",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-25",
     text: "e",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-30",
     text: "e^x",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-31",
     text: "mod",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-26",
     text: "x^2",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-28",
     text: "x^3",
     isActive: true,
     isVisible: true,
   },

   {
     id: "k-1",
     text: "1",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-2",
     text: "2",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-3",
     text: "3",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-27",
     text: "sqrt",
     isActive: true,
     isVisible: true,
   },
   {
     id: "k-29",
     text: "x!",
     isActive: true,
     isVisible: true,
   },

   {
     id: "k-23",
     text: "abs",
     isActive: true,
     isVisible: true,
   },

   {
     id: "k-0",
     text: "0",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-10",
     text: ".",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
   {
     id: "k-11",
     text: "=",
     isActive: true,
     isVisible: true,
     isBigSize: true,
   },
 ];

 buttonKeyPlaceHolder.forEach((item,index)=>{
   console.log({
     id: `k-${index}`,
     text: item.text,
     isActive: item.isActive,
     isVisible: item.isVisible,
     isBigSize: item.isBigSize,
   },)
   console.log(',');
 });

 //console.log(newList);