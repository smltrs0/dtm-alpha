
export default async function getTimeZone() {
    const request =  await  fetch('https://api.ipgeolocation.io/timezone?apiKey=9e38e26b6db544bab358e53a6b872dd3&tz=America/New_York')
    return await request.json()
}
