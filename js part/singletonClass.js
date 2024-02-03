class SingletonForURL {

     constructor (){
        if(!SingletonForURL._instance){ 
            this._URL = "https://jsonplaceholder.typicode.com/posts";
            SingletonForURL._instance = this;     
       }
    else return SingletonForURL._instance;
    }

    async getSingletonForURL (){
            let fetchedData = await fetch(this._URL) ;
            let data = await fetchedData.json();
        //   console.log(data)
            return data
    }

    //   getSingletonForURL (){
    //        return  fetch("https://jsonplaceholder.typicode.com/posts").then((responce)=> responce.json())
    //        .then((data) => console.log(data))
    //   }


    async groupBy(someKey){

        let fetchedData = await fetch(this._URL) ;
        let data = await fetchedData.json();
     console.log(data)
       
       let res = data.filter((element) => element[someKey]);
       console.log(res)
       

        // let res = [];
        // let fetched = await fetch(this._URL);
        // let data = fetched.json();
        // console.log(data)
        // .then((data)=>{data.filter((element) => element[someKey])})

        // console.log("aa",aa)
    }

}

const url1 = new SingletonForURL();
// const url2 = new SingletonForURL();
// console.log(url1===url2)
// console.log(url1.getSingletonForURL())

console.log(url1.groupBy("userId"))

