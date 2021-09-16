$(".paroller, [data-paroller-factor]").paroller({
    factor: 0.3,            // multiplier for scrolling speed and offset
    factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
    factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
    factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
    factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
    type: 'foreground',     // background, foreground
    direction: 'horizontal' ,// vertical, horizontal
    transition: 'transform 0.1s ease' // CSS transition, added on elements where type:'foreground'
});
$("[data-paroller-factor]").paroller();