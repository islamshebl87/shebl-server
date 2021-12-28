const result = document.querySelector('.result');

const fetchProduct = async () => {
    result.innerHTML = `<h2>loading........</h2>`
    try {
        const id = window.location.search
        // const {data:{fields}} = await axios.get(`/api/3-product${id}`)
        const {data:{fields}} = await axios.get(`/api/brand${id}`)
        
        const {name,desc,price,image,brandsimg,brands,rating,color} = fields
        result.innerHTML = `
        
        <title>${brands}</title>
        <h1 class="title">${brands}</h1>
        <article class="product">
          <img class="product-img"
          src="${brandsimg[0].url}"
          alt="${brands}"
          />
          <div class="product-info">
            <h5 class="title">${"Model is: " + brands}</h5>
            <h5 class="price">${"Price: " + price}</h5>
            <h5 class="price">${"Brand: " + brands}</h5>
            
            <h5 class="desc">${"Decription is: " + brands}</h5>
          </div>
          
        </article>`;
        // newPageTitle = brands ;
        // document.title = newPageTitle;
        newPageTitle = brands;
        document.querySelector("title").textContent = newPageTitle;
    } catch (error) {
        result.innerHTML = `<h2>${error.respone.data}</h2>`
    }
    
}

fetchProduct()