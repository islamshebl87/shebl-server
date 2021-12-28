const result = document.querySelector('.result');

const fetchProduct = async () => {
    result.innerHTML = `<h2>loading........</h2>`
    try {
        const id = window.location.search
        
        // const {data:{fields}} = await axios.get(`/api/3-product${id}`)
        const {data:{fields}} = await axios.get(`/api/mobile${id}`)
        const {name,desc,price,image,rating,color,time} = fields
        console.log(id);
        console.log(fields);
        console.log(window.location.protocol);
        console.log(window.location.origin);
        console.log(window.location.pathname);
        console.log(window.location.href);
        console.log(window.location.port);
        console.log(window.location);
        
        result.innerHTML = `<h1 class="title">${name}</h1>
        <article class="product">
          <img class="product-img"
          src="${image[0].url}"
          alt="${name}"
          />
          <div class="product-info">
            <h5 class="title">${"Model is: " + name}</h5>
            <h5 class="price">${"Price: " + price}</h5>
            
            <h5 class="desc">${"Decription is: " + desc}</h5>
          </div>
          
        </article>`;
    } catch (error) {
        result.innerHTML = `<h2>${error.respone.data}</h2>`
    }
    
}

fetchProduct()