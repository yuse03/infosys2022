'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        //btn.textContent = 'hit!';
        const results = ['大吉','中吉','凶','末吉'];
        const n = Math.floor(Math.random( ) * 3);

        btn.textContent = results[n];

        // switch (n)  {      
        // case 0:
        // btn.textContent = '大吉';
        // 　　break;
        // case 1:
        //     btn.textContent = '中吉';
        //     break;
        // case 2:
        //     btn.textContent = '凶';
        //     break;
        // }

    });
}