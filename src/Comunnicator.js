

class Comunnicator {

    static baseUrl = 'https://name-list-93368.firebaseio.com/names';

    static Fetch = () => {
        return fetch(Comunnicator.baseUrl + '.json')
                .then(response => response.json())
       
    }

    static Post = (data) => {
        return fetch(Comunnicator.baseUrl + '.json', {
            method: 'POST',
            body: JSON.stringify(data)
        })
       
    }

    static Delete = (cardId) => {
        return fetch(`${Comunnicator.baseUrl}/${cardId}.json`, {
            method: 'DELETE',
            body: JSON.stringify(cardId)
        })
       
    }
}

export { Comunnicator }