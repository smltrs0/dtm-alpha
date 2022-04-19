
export default async function getTimeZone(defaultTimeZone = 'America/New_York') {
    let request =  await  fetch('https://api.ipgeolocation.io/timezone?apiKey=9e38e26b6db544bab358e53a6b872dd3&tz='+defaultTimeZone);
    if(request.status === 200) return await request.json()
    request =  await  fetch('https://api.ipgeolocation.io/timezone?apiKey=6937ee697cc64ac4904a0a8f83841d6f&tz='+defaultTimeZone);
    return await request.json()
}
