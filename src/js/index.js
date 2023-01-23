/* 
objetivo 1 - quando o usario clicar no botao de veja o triler, devamos abrir a modal com o video do trailer
    -passo numero 1 - dar um jeito de pegar o elemento que  representa o botao na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no botao
    - passo 3 - dar um jaito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela 

objetivo 2 - quando o usuario clicar no x devemos fechar 
a modal
   -passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
   - passo 2 - dar um jeito de identificar quando o usuario clicar no x
   - passo 3 - fechar a modal

*/

console.log('mostrar o document',document);

const botao_trailer_mario = document.querySelector('.botao-trailer');
const botao_fechar_modal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkdovideo = video.src;

function alternarmodal(){
    modal.classList.toggle('aberto');
}
botao_trailer_mario.addEventListener('click', () => {
    alternarmodal();
    video.setAttribute('src',linkdovideo)
});
botao_fechar_modal.addEventListener('click', () => {
    alternarmodal();
    video.setAttribute('src','');

});








