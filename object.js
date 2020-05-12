var memberArray = ['dh lewis', 'graphittie', 'leezzhce'];

console.log("memberArray[1]", memberArray[1]); // 배열의 2번째 값을 가져오는 것.
// 콘솔로그는 인자로 전달된 변수들을 출력해 주는 특성이 있다.

var memberObject = {
    manager: 'dh_lewis',
    developer: 'graphittie',
    designer: 'leezhce'
}

console.log('memberObject.designer', memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
// 위 두 줄 같은 결과

// 값 생성 & 값 읽는 방법 함.

// 수정 & 삭제

memberObject.designer = 'leezche'; // 수정
delete memberObject.designer; // 삭제 삭제 후 console -> undefined
