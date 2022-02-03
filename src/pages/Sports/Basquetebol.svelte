<script>
    import Cards from "../../UIElements/Cards/Cards.svelte"
    import ListData from '../ListData.svelte'

    let basquetebol = [
    {
    src: "https://contents.mediadecathlon.com/p1486475/k$2a472be9a79b9ff13fe64ccce2991681/sq/t-shirt-sem-mangas-de-basquetebol-homem-t100-verde.jpg?format=auto&f=480x480",
    title: "T-SHIRT SEM MANGAS DE BASQUETEBOL HOMEM T100",
    href: "https://personalizacao.decathlon.pt/categoria-produto/basquetebol/",
    price: "4,95",
    brand: "TARMAK"
    },
    ];


</script>

<Cards>
    <ListData sports = {basquetebol} />
</Cards>