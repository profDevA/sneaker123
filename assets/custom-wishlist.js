// Fetch Products
if(!window.SwymCallbacks){window.SwymCallbacks = [];}
window.SwymCallbacks.push(function(){
  _swat.fetchWrtEventTypeET(function(products){
      console.log(products)
      var html = '';
      if (products.length > 0) {
          products.map(product => {
              productObj = JSON.stringify(product).replace(/\"/g, "__");
              var productItemView = `
                <div class="Grid__Cell 1/2--phone 1/3--tablet-and-up 1/4--desk" data-id="${product.id}">
                    <div class="ProductItem ">
                        <div class="ProductItem__Wrapper">
                            
                            <div class="ProductItem__Image">
                                <img src="${product.iu}" alt="${product.dt}" >
                            </div>                         
                            <div class="ProductItem__Info">
                                <h2 class="ProductItem__Title">${product.dt}</h2>
                                <p class="ProductItem__Price">From &nbsp; €${product.pr}</p>
                                <a class="ProductItem__Link" href="${product.du}">View Product</a>
                            </div>
                        </div>
                    </div>
                </div>
              `;
              html += productItemView;
          });
      } else {
          document.querySelector('.custom-wishlist-container').style.display = "none";
          document.getElementById("empty-wishlist").style.display = ""
      }

      document.getElementById('wishlistItems').innerHTML = html;
 }, _swat.EventTypes.addToWishlist);
});



 