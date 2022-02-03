<script>
    import Cards from '../../UIElements/Cards/Cards.svelte'
    import ListData from '../ListData.svelte'

    let golf = [
    {
    src: "https://contents.mediadecathlon.com/p2033721/k$4461144298a81b360d63eeebc752ebe2/sq/polo-de-golf-mhw500-manga-curta-mulher-branco.jpg?format=auto&f=480x480",
    title: "POLO DE GOLF MHW500 MANGA CURTA MULHER BRANCO",
    href: "https://personalizacao.decathlon.pt/produto/polo-de-golf-mhw500-manga-curta-mulher-branco-inesis/",
    price: "9",
    brand: "INESIS"
    }
    ];
</script>

<Cards>
    <ListData sports = {golf} />
</Cards>