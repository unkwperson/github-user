
document.getElementById('btn').onclick = () => getUser()

async function getUser() {
    
    document.getElementById('main').style.display = 'flex'

    const name = document.getElementById('user').value

    axios.get(`https://api.github.com/users/${name}`)

    .then(res => {
        const data = res.data

        document.getElementById('graph').style.display = 'flex'

        document.getElementById('error').style.display = 'none'

        document.getElementById('avatar').src = data.avatar_url

        document.getElementById('name').innerHTML = data.name

        document.getElementById('url').href = data.html_url

        document.getElementById('bio').innerHTML = data.bio
        
        document.getElementById('repo').innerHTML = `👉 Repositories: ${data.public_repos}`
                
        document.getElementById('followers').innerHTML = `👉 Followers: ${data.followers}`
                        
        document.getElementById('following').innerHTML = `👉 Following: ${data.following}`

        if(data.bio == null) {
            return document.getElementById('bio').innerHTML = 'Bio Not Found'
        }

        console.log(data)
    })
    .catch(err => {
        const error = err.response.data

        if (error) {
            document.getElementById('graph').style.display = 'none'

            document.getElementById('error').style.display = 'block'
            console.log('Not Found')
            
        }
    })
}
