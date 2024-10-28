document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const khodamNames = [
        "Khodam Macan Putih",
        "Khodam Macan Kumbang",
        "Khodam Naga",
        "Khodam Jin qorin",
        "Khodam Ular",
        "Khodam Kak Gem",
        "Khodam Kutu",
        "Khodam Munyuk",
        "Khodam pinguin",
        "Khodam Babi Ngepet",
        "Khodam Gorila",
        "Khodam Kremi",
        "Khodam Valak",
        "Khodam Walang Sangit",
        "Khodam Teletabies",
        "Khodam Buto Ijo",
        "Khodam Tuyul Mullet",
        "Tidak Ada"
    ];

    const randomIndex = Math.floor(Math.random() * khodamNames.length);
    const khodamName = khodamNames[randomIndex];

    document.getElementById('result').innerText = "Khodam yang berada pada diri anda adalah: " + khodamName;
});
