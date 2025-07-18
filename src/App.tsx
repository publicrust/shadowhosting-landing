import React, { useState } from 'react';
import './App.css';

const translations: Record<string, Record<string, string>> = {
    'ru': {
        'slogan': 'Хостинг игровых серверов Rust и Minecraft. Стабильность, защита и круглосуточная поддержка от ShadowHosting.',
        'featuresTitle': 'Почему мы?',
        'feature1Title': 'Полная поддержка<br />24/7',
        'feature1Desc': 'Всегда поможем в тикетах!',
        'feature2Title': 'Гибкие<br />настройки',
        'feature2Desc': 'Если ни один тариф не подходит, напишите нам, и мы подберём оптимальный вариант!',
        'feature3Title': 'Стабильность<br />и защита',
        'feature3Desc': 'Бекапы и мощное железо.',
        'pricingTitle': 'Наши тарифы',
        'rustTitle': '🔷 Rust Сервера',
        'month': 'мес',
        'ram': 'ОЗУ',
        'cores': 'Ядра',
        'buyButton': '🛒 Купить',
        'rustStartName': '⚡ Rust Start',
        'rustMediumName': '🔥 Rust Medium',
        'rustHardName': '💥 Rust Hard',
        'rustHardPlusName': '🚀 Hard Plus',
        'minecraftTitle': '🔷 Minecraft Сервера',
        'mcChickenName': '🐔 Minecraft Chicken',
        'mcZombieName': '🧟 Minecraft Zombie',
        'mcWitherName': '👑 Minecraft Wither',
        'mcDragonName': '🐲 Minecraft Dragon',
        'tos': 'Пользовательское соглашение',
        'privacy': 'Политика конфиденциальности',
        'contacts': 'Контакты',
        'copyright': 'ShadowHosting 2024 Хостинг игровых серверов',
        'socialTitle': 'Мы в соцсетях'
    },
    'en': {
        'slogan': 'Hosting for Rust and Minecraft game servers. Stability, protection, and 24/7 support from ShadowHosting.',
        'featuresTitle': 'Why us?',
        'feature1Title': 'Full Support<br />24/7',
        'feature1Desc': 'We will always help in tickets!',
        'feature2Title': 'Flexible<br />Settings',
        'feature2Desc': 'If none of the plans fit, write to us, and we will find the optimal solution!',
        'feature3Title': 'Stability<br />& Protection',
        'feature3Desc': 'Backups and powerful hardware.',
        'pricingTitle': 'Our Plans',
        'rustTitle': '🔷 Rust Servers',
        'month': 'mo',
        'ram': 'RAM',
        'cores': 'Cores',
        'buyButton': '🛒 Buy',
        'rustStartName': '⚡ Rust Start',
        'rustMediumName': '🔥 Rust Medium',
        'rustHardName': '💥 Rust Hard',
        'rustHardPlusName': '🚀 Hard Plus',
        'minecraftTitle': '🔷 Minecraft Servers',
        'mcChickenName': '🐔 Minecraft Chicken',
        'mcZombieName': '🧟 Minecraft Zombie',
        'mcWitherName': '👑 Minecraft Wither',
        'mcDragonName': '🐲 Minecraft Dragon',
        'tos': 'Terms of Service',
        'privacy': 'Privacy Policy',
        'contacts': 'Contacts',
        'copyright': 'ShadowHosting 2024 Game Server Hosting',
        'socialTitle': 'Find us on social media'
    }
};

