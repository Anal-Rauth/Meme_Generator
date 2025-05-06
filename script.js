const generateBtn = document.querySelector('.generate-btn')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('.meme-image')
const authorName = document.querySelector('.author span')

function getMeme() {
    fetch('https://meme-api.com/gimme/wholesomememes')
        .then((res) => res.json())
        .then((data) => {
            const { author, title, url} = data
            memeTitle.innerText = title
            memeImage.src = url
            authorName.innerText = author
        })
}

getMeme()
generateBtn.addEventListener('click', () => {
    getMeme()
})