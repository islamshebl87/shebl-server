const result = document.querySelector('.result')

const fetchData = async () => {
  // console.log('second version')
  try {
    // const { data } = await axios.get('https://ismobl.netlify.app/api/2-basic-api')
    const { data } = await axios.get('/api/11-api')
    // console.log(data[3].image.url)
    const products = data
      .map((product) => {
        console.log(product);
        const {
          image: { url },
          name,
          price,
        } = product
        return `<article class="product">
     <img src="${url}" alt="${name}"/>
     <div class="info">
<h5>${name}</h5>

     </div>
     </article>`
      })
      .join('')
    result.innerHTML = products
    // result.innerHTML = `<h2>Success</h2>`
    // console.log("MMMMMM: "+result.innerHTML)
  } catch (error) {
    result.innerHTML = `<h4>There was an error. Please try again later</h4>`
  }
}

fetchData()
