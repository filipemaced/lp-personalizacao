<script>
    let sticker = [
    {
        "name": "Estampagem",
        "sticker": "https://cdn.decathlon.pt/landings/personalizacao/img/estampagem.png",
        "href": "https://www.decathlon.pt/browse/c0-servicos/c1-spv/c3-estampagem-monocor/_/N-11kn4lo"
    },
    {
        "name": "Bordados",
        "sticker": "https://cdn.decathlon.pt/landings/personalizacao/img/bordado.png",
        "href": "https://www.decathlon.pt/browse/c0-servicos/c1-spv/c3-bordado/_/N-12xfgir"
    },
    {
        "name": "Stickers",
        "sticker": "https://cdn.decathlon.pt/landings/personalizacao/img/sticker.png",
        "href":"https://www.decathlon.pt/browse/c0-servicos/c1-spv/c3-autocolantes/_/N-17qs9kq"
    },
    {
        "name": "Taças e Medalhas",
        "sticker": "https://cdn.decathlon.pt/landings/personalizacao/img/trophy.png",
        "href": "https://www.decathlon.pt/search?Ntt=ta%C3%A7as+e+medalhas"
    },
    {
        "name": "Gravações",
        "sticker": "https://cdn.decathlon.pt/landings/personalizacao/img/paisley.png",
        "href":"https://www.decathlon.pt/browse/c0-servicos/c1-spv/c3-gravacao/_/N-u1c9l6"
    },
    ]
</script>
<div class="container-sticker">
    {#each sticker as stick, i}
        <div>
            <a href={stick.href}>
                <img src="{stick.sticker}" alt="{stick.name}">
                <h6>{stick.name}</h6>
            </a>
        </div>
    {/each}
</div>
<style>
    .container-sticker {
        display: flex;
        justify-content: center;
        gap: 50px;
        padding: 80px 0;
    }
    .container-sticker div h6 {
        margin: 10px;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 25px;
        font-weight: 600;
        color: rgb(47, 47, 47);
        text-align: center;
    }
    .container-sticker div a {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        padding: 20px 30px;
    }
    .container-sticker div a:hover {
        text-decoration: none;
        box-shadow: rgba(50, 50, 93, 0.151) 0px 2px 5px -1px,rgba(0, 0, 0, 0.205) 0px 1px 3px -1px;
    }
    .container-sticker img {
        width: 60px;
    }
    @media only screen and (max-width:900px) {
        .container-sticker {
            flex-direction: column;
            width: 80%;
            margin: 0 auto;
        }
        .container-sticker div a {
            flex-direction: column;
        }
        .container-sticker div a h6 {
            margin: 0;
        }
    }
</style>