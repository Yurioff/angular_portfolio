import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.css']
})
export class AboutModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  fecharModal() {
    this.closeModal.emit();
  }

  openGithub(){
    const linkGithub = 'https://www.github.com/yurioff';
    window.open(linkGithub, '_blank') ;
  }

  openLinkedin(){
    const linkLinkedin = 'https://www.linkedin.com/in/yuri-moreira';
    window.open(linkLinkedin, '_blank')
  }

  openTwitter() {
    const linkTwitter = "https://twitter.com/yuh_1985";
    window.open(linkTwitter, '_blank');
  }

  openYoutube(){
    const linkYoutube = "https://www.youtube.com/@yurimoreira7366";
    window.open(linkYoutube, '_blank');
  }

  openGmail(){
    const linkGmail = "mailto:yuri.moreira803@gmail.com";
    window.open(linkGmail,'_blank');
  }

  openDiscord(){
    const linkDiscord = "https://www.discord.com/users/670101506405564417/";
    window.open(linkDiscord,'_blank')  
  }
}
