const slideToBlock = (id, is_animate) => {
    let anim
    is_animate ? anim = 'smooth' : '';
    if(id == 'slider')
        window.scrollTo({ top: 0, behavior: anim });
    else
        document.getElementById(id)?.scrollIntoView({behavior: anim});
};

export default slideToBlock