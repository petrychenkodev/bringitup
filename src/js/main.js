import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';


window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
    
    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next'
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__content-slider',
        prev: '.feed__info-btns .slick-prev',
        next: '.feed__info-btns .slick-next'
    });
    feedSlider.init();

    
}); 
new Difference('.officerold', '.officernew', '.officer__card-item').init();