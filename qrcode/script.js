// Inisialisasi objek QR Code
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200
});

function generateQR() {
    var userInput = document.getElementById("text-input").value;

    if (userInput.trim() === "") {
        alert("Mohon masukkan teks atau URL!");
        return;
    }

    // Menghasilkan QR Code berdasarkan input
    qrcode.makeCode(userInput);
}