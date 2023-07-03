const KEY = '698b474bb4e44304b2124920232805'

const fetchData = async (city) => {
   const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

   const fetchResponse = await fetch(url)
   const data = await fetchResponse.json()

   return data
}

export default fetchData