function App(): React.JSX.Element {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');

  const getTranslation = (key: string) => {
    const dict = translations[lang] ?? {};
    return { __html: dict[key] || key };
  };

  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'ru' ? 'en' : 'ru');
  };

  return (
    <>
      <div className="cyber-background"></div>
      <div className="container">
          <header>
              <div className="logo-container">
                  <h1 className="neon-text">SHADOWHOSTING</h1>
                  <p className="slogan" dangerouslySetInnerHTML={getTranslation('slogan')}></p>
                  <div className="glitch-effect"></div>
              </div>
              <div className="lang-switcher">
                  <a href="#" id="lang-btn" onClick={toggleLanguage}>
                    <i className="fas fa-globe"></i> {lang.toUpperCase()}
                  </a>
              </div>
          </header>
          
          <main>
              <div className="features-section">
                  <h2 className="section-title" dangerouslySetInnerHTML={getTranslation('featuresTitle')}></h2>
                  <div className="features-grid">
                      <div className="feature-card">
                          <h3 dangerouslySetInnerHTML={getTranslation('feature1Title')}></h3>
                          <p dangerouslySetInnerHTML={getTranslation('feature1Desc')}></p>
                      </div>
                      <div className="feature-card">
                          <h3 dangerouslySetInnerHTML={getTranslation('feature2Title')}></h3>
                          <p dangerouslySetInnerHTML={getTranslation('feature2Desc')}></p>
                      </div>
                      <div className="feature-card">
                          <h3 dangerouslySetInnerHTML={getTranslation('feature3Title')}></h3>
                          <p dangerouslySetInnerHTML={getTranslation('feature3Desc')}></p>
                      </div>
                  </div>
              </div>

              <section className="pricing-section">
                  <h2 className="section-title" dangerouslySetInnerHTML={getTranslation('pricingTitle')}></h2>
                  <div className="game-plans">
                      <h3 dangerouslySetInnerHTML={getTranslation('rustTitle')}></h3>
                      <div className="pricing-grid">
                          <div className="pricing-card">
                              <div className="card-header">
                                  <h4 dangerouslySetInnerHTML={getTranslation('rustStartName')}></h4>
                                  <span className="price">500₽/<span dangerouslySetInnerHTML={getTranslation('month')}></span></span>
                              </div>
                              <ul>
                                  <li>SSD: 25GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('ram')}></span>: 8GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('cores')}></span>: 2</li>
                              </ul>
                              <a href="https://cp.shadowhosting.ru/" className="buy-button" dangerouslySetInnerHTML={getTranslation('buyButton')}></a>
                          </div>
                          <div className="pricing-card">
                              <div className="card-header">
                                  <h4 dangerouslySetInnerHTML={getTranslation('rustMediumName')}></h4>
                                  <span className="price">1000₽/<span dangerouslySetInnerHTML={getTranslation('month')}></span></span>
                              </div>
                              <ul>
                                  <li>SSD: 30GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('ram')}></span>: 10GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('cores')}></span>: 2</li>
                              </ul>
                              <a href="https://cp.shadowhosting.ru/" className="buy-button" dangerouslySetInnerHTML={getTranslation('buyButton')}></a>
                          </div>
                          <div className="pricing-card">
                              <div className="card-header">
                                  <h4 dangerouslySetInnerHTML={getTranslation('rustHardName')}></h4>
                                  <span className="price">1800₽/<span dangerouslySetInnerHTML={getTranslation('month')}></span></span>
                              </div>
                              <ul>
                                  <li>SSD: 35GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('ram')}></span>: 13GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('cores')}></span>: 4</li>
                              </ul>
                              <a href="https://cp.shadowhosting.ru/" className="buy-button" dangerouslySetInnerHTML={getTranslation('buyButton')}></a>
                          </div>
                          <div className="pricing-card">
                              <div className="card-header">
                                  <h4 dangerouslySetInnerHTML={getTranslation('rustHardPlusName')}></h4>
                                  <span className="price">2800₽/<span dangerouslySetInnerHTML={getTranslation('month')}></span></span>
                              </div>
                              <ul>
                                  <li>SSD: 40GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('ram')}></span>: 16GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('cores')}></span>: 4</li>
                              </ul>
                              <a href="https://cp.shadowhosting.ru/" className="buy-button" dangerouslySetInnerHTML={getTranslation('buyButton')}></a>
                          </div>
                      </div>
                  </div>
                  <div className="game-plans">
                      <h3 dangerouslySetInnerHTML={getTranslation('minecraftTitle')}></h3>
                      <div className="pricing-grid">
                          <div className="pricing-card">
                              <div className="card-header">
                                  <h4 dangerouslySetInnerHTML={getTranslation('mcChickenName')}></h4>
                                  <span className="price">300₽/<span dangerouslySetInnerHTML={getTranslation('month')}></span></span>
                              </div>
                              <ul>
                                  <li>SSD: 8GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('ram')}></span>: 4GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('cores')}></span>: 1</li>
                              </ul>
                              <a href="https://cp.shadowhosting.ru/" className="buy-button" dangerouslySetInnerHTML={getTranslation('buyButton')}></a>
                          </div>
                          <div className="pricing-card">
                              <div className="card-header">
                                  <h4 dangerouslySetInnerHTML={getTranslation('mcZombieName')}></h4>
                                  <span className="price">800₽/<span dangerouslySetInnerHTML={getTranslation('month')}></span></span>
                              </div>
                              <ul>
                                  <li>SSD: 16GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('ram')}></span>: 8GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('cores')}></span>: 4</li>
                              </ul>
                              <a href="https://cp.shadowhosting.ru/" className="buy-button" dangerouslySetInnerHTML={getTranslation('buyButton')}></a>
                          </div>
                          <div className="pricing-card">
                              <div className="card-header">
                                  <h4 dangerouslySetInnerHTML={getTranslation('mcWitherName')}></h4>
                                  <span className="price">2000₽/<span dangerouslySetInnerHTML={getTranslation('month')}></span></span>
                              </div>
                              <ul>
                                  <li>SSD: 25GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('ram')}></span>: 14GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('cores')}></span>: 6</li>
                              </ul>
                              <a href="https://cp.shadowhosting.ru/" className="buy-button" dangerouslySetInnerHTML={getTranslation('buyButton')}></a>
                          </div>
                          <div className="pricing-card">
                              <div className="card-header">
                                  <h4 dangerouslySetInnerHTML={getTranslation('mcDragonName')}></h4>
                                  <span className="price">2700₽/<span dangerouslySetInnerHTML={getTranslation('month')}></span></span>
                              </div>
                              <ul>
                                  <li>SSD: 40GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('ram')}></span>: 16GB</li>
                                  <li><span dangerouslySetInnerHTML={getTranslation('cores')}></span>: 8</li>
                              </ul>
                              <a href="https://cp.shadowhosting.ru/" className="buy-button" dangerouslySetInnerHTML={getTranslation('buyButton')}></a>
                          </div>
                      </div>
                  </div>
              </section>

          </main>

          <footer>
              <div className="footer-links">
                  <a href="https://shadowhosting.ru/tos.html" className="neon-link" dangerouslySetInnerHTML={getTranslation('tos')}></a>
                  <a href="https://shadowhosting.ru/privacy.html" className="neon-link" dangerouslySetInnerHTML={getTranslation('privacy')}></a>
                  <a href="https://shadowhosting.ru/contact.html" className="neon-link" dangerouslySetInnerHTML={getTranslation('contacts')}></a>
              </div>
              <div className="social-media">
                  <h4 className="social-title" dangerouslySetInnerHTML={getTranslation('socialTitle')}></h4>
                  <div className="social-links">
                      <a href="#" className="social-icon" aria-label="Discord"><i className="fab fa-discord"></i></a>
                      <a href="#" className="social-icon" aria-label="Telegram"><i className="fab fa-telegram-plane"></i></a>
                      <a href="#" className="social-icon" aria-label="Техническая поддержка"><i className="fas fa-headset"></i></a>
                  </div>
              </div>
              <div className="payment-methods">
                  <div className="payment-card">
                      <img src="https://shadowhosting.ru/img/banks/visa.png" alt="Visa" />
                  </div>
                  <div className="payment-card">
                      <img src="https://shadowhosting.ru/img/banks/mc_symbol_opt_73_1x.png" alt="MasterCard" />
                  </div>
                  <div className="payment-card">
                      <img src="https://shadowhosting.ru/img/banks/mirrur.png" alt="MIR" />
                  </div>
              </div>
              <div className="copyright neon-text" dangerouslySetInnerHTML={getTranslation('copyright')}></div>
              <div className="created-by">
                  created by SHADOWHOSTING
              </div>
          </footer>
      </div>
    </>
  );
}

export default App; 