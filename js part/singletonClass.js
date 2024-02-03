class SingletonForURL {

     constructor (){
        if(!SingletonForURL._instance){ 
            this._URL = "https://jsonplaceholder.typicode.com/posts";
            SingletonForURL._instance = this;     
       }
     return SingletonForURL._instance;
    }
     async  getSingletonForURL (){
            let fetchedData = await fetch(this._URL) ;
            let data = await fetchedData.json();
       
            return data
    }

   

    async groupBy(someKey){

        let fetchedData = await fetch(this._URL) ;
        let data = await fetchedData.json();
        let 
       variants = []

       let res = data.forEach((element) => {
         variants.push(element[someKey])
       });

       let counted = new Set(...[variants])
       console.log(counted)
       let countedToArr = [...counted]
       
       
       let resObject = {};

       countedToArr.forEach((element) => resObject[element]=[])
       console.log(resObject)
       let finalResult = [];

       data.forEach((element) => resObject[element[someKey]].push({someKey:element[someKey]}) )
       console.log(resObject)
  
    }
}



const url1 = new SingletonForURL();
const url2 = new SingletonForURL();
console.log(url1===url2)
console.log(url1.getSingletonForURL())

console.log(url1.groupBy("userId"))

