// Fetch Products
if(!window.SwymCallbacks){window.SwymCallbacks = [];}
window.SwymCallbacks.push(function(){
  _swat.fetchWrtEventTypeET(function(products){
      console.log(products)
      var html = '';
      products.map(product => {
          productObj = JSON.stringify(product).replace(/\"/g, "__");
          var productItemView = `
            <div class="Grid__Cell 1/2--phone 1/3--tablet-and-up 1/4--desk" data-id="${product.id}">
                <div class="ProductItem ">
                    <div class="ProductItem__Wrapper">
                        <button class="remove-wishlist" onclick="removeWishlist('${productObj}')"><i class="fa fa-times"></i></button>
                        <div class="ProductItem__Image">
                            <img src="${product.iu}" alt="${product.dt}" >
                        </div>                         
                        <div class="ProductItem__Info">
                            <h2 class="ProductItem__Title">${product.dt}</h2>
                            <p class="ProductItem__Price">From &nbsp; ${product.pr}</p>
                            <a class="ProductItem__Link" href="${product.du}">View Product</a>
                        </div>
                    </div>
                </div>
            </div>
          `;
          html += productItemView;
          
      });

      document.getElementById('wishlistItems').innerHTML = html;
 }, _swat.EventTypes.addToWishlist);
});

function removeWishlist(pd) {
    console.log('---------------', pd);
    let    productObj = pd.replace(/__/g, "\"");
    productObj = JSON.parse(productObj); 
    console.log(productObj);

    _swat.removeFromWishList(
        {
            epi: pd.epi,
            du: pd.du,
            empi: pd.empi,
            iu: pd.iu,
            pr: pd.pr,

        },
        function(r) {
          console.log('Removed to wishlist');
        }
      );

    }
 

 