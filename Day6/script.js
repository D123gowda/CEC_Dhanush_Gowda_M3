const likebutton = document.querySelector('.btn-like');
const unlikebutton = document.querySelector('.btn-unlike');

const likecount = document.querySelector('.like-count');

let likes = 0;
likebutton.addEventListener('click', () => {
    console.log('Like button cliked');

    likes++;
    likecount.innerHTML = `${likes}Likes` ;
});
unlikebutton.addEventListener('click', () => {
    console.log('Unlike button cliked');

   if (likes > 0) {
    likes--;
       likecount.innerHTML = `${unlikes}Unlikes` ;
   }
});