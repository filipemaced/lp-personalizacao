<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "./Slider.css";

  let images = [
    {
      src: "https://cdn.decathlon.pt/landings/personalizacao/img/decatlhon-personalizacao.jpg",
      alt: "container-fitness",
      text: "Personalização Decathlon"
    },
    {
      src: "https://cdn.decathlon.pt/landings/personalizacao/img/personalizacao-tacas.jpg",
      alt: "container-fitness",
      text: "Torna os teus artigos de desporto únicos!"
    },
    {
      src: "https://cdn.decathlon.pt/landings/personalizacao/img/personalizacao-mulher.jpg",
      alt: "container-fitness",
      text: "Personalização do teu material desportivo"
    }
  ];
</script>
<Swiper 
    class="banner-principal"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    loop={true}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
    {#each images as image, i}
        <SwiperSlide>
            <div class="banner-back" style="background-image:url({image.src})">
                <h2>{image.text}</h2>
            </div>
        </SwiperSlide>
    {/each}
</Swiper> 

