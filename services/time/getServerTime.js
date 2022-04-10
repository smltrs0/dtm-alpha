export default  function getTime(){
    return new Promise((resolve, reject) => {
        let request = fetch('https://worldtimeapi.org/api/timezone/America/New_York', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    });
}
