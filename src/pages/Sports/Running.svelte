<script>
    import Cards from '../../UIElements/Cards/Cards.svelte'
    import ListData from '../ListData.svelte'

    let running = [
    {
      src: "https://contents.mediadecathlon.com/p2043080/k$d9af252c6ce80654406bd908b455720b/sq/t-shirt-de-corrida-respiravel-dry-homem-azul-da-prussia.jpg?format=auto&f=480x480",
      title: "T-SHIRT DE CORRIDA RESPIRÁVEL DRY HOMEM AZUL DA PRÚSSIA",
      href: "https://personalizacao.decathlon.pt/produto/t-shirt-de-corrida-respiravel-kalenji-dry-homem-azul-prussia-kalenji/",
      price: "3,95",
      brand: "KALENJI"
    }
    ];
</script>

<Cards>
    <ListData sports = {running} />
</Cards>