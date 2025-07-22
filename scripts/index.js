document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const lineBnr = document.querySelector('.line_bnr');
    let lastScrollTop = 0; // 이전 스크롤 위치

    // 스크롤 이벤트 감지
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;

        // 1. 스크롤이 30px 이상일 때, header가 top 0 위치에 고정되도록
        if (scrollTop > 30) {
            header.style.position = 'fixed'; // header를 fixed로 설정
            header.style.top = '0'; // top 0으로 설정
            header.style.width = '100%'; // 화면 너비에 맞게 설정
            header.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease'; // 부드러운 전환 효과 추가
            header.style.backgroundColor = '#fff'; // 배경색을 흰색으로 변경
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'; // 그림자 추가
        } else {
            header.style.position = 'absolute'; // header를 원래 위치로 설정
            header.style.top = '30px'; // line_bnr 아래에 위치
            header.style.backgroundColor = 'transparent'; // 배경을 투명하게 설정
            header.style.boxShadow = 'none'; // 그림자 제거
        }

        // 4. 스크롤을 아래에서 올릴 때, header가 원래 위치로 돌아오게끔 처리
        if (scrollTop < lastScrollTop) {
            if (scrollTop <= 30) {
                header.style.position = 'absolute'; // header를 원래 위치로 설정
                header.style.top = '30px'; // line_bnr 아래로 설정
                header.style.backgroundColor = 'transparent'; // 배경을 투명하게 설정
                header.style.boxShadow = 'none'; // 그림자 제거
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 마지막 스크롤 위치 업데이트
    });
});
