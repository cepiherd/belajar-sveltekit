<script>
  import productJson from "$lib/dummy/products";
    import cart from '$lib/stores/cart'

    function addToCart(args){
        let postList = { 
            name: args.name,
            image: args.image,
            harga : args.harga,
            kuantiti : 1
        }
        cart.add(postList)
    }
</script>
<div class="relative">
    <div class="absolute flex items-center justify-center top-0 left-0 w-screen h-screen">
        <div class="flex ">
            {#each productJson as item}
              <div class="max-w-[200px] w-full border rounded  shadow-sm px-2 pb-2 first:ml-0 ml-4 hover:shadow-md cursor-pointer">
                <picture> 
                  <img src={item.image} width="200" alt={item.name}/>
                </picture>
                <div class="mb-2">
                  <span class="line-clamp-3">{item.name}</span>
                </div>
                <p>Rp{item.harga}</p>
                <button class="bg-red-500 px-8 py-2 w-full text-white font-bold rounded my-2 hover:bg-red-700" on:click={()=> addToCart(item)}>Add To Cart</button>
              </div>
              
            {/each}
          </div>
    </div>
   
</div>
