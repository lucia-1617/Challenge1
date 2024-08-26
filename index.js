document.getElementById('encryptBtn').addEventListener('click', encryptText);
document.getElementById('decryptBtn').addEventListener('click', decryptText);
document.getElementById('copyBtn').addEventListener('click', copyText);
document.getElementById('inputText').addEventListener('input', toggleCopyButton);

function encryptText() {
    const input = document.getElementById('inputText').value;
    const encrypted = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('resultText').value = encrypted;
    toggleCopyButton();
    showResult();
    document.getElementById('decryptBtn').disabled = false;
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    const decrypted = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('resultText').value = decrypted;
    toggleCopyButton();
}

function copyText() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function toggleCopyButton() {
    const input = document.getElementById('inputText').value;
    const copyBtn = document.getElementById('copyBtn');
    const asideImg = document.getElementById('asideImg');
    const asideH3 = document.getElementById('asideH3');
    const asideMensaje = document.getElementById('asideMensaje');
    const resultText = document.getElementById('resultText');

    if (input.trim() !== '') {
        copyBtn.style.display = 'block';
        asideImg.style.display = 'none';
        asideH3.style.display = 'none';
        asideMensaje.style.display = 'none';
        resultText.style.display = 'block';
    } else {
        copyBtn.style.display = 'none';
        asideImg.style.display = 'block';
        asideH3.style.display = 'block';
        asideMensaje.style.display = 'block';
        resultText.style.display = 'none';
    }
}

function showResult() {
    document.getElementById('asideImg').style.display = 'none';
    document.getElementById('asideH3').style.display = 'none';
    document.getElementById('asideMensaje').style.display = 'none';
    document.getElementById('resultText').style.display = 'block';
    document.getElementById('copyBtn').style.display = 'block';
}