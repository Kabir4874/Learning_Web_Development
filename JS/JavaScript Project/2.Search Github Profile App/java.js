

const url= "https://api.github.com/users";

const searchInputEl= document.querySelector("#searchInput");

const searchBtn= document.querySelector("#searchBtn");

const profileContainerEl= document.querySelector("#profileContainer");

const loadingEl= document.querySelector("#loading");


const generateProfile=(profile)=>{
    
    return `
    <div class="profile-box">
    <div class="top-section">
      <div class="left">
        <div class="avatar">
          <img alt="avatar" src="${profile.avatar_url}" />
        </div>
        <div class="self">
          <h1>${profile.name}</h1>
          <h1>@${profile.login}</h1>
        </div>
      </div>
      <a href="${profile.html_url}" target="_black">
      <button class="primary-btn">Check Profile</button>
      </a>
    </div>
 
    <div class="about">
      <h2>About</h2>
      <p>
      ${profile.bio}
      </p>
    </div>
    <div class="status">
      <div class="status-item">
        <h3>Followers</h3>
        <p>${profile.followers}</p>
      </div>
      <div class="status-item">
        <h3>Followings</h3>
        <p>${profile.following}</p>
      </div>
      <div class="status-item">
        <h3>Repos</h3>
        <p>${profile.public_repos}</p>
      </div>
    </div>
  </div>
    `;
    
}







const fetchProfile= async()=>{


    const username= searchInputEl.value;

    try{
        const res= await fetch(`${url}/${username}`);
        const data= await res.json();
        loadingEl.innerText="Loading";
        loadingEl.style.color="black";
        if(data.id){
            profileContainerEl.style.display="block";
            loadingEl.innerHTML="";
            profileContainerEl.innerHTML= generateProfile(data);
        }else{
            profileContainerEl.style.display="none";
            loadingEl.innerText=data.message;
            loadingEl.style.color="red";
        }

        console.log(data);
    }catch(error){
        console.log(error);
    }
}
searchBtn.addEventListener("click", fetchProfile);