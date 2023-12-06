import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

type User = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss',
})
export class ForComponent {
  users = [
    { id: 1, name: 'Elon Musk' },
    { id: 2, name: 'Bill Gates' },
    { id: 3, name: 'Mark Zuckerberg' },
    { id: 4, name: 'Satya Nadella' },
    { id: 5, name: 'Sundar Pichai' },
    { id: 6, name: 'Tim Cook' },
  ];
}
