<script>
    import { Navigation, Scrollbar, A11y } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    import './ListData.css'
    export let sports;
    let slidesPerViewConf = sports.length > 3 ? 4 : 1;
    let slidesPerViewConfMob = sports.length > 3 ? 2 : 1;

</script>

<Swiper
modules={[Navigation, Scrollbar, A11y]}
breakpoints={{
    "640": {
      slidesPerView: 1,
      spaceBetween: 20,
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
on:slideChange={() => console.log('slide change')}
on:swiper={(e) => console.log(e.detail[0])}
>

{#each sports as products, i}
    <SwiperSlide class="card-pesonalizacao">
        <a href="{products.href}">
            <img src={products.src} alt={products.title}>
            <p>{products.brand}</p>
            <h6>{products.title}</h6>
            <p>{products.price}€</p>
        </a>
    </SwiperSlide>
{/each}

</Swiper>
