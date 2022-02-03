<script>
    import Cards from "../../UIElements/Cards/Cards.svelte"
    import ListData from '../ListData.svelte'

    let fitness = [
    {
      src: "https://contents.mediadecathlon.com/p1905318/k$09725e416b9360ec9bfcd6f3ade95988/sq/t-shirt-de-ginastica-e-pilates-100-algodao-branco.jpg?format=auto&f=480x480",
      title: "T-SHIRT DE GINÁSTICA E PILATES 100% ALGODÃO BRANCO",
      href: "https://personalizacao.decathlon.pt/produto/t-shirt-de-cardio-100-algodao-branco-nyamba-mulher/",
      price: "3",
      brand: "NYAMBA"
    },
    {
      src: "https://contents.mediadecathlon.com/p1705600/k$6cdbf40920e8d0117e5f87f83698f6a4/sq/t-shirt-slim-de-cardio-training-100-mulher.jpg?format=auto&f=480x480",
      title: "T-SHIRT SLIM DE CARDIO TRAINING 100 MULHER",
      href: "https://personalizacao.decathlon.pt/produto/tshirt-slim-de-cardio-training-100-mulher-preto/",
      price: "5",
      brand: "DOMY0S"
    }
    ];
</script>

<Cards>
  <ListData sports = {fitness} />
</Cards>