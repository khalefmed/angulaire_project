// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <!-- Google Fonts Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <header class="app-header">
      <div class="header-container">
        <h1 class="app-title">
          Gestion Produits
        </h1>

        <a routerLink="/add" class="fab-button" title="Ajouter un produit">
          <svg viewBox="0 0 24 24" class="icon-plus">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          
        </a>
      </div>
    </header>

    <main class="app-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      min-height: 100vh;
    }

    .app-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.75);
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      z-index: 1000;
      padding: 1rem 30px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
    }

    .header-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .app-title {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
      color: #1e293b;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .logo {
      font-size: 2.2rem;
      font-weight: 700;
      background: linear-gradient(135deg, #ba128b, #de43b2ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Bouton flottant ultra-moderne */
    .fab-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #ba128b, #de43b2ff);
      color: white;
      border-radius: 50%;
      box-shadow: 0 10px 30px rgba(235, 36, 199, 0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      position: relative;
      overflow: hidden;
    }

    .fab-button:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 20px 40px rgba(239, 24, 189, 0.5);
    }

    .fab-button:active {
      transform: translateY(-2px) scale(1.02);
    }

    .fab-button::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .fab-button:hover::before {
      opacity: 1;
    }

    .icon-plus {
      width: 28px;
      height: 28px;
      fill: currentColor;
    }

    .app-content {
      margin-top: 100px;
      padding: 2rem;
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .header-container { padding: 0 1.5rem; }
      .app-title { font-size: 1.5rem; }
      .logo { font-size: 1.9rem; }
      .app-content { margin-top: 90px; padding: 1.5rem; }
    }

    @media (max-width: 480px) {
      .app-title { font-size: 1.3rem; gap: 0.5rem; }
      .logo { font-size: 1.7rem; }
    }
  `]
})
export class AppComponent { }