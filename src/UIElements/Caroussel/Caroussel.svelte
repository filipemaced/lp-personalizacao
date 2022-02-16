<script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
  
    import { Swiper, SwiperSlide } from "swiper/svelte";
  
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import "swiper/css/scrollbar";
    import "./Caroussel.css";
  
    let images = [
      {
        src: "https://cdn.decathlon.pt/landings/personalizacao/img/personalizacao-calcado.jpg",
        text: "Gravações",
        href:"https://www.decathlon.pt/browse/c0-servicos/c1-spv/c3-gravacao/_/N-u1c9l6"
      },
      {
        src: "https://cdn.decathlon.pt/landings/personalizacao/img/personalizacao-running.jpg",
        text: "Estampagem",
        href: "https://www.decathlon.pt/browse/c0-servicos/c1-spv/c3-estampagem-monocor/_/N-11kn4lo"
      },
      {
        src: "https://cdn.decathlon.pt/landings/personalizacao/img/cantil-personalizado.jpg",
        text: "Stickers",
        href:"https://www.decathlon.pt/browse/c0-servicos/c1-spv/c3-autocolantes/_/N-17qs9kq"
      },
      {
        src: "https://cdn.decathlon.pt/landings/personalizacao/img/bordados.jpg",
        text: "Bordados",
        href: "https://www.decathlon.pt/browse/c0-servicos/c1-spv/c3-bordado/_/N-12xfgir"
      },
      {
        src: "https://cdn.decathlon.pt/landings/personalizacao/img/personalizacao-tacas.jpg",
        text: "Taças e Medalhas",
        href: "https://www.decathlon.pt/search?Ntt=ta%C3%A7as+e+medalhas"
      }
    ];
  </script>
  <Swiper 
      class="banner-secundario"
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
            <a href={image.href}>
              <div class="banner-back-sec" style="background-image:url({image.src})">
                <div class="text">
                  <h2>{image.text}</h2>
                  <p>Vê aqui todas as opções para {image.text}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
      {/each}
  </Swiper> 
  
  