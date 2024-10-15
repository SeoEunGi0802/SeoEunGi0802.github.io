$(document).ready(function () {
    general_utils();
    blog_posts();
})

function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 1000);
    });
}

function blog_posts() {
    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://xddsr123.tistory.com/entry/Github-Action-%EC%9C%BC%EB%A1%9C-AWS-Lambda-function-%EC%9E%90%EB%8F%99-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0',
            title: 'Github Action 으로 AWS Lambda 자동 배포하기',
        },
        {
            url: 'https://xddsr123.tistory.com/entry/AWS-CloudWatch-%EB%A1%9C%EC%BB%AC-%ED%84%B0%EB%AF%B8%EB%84%90%EC%97%90%EC%84%9C-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0',
            title: 'AWS CloudWatch 로컬 터미널에서 확인하기',
        },
        {
            url: 'https://xddsr123.tistory.com/entry/AWS-CLI-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0',
            title: 'AWS CLI 설정하기',
        },
        {
            url: 'https://xddsr123.tistory.com/entry/Spring-boot-log-%ED%8C%8C%EC%9D%BC%EC%9D%84-AWS-S3%EC%97%90-%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C-%EC%97%85%EB%A1%9C%EB%93%9C-%EC%8B%9C%ED%82%A4%EA%B8%B0',
            title: 'Spring boot log 파일을 AWS S3에 자동으로 업로드 시키기',
        },
        {
            url: 'https://xddsr123.tistory.com/entry/Jasypt%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%95%94%ED%98%B8%ED%99%94',
            title: 'Jasypt를 이용한 암호화',
        },
    ];

    let post_html = [];

    for (let post of posts) {
        let tags;
        if (post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://xddsr123.tistory.com/tag/${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
                <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>            
            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg" alt="blog-arrow"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://xddsr123.tistory.com');">
        <div class="blog-link">
            <h3><a href="https://xddsr123.tistory.com">블로그의 다른 게시물 보러가기</a></h3>            
        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg" alt="blog-arrow"/>
        </div>
    </div>
    `;

    post_html.push(post_template);
    $('#rss-feeds').html(post_html);
}

function blog_link_click(url) {
    window.open(url);
}
