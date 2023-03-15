import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RootRoutes } from 'src/app/types/enums/root-routes.enum';

@Component({
  selector: 'app-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.scss']
})
export class ModalLayoutComponent implements OnInit, AfterViewInit {
  
  @ViewChild('container', { read: ElementRef} ) section: ElementRef | undefined;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.section?.nativeElement.classList.remove('login');
    if (window.location.href.includes(RootRoutes.AUTH)){
      this.section?.nativeElement.classList.add('login');
    }
  }

  closeDialog(): void {
    this.router.navigate([
      '/root',
      { outlets: { modalOutlet: null } },
    ]);
  }
}
