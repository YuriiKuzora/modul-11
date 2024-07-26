import"./assets/modulepreload-polyfill-3cfb730f.js";function i(t){return fetch(`https://pokeapi.co/api/v2/pokemon/${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const l=document.querySelector(".card-container"),d=document.querySelector(".search-form");d.addEventListener("submit",u);function u(t){t.preventDefault();const e=t.currentTarget,r=e.elements.query.value.toLowerCase();i(r).then(p).catch(m).finally(()=>e.reset())}function p({name:t,sprites:e,weight:r,height:c,abilities:o}){const a=o.map(({ability:s})=>`<li class="list-group-item">${s.name}</li>`).join(""),n=`
      <div class="card">
        <div class="card-img-top">
          <img src="${e.front_default}" alt="${t}" />
        </div>
        <div class="card-body">
          <h2 class="card-title">Ім'я: ${t}</h2>
          <p class="card-text">Вага: ${r}</p>
          <p class="card-text">Зростання: ${c}</p>
          <p class="card-text"><b>Уміння</b></p>
          <ul class="list-group">
            ${a}
          </ul>
        </div>
      </div>`;l.innerHTML=n}function m(t){alert("Упс, щось пішло не так і ми не знайшли вашого покемона!")}
//# sourceMappingURL=commonHelpers8.js.map
