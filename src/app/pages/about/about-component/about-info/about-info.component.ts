import { Component } from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent {

  abrirLinkedin() {
    const linkLinkedin = 'https://www.linkedin.com/in/yuri-moreira';
    window.open(linkLinkedin, '_blank') ;
  }

  abrirGithub() {
    const linkGithub = 'https://www.github.com/yurioff';
    window.open(linkGithub, '_blank');
  }

  downloadCV() {
    const url = '' // assets/file/cv/yuri_moreira_curriculo.pdf

    const a = document.createElement('a');
    a.href = url;
    a.download = 'yuri_moreira_curriculo.pdf';
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

}
