class SingletonForURL {
    
     constructor (){
        if(!SingletonForURL._instance){ 
            this._URL = "https://jsonplaceholder.typicode.com/posts";
            SingletonForURL._instance = this;     
       }
    else return SingletonForURL._instance;
    }

    async getSingletonForURL (){
            let fetchedData = await fetch(SingletonForURL._instance._URL) ;
            let data = await fetchedData.json();
        //   console.log(data)
            return data
    }

    //   getSingletonForURL (){
    //        return  fetch("https://jsonplaceholder.typicode.com/posts").then((responce)=> responce.json())
    //        .then((data) => console.log(data))
    //   }


    groupBy( key ){

    }

}

const url1 = new SingletonForURL();
const url2 = new SingletonForURL();
console.log(url1===url2)
console.log(url1.getSingletonForURL())

