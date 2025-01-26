$(() => {
    render_projects('all');
})

let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'https://opengraph.githubassets.com/1/HongBer-daelim/HONGBER_DEALIM_JOB',
            link: 'https://github.com/SeoEunGi0802/HongBer',
            title: 'HongBer',
            demo: false,
            technologies: ['PHP', 'MySQL'],
            description: "광고주와 사용자 사이의 원활한 광고 매칭을 제공하는 웹을 만들고자 하여 제작",
            categories: [
                'done',
                'web'
            ]
        },
        {
            image: 'https://opengraph.githubassets.com/1/daelimfestival/daelimfestival_back',
            link: 'https://github.com/daelimfestival/daelimfestival_back',
            title: 'daelimfestival',
            demo: false,
            technologies: ['PHP', 'MySQL'],
            description: "서울 대학교 축제 사이트와 유사한 형태로 재학중이던 대림대학교를 배경으로하여 제작",
            categories: [
                'done',
                'web'
            ]
        },
        {
            image: 'https://opengraph.githubassets.com/1/PlanVerse/pms-back',
            link: 'https://github.com/PlanVerse/pms-back',
            title: 'PlanVerse server',
            demo: false,
            technologies: ['Kotlin', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Redis'],
            description: "PMS - Project Management System",
            categories: [
                'progress',
                'web',
                'system'
            ]
        },
        {
            image: 'https://opengraph.githubassets.com/1/PlanVerse/pms-front',
            link: 'https://github.com/PlanVerse/pms-front',
            title: 'PlanVerse ui',
            demo: false,
            technologies: ['NextJs', 'React18', 'tailwindcss', 'Shadcn'],
            description: "PMS - Project Management System",
            categories: [
                'progress',
                'web',
                'system'
            ]
        },
    ]

    let projects;
    if (slug === 'all') {
        projects = projects_obj.map(project_mapper);
    } else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
            <div class="card radius shadowDepth1">
                ${project.image ?
        `<div class="card__image border-tlr-radius">
                        <a href="${project.link}" target="_blank">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius" decoding="async" loading="lazy" />
                        </a>
                    </div>`
        : ''}

        
                <div class="card__content card__padding">
                    <article class="card__article">
                        <h2><a href="${project.link}" target="_blank">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description}<br />${project.demo ? `<a href="${project.demo}" target="_blank"><b>Demo</b></a>` : ''}</p>
                    </article>

                    <div class="card__meta">
                        ${project.technologies.map(tech =>
        `<div class="project-technology paragraph-text-normal">${tech}</div>`
    ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
