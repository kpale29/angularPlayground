import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebcamModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'testAngular';
  ngOnInit() {
    // Al inicializar la aplicación, verifica si está en un navegador embebido
    if (this.isEmbeddedBrowser()) {
      this.redirectToBrowser();
    }
  }

  // Función que detecta si el usuario está utilizando Facebook o Instagram embebido
  isEmbeddedBrowser(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor;
    return /FBAN|FBAV|Instagram/.test(userAgent);
  }

  // Redirige al navegador nativo
  redirectToBrowser() {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
      // Intenta abrir el sitio en el navegador nativo de Android (Chrome)
      window.location.href =
        'intent://f9tw33nh-4200.use2.devtunnels.ms/#Intent;scheme=https;package=com.android.chrome;end';
    } else if (isIOS) {
      // Abre el sitio en Safari en dispositivos iOS
      window.location.href =
        'intent://f9tw33nh-4200.use2.devtunnels.ms/#Intent;scheme=https;package=com.android.chrome;end';
    } else {
      // Para otros casos, simplemente redirige al sitio
      window.location.href =
        'intent://f9tw33nh-4200.use2.devtunnels.ms/#Intent;scheme=https;package=com.android.chrome;end';
    }
  }
}
