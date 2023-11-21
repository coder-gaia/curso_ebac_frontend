document.addEventListener('DOMContentLoaded', ()=>{
    const nameEl = document.querySelector('#name')
    const userEl = document.querySelector('#user')
    const avatarEl = document.querySelector('#avatar')
    const reposEl = document.querySelector('#repos')
    const followersEl = document.querySelector('#followers')
    const followingEl = document.querySelector('#following')
    const linkEl = document.querySelector('#link')

    fetch('https://api.github.com/users/coder-gaia')
    .then( (res)=>{
        return res.json()
    })
    .then( (json)=>{
        nameEl.innerText = json.name
        userEl.innerText = json.login
        reposEl.innerText =json.public_repos
        avatarEl.src = json.avatar_url
        followingEl.innerText = json.following
        followersEl.innerText = json.followers
        linkEl.href = json.html_url
    })
})