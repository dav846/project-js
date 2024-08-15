
// const url_remotive = "https://remotive.com/api/remote-jobs?limit=50"
const url_remotive = "api/remotive.json"
const url_categories = "https://remotive.com/api/remote-jobs/categories"
const board = document.querySelector("#board")
const Categories = document.querySelector("#Categories")

async function allRemotive() {
    board.innerHTML = "";
    let allWork = [];

    try {
        board.innerHTML = `
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        `
        const response = await fetch(url_remotive);
        const data = await response.json();
        board.innerHTML = "";
        allWork = data.jobs

        allWork.forEach((jobs) => {
            board.innerHTML += `
    <div class="card" style="width: 25rem;">
    <h5 class="card-title text-center">Company Name: ${jobs.company_name}</h5>
    <div class="text-center">
    <img src="${jobs.company_logo}" class="card-img-top text-center w-50" alt="...">
    </div>
  <div class="card-body">
    <h3 class="card-title text-center">${jobs.category}</h3>
    </div>
    <div class="container mt-4">
  <div class="row">
    <div class="col-12">
      <div class="overflow-auto" style="max-height: 200px;">
<p class="card-text">${jobs.description}</p>    
      </div>
    </div>
  </div>
</div>
    <div class="card-body d-flex justify-content-around">
   <button dir="rtl" type="button" class="btn btn-danger bi bi-heart">Remove </button>
<a href="${jobs.url}" class="btn btn-success">See this JOB</a>    </div>
    </div>` });
    
} catch (error) {
    console.log(error)
}

}

allJobs.addEventListener("click", () => allRemotive())

async function categories() {
    
    let category = []
    
    try {
        const response = await fetch(url_categories);
        const data = await response.json();
        category = data.jobs
        
        category.forEach((categori) => {
            Categories.innerHTML += `<li onclick="getCategori()" value="${categori.name}">${categori.name}</li>`
        })
    } catch (error) {
        console.log(error)
    }
    
}
  categories() ;

async function getCategori() {
    board.innerHTML = "";

    let allWork = [];
    try {
        const response = await fetch(url_remotive);
        const data = await response.json();

        allWork = data.jobs

        const categoriValue = Categories.value;

        const filterCategori = allWork.filter((categori) => categori.category === categoriValue)

        filterCategori.forEach((jobs) => {
            board.innerHTML += `
    <div class="card" style="width: 25rem;">
    <h5 class="card-title text-center">Company Name: ${jobs.company_name}</h5>
    <div class="text-center">
    <img src="${jobs.company_logo}" class="card-img-top text-center w-50" alt="...">
    </div>
  <div class="card-body">
    <h3 class="card-title text-center">${jobs.category}</h3>
    </div>
    <div class="container mt-4">
  <div class="row">
    <div class="col-12">
      <div class="overflow-auto" style="max-height: 200px;">
<p class="card-text">${jobs.description}</p>    
      </div>
    </div>
  </div>
</div>
    <div class="card-body d-flex justify-content-around">
   <button dir="rtl" type="button" class="btn btn-danger bi bi-heart">Remove </button>
<button type="button" class="btn btn-success">See this JOB</button>    </div>
    </div>` });

    } catch (error) {
        console.log(error)
    }
}
console.log(getCategori())