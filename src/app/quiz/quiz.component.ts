import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class QuizComponent {

  private answerMap: Map<number, number> = new Map()

  titles: string[] = [
    '어느날 시간여행 능력을 갖게됐다. 어디로 갈까?',
    '보물 찾기 게임 중',
    '만약 당신이 건축가라면',
    '친구들을 위해 요리를 하게 됐다.',
    '당신은 탐험가',
    '과학자로서 새로운 연구를 시작할 때',
    '학교 축제 준비를 하게 된 당신',
    '영화 감독으로서 시나리오를 작성한다면',
    '당신은 패션 디자이너다. 어떤 디자인을 할 것인가?',
  ]
  answers: string[][] = [
    ['과거의 유명한 사건을 보러간다.', '미래는 어떤 모습일까?'],
    ['지도의 구체적인 표시와 지형을 따라간다.', '직관을 믿고 보물의 위치를 추측한다.'],
    ['세부적인 구조를 계획한다.', '전체적인 디자인과 창의성에 중점을 둔다.'],
    ['검증된 레시피를 따른다.', '나만의 감을 믿고 독창적인 방법을 사용한다.'],
    ['실용적이고 안전한 경로를 선택한다.', '역시 탐험은 미지의 세계를 개척하는 것!'],
    ['실제 실험 데이터에 의존한다.', '이론적인 개념과 가능성을 중요하게 여긴다.'],
    ['필요한 준비 사항과 일정을 철저리 관리한다.', '일어날 수 있는 다양한 가능성에 더 신경쓴다.'],
    ['현실적이고 구체적인 시나리오에 집중한다.', '상상력이 풍부한 판타지 스토리를 만든다.'],
    ['현재 유행하는 스타일과 실용적인 스타일을 중시한다.', '실험적이고 전에 없던 스타일을 창조한다.']
  ]
  currentQuestionIndex: number = 0;
  result: string = '';

  constructor() { }

  onAnswer(index: number): void {
    // 결과 로직을 여기에 추가 (예: 정답 확인)
    if (index == 0) {
      const currentCount = this.answerMap.get(0) ?? 0
      this.answerMap.set(0, (currentCount + 1))
    } else {
      const currentCount = this.answerMap.get(1) ?? 0
      this.answerMap.set(1, (currentCount + 1))
    }

    // 다음 질문으로 넘어가기
    if (this.currentQuestionIndex < this.titles.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // 모든 질문이 끝났을 때의 로직
      const oCount = this.answerMap.get(0) ?? 0
      const xCount = this.answerMap.get(1) ?? 0

      if (oCount > xCount) {
        this.result = '당신은 N입니다!';
      } else {
        this.result = '당신은 S입니다!';
      }
    }
  }
}
