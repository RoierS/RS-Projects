import Loader, { LoaderOptions } from "./loader";

interface AppLoaderOptions extends LoaderOptions {
  apiKey: string;
}

class AppLoader extends Loader {
  constructor() {
    const options: AppLoaderOptions = {
      apiKey: "437ed32951354fc0b63df437b21af3d9",
    };

    super("https://newsapi.org/v2/", options);
  }
}

export default AppLoader;
