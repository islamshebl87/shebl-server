const result = document.querySelector('.result')

const fetchData = async () => {
    try {
        console.log("message is : ");
        
     const {data} = await axios.get('/api/1-hello')
        result.textContent = data
        console.log("message is : "+ result.textContent);
    } catch (error) {
        console.log(error.response)
        result.textContent = error.response.data
    }
}

fetchData()