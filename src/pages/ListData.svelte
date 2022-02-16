<script>
    import { Navigation, Scrollbar, A11y } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    export let sports;
    let slidesPerViewConf = sports.length >= 2 ? 4 : 1;
    let slidesPerViewConfMob = sports.length > 3 ? 3 : 1;

</script>

<Swiper
modules={[Navigation, Scrollbar, A11y]}
breakpoints={{
    "640": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "868": {
      slidesPerView: slidesPerViewConfMob,
      spaceBetween: 40,
    },
    "1300": {
      slidesPerView: slidesPerViewConf,
      spaceBetween: 20,
    },
  }}
navigation
scrollbar={{ draggable: true }}
>

{#each sports as products, i}
    <SwiperSlide class="card-pesonalizacao">
        <a href="{products.href}">
            <img src={products.src} alt={products.title}>
            <span>{products.brand}</span>
            <h6>{products.title}</h6>
            <p>{products.price}€</p>
        </a>
    </SwiperSlide>
{/each}

</Swiper>
