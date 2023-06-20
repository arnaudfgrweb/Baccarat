export let removePlayerView = (player: Element) => {
    player.querySelectorAll('.player-bet-option').forEach((betOption) => {
        betOption.classList.remove('active');
        betOption.classList.add('unactive');
    });
    player.querySelector('.amount').textContent = "-";
    player.querySelector('.amount-total').textContent = "-";
    player.querySelector('.victory').textContent = "-";
    player.querySelector('.defeat').textContent = "-";
    player.querySelector('.percent').textContent = "- %";
    player.querySelector('.input-bet').value = "";
};

export let addLineGameView = (text: string) => {
    let containerGamaManager = document.querySelector('.container-game-manager');
    let line = document.createElement('div');
    line.className = 'table-line';
    line.textContent = text;
    containerGamaManager.parentNode.insertBefore(line, containerGamaManager);
};