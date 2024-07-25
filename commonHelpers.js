import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".btn"),o=document.querySelector(".user-list");r.addEventListener("click",()=>{c().then(e=>s(e)).catch(e=>console.log(e))});function c(){return fetch("https://jsonplaceholder.typicode.com/users").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function s(e){const n=e.map(t=>`<li class="user-item">
	          <p><b>Name</b>: ${t.name}</p>
	          <p><b>Email</b>: ${t.email}</p>
	          <p><b>Company</b>: ${t.company.name}</p>
	        </li>`).join("");o.insertAdjacentHTML("beforeend",n)}
//# sourceMappingURL=commonHelpers.js.map
