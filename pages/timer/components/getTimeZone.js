
export default async function getTimeZone() {
    let request =  await  fetch('https://api.ipgeolocation.io/timezone?apiKey=9e38e26b6db544bab358e53a6b872dd3&tz=America/New_York')
    if(request.status === 200) return await request.json()
    request =  await  fetch('https://api.ipgeolocation.io/timezone?apiKey=6937ee697cc64ac4904a0a8f83841d6f&tz=America/New_York')
    return await request.json()
}
