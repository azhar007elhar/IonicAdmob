import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { AdmobService } from '../services/admob.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public AdmobService: AdmobService
  ) {

    // this.AdmobService.prepareInterstitial();
    this.AdmobService.showBottomBanner();
  }

  async showCenterBanner(){
    await this.AdmobService.removeBanner();
    this.AdmobService.showCenterBanner();
  }


  async showTopBanner() {
    await this.AdmobService.removeBanner();
    this.AdmobService.showTopBanner()
  }


  async showBottomBanner() {
    await this.AdmobService.removeBanner();
    this.AdmobService.showBottomBanner()
  }


  prepareInterstitial(){
    this.AdmobService.prepareInterstitial();
  }
  showInterstitial() {
    this.AdmobService.showInterstitial();
  }

}
