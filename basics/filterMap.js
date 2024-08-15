const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach((it)=>{
  //  console.log(it) // only prints dont return
})

const arr =[1,2,3,4,5,6,7] ;
// to return something use filter loop)

let result = arr.filter((it)=>{
    if(1) return it;
})
//console.log(result);

let ans=[];
arr.filter((it)=>{
    if(it%3==1)
    {
        ans.push(it);
    } 
})
//console.log(ans);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks =[];
  books.filter((bk)=> {
   // if(bk.genre=='History') userBooks.push(bk.title)
  })
//console.log(userBooks);

books.filter((it)=>{
  //  if(it.publish>=1995 && it.genre=='History') userBooks.push(it)
})
// console.log(userBooks);
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*const s=myNumers.map((n)=>
{
    userBooks.push(n+10)
    return n;
}) ;
console.log(userBooks);
console.log(s);
*/
let array=myNumers
                  .map((num)=> num*10)
                  .map((num)=> num+11)
                  .filter((num)=> num>22) ;
//console.log(array);

// reduce method  

const res=myNumers.reduce(function(acc,curr) {
    return acc+curr ;
},100) // value of accumlator 
const res1=myNumers.reduce((acc,curr)=>acc+curr,0)
//console.log(res);
//console.log(res1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const price=shoppingCart.reduce((acc,item) => acc+item.price ,0);
console.log(price);