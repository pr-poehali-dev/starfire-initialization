export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ВСЁ*ДОМА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              КАК ДОМА,
              <br />
              ТОЛЬКО <span>вкуснее</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Домашняя еда с любовью — прямо к вашей двери. Настоящие рецепты, свежие продукты и тепло домашней кухни без лишних хлопот.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать сейчас
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ГОТОВО
              <br />
              С ДУШОЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ДОМАШНЕЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВКУСНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ГОТОВИМ КАК МАМА * ДОСТАВКА ПО ГОРОДУ * ТОЛЬКО СВЕЖЕЕ * БЕЗ КОНСЕРВАНТОВ * ДОМАШНИЕ РЕЦЕПТЫ *
            ГОТОВИМ КАК МАМА * ДОСТАВКА ПО ГОРОДУ * ТОЛЬКО СВЕЖЕЕ * БЕЗ КОНСЕРВАНТОВ * ДОМАШНИЕ РЕЦЕПТЫ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ЛЮБИМЫЕ БЛЮДА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит дня</span>
              <img
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Борщ домашний"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Борщ домашний</h3>
                  <span className="price">380 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Наваристый борщ по бабушкиному рецепту, со сметаной и чесночным пампушком.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Любимое
              </span>
              <img
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Котлеты с пюре"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Котлеты с пюре</h3>
                  <span className="price">420 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Сочные котлеты из смешанного фарша с нежным картофельным пюре на сливках.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Свежее
              </span>
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пироги домашние"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пирог с капустой</h3>
                  <span className="price">290 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Пышный домашний пирог с тушёной капустой и яйцом. Только из печи.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЕДА С ТЕПЛОМ.</h2>
            <p className="vibe-text">
              Мы готовим так, как готовят дома — с заботой и без спешки. Никаких полуфабрикатов, только свежие продукты и проверенные рецепты. Закажите сегодня и почувствуйте разницу.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @VSE.DOMA
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Домашняя еда 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Домашняя еда 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Домашняя еда 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Домашняя еда 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ВСЁ*ДОМА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Доставка домашней еды по городу. Готовим каждый день с любовью и заботой о вашем здоровье.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Режим работы</h4>
          <ul>
            <li>Пн–Пт: 8:00 – 21:00</li>
            <li>Сб–Вс: 9:00 – 20:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>
              Доставка от 1 часа
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (000) 000-00-00</li>
            <li>hello@vsedoma.ru</li>
            <li style={{ marginTop: "10px" }}>
              <a href="#" style={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
