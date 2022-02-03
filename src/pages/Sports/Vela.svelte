<script>
    import Cards from '../../UIElements/Cards/Cards.svelte'
    import ListData from '../ListData.svelte'

let vela = [
    {
      src: "https://contents.mediadecathlon.com/p1863656/k$6ed5a911987a6abe56bf29ec4cc5594e/sq/casaco-de-vela-homem-500-cinzentomarinho.jpg?format=auto&f=480x480",
      title: "CASACO DE VELA HOMEM 500 CINZENTO/MARINHO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-de-vela-homem-500-cinzento-marinho/",
      price: "80",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p2036121/k$cfc4aea76b9de4078c911192ffe043b0/sq/casaco-de-vela-sailing-500-homem-cinzento-preto.jpg?format=auto&f=480x480",
      title: "CASACO DE VELA SAILING 500 HOMEM CINZENTO PRETO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-de-vela-sailing-500-homem-cinzento-preto/",
      price: "90",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p2036004/k$8feafbdd135dc35432cecf7633fd30d7/sq/casaco-de-vela-sailing-500-homem-vermelho-preto.jpg?format=auto&f=480x480",
      title: "CASACO DE VELA SAILING 500 HOMEM VERMELHO PRETO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-de-vela-sailing-500-homem-vermelho-preto/",
      price: "90",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p1696639/k$524139c6b526e16a368434d3bffe7434/sq/casaco-softshell-corta-vento-de-vela-900-interior-em-polar-homem-preto.jpg?format=auto&f=480x480",
      title: "CASACO SOFTSHELL CORTA-VENTO DE VELA 900 HOMEM PRETO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-de-vela-softshell-corta-vento-900-homem-cinza-preto/",
      price: "55",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p1953775/k$9be4850d50df915faab09718babc2cd6/sq/casaco-impermeavel-de-vela-casaco-de-chuva-corta-vento-sailing-100-amarelo.jpg?format=auto&f=480x480",
      title: "CASACO DE CHUVA CORTA VENTO SAILING 100 AMARELO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-impermeavel-de-vela-casaco-de-chuva-corta-vento-sailing-100-amarelo/",
      price: "28",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p1416328/k$f0e387568a5ef87771bd968f2e0386d1/sq/casaco-impermeavel-de-vela-casaco-de-chuva-homem-sailing-100-azul.jpg?format=auto&f=480x480",
      title: "CASACO DE CHUVA HOMEM SAILING 100 AZUL",
      href: "https://personalizacao.decathlon.pt/produto/casaco-impermeavel-de-vela-casaco-de-chuva-homem-sailing-100-azul/",
      price: "25",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p1416275/k$4867179902686245f3e440945b7291c0/sq/casaco-impermeavel-de-vela-casaco-de-chuva-homem-sailing-100-navy.jpg?format=auto&f=480x480",
      title: "CASACO DE CHUVA HOMEM SAILING 100 NAVY",
      href: "https://personalizacao.decathlon.pt/produto/casaco-impermeavel-de-vela-casaco-de-chuva-homem-sailing-100-navy/",
      price: "25",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p1752436/k$89e247d75df12d7154bf09d6204b3f51/sq/casaco-impermeavel-de-vela-corta-vento-homem-sailing-300-azul-marinho.jpg?format=auto&f=480x480",
      title: "CASACO IMPERMEÁVEL DE VELA CORTA-VENTO HOMEM SAILING 300 AZUL MARINHO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-impermeavel-de-vela-corta-vento-homem-sailing-300-azul-marinho/",
      price: "50",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p1752453/k$f9d240fc17a9aab924a62094b637b2c8/sq/casaco-impermeavel-de-vela-corta-vento-sailing-300-homem-branco-azul.jpg?format=auto&f=480x480",
      title: "CASACO IMPERMEÁVEL DE VELA CORTA-VENTO SAILING 300 HOMEM BRANCO AZUL",
      href: "https://personalizacao.decathlon.pt/produto/casaco-impermeavel-de-vela-corta-vento-sailing-300-homem-branco-azul/",
      price: "50",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p1863602/k$a72ed6b88f2d0767bb003e14d3a3e9ab/sq/casaco-impermeavel-de-vela-sailing-100-corta-vento-homem-preto.jpg?format=auto&f=480x480",
      title: "CASACO IMPERMEÁVEL DE VELA SAILING 100 CORTA-VENTO HOMEM PRETO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-impermeavel-de-vela-sailing-100-corta-vento-homem-preto/",
      price: "40",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p2036305/k$3ebdd5ae5fbd4f82762eff758efc9833/sq/casaco-polar-quente-de-vela-100-homem-cinza-mesclado.jpg?format=auto&f=480x480",
      title: "CASACO POLAR QUENTE DE VELA 100 HOMEM CINZA MESCLADO / AZUL MARINHO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-polar-quente-de-vela-100-homem-cinza-mesclado/",
      price: "16",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p2036285/k$34c6fced69d1082954e77bb5f8295aee/sq/casaco-polar-quente-de-vela-100-homem-cinza-mesclado-azul-marinho.jpg?format=auto&f=480x480",
      title: "CASACO POLAR QUENTE DE VELA 100 HOMEM CINZA MESCLADO / AZUL MARINHO",
      href: "https://personalizacao.decathlon.pt/produto/casaco-polar-quente-de-vela-100-homem-cinza-mesclado-azul-marinho/",
      price: "16",
      brand: "TRIBORD"
    },
    {
      src: "https://contents.mediadecathlon.com/p1416332/k$1fdba19389c366cee95a8534afc568d2/sq/sobrecalcas-impermeaveis-de-vela-homem-sailing-100-azul-marinho.jpg?format=auto&f=480x480",
      title: "SOBRECALÇAS IMPERMEÁVEIS DE VELA HOMEM SAILING 100 AZUL-MARINHO",
      href: "https://personalizacao.decathlon.pt/produto/sobrecalcas-impermeaveis-de-vela-homem-sailing-100-azul-marinho/",
      price: "18",
      brand: "TRIBORD"
    },
  ];

</script>

<Cards>
    <ListData sports = {vela} />
</Cards>