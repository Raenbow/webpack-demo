import $ from 'jquery';
import './style.css';

$('#login').click(() => {
    console.log('U CLICKITY CLACKED DAT BUTTON YO!');

    import('./helpers').then(resp => {
        console.log('Import Resp:', resp);

        const { login, addToDom } = resp;

        const result1 = login('SaltySuzy', 'zxcv');

        const result2 = login('Rando', 'randomson');

        addToDom('h1', result1, 'blue');
        addToDom('h1', result2, 'purple');
    })
})

$('#load-image').click( () => {
    console.log('Load Img Clcked');

    import('./helpers').then( resp => {
        const { addImg } = resp;

        import('./positivity.jpg').then( src => {
            addImg(src.default);
        })
    })
});
