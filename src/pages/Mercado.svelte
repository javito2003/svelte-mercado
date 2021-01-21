<script>
    import Api from "../api";
    var productos = [];
    async function capturarProductos() {
        Api.get("/producto")
            .then((res) => {
                console.log(res);
                productos = res;
            })
            .catch((err) => {
                console.log(err);
            });
    }
</script>

<main>
    <div class="container">
        <h1 class="text-center">Mercadito de Linnierssss</h1>
        <button on:click={capturarProductos}>x</button>
        {#each productos as item}
            {item.nombre}
        {/each}
    </div>
</main>
