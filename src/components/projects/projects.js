export function projectFunction() {

    var grid = document.querySelector('.grid');

    var msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 43,
        percentPosition: true
    });

    imagesLoaded(grid).on('progress', function () {
        msnry.layout();
    });

    const expandButton = document.querySelector('.expand-button');
    const collapseButton = document.querySelector('.collapse-button');

    expandButton.addEventListener('click', function () {
        const hiddenItems = document.querySelectorAll('.grid-item.hidden');
        hiddenItems.forEach(item => {
            item.classList.remove('hidden');
        });
        this.style.display = 'none';
            document.querySelector('.grid').classList.remove('gradient-overlay');
        collapseButton.style.display = 'block';
    });

    collapseButton.addEventListener('click', function () {
        const items = document.querySelectorAll('.grid-item:not(.hidden)');
        for(let i = 6; i < items.length; i++) {
            items[i].classList.add('hidden');
        }
        this.style.display = 'none';
        expandButton.style.display = 'block';
    });
}
