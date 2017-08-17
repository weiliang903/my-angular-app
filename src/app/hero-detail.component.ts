import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
    <!-- 未选中之前selectedHer = undefined,通过ngIf 避免报错 -->
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `,
})

export class HeroDetailComponent {
  // 绑定到目标属性 [hero] 必须是一个输入属性，否则会报错，在属性定以前加上 @Input 装饰器，表明是一个输入属性
  @Input() hero: Hero;
}
