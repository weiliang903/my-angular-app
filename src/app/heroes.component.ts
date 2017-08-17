import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  // template: `<div>{{title}}</div>`,// 两种方式定义html模板
  // styleUrls: ['./app.component.css']// 两种方式定义样式

  // 注册一个HeroService提供商，来告诉注入器如何创建HeroService
  providers: [],
  styles: [ `
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }

    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }

    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }

    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }

    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }

    .heroes .text {
      position: relative;
      top: -3px;
    }

    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class HeroesComponent implements OnInit {
  // 在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点
  constructor(private heroService: HeroService) {
    // 构造函数不应该包含复杂的逻辑, 常用来把构造函数的参数赋值给属性

  }
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  // Angualr 会主动调用 ngOnInit 生命周期钩子 => 组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时。
  // 在AppComponent激活时获取英雄数据
  ngOnInit(): void {
    this.getHeroes();
  }
}

