const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'AGALARSMPIYU.aternos.me',
        username: 'AFKbotPlus',
        version: '1.20.4', // Sunucunuzun tam sürümünü buraya yazın (örn: 1.20.4 veya 1.21)
        auth: 'offline'    // Aternos/Offline sunucular için UUID çakışmasını önler
    });

    bot.on('login', () => {
        console.log('Bot sunucuya başarıyla giriş yaptı!');
    });

    bot.on('chat', (username, message) => {
        if (username === bot.username) return;

        if (message === 'merhaba') {
            bot.chat('Merhaba ' + username + ' ! Ben AFKbotPlus.');
        }
    });

    bot.on('end', (reason) => {
        console.log('Bot sunucudan koptu veya atıldı. Nedeni:', reason);
        console.log('15 saniye sonra tekrar bağlanılıyor...');
        // Anti-bot tetiklenmemesi için süreyi 15 saniyeye çıkardık
        setTimeout(createBot, 15000);
    });

    bot.on('error', err => {
        console.log('Bir hata oluştu:', err);
    });
}

createBot();
