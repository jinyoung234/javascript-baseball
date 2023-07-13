/* eslint-disable no-unused-vars */
const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { GAME, USER } = require('../src/constants/message');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getLogLeadLineSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'readLine');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('"숫자 야구 게임을 시작합니다." 메시지 출력 후 게임이 시작될 수 있어야 한다.', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(GAME.RUN));
  });

  test('상대방(컴퓨터)이 무작위로 3개의 수를 정할 수 있어야 한다.', () => {
    const app = new App();
    app.play();
    const computerValue = [...new Set(app.controller.computer.getValue())];
    expect(computerValue).toHaveLength(3);
  });

  test('입력을 받을 때 "숫자를 입력해주세요 : " 메시지를 출력할 수 있어야 한다.', () => {
    const logSpy = getLogLeadLineSpy();
    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith(USER.INPUT, expect.any(Function));
  });

  test('사용자 입력 값에 대해 예외 처리가 되었는지 확인 한다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234', 'zev', '1', '111'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
