document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelectorAll('.key');
    const activeKeys = new Set();
    
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement && !activeKeys.has(key)) {
            keyElement.style.backgroundColor = 'orange';
            activeKeys.add(key);
        }
    });

    document.addEventListener('keyup', function(event) {
        const key = event.key;
        const keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement && activeKeys.has(key)) {
            keyElement.style.backgroundColor = '#fff';
            activeKeys.delete(key);
        }
    });
});

