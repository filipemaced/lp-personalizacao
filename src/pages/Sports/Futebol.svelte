<script>
    import Cards from '../../UIElements/Cards/Cards.svelte'
    import ListData from '../ListData.svelte'

    let futebol = [
    {
      src: "https://contents.mediadecathlon.com/p1266110/k$7e6968c5264fa0202757316a6b6be341/sq/calcoes-de-futebol-adulto-f100-amarelo.jpg?format=auto&f=480x480",
      title: "CALÇÕES DE FUTEBOL ADULTO F100 AMARELO",
      href: "https://personalizacao.decathlon.pt/produto/calcoes-de-futebol-adulto-f100-kipsta-amarelo-limao-kipsta/",
      price: "4,95",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1609866/k$c33afeecad260460815b46d5842aa04c/sq/calcoes-de-futebol-adulto-concecao-ecologica-f100-azul.jpg?format=auto&f=480x480",
      title: "CALÇÕES DE FUTEBOL ADULTO F100 AZUL",
      href: "https://personalizacao.decathlon.pt/produto/calcoes-de-futebol-adulto-f100-kipsta-azul-kipsta/",
      price: "4,95",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1609600/k$9d5085f1c88fe4f172225271f840fcd8/sq/calcoes-de-futebol-adulto-concecao-ecologica-f100-vermelho.jpg?format=auto&f=480x480",
      title: "CALÇÕES DE FUTEBOL ADULTO F100 VERMELHO",
      href: "https://personalizacao.decathlon.pt/produto/calcoes-de-futebol-adulto-f100-kipsta-vermelho-kipsta/",
      price: "4,95",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1609859/k$60949b527a9b662dd66080915b0a2526/sq/camisola-de-futebol-adulto-f100-azul.jpg?format=auto&f=480x480",
      title: "CAMISOLA DE FUTEBOL ADULTO F100 AZUL",
      href: "https://personalizacao.decathlon.pt/produto/camisola-de-futebol-adulto-f100-kipsta-azul-kipsta/",
      price: "3,95",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1609589/k$c5fc6215088fa1b12ebbfd3c85bc55e8/sq/camisola-de-futebol-adulto-concecao-ecologica-f100-branco.jpg?format=auto&f=480x480",
      title: "CAMISOLA DE FUTEBOL ADULTO F100 BRANCO",
      href: "https://personalizacao.decathlon.pt/produto/camisola-de-futebol-adulto-f100-kipsta-branco-kipsta/",
      price: "3,95",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1602530/k$ecc261ffaaedf649956781b073f611f2/sq/camisola-de-futebol-crianca-f100-branco.jpg?format=auto&f=480x480",
      title: "CAMISOLA DE FUTEBOL CRIANÇA F100 BRANCO",
      href: "https://personalizacao.decathlon.pt/produto/camisola-de-futebol-crianca-f100-branco-kipsta/",
      price: "3,95",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1602512/k$5d7f151f15c02b8a48fc50b12c3f9a96/sq/camisola-de-futebol-crianca-f100-preto.jpg?format=auto&f=480x480",
      title: "CAMISOLA DE FUTEBOL CRIANÇA F100 PRETO",
      href: "https://personalizacao.decathlon.pt/produto/camisola-de-futebol-crianca-f100-preto-kipsta/",
      price: "3,95",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p2028061/k$5b7b9269ba15844d055571e0b7bb0f41/sq/t-shirt-crianca-ff100-portugal.jpg?format=auto&f=480x480",
      title: "T-SHIRT CRIANÇA FF100 PORTUGAL",
      href: "https://personalizacao.decathlon.pt/produto/t-shirt-crianca-f100-portugal-kipsta/",
      price: "9",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1801557/k$73f08b524590bf8d5225a5660515106e/sq/t-shirt-de-futebol-adulto-ff100-portugal.jpg?format=auto&f=480x480",
      title: "T-SHIRT DE FUTEBOL ADULTO FF100 PORTUGAL",
      href: "https://personalizacao.decathlon.pt/produto/t-shirt-de-futebol-adulto-f100-portugal-kipsta/",
      price: "10",
      brand: "KIPSTA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1801979/k$0aa1b9a2982ffe3cc74f245a97b85273/sq/t-shirt-futebol-ff100-mulher-portugal.jpg?format=auto&f=480x480",
      title: "T-SHIRT DE FUTEBOL MULHER FF100 PORTUGAL",
      href: "https://personalizacao.decathlon.pt/produto/t-shirt-futebol-f100-mulher-portugal-kipsta/",
      price: "10",
      brand: "KIPSTA"
    }
    ];
</script>

<Cards>
  <ListData sports = {futebol} />
</Cards>