const result = document.querySelector('.result')
// const resultTotal = document.querySelector('.resultTotal')

const fetchProducts = async () =>{
  
 try {
   
//   const {data} = await axios.get('/api/3-airtable')
const {data} = await axios.get('/api/mobile')   
  const products = data
  .map((product) =>{
      const { id, url, name, price, time,rating, color } = product
      console.log("message  : " + JSON.stringify(product));
      return `<a <a href="product.html?id=${id}" class="product">
  <img src="${url}" alt="${name}"/>
  <div class="info">
  <h5>${name}</h5>
  <h5 class="price">${"Price: ",price}</h5>
  <h5 class="price">${"Time: ",time}</h5>
  </div> 
  
  </a>`;
  })
  .join('')
  const productsTotal = data
    .map((product) => {
      const {price, Sum} = product;
      
      // console.log(product.price.reduce((a, b) => a + b, 0));
      // console.log([].reduce((a, b) => a + b, 0));
      return `
  
  <div class="info">
  
  
  </div> 
  
  `;
    })
    .join("");
   
  result.innerHTML = products
  // resultTotal.innerHTML = productsTotal
} catch (error) {
    result.innerHTML = '<h4>There was an error</h4>'
 }
 

}
fetchProducts()




