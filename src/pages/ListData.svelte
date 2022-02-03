<script>
export let sports

</script>

{#each sports as products, i}
    <div>
        <a href="{products.href}">
            <img src={products.src} alt={products.title}>
            <h6>{products.title}</h6>
            <p>{products.brand}</p>
            <p>{products.price}</p>
        </a>
    </div>
{/each}