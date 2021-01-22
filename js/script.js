$(document).ready(function(){
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        }
    ];

    const blu = '#0000ff';
    const arancione = '#ffa500';
    const viola = '#800080';
    const colori = icons.map((element) => {
        const {type} = element;
        return {
            ...element,
            color: type == 'animal' ? blu :
            type == 'user' ? arancione : viola
        }
    });
    // console.log(colori);
    colori.forEach((element) => {
        const {name,prefix,type,family,color} = element;
        $('.icons').append(`
            <div class="icon">
                <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                <div class="nome">${name}</div>
            </div>
        `);
    });

});