import { Loader, LoaderOptions } from 'google-maps';
const GoogleController = async (apiKey) => {
    const loader = new Loader(apiKey)
    return await loader.load();
}
export default GoogleController