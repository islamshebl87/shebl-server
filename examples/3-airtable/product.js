const result = document.querySelector('.result');

const fetchProduct = async () => {
    result.innerHTML = `<h2>loading........</h2>`
    try {
        const id = window.location.search
        // const {data:{fields}} = await axios.get(`/api/3-product${id}`)
        const {data:{fields}} = await axios.get(`/api/3-z-complete${id}`)
        const {name,desc,price,image,color,date,timedate} = fields
        result.innerHTML = `<h1 class="title">${name}</h1>
        <article class="product">
          <img class="product-img"
          src="${image[0].url}"
          alt="${name}"
          />
          <div class="product-info">
            <h5 class="title">${name}</h5>
            <h5 class="price">${price}</h5>
            <h5 class="date">${date}</h5>
            <h5 class="timedate">${timedate}</h5>
            
            <h5>${"Color: " + color}</h5>
            <p class="desc">${desc}</p>
          </div>
        </article>`;
    } catch (error) {
        result.innerHTML = `<h2>${error.respone.data}</h2>`
    }
    
}

fetchProduct()