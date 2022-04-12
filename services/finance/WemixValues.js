export function getPrice() {
    return new Promise((resolve, reject) => {
        try {
            fetch('https://api.mir4global.com/wallet/prices/draco/lastest', {
                method: 'POST',
            })
                .then(response => response.json())
                .then(responseJson => {
                    resolve(responseJson);
                })
        } catch (error) {
            reject(error);
        }
    });
}
