import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n=document.querySelector(".btn"),c=document.querySelector(".user-list");n.addEventListener("click",()=>{s().then(t=>o(t)).catch(t=>console.log(t))});function s(){const r=`https://jsonplaceholder.typicode.com/users?${new URLSearchParams({_limit:3,_sort:"name"})}`;return fetch(r).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function o(t){const r=t.map(e=>`<li class="user-item">
	          <p><b>Name</b>: ${e.name}</p>
	          <p><b>Email</b>: ${e.email}</p>
	          <p><b>Company</b>: ${e.company.name}</p>
	        </li>`).join("");c.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=commonHelpers2.js.map
