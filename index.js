const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'AGALARSMPIYU.aternos.me', 
    username: 'AFKbotPlus',     
    version: false            
  });

  bot.on('login', () => {
    console.log('Bot sunucuya başarıyla giriş yaptı!');
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    
    if (message === 'merhaba') {
      bot.chat('Merhaba ' + username + '! Ben AFKbotPlus.');
    }
  });

  bot.on('end', (reason) => {
    console.log('Bot sunucudan koptu veya atıldı. Nedeni:', reason);
    console.log('5 saniye sonra tekrar bağlanılıyor...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('Bir hata oluştu:', err);
  });
}

createBot();
