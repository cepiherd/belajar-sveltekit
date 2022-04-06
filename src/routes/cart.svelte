<script>
  import { browser } from "$app/env";
  let cartList = (browser && JSON.parse(localStorage.getItem("cart"))) || [];
</script>

<div class="absolute  flex justify-center w-screen h-screen top-0 left-0 items-center ">
  
  <div>
    <h1 class="text-2xl font-bold">This is Cart List</h1>
    {#each cartList as item, i}
      <div class="max-w-[480px] border rounded  shadow flex p-2 mb-2">
        <img src={item.image} class="max-w-[120px]"/>
        <p class="line-clamp-3 px-1 self-center">{item.name}</p>
        <div>
            <p class="text-xs">Total : </p>
            <p class="font-bold">Rp{item.harga * item.kuantiti}</p>
        </div>
        
      </div>
    {/each}
  </div>
</div>
