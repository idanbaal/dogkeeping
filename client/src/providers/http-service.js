export default class HttpService {
    static get(url) {
        return fetch(url)
            .then(res => res.json())
            .then(json => {
                return { success: true, result: json };
            })
            .catch(error => {
                console.error('http.get failed:', error)
                return { success: false, message: (error || {}).message };
            });
    }

    static post(url, body){
        // todo: idan baal haness return promise
    }
}