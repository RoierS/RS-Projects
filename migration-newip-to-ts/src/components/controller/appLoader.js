import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '437ed32951354fc0b63df437b21af3d9', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
