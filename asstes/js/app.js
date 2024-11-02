let partners = document.getElementById('partners')
let imgs = document.querySelectorAll('.logos img')




let projectContainer = document.querySelector('.projects')
projectContainer.innerHTML = '';

let projects = [
    {
        name: 'منصة بيزنس',
        view: '300',
        img : 'https://wrapbootstrap.com/assets/items/thumb/54c1ab5a1d4b74c01e67e79b93ae1773805969726322be56c88e11c6bfec7d79.webp?v=1716120036',
        link: 'https://facebook.com'
    },
    {
        name: 'منصة مانستري',
        view: '200',
        img : 'https://w3layouts.com/wp-content/uploads/2020/06/mastery.jpg',
        link: 'https://x.com'
    },
    {
        name: 'موقع بورتو',
        view: '400',
        img : 'https://themefisher.com/blog/porto-it.webp',
        link: 'https://pinterst.com'
    },
    {
        name: 'منصة ليفيرج',
        view: '500',
        img : 'https://www.sliderrevolution.com/wp-content/uploads/2021/11/Leverage.jpg',
        link: 'https://youtube.com'
    },
    {
        name: 'منصة ميكورج',
        view: '999+',
        img : 'https://woovina.com/images/2022/03/31/mekog-cover.png',
        link: 'https://whatsapp.com'
    },
    {
        name: 'نظام حسابات سكاي داش',
        view: '3',
        img : 'https://themewagon.com/wp-content/uploads/2021/08/skydash-1200x736.png',
        link: 'https://hash-dev.online'
    },
]
projects.forEach(project => {
    Projects = `
            <div onclick="window.location.href='${project.link}'" class="project-box">
                <img src="${project.img}" alt="Project">
                <div class="project-details">
                    <div class="project-titles">
                        <h2>${project.name}</h2>
                        <div class="i">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            <p>${project.view}</p>
                        </div>
                    </div>
                </div>
            </div>
    
    `
    projectContainer.innerHTML += Projects
})
