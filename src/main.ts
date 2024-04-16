import './styles/styles.css'
import './styles/among.css'
import './styles/rules.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1 id="title">START REACTOR</h1>
<div class="container">
  <div class="painel">
    <div class="boxPainel">
        <div class="computerLedPanel">
            <div class="led lvl1"></div>
            <div class="led lvl2"></div>
            <div class="led lvl3"></div>
            <div class="led lvl4"></div>
            <div class="led lvl5"></div>
        </div>
        <div class="painelMemory">
            <div class="memory"></div>
            <div class="memory"></div>
            <div class="memory"></div>
            <div class="memory"></div>
            <div class="memory"></div>
            <div class="memory"></div>
            <div class="memory"></div>
            <div class="memory"></div>
            <div class="memory"></div>
            <div class="btns">
              <h1 id="loadButton">LOAD</h1>
              <h1 id="startButton" style="display: none">PLAY</h1>
            </div>
        </div>
    </div>
  </div>

  <div class="painel">
    <div class="boxPainel">
        <div class="playerLedPanel">
            <div class="led lvl1.1"></div>
            <div class="led lvl2.1"></div>
            <div class="led lvl3.1"></div>
            <div class="led lvl4.1"></div>
            <div class="led lvl5.1"></div>
        </div>
        <div class="playerMemory">
            <div data-memory='0' class="player_memory"></div>
            <div data-memory='1' class="player_memory"></div>
            <div data-memory='2' class="player_memory"></div>
            <div data-memory='3' class="player_memory"></div>
            <div data-memory='4' class="player_memory"></div>
            <div data-memory='5' class="player_memory"></div>
            <div data-memory='6' class="player_memory last"></div>
            <div data-memory='7' class="player_memory last"></div>
            <div data-memory='8' class="player_memory last"></div>
        </div>
    </div>
  </div>
</div>
<div class="size">
  <div class="player">
    <div class="legs"></div>
    <div class="back"></div>
    <div class="glass"></div>
  </div>
</div>
`
