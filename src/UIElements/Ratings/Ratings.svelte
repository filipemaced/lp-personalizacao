<script>
    let data = [
        {
            text:"Fantástico serviço. Excelente acompanhamento durante todo o processo.",
            date:"21 JAN 2022",
            rating: "https://cdn.decathlon.pt/landings/personalizacao/img/4.5stars%402x.png"
        },
        {
            text:"Fiquei bastante satisfeito com o serviço e excelente relação preço/qualidade.",
            date:"20 DEZ 2021",
            rating: "https://cdn.decathlon.pt/landings/personalizacao/img/5stars-1.png"
        },
        {
            text:"Excelente atendimento. Satisfação com o resultado final da estampagem/bordado no equipamento.",
            date:"2 DEZ 2021",
            rating: "https://cdn.decathlon.pt/landings/personalizacao/img/5stars-1.png"
        }
    ]
</script>

<h2 class="reviews-title">Clientes satisfeitos</h2>
<div class="container-ratings">
    {#each data as rate}
        <div class="inner-ratings">
            <p>{rate.text}</p>
            <div class="img-ratings">
                <img src="{rate.rating}" alt="{rate.text}">
                <p>{rate.date}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .reviews-title {
        font-size: 35px;
        text-align: center;
        font-weight: 900;
        font-family: 'Roboto Condensed', sans-serif;
    }
    .container-ratings {
        display: flex;
        width: 80%;
        gap: 20px;
        justify-content: center;
        margin: 0 auto 30px;
    }
    .inner-ratings {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 140px;
        width: 300px;
        padding: 20px;
        box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
        border-radius: 20px;
        transition: all .4s;
        margin: 0 10px;
        position: relative;
    }
    .inner-ratings:hover {
        box-shadow: rgba(197, 201, 206, 0.2) 0px 8px 24px;
    }
    .img-ratings {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
    }
    .img-ratings p:first-child {
        font-size: 15px;
        font-family: 'Roboto Condensed', sans-serif;
    }
    .img-ratings p:last-child {
        font-size: 10px;
        font-family: 'Roboto Condensed', sans-serif;
    }
    .img-ratings img {
        width: 50px;
    }
</style>