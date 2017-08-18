import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  // template: '<div></div>'// 两种方式定义html模板
  // 注册一个HeroService提供商，来告诉注入器如何创建HeroService
  styleUrls: [ './heroes.component.css' ]
  // 两种方式定义样式
  // styles: [ `
  //   .selected {
  //     background-color: #CFD8DC !important;
  //     color: white;
  //   }
  // `]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // 构造函数不应该包含复杂的逻辑, 常用来把构造函数的参数赋值给属性
  // 在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  // Angualr 会主动调用 ngOnInit 生命周期钩子 => 组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时。
  // 在AppComponent激活时获取英雄数据
  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate([ '/detail', this.selectedHero.id ]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}

