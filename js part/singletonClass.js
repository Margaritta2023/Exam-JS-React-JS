class SingletonForURL {
     constructor (){
        if(!SingletonForURL._instance){

            SingletonForURL._instance = this;
            this._URL = "https://jsonplaceholder.typicode.com/posts";
            return SingletonForURL._instance;
       }
    else return SingletonForURL._instance;
    }

    async getSingletonForURL (){
            const fetchedData = await fetch(SingletonForURL._instance) ;
    }

    groupBy( key ){

    }

}

const url1 = new SingletonForURL();
const url2 = new SingletonForURL();
console.log(url1===url2)