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
      src: "https://cdn.decathlon.pt/lp/2022/economiacircular/img/main-header.jpg",
      alt: "container-fitness",
      text: "A tua personalização perferida"
    },
    {
      src: "https://cdn.decathlon.pt/lp/2022/economiacircular/img/main-header.jpg",
      alt: "container-fitness",
      text: "A tua perferida"
    },
    {
      src: "https://cdn.decathlon.pt/lp/2022/economiacircular/img/main-header.jpg",
      alt: "container-fitness",
      text: "A tua personalização "
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
    on:slideChange={() => console.log("slide change")}
    on:swiper={(e) => console.log(e.detail[0])}
    >
    {#each images as image, i}
        <SwiperSlide>
            <div class="banner-back" style="background-image:url({image.src})">
                <h2>{image.text}</h2>
            </div>
        </SwiperSlide>
    {/each}
</Swiper> 

