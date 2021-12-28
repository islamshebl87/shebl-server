const result = document.querySelector('.result')
// const resultTotal = document.querySelector('.resultTotal')

const fetchProducts = async () =>{
  
 try {
//   const {data} = await axios.get('/api/3-airtable')
const {data} = await axios.get('/api/brand')   
  const products = data
  .map((product) =>{
    
      const { id, url, name, price, rating, color,brands,brandsimg } = product
      // console.log("message is now : " + result.innerHTML);
      console.log("message is now : " + JSON.stringify(product));
      
      
      
      
      return `<a <a href="product.html?id=${id}" class="product">
  <img src="${url}" alt="${brands}"/>
  <div class="info">
  
  <h5 class="brand">${"Brand is : " + brands}</h5>
  <h5 class="brand">${"Price is : " + price}</h5>
  </div> 
  
  </a>`;
  })
  .join('')
  
   
  result.innerHTML = products
  // resultTotal.innerHTML = productsTotal
} catch (error) {
    result.innerHTML = '<h4>There was an error</h4>'
 }
 

}
fetchProducts()




