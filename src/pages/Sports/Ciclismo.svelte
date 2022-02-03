<script>
    import Cards from "../../UIElements/Cards/Cards.svelte"
    import ListData from '../ListData.svelte'

    let ciclismo = [
    {
      src: "https://contents.mediadecathlon.com/p2015235/k$32e2ddc460b925df6eb7ef6ecbad6b45/sq/camisola-de-bicicleta-de-estrada-endurance-racer-bordo.jpg?format=auto&f=480x480",
      title: "CAMISOLA DE BICICLETA DE ESTRADA ENDURANCE RACER BORDÔ",
      href: "https://personalizacao.decathlon.pt/produto/camisola-de-bicicleta-de-estrada-endurance-racer-bordo/",
      price: "55",
      brand: "VAN RYSEL"
    },
    {
      src: "https://contents.mediadecathlon.com/p2004547/k$dc85a0fabc83524210ec7554ff884061/sq/camisola-de-ciclismo-de-estrada-racer-preto.jpg?format=auto&f=480x480",
      title: "CAMISOLA DE BICICLETA DE ESTRADA ENDURANCE RACER PRETO",
      href: "https://personalizacao.decathlon.pt/produto/camisola-de-ciclismo-de-estrada-racer-preto/",
      price: "49",
      brand: "VAN RYSEL"
    },
    {
      src: "https://contents.mediadecathlon.com/p1577045/k$65e062c7247d4648835e46bf5ecff92e/sq/camisola-de-manga-curta-mulher-bicicleta-500-azul-marinho.jpg?format=auto&f=480x480",
      title: "CAMISOLA DE MANGA CURTA MULHER BICICLETA 500 AZUL-MARINHO",
      href: "https://personalizacao.decathlon.pt/produto/camisola-de-manga-curta-mulher-bicicleta-500-azul-marinho/",
      price: "15",
      brand: "TRIBAN"
    },
    {
      src: "https://contents.mediadecathlon.com/p1805111/k$b7ebd63b761444c1eddf29b3bcf8bc8f/sq/camisola-manga-curta-bicicleta-estrada-homem-essentiel-preto.jpg?format=auto&f=480x480",
      title: "CAMISOLA MANGA CURTA BICICLETA ESTRADA HOMEM ESSENTIEL PRETO",
      href: "https://personalizacao.decathlon.pt/produto/camisola-manga-curta-bicicleta-estrada-homem-essentiel-preto/",
      price: "7,90",
      brand: "TRIBAN"
    }
    ];

</script>

<Cards>
  <ListData sports = {ciclismo} />
</Cards>